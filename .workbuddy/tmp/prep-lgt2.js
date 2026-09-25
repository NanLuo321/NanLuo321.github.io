(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const killModals = () => {
    try {
      const g = document.getElementById("version-gate");
      if (g) {
        g.hidden = true;
        g.style.setProperty("display", "none", "important");
      }
      document.querySelectorAll(".ai-hint-modal, .ai-hint-backdrop, .ai-hint-ok").forEach((n) => n.remove());
      Array.from(document.querySelectorAll("button,a,[role=button]"))
        .filter((x) => (x.textContent || "").indexOf("我知道了") >= 0 && x.offsetParent !== null)
        .forEach((b) => b.click());
    } catch (e) {}
  };
  const killer = setInterval(killModals, 200);
  killModals();
  await sleep(2200);
  killModals();
  await sleep(600);

  const WP = ""; /* PREP_WP */
  const bri = 1.0; /* PREP_BRI */

  const FLAT_URI =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' fill='%23f1f2f4'/%3E%3C/svg%3E";
  if (WP === "FLAT") {
    /* 注意：不要 display:none 掉壁纸 img —— 横幅高度是它撑起来的，一藏标题就塌成 0×0。
       换成一张纯浅灰 SVG 顶上，布局不变、背景变干净。 */
    document.querySelectorAll("#wallpaper-wrapper img").forEach((n) => {
      n.src = FLAT_URI;
    });
    const w = document.getElementById("wallpaper-wrapper");
    if (w) {
      w.style.setProperty("background-image", `url("${FLAT_URI}")`, "important");
      w.style.setProperty("background-size", "24px 24px", "important");
    }
  } else if (WP) {
    const nodes = document.querySelectorAll("#wallpaper-wrapper img, #wallpaper-wrapper video");
    nodes.forEach((n) => {
      if (n.tagName === "IMG") n.src = WP;
    });
    const w = document.getElementById("wallpaper-wrapper");
    if (w) w.style.setProperty("background-image", `url("${WP}")`, "important");
  }
  const wpEl = document.getElementById("wallpaper-wrapper");
  if (wpEl && bri !== 1) wpEl.style.setProperty("filter", `brightness(${bri})`, "important");
  await sleep(900);
  killModals();

  const el = document.querySelector(".banner-title");
  const cs = el ? getComputedStyle(el) : null;
  const r = el ? el.getBoundingClientRect() : null;
  return JSON.stringify({
    found: !!el,
    attr: el ? el.getAttribute("data-lg-text-on") : null,
    text: el ? el.textContent.trim() : null,
    bgImg: el ? el.style.backgroundImage.slice(0, 40) : null,
    bd: el ? el.style.backdropFilter : null,
    ts: el ? el.style.textShadow : null,
    rect: r ? [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)] : null,
    stats: window.__liquidText ? window.__liquidText.stats() : null,
  });
})();
