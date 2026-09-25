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

  const WP = "/retro-games.jpg"; /* PREP_WP */
  const bri = 1.0; /* PREP_BRI */

  if (WP === "FLAT") {
    document
      .querySelectorAll("#wallpaper-wrapper img, #wallpaper-wrapper video")
      .forEach((n) => n.style.setProperty("display", "none", "important"));
    const w = document.getElementById("wallpaper-wrapper");
    if (w) w.style.setProperty("background", "#f1f2f4", "important");
    document.querySelectorAll("#banner img, .banner img").forEach((n) => n.style.setProperty("visibility", "hidden", "important"));
    const ov = document.querySelector("#banner .banner-overlay, #banner .banner-gradient");
    if (ov) ov.style.setProperty("display", "none", "important");
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
