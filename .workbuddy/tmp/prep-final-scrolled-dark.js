(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  document.querySelectorAll(".ai-hint-backdrop, .ai-hint-ok").forEach((n) => n.remove());
  document.documentElement.classList.add("dark");
  const g = document.getElementById("version-gate");
  if (g) g.hidden = true;
  if (document.documentElement.style) document.documentElement.style.overflow = "";
  await sleep(500);
  window.scrollTo(0, 500);
  await sleep(1200);
  const gi = document.querySelector("#pm-home-indicator");
  const cs = gi ? getComputedStyle(gi) : null;
  const gr = gi ? gi.getBoundingClientRect() : null;
  return JSON.stringify({
    dark: document.documentElement.classList.contains("dark"),
    scrollY: Math.round(window.scrollY),
    indColor: cs ? cs.color : null,
    fillBg: gi ? getComputedStyle(gi.querySelector(".pm-hi-fill")).backgroundColor : null,
    trackBg: cs ? cs.backgroundColor : null,
    barRect: gr ? [Math.round(gr.x), Math.round(gr.y), Math.round(gr.width), Math.round(gr.height)] : null,
    vh: window.innerHeight,
  });
})();
