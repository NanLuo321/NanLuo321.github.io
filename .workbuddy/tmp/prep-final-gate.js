(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  document.querySelectorAll(".ai-hint-backdrop, .ai-hint-ok").forEach((n) => n.remove());
  const gate = document.getElementById("version-gate");
  if (!gate) return JSON.stringify({ err: "no gate" });
  gate.hidden = false;
  gate.style.display = "";
  document.documentElement.style.overflow = "hidden";
  await sleep(600);
  const btns = Array.from(gate.querySelectorAll(".vg-btn")).map((b) => ({
    ver: b.getAttribute("data-ver"),
    name: (b.querySelector(".vg-name") || b).textContent.trim().replace(/\s+/g, " "),
    soon: b.hasAttribute("data-soon"),
  }));
  const r = gate.getBoundingClientRect();
  return JSON.stringify({ btns, gateRect: [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)] });
})();
