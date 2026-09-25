(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const g = document.getElementById("version-gate");
  if (g) g.hidden = true;
  if (document.documentElement.style) document.documentElement.style.overflow = "";
  await sleep(500);

  const host = document.createElement("div");
  host.id = "lg-text-test";
  host.style.cssText =
    "position:fixed;left:0;top:120px;width:100%;z-index:99999;pointer-events:none;text-align:center;font:bold 96px/1 sans-serif;";
  host.innerHTML = `
    <div id="tA" style="backdrop-filter:blur(9px) brightness(1.35);-webkit-backdrop-filter:blur(9px) brightness(1.35);background:rgba(255,255,255,.28);-webkit-background-clip:text;background-clip:text;color:transparent;display:block;width:max-content;margin:0 auto;">主页A</div>
    <div id="tB" style="backdrop-filter:blur(9px) brightness(1.35);-webkit-backdrop-filter:blur(9px) brightness(1.35);color:#fff;display:block;width:max-content;margin:0 auto;padding:0 .3em;">主页B</div>
  `;
  document.body.appendChild(host);
  await sleep(700);

  const a = document.getElementById("tA").getBoundingClientRect();
  const b = document.getElementById("tB").getBoundingClientRect();
  return JSON.stringify({
    A: { rect: [Math.round(a.x), Math.round(a.y), Math.round(a.width), Math.round(a.height)], clip: getComputedStyle(document.getElementById("tA")).backgroundClip },
    B: { rect: [Math.round(b.x), Math.round(b.y), Math.round(b.width), Math.round(b.height)] },
  });
})();
