(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  document.querySelectorAll(".ai-hint-backdrop, .ai-hint-ok").forEach((n) => n.remove());
  document.documentElement.classList.add("dark");
  // 关掉版本门，别挡住底部
  const gate = document.getElementById("version-gate");
  if (gate) gate.hidden = true;
  document.documentElement.style.overflow = "";
  await sleep(700);
  const gi = document.querySelector("#pm-home-indicator");
  const cs = gi ? getComputedStyle(gi) : null;
  return JSON.stringify({
    dark: document.documentElement.classList.contains("dark"),
    indColor: cs ? cs.color : null,
    indBottom: cs ? cs.bottom : null,
    inkVar: gi ? gi.style.getPropertyValue("--pm-hi-ink") : null,
    rootInk: getComputedStyle(document.documentElement).getPropertyValue("--pm-hi-ink"),
    tones: document.documentElement.getAttribute("data-wallpaper-tone"),
    vh: window.innerHeight,
  });
})();
