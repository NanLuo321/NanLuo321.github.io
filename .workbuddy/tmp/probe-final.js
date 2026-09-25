(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const out = { steps: [] };
  const f = () => document.querySelector("#navbar > div");
  const isl = document.querySelector("[data-article-island]");
  const trig = document.querySelector("[data-ai-trigger]");
  const st = (t) => {
    const fr = f();
    const cs = getComputedStyle(fr);
    return {
      t,
      href: location.pathname,
      bgc: cs.backgroundColor,
      inlineBd: fr.style.getPropertyValue("backdrop-filter").slice(0, 30),
      inlineBgc: fr.style.getPropertyValue("background-color").slice(0, 24),
      lgOn: fr.hasAttribute("data-lg-on"),
      sawOn: (window.__liquidGlass && window.__liquidGlass.stats().applied.length) || -1,
      islandW: isl.offsetWidth,
    };
  };
  const good = (s) => s.bgc.includes("0.19") && s.inlineBd.indexOf("url(") >= 0 && s.lgOn;
  out.steps.push(Object.assign({ ok: good(st("baseline")) }, st("baseline")));

  // ① 手动抹掉引擎的内联值 → 自愈
  const fr = f();
  fr.style.removeProperty("background-color");
  fr.style.removeProperty("backdrop-filter");
  out.steps.push(Object.assign({ ok: good(st("clobbered")), note: "should be BAD" }, st("clobbered")));
  window.__liquidGlass.run();
  await sleep(400);
  out.steps.push(Object.assign({ ok: good(st("healed")) }, st("healed")));

  // ② 展开 → 收起
  trig.click();
  await sleep(1400);
  out.steps.push(Object.assign({ ok: good(st("opened")) }, st("opened")));
  trig.click();
  await sleep(1600);
  out.steps.push(Object.assign({ ok: good(st("closed")) }, st("closed")));

  // ③ 站内切页
  if (window.swup && window.swup.navigate) window.swup.navigate("/archive/");
  await sleep(1800);
  out.steps.push(Object.assign({ ok: good(st("after-nav")) }, st("after-nav")));
  await sleep(1500);
  out.steps.push(Object.assign({ ok: good(st("after-nav+1.5")), vw: window.innerWidth }, st("after-nav+1.5")));

  out.allOk = out.steps.slice(1).every((s) => s.ok);
  return JSON.stringify(out, null, 1);
})();
