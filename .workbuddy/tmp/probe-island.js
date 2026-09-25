(async () => {
  const out = { phases: [] };
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function snap(tag) {
    const nav = document.getElementById("navbar");
    const frame = nav && nav.querySelector(":scope > div");
    const actions = document.querySelector("#navbar-actions .navbar-actions-inner");
    const grab = (el) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        w: Math.round(el.getBoundingClientRect().width),
        h: Math.round(el.getBoundingClientRect().height),
        bgc: cs.backgroundColor,
        inlineBgc: el.style.getPropertyValue("background-color"),
        bd: (cs.backdropFilter || "").slice(0, 60),
        inlineBd: el.style.getPropertyValue("backdrop-filter").slice(0, 60),
        bgImg: cs.backgroundImage.slice(0, 70),
        shadow: cs.boxShadow.slice(0, 80),
        radius: cs.borderTopLeftRadius,
        lgOn: el.hasAttribute("data-lg-on"),
        lgSkip: el.hasAttribute("data-lg-skip"),
        lgBaseBg: el.__lgBaseBg || null,
        lgTinted: el.__lgTinted || 0,
        lgNeedTint: el.__lgNeedTint || 0,
        lgRecheck: el.__lgRecheck || 0,
        hasOn: !!el.__lgOn,
      };
    };
    const caps = Array.from(document.querySelectorAll(".ai-cap")).map((c) => ({
      disp: getComputedStyle(c).display,
      left: c.style.left,
      w: c.style.width,
    }));
    out.phases.push({
      tag,
      href: location.pathname,
      body: document.body.className,
      navCls: nav ? nav.className : null,
      mode: nav ? nav.getAttribute("data-transparent-mode") : null,
      isHome: nav ? nav.getAttribute("data-is-home") : null,
      navbarCls: nav ? nav.className : null,
      frame: grab(frame),
      actions: grab(actions),
      caps,
      glassApplied: (window.__liquidGlass && window.__liquidGlass.stats().applied.length) || -1,
      dark: document.documentElement.className,
    });
  }

  snap("home-before");
  await sleep(300);

  // 走一次真实站内切页（swup 客户端导航）
  if (window.swup && window.swup.navigate) {
    try {
      window.swup.navigate("/archive/");
    } catch (e) {
      out.swupErr = String(e);
    }
  } else {
    out.swupErr = "no swup";
  }
  await sleep(1200);
  snap("after-nav");
  await sleep(1500);
  snap("after-nav+1.5s");

  return JSON.stringify(out);
})();
