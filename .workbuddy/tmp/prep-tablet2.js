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
  await sleep(900);

  const info = (el) => {
    if (!el) return "MISSING";
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      box: [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)],
      d: cs.display,
      v: cs.visibility,
      o: cs.opacity,
      pos: cs.position,
    };
  };

  const out = {
    vw: window.innerWidth,
    vh: window.innerHeight,
    ver: (document.body.className.match(/site-\w+/) || ["?"])[0],
    navTouch: document.documentElement.className,
  };
  out.desktopNav = info(document.getElementById("navbar"));
  out.mobileNav = info(document.getElementById("mobile-nav-island"));
  out.navWrapper = info(document.getElementById("navbar-wrapper"));
  out.topRow = info(document.getElementById("top-row"));
  out.indicator = info(document.getElementById("pm-home-indicator"));

  // 右侧动作岛 vs 桌面动作岛
  out.actions = info(document.getElementById("navbar-actions"));
  out.mobileInner = document.querySelector("#mobile-nav-island")
    ? info(document.querySelector("#mobile-nav-island").firstElementChild)
    : "MISSING";
  // 是否有汉堡按钮
  const ham = document.querySelector(
    "#mobile-nav-island button, #navbar button[aria-label*='菜单'], #navbar-menu",
  );
  out.hamburger = info(ham);

  return JSON.stringify(out);
})();
