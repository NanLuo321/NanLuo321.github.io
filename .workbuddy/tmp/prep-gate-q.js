(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(300);
  const g = document.getElementById("version-gate");
  const btns = Array.from(document.querySelectorAll(".vg-btn"));
  return JSON.stringify({
    hasGate: !!g,
    gateHidden: g ? g.hidden : null,
    gateCls: g ? g.className : null,
    gateOuter: g ? g.outerHTML.slice(0, 160) : null,
    nBtns: btns.length,
    btns: btns.map((b) => ({
      ver: b.getAttribute("data-ver"),
      soon: b.hasAttribute("data-soon"),
      txt: (b.textContent || "").trim().replace(/\s+/g, " "),
    })),
    navType: (performance.getEntriesByType("navigation")[0] || {}).type,
    ver: localStorage.getItem("siteVersion"),
    bodyCls: document.body.className,
  });
})();
