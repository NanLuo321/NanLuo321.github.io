(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  document.querySelectorAll(".ai-hint-backdrop, .ai-hint-ok").forEach((n) => n.remove());
  const g = document.getElementById("version-gate");
  if (g) g.hidden = true;
  if (document.documentElement.style) document.documentElement.style.overflow = "";
  await sleep(400);
  window.scrollTo(0, 1800);
  await sleep(1200);
  const gi = document.querySelector("#pm-home-indicator");
  const island = document.querySelector("#top-row") || document.querySelector(".ai-float-island");
  const ir = island ? island.getBoundingClientRect() : null;
  const gr = gi ? gi.getBoundingClientRect() : null;
  const cs = gi ? getComputedStyle(gi) : null;
  return JSON.stringify({
    scrollY: Math.round(window.scrollY),
    indColor: cs ? cs.color : null,
    indBottom: cs ? cs.bottom : null,
    fillW: gi ? getComputedStyle(gi.querySelector(".pm-hi-fill")).width : null,
    pct: gi ? gi.style.getPropertyValue("--pm-hi-progress") : null,
    islandBottom: ir ? Math.round(ir.bottom) : null,
    barTop: gr ? Math.round(gr.top) : null,
    gap: ir && gr ? Math.round(gr.top - ir.bottom) : null,
    barBottom: gr ? Math.round(gr.bottom) : null,
    vh: window.innerHeight,
    atTop: document.documentElement.classList.contains("pm-at-top"),
  });
})();
