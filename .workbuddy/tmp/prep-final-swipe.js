(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  document.querySelectorAll(".ai-hint-backdrop, .ai-hint-ok").forEach((n) => n.remove());
  const g = document.getElementById("version-gate");
  if (g) g.hidden = true;
  if (document.documentElement.style) document.documentElement.style.overflow = "";
  await sleep(400);
  window.scrollTo(0, 900);
  await sleep(900);
  const before = Math.round(window.scrollY);
  const gi = document.querySelector("#pm-home-indicator");
  if (!gi) return JSON.stringify({ err: "no indicator" });
  const r = gi.getBoundingClientRect();
  const cx = r.x + r.width / 2;
  const cy = r.y + r.height / 2;
  const mk = (type, y) =>
    new PointerEvent(type, { bubbles: true, cancelable: true, clientX: cx, clientY: y, pointerId: 1, pointerType: "touch", isPrimary: true });
  gi.dispatchEvent(mk("pointerdown", cy));
  for (let dy = 4; dy <= 60; dy += 8) {
    await sleep(30);
    gi.dispatchEvent(mk("pointermove", cy - dy));
  }
  gi.dispatchEvent(mk("pointerup", cy - 60));
  await sleep(1600);
  const after = Math.round(window.scrollY);
  return JSON.stringify({
    before,
    after,
    returnedToTop: after < before - 400,
    fillW: getComputedStyle(gi.querySelector(".pm-hi-fill")).width,
    atTop: document.documentElement.classList.contains("pm-at-top"),
    indColor: getComputedStyle(gi).color,
  });
})();
