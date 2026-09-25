(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
  await sleep(300);

	// 版本门可能在 prep 等待期间才盖上（它等整站 ready 才出场）→ 再压一次
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";

  // 走「从岛内那枚放大镜飞上来」这条路径
  const btn = document.querySelector('#dynamic-island-search .dis-search-btn');
  window.__topSearch.open({ from: btn });
  await sleep(1000);
  const inp = document.querySelector('.ts-input');
  inp.value = '文章';
  inp.dispatchEvent(new Event('input', { bubbles: true }));
  await sleep(600);
  return 'open';
})();
