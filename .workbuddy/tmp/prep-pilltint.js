(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const killModals = () => {
    try {
      document.querySelectorAll(".ai-hint-backdrop, [data-hint-ok]").forEach((n) => n.remove());
      const btn = Array.from(document.querySelectorAll("button,a,[role=button]")).find(
        (x) => (x.textContent || "").indexOf("我知道了") >= 0,
      );
      if (btn) btn.click();
      const g = document.getElementById("version-gate");
      if (g) g.hidden = true;
    } catch (e) {}
  };
  killModals();
  await sleep(1200);
  killModals();
  await sleep(700);

  const pill = document.getElementById("navbar-pill");
  const cs = pill ? getComputedStyle(pill) : null;
  const r = pill ? pill.getBoundingClientRect() : null;
  return JSON.stringify({
    path: location.pathname,
    cls: pill ? pill.className : null,
    rect: r ? [Math.round(r.x), Math.round(r.width), Math.round(r.height)] : null,
    lgOn: pill ? pill.hasAttribute("data-lg-on") : null,
    baseBg: pill ? String(pill.__lgBaseBg) : null,
    needTint: pill ? pill.__lgNeedTint : null,
    tinted: pill ? pill.__lgTinted : null,
    // 引擎写进内联的 background 相关
    inlineBgColor: pill ? pill.style.getPropertyValue("background-color") : null,
    inlineTintVar: pill ? pill.style.getPropertyValue("--lg-tint-bg") : null,
    // 实际算出来的
    bgColor: cs ? cs.backgroundColor : null,
    bgImage: cs ? cs.backgroundImage.slice(0, 70) : null,
    bf: cs ? cs.backdropFilter : null,
    op: cs ? cs.opacity : null,
  });
})();
