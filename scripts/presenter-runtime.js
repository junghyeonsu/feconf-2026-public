(() => {
  // Blob URLs keep embedded media self-contained without exposing huge data URLs in the UI.
  const media = new Map();
  document.querySelectorAll('[src^="data:"], [poster^="data:"]').forEach(el => {
    for (const key of ['src', 'poster']) {
      const data = el.getAttribute(key);
      if (!data?.startsWith('data:')) continue;
      if (!media.has(data)) {
        const [header, body] = data.split(',');
        const bytes = Uint8Array.from(atob(body), c => c.charCodeAt(0));
        media.set(data, URL.createObjectURL(new Blob([bytes], {type: header.slice(5).split(';')[0]})));
      }
      el.setAttribute(key, media.get(data));
    }
  });
  const pages = [...document.querySelectorAll('.page')];
  const frame = document.querySelector('.frame');
  const notes = JSON.parse(document.getElementById('speaker-notes').textContent);
  const reading = JSON.parse(document.getElementById('reading-data').textContent);
  const reduced = matchMedia('(prefers-reduced-motion:reduce)');
  let index = 0, animations = [], presenter = null, elapsed = 0, startedAt = 0, running = false;
  const fit = () => frame.style.transform = `scale(${Math.min(innerWidth / 1920, innerHeight / 1080)})`;
  function renderNote(host, pageIndex) {
    const doc = host.ownerDocument;
    const spoken = doc.createElement('p');
    spoken.textContent = notes[pageIndex];
    spoken.style.whiteSpace = 'pre-wrap';
    host.replaceChildren(spoken);
    const links = reading[pageIndex].links;
    if (!links.length) return;
    const heading = doc.createElement('h3');
    heading.textContent = '참고 링크';
    heading.style.cssText = 'margin:24px 0 12px;font-size:1em;font-weight:600';
    const list = doc.createElement('ul');
    list.style.cssText = 'padding-left:1.25em;list-style:disc;white-space:normal';
    links.forEach(link => {
      const li = doc.createElement('li');
      li.style.marginBottom = '8px';
      if (link.url) {
        const a = doc.createElement('a');
        a.href = link.url; a.textContent = link.label; a.target = '_blank'; a.rel = 'noopener noreferrer';
        a.style.cssText = 'color:inherit;text-decoration:underline;text-underline-offset:3px';
        li.appendChild(a);
      } else li.textContent = link.label;
      list.appendChild(li);
    });
    host.append(heading, list);
  }
  function syncVideos() {
    pages.forEach((p, i) => p.querySelectorAll('video').forEach(v => {
      v.muted = true;
      if (i === index && !document.hidden && !reduced.matches) v.play().catch(() => {});
      else v.pause();
    }));
  }
  function timerValue() { return elapsed + (running ? Date.now() - startedAt : 0); }
  function timerText() {
    const s = Math.floor(timerValue() / 1000);
    return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  }
  function updateTimer() {
    if (!presenter || presenter.closed) return;
    presenter.document.getElementById('timer').textContent = timerText();
    presenter.document.getElementById('pause').textContent = running ? '일시정지' : '시작';
  }
  function go(next) {
    if (!Number.isInteger(next)) return;
    next = Math.max(0, Math.min(pages.length - 1, next));
    if (next === index) return;
    animations.forEach(a => a.cancel()); animations = [];
    pages.forEach(p => { p.hidden = true; p.style.zIndex = ''; });
    const old = pages[index], incoming = pages[next];
    old.hidden = false; incoming.hidden = false; incoming.style.zIndex = '1';
    index = next; window.__setDeckActivePage?.(index); syncVideos();
    requestAnimationFrame(updatePresenter);
    if (reduced.matches) { old.hidden = true; return; }
    const exit = old.animate([{opacity: 1}, {opacity: 0}], {duration: 200, easing: 'cubic-bezier(0.4,0,1,1)', fill: 'both'});
    const enter = incoming.animate([{opacity: 0}, {opacity: 1}], {duration: 320, delay: 70, easing: 'cubic-bezier(0,0,0.2,1)', fill: 'both'});
    animations = [exit, enter];
    enter.finished.then(() => {
      if (index === next) { old.hidden = true; exit.cancel(); enter.cancel(); animations = []; }
    }).catch(() => {});
  }
  function preview(id, pageIndex) {
    const doc = presenter.document, host = doc.getElementById(id);
    host.replaceChildren();
    if (pageIndex >= pages.length) { host.textContent = '마지막 장표입니다'; return; }
    const clone = pages[pageIndex].firstElementChild.cloneNode(true);
    const sourceCanvases = pages[pageIndex].querySelectorAll('canvas');
    clone.querySelectorAll('canvas').forEach((canvas, i) => {
      const img = doc.createElement('img');
      img.src = sourceCanvases[i].toDataURL();
      img.style.cssText = canvas.style.cssText; img.className = canvas.className;
      img.setAttribute('aria-hidden', 'true'); canvas.replaceWith(img);
    });
    clone.querySelectorAll('video').forEach(v => {
      const img = doc.createElement('img');
      img.src = v.poster; img.style.cssText = v.style.cssText; img.className = v.className;
      img.alt = v.getAttribute('aria-label') || '영상 미리보기'; v.replaceWith(img);
    });
    clone.querySelectorAll('img').forEach(img => img.loading = 'eager');
    host.appendChild(clone);
  }
  function sizePreviews() {
    if (!presenter || presenter.closed) return;
    for (const id of ['current-preview', 'next-preview']) {
      const host = presenter.document.getElementById(id);
      if (host.firstElementChild) {
        const scale = Math.min(host.clientWidth / 1920, host.clientHeight / 1080);
        Object.assign(host.firstElementChild.style, {transform: `scale(${scale})`, left: `${(host.clientWidth - 1920 * scale) / 2}px`, top: `${(host.clientHeight - 1080 * scale) / 2}px`});
      }
    }
  }
  function updatePresenter() {
    if (!presenter || presenter.closed) return;
    const doc = presenter.document;
    doc.getElementById('page-count').textContent = `${index + 1} / ${pages.length}`;
    doc.getElementById('current-label').textContent = `현재 장표 · ${index + 1}`;
    doc.getElementById('next-label').textContent = index + 1 < pages.length ? `다음 장표 · ${index + 2}` : '다음 장표';
    renderNote(doc.getElementById('notes'), index);
    doc.getElementById('notes').scrollTop = 0;
    doc.getElementById('prev').disabled = index === 0;
    doc.getElementById('next').disabled = index === pages.length - 1;
    preview('current-preview', index); preview('next-preview', index + 1);
    sizePreviews(); updateTimer();
  }
  function keydown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey || e.target.closest('input,textarea,select,button,a,[contenteditable="true"]')) return;
    // Let readers scroll the script with Space/PageDown without changing slides.
    if (e.target.closest('#notes') && [' ', 'PageDown', 'PageUp', 'Home', 'End'].includes(e.key)) return;
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(index + 1); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); go(index - 1); }
    else if (e.key === 'Home') { e.preventDefault(); go(0); }
    else if (e.key === 'End') { e.preventDefault(); go(pages.length - 1); }
    else if (e.key.toLowerCase() === 'p') { e.preventDefault(); openPresenter(); }
    else if (e.key.toLowerCase() === 'f') {
      const doc = e.view.document;
      if (doc.fullscreenElement) doc.exitFullscreen(); else doc.documentElement.requestFullscreen().catch(() => {});
    }
  }
  function openPresenter() {
    if (presenter && !presenter.closed) { presenter.focus(); return; }
    presenter = window.open('', 'feconf-2026-presenter', 'popup,width=1360,height=900');
    if (!presenter) { alert('발표자 창을 열 수 없습니다. 이 파일의 팝업을 허용한 뒤 P 키를 다시 눌러 주세요.'); return; }
    presenter.document.open();
    presenter.document.write(`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FECONF 2026 · 발표자 모드</title><style>
      *{box-sizing:border-box}html,body{margin:0;height:100%;background:#171717;color:#f7f7f7;font:16px/1.5 system-ui,-apple-system,sans-serif}body{display:flex;flex-direction:column}header{display:flex;align-items:center;justify-content:space-between;padding:18px 28px;border-bottom:1px solid #ffffff24;gap:24px}h1{font-size:18px;font-weight:500;margin:0}.timer-group{display:flex;align-items:center;gap:12px}#timer{font-size:30px;line-height:1;font-variant-numeric:tabular-nums;margin-right:8px}button{font:inherit;color:inherit;background:#ffffff0c;border:1px solid #ffffff30;border-radius:8px;padding:8px 14px;cursor:pointer}button:hover{background:#ffffff18}button:focus-visible{outline:3px solid #ff6600;outline-offset:3px}button:disabled{opacity:.3;cursor:default}.workspace{display:grid;grid-template-columns:minmax(0,1.18fr) minmax(0,1fr);gap:28px;padding:24px 28px;flex:1;min-height:0}.previews{display:grid;grid-template-rows:minmax(0,1fr) minmax(0,.8fr);gap:18px;overflow:hidden;min-width:0;min-height:0}.previews>section{display:flex;flex-direction:column;min-height:0}.preview-label{color:#b9b9b9;font-size:13px;margin:0 0 8px}.preview{width:100%;flex:1;min-height:0;position:relative;overflow:hidden;background:#171717}.preview>.approved-deck{line-height:1.5;letter-spacing:-.005em;font-feature-settings:'ss01' on,'cv11' on,'calt' on,'tnum' off;-webkit-font-smoothing:antialiased;position:absolute;left:0;top:0;transform-origin:top left;pointer-events:none}.notes-area{display:flex;flex-direction:column;min-height:0;min-width:0}.notes-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}.notes-heading h2{margin:0;font-size:16px;font-weight:500}#notes{white-space:pre-wrap;font-size:24px;line-height:1.75;overflow:auto;flex:1;padding-right:12px;overflow-wrap:anywhere}.note-size{display:flex;gap:6px}.note-size button{padding:4px 10px}footer{display:flex;justify-content:space-between;align-items:center;padding:16px 28px;border-top:1px solid #ffffff24;gap:20px}#page-count{font-variant-numeric:tabular-nums}#connection{font-size:13px;color:#b9b9b9}.navigation{display:flex;gap:10px}@media(max-width:850px){.workspace{grid-template-columns:minmax(0,1fr);overflow:auto}.previews{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:12px;overflow:visible}.preview{flex:none;aspect-ratio:16/9}.notes-area{min-height:300px}#notes{font-size:22px}header{flex-wrap:wrap}footer{flex-wrap:wrap}}
      </style></head><body><header><h1>FECONF 2026 · 발표자 모드</h1><div class="timer-group"><output id="timer" aria-label="경과 시간">00:00</output><button id="pause">시작</button><button id="reset">초기화</button></div></header><main class="workspace"><div class="previews"><section><h2 class="preview-label" id="current-label">현재 장표</h2><div class="preview" id="current-preview"></div></section><section><h2 class="preview-label" id="next-label">다음 장표</h2><div class="preview" id="next-preview"></div></section></div><section class="notes-area"><div class="notes-heading"><h2>발표 대본</h2><div class="note-size"><button id="smaller" aria-label="대본 글자 작게">A−</button><button id="larger" aria-label="대본 글자 크게">A+</button></div></div><div id="notes" tabindex="0" aria-label="현재 장표 대본"></div></section></main><footer><span id="connection">청중 창과 연결됨 · ← → 이동 · F 전체 화면</span><div class="navigation"><button id="prev">이전</button><span id="page-count"></span><button id="next">다음</button></div></footer></body></html>`);
    presenter.document.close();
    const doc = presenter.document;
    // Copy the embedded fonts; slide CSS is carried by each preview clone.
    const fontStyle = doc.createElement('style');
    fontStyle.textContent = [...document.styleSheets].flatMap(s => {try{return [...s.cssRules].filter(r => r.type === CSSRule.FONT_FACE_RULE).map(r => r.cssText)}catch{return []}}).join('\n');
    doc.head.appendChild(fontStyle);
    doc.getElementById('prev').onclick = () => go(index - 1);
    doc.getElementById('next').onclick = () => go(index + 1);
    doc.getElementById('pause').onclick = () => {
      if (running) { elapsed = timerValue(); running = false; } else { startedAt = Date.now(); running = true; }
      updateTimer();
    };
    doc.getElementById('reset').onclick = () => { elapsed = 0; startedAt = Date.now(); updateTimer(); };
    let fontSize = 24;
    doc.getElementById('smaller').onclick = () => doc.getElementById('notes').style.fontSize = `${fontSize = Math.max(16, fontSize - 2)}px`;
    doc.getElementById('larger').onclick = () => doc.getElementById('notes').style.fontSize = `${fontSize = Math.min(44, fontSize + 2)}px`;
    presenter.addEventListener('keydown', keydown);
    presenter.addEventListener('resize', sizePreviews);
    if (!startedAt) { startedAt = Date.now(); running = true; }
    updatePresenter();
  }
  addEventListener('keydown', keydown); addEventListener('resize', fit);
  reduced.addEventListener('change', syncVideos);
  document.addEventListener('visibilitychange', syncVideos);
  addEventListener('beforeunload', () => {
    if (presenter && !presenter.closed) {
      presenter.document.getElementById('connection').textContent = '청중 창이 닫혔습니다. 청중 HTML을 다시 열고 P 키를 눌러 주세요.';
      presenter.document.querySelectorAll('button').forEach(b => b.disabled = true);
    }
  });
  setInterval(updateTimer, 250);
  fit(); syncVideos();
})();
