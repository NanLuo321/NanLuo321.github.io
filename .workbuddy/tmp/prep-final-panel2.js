(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const islands = Array.from(document.querySelectorAll(".ai-float-island"));
  const triggers = Array.from(document.querySelectorAll("[data-ai-trigger]"));
  const panels = Array.from(document.querySelectorAll("[data-ai-panel]"));
  const info = {
    nIslands: islands.length,
    nTriggers: triggers.length,
    nPanels: panels.length,
    islands: islands.map((n) => ({
      cls: n.className,
      hidden: n.offsetParent === null,
      rect: [Math.round(n.getBoundingClientRect().x), Math.round(n.getBoundingClientRect().y)],
    })),
    triggerListeners: triggers.map((t) => {
      const l = typeof getEventListeners === "function" ? getEventListeners(t) : {};
      return { tag: t.tagName, cls: t.className.slice(0, 40), click: (l.click || []).length, vis: t.offsetParent !== null };
    }),
    hintModals: Array.from(document.querySelectorAll("[class*=hint]")).map((n) => n.className),
  };
  // 找一个可见且挂了 click 的 trigger 点下去
  const t = triggers.find((x) => x.offsetParent !== null) || triggers[0];
  if (t) t.click();
  await sleep(1600);
  const island = document.querySelector(".ai-float-island");
  const panel = document.querySelector("[data-ai-panel]");
  return JSON.stringify({
    ...info,
    afterClick: {
      open: island ? island.classList.contains("open") : null,
      ariaExpanded: t ? t.getAttribute("aria-expanded") : null,
      panelRect: panel ? [Math.round(panel.getBoundingClientRect().x), Math.round(panel.getBoundingClientRect().y), Math.round(panel.getBoundingClientRect().width), Math.round(panel.getBoundingClientRect().height)] : null,
      panelIsExp: panel ? panel.classList.contains("is-expanded") : null,
      panelOpacity: panel ? getComputedStyle(panel).opacity : null,
      docClasses: document.documentElement.className,
    },
  });
})();
