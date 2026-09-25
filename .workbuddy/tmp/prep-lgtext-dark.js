(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const killModals = () => {
    try {
      const g = document.getElementById("version-gate");
      if (g) {
        g.hidden = true;
        g.style.setProperty("display", "none", "important");
      }
      // 1080P 提示是 .ai-hint-modal（整块移除；只删 backdrop/ok 会留下卡片本体）
      document.querySelectorAll(".ai-hint-modal, .ai-hint-backdrop, .ai-hint-ok").forEach((n) => n.remove());
      // 只点「我知道了」按钮（正规关闭路径）；不要去 hide 祖先 ——
      // 走过 7 层父节点会把整个横幅容器一起藏掉，症状是标题 rect 变 0。
      Array.from(document.querySelectorAll("button,a,[role=button]"))
        .filter((x) => (x.textContent || "").indexOf("我知道了") >= 0 && x.offsetParent !== null)
        .forEach((b) => b.click());
    } catch (e) {}
  };

  const killer = setInterval(killModals, 200);
  killModals();
  await sleep(2600);
  killModals();
  await sleep(900);

  const bri = 0.3; // PREP_BRI
  const wp = document.getElementById("wallpaper-wrapper");
  if (wp && bri !== 1) wp.style.setProperty("filter", `brightness(${bri})`, "important");
  await sleep(700);
  killModals();
  clearInterval(killer);

  const el = document.querySelector(".banner-title");
  const cs = el ? getComputedStyle(el) : null;
  const r = el ? el.getBoundingClientRect() : null;
  const m = el ? document.getElementById(el.getAttribute("data-lg-text-on") || "") : null;
  const mt = m ? m.querySelector("text") : null;
  return JSON.stringify({
    found: !!el,
    attr: el ? el.getAttribute("data-lg-text-on") : null,
    text: el ? el.textContent.trim() : null,
    color: cs ? cs.color : null,
    bdInline: el ? el.style.backdropFilter : null,
    maskElCount: document.querySelectorAll("#lg-text-defs mask").length,
    maskText: mt ? { x: mt.getAttribute("x"), y: mt.getAttribute("y"), fs: mt.getAttribute("font-size"), sw: mt.getAttribute("stroke-width") } : null,
    rect: r ? [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)] : null,
    stats: window.__liquidText ? window.__liquidText.stats() : null,
  });
})();
