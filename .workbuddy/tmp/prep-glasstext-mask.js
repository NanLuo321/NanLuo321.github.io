(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const g = document.getElementById("version-gate");
  if (g) {
    g.hidden = true;
    g.style.setProperty("display", "none", "important");
  }
  if (document.documentElement.style) document.documentElement.style.overflow = "";
  await sleep(600);

  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.setAttribute("aria-hidden", "true");
  svg.innerHTML = `
    <defs>
      <mask id="lgTextMaskA" maskUnits="userSpaceOnUse" x="0" y="0" width="700" height="150">
        <text x="0" y="105" font-size="96" font-weight="700" font-family="sans-serif" fill="#fff">主页C</text>
      </mask>
      <mask id="lgTextMaskB" maskUnits="userSpaceOnUse" x="0" y="0" width="700" height="150">
        <text x="0" y="105" font-size="96" font-weight="700" font-family="sans-serif" fill="#fff">主页D</text>
      </mask>
    </defs>`;
  document.body.appendChild(svg);

  const mk = (id, maskId, prop, txt, top) => {
    const el = document.createElement("div");
    el.id = id;
    el.textContent = txt;
    el.style.cssText = `position:fixed;left:340px;top:${top}px;z-index:2147483647;font:700 96px/1.4 sans-serif;
      color:transparent;mix-blend-mode:normal;
      backdrop-filter:blur(9px) brightness(1.45);-webkit-backdrop-filter:blur(9px) brightness(1.45);
      background:rgba(255,255,255,.22);padding:0;margin:0;`;
    if (maskId) el.style.setProperty(prop, `url(#${maskId})`);
    return el;
  };
  document.body.append(
    mk("tC", "lgTextMaskA", "mask-image", "主页C", 110),
    mk("tD", "lgTextMaskB", "-webkit-mask-image", "主页D", 260),
  );
  await sleep(900);
  return JSON.stringify({
    gateInDom: !!document.getElementById("version-gate"),
    C: getComputedStyle(document.getElementById("tC")).maskImage,
    D: getComputedStyle(document.getElementById("tD")).webkitMaskImage,
  });
})();
