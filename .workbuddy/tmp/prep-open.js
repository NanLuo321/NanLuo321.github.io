(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const trig = document.querySelector("[data-ai-trigger]");
  if (!trig) return JSON.stringify({ err: "no trigger" });
  trig.click();
  await sleep(1400);
  return JSON.stringify({ ok: 1, panel: document.querySelector("[data-ai-panel]")?.className });
})();
