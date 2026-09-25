(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  document.querySelectorAll(".ai-hint-backdrop, [data-hint-ok]").forEach((n) => n.remove());
  await sleep(350);
  const pill = document.querySelector(".navbar-pill");
  const bar = document.querySelector("#navbar > div") || document.querySelector("#navbar");
  const act = document.querySelector(".navbar-actions-inner");
  const pr = pill ? pill.getBoundingClientRect() : null;
  const gi = document.querySelector("#pm-home-indicator");
  const gr = gi ? gi.getBoundingClientRect() : null;
  const fill = document.querySelector("#pm-home-indicator .pm-hi-fill");
  return JSON.stringify({
    path: location.pathname,
    pillCls: pill ? pill.className : null,
    pillRect: pr ? [Math.round(pr.x), Math.round(pr.y), Math.round(pr.width), Math.round(pr.height)] : null,
    pillBf: pill ? getComputedStyle(pill).backdropFilter : null,
    pillLgOn: pill ? pill.hasAttribute("data-lg-on") : null,
    barBg: bar ? getComputedStyle(bar).backgroundColor : null,
    actBg: act ? getComputedStyle(act).backgroundColor : null,
    indBottom: gi ? getComputedStyle(gi).bottom : null,
    indColor: gi ? getComputedStyle(gi).color : null,
    indFillW: fill ? fill.style.width || getComputedStyle(fill).width : null,
    indRect: gr ? [Math.round(gr.x), Math.round(gr.y), Math.round(gr.width), Math.round(gr.height)] : null,
    atTop: document.documentElement.classList.contains("pm-at-top"),
    vh: window.innerHeight,
  });
})();
