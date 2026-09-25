(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(600);
  const island = document.querySelector(".ai-float-island");
  const pill = document.querySelector(".navbar-pill");
  const gi = document.querySelector("#pm-home-indicator");
  return JSON.stringify({
    ver: localStorage.getItem("siteVersion"),
    bodyCls: (document.body.className.match(/site-\w+/) || [null])[0],
    lgTargets: document.querySelectorAll("[data-lg-on]").length,
    islandBf: island ? island.style.backdropFilter || getComputedStyle(island).backdropFilter : null,
    islandBg: island ? getComputedStyle(island).backgroundColor : null,
    pillBf: pill ? pill.style.backdropFilter || getComputedStyle(pill).backdropFilter : null,
    indicatorShown: gi ? getComputedStyle(gi).display : null,
  });
})();
