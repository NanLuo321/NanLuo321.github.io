(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(600);
  let n = 0;
  let stop = false;
  const t0 = performance.now();
  const tick = () => { n++; if (!stop) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
  await sleep(1000);
  stop = true;
  const dt = performance.now() - t0;
  return { frames: n, ms: Math.round(dt), fps: Math.round((n * 1000) / dt), vis: document.visibilityState, dpr: devicePixelRatio };
})();
