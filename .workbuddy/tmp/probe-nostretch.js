(async () => {
  const out = { phases: [] };
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const R = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height) };
  };
  const frame = () => document.querySelector("#navbar > div");

  function snap(tag) {
    const nav = document.getElementById("navbar");
    const isl = document.querySelector("[data-article-island]");
    const panel = document.querySelector("[data-ai-panel]");
    const trig = document.querySelector("[data-ai-trigger]");
    const firstNav = document.querySelector("#navbar .dropdown-container");
    const f = frame();
    const fcs = f ? getComputedStyle(f) : null;
    out.phases.push({
      tag,
      islandCls: isl ? isl.className : null,
      islandRect: R(isl),
      islandInlineW: isl ? isl.style.width : null,
      triggerRect: R(trig),
      firstNavRect: R(firstNav),
      frameRect: R(f),
      frameInlineBd: f ? f.style.getPropertyValue("backdrop-filter").slice(0, 40) : null,
      frameInlineBgc: f ? f.style.getPropertyValue("background-color").slice(0, 80) : null,
      frameBd: fcs ? (fcs.backdropFilter || "").slice(0, 40) : null,
      frameBgc: fcs ? fcs.backgroundColor : null,
      frameLgOn: f ? f.hasAttribute("data-lg-on") : null,
      panelCls: panel ? panel.className : null,
      panelRect: R(panel),
      panelInline: panel
        ? { left: panel.style.left, width: panel.style.width, top: panel.style.top, bottom: panel.style.bottom, height: panel.style.height, radius: panel.style.borderRadius, glassTop: panel.style.getPropertyValue("--ai-glass-top"), bd: panel.style.getPropertyValue("backdrop-filter").slice(0, 40) }
        : null,
      caps: Array.from(document.querySelectorAll(".ai-cap")).map((c) => getComputedStyle(c).display),
      panelLgOn: panel ? panel.hasAttribute("data-lg-on") : null,
      vh: window.innerHeight,
      vw: window.innerWidth,
    });
  }

  snap("idle");
  await sleep(200);

  const trig = document.querySelector("[data-ai-trigger]");
  if (!trig) return JSON.stringify({ err: "no trigger" });
  trig.click();
  await sleep(300);
  snap("t=0.3s(pill)");
  await sleep(600);
  snap("t=0.9s(expanded)");

  // 点一下根卡片 → 岛内浏览（不跳页），再返回
  const card = document.querySelector(".ai-fi-card");
  if (card) {
    const browse = card.getAttribute("href");
    card.click();
    await sleep(700);
    const p = document.querySelector("[data-ai-panel]");
    out.browse = {
      href: browse,
      path: location.pathname,
      browseHidden: p ? p.querySelector("[data-ai-browse]").hidden : null,
      panelRect: R(p),
    };
    const back = p && p.querySelector("[data-ai-back]");
    if (back) back.click();
    await sleep(700);
    out.backRect = R(document.querySelector("[data-ai-panel]"));
  }

  // 收起面板
  trig.click();
  await sleep(900);
  snap("closed");
  await sleep(600);
  snap("closed+0.6s");

  return JSON.stringify(out);
})();
