(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const out = {};
  const f = () => document.querySelector("#navbar > div");
  const isl = document.querySelector("[data-article-island]");
  const trig = document.querySelector("[data-ai-trigger]");
  if (!trig) return JSON.stringify({ err: "no trigger" });
  const info = (t) => {
    const fr = f();
    const cs = getComputedStyle(fr);
    return {
      t,
      islandW: isl.offsetWidth,
      frameW: Math.round(fr.getBoundingClientRect().width),
      frameBgc: cs.backgroundColor,
      frameBd: (cs.backdropFilter || "").slice(0, 40),
      inlineBd: fr.style.getPropertyValue("backdrop-filter").slice(0, 40),
      inlineBgc: fr.style.getPropertyValue("background-color").slice(0, 40),
      lgOn: fr.hasAttribute("data-lg-on"),
      lgSkip: fr.hasAttribute("data-lg-skip"),
      splitCls: document.getElementById("navbar").classList.contains("ai-island-split"),
      caps: Array.from(document.querySelectorAll(".ai-cap")).filter((c) => getComputedStyle(c).display !== "none").length,
      panelCls: document.querySelector("[data-ai-panel]").className,
      panelW: document.querySelector("[data-ai-panel]").offsetWidth,
    };
  };
  out.before = info("before");
  trig.click();
  await sleep(1300);
  out.open = info("open");
  trig.click();
  await sleep(1400);
  out.closed = info("closed");
  await sleep(800);
  out.settled = info("settled");
  return JSON.stringify(out);
})();
