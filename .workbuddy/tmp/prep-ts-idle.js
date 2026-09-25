(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
  // 会话第一次进站：提示会自己露脸（挂载 1.5s 后）
  await sleep(2200);

	// 版本门可能在 prep 等待期间才盖上（它等整站 ready 才出场）→ 再压一次
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";

  return 'idle';
})();
