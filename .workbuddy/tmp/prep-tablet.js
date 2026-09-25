(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const killModals = () => {
    try {
      document.querySelectorAll(".ai-hint-backdrop, [data-hint-ok]").forEach((n) => n.remove());
      const btn = Array.from(document.querySelectorAll("button,a,[role=button]")).find(
        (x) => (x.textContent || "").indexOf("我知道了") >= 0,
      );
      if (btn) btn.click();
      const g = document.getElementById("version-gate");
      if (g) g.hidden = true;
    } catch (e) {}
  };
  killModals();
  await sleep(1200);
  killModals();
  await sleep(900);

  const info = (el) => {
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      w: Math.round(r.width),
      h: Math.round(r.height),
      d: cs.display,
      v: cs.visibility,
      o: cs.opacity,
    };
  };

  const out = {
    path: location.pathname,
    vw: window.innerWidth,
    ver: (document.body.className.match(/site-\w+/) || ["?"])[0],
  };

  const nav = document.querySelector("#navbar");
  out.navbar = info(nav);
  const inner = document.querySelector("#navbar > div");
  out.navInner = info(inner);
  const track = document.querySelector(".navbar-track");
  out.track = info(track);
  const actions = document.querySelector("#navbar-actions");
  out.actions = info(actions);
  const actionsInner = document.querySelector(".navbar-actions-inner");
  out.actionsInner = info(actionsInner);

  // 每个导航项
  const items = [];
  document.querySelectorAll(".navbar-track > *").forEach((el) => {
    const i = info(el);
    if (!i) return;
    items.push({
      tag: el.tagName,
      cls: String(el.className).slice(0, 40),
      text: (el.textContent || "").trim().slice(0, 8),
      ...i,
    });
  });
  out.items = items;

  // 右侧动作图标
  const acts = [];
  document.querySelectorAll("#navbar-actions *").forEach((el) => {
    if (el.children.length > 2) return;
    const i = info(el);
    if (i) acts.push({ cls: String(el.className).slice(0, 34), ...i });
  });
  out.acts = acts.slice(0, 18);

  // 是否有移动端抽屉被当成可见
  const drawer = document.querySelector("[data-ai-mobile-drawer]");
  out.drawer = info(drawer);

  return JSON.stringify(out);
})();
