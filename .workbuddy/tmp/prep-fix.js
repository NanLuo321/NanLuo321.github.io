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
  await sleep(1300);
  killModals();
  await sleep(900);

  const pill = document.getElementById("navbar-pill");
  const cs = pill ? getComputedStyle(pill) : null;
  const strip = document.querySelector("#navbar .hidden.md\\:flex, #navbar div[class*='md:flex']");
  const mob = document.getElementById("mobile-nav-island");

  const alpha = (c) => {
    const m = c && c.match(/rgba?\([^)]*[,/]\s*([\d.]+)\)$/);
    return m ? Number(m[1]) : c && c.startsWith("oklch") ? (c.match(/\/\s*([\d.]+)/) || [])[1] : null;
  };

  // 溢出检查
  const de = document.documentElement;
  const items = [];
  strip && strip.querySelectorAll("a[href],button").forEach((el) => {
    const r = el.getBoundingClientRect();
    items.push([(el.textContent || "").trim().slice(0, 6) || el.getAttribute("aria-label") || "?", Math.round(r.x), Math.round(r.width)]);
  });

  return JSON.stringify({
    path: location.pathname,
    vw: de.clientWidth,
    overflowX: de.scrollWidth - de.clientWidth,
    pill: pill
      ? {
          on: pill.hasAttribute("data-lg-on"),
          inlineBg: pill.style.getPropertyValue("background-color") || "(none)",
          tintVar: (pill.style.getPropertyValue("--lg-tint-bg") || "(none)").slice(0, 60),
          computedBg: cs.backgroundColor,
          alpha: alpha(cs.backgroundColor),
          bf: (cs.backdropFilter || "").slice(0, 30),
        }
      : null,
    stripDisp: strip ? getComputedStyle(strip).display : "MISSING",
    stripItems: items,
    mobDisp: mob ? getComputedStyle(mob).display : "MISSING",
  });
})();
