(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  document.querySelectorAll(".ai-hint-backdrop, .ai-hint-ok").forEach((n) => n.remove());
  const g = document.getElementById("version-gate");
  if (g) g.hidden = true;
  if (document.documentElement.style) document.documentElement.style.overflow = "";
  window.scrollTo(0, 500);
  await sleep(900);
  // 站点主题脚本会在 ~1s 后按系统偏好把 dark 抹掉，最后再补一次，紧接着就截图
  document.documentElement.classList.add("dark");
  await sleep(120);
  const gi = document.querySelector("#pm-home-indicator");
  const cs = gi ? getComputedStyle(gi) : null;
  const gr = gi ? gi.getBoundingClientRect() : null;
  return JSON.stringify({
    dark: document.documentElement.classList.contains("dark"),
    scrollY: Math.round(window.scrollY),
    indColor: cs ? cs.color : null,
    fillBg: gi ? getComputedStyle(gi.querySelector(".pm-hi-fill")).backgroundColor : null,
    trackBg: cs ? cs.backgroundColor : null,
    barRect: gr ? [Math.round(gr.x), Math.round(gr.y), Math.round(gr.width), Math.round(gr.height)] : null,
    vh: window.innerHeight,
  });
})();
