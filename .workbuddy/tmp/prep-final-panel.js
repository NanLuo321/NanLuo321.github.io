(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  // 关掉 1080P 提示弹窗
  document.querySelectorAll(".ai-hint-backdrop, [data-hint-ok]").forEach((n) => n.remove());
  const island = document.querySelector(".ai-float-island");
  const trigger = document.querySelector("[data-ai-trigger]");
  const panel = document.querySelector("[data-ai-panel]");
  if (!island || !trigger || !panel) return JSON.stringify({ err: "no nodes", island: !!island, trigger: !!trigger, panel: !!panel });
  if (!island.classList.contains("open")) trigger.click();
  await sleep(1400);
  const cs = getComputedStyle(panel);
  const r = panel.getBoundingClientRect();
  return JSON.stringify({
    open: island.classList.contains("open"),
    panelLgOn: panel.hasAttribute("data-lg-on"),
    panelInlineBf: panel.style.backdropFilter,
    panelBf: cs.backdropFilter,
    panelBg: cs.backgroundColor,
    panelBgImg: cs.backgroundImage.slice(0, 120),
    panelRect: [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)],
    lgTargets: document.querySelectorAll("[data-lg-on]").length,
  });
})();
