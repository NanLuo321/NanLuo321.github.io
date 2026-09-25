(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const t = document.querySelector("[data-ai-trigger]");
  const wrap = document.querySelector("[data-article-island]");
  if (t && t.getAttribute("aria-expanded") !== "true") t.click();
  await sleep(1500);
  const panel = document.querySelector("[data-ai-panel]");
  const pr = panel.getBoundingClientRect();
  return JSON.stringify({
    wrapCls: wrap ? wrap.className : null,
    islandCls: document.querySelector(".ai-float-island")?.className,
    same: wrap === document.querySelector(".ai-float-island"),
    aria: t ? t.getAttribute("aria-expanded") : null,
    panelCls: panel.className,
    panelLgOn: panel.hasAttribute("data-lg-on"),
    panelInlineBf: panel.style.backdropFilter,
    panelBgImg: getComputedStyle(panel).backgroundImage.slice(0, 160),
    lgTintVar: panel.style.getPropertyValue("--lg-tint-bg"),
    rect: [Math.round(pr.x), Math.round(pr.y), Math.round(pr.width), Math.round(pr.height)],
  });
})();
