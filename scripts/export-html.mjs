// Run with Bun: it transpiles the temporary React/TypeScript module without a new dependency.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import crypto from 'node:crypto';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readPresentation } from './read-presentation.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const sourcePath = path.join(root, 'slides/design-system-beyond/index.tsx');
const assetsDir = path.join(root, 'slides/design-system-beyond/assets');
const publicMode = process.argv.includes('--public');
const outputArg = process.argv.slice(2).find(arg => !arg.startsWith('--'));
const target = path.resolve(root, outputArg ?? (publicMode ? 'output/public/index.html' : 'output/html/feconf-2026-standalone.html'));
const mime = {
  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp',
  gif: 'image/gif', svg: 'image/svg+xml', mp4: 'video/mp4', webm: 'video/webm',
  woff2: 'font/woff2',
};
const original = await fs.readFile(sourcePath, 'utf8');
const source = original
  .replace(/import (\w+) from ["']\.\/assets\/([^"']+)["'];/g,
    (_, name, file) => `const ${name}=${JSON.stringify('deck-asset:' + file)};`)
  .replace("import { useIsActivePage } from '@open-slide/core';", "import { useIsActivePage } from './active-page';");

await fs.mkdir(path.dirname(target), { recursive: true });
// Keep the temporary module under the repo so React resolves from its existing node_modules.
const scratchRoot = path.join(root, 'output/html');
await fs.mkdir(scratchRoot, { recursive: true });
const scratch = await fs.mkdtemp(path.join(scratchRoot, '.export-'));
try {
  const modulePath = path.join(scratch, 'deck.tsx');
  await fs.writeFile(path.join(scratch, 'active-page.ts'), `
import { createContext, useContext, useSyncExternalStore } from 'react';
export const PageIndex = createContext(-1);
let activeIndex = 0;
const listeners = new Set<() => void>();
if (typeof window !== 'undefined') window.__setDeckActivePage = (index: number) => {
  activeIndex = index; listeners.forEach(fn => fn());
};
const subscribe = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn); }; };
export function useIsActivePage() {
  const index = useContext(PageIndex);
  return useSyncExternalStore(subscribe, () => activeIndex, () => -2) === index;
}
`);
  await fs.writeFile(modulePath, source);
  const deck = await import(pathToFileURL(modulePath).href);
  const pages = deck.default.map(page => renderToStaticMarkup(React.createElement(page)));
  if (!pages.length || deck.notes?.length !== pages.length) {
    throw new Error('Every exported page must have a speaker note entry.');
  }
  const ids = original.match(/export default \[([^\]]+)\] satisfies Page\[\]/)[1].split(',').map(id => id.trim());
  const reading = await readPresentation(path.join(root, 'docs/presentation-script.md'), ids, deck.notes);
  const cache = new Map();
  async function asset(file) {
    if (!cache.has(file)) {
      const type = mime[path.extname(file).slice(1)];
      if (!type) throw new Error(`Unsupported embedded media type: ${file}`);
      const bytes = await fs.readFile(path.join(assetsDir, file));
      cache.set(file, `data:${type};base64,${bytes.toString('base64')}`);
    }
    return cache.get(file);
  }
  // Run the original components in the browser, including font registration and effects.
  // Static markup alone cannot reproduce Canvas/WebGL or React-managed media.
  await fs.writeFile(path.join(scratch, 'browser-deck.tsx'), source.replace(/"deck-asset:([^"]+)"/g, (_, file) => `globalThis.__deckAsset(${JSON.stringify(file)})`));
  const runtime = await fs.readFile(new URL('./presenter-runtime.js', import.meta.url), 'utf8');
  await fs.writeFile(path.join(scratch, 'entry.tsx'), `
import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import pages from './browser-deck';
import { PageIndex } from './active-page';
flushSync(() => {
  pages.forEach((Page, index) => {
    createRoot(document.querySelectorAll('.page')[index]).render(
      <PageIndex.Provider value={index}><Page/></PageIndex.Provider>
    );
  });
});
${runtime}
document.fonts.ready.then(() => { document.documentElement.dataset.exportReady = 'true'; });
`);
  const build = await Bun.build({
    entrypoints: [path.join(scratch, 'entry.tsx')], target: 'browser',
    format: 'iife', minify: true, define: { 'process.env.NODE_ENV': '"production"' },
  });
  if (!build.success) throw new AggregateError(build.logs, 'Browser export bundle failed');
  const script = await build.outputs[0].text();
  const embedded = {};
  for (const match of script.matchAll(/__deckAsset\("([^"<>]+)"\)/g)) {
    const file = match[1];
    if (publicMode) {
      await fs.mkdir(path.join(path.dirname(target), 'assets'), { recursive: true });
      await fs.copyFile(path.join(assetsDir, file), path.join(path.dirname(target), 'assets', file));
      embedded[file] = './assets/' + encodeURIComponent(file);
    } else embedded[file] = await asset(file);
  }
  if (script.includes('deck-asset:')) throw new Error('Unresolved bundled asset');
  const bootstrap = publicMode ? `
const assetPaths = JSON.parse(document.getElementById('embedded-assets').textContent);
globalThis.__deckAsset = file => new URL(assetPaths[file], location.href).href;
` : `
const embeddedAssets = JSON.parse(document.getElementById('embedded-assets').textContent);
const assetURLs = new Map();
globalThis.__deckAsset = file => {
  if (!assetURLs.has(file)) {
    const data = embeddedAssets[file], comma = data.indexOf(',');
    const bytes = Uint8Array.from(atob(data.slice(comma + 1)), c => c.charCodeAt(0));
    assetURLs.set(file, URL.createObjectURL(new Blob([bytes], {type:data.slice(5,data.indexOf(';'))})));
    delete embeddedAssets[file];
  }
  return assetURLs.get(file);
};`;
  const preflight = await fs.readFile(fileURLToPath(import.meta.resolve('tailwindcss/preflight.css')), 'utf8');
  const css = `${preflight}html{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-feature-settings:'ss01' on,'cv11' on,'calt' on}body{font-feature-settings:'ss01' on,'cv11' on,'calt' on,'tnum' off;letter-spacing:-.005em}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#171717}.stage{position:fixed;inset:0;display:flex;align-items:center;justify-content:center}.frame{width:1920px;height:1080px;flex-shrink:0;position:relative;transform-origin:center center}.page{position:absolute;inset:0}.page[hidden]{display:none!important}`;
  const safeJson = value => JSON.stringify(value).replaceAll('<', '\\u003c');
  const html = `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FECONF 2026 · AI로 디자인하기 · 정현수</title><link rel="icon" href="data:,"><style>${css}</style></head><body><div class="stage"><main class="frame">${pages.map((_, i) => `<section class="page" aria-label="장표 ${i + 1}"${i ? ' hidden' : ''}></section>`).join('')}</main></div><script id="speaker-notes" type="application/json">${safeJson(deck.notes)}</script><script id="reading-data" type="application/json">${safeJson(reading)}</script><script id="embedded-assets" type="application/json">${safeJson(embedded)}</script><script>${bootstrap}\n${script.replace(/<\/script/gi, '<\\/script')}</script></body></html>`;
  await fs.writeFile(target, html);
  const verification = {
    pages: pages.length, notes: deck.notes.length, presenterMode: true,
    embeddedUniqueAssets: publicMode ? 0 : Object.keys(embedded).length, videos: (pages.join('').match(/<video/g) ?? []).length,
    reactRuntime: true,
    bytes: Buffer.byteLength(html), externalAssetReferences: publicMode ? Object.keys(embedded).length : 0,
    publicMode, referencePages: reading.flatMap((page, i) => page.links.length ? [i + 1] : []),
    sourceSha256: crypto.createHash('sha256').update(original).digest('hex'),
  };
  await fs.writeFile(target + '.verification.json', JSON.stringify(verification, null, 2) + '\n');
  console.log(JSON.stringify({ target, ...verification }, null, 2));
} finally {
  await fs.rm(scratch, { recursive: true, force: true });
}
