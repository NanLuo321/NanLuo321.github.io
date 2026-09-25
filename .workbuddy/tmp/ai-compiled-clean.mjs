/* ============================================================
* 文章岛（iOS 灵动岛式两段动效）
*
*   ① 分割  面板在「文章」按钮原位出现（顶边 = 岛顶边，头部铺满岛内那一格），
*          原地取代按钮（240ms）
*   ② 展开  「文章」那一列向两边撑开（邻居让位），面板从岛的下沿往下
*          长出玻璃面 + 列表（440ms）
*   关闭时反向：内容淡出 → 列收窄回按钮宽、面板收回岛内那一格 → 淡出，
*   按钮再淡回来。
*
* 两条「不像外挂」的关键：
*   ① 面板顶边与导航岛顶边齐平，头部正好落在岛内那一格上；
*   ② 岛内那一段不铺玻璃（CSS 里那道硬边渐变 + --ai-glass-top），
*      所以透出来的是导航岛自己的玻璃，不会两层叠白；
*      岛的下沿以下才是面板的玻璃 —— 材质在展开那刻由 syncGlass 从岛上
*      「抄」过来（直接读计算值，颜色/模糊/描边/阴影逐项一致，用户调了
*      模糊度或切了主题也对得上），两段同料，接缝处看不出拼痕。
*
* 为什么用 absolute 而不是 fixed：
*   面板是「文章」那一列的子元素，横向只要 width:100% 就自动对称拉伸。
*   #navbar 的高度被写死成 3.5rem（见 Navbar.astro 的全局样式），
*   所以面板向下长只是「溢出绘制」，不会把页面内容推下去。
* ============================================================ */
const MOBILE_MAX = 1023;
const NAV_H = 56;
const PANEL_TARGET_W = 480;
// 只圆下两角：面板顶边与岛顶边对齐、落在岛里，所以上面两角是方的
const PILL_RADIUS = "0 0 20px 20px";
const PANEL_RADIUS = "0 0 24px 24px";
// 三胶囊分裂态：整条岛裂开后，中间胶囊（= 面板）四角都露出来，全圆
const SPLIT_PANEL_RADIUS = "24px";
const SPLIT_PILL_RADIUS = "9999px";
const GAP = 12;
const MS_SPLIT = 240;
const MS_EXPAND = 440;
const MS_CLOSE = 340;
const MS_CONTENT = 90;
const VIEW_KEEP = 80;
const HEAD_H = 44;
/** 存活中的岛 → 事件监听控制器。用 Map 而非 WeakMap，才能回收被 swup 重建掉的旧岛 */
const islandAborters = new Map();
const islandInited = new WeakSet();
const isDesktop = () => window.innerWidth > MOBILE_MAX;
/**
* 导航岛是不是沉在屏幕底部（ProMax 版 · 仅桌面端）。
*
* 面板的整套几何都建立在「岛在顶部、面板向下长」之上：顶边贴岛顶、玻璃铺在
* 岛的下沿以下、只圆下两角、可长到视口底。ProMax 把岛沉到屏幕底部，于是这里
* 的每一个方向都要镜像：底边贴岛底、玻璃铺在岛的上沿以上、只圆上两角、
* 可长到视口顶。用这一个开关统一取值，避免散落一堆 window.innerWidth 判断。
*/
const isDockBottom = () => window.innerWidth > MOBILE_MAX && document.body.classList.contains("site-promax");
/** 四角圆角值的上下镜像（只圆「伸出去」的那两个角）：
*  "0 0 20px 20px"（岛在顶部，圆下面两角） → "20px 20px 0 0" */
function mirrorRadius(r) {
	if (!isDockBottom()) return r;
	const parts = r.trim().split(/\s+/);
	return parts.length === 4 ? parts.reverse().join(" ") : r;
}
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/**
* 只写纵向与圆角：横向由「文章」那一列的宽度决定
* （面板 CSS 是 left:0 / width:100%，列一撑开它就跟着向两边拉伸）
*
* 纵向锚点由「岛在哪」决定：岛在顶部时写 top（面板从岛顶往下挂），
* ProMax 沉底时改写 bottom（面板从岛底往上长）。动画期间锚点本身不动，
* 只有 height 在变，所以 bottom 不需要进过渡列表。
*/
function applyBox(panel, box) {
	if (isDockBottom()) {
		panel.style.top = "auto";
		panel.style.bottom = `${Math.round(box.y)}px`;
	} else {
		panel.style.bottom = "auto";
		panel.style.top = `${Math.round(box.y)}px`;
	}
	panel.style.height = `${Math.round(box.h)}px`;
	panel.style.borderRadius = mirrorRadius(box.r);
}
/**
* 「贴着岛」的那条边的描边由脚本接管：
* 岛在顶部 → 顶边（顶边在岛内，多一道横线不好看）；ProMax 沉底 → 底边。
* 分裂成整块玻璃时要把它补回来，收尾再交还样式表。
*/
function setIslandEdgeBorder(panel, on) {
	const prop = isDockBottom() ? "border-bottom-color" : "border-top-color";
	if (on) {
		panel.style.setProperty(prop, "var(--ai-glass-border, color-mix(in oklch, var(--card-border, #e5e5e5) 30%, transparent))");
	} else {
		panel.style.removeProperty(prop);
	}
}
function setDuration(panel, ms) {
	panel.style.setProperty("--ai-dur", prefersReducedMotion() ? "1ms" : `${ms}ms`);
}
/** 「文章」那一列的宽度过渡时长 */
function setSlotDuration(island, ms) {
	island.style.setProperty("--ai-slot-dur", prefersReducedMotion() ? "1ms" : `${ms}ms`);
}
/** 把「文章」那一列还原成「按钮多宽就多宽」 */
function resetSlot(island, trigger) {
	island.style.removeProperty("width");
	island.style.removeProperty("--ai-slot-dur");
	void trigger?.offsetWidth;
}
/** 导航岛的玻璃框 = #navbar 唯一的那个子 div */
function frameOf(island) {
	const nav = island.closest("#navbar");
	if (!nav) return null;
	return nav.querySelector(":scope > div") ?? null;
}
/**
* 液态玻璃引擎接管了这块玻璃吗？
*
* 引擎把 `background-color` / `backdrop-filter` 写成元素上的**内联 !important**
* （见 LiquidGlass 的 applyGlass）。那是它的地盘：组件这边一旦 removeProperty，
* 抹掉的是同一个属性、连它的一起没了，而它的账本（__lgOn / data-lg-on）
* 还以为玻璃挂着、不会再写第二遍 —— 岛就永久退回样式表那层 55% 白底。
* 所以这类属性要么别碰，要么走 rebuildEngineGlass 请它重写。
*/
function engineOwns(el) {
	return !!el && el.hasAttribute("data-lg-on");
}
/** 请引擎按它自己的配方把这块玻璃的内联值重写一遍（同步；没在岗就什么都不做） */
function rebuildEngineGlass(el) {
	if (!el || !el.__lgOn) return;
	const lg = window.__liquidGlass;
	if (lg && typeof lg.rebuild === "function") lg.rebuild(el);
}
/** 兜底复位：把可能残留的内联高度还给样式表里的 h-14；
*  顺带拆掉三胶囊分裂态（#navbar 上的类 + 框上的内联玻璃覆盖 + 左右胶囊） */
function clearFrame(frame) {
	if (!frame) return;
	/* ⚠ 玻璃的 background / backdrop-filter 归引擎所有（见 engineOwns）。
	这里顺手 removeProperty 不会让它重写 —— applyGlass 的账本校验以前只看
	__lgOn，一进门就 return true —— 岛于是永久退回 color-mix(--card-bg 55%)
	的白底 + blur(20px) 磨砂。这条路径挂在 swup:beforeContentReplace 上，
	所以表现就是「切换站内任意一个链接，左岛就变白」（右边那枚动作岛不在
	文章岛的子树里、没人复位它，所以只有左岛中招）。
	引擎在岗时只还「本组件自己写过的那几项」。 */
	const props = [
		"height",
		"--ai-frame-dur",
		"transition"
	];
	if (!engineOwns(frame)) {
		props.push("background", "border-color", "box-shadow", "backdrop-filter", "-webkit-backdrop-filter");
	}
	for (const p of props) frame.style.removeProperty(p);
	const nav = frame.closest("#navbar");
	nav?.classList.remove("ai-island-split");
	nav?.style.removeProperty("transition");
	frame.classList.remove("ai-island-open", "ai-island-split");
	const row = frame.firstElementChild;
	row?.querySelectorAll(":scope > .ai-cap").forEach((c) => {
		c.style.display = "none";
	});
}
function resetPanel(panel) {
	panel.classList.add("no-anim");
	panel.classList.remove("is-shown", "is-expanded", "is-pill", "is-split");
	// 岛内浏览态一并复位：回根列表、清空清单（下次展开从「文章」五项开始）
	const browseEl = panel.querySelector("[data-ai-browse]");
	if (browseEl) browseEl.hidden = true;
	const bodyEl = panel.querySelector(".ai-fi-body");
	if (bodyEl) bodyEl.hidden = false;
	const listEl = panel.querySelector("[data-ai-browse-list]");
	if (listEl) listEl.innerHTML = "";
	// 「武装」标记（见 armBrowse）也必须摘掉：留着的话 swup 会一直放过这些卡片，
	// 收起后再点就变成整页刷新而不是平滑切页
	panel.querySelectorAll(".ai-fi-card[data-no-swup]").forEach((c) => {
		c.removeAttribute("data-no-swup");
	});
	// 收起/复位即动画结束：雨幕解冻（见 RainEffect 的 ai-anim 钩子）
	document.documentElement.classList.remove("ai-anim");
	panel.style.opacity = "";
	panel.style.removeProperty("--ai-dur");
	panel.style.removeProperty("left");
	panel.style.removeProperty("top");
	panel.style.removeProperty("bottom");
	panel.style.removeProperty("width");
	panel.style.removeProperty("height");
	panel.style.removeProperty("border-radius");
	// 玻璃是展开时从导航岛「抄」过来的，收起时一并抹掉，交还样式表
	panel.style.removeProperty("--ai-glass-bg");
	panel.style.removeProperty("--ai-glass-border");
	panel.style.removeProperty("--ai-glass-top");
	panel.style.removeProperty("--ai-head-h");
	// 贴岛那条边的描边（岛在顶部=顶边 / ProMax 沉底=底边）都交还样式表
	panel.style.removeProperty("border-top-color");
	panel.style.removeProperty("border-bottom-color");
	// 折射滤镜归引擎所有：它写的是内联 !important，我们摘掉它不会再写一遍，
	// 面板下次展开就是一块「有白底、没折射」的磨砂板（见 engineOwns）
	if (!engineOwns(panel)) {
		panel.style.removeProperty("backdrop-filter");
		panel.style.removeProperty("-webkit-backdrop-filter");
	}
	panel.style.removeProperty("box-shadow");
	// 面板撤了，「文章」按钮可以回来了；玻璃高亮也一起回来
	panel.closest("[data-article-island]")?.classList.remove("ai-live");
	document.getElementById("navbar-pill")?.classList.remove("ai-pill-hidden");
	void panel.offsetHeight;
	panel.classList.remove("no-anim");
}
/**
* 把导航岛玻璃框「此刻实际的玻璃」原样搬到面板上。
*
* 为什么不写死一份配方：岛的玻璃是会变的 —— 壁纸 banner 模式是
* color-mix(--card-bg 55%) + blur(--navbar-glass-blur)，非壁纸模式是
* 88% + blur(12px)，暗色/亮色又是不同的 --card-bg，用户还能在设置里调模糊度。
* 面板要和它「同一时刻、完全一致」才像同一块玻璃，所以直接读岛的计算值抄过来，
* 只要岛变（用户调设置、切主题），下次展开又会同步一次。
*/
/**
* 面板是否已经被「液态玻璃引擎」接管（data-lg-on）。
*
* 引擎写的是 `backdrop-filter: url(#lg-n) ...` 且带 !important，但它和我们
* 后面的 `panel.style.backdropFilter = ...` 是**同一个属性的同一条内联声明** ——
* CSSOM 里一个属性只留一条声明，后写的会把先前那条（连同 !important）整条替换掉。
* 结果：面板明明挂上了折射滤镜，却在我们写完 blur 之后又变回一块磨砂白板。
* 所以引擎接手之后，面板的 backdrop-filter 一律不再由本组件碰。
*/
function engineOwnsGlass(panel) {
	return panel.hasAttribute("data-lg-on");
}
function syncGlass(frame, panel) {
	if (!frame) return;
	const cs = getComputedStyle(frame);
	const bg = cs.backgroundColor;
	// 岛在「全透明」阶段背景是真透明：此时照搬会让面板变成一片空玻璃，
	// 列表文字糊在壁纸上。留个下限，这种情况退回样式表里的 55% 玻璃。
	// （match 无捕获组，alpha 取 [0]；[1] 会是 undefined）
	const alphaStr = (bg.match(/[\d.]+(?=\s*\)\s*$)/) || [])[0];
	const alphaNum = Number(alphaStr);
	const tooTransparent = /^rgba?\(\s*0[,\s]+0[,\s]+0[,\s]+0\s*\)$/.test(bg) || /^rgba?\(/.test(bg) && alphaNum < .12 || /^oklch?\(/.test(bg) && !Number.isNaN(alphaNum) && alphaNum < .12;
	if (!tooTransparent) panel.style.setProperty("--ai-glass-bg", bg);
	const filter = cs.backdropFilter || cs.webkitBackdropFilter || "";
	// 岛上的 backdrop-filter 可能已经被「液态玻璃引擎」换成 url(#lg-x) 折射滤镜，
	// 那是按岛自己的尺寸算的贴图，照搬到面板上会错位。这种情况跳过，
	// 面板用自己的玻璃（CSS 里那份 + 引擎给面板单独算的折射）。
	if (!engineOwnsGlass(panel) && filter && filter !== "none" && filter.indexOf("url(") === -1) {
		panel.style.backdropFilter = filter;
		panel.style.setProperty("-webkit-backdrop-filter", filter);
	}
	// 只描左/右/下三边（顶边在岛内，描了会在头部上方多一道横线）
	panel.style.setProperty("--ai-glass-border", cs.borderLeftColor);
	if (cs.boxShadow && cs.boxShadow !== "none") panel.style.boxShadow = cs.boxShadow;
}
/** 拉取某个栏目页，抽出 main 里前若干条站内链接（岛内浏览用）。
*  解析失败/网络失败直接抛错，调用方退回整页跳转。 */
async function fetchSectionLinks(pageUrl) {
	const res = await fetch(pageUrl, { credentials: "same-origin" });
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	const html = await res.text();
	const doc = new DOMParser().parseFromString(html, "text/html");
	const main = doc.querySelector("main") ?? doc.body;
	// pageUrl 是站内相对路径（卡片 href，如 "/archive/"）—— 相对路径不能当
	// new URL() 的基准，会直接抛错，结果每条链接都被 continue 掉、清单永远是空的。
	// 先把它兜成绝对地址再作基准。
	const base = new URL(pageUrl, location.href);
	const seen = new Set();
	const out = [];
	for (const a of Array.from(main.querySelectorAll("a[href]"))) {
		const raw = a.getAttribute("href") || "";
		if (!raw || raw.startsWith("#") || /^(mailto|tel|javascript):/i.test(raw)) continue;
		let abs;
		try {
			abs = new URL(raw, base);
		} catch {
			continue;
		}
		if (abs.origin !== location.origin) continue;
		const key = abs.pathname + abs.search;
		if (seen.has(key)) continue;
		const text = (a.textContent || "").replace(/\s+/g, " ").trim();
		if (!text) continue;
		seen.add(key);
		out.push({
			href: key,
			text: text.slice(0, 64)
		});
		if (out.length >= 20) break;
	}
	return out;
}
function initArticleIsland() {
	// 导航岛被 swup 整块重建时，旧节点上的 document/window 级监听要撤销，
	// 否则每切一次页就会多挂一份全局监听。
	// 面板始终在岛的子树里，岛被移除时它会跟着走，不需要单独回收。
	for (const [el, aborter] of Array.from(islandAborters)) {
		if (!el.isConnected) {
			aborter.abort();
			islandAborters.delete(el);
		}
	}
	const islands = Array.from(document.querySelectorAll("[data-article-island]"));
	islands.forEach((island) => {
		const trigger = island.querySelector("[data-ai-trigger]");
		// 面板始终留在导航岛内部，直接查就能查到。
		// （早先搬到 body 的版本会在这里查不到 → 提前 return，
		//   但前面已经把旧监听 abort 掉了，于是「点过一次就再也展不开」）
		const panel = island.querySelector("[data-ai-panel]");
		if (!trigger || !panel) return;
		// 已经初始化过：只复位，绝不重复绑定。
		// swup 切页时 astro:page-load / swup:contentReplaced 会重复触发，
		// 若这里再 abort 一次，触发按钮就会变成没有事件绑定的空壳。
		if (islandInited.has(island)) {
			island.classList.remove("open");
			trigger.setAttribute("aria-expanded", "false");
			resetPanel(panel);
			resetSlot(island, trigger);
			clearFrame(frameOf(island));
			return;
		}
		const aborter = new AbortController();
		const { signal } = aborter;
		islandAborters.set(island, aborter);
		islandInited.add(island);
		const state = {
			token: 0,
			timers: []
		};
		const clearTimers = () => {
			state.timers.forEach((t) => window.clearTimeout(t));
			state.timers = [];
		};
		const later = (fn, ms) => {
			const id = window.setTimeout(() => {
				state.timers = state.timers.filter((t) => t !== id);
				fn();
			}, ms);
			state.timers.push(id);
		};
		resetPanel(panel);
		trigger.setAttribute("aria-expanded", "false");
		/* ============================================================
		* 三胶囊分裂（只在「文章」按钮被点击展开时发生）
		*
		* 展开那一刻，整条导航岛裂成三枚独立胶囊：
		*   左 = logo + 左侧链接；中 = 「文章」列（向下长出面板）；
		*   右 = 其余链接 + 天气。
		* 中间那枚不单独画 —— 面板把玻璃顶到岛顶（--ai-glass-top: 0），
		* 头部那一格就是中间胶囊；左右两枚由 .ai-cap 实时定位。
		* 动效：左右胶囊先按「无缝铺满整条岛」落位（看起来还是原来那条），
		* 然后缝隙从 0 长出来 —— 与面板向下展开同步，就是「分裂」。
		* 岛自己的玻璃在分裂瞬间瞬时摘掉（.ai-island-split），否则两层玻璃叠白。
		* ============================================================ */
		let splitOn = false;
		let splitVisible = false;
		let splitRaf = 0;
		let capL = null;
		let capR = null;
		// startSplit 时的玻璃材料，收起时用于瞬时无缝还玻璃
		let glassSnap = null;
		const rowOf = (frame) => frame ? frame.firstElementChild ?? null : null;
		function renderSplit(t) {
			if (!capL || !capR) return;
			// 每帧实测：玻璃条是 fit-content（列宽变化会连带动整条岛），位置/尺寸
			// 都不能缓存，缓存就会「展开后玻璃错位」。三个 rect 在同一帧里读，
			// 只强制一次布局。
			const frame = frameOf(island);
			const row = rowOf(frame);
			if (!frame || !row || !row.isConnected) return;
			const rr = row.getBoundingClientRect();
			const fr = frame.getBoundingClientRect();
			const ir = island.getBoundingClientRect();
			if (fr.width < 10 || ir.width < 10) return;
			const barL = fr.left - rr.left;
			const barT = fr.top - rr.top;
			const barW = fr.width;
			const barH = fr.height;
			const colL = ir.left - rr.left;
			const colR = ir.right - rr.left;
			const gap = GAP * t;
			capL.style.left = `${barL}px`;
			capL.style.top = `${barT}px`;
			capL.style.height = `${barH}px`;
			capL.style.width = `${Math.max(0, colL - gap - barL)}px`;
			capR.style.top = `${barT}px`;
			capR.style.height = `${barH}px`;
			capR.style.left = `${colR + gap}px`;
			capR.style.width = `${Math.max(0, barL + barW - (colR + gap))}px`;
		}
		function ensureCaps(row) {
			if (!capL) capL = row.querySelector(":scope > .ai-cap-l");
			if (!capR) capR = row.querySelector(":scope > .ai-cap-r");
			if (!capL) {
				capL = document.createElement("div");
				capL.className = "ai-cap ai-cap-l";
				row.appendChild(capL);
			}
			if (!capR) {
				capR = document.createElement("div");
				capR.className = "ai-cap ai-cap-r";
				row.appendChild(capR);
			}
		}
		/** 岛此刻的玻璃档位：透明模式（full/semifull）返回 null —— 没玻璃就不用分。
		*  bg/border/shadow 是收起时的「瞬时还玻璃」材料：与左右胶囊同材质，
		*  同帧无缝换层，不用等样式表那 0.36s 的淡入（那会露出一截透明） */
		function snapshotGlass() {
			const frame = frameOf(island);
			if (!frame) return null;
			const cs = getComputedStyle(frame);
			const bg = cs.backgroundColor;
			// 「…/ 0.55)」结尾 → 最后一个数字是 alpha（正则无捕获组，必须取 [0]；
			// 取 [1] 会是 undefined → alpha 恒为 1 → 胶囊/面板变成 100% 死白不透明）
			const alphaStr = (bg.match(/[\d.]+(?=\s*\)\s*$)/) || [])[0];
			const alpha = alphaStr ? Number(alphaStr) : 1;
			if (/^rgba?\(\s*0[,\s]+0[,\s]+0[,\s]+0\s*\)$/.test(bg) || alpha < .12) return null;
			const filter = cs.backdropFilter || cs.webkitBackdropFilter || "";
			return {
				alphaPct: Math.round(alpha * 100),
				filter: filter && filter !== "none" ? filter : "blur(12px)",
				radius: cs.borderTopLeftRadius || "9999px",
				bg,
				border: cs.borderLeftColor,
				shadow: cs.boxShadow
			};
		}
		function animateSplit(target, dur, onDone) {
			if (splitRaf) cancelAnimationFrame(splitRaf);
			splitRaf = 0;
			if (!splitVisible) return;
			const d = prefersReducedMotion() ? 1 : dur;
			const from = target === 1 ? 0 : 1;
			const t0 = performance.now();
			const ease = (p) => 1 - Math.pow(1 - p, 3);
			const step = (now) => {
				const p = Math.min(1, (now - t0) / d);
				renderSplit(from + (target - from) * ease(p));
				if (p < 1) {
					splitRaf = requestAnimationFrame(step);
				} else {
					splitRaf = 0;
					// 最后一帧（缝隙刚好为 0）当场回调：收起时岛玻璃在这一帧
					// 瞬时还上，不留「合拢完还开着缝」的中间帧
					onDone?.();
				}
			};
			splitRaf = requestAnimationFrame(step);
		}
		/** 岛玻璃要瞬时摘/还。navbar.css 的 !important 壁纸规则 + 框上 0.36s 的
		*  background 过渡（navbar-surface-transition）靠级联压不稳（实测 headless
		*  里过渡会把旧值冻在起点），干脆用内联 !important 直接钉死 —— 内联
		*  important 高于一切样式表声明；还原时摘掉内联，样式表接管并顺势淡入 */
		function setSplitClass(frame, on) {
			const nav = frame.closest("#navbar") ?? frame;
			nav.classList.toggle("ai-island-split", on);
			if (on) {
				frame.style.setProperty("transition", "none");
				frame.style.setProperty("background", "transparent", "important");
				frame.style.setProperty("border-color", "transparent", "important");
				frame.style.setProperty("box-shadow", "none", "important");
				frame.style.setProperty("backdrop-filter", "none", "important");
				frame.style.setProperty("-webkit-backdrop-filter", "none", "important");
			} else {
				frame.style.removeProperty("transition");
				frame.style.removeProperty("background");
				frame.style.removeProperty("border-color");
				frame.style.removeProperty("box-shadow");
				frame.style.removeProperty("backdrop-filter");
				frame.style.removeProperty("-webkit-backdrop-filter");
			}
		}
		/** 展开②：整条岛裂成三枚胶囊（左右两枚画出来，中间由面板自己顶上） */
		function startSplit() {
			const frame = frameOf(island);
			const row = rowOf(frame);
			if (!frame || !row) return;
			splitOn = true;
			const snap = snapshotGlass();
			glassSnap = snap;
			splitVisible = !!snap;
			// 面板切换成「整块玻璃」：岛内那一格也铺上（之前透出的是岛的玻璃，岛玻璃要摘了）
			panel.style.setProperty("--ai-glass-top", "0px");
			setIslandEdgeBorder(panel, true);
			// 玻璃颜色换成「活配方」（留 var(--card-bg)），开着切主题会自己跟上。
			// 引擎接管时底色的口径由它定（岛面被压到 ~0.20 的透底值）；
			// 但面板里放的是 13px 正文，比岛上的图标更需要一点「托底」，
			// 所以在岛的透底结果上放 1.6 倍（夹在 26%~72% 之间）。
			// 太透 → 文字糊在壁纸结构上；太实 → 又回到那块发白的板子。
			const tintPct = engineOwnsGlass(panel) ? Math.max(26, Math.min(72, Math.round((snap?.alphaPct ?? 20) * 1.6))) : snap?.alphaPct ?? 55;
			panel.style.setProperty("--ai-glass-bg", `color-mix(in oklch, var(--card-bg) ${tintPct}%, transparent)`);
			panel.style.setProperty("--ai-glass-border", "color-mix(in oklch, var(--card-border, #e5e5e5) 30%, transparent)");
			// 阴影交还样式表 var(--shadow-navbar)，暗色自动换档
			panel.style.removeProperty("box-shadow");
			setSplitClass(frame, true);
			if (!snap) return;
			if (!engineOwnsGlass(panel)) {
				panel.style.backdropFilter = snap.filter;
				panel.style.setProperty("-webkit-backdrop-filter", snap.filter);
			}
			ensureCaps(row);
			for (const c of [capL, capR]) {
				if (!c) continue;
				c.classList.add("no-anim");
				c.style.setProperty("--ai-cap-alpha", `${snap.alphaPct}%`);
				c.style.setProperty("--ai-cap-radius", snap.radius);
				c.style.backdropFilter = snap.filter;
				c.style.setProperty("-webkit-backdrop-filter", snap.filter);
				c.style.display = "block";
			}
			renderSplit(0);
			void row.offsetHeight;
			for (const c of [capL, capR]) c?.classList.remove("no-anim");
			animateSplit(1, MS_EXPAND);
		}
		/** 收尾：三枚胶囊合回一条，岛玻璃瞬时原样还上（同材质，无痕） */
		function endSplit(band) {
			if (splitRaf) {
				cancelAnimationFrame(splitRaf);
				splitRaf = 0;
			}
			const frame = frameOf(island);
			if (frame) {
				setSplitClass(frame, false);
				// 无缝换层：合拢的胶囊盖着的位置，玻璃材质与岛一模一样，
				// 所以用快照「瞬时钉回」，不等样式表 0.36s 的淡入
				// （淡入会让左右两段先透明一下，露出一截壁纸）。
				// 下一拍交还样式表：值相同，过渡原地踏步，肉眼无感；
				// 开着切了主题的话则顺势交叉淡到新主题值。
				const snap = glassSnap;
				if (snap) {
					frame.style.setProperty("transition", "none");
					frame.style.setProperty("background", snap.bg, "important");
					frame.style.setProperty("border-color", snap.border, "important");
					frame.style.setProperty("box-shadow", snap.shadow && snap.shadow !== "none" ? snap.shadow : "none", "important");
					frame.style.setProperty("backdrop-filter", snap.filter, "important");
					frame.style.setProperty("-webkit-backdrop-filter", snap.filter, "important");
					void frame.offsetWidth;
					requestAnimationFrame(() => {
						frame.style.removeProperty("transition");
						frame.style.removeProperty("background");
						frame.style.removeProperty("border-color");
						frame.style.removeProperty("box-shadow");
						frame.style.removeProperty("backdrop-filter");
						frame.style.removeProperty("-webkit-backdrop-filter");
						/* ⚠ 上面这一抹是「一整组属性」，而 background / backdrop-filter
						归引擎所有：它在分裂时被 guardNavbarSplit 撤掉、又在这几微秒里
						按自己的配方写了回来（MutationObserver 跑在微任务里，早于本帧）。
						抹掉它不会再写第二遍 → 岛永久退回样式表白底（用户：
						「切换站内任意一个链接，左岛就变白」）。所以抹完立刻请它重写。 */
						rebuildEngineGlass(frame);
					});
				}
			}
			for (const c of [capL, capR]) {
				if (!c) continue;
				c.classList.add("no-anim");
				c.style.display = "none";
				c.classList.remove("no-anim");
			}
			splitOn = false;
			splitVisible = false;
			glassSnap = null;
			// 面板交还「岛内透玻璃」模式：岛玻璃已经回来了，头部那一格交给它
			panel.style.setProperty("--ai-glass-top", `${band}px`);
			setIslandEdgeBorder(panel, false);
		}
		/**
		* 量出面板该占的位置与目标宽度。
		*
		* 正常版：面板是 absolute、包含块是 .article-island（也就是「文章」那一列），
		* CSS 已经把它定成 left:0 / width:100%，所以横向不用算 —— 只要算出
		* 「这一列该撑到多宽」，面板就自动以按钮为中线向两边对称拉伸。
		*   - 纵向：贴岛的那条边与岛的对应边齐平 —— 面板的头部正好落在岛内那一格上，
		*     原地取代「文章」按钮；岛内那一段不铺玻璃（见 CSS 的 --ai-glass-top），
		*     所以导航岛自己的玻璃直接透出来，两层不会叠白。
		*     岛在顶部 → 顶边贴岛顶、往下长；ProMax 沉底 → 底边贴岛底、往上长。
		*
		* ProMax（noStretch，岛沉底）：**岛原地不动**。列不撑宽、邻居不让位、
		* 也不做三胶囊分裂；面板自己算宽度与横向位置，改成「贴着岛的上沿往外长」
		* （底边落在岛的上沿，整块玻璃都在岛外面）。这样既没有「岛向两边拉伸」，
		* 面板（比岛宽）也不会盖住左右两边的导航项、把它们的点击吃掉。
		*/
		const measure = () => {
			const tr = trigger.getBoundingClientRect();
			const ir = island.getBoundingClientRect();
			const frame = frameOf(island);
			const fr = frame ? frame.getBoundingClientRect() : tr;
			const vw = window.innerWidth;
			const vh = window.innerHeight;
			// 尺寸一律取布局值：rect 会被 hover 的 scale 放大（站点自带的
			// scale-animation:hover 给到 1.15），拿它算会随鼠标位置漂。
			const btnW = trigger.offsetWidth || tr.width;
			const navW = frame && frame.offsetWidth || fr.width;
			const dockBottom = isDockBottom();
			const noStretch = dockBottom;
			let w;
			if (noStretch) {
				/* 面板是 absolute，不吃行内空间 —— 不用再看「这一列还能长多宽」，
				直接取理想宽度，只保证两边留出 #navbar 那份 100vw-5rem 的余量。 */
				w = Math.round(Math.max(btnW, Math.min(PANEL_TARGET_W, vw - VIEW_KEEP)));
			} else {
				// 这一列能撑多宽？导航岛自己还要留在视口内（#navbar 的
				// max-w 是 100vw - 5rem），所以「岛宽 + 这一列长出来的部分」
				// 不能超过那个上限。空间不够时就只能长多少算多少。
				const room = Math.max(0, vw - VIEW_KEEP - navW);
				w = Math.round(Math.max(btnW, Math.min(PANEL_TARGET_W, btnW + room - 4)));
			}
			// 横向落点（相对「文章」那一列左缘的内联 left）：
			// 以**导航岛**为中线铺开（比按「文章」那一格居中更稳：面板宽于岛，
			// 居岛展开时左右各冒出一小截，读起来就是「岛往上长了一块」），
			// 再整体夹回视口内
			let leftInCol = 0;
			if (noStretch) {
				const cx = fr.left + fr.width / 2;
				const minLeft = VIEW_KEEP / 2;
				const maxLeft = vw - w - VIEW_KEEP / 2;
				let left = Math.round(cx - w / 2);
				left = maxLeft < minLeft ? minLeft : Math.max(minLeft, Math.min(maxLeft, left));
				leftInCol = left - ir.left;
			}
			// 行高必须实测：h-14 跟着根字号走（桌面约 56px、窄屏约 49px），
			// 写死会在小屏上错位。取玻璃框的直接子节点（就是那条导航行）。
			const row = frame?.firstElementChild;
			const rowH = row ? row.getBoundingClientRect().height : NAV_H;
			// 玻璃框自身的上下各有 1px 边框 → 岛的内高 = rowH + 2，
			// 也就是「岛内那一格」的高度 = 面板头部的高度 = 玻璃的起始位
			const framePad = 2;
			const band = Math.round(rowH + framePad);
			const absY = fr.top;
			// 贴岛锚点（相对列自身的偏移，交给 applyBox 写成 top 或 bottom）
			const anchorY = dockBottom ? ir.bottom - fr.bottom : absY - ir.top;
			/* 岛不拉伸时的锚点：面板底边压在**岛的上沿**（fr.top）上 ——
			而不是岛内那一格（anchorY 会落到岛的下沿）。 */
			const anchorOuter = ir.bottom - fr.top;
			// 面板能长多高？岛在顶部时受视口下沿限制，沉底后改受视口上沿限制
			const roomH = dockBottom ? absY - 16 : vh - absY - 16;
			return {
				frame,
				rowH,
				framePad,
				band,
				btnW,
				w,
				y: anchorY,
				yOuter: anchorOuter,
				leftInCol,
				absY,
				dockBottom,
				noStretch,
				headH: HEAD_H,
				maxH: Math.max(140, roomH)
			};
		};
		/**
		* 展开态的自然高度：临时把面板按目标宽度撑开、高度 auto 量一次，
		* 全程 no-anim 不绘制。宽度必须先设成目标值，否则栅格列数算错、
		* 量出来的高度会偏。
		*
		* 注意这是「无损测量」：is-expanded / no-anim 可能是调用前就有的状态
		* （岛内浏览时面板本来就展开着、exitBrowse 量完还要做高度动画），
		* 无条件摘掉会把展开态和动画一起打没 —— 只还原成调用前的样子。
		*/
		const measureExpandedHeight = (g) => {
			const wasExpanded = panel.classList.contains("is-expanded");
			const hadNoAnim = panel.classList.contains("no-anim");
			/* 宽度可能是调用前就有的内联值（ProMax 的「岛不拉伸」模式下，
			面板的 left/width 由脚本按岛的位置写死，width:100% 的 CSS 已经把
			主控权交给内联）—— 量完要还成原样，不能一律 removeProperty，
			否则面板会瞬间塌回「文章」那一格的宽度。 */
			const keptW = panel.style.getPropertyValue("width");
			const keptWP = panel.style.getPropertyPriority("width");
			panel.classList.add("no-anim", "is-expanded");
			panel.style.width = `${g.w}px`;
			panel.style.height = "auto";
			const h = panel.offsetHeight;
			if (!wasExpanded) panel.classList.remove("is-expanded");
			if (!hadNoAnim) panel.classList.remove("no-anim");
			if (keptW) panel.style.setProperty("width", keptW, keptWP);
			else panel.style.removeProperty("width");
			void panel.offsetHeight;
			return Math.max(96, Math.min(h, g.maxH));
		};
		const open = () => {
			if (island.classList.contains("open")) return;
			island.classList.add("open");
			trigger.setAttribute("aria-expanded", "true");
			// 移动端：交给 CSS 抽屉，不做两段式
			if (!isDesktop()) return;
			// 分裂/展开是纯主线程活，雨幕 canvas 先冻结 ~0.8s 让路
			// （RainEffect 见 html.ai-anim 就跳过重绘；resetPanel 兜底解冻）
			// 注意必须排在 clearTimers() 之后，否则刚注册的解冻 timer 会被清掉
			const token = ++state.token;
			clearTimers();
			document.documentElement.classList.add("ai-anim");
			later(() => document.documentElement.classList.remove("ai-anim"), MS_SPLIT + MS_EXPAND + 120);
			const g = measure();
			// 设定「岛内那一格」的高度：面板头部就按它铺满岛内那一行，
			// 同时也是玻璃的起始位（岛内不铺玻璃）。
			// ProMax（岛不拉伸）例外：面板整块都在岛外面、玻璃铺满全高，
			// 头部只是一条常规标题栏，所以给 HEAD_H 而不是岛高。
			panel.style.setProperty("--ai-glass-top", g.noStretch ? "0px" : `${g.band}px`);
			panel.style.setProperty("--ai-head-h", `${g.noStretch ? g.headH : g.band}px`);
			const panelH = measureExpandedHeight(g);
			// 先把岛此刻的玻璃抄到面板上：分割出来的那一块从第一帧起
			// 就与岛同材质，不存在「先白一下再对上」的闪
			syncGlass(frameOf(island), panel);
			// 药丸阶段玻璃面为零（整块都在 --ai-glass-top 以上，岛玻璃本来就垫在
			// 底下），先把面板的模糊关掉，少一块 backdrop-filter 面；
			// startSplit 摘岛玻璃时会按岛的配方把模糊铺回来。
			// ⚠ 引擎接手的面板（data-lg-on）不能碰它的内联 backdrop-filter ——
			// 那是同一个属性，写了就把折射换成 blur，而且它不会再写回来。
			if (!g.noStretch && snapshotGlass() && !engineOwns(panel)) {
				panel.style.setProperty("backdrop-filter", "none");
				panel.style.setProperty("-webkit-backdrop-filter", "none");
			}
			// ① 分割：面板先按岛内那一格的大小出现 —— 位置就是「文章」按钮原位，
			//    头部（● 文章 N ⌃）原地取代按钮，所以这一步是「形态变化」而不是
			//    「外面掉下来一块」。此刻这一列还是按钮宽，邻居还没动。
			//    ProMax（岛不拉伸）：岛连按钮都不动 —— 面板改在岛的上沿
			//    长出一条 44px 高的玻璃条（头部），「文章」那颗按钮继续亮着。
			panel.classList.add("no-anim");
			panel.classList.remove("is-expanded");
			panel.classList.add("is-pill");
			panel.style.opacity = "";
			setSlotDuration(island, 0);
			if (g.noStretch) {
				island.style.width = `${g.btnW}px`;
				panel.style.left = `${g.leftInCol}px`;
				panel.style.width = `${g.w}px`;
				applyBox(panel, {
					y: g.yOuter,
					h: g.headH,
					r: PANEL_RADIUS
				});
			} else {
				island.style.width = `${g.btnW}px`;
				applyBox(panel, {
					y: g.y,
					h: g.band,
					r: PILL_RADIUS
				});
			}
			void panel.offsetHeight;
			panel.classList.remove("no-anim");
			panel.classList.add("is-shown");
			if (!g.noStretch) {
				island.classList.add("ai-live");
				// 分裂期间淡出导航栏玻璃高亮（它会滑进面板头部底下、且越出左胶囊）
				document.getElementById("navbar-pill")?.classList.add("ai-pill-hidden");
			}
			// ② 展开：「文章」那一列撑到面板宽（左右邻居被推向两边让位），
			//    面板随之向两边拉伸，并从岛的下沿往下长出玻璃面 + 列表；
			//    与此同时整条导航岛分裂成三枚胶囊（左/中/右，缝隙从 0 长出来）。
			//    ProMax（岛不拉伸）：上面这些一个都不做 —— 只有面板自己长高，
			//    岛与它的邻居自始至终纹丝不动。
			later(() => {
				if (token !== state.token) return;
				panel.classList.remove("is-pill");
				setDuration(panel, MS_EXPAND);
				setSlotDuration(island, MS_EXPAND);
				if (g.noStretch) {
					island.style.width = `${g.btnW}px`;
					applyBox(panel, {
						y: g.yOuter,
						h: panelH,
						r: PANEL_RADIUS
					});
				} else {
					island.style.width = `${g.w}px`;
					applyBox(panel, {
						y: g.y,
						h: panelH,
						r: SPLIT_PANEL_RADIUS
					});
					startSplit();
				}
				// ③ 内容错峰淡入：等面板长开一些再显字，避免被压扁
				later(() => {
					if (token !== state.token) return;
					panel.classList.add("is-expanded");
					// 展开完成 = 岛内浏览可用，「武装」根卡片
					armBrowse();
				}, MS_CONTENT);
			}, MS_SPLIT);
		};
		const close = () => {
			if (!island.classList.contains("open")) return;
			island.classList.remove("open");
			trigger.setAttribute("aria-expanded", "false");
			const token = ++state.token;
			clearTimers();
			// 非桌面端，或面板根本没显示过：直接硬复位
			if (!isDesktop() || !panel.classList.contains("is-shown")) {
				resetPanel(panel);
				resetSlot(island, trigger);
				clearFrame(frameOf(island));
				return;
			}
			// 收起动画期间同样冻结雨幕让路（resetPanel 里解冻）
			document.documentElement.classList.add("ai-anim");
			const g = measure();
			// 反向：内容淡出 → 「文章」那一列收窄回按钮宽（邻居归位）、
			// 面板收回岛内那一格（只剩头部）→ 淡出，按钮再回来
			panel.classList.remove("is-expanded");
			panel.classList.add("is-pill");
			setDuration(panel, MS_CLOSE);
			setSlotDuration(island, MS_CLOSE);
			island.style.width = `${g.btnW}px`;
			if (splitOn) {
				// 分割态收起：面板缩回岛内那一格（全程可见、不淡出），左右胶囊向
				// 中间合拢；缝隙归零那一帧（animateSplit 完成回调）岛玻璃同材质
				// 瞬时还上、按钮归位 —— 胶囊是「滑回去吸附进岛里」的，不是消失。
				// 头部与按钮同款同位，归位瞬间肉眼无缝
				panel.style.setProperty("--ai-glass-top", "0px");
				panel.classList.add("is-split");
				applyBox(panel, {
					y: g.y,
					h: g.band,
					r: SPLIT_PILL_RADIUS
				});
				if (!splitVisible) {
					// 透明模式没有可见分裂（animateSplit 直接返回、无回调），定时器兜底归位
					later(() => {
						if (token !== state.token) return;
						endSplit(g.band);
						resetPanel(panel);
						resetSlot(island, trigger);
					}, MS_CLOSE);
					return;
				}
				animateSplit(0, MS_CLOSE, () => {
					if (token !== state.token) return;
					endSplit(g.band);
					resetPanel(panel);
					resetSlot(island, trigger);
				});
				return;
			}
			/* 收窄的落点：
			正常版 → 收回「岛内那一格」（头部刚好铺满那一行，与按钮同款同位）
			ProMax（岛不拉伸）→ 收回岛沿上那条 44px 的标题条（面板本来就在岛外面） */
			applyBox(panel, g.noStretch ? {
				y: g.yOuter,
				h: g.headH,
				r: PANEL_RADIUS
			} : {
				y: g.y,
				h: g.band,
				r: PILL_RADIUS
			});
			later(() => {
				if (token !== state.token) return;
				panel.style.opacity = "0";
			}, MS_CLOSE - 60);
			later(() => {
				if (token !== state.token) return;
				resetPanel(panel);
				resetSlot(island, trigger);
			}, MS_CLOSE + 200);
		};
		const toggle = (e) => {
			e.preventDefault();
			e.stopPropagation();
			if (island.classList.contains("open")) close();
			else open();
		};
		trigger.addEventListener("click", toggle, { signal });
		// 关闭按钮：桌面悬浮岛 + 移动端抽屉，两个都要绑上
		const closeTargets = [...Array.from(island.querySelectorAll("[data-ai-close]")), ...Array.from(panel.querySelectorAll("[data-ai-close]"))];
		closeTargets.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				e.preventDefault();
				e.stopPropagation();
				close();
			}, { signal });
		});
		// 头部（data-ai-close）已在 closeTargets 里绑了 click；这里只补键盘：
		// 头部是 role="button"，Enter / 空格 = 收起
		const headEl = panel.querySelector(".ai-fi-head");
		if (headEl) {
			headEl.addEventListener("keydown", (e) => {
				if (e.key !== "Enter" && e.key !== " ") return;
				e.preventDefault();
				close();
			}, { signal });
		}
		// 点击外部关闭（面板虽然在同一棵子树里，但仍然要单独判断）
		document.addEventListener("click", (e) => {
			const t = e.target;
			if (island.contains(t) || panel.contains(t)) return;
			close();
		}, { signal });
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") close();
		}, { signal });
		// 视口变化：开着就收掉。缩到移动端宽度时也必须收，
		// 否则玻璃框会停在撑开状态（移动端面板本身是 display:none）
		window.addEventListener("resize", () => {
			if (island.classList.contains("open")) close();
		}, { signal });
		// 展开期间用户切了明暗主题：岛的玻璃跟着 --card-bg 变了，
		// 而面板的玻璃是展开时「抄」过来的内联值，不会自己跟着变。
		// 注意要等岛的过渡走完再抄：切主题时站点会给 <html> 挂
		// .is-theme-transitioning（全局 * 过渡 0.36s），过渡途中
		// getComputedStyle 读到的是中间色，抄回来就是脏的。
		// 踩不准过渡的准确结束点，所以补一次稍晚的同步兜底。
		const themeWatch = new MutationObserver(() => {
			if (!island.classList.contains("open")) return;
			// 分裂态不用抄岛：面板/胶囊的玻璃都是「活配方」（var(--card-bg) 等），
			// 切主题自己就变了；此时岛的玻璃是摘掉的，抄回来反而是透明脏值
			if (splitOn) return;
			[430, 900].forEach((ms) => later(() => {
				if (island.classList.contains("open")) syncGlass(frameOf(island), panel);
			}, ms));
		});
		themeWatch.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class", "data-theme"]
		});
		signal.addEventListener("abort", () => themeWatch.disconnect());
		// 面板本身就在岛的子树里，两次查询会拿到同一批卡片 —— 去重，
		// 否则每张卡片被绑两次点击（enterBrowse 跑两遍、fetch 发两次）
		const items = Array.from(new Set([...Array.from(island.querySelectorAll("[data-ai-item]")), ...Array.from(panel.querySelectorAll("[data-ai-item]"))]));
		/* ============================================================
		* 岛内浏览（仅 ProMax 沉底岛）：根列表项不整页跳转，
		* 面板原地切到目标页的链接清单；「‹ 返回」回根列表；
		* 清单条目是真 <a>，点了才跳转（并照常收起面板）。
		* ============================================================ */
		let browseSeq = 0;
		/** 面板高度动画到目标 px（面板是 absolute + 固定 px 高，height 可过渡） */
		function animatePanelHeight(targetH) {
			setDuration(panel, MS_EXPAND);
			panel.style.height = `${Math.round(targetH)}px`;
		}
		/** 浏览态的目标高度：视口的四成左右，上限受视口余量约束 */
		function browseTargetHeight() {
			const g = measure();
			const want = Math.max(240, Math.round(window.innerHeight * .42));
			return Math.min(want, g.maxH);
		}
		/**
		* 岛内浏览「武装」：给面板里的根卡片挂上 data-no-swup。
		*
		* 为什么非这么做不可：swup 的链接拦截挂在 document 的**捕获阶段**，
		* 它只检查 e.defaultPrevented —— 事件还没走到 <a>，我们根本没机会
		* preventDefault，于是它照样发起站内跳转：刚展开的浏览列表连同导航岛
		* 一起被换掉（astro:page-load 又会让 initArticleIsland 复位面板）。
		* 挂上 data-no-swup 后 swup 直接放过这个链接，导航闸门就只剩我们的
		* preventDefault；收起时（resetPanel）立刻摘掉，普通点击照旧走 swup 平滑切页。
		*/
		function armBrowse() {
			if (!isDockBottom()) return;
			panel.querySelectorAll(".ai-fi-card").forEach((c) => {
				c.setAttribute("data-no-swup", "");
			});
		}
		function exitBrowse() {
			const browse = panel.querySelector("[data-ai-browse]");
			const bodyEl = panel.querySelector(".ai-fi-body");
			if (!browse || browse.hidden) return;
			browseSeq++;
			browse.hidden = true;
			if (bodyEl) bodyEl.hidden = false;
			// 高度回到根列表的自然高度（measure 会按当前 DOM 量）
			animatePanelHeight(measureExpandedHeight(measure()));
		}
		/** 进入浏览态。面板还没展开完（分裂动画中）时返回 false，退回普通跳转。 */
		async function enterBrowse(card) {
			const browse = panel.querySelector("[data-ai-browse]");
			const bodyEl = panel.querySelector(".ai-fi-body");
			const list = panel.querySelector("[data-ai-browse-list]");
			const crumb = panel.querySelector("[data-ai-browse-title]");
			if (!browse || !list) return false;
			if (!panel.classList.contains("is-expanded")) return false;
			const targetUrl = card.getAttribute("href") || "/";
			const title = card.querySelector(".ai-fi-name")?.textContent?.trim() || "文章";
			const seq = ++browseSeq;
			if (bodyEl) bodyEl.hidden = true;
			browse.hidden = false;
			if (crumb) crumb.textContent = title;
			list.innerHTML = "";
			const loading = document.createElement("div");
			loading.className = "ai-fi-browse-loading";
			loading.textContent = "正在读取…";
			list.appendChild(loading);
			animatePanelHeight(browseTargetHeight());
			let links = [];
			try {
				links = await fetchSectionLinks(targetUrl);
			} catch {
				// 拉取失败：退回整页跳转，别把用户困在面板里
				location.href = targetUrl;
				return true;
			}
			if (seq !== browseSeq) return true;
			list.innerHTML = "";
			if (!links.length) {
				const empty = document.createElement("div");
				empty.className = "ai-fi-browse-empty";
				empty.textContent = "这一页没有可列的链接";
				list.appendChild(empty);
				return true;
			}
			links.forEach((l, i) => {
				const a = document.createElement("a");
				a.className = "ai-fi-browse-row";
				a.href = l.href;
				a.style.setProperty("--ai-r", String(Math.min(i, 12)));
				const dot = document.createElement("span");
				dot.className = "ai-fi-browse-dot";
				const txt = document.createElement("span");
				txt.className = "ai-fi-browse-text";
				txt.textContent = l.text;
				const go = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				go.setAttribute("class", "ai-fi-browse-go");
				go.setAttribute("viewBox", "0 0 24 24");
				go.setAttribute("width", "14");
				go.setAttribute("height", "14");
				go.setAttribute("aria-hidden", "true");
				const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
				p.setAttribute("d", "M9 6l6 6-6 6");
				p.setAttribute("fill", "none");
				p.setAttribute("stroke", "currentColor");
				p.setAttribute("stroke-width", "2.2");
				p.setAttribute("stroke-linecap", "round");
				p.setAttribute("stroke-linejoin", "round");
				go.appendChild(p);
				a.append(dot, txt, go);
				a.addEventListener("click", () => later(close, 50), { signal });
				list.appendChild(a);
			});
			return true;
		}
		panel.querySelector("[data-ai-back]")?.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			exitBrowse();
		}, { signal });
		items.forEach((item) => {
			item.addEventListener("click", (e) => {
				// ProMax 沉底岛：面板里的根列表项 → 岛内浏览，不跳转不关门。
				// 判断必须同步：enterBrowse 是 async，把 Promise 放 if 里恒真。
				// 面板还在分裂动画中（未 is-expanded）就不拦，走普通跳转。
				if (isDockBottom() && panel.contains(item) && item.classList.contains("ai-fi-card") && panel.classList.contains("is-expanded")) {
					e.preventDefault();
					enterBrowse(item);
					return;
				}
				// 兜底：卡片处于「武装」态（带 data-no-swup）时 swup 已放过它，
				// 这里必须自己把跳转补上，否则会退化成浏览器整页加载
				const href = item.getAttribute("href");
				if (href && item.hasAttribute("data-no-swup")) {
					const swup = window.swup;
					if (typeof swup?.navigate === "function") swup.navigate(href);
					else location.href = href;
				}
				later(close, 50);
			}, { signal });
		});
	});
}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initArticleIsland);
} else {
	initArticleIsland();
}
document.addEventListener("astro:page-load", initArticleIsland);
document.addEventListener("swup:contentReplaced", initArticleIsland);
// swup 切页前：强制收起所有文章岛（导航岛的玻璃框与「文章」那一列一起还回去）
document.addEventListener("swup:beforeContentReplace", () => {
	document.querySelectorAll("[data-article-island]").forEach((island) => {
		island.classList.remove("open");
		const trigger = island.querySelector("[data-ai-trigger]");
		trigger?.setAttribute("aria-expanded", "false");
		const panel = island.querySelector("[data-ai-panel]");
		if (panel) resetPanel(panel);
		resetSlot(island, trigger);
		clearFrame(frameOf(island));
	});
});
// === 全局响应式提示弹窗（仅窄屏触发，iOS 玻璃风格）===
let hintTimer = null;
let hintActive = false;
function showResponsiveHint() {
	if (hintActive) return;
	// 检测本次页面加载是否是浏览器刷新：
	// - navigation type === 'reload' 表示 F5 / Ctrl+R / 浏览器刷新按钮
	// - navigation type === 'navigate' 表示首次打开或地址栏回车 / 链接打开
	// - swup 站内切页不会触发 DOMContentLoaded，所以不会重新弹出
	let isReload = false;
	try {
		const navEntries = performance.getEntriesByType("navigation");
		if (navEntries && navEntries[0] && navEntries[0].type === "reload") {
			isReload = true;
		}
	} catch (_e) {
		// 旧浏览器没有 performance.getEntriesByType：退回用 performance.navigation
		try {
			if (performance.navigation && performance.navigation.type === 1) {
				isReload = true;
			}
		} catch (_e2) {}
	}
	// 仅在浏览器刷新 / 首次进入时显示；站内 swup 切页不显示
	// 用 sessionStorage 做兜底（防止 swup 重新执行 script 时也弹）
	if (!isReload) {
		try {
			if (sessionStorage.getItem("__responsiveHintShown") === "1") {
				return;
			}
			sessionStorage.setItem("__responsiveHintShown", "1");
		} catch (_e) {
			// sessionStorage 不可用时回退到页面级标志
			if (window.__responsiveHintShown) return;
			window.__responsiveHintShown = true;
		}
	}
	// 清理可能存在的旧 timer
	if (hintTimer) {
		clearTimeout(hintTimer);
		hintTimer = null;
	}
	hintActive = true;
	// 动态创建 modal 元素
	const modal = document.createElement("div");
	modal.className = "ai-hint-modal";
	modal.setAttribute("role", "dialog");
	modal.setAttribute("aria-modal", "true");
	modal.innerHTML = `
			<div class="ai-hint-backdrop"></div>
			<div class="ai-hint-card">
				<div class="ai-hint-icon">
					<img src="/assets/hint-icon.png" alt="" width="96" height="96" />
				</div>
				<div class="ai-hint-title">更好的体验</div>
				<div class="ai-hint-desc">建议使用 1080P 桌面端浏览器访问本页面<br>以获得最佳显示效果</div>
				<div class="ai-hint-sub">此提示将在 10 秒后自动消失</div>
				<button type="button" class="ai-hint-ok">我知道了</button>
			</div>
		`;
	document.body.appendChild(modal);
	const dismiss = () => {
		if (modal.classList.contains("leaving")) return;
		modal.classList.add("leaving");
		setTimeout(() => {
			modal.remove();
			hintActive = false;
		}, 250);
	};
	modal.querySelector(".ai-hint-ok")?.addEventListener("click", dismiss);
	modal.querySelector(".ai-hint-backdrop")?.addEventListener("click", dismiss);
	// 10 秒自动关闭
	setTimeout(dismiss, 1e4);
	// 立即显示
	requestAnimationFrame(() => {
		modal.classList.add("show");
	});
}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", showResponsiveHint);
} else {
	showResponsiveHint();
}

