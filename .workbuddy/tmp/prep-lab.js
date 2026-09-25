(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(1500);
  return JSON.stringify(window.__lab ? window.__lab.length : -1);
})();
