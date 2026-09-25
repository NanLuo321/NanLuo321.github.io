(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const out = {};
  for (let i = 0; i < 60 && !window.__topSearch; i++) await sleep(200);
  const gate = document.getElementById("version-gate");
  if (gate) { gate.hidden = true; gate.classList.remove("is-cover", "is-shown", "is-ready"); }
  document.documentElement.style.overflow = "";
  await sleep(500);
  // 模拟「上次会话按过 Ctrl+Shift+E」：塞个 1 进去 —— 现在代码不该再读它
  try { sessionStorage.setItem("topsearch-tuning-on", "1"); } catch (e) { out.seedFail = String(e); }

  const panel = () => !!document.querySelector("#top-search .ts-tune");
  out.A_fresh = panel(); // 期望 false

  const key = (type) => document.dispatchEvent(new KeyboardEvent(type, {
    key: "E", code: "KeyE", ctrlKey: true, shiftKey: true, bubbles: true, cancelable: true,
  }));
  key("keydown"); key("keyup");
  await sleep(300);
  out.B_afterKey = panel(); // 期望 true

  key("keydown"); key("keyup");
  await sleep(300);
  out.C_toggledOff = panel(); // 期望 false
  return JSON.stringify(out);
})();
