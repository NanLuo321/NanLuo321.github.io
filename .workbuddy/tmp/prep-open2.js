(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	await sleep(600);
	const trig = document.querySelector("[data-ai-trigger]");
	if (trig) trig.click();
	await sleep(1800);
	return "opened";
})()
