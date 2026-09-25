(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  if (window.swup && window.swup.navigate) window.swup.navigate("/archive/");
  await sleep(1800);
  return JSON.stringify({ href: location.pathname });
})();
