(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  if (window.swup && window.swup.navigate) window.swup.navigate("/archive/");
  await sleep(1600);
  const trig = document.querySelector("[data-ai-trigger]");
  if (trig) trig.click();
  await sleep(1500);
  const p = document.querySelector("[data-ai-panel]");
  const f = document.querySelector("#navbar > div");
  return JSON.stringify({
    href: location.pathname,
    panel: p && p.className,
    panelRect: p && (() => { const r = p.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)]; })(),
    frameBd: f && (f.style.getPropertyValue("backdrop-filter") || "").slice(0, 30),
    frameBgc: f && getComputedStyle(f).backgroundColor,
  });
})();
