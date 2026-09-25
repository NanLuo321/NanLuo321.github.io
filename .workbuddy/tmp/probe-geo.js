(async () => {
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  await sleep(200);
  const g = (el) => { const r = el.getBoundingClientRect(); return [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)]; };
  const layer = document.querySelector('#top-search');
  const cap = document.querySelector('.ts-capsule');
  const cs = getComputedStyle(cap);
  return {
    innerW: window.innerWidth,
    docClientW: document.documentElement.clientWidth,
    bodyClientW: document.body.clientWidth,
    bodyRect: g(document.body),
    layerRect: g(layer),
    layerLeft: getComputedStyle(layer).left,
    capRect: g(cap),
    capLeft: cs.left,
    capW: cs.width,
    capTransform: cs.transform,
    htmlZoom: getComputedStyle(document.documentElement).zoom,
    bodyMargin: getComputedStyle(document.body).marginLeft,
  };
})();
