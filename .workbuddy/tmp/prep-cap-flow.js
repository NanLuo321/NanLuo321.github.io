(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const out = {};
  for (let i = 0; i < 60 && !window.__topSearch; i++) await sleep(200);
  const gate = document.getElementById("version-gate");
  if (gate) { gate.hidden = true; gate.classList.remove("is-cover", "is-shown", "is-ready"); }
  document.documentElement.style.overflow = "";
  await sleep(600);
  // 关掉「更好的体验」弹窗（它是全站最高层，会把液态层盖住）
  try {
    const btn = Array.from(document.querySelectorAll("button,a,[role=button]")).find(x => (x.textContent || "").indexOf("我知道了") >= 0);
    if (btn) btn.click();
    const all = Array.from(document.querySelectorAll("div,section,dialog"));
    const m = all.find(x => (x.textContent || "").indexOf("更好的体验") >= 0 && x.children.length <= 10);
    if (m) { let p = m; for (let i = 0; i < 7 && p.parentElement && p.parentElement !== document.body; i++) p = p.parentElement; if (p && p !== document.body) p.style.display = "none"; }
  } catch (e) { /* ignore */ }

  const root = document.querySelector("#top-search");
  const cap = document.querySelector("#top-search .ts-capsule");
  const canvas = document.querySelector("#top-search .ts-melt");
  const snap = () => {
    if (!cap) return null;
    const cs = getComputedStyle(cap);
    return {
      cls: cap.className,
      op: Number(cs.opacity).toFixed(2),
      pe: cs.pointerEvents,
      root: root ? root.className : null,
      canvasOp: canvas ? getComputedStyle(canvas).opacity : null,
    };
  };
  out.promax = document.body.classList.contains("site-promax");

  // ---- A. 打开页面时（不该有胶囊）----
  out.A_fresh = snap();

  const grab = document.querySelector("#top-search .ts-grab");
  const pd = (t, x, y, tgt, b) => tgt.dispatchEvent(new PointerEvent(t, {
    clientX: x, clientY: y, bubbles: true, cancelable: true, composed: true,
    pointerId: 1, pointerType: "mouse", isPrimary: true, button: 0,
    buttons: b === undefined ? 1 : b,
  }));
  pd("pointerdown", 708, 5, grab);
  await sleep(150);
  for (const y of [60, 160, 300]) { pd("pointermove", 708, y, window); await sleep(260); }
  pd("pointerup", 708, 300, window, 0);
  out.B_dragged = snap();

  // ---- B. 落定后（该浮现）----
  await sleep(6000);
  out.C_settled = snap();

  // ---- C. Esc 关闭 → 该退场 ----
  const inp = document.querySelector("#top-search .ts-input");
  if (inp) inp.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
  await sleep(500);
  out.D_closing = snap();
  await sleep(5000);
  out.E_closed = snap();

  return JSON.stringify(out, null, 1);
})();
