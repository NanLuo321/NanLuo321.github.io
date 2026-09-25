(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  for (let i = 0; i < 60 && !window.__topSearch; i++) await sleep(200);
  const gate = document.getElementById("version-gate");
  if (gate) { gate.hidden = true; gate.classList.remove("is-cover","is-shown","is-ready"); }
  document.documentElement.style.overflow = "";
  await sleep(600);
  // 关掉「更好的体验」弹窗（它是全站最高层，会把液态层盖住）
  try {
    const btn = Array.from(document.querySelectorAll('button,a,[role=button]')).find(x => (x.textContent||'').indexOf('我知道了') >= 0);
    if (btn) btn.click();
    const all = Array.from(document.querySelectorAll('div,section,dialog'));
    const m = all.find(x => (x.textContent||'').indexOf('更好的体验') >= 0 && x.children.length <= 10);
    if (m) { let p = m; for (let i=0;i<7 && p.parentElement && p.parentElement !== document.body;i++) p = p.parentElement; if (p && p !== document.body) p.style.display = 'none'; }
  } catch (e) {}

  const grab = document.querySelector("#top-search .ts-grab");
  const pd = (t, x, y, tgt, b) => tgt.dispatchEvent(new PointerEvent(t, {
    clientX: x, clientY: y, bubbles: true, cancelable: true, composed: true,
    pointerId: 1, pointerType: "mouse", isPrimary: true, button: 0,
    buttons: b === undefined ? 1 : b }));
  pd("pointerdown", 708, 5, grab);
  await sleep(120);
  for (const y of [40, 90, 140, 190, 240, 280]) { pd("pointermove", 708, y, window); await sleep(220); }
  await sleep(900);
  return "drag-ready";
})();
