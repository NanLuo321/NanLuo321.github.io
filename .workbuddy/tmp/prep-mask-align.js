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
  document.body.appendChild(svg);
  const defs = document.createElementNS(NS, "defs");
  svg.appendChild(defs);

  const W = 420;
  const H = 110;
  const TXT = "主页测试";
  const FONT = '700 84px/1 "Noto Sans SC", system-ui, sans-serif';

  // 蒙版 E：<text>，基线按 0.82em 估
  const mE = document.createElementNS(NS, "mask");
  mE.id = "mE";
  mE.setAttribute("maskUnits", "userSpaceOnUse");
  mE.setAttribute("x", "0");
  mE.setAttribute("y", "0");
  mE.setAttribute("width", String(W));
  mE.setAttribute("height", String(H));
  mE.innerHTML = `<text x="0" y="${Math.round(84 * 0.82)}" font="700 84px sans-serif" fill="#fff">${TXT}</text>`;
  defs.appendChild(mE);

  // 蒙版 F：foreignObject 里用真实 CSS 排版
  const mF = document.createElementNS(NS, "mask");
  mF.id = "mF";
  mF.setAttribute("maskUnits", "userSpaceOnUse");
  mF.setAttribute("x", "0");
  mF.setAttribute("y", "0");
  mF.setAttribute("width", String(W));
  mF.setAttribute("height", String(H));
  const fo = document.createElementNS(NS, "foreignObject");
  fo.setAttribute("x", "0");
  fo.setAttribute("y", "0");
  fo.setAttribute("width", String(W));
  fo.setAttribute("height", String(H));
  const div = document.createElement("div");
  div.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
  div.textContent = TXT;
  div.style.cssText = `width:${W}px;height:${H}px;font:${FONT};color:#fff;display:flex;align-items:center;`;
  fo.appendChild(div);
  mF.appendChild(fo);
  defs.appendChild(mF);

  const host = document.createElement("div");
  host.style.cssText = "position:fixed;left:60px;top:140px;z-index:2147483647;background:#000;padding:0;";
  host.innerHTML = `
    <div style="position:relative;width:${W}px;height:${H}px;font:${FONT};color:#fff;display:flex;align-items:center;">
      <span>${TXT}</span>
      <div id="ovE" style="position:absolute;inset:0;background:#f00;mask-image:url(#mE);-webkit-mask-image:url(#mE);pointer-events:none;opacity:.85;"></div>
    </div>
    <div style="position:relative;width:${W}px;height:${H}px;font:${FONT};color:#fff;display:flex;align-items:center;">
      <span>${TXT}</span>
      <div id="ovF" style="position:absolute;inset:0;background:#0f0;mask-image:url(#mF);-webkit-mask-image:url(#mF);pointer-events:none;opacity:.85;"></div>
    </div>`;
  document.body.appendChild(host);
  await sleep(800);
  return JSON.stringify({ ok: true, ovE: getComputedStyle(document.getElementById("ovE")).maskImage, ovF: getComputedStyle(document.getElementById("ovF")).maskImage });
})();
