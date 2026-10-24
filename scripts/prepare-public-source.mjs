import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const target = path.join(root, 'output/public-source');
// An explicit allowlist prevents local captures, research, and Git history from leaking.
const entries = [
  'README.md', '.gitignore', 'package.json', 'bun.lock', 'tsconfig.json',
  'open-slide.config.ts', 'docs/presentation-script.md', 'docs/html-export.md',
  'scripts', 'slides/design-system-beyond', 'public',
];
await fs.mkdir(path.dirname(target), { recursive: true });
try {
  await fs.mkdir(target);
} catch (error) {
  if (error.code === 'EEXIST') throw new Error('output/public-source already exists. Review or move it before preparing a new snapshot.');
  throw error;
}
for (const entry of entries) {
  const destination = path.join(target, entry);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.cp(path.join(root, entry), destination, { recursive: true, dereference: false });
}
console.log(`Prepared public source without Git history: ${target}`);
console.log('No repository was created, published, or pushed.');
