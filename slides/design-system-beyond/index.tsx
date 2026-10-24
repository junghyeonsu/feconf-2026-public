import designLanguageCode from './assets/design-language-code.png';
import seedPatterns from './assets/seed-patterns.png';
import seedCareerPattern from './assets/seed-career-pattern.png';
import seedButtonStates from './assets/seed-button-states.png';
import seedComponentOverview from './assets/seed-component-overview.png';
import emperorGalleryFull from './assets/emperor-gallery-full.png';
import e2eArmy from './assets/e2e-army.png';
import emperorCollection from './assets/emperor-collection.gif';
import emperorLargeText from './assets/emperor-large-text.png';
import emperorDarkGallery from './assets/emperor-dark-gallery.png';
import emperorScreenMap from './assets/emperor-screen-map.png';
import figmaScreens from './assets/figma-screens.png';
import tldrawIntent from './assets/tldraw-intent.gif';
import stitchStreaming from './assets/stitch-streaming.gif';
import stitchVariants from './assets/stitch-design-variants.gif';
import elyxDemo from './assets/elyx-diff-demo.mp4';
import elyxPoster from './assets/elyx-diff-poster.jpg';
import font from './assets/art-pretendard-regular.woff2';
import medium from './assets/art-pretendard-medium.woff2';
import logo from './assets/art-feconf-logo.png';
import closingPhoto from './assets/art-closing-decomposition.png';
import gallery from './assets/art-emperor-gallery.png';
import intentPhoto from './assets/art-intent-v2.png';
import contextPhoto from './assets/context-library-select.png';
import contextStockPhoto from './assets/context-library-stock.png';
import contextConsultPhoto from './assets/context-library-consult.png';
import referencePhoto from './assets/art-reference-v2.png';
import systemPhoto from './assets/art-system-stamp.png';
import languagePhoto from './assets/art-language-v2.png';
import evaluationPhoto from './assets/art-evaluation-leaking-cup.png';
import kraftShot from './assets/kraft-review-2026-10-22.png';
// Applied from the approved 71-page review on 2026-10-22.
// Review IDs stay stable; the default export defines the actual presentation order.
import { useEffect, useRef } from 'react';
import type { ReactNode, VideoHTMLAttributes } from 'react';
import { useIsActivePage } from '@open-slide/core';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import asset0 from "./assets/profile-junghyunsoo.png";
import asset1 from "./assets/research-lovable-plan-poster.png";
import asset2 from "./assets/logo-lovable-color.png";
import asset3 from "./assets/gallery-v0.mp4";
import asset4 from "./assets/gallery-v0-poster.jpg";
import asset5 from "./assets/logo-v0.svg";
import asset6 from "./assets/research-stitch-streaming.mp4";
import asset7 from "./assets/research-stitch-steering-poster.jpg";
import asset8 from "./assets/logo-stitch.png";
import asset9 from "./assets/gallery-pencil.mp4";
import asset10 from "./assets/gallery-pencil-poster.webp";
import asset11 from "./assets/logo-pencil.svg";
import asset12 from "./assets/gallery-claude.webm";
import asset13 from "./assets/product-claude-design.jpg";
import asset14 from "./assets/logo-claude.png";
import asset15 from "./assets/gallery-open-design.png";
import asset16 from "./assets/logo-open-design.svg";
import asset17 from "./assets/gallery-paper.png";
import asset18 from "./assets/logo-paper.png";
import asset19 from "./assets/elyx-selection.png";
import asset20 from "./assets/logo-elyx.webp";
import asset21 from "./assets/gallery-figma-make.png";
import asset22 from "./assets/logo-figma.svg";
import asset23 from "./assets/intent.png";
import asset24 from "./assets/lovable-clarifying-questions.jpg";
import asset25 from "./assets/agentation-demo.gif";
import asset26 from "./assets/intent-drawing-streaming.png";
import asset27 from "./assets/context.png";
import asset28 from "./assets/lovable-knowledge-official-2025.png";
import asset29 from "./assets/v0-instructions.png";
import asset30 from "./assets/research-pencil-canvas-selection.png";
import asset31 from "./assets/reference.png";
import asset32 from "./assets/atlas-gallery.png";
import asset33 from "./assets/emperor-large-type-2026-10-21.png";
import asset34 from "./assets/emperor-dark-mode-2026-10-21.png";
import asset35 from "./assets/emperor-app-map-2026-10-21.png";
import asset36 from "./assets/design-system.png";
import asset37 from "./assets/research-figma-make-kit.png";
import asset38 from "./assets/v0-design-system-import.png";
import asset39 from "./assets/pencil-design-system-demo.webp";
import asset40 from "./assets/design-language-2026-10-22.png";
import asset41 from "./assets/figma-design-layers-official.png";
import asset42 from "./assets/elyx-og-2026-10-22.png";
import asset43 from "./assets/elyx-file-tree-2026-10-22.png";
import asset44 from "./assets/elyx-language-source-2026-10-22.png";
import asset45 from "./assets/elyx-github-text-diff-2026-10-22.png";
import asset46 from "./assets/elyx-github-visual-review-2026-10-22.png";
import asset47 from "./assets/evaluation.png";
import asset48 from "./assets/closing-decomposition-2026-10-22.png";
import asset49 from "./assets/pretendard-regular.woff2";
export const design: DesignSystem = {
  palette: {
    bg: '#ffffff',
    text: '#171717',
    accent: '#ff6600'
  },
  fonts: {
    display: 'FECONF Editorial, Pretendard, sans-serif',
    body: 'FECONF Editorial, Pretendard, sans-serif'
  },
  typeScale: {
    hero: 144,
    body: 38
  },
  radius: 0
};
export const meta: SlideMeta = {
  title: '당근다운 화면을 — AI로 디자인하기 (최종)',
  createdAt: '2026-09-28T00:00:00.000Z'
};
export const transition: SlideTransition = {
  duration: 320,
  exit: {
    duration: 200,
    easing: 'cubic-bezier(0.4,0,1,1)',
    keyframes: [{
      opacity: 1
    }, {
      opacity: 0
    }]
  },
  enter: {
    duration: 320,
    delay: 70,
    easing: 'cubic-bezier(0,0,0.2,1)',
    keyframes: [{
      opacity: 0
    }, {
      opacity: 1
    }]
  }
};
const slideCss = ".approved-deck{position:relative;width:1920px;height:1080px;overflow:hidden;font-family:'FECONF Editorial',sans-serif;--osd-bg:#fff;--osd-text:#171717;--osd-font-body:'FECONF Editorial',sans-serif;--osd-font-display:'FECONF Editorial',sans-serif;--osd-size-hero:144px;--osd-size-body:38px}.approved-deck,.approved-deck *{box-sizing:border-box}\n\n\n\n\n\n\n.approved-deck .proposal{width:1920px;height:1080px;position:relative;overflow:hidden;background:#fff;color:#171717}\n.approved-deck .proposal.dark{background:#171717;color:#fff}\n.approved-deck .proposal h1,.approved-deck .proposal h2,.approved-deck .proposal h3,.approved-deck .proposal p{margin:0;font-weight:400;word-break:keep-all}\n.approved-deck .proposal h1,.approved-deck .proposal h2{letter-spacing:-.045em;line-height:1.25}\n.approved-deck .proposal .headline{position:absolute;left:80px;top:80px;right:80px;font-size:82px}\n.approved-deck .proposal .statement{position:absolute;left:80px;right:120px;top:50%;transform:translateY(-50%);font-size:144px;line-height:1.35}\n.approved-deck .proposal .side-title{position:absolute;top:80px;width:470px;font-size:84px;line-height:1.35}\n.approved-deck .proposal .shot{position:absolute;object-fit:contain;object-position:left top;width:1240px;height:920px;top:80px}\n.approved-deck .proposal .side-detail{position:absolute;top:700px;width:470px;font-size:38px;line-height:1.6;color:#ccffa3}\n.approved-deck .slot{position:absolute;border:2px dashed #ccffa3;background:#222;color:#ccffa3;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:28px;padding:50px;text-align:center;font-size:42px;line-height:1.5}\n.approved-deck .slot small{font-size:28px;max-width:900px;color:#fff}\n.approved-deck .rows{position:absolute;left:80px;right:80px;top:320px}\n.approved-deck .r{padding:36px 0;border-top:1px solid #17171755;display:flex;gap:70px;align-items:baseline}\n.approved-deck .r .num{font-size:36px;width:80px;color:#777}.approved-deck .r h3{font-size:58px;letter-spacing:-.035em}.approved-deck .r p{font-size:34px;margin-top:20px;color:#555}\n.approved-deck .flow{position:absolute;left:80px;right:80px;top:430px;display:flex;align-items:center;justify-content:space-between;font-size:64px;gap:45px}\n.approved-deck .flow .arrow{font-size:55px;color:#777}.approved-deck .foot{position:absolute;left:80px;right:80px;top:720px;font-size:40px;line-height:1.7}\n\n\n.scene-frame{container-type:inline-size;width:100%;aspect-ratio:16/9;background:#171717;position:relative;overflow:hidden;font-family:'FECONF Editorial',sans-serif;color:#fff}\n.scene-frame .scene-heading{position:absolute;z-index:1;color:#fff;font-family:'FECONF Editorial',sans-serif;font-size:4.166667cqw;line-height:1.22;font-weight:400;letter-spacing:-.035em;margin:0;padding:0;max-width:none;word-break:keep-all}\n.scene-frame .scene-art{position:absolute;object-fit:cover;object-position:center top;display:block;margin:0;border:0;border-radius:0}\n.scene-frame.IT .scene-heading{left:4.166667%;top:7.407407%;width:91.666667%}\n.scene-frame.IT .scene-art{left:4.166667%;top:18.518519%;width:95.94%;height:81.67%;object-position:left top}\n.scene-frame.IL .scene-heading{left:4.166667%;top:7.407407%;width:21.875%;font-size:3.958333cqw}\n.scene-frame.IL .scene-art{left:28.125%;top:7.407407%;width:71.98%;height:92.78%}\n.scene-frame.IR .scene-heading{left:76.041667%;top:7.407407%;width:19.791667%;font-size:3.958333cqw}\n.scene-frame.IR .scene-art{left:4.166667%;top:7.407407%;width:69.270833%;height:92.78%}\n\n\n.ai-talk, .ai-talk * { box-sizing: border-box; }\n.ai-talk { position: relative; isolation: isolate; width: 100%; height: 100%; background: var(--osd-bg); color: var(--osd-text); font-family: var(--osd-font-body); font-weight: 400; font-synthesis: none; overflow: hidden; }\n.ai-talk h1, .ai-talk h2, .ai-talk h3, .ai-talk p, .ai-talk figure { margin: 0; }\n.ai-talk h1, .ai-talk h2 { font-weight: 400; letter-spacing: -0.045em; line-height: 1.2; word-break: keep-all; }\n.ai-talk h1 { font-size: var(--osd-size-hero); }\n.ai-talk h2 { font-size: 82px; }\n.ai-talk h3 { font-size: 44px; font-weight: 400; letter-spacing: -0.035em; }\n.ai-talk button { font: inherit; cursor: pointer; }\n.ai-talk button:focus-visible, .ai-talk video:focus-visible { outline: 4px solid #ff6600; outline-offset: 8px; }\n.ai-talk .content { position: relative; z-index: 1; padding: 80px; width: 100%; height: 100%; }\n.ai-talk .center { display: flex; flex-direction: column; justify-content: center; }\n.ai-talk .caption { font-size: 27px; line-height: 1.45; color: inherit; }\n.ai-talk .label { font-size: 32px; color: inherit; }\n.ai-talk .serif { font-family: inherit; font-weight: 400; }\n.ai-talk .rule { border-top: 1px solid #17171740; }\n.ai-talk .reveal { animation: ai-talk-reveal 850ms cubic-bezier(.16,1,.3,1) both; }\n.ai-talk .still .reveal { animation: none; }\n.ai-talk .control { background: transparent; color: #171717; border: 0; border-bottom: 1px solid #17171740; padding: 10px 0; font-size: 28px; }\n.ai-talk.dark .label, .ai-talk.dark .caption { color: #ffffff; }\n.ai-talk.dark { --osd-text: #ffffff; }\n.ai-talk[aria-label=\"여러 AI 디자인 도구\"] { font-family: Pretendard, -apple-system, BlinkMacSystemFont, sans-serif; background: #f8f8f5; }\n.ai-talk .media { display: block; width: 100%; height: 100%; object-fit: contain; }\n.ai-talk .chip { padding: 12px 20px; border: 1px solid #17171740; border-radius: 100px; font-size: 27px; }\n@keyframes ai-talk-reveal { from {opacity:0; transform:translateY(10px)} to {opacity:1;transform:translateY(0)} }\n@media (prefers-reduced-motion: reduce) { .ai-talk *, .ai-talk *::before, .ai-talk *::after { animation: none !important; transition: none !important; } }\n\n\n.feconf-brand, .feconf-brand * { box-sizing: border-box; }\n.feconf-brand { position: relative; isolation: isolate; width: 100%; height: 100%; overflow: hidden; font-family: 'FECONF Editorial', Pretendard, sans-serif; font-weight: 400; font-synthesis: none; }\n.feconf-brand h1, .feconf-brand h2, .feconf-brand h3, .feconf-brand p, .feconf-brand figure { margin: 0; font-weight: 400; }\n.feconf-brand h1, .feconf-brand h2, .feconf-brand h3 { letter-spacing: -.045em; line-height: 1.2; word-break: keep-all; }\n.feconf-brand p { line-height: 1.55; word-break: keep-all; }\n\n.approved-deck .reveal{animation:none}";
const bleedAncestors = new WeakMap<HTMLElement, {count:number;overflow:string}>();
function Slide({
  reviewId,
  children
}: {
  reviewId: string;
  children: ReactNode;
}) {
  const deck = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = deck.current;
    const canvas = el?.closest<HTMLElement>('[data-osd-canvas]');
    if (!el || !canvas) return;
    // Only the presentation player has a fixed viewport ancestor. Editor and exports stay 16:9.
    const ancestors: HTMLElement[] = [];
    let parent = el.parentElement;
    while (parent && getComputedStyle(parent).position !== 'fixed') {
      ancestors.push(parent); parent = parent.parentElement;
    }
    if (!parent || !parent.classList.contains('inset-0')) return;
    const viewport = parent;
    ancestors.forEach(node => {
      const state = bleedAncestors.get(node) ?? {count:0,overflow:node.style.overflow};
      state.count++; bleedAncestors.set(node,state); node.style.overflow = 'visible';
    });
    el.dataset.presentationBleed = 'true';
    const measure = () => {
      const rect = canvas.getBoundingClientRect();
      const bounds = viewport.getBoundingClientRect();
      const scale = rect.width / 1920;
      if (!scale) return;
      el.style.setProperty('--bleed-x', `${Math.max(0,(bounds.width / scale - 1920)/2)}px`);
      el.style.setProperty('--bleed-y', `${Math.max(0,(bounds.height / scale - 1080)/2)}px`);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(viewport); observer.observe(canvas); measure();
    return () => {
      observer.disconnect();
      ancestors.forEach(node => {
        const state = bleedAncestors.get(node);
        if (state && --state.count === 0) { node.style.overflow = state.overflow; bleedAncestors.delete(node); }
      });
      delete el.dataset.presentationBleed;
    };
  }, []);
  return <div ref={deck} className="approved-deck" data-review-id={reviewId}><style>{slideCss}{`
    .approved-deck[data-presentation-bleed]{overflow:visible}
    .approved-deck[data-presentation-bleed] > section{overflow:visible;isolation:isolate}
    .approved-deck[data-presentation-bleed] > section::before{content:"";position:absolute;inset:calc(-1 * var(--bleed-y,0px)) calc(-1 * var(--bleed-x,0px));background:inherit;z-index:-1;pointer-events:none}
    .approved-deck[data-presentation-bleed] .viewport-background{left:calc(-1 * var(--bleed-x,0px))!important;top:calc(-1 * var(--bleed-y,0px))!important;width:calc(100% + 2 * var(--bleed-x,0px))!important;height:calc(100% + 2 * var(--bleed-y,0px))!important;max-width:none}
    .approved-deck[data-presentation-bleed] .concept-background{top:calc(-1 * var(--bleed-y,0px))!important;height:calc(1080px + 2 * var(--bleed-y,0px))!important;left:calc(-1 * var(--bleed-x,0px))!important;width:calc(1260px + var(--bleed-x,0px))!important}
  `}</style>{children}</div>;
}
if (typeof document !== 'undefined') {
  const id = 'osd-webfont-design-system-beyond-brand';
  const style = document.getElementById(id) ?? document.head.appendChild(document.createElement('style'));
  style.id = id;
  style.textContent = `@font-face{font-family:'FECONF Editorial';src:url('${asset49}') format('woff2');font-weight:400;font-style:normal;font-display:swap}`;
}
function DemoVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  const active = useIsActivePage();
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (active && !reduced.matches) void video.play().catch(() => {});else video.pause();
    };
    sync();
    reduced.addEventListener('change', sync);
    return () => {
      video.pause();
      reduced.removeEventListener('change', sync);
    };
  }, [active]);
  return <video {...props} ref={ref} />;
}

if (typeof document !== 'undefined') {
  const style = document.getElementById('gradient-study-font') ?? document.head.appendChild(document.createElement('style'));
  style.id = 'gradient-study-font';
  style.textContent = `@font-face{font-family:'Gradient Study';src:url('${font}') format('woff2');font-weight:400;font-display:swap}@font-face{font-family:'Gradient Study';src:url('${medium}') format('woff2');font-weight:500;font-display:swap}`;
  document.head.appendChild(style);
}

// Original procedural study of the supplied Grainient references; no image assets.
const vertex = `attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}`;
const fragment = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float mode;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float bayer2(vec2 p){p=mod(floor(p),2.);return 2.*p.x+3.*p.y-4.*p.x*p.y;}
float bayer8(vec2 p){return (16.*bayer2(p)+4.*bayer2(floor(p/2.))+bayer2(floor(p/4.))+.5)/64.;}
void main(){
  vec2 uv=gl_FragCoord.xy/resolution;
  float t=time*.24;
  vec2 p=vec2(uv.x,1.-uv.y);
  vec2 q=p+vec2(.055*sin(t),.055*cos(t));
  vec3 color;
  if(mode<.5){
    // The same broad mesh as the orange section pages, in graphite.
    float flow=sin(q.x*5.+sin(q.y*4.+t))+cos(q.y*5.-q.x*2.-t);
    float cream=smoothstep(-.65,1.8,flow);
    color=mix(vec3(.035),vec3(.29),cream*.90);
  }else if(mode<1.5){
    // Broad overlapping colour fields, folded around a dark diagonal.
    color=vec3(.10,.18,.19);
    float teal=exp(-dot((q-vec2(.04,.1))*vec2(1.6,1.7),(q-vec2(.04,.1))*vec2(1.6,1.7)));
    float gold=exp(-dot((q-vec2(.75,.1))*vec2(1.9,2.2),(q-vec2(.75,.1))*vec2(1.9,2.2)));
    float rose=exp(-dot((q-vec2(.8,.78))*vec2(2.,2.8),(q-vec2(.8,.78))*vec2(2.,2.8)));
    float blue=exp(-dot((q-vec2(.1,.97))*vec2(2.5,3.),(q-vec2(.1,.97))*vec2(2.5,3.)));
    color+=vec3(.13,.43,.37)*teal+vec3(.55,.35,.08)*gold+vec3(.48,.08,.20)*rose+vec3(.13,.16,.43)*blue;
    float fold=exp(-pow((q.y-(.32+.32*q.x+.08*sin(q.x*5.+t)))/.18,2.));
    color*=1.-.80*fold;
    // Keep the text's centre dark, independently of slow field movement.
    color*=1.-.30*exp(-dot((p-vec2(.5,.47))*vec2(2.5,4.),(p-vec2(.5,.47))*vec2(2.5,4.)));
  }else{
    float flow=sin(q.x*5.+sin(q.y*4.+t))+cos(q.y*5.-q.x*2.-t);
    float cream=smoothstep(-.65,1.8,flow);
    color=mode<2.5
      ? mix(vec3(.92,.28,.055),vec3(1.,.73,.38),cream*.90)
      : mix(vec3(.48,.67,.32),vec3(.80,1.,.64),cream);
  }
  vec2 pixel=floor(uv*vec2(1920.,1080.));
  float ordered=bayer8(floor(pixel/2.))-.5;
  float grain=hash(floor(pixel/1.25))-.5;
  float levels=mode>1.5 ? 12. : 10.;
  color=floor(color*levels+ordered*1.15+grain*.35+.5)/levels;
  color+=grain*.065;
  gl_FragColor=vec4(clamp(color,0.,1.),1.);
}`;

function Gradient({ mode }: { mode: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const active = useIsActivePage();
  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    const gl = el.getContext('webgl', { alpha: false, antialias: false, preserveDrawingBuffer: true });
    if (!gl) { el.dataset.renderer = 'css-fallback'; return; }
    const shaders: WebGLShader[] = [];
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      shaders.push(shader);
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) ?? 'Shader compilation failed');
      return shader;
    };
    const program = gl.createProgram()!;
    let buffer: WebGLBuffer | null = null;
    let frame = 0;
    let disposed = false;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let elapsed = 0;
    let last = 0;
    let lastDraw = 0;
    const dispose = () => {
      disposed = true; cancelAnimationFrame(frame);
      if (buffer) gl.deleteBuffer(buffer);
      gl.deleteProgram(program); shaders.forEach(s => gl.deleteShader(s));
    };
    try {
      gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) ?? 'Shader link failed');
      gl.useProgram(program);
      buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.uniform1f(gl.getUniformLocation(program, 'mode'), mode);
      const time = gl.getUniformLocation(program, 'time');
      const resolution = gl.getUniformLocation(program, 'resolution');
      const draw = () => {
        gl.viewport(0, 0, el.width, el.height);
        gl.uniform2f(resolution, el.width, el.height);
        gl.uniform1f(time, elapsed);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        el.dataset.renderer = 'webgl';
        el.dataset.time = elapsed.toFixed(2);
      };
      const tick = (now: number) => {
        if (disposed) return;
        if (last) elapsed += Math.min((now-last)/1000, .1);
        last = now;
        if (now-lastDraw >= 1000/30) { draw(); lastDraw = now; }
        frame = requestAnimationFrame(tick);
      };
      const sync = () => {
        cancelAnimationFrame(frame); last = 0;
        const running = active && !reduced.matches && !document.hidden;
        el.dataset.motion = running ? 'running' : 'paused';
        draw();
        if (running) frame = requestAnimationFrame(tick);
      };
      const resize = new ResizeObserver(() => {
        const bounds = el.getBoundingClientRect();
        // Thumbnails remain cheap; active view is capped at native slide resolution.
        const scale = Math.min(1, Math.max(.15, bounds.width*(window.devicePixelRatio || 1)/1920));
        el.width = Math.round(1920*scale); el.height = Math.round(el.width * bounds.height / Math.max(1,bounds.width));
        draw();
      });
      resize.observe(el);
      reduced.addEventListener('change', sync);
      document.addEventListener('visibilitychange', sync);
      sync();
      return () => { resize.disconnect(); reduced.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync); dispose(); };
    } catch (error) {
      console.error('[gradient-study]', error);
      el.dataset.renderer = 'css-fallback'; dispose();
    }
  }, [active, mode]);
  if (!active) {
    const colors = mode === 0 ? ['#090909','#414141'] : mode === 3 ? ['#7bab52','#ccffa3'] : ['#eb470e','#ffba61'];
    return <div aria-hidden="true" style={{position:'absolute',inset:0,backgroundColor:colors[0],backgroundImage:`radial-gradient(ellipse at 10% 0%, ${colors[1]}, transparent 65%), radial-gradient(ellipse at 90% 100%, ${colors[1]}, transparent 65%)`}}>
      <div style={{position:'absolute',inset:0,opacity:.13,backgroundImage:'radial-gradient(#000 0.8px, transparent 1px)',backgroundSize:'4px 4px'}}/>
    </div>;
  }
  return <canvas className="viewport-background" ref={canvas} width={1920} height={1080} aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
}

const root = { position: 'relative', width: '100%', height: '100%', background: '#101113', color: '#fff', fontFamily: 'Gradient Study, sans-serif', fontSynthesis: 'none', textAlign: 'left' } as const;
const heading = { margin: 0, fontWeight: 500, lineHeight: 1.13, letterSpacing: '-.035em', whiteSpace: 'pre-line', wordBreak: 'keep-all', overflowWrap: 'normal' } as const;
const sectionMarks = [
<svg viewBox="0 0 200 150" aria-hidden="true" style={{width:'100%',height:'100%'}}><circle cx="100" cy="75" r="52" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="100" cy="75" r="22" fill="currentColor" /></svg>,
<svg viewBox="0 0 200 150" aria-hidden="true" style={{width:'100%',height:'100%'}}><rect x="29" y="21" width="102" height="108" rx="51" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="75" y="21" width="102" height="108" rx="51" fill="currentColor" /></svg>,
<svg viewBox="0 0 200 150" aria-hidden="true" style={{width:'100%',height:'100%'}}><rect x="26" y="25" width="38" height="44" rx="10" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="80" y="25" width="38" height="44" rx="10" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="134" y="25" width="38" height="44" rx="10" fill="currentColor" /><rect x="26" y="81" width="38" height="44" rx="10" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="80" y="81" width="38" height="44" rx="10" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="134" y="81" width="38" height="44" rx="10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>,
<svg viewBox="0 0 200 150" aria-hidden="true" style={{width:'100%',height:'100%'}}><rect x="46" y="21" width="48" height="48" rx="13" fill="currentColor" /><rect x="106" y="21" width="48" height="48" rx="13" fill="currentColor" /><rect x="46" y="81" width="48" height="48" rx="13" fill="currentColor" /><rect x="106" y="81" width="48" height="48" rx="13" fill="currentColor" /></svg>,
<span style={{display:'flex',width:'100%',height:'100%',alignItems:'center',justifyContent:'center',fontSize:112,fontWeight:400,letterSpacing:'-.06em',lineHeight:1}}>Aa</span>,
<svg viewBox="0 0 200 150" aria-hidden="true" style={{width:'100%',height:'100%'}}><rect x="30" y="23" width="104" height="104" rx="28" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="70" y="23" width="104" height="104" rx="28" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M70 49q0-26 28-26h8q28 0 28 26v52q0 26-28 26h-8q-28 0-28-26z" fill="currentColor" /></svg>
];
function Section({title, number}: {title:string;number:string}) {
  return <section aria-label={`${number} ${title}`} style={{...root,color:'#182314'}}>
    <Gradient mode={3}/>
    <span style={{position:'absolute',left:120,top:142,fontSize:38,fontWeight:400}}>{number}</span>
    <h1 style={{...heading,position:'absolute',right:120,top:120,fontSize:174,textAlign:'right'}}>{title}</h1>
    <div aria-hidden="true" style={{position:'absolute',right:120,bottom:100,width:150,height:120,opacity:.75}}>{sectionMarks[Number(number)-1]}</div>
  </section>;
}
const Cover = ({title = '디자인 시스템,\n더 나아가서'}: {title?: string}) => <section aria-label={title.replace('\n', ' ')} style={root}>
  <Gradient mode={0}/>
  <img src={logo} alt="FECONF" style={{position:'absolute',right:120,top:144,width:150,height:'auto'}}/>
  <h1 style={{...heading,position:'absolute',left:112,top:120,fontSize:176}}>{title}</h1>
  <div style={{position:'absolute',left:120,bottom:110,fontSize:34,lineHeight:1.65}}>
    <div>정현수</div><div style={{fontSize:28,color:'#d5d5d5'}}>당근 · Design Engineer</div>
  </div>
  <div style={{position:'absolute',right:120,bottom:110,fontSize:28,lineHeight:1.65,color:'#d5d5d5',textAlign:'right'}}>
      <a href="mailto:june.jung@daangn.com" style={{color:'inherit',textDecoration:'none'}}>june.jung@daangn.com</a>
      <br/>
      <a href="https://www.linkedin.com/in/hyeonsu-jung-5483911a5" target="_blank" rel="noreferrer" style={{color:'inherit',textDecoration:'none'}}>https://www.linkedin.com/in/hyeonsu-jung-5483911a5</a>
  </div>
</section>;
const Title: Page = () => <section aria-label="AI로 디자인하기" style={root}>
  <Gradient mode={2}/>
  <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:32,transform:'translateY(-24px)'}}>
    <p style={{margin:0,fontSize:34}}>당근의 톤에 맞게</p>
    <h1 style={{...heading,fontSize:152}}>AI로 디자인을 한다는 것</h1>
  </div>
</section>;

// Editorial concept photographs are generated illustrations, not documentary evidence.
const concepts = [
  {image:intentPhoto,alt:'두 사람이 대화하며 거친 의자 스케치를 구체화하는 모습',title:'원하는 것을\n꺼내는 과정'},
  {image:contextPhoto,alt:'책이 가득한 책장에서 필요한 책 한 권을 꺼내는 손',title:'맥락은 AI가\n참고할 수 있는\n지식입니다.'},
  {image:referencePhoto,alt:'목표로 삼은 의자 사진을 보면서 같은 형태를 제작하는 모습',title:'레퍼런스는\n목적지를 보여줍니다'},
  {image:systemPhoto,alt:'수정과 정렬 판단이 담긴 원고와 그 결과를 한 번에 찍는 도장',title:'의사결정의\n압축'},
  {image:languagePhoto,alt:'두 사람이 같은 기호가 있는 조립 도면을 읽고 부품을 맞추는 모습',title:'언어는 서로\n이해하기 위한\n약속입니다'},
  {image:evaluationPhoto,alt:'완성된 컵에 물을 붓자 균열로 물이 새는 모습',title:'만들어진 것과\n쓸 수 있는 것은\n다르다'},
];
function Concept({kind}:{kind:number}){
  const item=concepts[kind];
  return <section style={{...root,background:'#f2f2ee',color:'#171918'}} aria-label={item.title}>
    <img className="concept-background" src={item.image} alt={item.alt} style={{position:'absolute',left:0,top:0,width:1260,height:1080,objectFit:'cover'}}/>
    <div style={{position:'absolute',left:1320,right:60,top:110}}>
      <h1 style={{...heading,fontSize:60,lineHeight:1.36}}>{item.title}</h1>
    </div>
  </section>;
}
const Intent: Page = () => <Section title="Intent" number="01"/>;
const Context: Page = () => <Section title="Context" number="02"/>;
const Reference: Page = () => <Section title="Reference" number="03"/>;
const System: Page = () => <Section title="Design System" number="04"/>;
const Language: Page = () => <Section title="Design Language" number="05"/>;
const IntentArt: Page = () => <Concept kind={0}/>;
const ContextArt: Page = () => <Concept kind={1}/>;
const ReferenceArt: Page = () => <Concept kind={2}/>;
const SystemArt: Page = () => <Concept kind={3}/>;
const LanguageArt: Page = () => <Concept kind={4}/>;
const Example: Page = () => <section style={{...root,background:'#08090a'}} aria-label="Emperor 실제 화면 예시">
  <h1 style={{...heading,position:'absolute',left:80,top:80,fontSize:62}}>Emperor · 당근의 화면을 모으는 일</h1>
  <img src={gallery} alt="Emperor에 모인 실제 제품 화면" style={{position:'absolute',left:80,top:200,width:1760,height:880,objectFit:'cover',objectPosition:'left top'}}/>
</section>;
const Closing: Page = () => <section style={root} aria-label="문제를 작은 단위로">
  <img className="viewport-background" src={closingPhoto} alt="나무 의자를 좌판과 다리, 연결 부품으로 분해해 펼쳐 놓은 작업대" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
  <h1 style={{...heading,position:'absolute',left:80,top:80,fontSize:96,lineHeight:1.3}}>{'문제를\n작은 단위로'}</h1>
</section>;


function EvidenceImage({src,caption,width,height,left,top,className,wide=false}:{src:string;caption:string;width:number;height:number;left:number;top:number;className?:string;wide?:boolean}) {
  return <figure className={className} style={{position:'absolute',margin:0,left,top,width,height}}>
    <img src={src} alt={caption} data-evidence-image="true" style={{display:'block',width:'100%',height:'100%',objectFit:wide?'cover':'contain',objectPosition:'center'}}/>
    <figcaption style={{position:'absolute',right:12,bottom:12,padding:'7px 12px',background:'rgba(12,12,12,.88)',color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:24,lineHeight:1.4,fontWeight:400,wordBreak:'keep-all',maxWidth:'85%'}}>{caption}</figcaption>
  </figure>;
}
function Evidence({title,src,caption,ratio,detail,background='#101113',color='#fff',wide=false}:{title:ReactNode;src:string;caption:string;ratio:number;detail?:ReactNode;background?:string;color?:string;wide?:boolean}) {
  const side=false;
  const maxW=side?1240:1760,maxH=side?1000:(detail?790:850);
  const w=wide?1728:Math.min(maxW,maxH*ratio),h=wide?850:w/ratio;
  return <section style={{...root,background,color}}>
    <h2 style={{...heading,position:'absolute',left:80,top:80,fontSize:side?76:72,lineHeight:1.25,maxWidth:side?450:1760}}>
      {title}</h2>
    {detail&&<p style={{position:'absolute',left:80,top:side?700:170,margin:0,fontSize:32,lineHeight:1.5,color:'#ccffa3',wordBreak:'keep-all',maxWidth:side?450:1760}}>{detail}</p>}
    <EvidenceImage src={src} caption={caption} left={(1920-w)/2} top={1080-h} width={w} height={h} wide={wide}/>
  </section>;
}

// 01 · P01 · 도입 · 디자인 시스템, 더 나아가서
const P01: Page = () => <Slide reviewId="P01"><Cover/></Slide>;

// 02 · P02 · 도입 · 정현수 · 당근 Design Engineer
const P02: Page = () => <Slide reviewId="P02"><section className="ai-talk dark" aria-label="정현수, 당근 Design Engineer" data-talk-page="정현수, 당근 Design Engineer" data-brand-review="true" style={{
    "background": "#171717",
    "color": "#ffffff"
  }}><div className="content still"><div style={{
        "display": "grid",
        "gridTemplateColumns": "1.25fr 1fr",
        "gap": "100px",
        "height": "100%",
        "alignItems": "center"
      }}><div><p className="label" style={{
            "marginBottom": "30px"
          }}>{"당근 Design Engineer"}</p><h1 style={{
            "fontSize": "160px"
          }}>{"정현수"}</h1><p style={{
            "marginTop": "58px",
            "fontSize": "40px",
            "lineHeight": "1.65"
          }}>{"SEED Design"}<br />{"디자인 플랫폼 · 디자인 시스템 팀"}</p></div><img src={asset0} alt="발표자 정현수" style={{
          "width": "570px",
          "height": "700px",
          "objectFit": "cover",
          "objectPosition": "center",
          "borderRadius": "3px"
        }} /></div></div></section></Slide>;

// 03 · P03 · 도입 · 지금 하는 생각들
const P03: Page = () => <Slide reviewId="P03"><section className="ai-talk" aria-label="지금 하는 생각들" data-talk-page="지금 하는 생각들" data-brand-review="true" style={{
    "background": "#ffffff",
    "color": "#171717"
  }}><div className="content still"><div className="center" style={{
        "height": "100%",
        "textAlign": "center",
        "alignItems": "center"
      }}><h1>{"지금 하는 생각들"}</h1></div></div></section></Slide>;

// 04 · P04 · 도입 · AI로 디자인하기 / 당근의 톤에 맞게
const P04: Page = () => <Slide reviewId="P04"><Title/></Slide>;

// 05 · P05 · 도입 · AI로 디자인을 한다는 것
const P05: Page = () => <Slide reviewId="P05"><section className="ai-talk" aria-label="여러 AI 디자인 도구" data-talk-page="여러 AI 디자인 도구" style={{
    "overflow": "hidden"
  }}><figure style={{
      "position": "absolute",
      "left": "-39px",
      "top": "-36px",
      "width": "663px",
      "height": "372px",
      "margin": "0",
      "background": "#e7e8eb",
      "boxShadow": "0 9px 39px #0002"
    }}><img src={asset1} alt="Lovable 공개 제품 화면" style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "cover"
      }} /><figcaption style={{position:'absolute',right:24,bottom:24,display:'flex',alignItems:'center',gap:12,color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:28,fontWeight:500,lineHeight:1.2,padding:'7px 12px',background:'rgba(12,12,12,.78)'}}><span>Lovable</span></figcaption></figure><figure style={{
      "position": "absolute",
      "left": "645px",
      "top": "15px",
      "width": "663px",
      "height": "372px",
      "margin": "0",
      "background": "#e7e8eb",
      "boxShadow": "0 9px 39px #0002"
    }}><DemoVideo src={asset3} poster={asset4} muted playsInline loop aria-label="v0 공개 시연" style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "contain"
      }} /><figcaption style={{position:'absolute',right:24,bottom:24,display:'flex',alignItems:'center',gap:12,color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:28,fontWeight:500,lineHeight:1.2,padding:'7px 12px',background:'rgba(12,12,12,.78)'}}><span>v0</span></figcaption></figure><figure style={{
      "position": "absolute",
      "left": "1329px",
      "top": "-24px",
      "width": "663px",
      "height": "372px",
      "margin": "0",
      "background": "#e7e8eb",
      "boxShadow": "0 9px 39px #0002"
    }}><DemoVideo src={asset6} poster={asset7} muted playsInline loop aria-label="Stitch 공개 시연" style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "contain"
      }} /><figcaption style={{position:'absolute',right:96.0,bottom:24,display:'flex',alignItems:'center',gap:12,color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:28,fontWeight:500,lineHeight:1.2,padding:'7px 12px',background:'rgba(12,12,12,.78)'}}><span>Stitch</span></figcaption></figure><figure style={{
      "position": "absolute",
      "left": "-39px",
      "top": "357px",
      "width": "663px",
      "height": "372px",
      "margin": "0",
      "background": "#e7e8eb",
      "boxShadow": "0 9px 39px #0002"
    }}><DemoVideo src={asset9} poster={asset10} muted playsInline loop aria-label="Pencil 공개 시연" style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "contain"
      }} /><figcaption style={{position:'absolute',right:24,bottom:24,display:'flex',alignItems:'center',gap:12,color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:28,fontWeight:500,lineHeight:1.2,padding:'7px 12px',background:'rgba(12,12,12,.78)'}}><span>Pencil</span></figcaption></figure><figure style={{
      "position": "absolute",
      "left": "645px",
      "top": "408px",
      "width": "663px",
      "height": "372px",
      "margin": "0",
      "background": "#e7e8eb",
      "boxShadow": "0 9px 39px #0002"
    }}><DemoVideo src={asset12} poster={asset13} muted playsInline loop aria-label="Claude Design 공개 시연" style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "contain"
      }} /><figcaption style={{position:'absolute',right:24,bottom:24,display:'flex',alignItems:'center',gap:12,color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:28,fontWeight:500,lineHeight:1.2,padding:'7px 12px',background:'rgba(12,12,12,.78)'}}><span>Claude Design</span></figcaption></figure><figure style={{
      "position": "absolute",
      "left": "1329px",
      "top": "369px",
      "width": "663px",
      "height": "372px",
      "margin": "0",
      "background": "#e7e8eb",
      "boxShadow": "0 9px 39px #0002"
    }}><img src={asset15} alt="OpenDesign 공개 제품 화면" style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "cover"
      }} /><figcaption style={{position:'absolute',right:96.0,bottom:24,display:'flex',alignItems:'center',gap:12,color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:28,fontWeight:500,lineHeight:1.2,padding:'7px 12px',background:'rgba(12,12,12,.78)'}}><span>OpenDesign</span></figcaption></figure><figure style={{
      "position": "absolute",
      "left": "-39px",
      "top": "750px",
      "width": "663px",
      "height": "372px",
      "margin": "0",
      "background": "#e7e8eb",
      "boxShadow": "0 9px 39px #0002"
    }}><img src={asset17} alt="Paper 공개 제품 화면" style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "cover"
      }} /><figcaption style={{position:'absolute',right:24,bottom:66.0,display:'flex',alignItems:'center',gap:12,color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:28,fontWeight:500,lineHeight:1.2,padding:'7px 12px',background:'rgba(12,12,12,.78)'}}><span>Paper</span></figcaption></figure><figure style={{
      "position": "absolute",
      "left": "645px",
      "top": "801px",
      "width": "663px",
      "height": "372px",
      "margin": "0",
      "background": "#e7e8eb",
      "boxShadow": "0 9px 39px #0002"
    }}><DemoVideo src={elyxDemo} poster={elyxPoster} muted playsInline loop preload="metadata" aria-label="Elyx 디자인 변경 전후 공개 시연" style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "contain"
      }} /><figcaption style={{position:'absolute',right:24,bottom:117.0,display:'flex',alignItems:'center',gap:12,color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:28,fontWeight:500,lineHeight:1.2,padding:'7px 12px',background:'rgba(12,12,12,.78)'}}><span>Elyx</span></figcaption></figure><figure style={{
      "position": "absolute",
      "left": "1329px",
      "top": "762px",
      "width": "663px",
      "height": "372px",
      "margin": "0",
      "background": "#e7e8eb",
      "boxShadow": "0 9px 39px #0002"
    }}><img src={asset21} alt="Figma Make 공개 제품 화면" style={{
        "width": "100%",
        "height": "100%",
        "objectFit": "cover"
      }} /><figcaption style={{position:'absolute',right:96.0,bottom:78.0,display:'flex',alignItems:'center',gap:12,color:'#fff',fontFamily:'Gradient Study, sans-serif',fontSize:28,fontWeight:500,lineHeight:1.2,padding:'7px 12px',background:'rgba(12,12,12,.78)'}}><span>Figma Make</span></figcaption></figure></section></Slide>;

// 06 · P06 · 도입 · 동작하긴 한다
const P06: Page = () => <Slide reviewId="P06"><Evidence title={<>{"시도를 해봤으나"}</>} src={kraftShot} caption="Kraft · 후기 작성 UI 미리보기" ratio={1.7676767676767677}/></Slide>;

// 07 · P07 · 도입 · 만족스럽지 않았습니다
const P07: Page = () => <Slide reviewId="P07"><section className="ai-talk" aria-label="만족스럽지 않았습니다" data-talk-page="만족스럽지 않았습니다" data-brand-review="true" style={{
    "background": "#ffffff",
    "color": "#171717"
  }}><div className="content still"><h2>{"만족스럽지 않았습니다."}</h2><div style={{
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "gap": "70px",
        "marginTop": "230px"
      }}><div style={{
          "fontSize": "100px",
          "letterSpacing": "-.05em"
        }}>{"화면 하나"}</div><span className="serif" style={{
          "fontSize": "100px",
          "color": "#171717"
        }}>{"≠"}</span><div style={{
          "fontSize": "100px",
          "letterSpacing": "-.05em"
        }}>{"제품의 흐름"}</div></div></div></section></Slide>;

// 08 · P08 · 도입 · AI가 디자인을 한다
// Static ordered dithering: shared by quiet text pages and the contents page.
function QuietDither({tone='lime'}:{tone?:'lime'|'grey'|'contents'}) {
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=ref.current, ctx=canvas?.getContext('2d');
    if(!canvas||!ctx)return;
    const w=960,h=540,pixels=ctx.createImageData(w,h);
    const base=tone==='contents'?[239,240,237]:[241,242,238];
    const tint=tone==='grey'?[220,224,220]:tone==='contents'?[185,211,158]:[217,230,201];
    const bayer=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
    for(let y=0;y<h;y++)for(let x=0;x<w;x++){
      const cx=tone==='grey'?0:tone==='contents'?1.05:1;
      const cy=tone==='contents'?1.05:1;
      const distance=Math.hypot((x/w-cx)/1.35,(y/h-cy));
      const reach=tone==='contents'?.88:1.25;
      const t=Math.max(0,1-distance/reach);
      const mix=t*t*(3-2*t);
      const threshold=(bayer[(y%4)*4+x%4]+.5)/16;
      const i=(y*w+x)*4;
      for(let c=0;c<3;c++){
        const value=(base[c]+(tint[c]-base[c])*mix)/255;
        pixels.data[i+c]=Math.round(Math.floor(value*20+threshold)/20*255);
      }
      pixels.data[i+3]=255;
    }
    ctx.putImageData(pixels,0,0);
  },[tone]);
  return <canvas ref={ref} width={960} height={540} aria-hidden="true" data-quiet-dither={tone} style={{position:'absolute',inset:0,width:1920,height:1080,imageRendering:'pixelated',pointerEvents:'none'}}/>;
}

function QuietStatement({children,detail,tone='lime'}:{children:ReactNode;detail?:string;tone?:'lime'|'grey'}) {
  return <section style={{...root,background:'#ffffff',color:'#000000'}}>
    <div style={{position:'absolute',left:120,right:120,top:0,bottom:0,display:'flex',flexDirection:'column',justifyContent:'center',gap:48}}>
      <h1 style={{...heading,fontSize:144,fontWeight:400,lineHeight:1.3}}>{children}</h1>
      {detail&&<p style={{margin:0,fontSize:44,lineHeight:1.5,letterSpacing:'-.025em',color:'#000000',wordBreak:'keep-all'}}>{detail}</p>}
    </div>
  </section>;
}

const P08: Page = () => <Slide reviewId="P08"><QuietStatement detail="여러 문제를 하나로 묶어 봤습니다.">{'“AI가 디자인을 한다”'}</QuietStatement></Slide>;

function AgendaItem({number,title,subtitle,muted=false}:{number:string;title:string;subtitle:string;muted?:boolean}) {
  return <li style={{display:'flex',gap:18,alignItems:'baseline',color:muted?'#999999':undefined,fontSize:46,fontWeight:400,lineHeight:1.3,letterSpacing:'-.025em',whiteSpace:'nowrap'}}><span style={{width:64,flexShrink:0,fontVariantNumeric:'tabular-nums'}}>{number}</span><span>{title}<span style={{display:'block',marginTop:6,fontSize:25,lineHeight:1.3,letterSpacing:'-.015em'}}>{subtitle}</span></span></li>;
}

// 09 · P09 · 도입 · AI로 디자인하기 · 집중할 다섯 곳
const P09: Page = () => <Slide reviewId="P09"><section style={{...root,background:'#ffffff',color:'#000000'}}>
  <h1 style={{...heading,position:'absolute',left:80,bottom:80,fontSize:108,fontWeight:400,lineHeight:1.02}}>{'Table of\nContents'}</h1>
  <ol style={{position:'absolute',left:1150,right:80,top:80,margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:16}}>
    <AgendaItem number="01." title="Intent" subtitle="의도 정의"/>
    <AgendaItem number="02." title="Context" subtitle="맥락"/>
    <AgendaItem number="03." title="Reference" subtitle="레퍼런스"/>
    <AgendaItem number="04." title="Design System" subtitle="디자인 시스템"/>
    <AgendaItem number="05." title="Design Language" subtitle="디자인 언어"/>
  </ol>
</section></Slide>;

// 10 · P10 · 1 의도 · 01 Intent · 의도 정의
const P10: Page = () => <Slide reviewId="P10"><Intent/></Slide>;

// 11 · A01 · 1 의도 · 원하는 것을 꺼내는 과정
const A01: Page = () => <Slide reviewId="A01"><IntentArt/></Slide>;

// 12 · P11 · 1 의도 · 원하는 것을 처음부터 다 말할 수 있을까?
const P11: Page = () => <Slide reviewId="P11"><QuietStatement tone="grey">{'원하는 것을 처음부터\n다 말할 수 있을까?'}</QuietStatement></Slide>;

// 13 · P12 · 1 의도 · 의도를 꺼내도록 돕는 것도 도구의 일
const P12: Page = () => <Slide reviewId="P12"><QuietStatement>{'의도를 꺼낼 수 있게\n돕는 방법에 대해서'}</QuietStatement></Slide>;

// 14 · P13 · 1 의도 · 질문하면서 구체화하기
const P13: Page = () => <Slide reviewId="P13"><Evidence title={<>{"질문하면서 구체화하기"}</>} src={asset24} caption="Lovable · 요구사항 확인 질문" ratio={1.6633009708737865}/></Slide>;

// 15 · N01 · 1 의도 · 비교하면, 원하는 것이 더 분명해진다
const N01: Page = () => <Slide reviewId="N01"><Evidence title={<>{"비교하면, 원하는 것이 더 분명해진다"}</>} src={stitchVariants} caption="Google Stitch · 디자인 시안 비교" ratio={1370 / 884}/></Slide>;

// 16 · N02 · 1 의도 · 바로 이 부분을, 이렇게
const N02: Page = () => <Slide reviewId="N02"><Evidence title={<>{"바로 이 부분을, 이렇게"}</>} src={asset25} background="#ffffff" color="#171717" caption="Agentation · 화면 선택과 피드백" ratio={1.4939024390243902}/></Slide>;

// 17 · N11 · 1 의도 · 그려서 표현하고, 보면서 구체화하기
const N11: Page = () => <Slide reviewId="N11"><section style={{...root,background:'#fff',color:'#171717'}}>

  <EvidenceImage src={tldrawIntent} caption="tldraw" left={40} top={24} width={960} height={504}/>
  <EvidenceImage src={stitchStreaming} caption="Google Stitch" left={40} top={552} width={960} height={504}/>
  <div style={{position:'absolute',left:1080,right:80,top:24,height:504,display:'flex',alignItems:'center'}}>
    <h2 style={{...heading,fontSize:58,fontWeight:400,lineHeight:1.4}}>그려서 의도 표현하기</h2>
  </div>
  <div style={{position:'absolute',left:1080,right:80,top:552,height:504,display:'flex',alignItems:'center'}}>
    <h2 style={{...heading,fontSize:58,fontWeight:400,lineHeight:1.4}}>{'빠른 이터레이션으로\n의도에 빠르게 가까워지기'}</h2>
  </div>
</section></Slide>;

// 18 · P15 · 1 의도 · 완벽하지 않다는 것을 가정하기
function SectionWrapUp({children, three = false}:{children:React.ReactNode;three?:boolean}) {
  return <section style={{...root,background:'#101113',color:'#ffffff'}}>
    <div style={{position:'absolute',left:80,right:80,top:'50%',transform:'translateY(-50%)',display:'flex',flexDirection:'column',gap:three?64:89}}>
      {children}
    </div>
  </section>;
}
const wrapUpText = {...heading,fontSize:112,fontWeight:400,lineHeight:1.35} as const;

const P15: Page = () => <Slide reviewId="P15"><SectionWrapUp><h2 style={wrapUpText}>완벽하지 않다는 것을 가정하기</h2><h2 style={wrapUpText}>의도를 끌어내는데 막힘이 없게</h2></SectionWrapUp></Slide>;

// 19 · P16 · 2 맥락 · 02 Context · 맥락
const P16: Page = () => <Slide reviewId="P16"><Context/></Slide>;

// 20 · A02 · 2 맥락 · 맥락은 판단에 필요한 배경입니다
const A02: Page = () => <Slide reviewId="A02"><ContextArt/></Slide>;

const ContextQuestions: Page = () => <Slide reviewId="context-questions">
  <section style={{...root,background:'#f2f2ee',color:'#171918'}} aria-label="맥락에서 나눠서 볼 두 가지">
    <h1 style={{...heading,position:'absolute',left:80,top:70,fontSize:80}}>맥락에서 나눠서 볼 두 가지</h1>
    <img src={contextStockPhoto} alt="어떤 책을 둘지 고르고 책장에 꽂는 손" style={{position:'absolute',left:80,top:210,width:864,height:610,objectFit:'cover'}}/>
    <img src={contextConsultPhoto} alt="펼친 책의 필요한 부분을 짚으며 참고하는 손" style={{position:'absolute',left:976,top:210,width:864,height:610,objectFit:'cover'}}/>
    <div style={{position:'absolute',left:80,top:858,width:864}}>
      <h2 style={{...heading,fontSize:52,lineHeight:1.3}}>01. 어떤 맥락을 준비할까</h2>
      <p style={{margin:'22px 0 0',fontSize:34,lineHeight:1.45,wordBreak:'keep-all'}}>책장에 어떤 책을 꽂을 것인가</p>
    </div>
    <div style={{position:'absolute',left:976,top:858,width:864}}>
      <h2 style={{...heading,fontSize:52,lineHeight:1.3}}>02. 언제, 어떻게 참고할까</h2>
      <p style={{margin:'22px 0 0',fontSize:34,lineHeight:1.45,wordBreak:'keep-all'}}>어떤 책을 언제, 어떻게 펼칠 것인가</p>
    </div>
  </section>
</Slide>;


// 21 · P17 · 2 맥락 · 맥락, 어떤 것들이 있을까?
type EditorialItem = {title:string;detail?:string};
function EditorialList({title,items,eyebrow,footer}:{title:string;items:EditorialItem[];eyebrow?:string;footer?:string}) {
  return <section style={{...root,background:'#fff',color:'#171717'}}>
    {eyebrow&&<p style={{position:'absolute',left:80,top:58,margin:0,fontSize:34,color:'#555'}}>{eyebrow}</p>}
    <h2 style={{...heading,position:'absolute',left:80,right:80,top:eyebrow?112:80,fontSize:88,fontWeight:400,lineHeight:1.25}}>
      {title}</h2>
    <ol style={{position:'absolute',left:80,right:80,top:240,bottom:160,margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',justifyContent:'center',gap:48}}>
      {items.map((item,i)=><li key={item.title} style={{display:'grid',gridTemplateColumns:'100px 1fr',gap:30,alignItems:'baseline',fontSize:66,lineHeight:1.3,fontWeight:400,letterSpacing:'-.025em'}}>
        <span style={{fontSize:'inherit',fontVariantNumeric:'tabular-nums'}}>{String(i+1).padStart(2,'0')}.</span>
        <div><h3 style={{margin:0,fontSize:'inherit',lineHeight:'inherit',fontWeight:400,wordBreak:'keep-all'}}>
          {item.title}</h3>{item.detail&&<p style={{margin:'18px 0 0',fontSize:40,lineHeight:1.5,color:'#555',wordBreak:'keep-all'}}>{item.detail}</p>}</div>
      </li>)}
    </ol>
    {footer&&<p style={{position:'absolute',left:210,bottom:80,margin:0,fontSize:40,lineHeight:1.5}}>{footer}</p>}
  </section>;
}
function EditorialColumns({title,children,eyebrow}:{title:string;children:ReactNode;eyebrow?:string}) {
  return <section style={{...root,background:'#fff',color:'#171717'}}>
    {eyebrow&&<p style={{position:'absolute',left:80,top:58,margin:0,fontSize:34,color:'#555'}}>{eyebrow}</p>}
    <h2 style={{...heading,position:'absolute',left:80,right:80,top:eyebrow?112:80,fontSize:88,fontWeight:400,lineHeight:1.25}}>
      {title}</h2>
    <div style={{position:'absolute',left:80,right:80,top:240,bottom:160,display:'flex',alignItems:'center',gap:100}}>{children}</div>
  </section>;
}
const editorialSubhead={margin:0,fontSize:66,lineHeight:1.35,fontWeight:400,letterSpacing:'-.025em',whiteSpace:'pre-line',wordBreak:'keep-all'} as const;
const editorialDetail={margin:'24px 0 0',fontSize:40,lineHeight:1.5,color:'#555',whiteSpace:'pre-line',wordBreak:'keep-all'} as const;

const P17: Page = () => <Slide reviewId="P17"><EditorialList
  title="맥락, 어떤 것들이 있을까?"
  items={[
    {title:"공통 원칙",detail:"SEED 디자인 시스템 · 컴포넌트 사용 가이드라인"},
    {title:"프로젝트 요구사항과 제약",detail:"거래글 작성 기능의 요구사항 · 정책 · 구현 조건"},
    {title:"현재 작업과 대화",detail:"수정할 화면 · 앞서 정한 조건 · 결과에 대한 피드백"}
  ]}
/></Slide>;

// 22 · P18 · 2 맥락 · 그리고 어떻게, 언제 전달할까
const P18: Page = () => <Slide reviewId="P18"><EditorialList title="그리고 어떻게, 언제 전달할까" items={[{"title": "항상 참고", "detail": "시스템 프롬프트 · 워크스페이스 공통 지침"}, {"title": "필요할 때 선택", "detail": "현재 세션과 관련된 프로젝트의 맥락 · 관련 컴포넌트 가이드라인"}, {"title": "지금 직접 전달", "detail": "선택한 캔버스 · 첨부한 화면 · 이번 대화에서 추가한 조건"}]}/></Slide>;


// 23 · P19 · 2 맥락 · 반복해서 필요한 지식은 남겨두기
const P19: Page = () => <Slide reviewId="P19"><Evidence wide title={<>{"공통 지식을 관리할 수 있게"}</>} src={asset28} caption="Lovable · Knowledge 설정 (2025 UI)" ratio={1.3654066437571593}/></Slide>;

// 24 · P20A · 2 맥락 · 이번 작업에 필요한 지침 선택하기
const P20A: Page = () => <Slide reviewId="P20A"><Evidence title={<>{"이번 작업에 필요한 지침 선택하기"}</>} src={asset29} caption="v0 · Instructions 선택" ratio={1.180940892641737}/></Slide>;

// 25 · P20B · 2 맥락 · 지금 고칠 대상을 전달하기
const P20B: Page = () => <Slide reviewId="P20B"><Evidence wide background="#3d3d3d" title={<>{"지금 고칠 대상을 전달하기"}</>} src={asset30} caption="Pencil · 캔버스 선택과 대화" ratio={1.7777777777777777}/></Slide>;

// 26 · P21 · 2 맥락 · 맥락을 분해하고, 필요한 순간에 전달하기
const P21: Page = () => <Slide reviewId="P21"><SectionWrapUp><h2 style={wrapUpText}>필요한 지식을 구분하기</h2><h2 style={wrapUpText}>필요한 순간에 참고할 수 있게</h2></SectionWrapUp></Slide>;

// 27 · P22 · 3 레퍼런스 · 03 Reference · 레퍼런스
const P22: Page = () => <Slide reviewId="P22"><Reference/></Slide>;

// 28 · A03 · 3 레퍼런스 · 레퍼런스는 목적지를 보여줍니다
const A03: Page = () => <Slide reviewId="A03"><ReferenceArt/></Slide>;

// 29 · P23 · 3 레퍼런스 · 좋은 레퍼런스는 어디에서 찾을 수 있을까?
const P23: Page = () => <Slide reviewId="P23"><section className="proposal"><h1 className="statement" style={{
      "fontSize": "144px"
    }}>{"좋은 레퍼런스는"}<br />{"어디에서 찾을 수 있을까?"}</h1></section></Slide>;

// 30 · P24 · 3 레퍼런스 · 좋은 레퍼런스는 이미 제품 안에 있습니다
function CurvedScreenImage({src,scale}:{src:string;scale:number}) {
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=ref.current;
    const gl=canvas?.getContext('webgl',{alpha:false,antialias:true,preserveDrawingBuffer:true});
    if(!gl)return;
    let disposed=false;
    const shader=(type:number,source:string)=>{const sh=gl.createShader(type)!;gl.shaderSource(sh,source);gl.compileShader(sh);return sh;};
    const vert=shader(gl.VERTEX_SHADER,'attribute vec2 p; varying vec2 uv; void main(){uv=(p+1.0)*0.5;gl_Position=vec4(p,0.,1.);}');
    const frag=shader(gl.FRAGMENT_SHADER,`precision highp float;
      varying vec2 uv; uniform sampler2D image; uniform vec2 crop;
      void main(){
        vec2 p=uv*2.0-1.0;
        float r2=dot(p,p);
        vec2 bent=p*(1.0+0.045*r2)/1.09;
        vec3 color=texture2D(image,bent*0.5*crop+0.5).rgb;
        float shade=1.0-0.032*r2;
        gl_FragColor=vec4(color*shade,1.0);
      }`);
    const program=gl.createProgram()!;gl.attachShader(program,vert);gl.attachShader(program,frag);gl.linkProgram(program);gl.useProgram(program);
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
    const pos=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
    const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    let loaded=false;
    const draw=()=>{
      if(!loaded||disposed||!canvas)return;
      const bounds=canvas.getBoundingClientRect();
      const density=Math.min(2,Math.max(1,bounds.width*(window.devicePixelRatio||1)/1920));
      canvas.width=Math.round(1920*density);canvas.height=Math.round(1080*density);
      gl.viewport(0,0,canvas.width,canvas.height);gl.drawArrays(gl.TRIANGLES,0,6);
      canvas.dataset.curveReady='true';canvas.style.opacity='1';
    };
    const observer=new ResizeObserver(draw);observer.observe(canvas!);
    const img=new Image();img.onload=()=>{
      if(disposed)return;
      // Crop in UV coordinates: keep the original pixels until the final render.
      const fit=Math.max(1920/img.width,1080/img.height)*scale;
      gl.uniform2f(gl.getUniformLocation(program,'crop'),1920/(img.width*fit),1080/(img.height*fit));
      let source: HTMLImageElement | HTMLCanvasElement=img;
      const maxTexture=gl.getParameter(gl.MAX_TEXTURE_SIZE) as number;
      if(Math.max(img.width,img.height)>maxTexture){
        const resized=document.createElement('canvas');
        const ratio=maxTexture/Math.max(img.width,img.height);
        resized.width=Math.round(img.width*ratio);resized.height=Math.round(img.height*ratio);
        const ctx=resized.getContext('2d')!;ctx.imageSmoothingQuality='high';
        ctx.drawImage(img,0,0,resized.width,resized.height);source=resized;
      }
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,source);
      canvas!.dataset.textureSize=`${source.width}x${source.height}`;
      loaded=true;draw();
    };img.src=src;
    return ()=>{disposed=true;observer.disconnect();gl.deleteTexture(texture);gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.deleteShader(vert);gl.deleteShader(frag);};
  },[src,scale]);
  return <canvas ref={ref} width={1920} height={1080} aria-label="아주 미세하게 볼록한 곡면 효과" className="viewport-background" style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0}}/>;
}

const FigmaScreens: Page = () => <Slide reviewId="FigmaScreens"><section style={{...root,background:'#000'}}><img className="viewport-background" src={figmaScreens} alt="Figma에 모아둔 당근 제품 화면들" style={{position:'absolute',inset:0,display:'block',width:'100%',height:'100%',objectFit:'cover',transform:'scale(1.28)',transformOrigin:'center'}}/><CurvedScreenImage src={figmaScreens} scale={1.28}/></section></Slide>;

const P24: Page = () => <Slide reviewId="P24"><section className="proposal"><h1 className="statement" style={{
      "fontSize": "144px"
    }}>{"좋은 레퍼런스는"}<br /><span style={{
        "color": "#ff6600"
      }}>{"이미 제품 안에"}</span>{" 있습니다"}</h1></section></Slide>;

// 31 · N04 · 3 레퍼런스 · 이 화면들을 AI에게 어떻게 건넬까?
const N04: Page = () => <Slide reviewId="N04"><section className="proposal dark"><h1 className="statement" style={{
      "fontSize": "144px"
    }}>
  {"좋은 레퍼런스를"}<br />{"어떻게 수집하고 전달할까?"}</h1></section></Slide>;

// 32 · P25 · 3 레퍼런스 · Emperor · 당근의 화면을 모으는 일
function EmperorGalleryPage({title,src,frame=false}:{title:string;src:string;frame?:boolean}) {
  return <section style={{...root,background:'#fff',color:'#171717'}}>
    <img className={frame?'viewport-background':undefined} src={src} alt={title} style={frame?{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}:{position:'absolute',left:0,top:210,width:1920,height:870,objectFit:'cover',objectPosition:'center top'}}/>
    <h2 style={{...heading,position:'absolute',left:80,top:64,fontSize:72,lineHeight:1.25}}>{title}</h2>
  </section>;
}
const EmperorCollection: Page = () => <Slide reviewId="EmperorCollection"><section style={{...root,background:'#111',color:'#fff'}}>
  <h2 style={{...heading,position:'absolute',left:80,top:64,fontSize:72,lineHeight:1.25}}>Emperor · 당근 화면 수집하기</h2>
  <img src={e2eArmy} alt="E2E Army 프레임워크" style={{position:'absolute',left:80,top:210,width:1100,height:820,objectFit:'contain'}}/>
  <span aria-hidden="true" style={{position:'absolute',left:1230,top:565,fontSize:54,color:'#777'}}>→</span>
  <img src={emperorCollection} alt="로컬 기기에서 당근 화면을 탐색하며 수집하는 예시" style={{position:'absolute',left:1390,top:196,width:380,height:840,objectFit:'contain'}}/>
</section></Slide>;

const P25: Page = () => <Slide reviewId="P25"><EmperorGalleryPage title="Emperor · 당근 앱 지도 프로젝트" src={emperorGalleryFull} frame/></Slide>;

// 33 · N12 · 3 레퍼런스 · 폰트 스케일링
const N12: Page = () => <Slide reviewId="N12"><EmperorGalleryPage title="폰트 스케일링" src={emperorLargeText}/></Slide>;

// 34 · N13 · 3 레퍼런스 · 다크모드와 라이트모드까지
const N13: Page = () => <Slide reviewId="N13"><EmperorGalleryPage title="다크모드와 라이트모드까지" src={emperorDarkGallery}/></Slide>;

// 35 · P26 · 3 레퍼런스 · 화면의 연결을 당근 앱 지도로
const P26: Page = () => <Slide reviewId="P26"><section style={{...root,background:'#f5f5f6',color:'#171717'}}>
  <img className="viewport-background" src={emperorScreenMap} alt="Emperor · 당근 앱 화면 연결 지도" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',transform:'scale(1.18)',transformOrigin:'center'}}/>
  <h2 style={{...heading,position:'absolute',zIndex:1,right:80,top:64,fontSize:72,lineHeight:1.25,textAlign:'right'}}>화면의 연결을 당근 앱 지도로</h2>
</section></Slide>;

// 36 · N14 · 3 레퍼런스 · 화면과 함께, 구조까지
const N14: Page = () => <Slide reviewId="N14"><EditorialColumns title="메타데이터도 함께">
  <div style={{flex:1}}><p style={{...editorialDetail,margin:'0 0 36px'}}>함께 수집하려는 정보</p><h3 style={editorialSubhead}>Android · iOS</h3><p style={editorialDetail}>접근성 정보 · 네이티브 뷰 정보</p><h3 style={{...editorialSubhead,marginTop:52}}>웹뷰</h3><p style={editorialDetail}>접근성 정보 · DOM 정보</p></div>
  <span style={{fontSize:58}}>→</span>
  <div style={{flex:1}}><h3 style={editorialSubhead}>{'컴포넌트 · 요소\n텍스트 · 토큰'}</h3><p style={editorialDetail}>{'지금 작업과 관련된\n맥락으로 범위를 좁히기'}</p></div>
</EditorialColumns></Slide>;


// 37 · P27 · 3 레퍼런스 · 레퍼런스와 맥락을 AI가 참고할 수 있도록
const ReferenceDelivery: Page = () => <Slide reviewId="ReferenceDelivery"><section style={{...root,background:'#fff',color:'#171717'}}>
  <h2 style={{...heading,position:'absolute',left:80,top:80,fontSize:88,lineHeight:1.25}}>MCP로 전달하기</h2>
  <div style={{position:'absolute',left:80,right:80,top:330,display:'flex',flexDirection:'column',gap:36,fontSize:58,lineHeight:1.4,fontWeight:400}}>
    <code>get_screen_by_component</code>
    <code>get_screen_by_text</code>
    <code>get_screen_by_service_name</code>
    <code>...</code>
  </div>
</section></Slide>;

const P27: Page = () => <Slide reviewId="P27"><SectionWrapUp><h2 style={wrapUpText}>좋은 결과물을 모으기</h2><h2 style={wrapUpText}>
  필요한 화면을 찾아 연결하기</h2></SectionWrapUp></Slide>;


// 38 · P28 · 4 디자인 시스템 · 04 Design System · 디자인 시스템
const P28: Page = () => <Slide reviewId="P28"><System/></Slide>;

// 39 · A04 · 4 디자인 시스템 · 의사결정의 압축
const A04: Page = () => <Slide reviewId="A04"><SystemArt/></Slide>;

// 40 · P29 · 4 디자인 시스템 · 버튼 하나에도 여러 결정
const P29: Page = () => <Slide reviewId="P29"><section aria-label="버튼 하나에도 여러 결정" style={{...root,background:'#f5f5f4'}}>
  <img src={seedButtonStates} alt="SEED 버튼의 색상과 상태별 디자인" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain'}}/>
</section></Slide>;

// 42 · P30 · 디자인 시스템에 담긴 결정
const P30: Page = () => <Slide reviewId="P30"><section aria-label="SEED 디자인 시스템 컴포넌트" style={{...root,background:'#fff'}}>
  <img className="viewport-background" src={seedComponentOverview} alt="SEED 디자인 시스템의 다양한 컴포넌트" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',transform:'scale(1.18)',transformOrigin:'center'}}/>
</section></Slide>;

// 42 · P31 · 4 디자인 시스템 · 현재 디자인 시스템에 비어 있는 부분
const P31: Page = () => <Slide reviewId="P31"><section aria-label="컴포넌트 그 이상의 무언가" style={{...root,background:'#17171b',color:'#fff'}}>
  <h2 style={{...heading,position:'absolute',left:80,top:64,fontSize:80,lineHeight:1.25}}>컴포넌트 그 이상의 무언가</h2>
  <img src={seedCareerPattern} alt="경력 입력 패턴의 빈 상태, 1개월 미만, 1개월 이상, 현재 근무 중 화면" style={{position:'absolute',left:80,top:220,width:1760,height:820,objectFit:'contain',objectPosition:'center'}}/>
</section></Slide>;

// 43 · P32 · 4 디자인 시스템 · 패턴 · 컴포넌트 사이의 판단
const PatternIntro: Page = () => <Slide reviewId="PatternIntro"><section style={{...root,background:'#101310',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>
  <svg className="viewport-background" aria-hidden="true" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
    <defs>
      <pattern id="seed-branch-pattern" width="90" height="108" patternUnits="userSpaceOnUse" patternTransform="translate(-15 -12)">
        <path fill="#ccffa3" transform="scale(0.6)" d="M0 97.95H62.8965C67.974 97.95 70.518 104.09 66.927 107.681L32.319 142.289L43.5615 153.531L78.1695 118.923C81.7605 115.332 87.9 117.876 87.9 122.954V180H103.8V106.65C103.8 101.846 107.696 97.95 112.5 97.95H150V82.05H87.1035C82.026 82.05 79.482 75.9105 83.073 72.3195L117.681 37.7115L106.439 26.469L71.8305 61.077C68.2395 64.668 62.1 62.124 62.1 57.0465V0H46.2V73.35C46.2 78.1545 42.3045 82.05 37.5 82.05H0V97.95Z"/>
      </pattern>
      <radialGradient id="seed-pattern-clear-space" cx="50%" cy="50%" r="65%">
        <stop offset="0%" stopColor="white" stopOpacity="0.04"/>
        <stop offset="32%" stopColor="white" stopOpacity="0.08"/>
        <stop offset="72%" stopColor="white" stopOpacity="0.28"/>
        <stop offset="100%" stopColor="white" stopOpacity="0.38"/>
      </radialGradient>
      <mask id="seed-pattern-mask"><rect width="1920" height="1080" fill="url(#seed-pattern-clear-space)"/></mask>
    </defs>
    <rect width="1920" height="1080" fill="url(#seed-branch-pattern)" mask="url(#seed-pattern-mask)"/>
  </svg>
  <h1 style={{...heading,position:'relative',fontSize:200,lineHeight:1}}>Pattern</h1>
</section></Slide>;

const P32: Page = () => <Slide reviewId="P32"><EditorialList title="패턴에 담기는 것" items={[{title:"사용 맥락",detail:"언제 이 패턴을 사용할지"},{title:"구성과 표현",detail:"필요한 컴포넌트 · 상태 · 톤앤매너"},{title:"참고할 실제 화면",detail:"화면 · 흐름 · 관련 가이드"}]}/></Slide>;

const P33A: Page = () => <Slide reviewId="P33A"><section style={{...root,background:'#171717'}}>
  <img src={seedPatterns} alt="SEED Patterns · Loading과 Safe Area" style={{position:'absolute',left:85,top:57,width:1750,height:966,objectFit:'contain',objectPosition:'center'}}/>
</section></Slide>;

const N16: Page = () => <Slide reviewId="N16"><SectionWrapUp><h2 style={wrapUpText}>의사결정의 압축</h2><h2 style={wrapUpText}>토큰, 컴포넌트, 가이드라인을 넘어서서</h2></SectionWrapUp></Slide>;

// 48 · P35 · 5 디자인 언어 · 05 Design Language · 디자인 언어
const P35: Page = () => <Slide reviewId="P35"><Language/></Slide>;

// 49 · A05 · 5 디자인 언어 · 언어는 서로 이해하기 위한 약속입니다
const A05: Page = () => <Slide reviewId="A05"><section style={{...root,background:'#101113'}}>
  <h2 style={{...heading,position:'absolute',left:80,top:80,fontSize:80,lineHeight:1.25}}>언어는 서로 이해하기 위한 약속입니다</h2>
  <img src={designLanguageCode} alt="로그인 버튼의 React 코드와 그 코드가 표현하는 로그인 버튼" style={{position:'absolute',left:80,top:220,width:1760,height:860,objectFit:'contain'}}/>
</section></Slide>;

// 50 · N05 · 5 디자인 언어 · 우리는 화면을 보며 디자인합니다
const N05: Page = () => <Slide reviewId="N05"><section style={{...root,background:'#101113'}}>
  <h2 style={{...heading,position:'absolute',left:80,top:80,fontSize:72,lineHeight:1.25}}>우리는 캔버스를 보며 디자인합니다</h2>
  <img src={asset41} alt="캔버스 기반 디자인 편집 화면" style={{position:'absolute',left:204.444,top:230,width:1511.112,height:850,objectFit:'contain'}}/>
</section></Slide>;

// 51 · P39 · 5 디자인 언어 · 문제 1 · 불필요한 정보까지 전달됩니다
const P39: Page = () => <Slide reviewId="P39"><section style={{...root,background:'#fff',color:'#171717'}}>
  <p style={{position:'absolute',left:80,top:60,margin:0,fontSize:28,color:'#666'}}>문제 1</p>
  <h2 style={{...heading,position:'absolute',left:80,top:120,fontSize:88,lineHeight:1.25}}>필요한 것보다 많은 정보를 전달합니다</h2>
  <div style={{position:'absolute',left:80,right:80,top:370,display:'grid',gridTemplateColumns:'1fr 100px 1fr',gap:48,alignItems:'center'}}>
    <div><p style={{margin:'0 0 32px',fontSize:34,color:'#666'}}>캔버스의 정보를 그대로 전달하면</p><h3 style={{...heading,fontSize:60,lineHeight:1.4}}>{'요청과 관계없는\n정보까지 포함됩니다'}</h3></div>
    <span aria-hidden="true" style={{fontSize:64,textAlign:'center'}}>→</span>
    <div><p style={{margin:'0 0 32px',fontSize:34,color:'#666'}}>AI가 읽어야 하는 정보가 늘어나고</p><h3 style={{...heading,fontSize:60,lineHeight:1.4}}>{'읽어야 할 토큰도\n많아집니다'}</h3></div>
  </div>
  <p style={{...heading,position:'absolute',left:80,right:80,bottom:110,fontSize:48,lineHeight:1.4}}>디자인의 의미를 더 간결하게 주고받을 수는 없을까요?</p>
</section></Slide>;


// 52 · P40 · 5 디자인 언어 · 문제 2 · 원본과 변경을 직접 읽기 어렵습니다
const P40: Page = () => <Slide reviewId="P40"><EditorialList title="변경 추적이 어렵습니다" items={[{"title": "원본 읽기"}, {"title": "변경 비교"}, {"title": "버전 관리"}]} eyebrow="문제 2"/></Slide>;


// 53 · P36 · 5 디자인 언어 · Elyx: 새로운 디자인 언어
const P36: Page = () => <Slide reviewId="P36"><section style={{...root,background:'#000'}}>
  <img src={asset42} alt="Elyx 로고" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}/>
  <span style={{position:'absolute',right:40,bottom:40,fontSize:28,color:'#fff'}}>Elyx</span>
  <h2 style={{...heading,position:'absolute',left:80,top:80,fontSize:80,lineHeight:1.25,color:'#fff',textShadow:'0 2px 20px rgba(0,0,0,.5)'}}>새로운 디자인 언어</h2>
</section></Slide>;

// 54 · P37 · 5 디자인 언어 · 디자인도 파일과 참조로
const fullMediaTitle = {...heading,position:'absolute' as const,left:80,top:64,fontSize:72,lineHeight:1.25,color:'#fff',textShadow:'0 2px 16px #000, 0 0 36px #000'};
const P37: Page = () => <Slide reviewId="P37"><section style={{...root,background:'#101113'}}>
  <EvidenceImage src={asset43} caption="Elyx · 파일 트리" left={0} top={0} width={960} height={1080} wide/>
  <EvidenceImage src={asset44} caption="Elyx · import와 프레임 소스" left={960} top={0} width={960} height={1080} wide/>
  <h2 style={fullMediaTitle}>디자인도 파일과 참조로</h2>
</section></Slide>;

// 55 · P38 · 디자인 변경도 Git diff로
const P38: Page = () => <Slide reviewId="P38"><section style={{...root,background:'#101113'}}>
  <EvidenceImage src={asset45} caption="Elyx / GitHub · .elyx 소스 변경 비교" left={0} top={0} width={1920} height={1080} wide/>
  <h2 style={fullMediaTitle}>디자인 변경도 Git diff로</h2>
</section></Slide>;

// 56 · P41 · 바뀐 화면까지 함께 비교하기
const P41: Page = () => <Slide reviewId="P41"><section style={{...root,background:'#101113'}}>
  <EvidenceImage src={asset46} caption="Elyx / GitHub · Before / After 비교" left={0} top={0} width={1920} height={1080} wide/>
  <h2 style={fullMediaTitle}>바뀐 화면까지 함께 비교하기</h2>
</section></Slide>;

// 58 · P42 · 5 디자인 언어 · 이런 문제가 생길 때 떠올려보세요
const DesignLanguageLimits: Page = () => <Slide reviewId="DesignLanguageLimits"><EditorialList
  title="완벽한 건 없다"
  items={[
    {title:"표준 코드는 이미 익숙하다",detail:"LLM이 학습해 온 React · HTML · CSS"},
    {title:"추상화에는 표현력의 한계가 있다",detail:"DSL(Domain-Specific Language, 도메인 특화 언어) 밖의 요구사항은 결국 원래 코드로 풀어야 한다"},
    {title:"원본을 두 벌 관리할 수 있다",detail:"디자인 언어와 프로덕션 코드 사이의 동기화 비용"}
  ]}
/></Slide>;

const P42: Page = () => <Slide reviewId="P42"><SectionWrapUp three><h2 style={wrapUpText}>변경을 추적해야 할 때</h2><h2 style={wrapUpText}>전달할 정보를 줄여야 할 때</h2><h2 style={wrapUpText}>디자인을 표현하는 방식 돌아보기</h2></SectionWrapUp></Slide>;


// 59 · P59 · 마무리 · AI로 디자인하기 · 집중할 다섯 곳
const P59: Page = () => <Slide reviewId="P59"><section style={{...root,background:'#ffffff',color:'#000000'}}>
  <h1 style={{...heading,position:'absolute',left:80,bottom:80,fontSize:108,fontWeight:400,lineHeight:1.02}}>{'AI로 디자인을\n한다는 것'}</h1>
  <ol style={{position:'absolute',left:1150,right:80,top:80,margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:16}}>
    <AgendaItem number="01." title="Intent" subtitle="의도 정의"/>
    <AgendaItem number="02." title="Context" subtitle="맥락"/>
    <AgendaItem number="03." title="Reference" subtitle="레퍼런스"/>
    <AgendaItem number="04." title="Design System" subtitle="디자인 시스템"/>
    <AgendaItem number="05." title="Design Language" subtitle="디자인 언어"/>
  </ol>
</section></Slide>;


// 60 · FurtherAreas · 마무리 · 다섯 곳 밖에도 이어지는 영역
const FurtherAreas: Page = () => <Slide reviewId="FurtherAreas"><section style={{...root,background:'#ffffff',color:'#000000'}}>
  <h1 style={{...heading,position:'absolute',left:80,bottom:80,fontSize:108,fontWeight:400,lineHeight:1.02}}>{'AI로 디자인을\n한다는 것'}</h1>
  <ol style={{position:'absolute',left:1150,right:80,top:80,margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:16}}>
    <AgendaItem muted number="01." title="Intent" subtitle="의도 정의"/>
    <AgendaItem muted number="02." title="Context" subtitle="맥락"/>
    <AgendaItem muted number="03." title="Reference" subtitle="레퍼런스"/>
    <AgendaItem muted number="04." title="Design System" subtitle="디자인 시스템"/>
    <AgendaItem muted number="05." title="Design Language" subtitle="디자인 언어"/>
    <AgendaItem number="06." title="Evaluation" subtitle="평가"/>
    <AgendaItem number="07." title="Handoff" subtitle="코드 · 상태 연결"/>
    <AgendaItem number="08." title="Deployment & Operations" subtitle="버전 관리 · QA · 배포 · 운영"/>
    <AgendaItem number="09." title="..." subtitle=""/>
  </ol>
</section></Slide>;

// 61 · P62 · 마무리 · 모델이 변해도, 변하지 않는 것
const P62: Page = () => <Slide reviewId="P62"><EditorialList title="모델이 변해도, 변하지 않는 것" items={[{"title": "제품의 화면 목록과 흐름"}, {"title": "거기에서 쌓인 맥락과 판단"}, {"title": "디자인 시스템, 그리고 패턴"}]}/></Slide>;


// 62 · P61 · 마무리 · 생각하기를 멈춘 자리엔 Slop이 자리를 차지한다
const P61: Page = () => <Slide reviewId="P61"><section style={{...root,background:'#171717',color:'#ffffff'}}>
  <h1 style={{...heading,position:'absolute',left:120,right:120,top:260,fontWeight:400}}>
    <span style={{display:'block',fontSize:80,lineHeight:1.3,color:'#bdbdbd'}}>생각하기를 멈춘 자리엔</span>
    <span style={{display:'block',marginTop:32,fontSize:240,lineHeight:1,letterSpacing:'-.035em'}}>Slop<span style={{marginLeft:16,fontSize:80,letterSpacing:'-.035em',color:'#bdbdbd'}}>이</span></span>
    <span style={{display:'block',marginTop:32,fontSize:80,lineHeight:1.3,color:'#bdbdbd'}}>자리를 차지한다</span>
  </h1>
</section></Slide>;

// 63 · P60 · 마무리 · 문제를 작은 단위로
const P60: Page = () => <Slide reviewId="P60"><Closing/></Slide>;

// 64 · P63 · 마무리 · 감사합니다
const P63: Page = () => <Slide reviewId="P63"><Cover title="감사합니다"/></Slide>;
export default [P01, P04, P05, P06, P08, P09, P10, A01, P11, P12, P13, N01, N02, N11, P15, P16, A02, ContextQuestions, P17, P18, P19, P20A, P20B, P21, P22, A03, P23, P24, FigmaScreens, N04, P25, EmperorCollection, N12, N13, P26, N14, ReferenceDelivery, P27, P28, A04, P29, P30, P31, PatternIntro, P32, P33A, N16, P35, A05, N05, P39, P40, P36, P37, P38, P41, DesignLanguageLimits, P42, P59, FurtherAreas, P62, P61, P60, P63] satisfies Page[];

// Approved spoken text, in exactly the same order as the pages above.
export const notes: string[] = [
  `안녕하세요. 오늘 디자인 시스템, 더 나아가서라는 주제로 발표하게된 정현수입니다.
저는 최근에 당근에서 디자인 엔지니어로 직군 변경을 해서 일을 하고 있고,
저는 당근에서 주로 디자인 시스템 개발을 주로 하고 있고, 사내에 디자인과 관련된 문제가 있으면 가서 해결해주는 사람입니다.

오늘 어떤 주제로 얘기를 해야하나 고민을 진짜 많이 했는데요,
사실 발표를 하겠다고 한 게 두 달전인데, 그때 바로 제목을 정했어야 했어서 이렇게 짓게 되었는데
사실 오늘 제가 정말로 하고자 하는 얘기는`,
  `바로 AI로 디자인을 한다는 것에 대해서 얘기를 해보려고 합니다.
요즘 가장 관심있는 주제고, 아직은 풀리지 않은 문제이기도 합니다.
그리고 제가 당근에서 꼭 풀고싶은 문제이기도 한데요.

다들 AI로 디자인 해보셨나요? 해보면 생각보다 마음대로 잘 안되는 부분들이 많은데요
어쨌든 문제를 해결해야 하기 때문에 그 과정에서의 저의 레슨런도 공유드리고,
요즘 이 AI 디자인 생태계는 어떤 식으로 돌아가는지, 그리고 당근에서는 어떤 시도들을 하고 있는지 설명드리려고 합니다.`,
  `요즘 디자인 툴들이 엄청 많이 나오죠.
기존에 있던 플랫폼인데 AI 관련 기능을 제공하는 곳도 있고,
요즘 들어서 새롭게 나오고 있는 도구들도 있습니다.`,
  `그래서 몇 달 전에 당근에서도 비슷한 시도를 하려고 했었습니다.
저희는 어쨌든 디자인 시스템도 이미 있으니까 바로 될거라고 생각을 했고
그래서 Kraft라고 하는 툴을 만들었었습니다.
근데 해본 결과 프로덕션에서 사용되기에는 쉽지 않겠다고 생각했습니다.
`,
  `프로덕션에서 사용되지 못하는 이유는 여러가지가 있겠지만,
저는 AI가 디자인을 한다는 것을 하나의 문제로 보고 있었습니다.
그래서 좀 풀어서 문제를 보기 시작하니까 어느 곳에 집중을 해야하는지 알게됐습니다.
`,
  `저는 오늘 제가 하나로 생각했던 하나의 문제에서, 집중할 다섯 곳을 나눠서 얘기를 드릴텐데요
이중에서는 제가 벤치마킹을 위해서 사례조사한 얘기들도 있고,
실제로 당근에서 어떤 것들을 하고 있는지에 대한 설명도 있는데요
나중에 비슷한 고민을 하는 분들에게 참고가 되면 좋겠고,
제가 어떤 식으로 접근하고 있는지 집중해서 들어주시면 감사하겠습니다.`,
  "첫 번째는 \"의도\"에 관한 얘기입니다.",
  `저는 AI로 디자인 하기 위해선 머릿속에 있는 "의도"를 밖으로 꺼내고 구체화할 수 있는 과정이 필요하다고 생각합니다.
그렇게 자세하게 꺼내놓지 않으면 비어있는 부분을 AI가 대신 정합니다. 그래서 의도가 되게 중요한데요,`,
  `근데 맨 처음부터 제 머리속에 있는 것들을 온전히 다 설명할 수 있을까요?
우리는 사람이다 보니, 어떤 조건을 생략하기도 하고, 처음에는 스스로도 뭘 원하는지를 모를 수도 있습니다.`,
  `그렇기 때문에 결과가 안 좋다고 해서 유저 탓을 할 순 없습니다.
AI로 디자인을 하기 위해선 이 의도를 잘 꺼낼 수 있게 유저를 잘 도와줘야 합니다.
의도를 꺼낼 수 있는 방법은 되게 여러가지가 있는데요, 몇가지 예시를 보여드리겠습니다.`,
  `이 예시는 Lovable의 Question Tool의 예시인데요,
사실 Question Tool은 Lovable뿐만 아니라 저희가 자주 사용하는 Codex나 Claude Code처럼 코딩 에이전트에서도 많이 사용됩니다.
처음부터 의도를 명확하게 알 수 없기 때문에 그 부분을 질문을 통해서 명확하게 하는 방법입니다.
여기서 중요한 건 "질문을 한다"는 것 자체보단, 지금 결정을 내리는 데 비어 있는 조건을 찾아주는 것이 중요하다는 것입니다.`,
  `유저가 여러 시안을 비교할 수 있게 여러가지 스타일을 뽑아주는 것도 의도를 꺼낼 수 있는 방법 중에 하나입니다.
구글 Stitch에서는 한 프롬프트에 대한 결과물 3개를 뽑아주고 유저가 선택할 수 있게 합니다.
뭘 원하는 지를 모를 땐 그냥 여러 개의 결과물을 줘버리는거죠.`,
  `유저의 의도 표현을 포인트로 딱 찝어서 할 수 있게 도와주는 도구도 있습니다.
Agentation은 요소를 선택해 코멘트를 남기고, 그 대상의 정보와 함께 AI에 전달하는 도구인데요,
Agentation 말고도 react-grab과 같은 도구도 있고 비슷한 문제를 풀기 위한 도구들이 많습니다.
이 방식은 유저와 에이전트 사이에 가리키는 대상을 일치시켜 줍니다. 물론 왜 바꾸고 싶은지는 유저가 설명해야 합니다.`,
  `앞에서 본 예시 말고도,
그냥 그림을 그려서 유저의 의도를 표현하게 할 수도 있구요,
아니면 결과물을 생성할 때 스트리밍으로 보여주는 것도 유저의 의도에 맞는지 확인하는 방법일 수 있습니다.
결과물을 최대한 빨리 노출해서 유저의 의도에 맞게 가고 있는지를 확인시켜주는거죠.`,
  `AI로 디자인을 할 때 중요한 건,
유저의 질문이 완벽하지 않다는 것을 가정하고 들어가야 합니다.
그리고 그 가정하에 유저의 머리 속에 있는 의도를 꺼내고
표현하는데 문제가 없게 도와줘야 한다는 것입니다.`,
  "두 번째는 맥락에 대한 얘기입니다",
  `맥락은 왜 중요할까요?
맥락은 AI가 참고할 수 있는 지식입니다.
서재나 책장 혹은 도서관을 떠올려보면 좋을 것 같은데요`,
  `여기서 두 가지를 나눠서 봐야 합니다.

첫 번째는 어떤 맥락이 있는지 인지하고, 무엇을 준비할 것인지입니다.
책장에 어떤 책을 꽂을 것인지에 해당하죠.

두 번째는 에이전트가 어떤 맥락을 언제, 그리고 어떻게 참고할 것인지입니다.
책장에 책이 있다고 해서 매번 전부 읽는 건 아니잖아요.
지금 하는 일에 맞는 책을 필요한 순간에 펼쳐야 합니다.

그래서 지식을 준비하는 것과 그 지식을 참고하게 하는 것을 나눠서 이해하고, 각각 분해해서 생각할 수 있어야 합니다.`,
  `그럼 어떤 맥락들을 준비해야 될까요?

우선 공통적인 원칙들이 있습니다.
저희로 따지면 디자인 시스템에 대한 맥락이 있겠죠.

그 다음으로는 현재 유저의 프로젝트에 대한 맥락이 있습니다.
프로젝트의 요구사항이나 제약 같은 것들이 있을 수 있고

마지막으로 세션 단위의 맥락이 있습니다.
현재 에이전트와의 대화 전후 맥락 같은 것들이 있을 수 있겠죠.`,
  `그럼 이렇게 분해된 맥락을 어떻게 전달해야 할지, 그리고 언제 전달해야 할지를 알아야 합니다.
공통 원칙은 시스템 프롬프트나 워크스페이스 공통 지침으로 항상 참고하게 둘 수 있습니다.
현재 세션과 관련된 프로젝트의 맥락이나 컴포넌트 가이드라인은 필요할 때 선택해서 전달할 수 있겠죠.
마지막으로 현재 작업에 대한 맥락은 선택한 캔버스를 바로 대화에 넣는 방식으로 전달할 수 있습니다.`,
  `Lovable에서는 워크스페이스 공통 지식과 프로젝트별 지식을 넣는 자리가 따로 있습니다.
중요한 건 필요한 타이밍에 적절한 맥락을 유저가 넣을 수 있게 만들어 두는 것입니다.
맥락을 분해해서 이해하고, 언제 넣어야 할지를 알고 있는 거죠.`,
  `V0에서는 대화에서 무조건 참조할 수 있는 형태의 지시사항, Instruction들을 여러 개 저장할 수 있고,
그걸 유저가 선택을 할 수 있습니다. 이런 식으로 맥락을 다룰 수도 있구요.`,
  `Pencil에서는 현재 캔버스에서 선택된 노드의 맥락을 바로 대화에 던질 수 있습니다.
`,
  `맥락에서 중요한 부분은 어떤 맥락이 필요한지, 분해해서 생각할 수 있어야 하고
그걸 어떤 식으로 전달할 건지에 대한 설계가 필요하다는 것이었습니다.

아무리 컴포넌트 가이드라인 문서를 잘 써놔도 적재적소에 참고될 수 있지 않으면 의미가 없으니까요.
여기까지 맥락에 대한 얘기였고,`,
  `다음으로 레퍼런스입니다.
레퍼런스는 AI가 디자인하는데 왜 중요할까요?`,
  `저는 오늘 발표에서 가장 중요한 것, 두 가지만 뽑는다면
지금 얘기하는 레퍼런스와 다음에 얘기할 디자인 시스템을 뽑을 것 같은데요,

저는 레퍼런스가 원하는 목적지를 보여주는 수단이라고 생각합니다.
원하는 화면을 말로 하나하나 설명하려면 생각보다 설명해야 할 게 많잖아요.

만약에 의자를 만든다고 할 때, 이미 완성된 의자를 보고 만드는 것과 혼자서 만드는 건 엄청난 차이를 만듭니다.
완성된 결과물에는 많은 의사결정이 담겨있습니다.
의자의 다리는 몇개로 할지, 이음새는 어떻게 할건지, 앉는 부분은 어느정도의 굴곡을 가질지와 같은 모든 결정들이 담겨져 있습니다.

그런 의미에서 좋은 레퍼런스는 원하는 결과에 빠르게 가까워질 수 있는 수단 중 하나라고 생각합니다.`,
  `그럼 좋은 레퍼런스는 어디에서 찾을 수 있을까요?
사실 그렇게 멀지 않은 곳에 있습니다.`,
  "좋은 레퍼런스는 이미 제품 안에 있습니다.",
  `당근 앱 안에는 수많은 서비스와 화면들이 있습니다.
해당 화면들에는 각 팀이 고민해서 만든 결과와 레슨런이 쌓여있습니다.
어떤 컴포넌트를 쓰는지, 혹은 어떤 정보를 먼저 보여주는지,
또는 문구를 어떤 톤으로 쓰는지와 같은 판단들이 이미 배포되어 유저들에게 제공되고 있습니다.`,
  "그러면 당근의 좋은 레퍼런스들을 어떻게 수집하고 전달할 수 있을까요?",
  `그 고민에서 시작된 프로젝트가 있는데요, 바로 Emperor입니다.

Emperor에서는 당근 앱의 화면들을 자동으로 수집하고 있습니다.
실제로 CI 안에서 Android와 iOS 시뮬레이터를 켜고, 당근 앱을 돌아다니면서 화면을 수집하고 있습니다.`,
  `수집하는 방식이 되게 궁금하실 것 같은데
최근에 E2E Army 라고 하는 에이전트와 함께 테스트를 작성할 수 있는 프레임워크가 나와서 사용하고 있고
로컬 시뮬레이터에서 AI와 화면 탐색을 하고, 시나리오를 확정짓고요
확정 지어진 시나리오를 CI에서 주기적으로 돌면서 화면을 수집합니다.`,
  `Emperor에서는 실제 시뮬레이터를 기반으로 화면을 수집하기 때문에
더 큰 텍스트를 적용한 화면들도 수집할 수 있습니다.
`,
  `당연히 다크모드 화면도 수집할 수 있습니다.
`,
  `화면 하나하나뿐만 아니라 시나리오 기반으로 화면들을 수집하기 때문에
각 화면들의 전후 맥락을 파악할 수 있고, 덕분에 이런 식으로 그래프 형태로도 표현할 수 있습니다.
`,
  `화면을 캡처할 때 그 화면을 캡쳐만 하는 것이 아니라, 메타데이터도 같이 수집합니다.

Android와 iOS에서는 접근성 정보와 네이티브 뷰 정보를, 웹뷰에서는 접근성 정보와 DOM 정보를 읽는 식으로요.
이를 바탕으로 어떤 컴포넌트와 요소가 있고, 어떤 텍스트와 토큰을 사용하는지도 함께 모으고 있습니다.`,
  `그리고 이런 정보들을 AI한테도 전달할 수 있어야겠죠.
"특정 컴포넌트를 사용한 화면을 줘"라던지,
아니면 "어떤 서비스들의 화면들을 가져와"라던지와 같이 자연어로 얘기할 수도 있겠습니다.
이렇게 되면 디자인 에이전트뿐만 아니라 슬랙 에이전트와 같은 곳들에서도 붙일 수 있고요`,
  `아직 당연히 이 플랫폼이 완벽하진 않습니다.
안되는 것들도 많고, 제약 조건들도 아직은 많은데요.
중요한 건 좋은 레퍼런스들은 이미 앱 안에 있었고,
그것들을 잘 모아야 하고, 에이전트에게 전달할 수 있어야 한다는 것입니다.`,
  "그 다음으로 디자인 시스템입니다. 드디어 디자인 시스템 얘기가 나오는데요.",
  `디자인 시스템의 장점은 여러 가지가 있죠. 뭐 재사용성도 있고, 일관성도 있고요.
하지만 AI가 디자인을 할 때 제일 핵심적인 장점은 의사결정의 압축이라고 생각합니다.
`,
  `어떤 버튼을 만든다고 생각해도, 많은 의사결정들이 필요합니다.
어떤 상태가 있는지, 그리고 각 상태별로 어떤 색상과 표현을 가질지 정해야 합니다.
그리고 디자인 시스템 컴포넌트 안에는 이런 맥락들이 전부 들어있습니다.`,
  `디자인 시스템 안에는 이런 압축된 맥락이 엄청나게 많고,
컴포넌트 이외에, 토큰과 가이드라인에도 압축된 맥락이 존재합니다.`,
  `근데 토큰이나 컴포넌트 그리고 가이드라인들이 잘 작성이 되어 있어도, 에이전트에 디자인을 맡기면 생각보다 부족한 점이 많습니다.
이유는 여러가지가 있을 수 있겠지만, 사실 화면이나 기능은 단순 컴포넌트로만 이뤄져 있지 않습니다.
컴포넌트와 컴포넌트 사이의 디자인 결정이 필요할 수 있고요. 여러 상태에 따라서 보여줘야 하는 화면들도 너무 많습니다.
비어 있는 화면에서는 어떤 행동을 안내할지, 성공하면 어떤 화면이 보여져야 하는지도 기능안에 들어있습니다.

현재 SEED 디자인 시스템 안에서는 해당 지식이 없습니다.`,
  "저는 여기서 Pattern이 있어야 한다고 생각합니다.",
  `패턴 안에서는 언제 이 패턴을 사용할건지에 대한 맥락이 있고,
어떤 컴포넌트와 상태가 필요한지 명시하고, 어떤 톤앤매너를 가질지, 참고할 실제 화면은 무엇인지 같이 묶는 거죠.
`,
  `SEED에서도 이런 패턴 지식을 추가하고 있습니다.
토큰, 컴포넌트, 가이드라인을 넘어서, 하나의 기능을 만들 때 그 사이에 필요한 판단들을 쌓아두려는 거죠.
아직 저희도 이제 만들기 시작해서 로딩과 Safe Area와 같은 범용적인 패턴들 밖에 없습니다.
저는 이것보다 더 세부적인 패턴들이 많이 만들어져야 한다고 생각합니다.
예를들면 각 서비스별로 폼을 제작할 때의 패턴이라던지, 필터에 대한 패턴이라던지,
사진 업로드에 대한 패턴과 같이 조금 더 지엽적이고 다양한 패턴들이 많이 만들어져야 합니다.
실제로 요즘 제가 많이 하는 고민이, 이런 패턴들을 어떻게 팀원들과 같이 쌓아나갈 수 있을지 고민하고 있습니다.`,
  `정리하면 디자인 시스템의 핵심은 의사결정의 압축입니다.
그리고 토큰, 컴포넌트, 가이드라인을 넘어서는, 어떤 기능이라고 하는 플로우를 담을 수 있는 패턴에 대한 지식도 필요합니다.`,
  `다섯 번째로 디자인 언어입니다.
이번 섹션은 AI로 디자인할 때 무조건적으로 고려해야 하는 분야라기보단
이런 것도 있구나 정도로 이해해주시면 감사하겠습니다.`,
  `저는 언어가 서로 이해하고 소통하기 위한 약속이라고 생각합니다.
우리는 코드를 보고 이게 어떤 의미인지, 그리고 어떤 것을 하고자 하는지 알 수 있습니다.
정해진 문법과 식별자를 통해 구조와 동작을 읽을 수 있기 때문이죠.

개발에서는 그런데, 그렇다면 디자인에서는 어떨까요?`,
  `보통 우리는 이렇게 캔버스를 보면서 디자인합니다.
캔버스에서도 스타일을 변경할 수 있고, 속성 값들도 이것저것 확인할 수 있습니다.
그런데 이전까지의 대부분의 디자인 툴들은 언어라는 개념이 따로 존재하진 않았습니다.
이렇게 완전히 투명하지 않은 구조들이 일으키는 문제가 몇가지 있습니다.
크게 두 가지가 있는데요`,
  `첫 번째 문제는, 지금 필요한 것보다 더 많은 정보를 전달하게 될 수 있다는 점입니다.
캔버스에서는 레이어의 위치나 크기 그리고 스타일과 같은 디자인에 필요한 정보들 이외에도, 여러 정보가 들어 있습니다.
그걸 모두 그대로 전달하면 유저의 요청과 관계없는 정보까지 포함될 수 있겠죠.
AI 입장에서는 읽어야 할 토큰이 많아지게 됩니다.

처음부터 디자인의 의미를 조금 더 간결하게 표현하고 주고받을 수는 없을까요?`,
  `두 번째 문제는, 변경 추적이 어렵습니다.

캔버스 기반 도구에서도 버전이나 기본적인 브랜치 기능을 제공하기도 합니다.
다만 어떤 코드 기반의 변경이 아니라 시각적인 차이점만 확인할 수 있고,
그로 인해서 정확하게 어떤 곳이 변경됐는지 추적하기가 어렵습니다.

저희 개발자들은 Git이라는 아주 좋은 도구 덕분에 버전 관리와 변경 추적을 아주 쉽게 할 수 있죠.
`,
  `이런 문제들을 해결하기 위해서 나온 시도들이 있습니다.
다른 시도들도 몇몇있지만, 제가 최근에 유의깊게 보고 있는 곳은 Elyx(엘릭스) 입니다.
Elyx는 아직 오픈베타는 아니고, 저는 베타 신청을 해서 직접 사용까지 해봤는데요,`,
  `Elyx는 툴 외부만 보면 다른 캔버스 툴들과 크게 다를게 없지만,
실제로는 자체적인 언어를 구현해서 해당 언어로 캔버스를 표현하게 됩니다.
사진에서 보시다시피 문법이 있는 언어고요, 그래서 여러 스타일 속성들을 지정하고 변경할 수 있습니다.`,
  `말그대로 언어기 때문에 코드처럼 Git에서 추적을 할 수 있습니다.
무엇을 지우고 무엇을 추가했는지, 디자인 원본에서 달라진 부분을 코드적으로 확인할 수 있습니다.
디자인 변경과 코드 변경을 같은 작업 흐름에서 검토할 수 있다는 것입니다.`,
  `디자인을 코드로 관리하면, 이렇게 GitHub에서도 변경 전후를 바로 비교할 수 있습니다.
기존의 캔버스 기반 도구들도 자체적인 변경 비교 기능을 제공하지만,
디자인 언어는 특정 도구가 제공하는 기능을 넘어서, 그러니까 플랫폼을 넘어서 활용할 수 있는 장점이 있습니다.
이미 저희가 익숙한 Git과 코드 리뷰 방식은 물론, 잘 갖춰진 오픈소스 생태계까지 활용할 수 있는 거죠.`,
  `하지만 역시 모든 상황을 완벽하게 해결하는 은탄환은 없듯이,
이런 디자인 언어 시도들도 여러 의문점들이 남아있습니다.

첫번째로 사실 이런 UI 표현은 그냥 HTML, CSS로만 해도 됩니다.
이미 LLM은 HTML과 CSS를 학습할대로 너무 많이 학습했기 때문에
새로운 언어에 대해서 지식을 넣기 위해서는 많은 시간과 노력이 들어갑니다.

두 번째는, 새로운 언어가 실제 제품에서 필요한 표현을 모두 담기는 어렵다는 점입니다.
처음에는 간결하게 표현할 수 있어도, 복잡한 레이아웃이나 세밀한 인터랙션을 만들다 보면 그 언어만으로는 해결하기 어려운 요구사항이 생길 수 있습니다.
그러면 결국 원래 코드로 돌아가거나 예외 처리를 추가해야 하죠.
단순하게 만들려고 도입한 언어가 오히려 복잡함을 더할 수도 있는 겁니다.

세 번째는, 관리포인트가 늘어나는 문제가 있습니다.
무엇이 원본이고, 무엇이 기준인지 정해야 하는 문제들도 여전히 있습니다.

이렇게 디자인 언어의 양면을 다 봤는데요`,
  `이런 시도들도 있다는 것을 소개해드리고 싶었구요
언젠가 디자인 변경 추적을 하고 싶거나, 토큰량이나 컨텍스트 창 크기를 조절해야 한다거나,
디자인의 맥락을 더 압축해서 전달해야 하는 순간이 생긴다면 이런 접근들도 한번 생각해보면 좋을 것 같습니다.

그리고 오늘은 시간 관계상 전부 말하지는 못하지만 Generative UI 쪽에는 OpenUI나 A2UI과 같이
UI를 표현하고 전달하는 언어나 규약을 다루는 시도도 있으니까요, 궁금하시면 한번 찾아보셔도 좋을 것 같습니다.`,
  `여기까지 AI로 디자인할 때 집중할 다섯 곳을 소개해드렸습니다.

보셔서 아시겠지만, 모든 것들을 당근에서 하고 있진 않습니다.
다만 시행착오를 통해서 어떤 것들에 집중해야 하고, 어떤 것들은 지금 당장 중요하지 않다는 걸 조금 더 알게 되었습니다.`,
  `또한 오늘 이야기한 다섯 곳이 전부는 아닙니다.
결과물에 대한 평가에 대한 영역도 있고요,
디자인을 실제 코드와 상태로 연결하는 핸드오프 과정도 필요하고,
그리고 실제 프로덕션에서 사용되기 위해선 QA를 거쳐 배포하고 운영하는 일도 있습니다.
배포 이후 요구사항이 바뀌었을 때 어떻게 유지보수할지도 또 다른 문제고요.
오늘 얘기한 부분들은 AI로 디자인하기 위한 극히 일부분을 말씀드렸습니다.`,
  `지금 당근에서는 모델이 변하더라도, 그리고 AI가 똑똑해지더라도 변하지 않는 것들에 집중하고 있습니다.
제품 자체의 화면 목록과 흐름, 그리고 거기에서 쌓인 맥락과 판단, 그리고 디자인 시스템, 그리고 넘어서서 패턴적인 부분들에 집중하고 있습니다.`,
  `그리고 제가 처음에 문제를 통짜로 생각하고, 이후에 분해해서 생각하게 되면서 얻은 하나의 교훈이 있습니다.
생각을 멈추면, 그 자리는 AI가 차지하게 됩니다.
저는 그렇게 흘러가게 두고 싶진 않았고, 조금 더 문제를 능동적으로 그리고 의도적으로 해결하고 싶었습니다.`,
  `어떤 문제에 봉착하셨다면, 오늘 발표를 바탕으로 저와 비슷한 방식으로,
문제의 단위를 쪼개서 접근해보시는 건 어떨까요?
작다고 생각했던 문제 안에서 생각보다 큰 생태계와 다양한 시도들이 있을 수 있으니까요.
`,
  `오늘 발표 들어주셔서 감사하고요,
여기까지 하겠습니다.`,
];
