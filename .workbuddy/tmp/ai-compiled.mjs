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

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsTUFBTSxhQUFhO0FBQ25CLE1BQU0sUUFBUTtBQUNkLE1BQU0saUJBQWlCOztBQUV2QixNQUFNLGNBQWM7QUFDcEIsTUFBTSxlQUFlOztBQUVyQixNQUFNLHFCQUFxQjtBQUMzQixNQUFNLG9CQUFvQjtBQUMxQixNQUFNLE1BQU07QUFDWixNQUFNLFdBQVc7QUFDakIsTUFBTSxZQUFZO0FBQ2xCLE1BQU0sV0FBVztBQUNqQixNQUFNLGFBQWE7QUFDbkIsTUFBTSxZQUFZO0FBQ2xCLE1BQU0sU0FBUzs7QUFFZixNQUFNLGlCQUFpQixJQUFJLElBQThCO0FBQ3pELE1BQU0sZUFBZSxJQUFJLFFBQWlCO0FBQzFDLE1BQU0sa0JBQWtCLE9BQU8sYUFBYTs7Ozs7Ozs7O0FBUzVDLE1BQU0scUJBQXFCLE9BQU8sYUFBYSxjQUFjLFNBQVMsS0FBSyxVQUFVLFNBQVMsYUFBYTs7O0FBRzNHLFNBQVMsYUFBYSxHQUFtQjtDQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU87Q0FDNUIsTUFBTSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLO0NBQ2xDLE9BQU8sTUFBTSxXQUFXLElBQUksTUFBTSxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSTtBQUN6RDtBQUNBLE1BQU0sNkJBQTZCLE9BQU8sV0FBVyxrQ0FBa0MsQ0FBQyxDQUFDOzs7Ozs7Ozs7QUFjekYsU0FBUyxTQUFTLE9BQW9CLEtBQWdCO0NBQ3JELElBQUksYUFBYSxHQUFHO0VBQ25CLE1BQU0sTUFBTSxNQUFNO0VBQ2xCLE1BQU0sTUFBTSxTQUFTLEdBQUcsS0FBSyxNQUFNLElBQUksQ0FBQyxFQUFFO0NBQzNDLE9BQU87RUFDTixNQUFNLE1BQU0sU0FBUztFQUNyQixNQUFNLE1BQU0sTUFBTSxHQUFHLEtBQUssTUFBTSxJQUFJLENBQUMsRUFBRTtDQUN4QztDQUNBLE1BQU0sTUFBTSxTQUFTLEdBQUcsS0FBSyxNQUFNLElBQUksQ0FBQyxFQUFFO0NBQzFDLE1BQU0sTUFBTSxlQUFlLGFBQWEsSUFBSSxDQUFDO0FBQzlDOzs7Ozs7QUFNQSxTQUFTLG9CQUFvQixPQUFvQixJQUFtQjtDQUNuRSxNQUFNLE9BQU8sYUFBYSxJQUFJLHdCQUF3QjtDQUN0RCxJQUFJLElBQUk7RUFDUCxNQUFNLE1BQU0sWUFBWSxNQUFNLDJGQUEyRjtDQUMxSCxPQUFPO0VBQ04sTUFBTSxNQUFNLGVBQWUsSUFBSTtDQUNoQztBQUNEO0FBQ0EsU0FBUyxZQUFZLE9BQW9CLElBQWtCO0NBQzFELE1BQU0sTUFBTSxZQUFZLFlBQVkscUJBQXFCLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRztBQUMvRTs7QUFFQSxTQUFTLGdCQUFnQixRQUFxQixJQUFrQjtDQUMvRCxPQUFPLE1BQU0sWUFBWSxpQkFBaUIscUJBQXFCLElBQUksUUFBUSxHQUFHLEdBQUcsR0FBRztBQUNyRjs7QUFFQSxTQUFTLFVBQVUsUUFBcUIsU0FBbUM7Q0FDMUUsT0FBTyxNQUFNLGVBQWUsT0FBTztDQUNuQyxPQUFPLE1BQU0sZUFBZSxlQUFlO0NBQzNDLEtBQUssU0FBUztBQUNmOztBQUVBLFNBQVMsUUFBUSxRQUFxQztDQUNyRCxNQUFNLE1BQU0sT0FBTyxRQUFRLFNBQVM7Q0FDcEMsSUFBSSxDQUFDLEtBQUssT0FBTztDQUNqQixPQUFPLElBQUksY0FBYyxjQUFjLEtBQW9CO0FBQzVEOzs7Ozs7Ozs7O0FBVUEsU0FBUyxXQUFXLElBQTZCO0NBQ2hELE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxhQUFhLFlBQVk7QUFDNUM7O0FBRUEsU0FBUyxtQkFBbUIsSUFBOEI7Q0FDekQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxHQUFXLFFBQVE7Q0FDaEMsTUFBTSxLQUFNLE9BQWU7Q0FDM0IsSUFBSSxNQUFNLE9BQU8sR0FBRyxZQUFZLFlBQVksR0FBRyxRQUFRLEVBQUU7QUFDMUQ7OztBQUdBLFNBQVMsV0FBVyxPQUFpQztDQUNwRCxJQUFJLENBQUMsT0FBTzs7Ozs7Ozs7Q0FRWixNQUFNLFFBQWtCO0VBQ3ZCO0VBQ0E7RUFDQTtDQUNEO0NBQ0EsSUFBSSxDQUFDLFdBQVcsS0FBSyxHQUFHO0VBQ3ZCLE1BQU0sS0FBSyxjQUFjLGdCQUFnQixjQUFjLG1CQUFtQix5QkFBeUI7Q0FDcEc7Q0FDQSxLQUFLLE1BQU0sS0FBSyxPQUFPLE1BQU0sTUFBTSxlQUFlLENBQUM7Q0FDbkQsTUFBTSxNQUFNLE1BQU0sUUFBUSxTQUFTO0NBQ25DLEtBQUssVUFBVSxPQUFPLGlCQUFpQjtDQUN2QyxLQUFLLE1BQU0sZUFBZSxZQUFZO0NBQ3RDLE1BQU0sVUFBVSxPQUFPLGtCQUFrQixpQkFBaUI7Q0FDMUQsTUFBTSxNQUFNLE1BQU07Q0FDbEIsS0FBSyxpQkFBOEIsa0JBQWtCLENBQUMsQ0FBQyxTQUFTLE1BQU07RUFDckUsRUFBRSxNQUFNLFVBQVU7Q0FDbkIsQ0FBQztBQUNGO0FBQ0EsU0FBUyxXQUFXLE9BQTBCO0NBQzdDLE1BQU0sVUFBVSxJQUFJLFNBQVM7Q0FDN0IsTUFBTSxVQUFVLE9BQU8sWUFBWSxlQUFlLFdBQVcsVUFBVTs7Q0FFdkUsTUFBTSxXQUFXLE1BQU0sY0FBMkIsa0JBQWtCO0NBQ3BFLElBQUksVUFBVSxTQUFTLFNBQVM7Q0FDaEMsTUFBTSxTQUFTLE1BQU0sY0FBMkIsYUFBYTtDQUM3RCxJQUFJLFFBQVEsT0FBTyxTQUFTO0NBQzVCLE1BQU0sU0FBUyxNQUFNLGNBQTJCLHVCQUF1QjtDQUN2RSxJQUFJLFFBQVEsT0FBTyxZQUFZOzs7Q0FHL0IsTUFBTSxpQkFBOEIsMkJBQTJCLENBQUMsQ0FBQyxTQUFTLE1BQU07RUFDL0UsRUFBRSxnQkFBZ0IsY0FBYztDQUNqQyxDQUFDOztDQUVELFNBQVMsZ0JBQWdCLFVBQVUsT0FBTyxTQUFTO0NBQ25ELE1BQU0sTUFBTSxVQUFVO0NBQ3RCLE1BQU0sTUFBTSxlQUFlLFVBQVU7Q0FDckMsTUFBTSxNQUFNLGVBQWUsTUFBTTtDQUNqQyxNQUFNLE1BQU0sZUFBZSxLQUFLO0NBQ2hDLE1BQU0sTUFBTSxlQUFlLFFBQVE7Q0FDbkMsTUFBTSxNQUFNLGVBQWUsT0FBTztDQUNsQyxNQUFNLE1BQU0sZUFBZSxRQUFRO0NBQ25DLE1BQU0sTUFBTSxlQUFlLGVBQWU7O0NBRTFDLE1BQU0sTUFBTSxlQUFlLGVBQWU7Q0FDMUMsTUFBTSxNQUFNLGVBQWUsbUJBQW1CO0NBQzlDLE1BQU0sTUFBTSxlQUFlLGdCQUFnQjtDQUMzQyxNQUFNLE1BQU0sZUFBZSxhQUFhOztDQUV4QyxNQUFNLE1BQU0sZUFBZSxrQkFBa0I7Q0FDN0MsTUFBTSxNQUFNLGVBQWUscUJBQXFCOzs7Q0FHaEQsSUFBSSxDQUFDLFdBQVcsS0FBSyxHQUFHO0VBQ3ZCLE1BQU0sTUFBTSxlQUFlLGlCQUFpQjtFQUM1QyxNQUFNLE1BQU0sZUFBZSx5QkFBeUI7Q0FDckQ7Q0FDQSxNQUFNLE1BQU0sZUFBZSxZQUFZOztDQUV2QyxNQUFNLFFBQXFCLHVCQUF1QixDQUFDLEVBQUUsVUFBVSxPQUFPLFNBQVM7Q0FDL0UsU0FBUyxlQUFlLGFBQWEsQ0FBQyxFQUFFLFVBQVUsT0FBTyxnQkFBZ0I7Q0FDekUsS0FBSyxNQUFNO0NBQ1gsTUFBTSxVQUFVLE9BQU8sU0FBUztBQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxTQUFTLGdCQUFnQixPQUE2QjtDQUNyRCxPQUFPLE1BQU0sYUFBYSxZQUFZO0FBQ3ZDO0FBQ0EsU0FBUyxVQUFVLE9BQTJCLE9BQTBCO0NBQ3ZFLElBQUksQ0FBQyxPQUFPO0NBQ1osTUFBTSxLQUFLLGlCQUFpQixLQUFLO0NBQ2pDLE1BQU0sS0FBSyxHQUFHOzs7O0NBSWQsTUFBTSxZQUFZLEdBQUcsTUFBTSxxQkFBcUIsS0FBSyxDQUFDLEVBQUMsQ0FBRTtDQUN6RCxNQUFNLFdBQVcsT0FBTyxRQUFRO0NBQ2hDLE1BQU0saUJBQWlCLDBDQUEwQyxLQUFLLEVBQUUsS0FBSyxXQUFXLEtBQUssRUFBRSxLQUFLLFdBQVcsT0FBTyxZQUFZLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxNQUFNLFFBQVEsS0FBSyxXQUFXO0NBQ3BMLElBQUksQ0FBQyxnQkFBZ0IsTUFBTSxNQUFNLFlBQVksaUJBQWlCLEVBQUU7Q0FDaEUsTUFBTSxTQUFTLEdBQUcsa0JBQW9CLEdBRW5DLHdCQUF3Qjs7OztDQUkzQixJQUFJLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxPQUFPLFFBQVEsTUFBTSxNQUFNLENBQUMsR0FBRztFQUM1RixNQUFNLE1BQU0saUJBQWlCO0VBQzdCLE1BQU0sTUFBTSxZQUFZLDJCQUEyQixNQUFNO0NBQzFEOztDQUVBLE1BQU0sTUFBTSxZQUFZLHFCQUFxQixHQUFHLGVBQWU7Q0FDL0QsSUFBSSxHQUFHLGFBQWEsR0FBRyxjQUFjLFFBQVEsTUFBTSxNQUFNLFlBQVksR0FBRztBQUN6RTs7O0FBR0EsZUFBZSxrQkFBa0IsU0FHNUI7Q0FDSixNQUFNLE1BQU0sTUFBTSxNQUFNLFNBQVMsRUFBRSxhQUFhLGNBQWMsQ0FBQztDQUMvRCxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sSUFBSSxNQUFNLFFBQVEsSUFBSSxRQUFRO0NBQ2pELE1BQU0sT0FBTyxNQUFNLElBQUksS0FBSztDQUM1QixNQUFNLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsTUFBTSxXQUFXO0NBQzdELE1BQU0sT0FBTyxJQUFJLGNBQWMsTUFBTSxLQUFLLElBQUk7Ozs7Q0FJOUMsTUFBTSxPQUFPLElBQUksSUFBSSxTQUFTLFNBQVMsSUFBSTtDQUMzQyxNQUFNLE9BQU8sSUFBSSxJQUFZO0NBQzdCLE1BQU0sTUFHQSxDQUFDO0NBQ1AsS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssaUJBQWlCLFNBQVMsQ0FBQyxHQUFHO0VBQzdELE1BQU0sTUFBTSxFQUFFLGFBQWEsTUFBTSxLQUFLO0VBQ3RDLElBQUksQ0FBQyxPQUFPLElBQUksV0FBVyxHQUFHLEtBQUssNkJBQTZCLEtBQUssR0FBRyxHQUFHO0VBQzNFLElBQUk7RUFDSixJQUFJO0dBQ0gsTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJO0VBQ3hCLFFBQVE7R0FDUDtFQUNEO0VBQ0EsSUFBSSxJQUFJLFdBQVcsU0FBUyxRQUFRO0VBQ3BDLE1BQU0sTUFBTSxJQUFJLFdBQVcsSUFBSTtFQUMvQixJQUFJLEtBQUssSUFBSSxHQUFHLEdBQUc7RUFDbkIsTUFBTSxRQUFRLEVBQUUsZUFBZSxHQUFFLENBQUUsUUFBUSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUs7RUFDN0QsSUFBSSxDQUFDLE1BQU07RUFDWCxLQUFLLElBQUksR0FBRztFQUNaLElBQUksS0FBSztHQUNSLE1BQU07R0FDTixNQUFNLEtBQUssTUFBTSxHQUFHLEVBQUU7RUFDdkIsQ0FBQztFQUNELElBQUksSUFBSSxVQUFVLElBQUk7Q0FDdkI7Q0FDQSxPQUFPO0FBQ1I7QUFDQSxTQUFTLG9CQUFvQjs7OztDQUk1QixLQUFLLE1BQU0sQ0FBQyxJQUFJLFlBQVksTUFBTSxLQUFLLGNBQWMsR0FBRztFQUN2RCxJQUFJLENBQUMsR0FBRyxhQUFhO0dBQ3BCLFFBQVEsTUFBTTtHQUNkLGVBQWUsT0FBTyxFQUFFO0VBQ3pCO0NBQ0Q7Q0FDQSxNQUFNLFVBQVUsTUFBTSxLQUFLLFNBQVMsaUJBQThCLHVCQUF1QixDQUFDO0NBQzFGLFFBQVEsU0FBUyxXQUFXO0VBQzNCLE1BQU0sVUFBVSxPQUFPLGNBQWlDLG1CQUFtQjs7OztFQUkzRSxNQUFNLFFBQVEsT0FBTyxjQUEyQixpQkFBaUI7RUFDakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O0VBSXhCLElBQUksYUFBYSxJQUFJLE1BQU0sR0FBRztHQUM3QixPQUFPLFVBQVUsT0FBTyxNQUFNO0dBQzlCLFFBQVEsYUFBYSxpQkFBaUIsT0FBTztHQUM3QyxXQUFXLEtBQUs7R0FDaEIsVUFBVSxRQUFRLE9BQU87R0FDekIsV0FBVyxRQUFRLE1BQU0sQ0FBQztHQUMxQjtFQUNEO0VBQ0EsTUFBTSxVQUFVLElBQUksZ0JBQWdCO0VBQ3BDLE1BQU0sRUFBRSxXQUFXO0VBQ25CLGVBQWUsSUFBSSxRQUFRLE9BQU87RUFDbEMsYUFBYSxJQUFJLE1BQU07RUFDdkIsTUFBTSxRQUFRO0dBQ2IsT0FBTztHQUNQLFFBQVEsQ0FBQztFQUNWO0VBQ0EsTUFBTSxvQkFBb0I7R0FDekIsTUFBTSxPQUFPLFNBQVMsTUFBTSxPQUFPLGFBQWEsQ0FBQyxDQUFDO0dBQ2xELE1BQU0sU0FBUyxDQUFDO0VBQ2pCO0VBQ0EsTUFBTSxTQUFTLElBQWdCLE9BQWU7R0FDN0MsTUFBTSxLQUFLLE9BQU8saUJBQWlCO0lBQ2xDLE1BQU0sU0FBUyxNQUFNLE9BQU8sUUFBUSxNQUFNLE1BQU0sRUFBRTtJQUNsRCxHQUFHO0dBQ0osR0FBRyxFQUFFO0dBQ0wsTUFBTSxPQUFPLEtBQUssRUFBRTtFQUNyQjtFQUNBLFdBQVcsS0FBSztFQUNoQixRQUFRLGFBQWEsaUJBQWlCLE9BQU87Ozs7Ozs7Ozs7Ozs7RUFhN0MsSUFBSSxVQUFVO0VBQ2QsSUFBSSxlQUFlO0VBQ25CLElBQUksV0FBVztFQUNmLElBQUksT0FBMkI7RUFDL0IsSUFBSSxPQUEyQjs7RUFFL0IsSUFBSSxZQUFxRDtFQUN6RCxNQUFNLFNBQVMsVUFBa0QsUUFBUSxNQUFNLHFCQUFvQyxPQUFPO0VBQzFILFNBQVMsWUFBWSxHQUFpQjtHQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7R0FJcEIsTUFBTSxRQUFRLFFBQVEsTUFBTTtHQUM1QixNQUFNLE1BQU0sTUFBTSxLQUFLO0dBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYTtHQUN4QyxNQUFNLEtBQUssSUFBSSxzQkFBc0I7R0FDckMsTUFBTSxLQUFLLE1BQU0sc0JBQXNCO0dBQ3ZDLE1BQU0sS0FBSyxPQUFPLHNCQUFzQjtHQUN4QyxJQUFJLEdBQUcsUUFBUSxNQUFNLEdBQUcsUUFBUSxJQUFJO0dBQ3BDLE1BQU0sT0FBTyxHQUFHLE9BQU8sR0FBRztHQUMxQixNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUc7R0FDekIsTUFBTSxPQUFPLEdBQUc7R0FDaEIsTUFBTSxPQUFPLEdBQUc7R0FDaEIsTUFBTSxPQUFPLEdBQUcsT0FBTyxHQUFHO0dBQzFCLE1BQU0sT0FBTyxHQUFHLFFBQVEsR0FBRztHQUMzQixNQUFNLE1BQU0sTUFBTTtHQUNsQixLQUFLLE1BQU0sT0FBTyxHQUFHLEtBQUs7R0FDMUIsS0FBSyxNQUFNLE1BQU0sR0FBRyxLQUFLO0dBQ3pCLEtBQUssTUFBTSxTQUFTLEdBQUcsS0FBSztHQUM1QixLQUFLLE1BQU0sUUFBUSxHQUFHLEtBQUssSUFBSSxHQUFHLE9BQU8sTUFBTSxJQUFJLEVBQUU7R0FDckQsS0FBSyxNQUFNLE1BQU0sR0FBRyxLQUFLO0dBQ3pCLEtBQUssTUFBTSxTQUFTLEdBQUcsS0FBSztHQUM1QixLQUFLLE1BQU0sT0FBTyxHQUFHLE9BQU8sSUFBSTtHQUNoQyxLQUFLLE1BQU0sUUFBUSxHQUFHLEtBQUssSUFBSSxHQUFHLE9BQU8sUUFBUSxPQUFPLElBQUksRUFBRTtFQUMvRDtFQUNBLFNBQVMsV0FBVyxLQUF3QjtHQUMzQyxJQUFJLENBQUMsTUFBTSxPQUFPLElBQUksY0FBMkIsb0JBQW9CO0dBQ3JFLElBQUksQ0FBQyxNQUFNLE9BQU8sSUFBSSxjQUEyQixvQkFBb0I7R0FDckUsSUFBSSxDQUFDLE1BQU07SUFDVixPQUFPLFNBQVMsY0FBYyxLQUFLO0lBQ25DLEtBQUssWUFBWTtJQUNqQixJQUFJLFlBQVksSUFBSTtHQUNyQjtHQUNBLElBQUksQ0FBQyxNQUFNO0lBQ1YsT0FBTyxTQUFTLGNBQWMsS0FBSztJQUNuQyxLQUFLLFlBQVk7SUFDakIsSUFBSSxZQUFZLElBQUk7R0FDckI7RUFDRDs7OztFQUlBLFNBQVMsZ0JBT0E7R0FDUixNQUFNLFFBQVEsUUFBUSxNQUFNO0dBQzVCLElBQUksQ0FBQyxPQUFPLE9BQU87R0FDbkIsTUFBTSxLQUFLLGlCQUFpQixLQUFLO0dBQ2pDLE1BQU0sS0FBSyxHQUFHOzs7R0FHZCxNQUFNLFlBQVksR0FBRyxNQUFNLHFCQUFxQixLQUFLLENBQUMsRUFBQyxDQUFFO0dBQ3pELE1BQU0sUUFBUSxXQUFXLE9BQU8sUUFBUSxJQUFJO0dBQzVDLElBQUksMENBQTBDLEtBQUssRUFBRSxLQUFLLFFBQVEsS0FBSyxPQUFPO0dBQzlFLE1BQU0sU0FBUyxHQUFHLGtCQUFvQixHQUVuQyx3QkFBd0I7R0FDM0IsT0FBTztJQUNOLFVBQVUsS0FBSyxNQUFNLFFBQVEsR0FBRztJQUNoQyxRQUFRLFVBQVUsV0FBVyxTQUFTLFNBQVM7SUFDL0MsUUFBUSxHQUFHLHVCQUF1QjtJQUNsQztJQUNBLFFBQVEsR0FBRztJQUNYLFFBQVEsR0FBRztHQUNaO0VBQ0Q7RUFDQSxTQUFTLGFBQWEsUUFBZSxLQUFhLFFBQTJCO0dBQzVFLElBQUksVUFBVSxxQkFBcUIsUUFBUTtHQUMzQyxXQUFXO0dBQ1gsSUFBSSxDQUFDLGNBQWM7R0FDbkIsTUFBTSxJQUFJLHFCQUFxQixJQUFJLElBQUk7R0FDdkMsTUFBTSxPQUFPLFdBQVcsSUFBSSxJQUFJO0dBQ2hDLE1BQU0sS0FBSyxZQUFZLElBQUk7R0FDM0IsTUFBTSxRQUFRLE1BQWMsSUFBSSxLQUFLLElBQUksSUFBSSxHQUFHLENBQUM7R0FDakQsTUFBTSxRQUFRLFFBQWdCO0lBQzdCLE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLE1BQU0sQ0FBQztJQUNwQyxZQUFZLFFBQVEsU0FBUyxRQUFRLEtBQUssQ0FBQyxDQUFDO0lBQzVDLElBQUksSUFBSSxHQUFHO0tBQ1YsV0FBVyxzQkFBc0IsSUFBSTtJQUN0QyxPQUFPO0tBQ04sV0FBVzs7O0tBR1gsU0FBUztJQUNWO0dBQ0Q7R0FDQSxXQUFXLHNCQUFzQixJQUFJO0VBQ3RDOzs7OztFQUtBLFNBQVMsY0FBYyxPQUFvQixJQUFtQjtHQUM3RCxNQUFNLE1BQU0sTUFBTSxRQUFRLFNBQVMsS0FBSztHQUN4QyxJQUFJLFVBQVUsT0FBTyxtQkFBbUIsRUFBRTtHQUMxQyxJQUFJLElBQUk7SUFDUCxNQUFNLE1BQU0sWUFBWSxjQUFjLE1BQU07SUFDNUMsTUFBTSxNQUFNLFlBQVksY0FBYyxlQUFlLFdBQVc7SUFDaEUsTUFBTSxNQUFNLFlBQVksZ0JBQWdCLGVBQWUsV0FBVztJQUNsRSxNQUFNLE1BQU0sWUFBWSxjQUFjLFFBQVEsV0FBVztJQUN6RCxNQUFNLE1BQU0sWUFBWSxtQkFBbUIsUUFBUSxXQUFXO0lBQzlELE1BQU0sTUFBTSxZQUFZLDJCQUEyQixRQUFRLFdBQVc7R0FDdkUsT0FBTztJQUNOLE1BQU0sTUFBTSxlQUFlLFlBQVk7SUFDdkMsTUFBTSxNQUFNLGVBQWUsWUFBWTtJQUN2QyxNQUFNLE1BQU0sZUFBZSxjQUFjO0lBQ3pDLE1BQU0sTUFBTSxlQUFlLFlBQVk7SUFDdkMsTUFBTSxNQUFNLGVBQWUsaUJBQWlCO0lBQzVDLE1BQU0sTUFBTSxlQUFlLHlCQUF5QjtHQUNyRDtFQUNEOztFQUVBLFNBQVMsYUFBbUI7R0FDM0IsTUFBTSxRQUFRLFFBQVEsTUFBTTtHQUM1QixNQUFNLE1BQU0sTUFBTSxLQUFLO0dBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztHQUNwQixVQUFVO0dBQ1YsTUFBTSxPQUFPLGNBQWM7R0FDM0IsWUFBWTtHQUNaLGVBQWUsQ0FBQyxDQUFDOztHQUVqQixNQUFNLE1BQU0sWUFBWSxrQkFBa0IsS0FBSztHQUMvQyxvQkFBb0IsT0FBTyxJQUFJOzs7Ozs7R0FNL0IsTUFBTSxVQUFVLGdCQUFnQixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxPQUFPLE1BQU0sWUFBWSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxZQUFZO0dBQ2xJLE1BQU0sTUFBTSxZQUFZLGlCQUFpQixzQ0FBc0MsUUFBUSxnQkFBZ0I7R0FDdkcsTUFBTSxNQUFNLFlBQVkscUJBQXFCLG1FQUFtRTs7R0FFaEgsTUFBTSxNQUFNLGVBQWUsWUFBWTtHQUN2QyxjQUFjLE9BQU8sSUFBSTtHQUN6QixJQUFJLENBQUMsTUFBTTtHQUNYLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxHQUFHO0lBQzVCLE1BQU0sTUFBTSxpQkFBaUIsS0FBSztJQUNsQyxNQUFNLE1BQU0sWUFBWSwyQkFBMkIsS0FBSyxNQUFNO0dBQy9EO0dBQ0EsV0FBVyxHQUFHO0dBQ2QsS0FBSyxNQUFNLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRztJQUM3QixJQUFJLENBQUMsR0FBRztJQUNSLEVBQUUsVUFBVSxJQUFJLFNBQVM7SUFDekIsRUFBRSxNQUFNLFlBQVksa0JBQWtCLEdBQUcsS0FBSyxTQUFTLEVBQUU7SUFDekQsRUFBRSxNQUFNLFlBQVksbUJBQW1CLEtBQUssTUFBTTtJQUNsRCxFQUFFLE1BQU0saUJBQWlCLEtBQUs7SUFDOUIsRUFBRSxNQUFNLFlBQVksMkJBQTJCLEtBQUssTUFBTTtJQUMxRCxFQUFFLE1BQU0sVUFBVTtHQUNuQjtHQUNBLFlBQVksQ0FBQztHQUNiLEtBQUssSUFBSTtHQUNULEtBQUssTUFBTSxLQUFLLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFVLE9BQU8sU0FBUztHQUMzRCxhQUFhLEdBQUcsU0FBUztFQUMxQjs7RUFFQSxTQUFTLFNBQVMsTUFBb0I7R0FDckMsSUFBSSxVQUFVO0lBQ2IscUJBQXFCLFFBQVE7SUFDN0IsV0FBVztHQUNaO0dBQ0EsTUFBTSxRQUFRLFFBQVEsTUFBTTtHQUM1QixJQUFJLE9BQU87SUFDVixjQUFjLE9BQU8sS0FBSzs7Ozs7O0lBTTFCLE1BQU0sT0FBTztJQUNiLElBQUksTUFBTTtLQUNULE1BQU0sTUFBTSxZQUFZLGNBQWMsTUFBTTtLQUM1QyxNQUFNLE1BQU0sWUFBWSxjQUFjLEtBQUssSUFBSSxXQUFXO0tBQzFELE1BQU0sTUFBTSxZQUFZLGdCQUFnQixLQUFLLFFBQVEsV0FBVztLQUNoRSxNQUFNLE1BQU0sWUFBWSxjQUFjLEtBQUssVUFBVSxLQUFLLFdBQVcsU0FBUyxLQUFLLFNBQVMsUUFBUSxXQUFXO0tBQy9HLE1BQU0sTUFBTSxZQUFZLG1CQUFtQixLQUFLLFFBQVEsV0FBVztLQUNuRSxNQUFNLE1BQU0sWUFBWSwyQkFBMkIsS0FBSyxRQUFRLFdBQVc7S0FDM0UsS0FBSyxNQUFNO0tBQ1gsNEJBQTRCO01BQzNCLE1BQU0sTUFBTSxlQUFlLFlBQVk7TUFDdkMsTUFBTSxNQUFNLGVBQWUsWUFBWTtNQUN2QyxNQUFNLE1BQU0sZUFBZSxjQUFjO01BQ3pDLE1BQU0sTUFBTSxlQUFlLFlBQVk7TUFDdkMsTUFBTSxNQUFNLGVBQWUsaUJBQWlCO01BQzVDLE1BQU0sTUFBTSxlQUFlLHlCQUF5Qjs7Ozs7O01BTXBELG1CQUFtQixLQUFLO0tBQ3pCLENBQUM7SUFDRjtHQUNEO0dBQ0EsS0FBSyxNQUFNLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRztJQUM3QixJQUFJLENBQUMsR0FBRztJQUNSLEVBQUUsVUFBVSxJQUFJLFNBQVM7SUFDekIsRUFBRSxNQUFNLFVBQVU7SUFDbEIsRUFBRSxVQUFVLE9BQU8sU0FBUztHQUM3QjtHQUNBLFVBQVU7R0FDVixlQUFlO0dBQ2YsWUFBWTs7R0FFWixNQUFNLE1BQU0sWUFBWSxrQkFBa0IsR0FBRyxLQUFLLEdBQUc7R0FDckQsb0JBQW9CLE9BQU8sS0FBSztFQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpQkEsTUFBTSxnQkFBZ0I7R0FDckIsTUFBTSxLQUFLLFFBQVEsc0JBQXNCO0dBQ3pDLE1BQU0sS0FBSyxPQUFPLHNCQUFzQjtHQUN4QyxNQUFNLFFBQVEsUUFBUSxNQUFNO0dBQzVCLE1BQU0sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLElBQUk7R0FDbkQsTUFBTSxLQUFLLE9BQU87R0FDbEIsTUFBTSxLQUFLLE9BQU87OztHQUdsQixNQUFNLE9BQU8sUUFBUSxlQUFlLEdBQUc7R0FDdkMsTUFBTSxPQUFPLFNBQVMsTUFBTSxlQUFlLEdBQUc7R0FDOUMsTUFBTSxhQUFhLGFBQWE7R0FDaEMsTUFBTSxZQUFZO0dBQ2xCLElBQUk7R0FDSixJQUFJLFdBQVc7OztJQUdkLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSSxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQztHQUN4RSxPQUFPOzs7O0lBSU4sTUFBTSxPQUFPLEtBQUssSUFBSSxHQUFHLEtBQUssWUFBWSxJQUFJO0lBQzlDLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSSxnQkFBZ0IsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDO0dBQ3pFOzs7OztHQUtBLElBQUksWUFBWTtHQUNoQixJQUFJLFdBQVc7SUFDZCxNQUFNLEtBQUssR0FBRyxPQUFPLEdBQUcsUUFBUTtJQUNoQyxNQUFNLFVBQVUsWUFBWTtJQUM1QixNQUFNLFVBQVUsS0FBSyxJQUFJLFlBQVk7SUFDckMsSUFBSSxPQUFPLEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQztJQUNoQyxPQUFPLFVBQVUsVUFBVSxVQUFVLEtBQUssSUFBSSxTQUFTLEtBQUssSUFBSSxTQUFTLElBQUksQ0FBQztJQUM5RSxZQUFZLE9BQU8sR0FBRztHQUN2Qjs7O0dBR0EsTUFBTSxNQUFNLE9BQU87R0FDbkIsTUFBTSxPQUFPLE1BQU0sSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLFNBQVM7OztHQUd4RCxNQUFNLFdBQVc7R0FDakIsTUFBTSxPQUFPLEtBQUssTUFBTSxPQUFPLFFBQVE7R0FDdkMsTUFBTSxPQUFPLEdBQUc7O0dBRWhCLE1BQU0sVUFBVSxhQUFhLEdBQUcsU0FBUyxHQUFHLFNBQVMsT0FBTyxHQUFHOzs7R0FHL0QsTUFBTSxjQUFjLEdBQUcsU0FBUyxHQUFHOztHQUVuQyxNQUFNLFFBQVEsYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPO0dBQ25ELE9BQU87SUFDTjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxHQUFHO0lBQ0gsUUFBUTtJQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsT0FBTztJQUNQLE1BQU0sS0FBSyxJQUFJLEtBQUssS0FBSztHQUMxQjtFQUNEOzs7Ozs7Ozs7O0VBVUEsTUFBTSx5QkFBeUIsTUFBMEM7R0FDeEUsTUFBTSxjQUFjLE1BQU0sVUFBVSxTQUFTLGFBQWE7R0FDMUQsTUFBTSxZQUFZLE1BQU0sVUFBVSxTQUFTLFNBQVM7Ozs7O0dBS3BELE1BQU0sUUFBUSxNQUFNLE1BQU0saUJBQWlCLE9BQU87R0FDbEQsTUFBTSxTQUFTLE1BQU0sTUFBTSxvQkFBb0IsT0FBTztHQUN0RCxNQUFNLFVBQVUsSUFBSSxXQUFXLGFBQWE7R0FDNUMsTUFBTSxNQUFNLFFBQVEsR0FBRyxFQUFFLEVBQUU7R0FDM0IsTUFBTSxNQUFNLFNBQVM7R0FDckIsTUFBTSxJQUFJLE1BQU07R0FDaEIsSUFBSSxDQUFDLGFBQWEsTUFBTSxVQUFVLE9BQU8sYUFBYTtHQUN0RCxJQUFJLENBQUMsV0FBVyxNQUFNLFVBQVUsT0FBTyxTQUFTO0dBQ2hELElBQUksT0FBTyxNQUFNLE1BQU0sWUFBWSxTQUFTLE9BQU8sTUFBTTtRQUNwRCxNQUFNLE1BQU0sZUFBZSxPQUFPO0dBQ3ZDLEtBQUssTUFBTTtHQUNYLE9BQU8sS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUM7RUFDeEM7RUFDQSxNQUFNLGFBQWE7R0FDbEIsSUFBSSxPQUFPLFVBQVUsU0FBUyxNQUFNLEdBQUc7R0FDdkMsT0FBTyxVQUFVLElBQUksTUFBTTtHQUMzQixRQUFRLGFBQWEsaUJBQWlCLE1BQU07O0dBRTVDLElBQUksQ0FBQyxVQUFVLEdBQUc7Ozs7R0FJbEIsTUFBTSxRQUFRLEVBQUUsTUFBTTtHQUN0QixZQUFZO0dBQ1osU0FBUyxnQkFBZ0IsVUFBVSxJQUFJLFNBQVM7R0FDaEQsWUFBWSxTQUFTLGdCQUFnQixVQUFVLE9BQU8sU0FBUyxHQUFHLFdBQVcsWUFBWSxHQUFHO0dBQzVGLE1BQU0sSUFBSSxRQUFROzs7OztHQUtsQixNQUFNLE1BQU0sWUFBWSxrQkFBa0IsRUFBRSxZQUFZLFFBQVEsR0FBRyxFQUFFLEtBQUssR0FBRztHQUM3RSxNQUFNLE1BQU0sWUFBWSxlQUFlLEdBQUcsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssR0FBRztHQUM1RSxNQUFNLFNBQVMsc0JBQXNCLENBQUM7OztHQUd0QyxVQUFVLFFBQVEsTUFBTSxHQUFHLEtBQUs7Ozs7OztHQU1oQyxJQUFJLENBQUMsRUFBRSxhQUFhLGNBQWMsS0FBSyxDQUFDLFdBQVcsS0FBSyxHQUFHO0lBQzFELE1BQU0sTUFBTSxZQUFZLG1CQUFtQixNQUFNO0lBQ2pELE1BQU0sTUFBTSxZQUFZLDJCQUEyQixNQUFNO0dBQzFEOzs7Ozs7R0FNQSxNQUFNLFVBQVUsSUFBSSxTQUFTO0dBQzdCLE1BQU0sVUFBVSxPQUFPLGFBQWE7R0FDcEMsTUFBTSxVQUFVLElBQUksU0FBUztHQUM3QixNQUFNLE1BQU0sVUFBVTtHQUN0QixnQkFBZ0IsUUFBUSxDQUFDO0dBQ3pCLElBQUksRUFBRSxXQUFXO0lBQ2hCLE9BQU8sTUFBTSxRQUFRLEdBQUcsRUFBRSxLQUFLO0lBQy9CLE1BQU0sTUFBTSxPQUFPLEdBQUcsRUFBRSxVQUFVO0lBQ2xDLE1BQU0sTUFBTSxRQUFRLEdBQUcsRUFBRSxFQUFFO0lBQzNCLFNBQVMsT0FBTztLQUNmLEdBQUcsRUFBRTtLQUNMLEdBQUcsRUFBRTtLQUNMLEdBQUc7SUFDSixDQUFDO0dBQ0YsT0FBTztJQUNOLE9BQU8sTUFBTSxRQUFRLEdBQUcsRUFBRSxLQUFLO0lBQy9CLFNBQVMsT0FBTztLQUNmLEdBQUcsRUFBRTtLQUNMLEdBQUcsRUFBRTtLQUNMLEdBQUc7SUFDSixDQUFDO0dBQ0Y7R0FDQSxLQUFLLE1BQU07R0FDWCxNQUFNLFVBQVUsT0FBTyxTQUFTO0dBQ2hDLE1BQU0sVUFBVSxJQUFJLFVBQVU7R0FDOUIsSUFBSSxDQUFDLEVBQUUsV0FBVztJQUNqQixPQUFPLFVBQVUsSUFBSSxTQUFTOztJQUU5QixTQUFTLGVBQWUsYUFBYSxDQUFDLEVBQUUsVUFBVSxJQUFJLGdCQUFnQjtHQUN2RTs7Ozs7O0dBTUEsWUFBWTtJQUNYLElBQUksVUFBVSxNQUFNLE9BQU87SUFDM0IsTUFBTSxVQUFVLE9BQU8sU0FBUztJQUNoQyxZQUFZLE9BQU8sU0FBUztJQUM1QixnQkFBZ0IsUUFBUSxTQUFTO0lBQ2pDLElBQUksRUFBRSxXQUFXO0tBQ2hCLE9BQU8sTUFBTSxRQUFRLEdBQUcsRUFBRSxLQUFLO0tBQy9CLFNBQVMsT0FBTztNQUNmLEdBQUcsRUFBRTtNQUNMLEdBQUc7TUFDSCxHQUFHO0tBQ0osQ0FBQztJQUNGLE9BQU87S0FDTixPQUFPLE1BQU0sUUFBUSxHQUFHLEVBQUUsRUFBRTtLQUM1QixTQUFTLE9BQU87TUFDZixHQUFHLEVBQUU7TUFDTCxHQUFHO01BQ0gsR0FBRztLQUNKLENBQUM7S0FDRCxXQUFXO0lBQ1o7O0lBRUEsWUFBWTtLQUNYLElBQUksVUFBVSxNQUFNLE9BQU87S0FDM0IsTUFBTSxVQUFVLElBQUksYUFBYTs7S0FFakMsVUFBVTtJQUNYLEdBQUcsVUFBVTtHQUNkLEdBQUcsUUFBUTtFQUNaO0VBQ0EsTUFBTSxjQUFjO0dBQ25CLElBQUksQ0FBQyxPQUFPLFVBQVUsU0FBUyxNQUFNLEdBQUc7R0FDeEMsT0FBTyxVQUFVLE9BQU8sTUFBTTtHQUM5QixRQUFRLGFBQWEsaUJBQWlCLE9BQU87R0FDN0MsTUFBTSxRQUFRLEVBQUUsTUFBTTtHQUN0QixZQUFZOztHQUVaLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxNQUFNLFVBQVUsU0FBUyxVQUFVLEdBQUc7SUFDMUQsV0FBVyxLQUFLO0lBQ2hCLFVBQVUsUUFBUSxPQUFPO0lBQ3pCLFdBQVcsUUFBUSxNQUFNLENBQUM7SUFDMUI7R0FDRDs7R0FFQSxTQUFTLGdCQUFnQixVQUFVLElBQUksU0FBUztHQUNoRCxNQUFNLElBQUksUUFBUTs7O0dBR2xCLE1BQU0sVUFBVSxPQUFPLGFBQWE7R0FDcEMsTUFBTSxVQUFVLElBQUksU0FBUztHQUM3QixZQUFZLE9BQU8sUUFBUTtHQUMzQixnQkFBZ0IsUUFBUSxRQUFRO0dBQ2hDLE9BQU8sTUFBTSxRQUFRLEdBQUcsRUFBRSxLQUFLO0dBQy9CLElBQUksU0FBUzs7Ozs7SUFLWixNQUFNLE1BQU0sWUFBWSxrQkFBa0IsS0FBSztJQUMvQyxNQUFNLFVBQVUsSUFBSSxVQUFVO0lBQzlCLFNBQVMsT0FBTztLQUNmLEdBQUcsRUFBRTtLQUNMLEdBQUcsRUFBRTtLQUNMLEdBQUc7SUFDSixDQUFDO0lBQ0QsSUFBSSxDQUFDLGNBQWM7O0tBRWxCLFlBQVk7TUFDWCxJQUFJLFVBQVUsTUFBTSxPQUFPO01BQzNCLFNBQVMsRUFBRSxJQUFJO01BQ2YsV0FBVyxLQUFLO01BQ2hCLFVBQVUsUUFBUSxPQUFPO0tBQzFCLEdBQUcsUUFBUTtLQUNYO0lBQ0Q7SUFDQSxhQUFhLEdBQUcsZ0JBQWdCO0tBQy9CLElBQUksVUFBVSxNQUFNLE9BQU87S0FDM0IsU0FBUyxFQUFFLElBQUk7S0FDZixXQUFXLEtBQUs7S0FDaEIsVUFBVSxRQUFRLE9BQU87SUFDMUIsQ0FBQztJQUNEO0dBQ0Q7Ozs7R0FJQSxTQUFTLE9BQU8sRUFBRSxZQUFZO0lBQzdCLEdBQUcsRUFBRTtJQUNMLEdBQUcsRUFBRTtJQUNMLEdBQUc7R0FDSixJQUFJO0lBQ0gsR0FBRyxFQUFFO0lBQ0wsR0FBRyxFQUFFO0lBQ0wsR0FBRztHQUNKLENBQUM7R0FDRCxZQUFZO0lBQ1gsSUFBSSxVQUFVLE1BQU0sT0FBTztJQUMzQixNQUFNLE1BQU0sVUFBVTtHQUN2QixHQUFHLFdBQVcsRUFBRTtHQUNoQixZQUFZO0lBQ1gsSUFBSSxVQUFVLE1BQU0sT0FBTztJQUMzQixXQUFXLEtBQUs7SUFDaEIsVUFBVSxRQUFRLE9BQU87R0FDMUIsR0FBRyxXQUFXLEdBQUc7RUFDbEI7RUFDQSxNQUFNLFVBQVUsTUFBYTtHQUM1QixFQUFFLGVBQWU7R0FDakIsRUFBRSxnQkFBZ0I7R0FDbEIsSUFBSSxPQUFPLFVBQVUsU0FBUyxNQUFNLEdBQUcsTUFBTTtRQUN4QyxLQUFLO0VBQ1g7RUFDQSxRQUFRLGlCQUFpQixTQUFTLFFBQXlCLEVBQUUsT0FBTyxDQUFDOztFQUVyRSxNQUFNLGVBQWUsQ0FBQyxHQUFHLE1BQU0sS0FBSyxPQUFPLGlCQUFpQixpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsTUFBTSxLQUFLLE1BQU0saUJBQWlCLGlCQUFpQixDQUFDLENBQUM7RUFDekksYUFBYSxTQUFTLFFBQVE7R0FDN0IsSUFBSSxpQkFBaUIsVUFBVSxNQUFNO0lBQ3BDLEVBQUUsZUFBZTtJQUNqQixFQUFFLGdCQUFnQjtJQUNsQixNQUFNO0dBQ1AsR0FBRyxFQUFFLE9BQU8sQ0FBQztFQUNkLENBQUM7OztFQUdELE1BQU0sU0FBUyxNQUFNLGNBQTJCLGFBQWE7RUFDN0QsSUFBSSxRQUFRO0dBQ1gsT0FBTyxpQkFBaUIsWUFBWSxNQUFNO0lBQ3pDLElBQUksRUFBRSxRQUFRLFdBQVcsRUFBRSxRQUFRLEtBQUs7SUFDeEMsRUFBRSxlQUFlO0lBQ2pCLE1BQU07R0FDUCxHQUFHLEVBQUUsT0FBTyxDQUFDO0VBQ2Q7O0VBRUEsU0FBUyxpQkFBaUIsVUFBVSxNQUFNO0dBQ3pDLE1BQU0sSUFBSSxFQUFFO0dBQ1osSUFBSSxPQUFPLFNBQVMsQ0FBQyxLQUFLLE1BQU0sU0FBUyxDQUFDLEdBQUc7R0FDN0MsTUFBTTtFQUNQLEdBQUcsRUFBRSxPQUFPLENBQUM7RUFDYixTQUFTLGlCQUFpQixZQUFZLE1BQU07R0FDM0MsSUFBSSxFQUFFLFFBQVEsVUFBVSxNQUFNO0VBQy9CLEdBQUcsRUFBRSxPQUFPLENBQUM7OztFQUdiLE9BQU8saUJBQWlCLGdCQUFnQjtHQUN2QyxJQUFJLE9BQU8sVUFBVSxTQUFTLE1BQU0sR0FBRyxNQUFNO0VBQzlDLEdBQUcsRUFBRSxPQUFPLENBQUM7Ozs7Ozs7RUFPYixNQUFNLGFBQWEsSUFBSSx1QkFBdUI7R0FDN0MsSUFBSSxDQUFDLE9BQU8sVUFBVSxTQUFTLE1BQU0sR0FBRzs7O0dBR3hDLElBQUksU0FBUztHQUNiLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLE9BQU8sWUFBWTtJQUN0QyxJQUFJLE9BQU8sVUFBVSxTQUFTLE1BQU0sR0FBRyxVQUFVLFFBQVEsTUFBTSxHQUFHLEtBQUs7R0FDeEUsR0FBRyxFQUFFLENBQUM7RUFDUCxDQUFDO0VBQ0QsV0FBVyxRQUFRLFNBQVMsaUJBQWlCO0dBQzVDLFlBQVk7R0FDWixpQkFBaUIsQ0FBQyxTQUFTLFlBQVk7RUFDeEMsQ0FBQztFQUNELE9BQU8saUJBQWlCLGVBQWUsV0FBVyxXQUFXLENBQUM7OztFQUc5RCxNQUFNLFFBQVEsTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxLQUFLLE9BQU8saUJBQThCLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxNQUFNLEtBQUssTUFBTSxpQkFBOEIsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OztFQU0vSyxJQUFJLFlBQVk7O0VBRWhCLFNBQVMsbUJBQW1CLFNBQXVCO0dBQ2xELFlBQVksT0FBTyxTQUFTO0dBQzVCLE1BQU0sTUFBTSxTQUFTLEdBQUcsS0FBSyxNQUFNLE9BQU8sRUFBRTtFQUM3Qzs7RUFFQSxTQUFTLHFCQUE2QjtHQUNyQyxNQUFNLElBQUksUUFBUTtHQUNsQixNQUFNLE9BQU8sS0FBSyxJQUFJLEtBQUssS0FBSyxNQUFNLE9BQU8sY0FBYyxHQUFHLENBQUM7R0FDL0QsT0FBTyxLQUFLLElBQUksTUFBTSxFQUFFLElBQUk7RUFDN0I7Ozs7Ozs7Ozs7O0VBV0EsU0FBUyxZQUFrQjtHQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHO0dBQ3JCLE1BQU0saUJBQW9DLGFBQWEsQ0FBQyxDQUFDLFNBQVMsTUFBTTtJQUN2RSxFQUFFLGFBQWEsZ0JBQWdCLEVBQUU7R0FDbEMsQ0FBQztFQUNGO0VBQ0EsU0FBUyxhQUFtQjtHQUMzQixNQUFNLFNBQVMsTUFBTSxjQUEyQixrQkFBa0I7R0FDbEUsTUFBTSxTQUFTLE1BQU0sY0FBMkIsYUFBYTtHQUM3RCxJQUFJLENBQUMsVUFBVSxPQUFPLFFBQVE7R0FDOUI7R0FDQSxPQUFPLFNBQVM7R0FDaEIsSUFBSSxRQUFRLE9BQU8sU0FBUzs7R0FFNUIsbUJBQW1CLHNCQUFzQixRQUFRLENBQUMsQ0FBQztFQUNwRDs7RUFFQSxlQUFlLFlBQVksTUFBMkM7R0FDckUsTUFBTSxTQUFTLE1BQU0sY0FBMkIsa0JBQWtCO0dBQ2xFLE1BQU0sU0FBUyxNQUFNLGNBQTJCLGFBQWE7R0FDN0QsTUFBTSxPQUFPLE1BQU0sY0FBMkIsdUJBQXVCO0dBQ3JFLE1BQU0sUUFBUSxNQUFNLGNBQTJCLHdCQUF3QjtHQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sT0FBTztHQUM3QixJQUFJLENBQUMsTUFBTSxVQUFVLFNBQVMsYUFBYSxHQUFHLE9BQU87R0FDckQsTUFBTSxZQUFZLEtBQUssYUFBYSxNQUFNLEtBQUs7R0FDL0MsTUFBTSxRQUFRLEtBQUssY0FBYyxhQUFhLENBQUMsRUFBRSxhQUFhLEtBQUssS0FBSztHQUN4RSxNQUFNLE1BQU0sRUFBRTtHQUNkLElBQUksUUFBUSxPQUFPLFNBQVM7R0FDNUIsT0FBTyxTQUFTO0dBQ2hCLElBQUksT0FBTyxNQUFNLGNBQWM7R0FDL0IsS0FBSyxZQUFZO0dBQ2pCLE1BQU0sVUFBVSxTQUFTLGNBQWMsS0FBSztHQUM1QyxRQUFRLFlBQVk7R0FDcEIsUUFBUSxjQUFjO0dBQ3RCLEtBQUssWUFBWSxPQUFPO0dBQ3hCLG1CQUFtQixtQkFBbUIsQ0FBQztHQUN2QyxJQUFJLFFBR0UsQ0FBQztHQUNQLElBQUk7SUFDSCxRQUFRLE1BQU0sa0JBQWtCLFNBQVM7R0FDMUMsUUFBUTs7SUFFUCxTQUFTLE9BQU87SUFDaEIsT0FBTztHQUNSO0dBQ0EsSUFBSSxRQUFRLFdBQVcsT0FBTztHQUM5QixLQUFLLFlBQVk7R0FDakIsSUFBSSxDQUFDLE1BQU0sUUFBUTtJQUNsQixNQUFNLFFBQVEsU0FBUyxjQUFjLEtBQUs7SUFDMUMsTUFBTSxZQUFZO0lBQ2xCLE1BQU0sY0FBYztJQUNwQixLQUFLLFlBQVksS0FBSztJQUN0QixPQUFPO0dBQ1I7R0FDQSxNQUFNLFNBQVMsR0FBRyxNQUFNO0lBQ3ZCLE1BQU0sSUFBSSxTQUFTLGNBQWMsR0FBRztJQUNwQyxFQUFFLFlBQVk7SUFDZCxFQUFFLE9BQU8sRUFBRTtJQUNYLEVBQUUsTUFBTSxZQUFZLFVBQVUsT0FBTyxLQUFLLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNyRCxNQUFNLE1BQU0sU0FBUyxjQUFjLE1BQU07SUFDekMsSUFBSSxZQUFZO0lBQ2hCLE1BQU0sTUFBTSxTQUFTLGNBQWMsTUFBTTtJQUN6QyxJQUFJLFlBQVk7SUFDaEIsSUFBSSxjQUFjLEVBQUU7SUFDcEIsTUFBTSxLQUFLLFNBQVMsZ0JBQWdCLDhCQUE4QixLQUFLO0lBQ3ZFLEdBQUcsYUFBYSxTQUFTLGlCQUFpQjtJQUMxQyxHQUFHLGFBQWEsV0FBVyxXQUFXO0lBQ3RDLEdBQUcsYUFBYSxTQUFTLElBQUk7SUFDN0IsR0FBRyxhQUFhLFVBQVUsSUFBSTtJQUM5QixHQUFHLGFBQWEsZUFBZSxNQUFNO0lBQ3JDLE1BQU0sSUFBSSxTQUFTLGdCQUFnQiw4QkFBOEIsTUFBTTtJQUN2RSxFQUFFLGFBQWEsS0FBSyxjQUFjO0lBQ2xDLEVBQUUsYUFBYSxRQUFRLE1BQU07SUFDN0IsRUFBRSxhQUFhLFVBQVUsY0FBYztJQUN2QyxFQUFFLGFBQWEsZ0JBQWdCLEtBQUs7SUFDcEMsRUFBRSxhQUFhLGtCQUFrQixPQUFPO0lBQ3hDLEVBQUUsYUFBYSxtQkFBbUIsT0FBTztJQUN6QyxHQUFHLFlBQVksQ0FBQztJQUNoQixFQUFFLE9BQU8sS0FBSyxLQUFLLEVBQUU7SUFDckIsRUFBRSxpQkFBaUIsZUFBZSxNQUFNLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDO0lBQzlELEtBQUssWUFBWSxDQUFDO0dBQ25CLENBQUM7R0FDRCxPQUFPO0VBQ1I7RUFDQSxNQUFNLGNBQWMsZ0JBQWdCLENBQUMsRUFBRSxpQkFBaUIsVUFBVSxNQUFNO0dBQ3ZFLEVBQUUsZUFBZTtHQUNqQixFQUFFLGdCQUFnQjtHQUNsQixXQUFXO0VBQ1osR0FBRyxFQUFFLE9BQU8sQ0FBQztFQUNiLE1BQU0sU0FBUyxTQUFTO0dBQ3ZCLEtBQUssaUJBQWlCLFVBQVUsTUFBTTs7OztJQUlyQyxJQUFJLGFBQWEsS0FBSyxNQUFNLFNBQVMsSUFBSSxLQUFLLEtBQUssVUFBVSxTQUFTLFlBQVksS0FBSyxNQUFNLFVBQVUsU0FBUyxhQUFhLEdBQUc7S0FDL0gsRUFBRSxlQUFlO0tBQ2pCLFlBQVksSUFBeUI7S0FDckM7SUFDRDs7O0lBR0EsTUFBTSxPQUFRLEtBQTJCLGFBQWEsTUFBTTtJQUM1RCxJQUFJLFFBQVEsS0FBSyxhQUFhLGNBQWMsR0FBRztLQUM5QyxNQUFNLE9BQVEsT0FBZTtLQUM3QixJQUFJLE9BQU8sTUFBTSxhQUFhLFlBQVksS0FBSyxTQUFTLElBQUk7VUFDdkQsU0FBUyxPQUFPO0lBQ3RCO0lBQ0EsTUFBTSxPQUFPLEVBQUU7R0FDaEIsR0FBRyxFQUFFLE9BQU8sQ0FBQztFQUNkLENBQUM7Q0FDRixDQUFDO0FBQ0Y7QUFDQSxJQUFJLFNBQVMsZUFBZSxXQUFXO0NBQ3RDLFNBQVMsaUJBQWlCLG9CQUFvQixpQkFBaUI7QUFDaEUsT0FBTztDQUNOLGtCQUFrQjtBQUNuQjtBQUNBLFNBQVMsaUJBQWlCLG1CQUFtQixpQkFBaUI7QUFDOUQsU0FBUyxpQkFBaUIsd0JBQXdCLGlCQUFpQjs7QUFFbkUsU0FBUyxpQkFBaUIsbUNBQW1DO0NBQzVELFNBQVMsaUJBQThCLHVCQUF1QixDQUFDLENBQUMsU0FBUyxXQUFXO0VBQ25GLE9BQU8sVUFBVSxPQUFPLE1BQU07RUFDOUIsTUFBTSxVQUFVLE9BQU8sY0FBaUMsbUJBQW1CO0VBQzNFLFNBQVMsYUFBYSxpQkFBaUIsT0FBTztFQUM5QyxNQUFNLFFBQVEsT0FBTyxjQUEyQixpQkFBaUI7RUFDakUsSUFBSSxPQUFPLFdBQVcsS0FBSztFQUMzQixVQUFVLFFBQVEsT0FBTztFQUN6QixXQUFXLFFBQVEsTUFBTSxDQUFDO0NBQzNCLENBQUM7QUFDRixDQUFDOztBQUVELElBQUksWUFBa0Q7QUFDdEQsSUFBSSxhQUFhO0FBQ2pCLFNBQVMscUJBQXFCO0NBQzdCLElBQUksWUFBWTs7Ozs7Q0FLaEIsSUFBSSxXQUFXO0NBQ2YsSUFBSTtFQUNILE1BQU0sYUFBYSxZQUFZLGlCQUFpQixZQUFZO0VBQzVELElBQUksY0FBYyxXQUFXLE1BQU0sV0FBVyxFQUFFLENBQUMsU0FBUyxVQUFVO0dBQ25FLFdBQVc7RUFDWjtDQUNELFNBQVMsSUFBSTs7RUFFWixJQUFJO0dBQ0gsSUFBSyxZQUFvQixjQUFlLFlBQW9CLFdBQVcsU0FBUyxHQUFHO0lBQ2xGLFdBQVc7R0FDWjtFQUNELFNBQVMsS0FBSyxDQUFDO0NBQ2hCOzs7Q0FHQSxJQUFJLENBQUMsVUFBVTtFQUNkLElBQUk7R0FDSCxJQUFJLGVBQWUsUUFBUSx1QkFBdUIsTUFBTSxLQUFLO0lBQzVEO0dBQ0Q7R0FDQSxlQUFlLFFBQVEseUJBQXlCLEdBQUc7RUFDcEQsU0FBUyxJQUFJOztHQUVaLElBQUssT0FBZSx1QkFBdUI7R0FDM0MsQUFBQyxPQUFlLHdCQUF3QjtFQUN6QztDQUNEOztDQUVBLElBQUksV0FBVztFQUNkLGFBQWEsU0FBUztFQUN0QixZQUFZO0NBQ2I7Q0FDQSxhQUFhOztDQUViLE1BQU0sUUFBUSxTQUFTLGNBQWMsS0FBSztDQUMxQyxNQUFNLFlBQVk7Q0FDbEIsTUFBTSxhQUFhLFFBQVEsUUFBUTtDQUNuQyxNQUFNLGFBQWEsY0FBYyxNQUFNO0NBQ3ZDLE1BQU0sWUFBWTs7Ozs7Ozs7Ozs7O0NBWWxCLFNBQVMsS0FBSyxZQUFZLEtBQUs7Q0FDL0IsTUFBTSxnQkFBZ0I7RUFDckIsSUFBSSxNQUFNLFVBQVUsU0FBUyxTQUFTLEdBQUc7RUFDekMsTUFBTSxVQUFVLElBQUksU0FBUztFQUM3QixpQkFBaUI7R0FDaEIsTUFBTSxPQUFPO0dBQ2IsYUFBYTtFQUNkLEdBQUcsR0FBRztDQUNQO0NBQ0EsTUFBTSxjQUFjLGFBQWEsQ0FBQyxFQUFFLGlCQUFpQixTQUFTLE9BQU87Q0FDckUsTUFBTSxjQUFjLG1CQUFtQixDQUFDLEVBQUUsaUJBQWlCLFNBQVMsT0FBTzs7Q0FFM0UsV0FBVyxTQUFTLEdBQUc7O0NBRXZCLDRCQUE0QjtFQUMzQixNQUFNLFVBQVUsSUFBSSxNQUFNO0NBQzNCLENBQUM7QUFDRjtBQUNBLElBQUksU0FBUyxlQUFlLFdBQVc7Q0FDdEMsU0FBUyxpQkFBaUIsb0JBQW9CLGtCQUFrQjtBQUNqRSxPQUFPO0NBQ04sbUJBQW1CO0FBQ3BCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkFydGljbGVJc2xhbmQuYXN0cm8/YXN0cm8mdHlwZT1zY3JpcHQmaW5kZXg9MCZsYW5nLnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKiDmlofnq6DlspvvvIhpT1Mg54G15Yqo5bKb5byP5Lik5q615Yqo5pWI77yJXG4qXG4qICAg4pGgIOWIhuWJsiAg6Z2i5p2/5Zyo44CM5paH56ug44CN5oyJ6ZKu5Y6f5L2N5Ye6546w77yI6aG26L65ID0g5bKb6aG26L6577yM5aS06YOo6ZO65ruh5bKb5YaF6YKj5LiA5qC877yJ77yMXG4qICAgICAgICAgIOWOn+WcsOWPluS7o+aMiemSru+8iDI0MG1z77yJXG4qICAg4pGhIOWxleW8gCAg44CM5paH56ug44CN6YKj5LiA5YiX5ZCR5Lik6L655pKR5byA77yI6YK75bGF6K6p5L2N77yJ77yM6Z2i5p2/5LuO5bKb55qE5LiL5rK/5b6A5LiLXG4qICAgICAgICAgIOmVv+WHuueOu+eSg+mdoiArIOWIl+ihqO+8iDQ0MG1z77yJXG4qICAg5YWz6Zet5pe25Y+N5ZCR77ya5YaF5a655reh5Ye6IOKGkiDliJfmlLbnqoTlm57mjInpkq7lrr3jgIHpnaLmnb/mlLblm57lspvlhoXpgqPkuIDmoLwg4oaSIOa3oeWHuu+8jFxuKiAgIOaMiemSruWGjea3oeWbnuadpeOAglxuKlxuKiDkuKTmnaHjgIzkuI3lg4/lpJbmjILjgI3nmoTlhbPplK7vvJpcbiogICDikaAg6Z2i5p2/6aG26L655LiO5a+86Iiq5bKb6aG26L656b2Q5bmz77yM5aS06YOo5q2j5aW96JC95Zyo5bKb5YaF6YKj5LiA5qC85LiK77ybXG4qICAg4pGhIOWym+WGhemCo+S4gOauteS4jemTuueOu+eSg++8iENTUyDph4zpgqPpgZPnoazovrnmuJDlj5ggKyAtLWFpLWdsYXNzLXRvcO+8ie+8jFxuKiAgICAgIOaJgOS7pemAj+WHuuadpeeahOaYr+WvvOiIquWym+iHquW3seeahOeOu+eSg++8jOS4jeS8muS4pOWxguWPoOeZve+8m1xuKiAgICAgIOWym+eahOS4i+ayv+S7peS4i+aJjeaYr+mdouadv+eahOeOu+eSgyDigJTigJQg5p2Q6LSo5Zyo5bGV5byA6YKj5Yi755SxIHN5bmNHbGFzcyDku47lspvkuIpcbiogICAgICDjgIzmioTjgI3ov4fmnaXvvIjnm7TmjqXor7vorqHnrpflgLzvvIzpopzoibIv5qih57OKL+aPj+i+uS/pmLTlvbHpgJDpobnkuIDoh7TvvIznlKjmiLfosIPkuoZcbiogICAgICDmqKHns4rluqbmiJbliIfkuobkuLvpopjkuZ/lr7nlvpfkuIrvvInvvIzkuKTmrrXlkIzmlpnvvIzmjqXnvJ3lpITnnIvkuI3lh7rmi7znl5XjgIJcbipcbiog5Li65LuA5LmI55SoIGFic29sdXRlIOiAjOS4jeaYryBmaXhlZO+8mlxuKiAgIOmdouadv+aYr+OAjOaWh+eroOOAjemCo+S4gOWIl+eahOWtkOWFg+e0oO+8jOaoquWQkeWPquimgSB3aWR0aDoxMDAlIOWwseiHquWKqOWvueensOaLieS8uOOAglxuKiAgICNuYXZiYXIg55qE6auY5bqm6KKr5YaZ5q275oiQIDMuNXJlbe+8iOingSBOYXZiYXIuYXN0cm8g55qE5YWo5bGA5qC35byP77yJ77yMXG4qICAg5omA5Lul6Z2i5p2/5ZCR5LiL6ZW/5Y+q5piv44CM5rqi5Ye657uY5Yi244CN77yM5LiN5Lya5oqK6aG16Z2i5YaF5a655o6o5LiL5Y6744CCXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuY29uc3QgTU9CSUxFX01BWCA9IDEwMjM7XG5jb25zdCBOQVZfSCA9IDU2O1xuY29uc3QgUEFORUxfVEFSR0VUX1cgPSA0ODA7XG4vLyDlj6rlnIbkuIvkuKTop5LvvJrpnaLmnb/pobbovrnkuI7lspvpobbovrnlr7npvZDjgIHokL3lnKjlspvph4zvvIzmiYDku6XkuIrpnaLkuKTop5LmmK/mlrnnmoRcbmNvbnN0IFBJTExfUkFESVVTID0gXCIwIDAgMjBweCAyMHB4XCI7XG5jb25zdCBQQU5FTF9SQURJVVMgPSBcIjAgMCAyNHB4IDI0cHhcIjtcbi8vIOS4ieiDtuWbiuWIhuijguaAge+8muaVtOadoeWym+ijguW8gOWQju+8jOS4remXtOiDtuWbiu+8iD0g6Z2i5p2/77yJ5Zub6KeS6YO96Zyy5Ye65p2l77yM5YWo5ZyGXG5jb25zdCBTUExJVF9QQU5FTF9SQURJVVMgPSBcIjI0cHhcIjtcbmNvbnN0IFNQTElUX1BJTExfUkFESVVTID0gXCI5OTk5cHhcIjtcbmNvbnN0IEdBUCA9IDEyO1xuY29uc3QgTVNfU1BMSVQgPSAyNDA7XG5jb25zdCBNU19FWFBBTkQgPSA0NDA7XG5jb25zdCBNU19DTE9TRSA9IDM0MDtcbmNvbnN0IE1TX0NPTlRFTlQgPSA5MDtcbmNvbnN0IFZJRVdfS0VFUCA9IDgwO1xuY29uc3QgSEVBRF9IID0gNDQ7XG4vKiog5a2Y5rS75Lit55qE5bKbIOKGkiDkuovku7bnm5HlkKzmjqfliLblmajjgILnlKggTWFwIOiAjOmdniBXZWFrTWFw77yM5omN6IO95Zue5pS26KKrIHN3dXAg6YeN5bu65o6J55qE5pen5bKbICovXG5jb25zdCBpc2xhbmRBYm9ydGVycyA9IG5ldyBNYXA8RWxlbWVudCwgQWJvcnRDb250cm9sbGVyPigpO1xuY29uc3QgaXNsYW5kSW5pdGVkID0gbmV3IFdlYWtTZXQ8RWxlbWVudD4oKTtcbmNvbnN0IGlzRGVza3RvcCA9ICgpID0+IHdpbmRvdy5pbm5lcldpZHRoID4gTU9CSUxFX01BWDtcbi8qKlxuKiDlr7zoiKrlspvmmK/kuI3mmK/msonlnKjlsY/luZXlupXpg6jvvIhQcm9NYXgg54mIIMK3IOS7heahjOmdouerr++8ieOAglxuKlxuKiDpnaLmnb/nmoTmlbTlpZflh6DkvZXpg73lu7rnq4vlnKjjgIzlspvlnKjpobbpg6jjgIHpnaLmnb/lkJHkuIvplb/jgI3kuYvkuIrvvJrpobbovrnotLTlspvpobbjgIHnjrvnkoPpk7rlnKhcbiog5bKb55qE5LiL5rK/5Lul5LiL44CB5Y+q5ZyG5LiL5Lik6KeS44CB5Y+v6ZW/5Yiw6KeG5Y+j5bqV44CCUHJvTWF4IOaKiuWym+ayieWIsOWxj+W5leW6lemDqO+8jOS6juaYr+i/memHjFxuKiDnmoTmr4/kuIDkuKrmlrnlkJHpg73opoHplZzlg4/vvJrlupXovrnotLTlspvlupXjgIHnjrvnkoPpk7rlnKjlspvnmoTkuIrmsr/ku6XkuIrjgIHlj6rlnIbkuIrkuKTop5LjgIFcbiog5Y+v6ZW/5Yiw6KeG5Y+j6aG244CC55So6L+Z5LiA5Liq5byA5YWz57uf5LiA5Y+W5YC877yM6YG/5YWN5pWj6JC95LiA5aCGIHdpbmRvdy5pbm5lcldpZHRoIOWIpOaWreOAglxuKi9cbmNvbnN0IGlzRG9ja0JvdHRvbSA9ICgpID0+IHdpbmRvdy5pbm5lcldpZHRoID4gTU9CSUxFX01BWCAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpdGUtcHJvbWF4XCIpO1xuLyoqIOWbm+inkuWchuinkuWAvOeahOS4iuS4i+mVnOWDj++8iOWPquWchuOAjOS8uOWHuuWOu+OAjeeahOmCo+S4pOS4quinku+8ie+8mlxuKiAgXCIwIDAgMjBweCAyMHB4XCLvvIjlspvlnKjpobbpg6jvvIzlnIbkuIvpnaLkuKTop5LvvIkg4oaSIFwiMjBweCAyMHB4IDAgMFwiICovXG5mdW5jdGlvbiBtaXJyb3JSYWRpdXMocjogc3RyaW5nKTogc3RyaW5nIHtcblx0aWYgKCFpc0RvY2tCb3R0b20oKSkgcmV0dXJuIHI7XG5cdGNvbnN0IHBhcnRzID0gci50cmltKCkuc3BsaXQoL1xccysvKTtcblx0cmV0dXJuIHBhcnRzLmxlbmd0aCA9PT0gNCA/IHBhcnRzLnJldmVyc2UoKS5qb2luKFwiIFwiKSA6IHI7XG59XG5jb25zdCBwcmVmZXJzUmVkdWNlZE1vdGlvbiA9ICgpID0+IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcztcbnR5cGUgQm94ID0ge1xuXHR5OiBudW1iZXI7XG5cdGg6IG51bWJlcjtcblx0cjogc3RyaW5nO1xufTtcbi8qKlxuKiDlj6rlhpnnurXlkJHkuI7lnIbop5LvvJrmqKrlkJHnlLHjgIzmlofnq6DjgI3pgqPkuIDliJfnmoTlrr3luqblhrPlrppcbiog77yI6Z2i5p2/IENTUyDmmK8gbGVmdDowIC8gd2lkdGg6MTAwJe+8jOWIl+S4gOaSkeW8gOWug+Wwsei3n+edgOWQkeS4pOi+ueaLieS8uO+8iVxuKlxuKiDnurXlkJHplJrngrnnlLHjgIzlspvlnKjlk6rjgI3lhrPlrprvvJrlspvlnKjpobbpg6jml7blhpkgdG9w77yI6Z2i5p2/5LuO5bKb6aG25b6A5LiL5oyC77yJ77yMXG4qIFByb01heCDmsonlupXml7bmlLnlhpkgYm90dG9t77yI6Z2i5p2/5LuO5bKb5bqV5b6A5LiK6ZW/77yJ44CC5Yqo55S75pyf6Ze06ZSa54K55pys6Lqr5LiN5Yqo77yMXG4qIOWPquaciSBoZWlnaHQg5Zyo5Y+Y77yM5omA5LulIGJvdHRvbSDkuI3pnIDopoHov5vov4fmuKHliJfooajjgIJcbiovXG5mdW5jdGlvbiBhcHBseUJveChwYW5lbDogSFRNTEVsZW1lbnQsIGJveDogQm94KTogdm9pZCB7XG5cdGlmIChpc0RvY2tCb3R0b20oKSkge1xuXHRcdHBhbmVsLnN0eWxlLnRvcCA9IFwiYXV0b1wiO1xuXHRcdHBhbmVsLnN0eWxlLmJvdHRvbSA9IGAke01hdGgucm91bmQoYm94LnkpfXB4YDtcblx0fSBlbHNlIHtcblx0XHRwYW5lbC5zdHlsZS5ib3R0b20gPSBcImF1dG9cIjtcblx0XHRwYW5lbC5zdHlsZS50b3AgPSBgJHtNYXRoLnJvdW5kKGJveC55KX1weGA7XG5cdH1cblx0cGFuZWwuc3R5bGUuaGVpZ2h0ID0gYCR7TWF0aC5yb3VuZChib3guaCl9cHhgO1xuXHRwYW5lbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBtaXJyb3JSYWRpdXMoYm94LnIpO1xufVxuLyoqXG4qIOOAjOi0tOedgOWym+OAjeeahOmCo+adoei+ueeahOaPj+i+ueeUseiEmuacrOaOpeeuoe+8mlxuKiDlspvlnKjpobbpg6gg4oaSIOmhtui+ue+8iOmhtui+ueWcqOWym+WGhe+8jOWkmuS4gOmBk+aoque6v+S4jeWlveeci++8ie+8m1Byb01heCDmsonlupUg4oaSIOW6lei+ueOAglxuKiDliIboo4LmiJDmlbTlnZfnjrvnkoPml7bopoHmiorlroPooaXlm57mnaXvvIzmlLblsL7lho3kuqTov5jmoLflvI/ooajjgIJcbiovXG5mdW5jdGlvbiBzZXRJc2xhbmRFZGdlQm9yZGVyKHBhbmVsOiBIVE1MRWxlbWVudCwgb246IGJvb2xlYW4pOiB2b2lkIHtcblx0Y29uc3QgcHJvcCA9IGlzRG9ja0JvdHRvbSgpID8gXCJib3JkZXItYm90dG9tLWNvbG9yXCIgOiBcImJvcmRlci10b3AtY29sb3JcIjtcblx0aWYgKG9uKSB7XG5cdFx0cGFuZWwuc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgXCJ2YXIoLS1haS1nbGFzcy1ib3JkZXIsIGNvbG9yLW1peChpbiBva2xjaCwgdmFyKC0tY2FyZC1ib3JkZXIsICNlNWU1ZTUpIDMwJSwgdHJhbnNwYXJlbnQpKVwiKTtcblx0fSBlbHNlIHtcblx0XHRwYW5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wKTtcblx0fVxufVxuZnVuY3Rpb24gc2V0RHVyYXRpb24ocGFuZWw6IEhUTUxFbGVtZW50LCBtczogbnVtYmVyKTogdm9pZCB7XG5cdHBhbmVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1haS1kdXJcIiwgcHJlZmVyc1JlZHVjZWRNb3Rpb24oKSA/IFwiMW1zXCIgOiBgJHttc31tc2ApO1xufVxuLyoqIOOAjOaWh+eroOOAjemCo+S4gOWIl+eahOWuveW6pui/h+a4oeaXtumVvyAqL1xuZnVuY3Rpb24gc2V0U2xvdER1cmF0aW9uKGlzbGFuZDogSFRNTEVsZW1lbnQsIG1zOiBudW1iZXIpOiB2b2lkIHtcblx0aXNsYW5kLnN0eWxlLnNldFByb3BlcnR5KFwiLS1haS1zbG90LWR1clwiLCBwcmVmZXJzUmVkdWNlZE1vdGlvbigpID8gXCIxbXNcIiA6IGAke21zfW1zYCk7XG59XG4vKiog5oqK44CM5paH56ug44CN6YKj5LiA5YiX6L+Y5Y6f5oiQ44CM5oyJ6ZKu5aSa5a695bCx5aSa5a6944CNICovXG5mdW5jdGlvbiByZXNldFNsb3QoaXNsYW5kOiBIVE1MRWxlbWVudCwgdHJpZ2dlcjogSFRNTEVsZW1lbnQgfCBudWxsKTogdm9pZCB7XG5cdGlzbGFuZC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIndpZHRoXCIpO1xuXHRpc2xhbmQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCItLWFpLXNsb3QtZHVyXCIpO1xuXHR2b2lkIHRyaWdnZXI/Lm9mZnNldFdpZHRoO1xufVxuLyoqIOWvvOiIquWym+eahOeOu+eSg+ahhiA9ICNuYXZiYXIg5ZSv5LiA55qE6YKj5Liq5a2QIGRpdiAqL1xuZnVuY3Rpb24gZnJhbWVPZihpc2xhbmQ6IEVsZW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuXHRjb25zdCBuYXYgPSBpc2xhbmQuY2xvc2VzdChcIiNuYXZiYXJcIik7XG5cdGlmICghbmF2KSByZXR1cm4gbnVsbDtcblx0cmV0dXJuIG5hdi5xdWVyeVNlbGVjdG9yKFwiOnNjb3BlID4gZGl2XCIpIGFzIEhUTUxFbGVtZW50ID8/IG51bGw7XG59XG4vKipcbiog5ray5oCB546755KD5byV5pOO5o6l566h5LqG6L+Z5Z2X546755KD5ZCX77yfXG4qXG4qIOW8leaTjuaKiiBgYmFja2dyb3VuZC1jb2xvcmAgLyBgYmFja2Ryb3AtZmlsdGVyYCDlhpnmiJDlhYPntKDkuIrnmoQqKuWGheiBlCAhaW1wb3J0YW50Kipcbiog77yI6KeBIExpcXVpZEdsYXNzIOeahCBhcHBseUdsYXNz77yJ44CC6YKj5piv5a6D55qE5Zyw55uY77ya57uE5Lu26L+Z6L655LiA5pemIHJlbW92ZVByb3BlcnR577yMXG4qIOaKueaOieeahOaYr+WQjOS4gOS4quWxnuaAp+OAgei/nuWug+eahOS4gOi1t+ayoeS6hu+8jOiAjOWug+eahOi0puacrO+8iF9fbGdPbiAvIGRhdGEtbGctb27vvIlcbiog6L+Y5Lul5Li6546755KD5oyC552A44CB5LiN5Lya5YaN5YaZ56ys5LqM6YGNIOKAlOKAlCDlspvlsLHmsLjkuYXpgIDlm57moLflvI/ooajpgqPlsYIgNTUlIOeZveW6leOAglxuKiDmiYDku6Xov5nnsbvlsZ7mgKfopoHkuYjliKvnorDvvIzopoHkuYjotbAgcmVidWlsZEVuZ2luZUdsYXNzIOivt+Wug+mHjeWGmeOAglxuKi9cbmZ1bmN0aW9uIGVuZ2luZU93bnMoZWw6IEVsZW1lbnQgfCBudWxsKTogYm9vbGVhbiB7XG5cdHJldHVybiAhIWVsICYmIGVsLmhhc0F0dHJpYnV0ZShcImRhdGEtbGctb25cIik7XG59XG4vKiog6K+35byV5pOO5oyJ5a6D6Ieq5bex55qE6YWN5pa55oqK6L+Z5Z2X546755KD55qE5YaF6IGU5YC86YeN5YaZ5LiA6YGN77yI5ZCM5q2l77yb5rKh5Zyo5bKX5bCx5LuA5LmI6YO95LiN5YGa77yJICovXG5mdW5jdGlvbiByZWJ1aWxkRW5naW5lR2xhc3MoZWw6IEhUTUxFbGVtZW50IHwgbnVsbCk6IHZvaWQge1xuXHRpZiAoIWVsIHx8ICEoZWwgYXMgYW55KS5fX2xnT24pIHJldHVybjtcblx0Y29uc3QgbGcgPSAod2luZG93IGFzIGFueSkuX19saXF1aWRHbGFzcztcblx0aWYgKGxnICYmIHR5cGVvZiBsZy5yZWJ1aWxkID09PSBcImZ1bmN0aW9uXCIpIGxnLnJlYnVpbGQoZWwpO1xufVxuLyoqIOWFnOW6leWkjeS9je+8muaKiuWPr+iDveaui+eVmeeahOWGheiBlOmrmOW6pui/mOe7meagt+W8j+ihqOmHjOeahCBoLTE077ybXG4qICDpobrluKbmi4bmjonkuInog7blm4rliIboo4LmgIHvvIgjbmF2YmFyIOS4iueahOexuyArIOahhuS4iueahOWGheiBlOeOu+eSg+imhuebliArIOW3puWPs+iDtuWbiu+8iSAqL1xuZnVuY3Rpb24gY2xlYXJGcmFtZShmcmFtZTogSFRNTEVsZW1lbnQgfCBudWxsKTogdm9pZCB7XG5cdGlmICghZnJhbWUpIHJldHVybjtcblx0Lyog4pqgIOeOu+eSg+eahCBiYWNrZ3JvdW5kIC8gYmFja2Ryb3AtZmlsdGVyIOW9kuW8leaTjuaJgOacie+8iOingSBlbmdpbmVPd25z77yJ44CCXG5cdOi/memHjOmhuuaJiyByZW1vdmVQcm9wZXJ0eSDkuI3kvJrorqnlroPph43lhpkg4oCU4oCUIGFwcGx5R2xhc3Mg55qE6LSm5pys5qCh6aqM5Lul5YmN5Y+q55yLXG5cdF9fbGdPbu+8jOS4gOi/m+mXqOWwsSByZXR1cm4gdHJ1ZSDigJTigJQg5bKb5LqO5piv5rC45LmF6YCA5ZueIGNvbG9yLW1peCgtLWNhcmQtYmcgNTUlKVxuXHTnmoTnmb3lupUgKyBibHVyKDIwcHgpIOejqOegguOAgui/meadoei3r+W+hOaMguWcqCBzd3VwOmJlZm9yZUNvbnRlbnRSZXBsYWNlIOS4iu+8jFxuXHTmiYDku6XooajnjrDlsLHmmK/jgIzliIfmjaLnq5nlhoXku7vmhI/kuIDkuKrpk77mjqXvvIzlt6blspvlsLHlj5jnmb3jgI3vvIjlj7PovrnpgqPmnprliqjkvZzlspvkuI3lnKhcblx05paH56ug5bKb55qE5a2Q5qCR6YeM44CB5rKh5Lq65aSN5L2N5a6D77yM5omA5Lul5Y+q5pyJ5bem5bKb5Lit5oub77yJ44CCXG5cdOW8leaTjuWcqOWyl+aXtuWPqui/mOOAjOacrOe7hOS7tuiHquW3seWGmei/h+eahOmCo+WHoOmhueOAjeOAgiAqL1xuXHRjb25zdCBwcm9wczogc3RyaW5nW10gPSBbXG5cdFx0XCJoZWlnaHRcIixcblx0XHRcIi0tYWktZnJhbWUtZHVyXCIsXG5cdFx0XCJ0cmFuc2l0aW9uXCJcblx0XTtcblx0aWYgKCFlbmdpbmVPd25zKGZyYW1lKSkge1xuXHRcdHByb3BzLnB1c2goXCJiYWNrZ3JvdW5kXCIsIFwiYm9yZGVyLWNvbG9yXCIsIFwiYm94LXNoYWRvd1wiLCBcImJhY2tkcm9wLWZpbHRlclwiLCBcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCIpO1xuXHR9XG5cdGZvciAoY29uc3QgcCBvZiBwcm9wcykgZnJhbWUuc3R5bGUucmVtb3ZlUHJvcGVydHkocCk7XG5cdGNvbnN0IG5hdiA9IGZyYW1lLmNsb3Nlc3QoXCIjbmF2YmFyXCIpO1xuXHRuYXY/LmNsYXNzTGlzdC5yZW1vdmUoXCJhaS1pc2xhbmQtc3BsaXRcIik7XG5cdG5hdj8uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uXCIpO1xuXHRmcmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWktaXNsYW5kLW9wZW5cIiwgXCJhaS1pc2xhbmQtc3BsaXRcIik7XG5cdGNvbnN0IHJvdyA9IGZyYW1lLmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblx0cm93Py5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIjpzY29wZSA+IC5haS1jYXBcIikuZm9yRWFjaCgoYykgPT4ge1xuXHRcdGMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9KTtcbn1cbmZ1bmN0aW9uIHJlc2V0UGFuZWwocGFuZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJuby1hbmltXCIpO1xuXHRwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd25cIiwgXCJpcy1leHBhbmRlZFwiLCBcImlzLXBpbGxcIiwgXCJpcy1zcGxpdFwiKTtcblx0Ly8g5bKb5YaF5rWP6KeI5oCB5LiA5bm25aSN5L2N77ya5Zue5qC55YiX6KGo44CB5riF56m65riF5Y2V77yI5LiL5qyh5bGV5byA5LuO44CM5paH56ug44CN5LqU6aG55byA5aeL77yJXG5cdGNvbnN0IGJyb3dzZUVsID0gcGFuZWwucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCJbZGF0YS1haS1icm93c2VdXCIpO1xuXHRpZiAoYnJvd3NlRWwpIGJyb3dzZUVsLmhpZGRlbiA9IHRydWU7XG5cdGNvbnN0IGJvZHlFbCA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLmFpLWZpLWJvZHlcIik7XG5cdGlmIChib2R5RWwpIGJvZHlFbC5oaWRkZW4gPSBmYWxzZTtcblx0Y29uc3QgbGlzdEVsID0gcGFuZWwucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCJbZGF0YS1haS1icm93c2UtbGlzdF1cIik7XG5cdGlmIChsaXN0RWwpIGxpc3RFbC5pbm5lckhUTUwgPSBcIlwiO1xuXHQvLyDjgIzmraboo4XjgI3moIforrDvvIjop4EgYXJtQnJvd3Nl77yJ5Lmf5b+F6aG75pGY5o6J77ya55WZ552A55qE6K+dIHN3dXAg5Lya5LiA55u05pS+6L+H6L+Z5Lqb5Y2h54mH77yMXG5cdC8vIOaUtui1t+WQjuWGjeeCueWwseWPmOaIkOaVtOmhteWIt+aWsOiAjOS4jeaYr+W5s+a7keWIh+mhtVxuXHRwYW5lbC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5haS1maS1jYXJkW2RhdGEtbm8tc3d1cF1cIikuZm9yRWFjaCgoYykgPT4ge1xuXHRcdGMucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1uby1zd3VwXCIpO1xuXHR9KTtcblx0Ly8g5pS26LW3L+WkjeS9jeWNs+WKqOeUu+e7k+adn++8mumbqOW5leino+WGu++8iOingSBSYWluRWZmZWN0IOeahCBhaS1hbmltIOmSqeWtkO+8iVxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFpLWFuaW1cIik7XG5cdHBhbmVsLnN0eWxlLm9wYWNpdHkgPSBcIlwiO1xuXHRwYW5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIi0tYWktZHVyXCIpO1xuXHRwYW5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxlZnRcIik7XG5cdHBhbmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidG9wXCIpO1xuXHRwYW5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJvdHRvbVwiKTtcblx0cGFuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ3aWR0aFwiKTtcblx0cGFuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XG5cdHBhbmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYm9yZGVyLXJhZGl1c1wiKTtcblx0Ly8g546755KD5piv5bGV5byA5pe25LuO5a+86Iiq5bKb44CM5oqE44CN6L+H5p2l55qE77yM5pS26LW35pe25LiA5bm25oq55o6J77yM5Lqk6L+Y5qC35byP6KGoXG5cdHBhbmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiLS1haS1nbGFzcy1iZ1wiKTtcblx0cGFuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCItLWFpLWdsYXNzLWJvcmRlclwiKTtcblx0cGFuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCItLWFpLWdsYXNzLXRvcFwiKTtcblx0cGFuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCItLWFpLWhlYWQtaFwiKTtcblx0Ly8g6LS05bKb6YKj5p2h6L6555qE5o+P6L6577yI5bKb5Zyo6aG26YOoPemhtui+uSAvIFByb01heCDmsonlupU95bqV6L6577yJ6YO95Lqk6L+Y5qC35byP6KGoXG5cdHBhbmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYm9yZGVyLXRvcC1jb2xvclwiKTtcblx0cGFuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJib3JkZXItYm90dG9tLWNvbG9yXCIpO1xuXHQvLyDmipjlsITmu6TplZzlvZLlvJXmk47miYDmnInvvJrlroPlhpnnmoTmmK/lhoXogZQgIWltcG9ydGFudO+8jOaIkeS7rOaRmOaOieWug+S4jeS8muWGjeWGmeS4gOmBje+8jFxuXHQvLyDpnaLmnb/kuIvmrKHlsZXlvIDlsLHmmK/kuIDlnZfjgIzmnInnmb3lupXjgIHmsqHmipjlsITjgI3nmoTno6jnoILmnb/vvIjop4EgZW5naW5lT3duc++8iVxuXHRpZiAoIWVuZ2luZU93bnMocGFuZWwpKSB7XG5cdFx0cGFuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJiYWNrZHJvcC1maWx0ZXJcIik7XG5cdFx0cGFuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiKTtcblx0fVxuXHRwYW5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJveC1zaGFkb3dcIik7XG5cdC8vIOmdouadv+aSpOS6hu+8jOOAjOaWh+eroOOAjeaMiemSruWPr+S7peWbnuadpeS6hu+8m+eOu+eSg+mrmOS6ruS5n+S4gOi1t+WbnuadpVxuXHRwYW5lbC5jbG9zZXN0PEhUTUxFbGVtZW50PihcIltkYXRhLWFydGljbGUtaXNsYW5kXVwiKT8uY2xhc3NMaXN0LnJlbW92ZShcImFpLWxpdmVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXBpbGxcIik/LmNsYXNzTGlzdC5yZW1vdmUoXCJhaS1waWxsLWhpZGRlblwiKTtcblx0dm9pZCBwYW5lbC5vZmZzZXRIZWlnaHQ7XG5cdHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1hbmltXCIpO1xufVxuLyoqXG4qIOaKiuWvvOiIquWym+eOu+eSg+ahhuOAjOatpOWIu+WunumZheeahOeOu+eSg+OAjeWOn+agt+aQrOWIsOmdouadv+S4iuOAglxuKlxuKiDkuLrku4DkuYjkuI3lhpnmrbvkuIDku73phY3mlrnvvJrlspvnmoTnjrvnkoPmmK/kvJrlj5jnmoQg4oCU4oCUIOWjgee6uCBiYW5uZXIg5qih5byP5pivXG4qIGNvbG9yLW1peCgtLWNhcmQtYmcgNTUlKSArIGJsdXIoLS1uYXZiYXItZ2xhc3MtYmx1cinvvIzpnZ7lo4HnurjmqKHlvI/mmK9cbiogODglICsgYmx1cigxMnB4Ke+8jOaal+iJsi/kuq7oibLlj4jmmK/kuI3lkIznmoQgLS1jYXJkLWJn77yM55So5oi36L+Y6IO95Zyo6K6+572u6YeM6LCD5qih57OK5bqm44CCXG4qIOmdouadv+imgeWSjOWug+OAjOWQjOS4gOaXtuWIu+OAgeWujOWFqOS4gOiHtOOAjeaJjeWDj+WQjOS4gOWdl+eOu+eSg++8jOaJgOS7peebtOaOpeivu+Wym+eahOiuoeeul+WAvOaKhOi/h+adpe+8jFxuKiDlj6ropoHlspvlj5jvvIjnlKjmiLfosIPorr7nva7jgIHliIfkuLvpopjvvInvvIzkuIvmrKHlsZXlvIDlj4jkvJrlkIzmraXkuIDmrKHjgIJcbiovXG4vKipcbiog6Z2i5p2/5piv5ZCm5bey57uP6KKr44CM5ray5oCB546755KD5byV5pOO44CN5o6l566h77yIZGF0YS1sZy1vbu+8ieOAglxuKlxuKiDlvJXmk47lhpnnmoTmmK8gYGJhY2tkcm9wLWZpbHRlcjogdXJsKCNsZy1uKSAuLi5gIOS4lOW4piAhaW1wb3J0YW5077yM5L2G5a6D5ZKM5oiR5LusXG4qIOWQjumdoueahCBgcGFuZWwuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSAuLi5gIOaYryoq5ZCM5LiA5Liq5bGe5oCn55qE5ZCM5LiA5p2h5YaF6IGU5aOw5piOKiog4oCU4oCUXG4qIENTU09NIOmHjOS4gOS4quWxnuaAp+WPqueVmeS4gOadoeWjsOaYju+8jOWQjuWGmeeahOS8muaKiuWFiOWJjemCo+adoe+8iOi/nuWQjCAhaW1wb3J0YW5077yJ5pW05p2h5pu/5o2i5o6J44CCXG4qIOe7k+aenO+8mumdouadv+aYjuaYjuaMguS4iuS6huaKmOWwhOa7pOmVnO+8jOWNtOWcqOaIkeS7rOWGmeWujCBibHVyIOS5i+WQjuWPiOWPmOWbnuS4gOWdl+ejqOeggueZveadv+OAglxuKiDmiYDku6XlvJXmk47mjqXmiYvkuYvlkI7vvIzpnaLmnb/nmoQgYmFja2Ryb3AtZmlsdGVyIOS4gOW+i+S4jeWGjeeUseacrOe7hOS7tueisOOAglxuKi9cbmZ1bmN0aW9uIGVuZ2luZU93bnNHbGFzcyhwYW5lbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcblx0cmV0dXJuIHBhbmVsLmhhc0F0dHJpYnV0ZShcImRhdGEtbGctb25cIik7XG59XG5mdW5jdGlvbiBzeW5jR2xhc3MoZnJhbWU6IEhUTUxFbGVtZW50IHwgbnVsbCwgcGFuZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdGlmICghZnJhbWUpIHJldHVybjtcblx0Y29uc3QgY3MgPSBnZXRDb21wdXRlZFN0eWxlKGZyYW1lKTtcblx0Y29uc3QgYmcgPSBjcy5iYWNrZ3JvdW5kQ29sb3I7XG5cdC8vIOWym+WcqOOAjOWFqOmAj+aYjuOAjemYtuauteiDjOaZr+aYr+ecn+mAj+aYju+8muatpOaXtueFp+aQrOS8muiuqemdouadv+WPmOaIkOS4gOeJh+epuueOu+eSg++8jFxuXHQvLyDliJfooajmloflrZfns4rlnKjlo4HnurjkuIrjgILnlZnkuKrkuIvpmZDvvIzov5nnp43mg4XlhrXpgIDlm57moLflvI/ooajph4znmoQgNTUlIOeOu+eSg+OAglxuXHQvLyDvvIhtYXRjaCDml6DmjZXojrfnu4TvvIxhbHBoYSDlj5YgWzBd77ybWzFdIOS8muaYryB1bmRlZmluZWTvvIlcblx0Y29uc3QgYWxwaGFTdHIgPSAoYmcubWF0Y2goL1tcXGQuXSsoPz1cXHMqXFwpXFxzKiQpLykgfHwgW10pWzBdO1xuXHRjb25zdCBhbHBoYU51bSA9IE51bWJlcihhbHBoYVN0cik7XG5cdGNvbnN0IHRvb1RyYW5zcGFyZW50ID0gL15yZ2JhP1xcKFxccyowWyxcXHNdKzBbLFxcc10rMFssXFxzXSswXFxzKlxcKSQvLnRlc3QoYmcpIHx8IC9ecmdiYT9cXCgvLnRlc3QoYmcpICYmIGFscGhhTnVtIDwgLjEyIHx8IC9eb2tsY2g/XFwoLy50ZXN0KGJnKSAmJiAhTnVtYmVyLmlzTmFOKGFscGhhTnVtKSAmJiBhbHBoYU51bSA8IC4xMjtcblx0aWYgKCF0b29UcmFuc3BhcmVudCkgcGFuZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWFpLWdsYXNzLWJnXCIsIGJnKTtcblx0Y29uc3QgZmlsdGVyID0gY3MuYmFja2Ryb3BGaWx0ZXIgfHwgKChjcyBhcyB1bmtub3duKSBhcyB7XG5cdFx0d2Via2l0QmFja2Ryb3BGaWx0ZXI/OiBzdHJpbmc7XG5cdH0pLndlYmtpdEJhY2tkcm9wRmlsdGVyIHx8IFwiXCI7XG5cdC8vIOWym+S4iueahCBiYWNrZHJvcC1maWx0ZXIg5Y+v6IO95bey57uP6KKr44CM5ray5oCB546755KD5byV5pOO44CN5o2i5oiQIHVybCgjbGcteCkg5oqY5bCE5ruk6ZWc77yMXG5cdC8vIOmCo+aYr+aMieWym+iHquW3seeahOWwuuWvuOeul+eahOi0tOWbvu+8jOeFp+aQrOWIsOmdouadv+S4iuS8mumUmeS9jeOAgui/meenjeaDheWGtei3s+i/h++8jFxuXHQvLyDpnaLmnb/nlKjoh6rlt7HnmoTnjrvnkoPvvIhDU1Mg6YeM6YKj5Lu9ICsg5byV5pOO57uZ6Z2i5p2/5Y2V54us566X55qE5oqY5bCE77yJ44CCXG5cdGlmICghZW5naW5lT3duc0dsYXNzKHBhbmVsKSAmJiBmaWx0ZXIgJiYgZmlsdGVyICE9PSBcIm5vbmVcIiAmJiBmaWx0ZXIuaW5kZXhPZihcInVybChcIikgPT09IC0xKSB7XG5cdFx0cGFuZWwuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBmaWx0ZXI7XG5cdFx0cGFuZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiLCBmaWx0ZXIpO1xuXHR9XG5cdC8vIOWPquaPj+W3pi/lj7Mv5LiL5LiJ6L6577yI6aG26L655Zyo5bKb5YaF77yM5o+P5LqG5Lya5Zyo5aS06YOo5LiK5pa55aSa5LiA6YGT5qiq57q/77yJXG5cdHBhbmVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1haS1nbGFzcy1ib3JkZXJcIiwgY3MuYm9yZGVyTGVmdENvbG9yKTtcblx0aWYgKGNzLmJveFNoYWRvdyAmJiBjcy5ib3hTaGFkb3cgIT09IFwibm9uZVwiKSBwYW5lbC5zdHlsZS5ib3hTaGFkb3cgPSBjcy5ib3hTaGFkb3c7XG59XG4vKiog5ouJ5Y+W5p+Q5Liq5qCP55uu6aG177yM5oq95Ye6IG1haW4g6YeM5YmN6Iul5bmy5p2h56uZ5YaF6ZO+5o6l77yI5bKb5YaF5rWP6KeI55So77yJ44CCXG4qICDop6PmnpDlpLHotKUv572R57uc5aSx6LSl55u05o6l5oqb6ZSZ77yM6LCD55So5pa56YCA5Zue5pW06aG16Lez6L2s44CCICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaFNlY3Rpb25MaW5rcyhwYWdlVXJsOiBzdHJpbmcpOiBQcm9taXNlPHtcblx0aHJlZjogc3RyaW5nO1xuXHR0ZXh0OiBzdHJpbmc7XG59W10+IHtcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocGFnZVVybCwgeyBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiIH0pO1xuXHRpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzLnN0YXR1c31gKTtcblx0Y29uc3QgaHRtbCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cdGNvbnN0IG1haW4gPSBkb2MucXVlcnlTZWxlY3RvcihcIm1haW5cIikgPz8gZG9jLmJvZHk7XG5cdC8vIHBhZ2VVcmwg5piv56uZ5YaF55u45a+56Lev5b6E77yI5Y2h54mHIGhyZWbvvIzlpoIgXCIvYXJjaGl2ZS9cIu+8ieKAlOKAlCDnm7jlr7not6/lvoTkuI3og73lvZNcblx0Ly8gbmV3IFVSTCgpIOeahOWfuuWHhu+8jOS8muebtOaOpeaKm+mUme+8jOe7k+aenOavj+adoemTvuaOpemDveiiqyBjb250aW51ZSDmjonjgIHmuIXljZXmsLjov5zmmK/nqbrnmoTjgIJcblx0Ly8g5YWI5oqK5a6D5YWc5oiQ57ud5a+55Zyw5Z2A5YaN5L2c5Z+65YeG44CCXG5cdGNvbnN0IGJhc2UgPSBuZXcgVVJMKHBhZ2VVcmwsIGxvY2F0aW9uLmhyZWYpO1xuXHRjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdGNvbnN0IG91dDoge1xuXHRcdGhyZWY6IHN0cmluZztcblx0XHR0ZXh0OiBzdHJpbmc7XG5cdH1bXSA9IFtdO1xuXHRmb3IgKGNvbnN0IGEgb2YgQXJyYXkuZnJvbShtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWZdXCIpKSkge1xuXHRcdGNvbnN0IHJhdyA9IGEuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiO1xuXHRcdGlmICghcmF3IHx8IHJhdy5zdGFydHNXaXRoKFwiI1wiKSB8fCAvXihtYWlsdG98dGVsfGphdmFzY3JpcHQpOi9pLnRlc3QocmF3KSkgY29udGludWU7XG5cdFx0bGV0IGFiczogVVJMO1xuXHRcdHRyeSB7XG5cdFx0XHRhYnMgPSBuZXcgVVJMKHJhdywgYmFzZSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKGFicy5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikgY29udGludWU7XG5cdFx0Y29uc3Qga2V5ID0gYWJzLnBhdGhuYW1lICsgYWJzLnNlYXJjaDtcblx0XHRpZiAoc2Vlbi5oYXMoa2V5KSkgY29udGludWU7XG5cdFx0Y29uc3QgdGV4dCA9IChhLnRleHRDb250ZW50IHx8IFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcblx0XHRpZiAoIXRleHQpIGNvbnRpbnVlO1xuXHRcdHNlZW4uYWRkKGtleSk7XG5cdFx0b3V0LnB1c2goe1xuXHRcdFx0aHJlZjoga2V5LFxuXHRcdFx0dGV4dDogdGV4dC5zbGljZSgwLCA2NClcblx0XHR9KTtcblx0XHRpZiAob3V0Lmxlbmd0aCA+PSAyMCkgYnJlYWs7XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cbmZ1bmN0aW9uIGluaXRBcnRpY2xlSXNsYW5kKCkge1xuXHQvLyDlr7zoiKrlspvooqsgc3d1cCDmlbTlnZfph43lu7rml7bvvIzml6foioLngrnkuIrnmoQgZG9jdW1lbnQvd2luZG93IOe6p+ebkeWQrOimgeaSpOmUgO+8jFxuXHQvLyDlkKbliJnmr4/liIfkuIDmrKHpobXlsLHkvJrlpJrmjILkuIDku73lhajlsYDnm5HlkKzjgIJcblx0Ly8g6Z2i5p2/5aeL57uI5Zyo5bKb55qE5a2Q5qCR6YeM77yM5bKb6KKr56e76Zmk5pe25a6D5Lya6Lef552A6LWw77yM5LiN6ZyA6KaB5Y2V54us5Zue5pS244CCXG5cdGZvciAoY29uc3QgW2VsLCBhYm9ydGVyXSBvZiBBcnJheS5mcm9tKGlzbGFuZEFib3J0ZXJzKSkge1xuXHRcdGlmICghZWwuaXNDb25uZWN0ZWQpIHtcblx0XHRcdGFib3J0ZXIuYWJvcnQoKTtcblx0XHRcdGlzbGFuZEFib3J0ZXJzLmRlbGV0ZShlbCk7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGlzbGFuZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiW2RhdGEtYXJ0aWNsZS1pc2xhbmRdXCIpKTtcblx0aXNsYW5kcy5mb3JFYWNoKChpc2xhbmQpID0+IHtcblx0XHRjb25zdCB0cmlnZ2VyID0gaXNsYW5kLnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiW2RhdGEtYWktdHJpZ2dlcl1cIik7XG5cdFx0Ly8g6Z2i5p2/5aeL57uI55WZ5Zyo5a+86Iiq5bKb5YaF6YOo77yM55u05o6l5p+l5bCx6IO95p+l5Yiw44CCXG5cdFx0Ly8g77yI5pep5YWI5pCs5YiwIGJvZHkg55qE54mI5pys5Lya5Zyo6L+Z6YeM5p+l5LiN5YiwIOKGkiDmj5DliY0gcmV0dXJu77yMXG5cdFx0Ly8gICDkvYbliY3pnaLlt7Lnu4/miorml6fnm5HlkKwgYWJvcnQg5o6J5LqG77yM5LqO5piv44CM54K56L+H5LiA5qyh5bCx5YaN5Lmf5bGV5LiN5byA44CN77yJXG5cdFx0Y29uc3QgcGFuZWwgPSBpc2xhbmQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCJbZGF0YS1haS1wYW5lbF1cIik7XG5cdFx0aWYgKCF0cmlnZ2VyIHx8ICFwYW5lbCkgcmV0dXJuO1xuXHRcdC8vIOW3sue7j+WIneWni+WMlui/h++8muWPquWkjeS9je+8jOe7neS4jemHjeWkjee7keWumuOAglxuXHRcdC8vIHN3dXAg5YiH6aG15pe2IGFzdHJvOnBhZ2UtbG9hZCAvIHN3dXA6Y29udGVudFJlcGxhY2VkIOS8mumHjeWkjeinpuWPke+8jFxuXHRcdC8vIOiLpei/memHjOWGjSBhYm9ydCDkuIDmrKHvvIzop6blj5HmjInpkq7lsLHkvJrlj5jmiJDmsqHmnInkuovku7bnu5HlrprnmoTnqbrlo7PjgIJcblx0XHRpZiAoaXNsYW5kSW5pdGVkLmhhcyhpc2xhbmQpKSB7XG5cdFx0XHRpc2xhbmQuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0XHR0cmlnZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcblx0XHRcdHJlc2V0UGFuZWwocGFuZWwpO1xuXHRcdFx0cmVzZXRTbG90KGlzbGFuZCwgdHJpZ2dlcik7XG5cdFx0XHRjbGVhckZyYW1lKGZyYW1lT2YoaXNsYW5kKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGFib3J0ZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdFx0Y29uc3QgeyBzaWduYWwgfSA9IGFib3J0ZXI7XG5cdFx0aXNsYW5kQWJvcnRlcnMuc2V0KGlzbGFuZCwgYWJvcnRlcik7XG5cdFx0aXNsYW5kSW5pdGVkLmFkZChpc2xhbmQpO1xuXHRcdGNvbnN0IHN0YXRlID0ge1xuXHRcdFx0dG9rZW46IDAsXG5cdFx0XHR0aW1lcnM6IFtdIGFzIG51bWJlcltdXG5cdFx0fTtcblx0XHRjb25zdCBjbGVhclRpbWVycyA9ICgpID0+IHtcblx0XHRcdHN0YXRlLnRpbWVycy5mb3JFYWNoKCh0KSA9PiB3aW5kb3cuY2xlYXJUaW1lb3V0KHQpKTtcblx0XHRcdHN0YXRlLnRpbWVycyA9IFtdO1xuXHRcdH07XG5cdFx0Y29uc3QgbGF0ZXIgPSAoZm46ICgpID0+IHZvaWQsIG1zOiBudW1iZXIpID0+IHtcblx0XHRcdGNvbnN0IGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzdGF0ZS50aW1lcnMgPSBzdGF0ZS50aW1lcnMuZmlsdGVyKCh0KSA9PiB0ICE9PSBpZCk7XG5cdFx0XHRcdGZuKCk7XG5cdFx0XHR9LCBtcyk7XG5cdFx0XHRzdGF0ZS50aW1lcnMucHVzaChpZCk7XG5cdFx0fTtcblx0XHRyZXNldFBhbmVsKHBhbmVsKTtcblx0XHR0cmlnZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcblx0XHQvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHQqIOS4ieiDtuWbiuWIhuijgu+8iOWPquWcqOOAjOaWh+eroOOAjeaMiemSruiiq+eCueWHu+WxleW8gOaXtuWPkeeUn++8iVxuXHRcdCpcblx0XHQqIOWxleW8gOmCo+S4gOWIu++8jOaVtOadoeWvvOiIquWym+ijguaIkOS4ieaemueLrOeri+iDtuWbiu+8mlxuXHRcdCogICDlt6YgPSBsb2dvICsg5bem5L6n6ZO+5o6l77yb5LitID0g44CM5paH56ug44CN5YiX77yI5ZCR5LiL6ZW/5Ye66Z2i5p2/77yJ77ybXG5cdFx0KiAgIOWPsyA9IOWFtuS9memTvuaOpSArIOWkqeawlOOAglxuXHRcdCog5Lit6Ze06YKj5p6a5LiN5Y2V54us55S7IOKAlOKAlCDpnaLmnb/miornjrvnkoPpobbliLDlspvpobbvvIgtLWFpLWdsYXNzLXRvcDogMO+8ie+8jFxuXHRcdCog5aS06YOo6YKj5LiA5qC85bCx5piv5Lit6Ze06IO25ZuK77yb5bem5Y+z5Lik5p6a55SxIC5haS1jYXAg5a6e5pe25a6a5L2N44CCXG5cdFx0KiDliqjmlYjvvJrlt6blj7Pog7blm4rlhYjmjInjgIzml6DnvJ3pk7rmu6HmlbTmnaHlspvjgI3okL3kvY3vvIjnnIvotbfmnaXov5jmmK/ljp/mnaXpgqPmnaHvvInvvIxcblx0XHQqIOeEtuWQjue8nemameS7jiAwIOmVv+WHuuadpSDigJTigJQg5LiO6Z2i5p2/5ZCR5LiL5bGV5byA5ZCM5q2l77yM5bCx5piv44CM5YiG6KOC44CN44CCXG5cdFx0KiDlspvoh6rlt7HnmoTnjrvnkoPlnKjliIboo4Lnnqzpl7Tnnqzml7bmkZjmjonvvIguYWktaXNsYW5kLXNwbGl077yJ77yM5ZCm5YiZ5Lik5bGC546755KD5Y+g55m944CCXG5cdFx0KiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0XHRsZXQgc3BsaXRPbiA9IGZhbHNlO1xuXHRcdGxldCBzcGxpdFZpc2libGUgPSBmYWxzZTtcblx0XHRsZXQgc3BsaXRSYWYgPSAwO1xuXHRcdGxldCBjYXBMOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGxldCBjYXBSOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdC8vIHN0YXJ0U3BsaXQg5pe255qE546755KD5p2Q5paZ77yM5pS26LW35pe255So5LqO556s5pe25peg57yd6L+Y546755KDXG5cdFx0bGV0IGdsYXNzU25hcDogUmV0dXJuVHlwZTx0eXBlb2Ygc25hcHNob3RHbGFzcz4gfCBudWxsID0gbnVsbDtcblx0XHRjb25zdCByb3dPZiA9IChmcmFtZTogSFRNTEVsZW1lbnQgfCBudWxsKTogSFRNTEVsZW1lbnQgfCBudWxsID0+IGZyYW1lID8gZnJhbWUuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTEVsZW1lbnQgPz8gbnVsbCA6IG51bGw7XG5cdFx0ZnVuY3Rpb24gcmVuZGVyU3BsaXQodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRpZiAoIWNhcEwgfHwgIWNhcFIpIHJldHVybjtcblx0XHRcdC8vIOavj+W4p+Wunua1i++8mueOu+eSg+adoeaYryBmaXQtY29udGVudO+8iOWIl+WuveWPmOWMluS8mui/nuW4puWKqOaVtOadoeWym++8ie+8jOS9jee9ri/lsLrlr7hcblx0XHRcdC8vIOmDveS4jeiDvee8k+WtmO+8jOe8k+WtmOWwseS8muOAjOWxleW8gOWQjueOu+eSg+mUmeS9jeOAjeOAguS4ieS4qiByZWN0IOWcqOWQjOS4gOW4p+mHjOivu++8jFxuXHRcdFx0Ly8g5Y+q5by65Yi25LiA5qyh5biD5bGA44CCXG5cdFx0XHRjb25zdCBmcmFtZSA9IGZyYW1lT2YoaXNsYW5kKTtcblx0XHRcdGNvbnN0IHJvdyA9IHJvd09mKGZyYW1lKTtcblx0XHRcdGlmICghZnJhbWUgfHwgIXJvdyB8fCAhcm93LmlzQ29ubmVjdGVkKSByZXR1cm47XG5cdFx0XHRjb25zdCByciA9IHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGNvbnN0IGZyID0gZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRjb25zdCBpciA9IGlzbGFuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGlmIChmci53aWR0aCA8IDEwIHx8IGlyLndpZHRoIDwgMTApIHJldHVybjtcblx0XHRcdGNvbnN0IGJhckwgPSBmci5sZWZ0IC0gcnIubGVmdDtcblx0XHRcdGNvbnN0IGJhclQgPSBmci50b3AgLSByci50b3A7XG5cdFx0XHRjb25zdCBiYXJXID0gZnIud2lkdGg7XG5cdFx0XHRjb25zdCBiYXJIID0gZnIuaGVpZ2h0O1xuXHRcdFx0Y29uc3QgY29sTCA9IGlyLmxlZnQgLSByci5sZWZ0O1xuXHRcdFx0Y29uc3QgY29sUiA9IGlyLnJpZ2h0IC0gcnIubGVmdDtcblx0XHRcdGNvbnN0IGdhcCA9IEdBUCAqIHQ7XG5cdFx0XHRjYXBMLnN0eWxlLmxlZnQgPSBgJHtiYXJMfXB4YDtcblx0XHRcdGNhcEwuc3R5bGUudG9wID0gYCR7YmFyVH1weGA7XG5cdFx0XHRjYXBMLnN0eWxlLmhlaWdodCA9IGAke2Jhckh9cHhgO1xuXHRcdFx0Y2FwTC5zdHlsZS53aWR0aCA9IGAke01hdGgubWF4KDAsIGNvbEwgLSBnYXAgLSBiYXJMKX1weGA7XG5cdFx0XHRjYXBSLnN0eWxlLnRvcCA9IGAke2JhclR9cHhgO1xuXHRcdFx0Y2FwUi5zdHlsZS5oZWlnaHQgPSBgJHtiYXJIfXB4YDtcblx0XHRcdGNhcFIuc3R5bGUubGVmdCA9IGAke2NvbFIgKyBnYXB9cHhgO1xuXHRcdFx0Y2FwUi5zdHlsZS53aWR0aCA9IGAke01hdGgubWF4KDAsIGJhckwgKyBiYXJXIC0gKGNvbFIgKyBnYXApKX1weGA7XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIGVuc3VyZUNhcHMocm93OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRcdFx0aWYgKCFjYXBMKSBjYXBMID0gcm93LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiOnNjb3BlID4gLmFpLWNhcC1sXCIpO1xuXHRcdFx0aWYgKCFjYXBSKSBjYXBSID0gcm93LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiOnNjb3BlID4gLmFpLWNhcC1yXCIpO1xuXHRcdFx0aWYgKCFjYXBMKSB7XG5cdFx0XHRcdGNhcEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRjYXBMLmNsYXNzTmFtZSA9IFwiYWktY2FwIGFpLWNhcC1sXCI7XG5cdFx0XHRcdHJvdy5hcHBlbmRDaGlsZChjYXBMKTtcblx0XHRcdH1cblx0XHRcdGlmICghY2FwUikge1xuXHRcdFx0XHRjYXBSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0Y2FwUi5jbGFzc05hbWUgPSBcImFpLWNhcCBhaS1jYXAtclwiO1xuXHRcdFx0XHRyb3cuYXBwZW5kQ2hpbGQoY2FwUik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKiDlspvmraTliLvnmoTnjrvnkoPmoaPkvY3vvJrpgI/mmI7mqKHlvI/vvIhmdWxsL3NlbWlmdWxs77yJ6L+U5ZueIG51bGwg4oCU4oCUIOayoeeOu+eSg+WwseS4jeeUqOWIhuOAglxuXHRcdCogIGJnL2JvcmRlci9zaGFkb3cg5piv5pS26LW35pe255qE44CM556s5pe26L+Y546755KD44CN5p2Q5paZ77ya5LiO5bem5Y+z6IO25ZuK5ZCM5p2Q6LSo77yMXG5cdFx0KiAg5ZCM5bin5peg57yd5o2i5bGC77yM5LiN55So562J5qC35byP6KGo6YKjIDAuMzZzIOeahOa3oeWFpe+8iOmCo+S8mumcsuWHuuS4gOaIqumAj+aYju+8iSAqL1xuXHRcdGZ1bmN0aW9uIHNuYXBzaG90R2xhc3MoKToge1xuXHRcdFx0YWxwaGFQY3Q6IG51bWJlcjtcblx0XHRcdGZpbHRlcjogc3RyaW5nO1xuXHRcdFx0cmFkaXVzOiBzdHJpbmc7XG5cdFx0XHRiZzogc3RyaW5nO1xuXHRcdFx0Ym9yZGVyOiBzdHJpbmc7XG5cdFx0XHRzaGFkb3c6IHN0cmluZztcblx0XHR9IHwgbnVsbCB7XG5cdFx0XHRjb25zdCBmcmFtZSA9IGZyYW1lT2YoaXNsYW5kKTtcblx0XHRcdGlmICghZnJhbWUpIHJldHVybiBudWxsO1xuXHRcdFx0Y29uc3QgY3MgPSBnZXRDb21wdXRlZFN0eWxlKGZyYW1lKTtcblx0XHRcdGNvbnN0IGJnID0gY3MuYmFja2dyb3VuZENvbG9yO1xuXHRcdFx0Ly8g44CM4oCmLyAwLjU1KeOAjee7k+WwviDihpIg5pyA5ZCO5LiA5Liq5pWw5a2X5pivIGFscGhh77yI5q2j5YiZ5peg5o2V6I6357uE77yM5b+F6aG75Y+WIFswXe+8m1xuXHRcdFx0Ly8g5Y+WIFsxXSDkvJrmmK8gdW5kZWZpbmVkIOKGkiBhbHBoYSDmgZLkuLogMSDihpIg6IO25ZuKL+mdouadv+WPmOaIkCAxMDAlIOatu+eZveS4jemAj+aYju+8iVxuXHRcdFx0Y29uc3QgYWxwaGFTdHIgPSAoYmcubWF0Y2goL1tcXGQuXSsoPz1cXHMqXFwpXFxzKiQpLykgfHwgW10pWzBdO1xuXHRcdFx0Y29uc3QgYWxwaGEgPSBhbHBoYVN0ciA/IE51bWJlcihhbHBoYVN0cikgOiAxO1xuXHRcdFx0aWYgKC9ecmdiYT9cXChcXHMqMFssXFxzXSswWyxcXHNdKzBbLFxcc10rMFxccypcXCkkLy50ZXN0KGJnKSB8fCBhbHBoYSA8IC4xMikgcmV0dXJuIG51bGw7XG5cdFx0XHRjb25zdCBmaWx0ZXIgPSBjcy5iYWNrZHJvcEZpbHRlciB8fCAoKGNzIGFzIHVua25vd24pIGFzIHtcblx0XHRcdFx0d2Via2l0QmFja2Ryb3BGaWx0ZXI/OiBzdHJpbmc7XG5cdFx0XHR9KS53ZWJraXRCYWNrZHJvcEZpbHRlciB8fCBcIlwiO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0YWxwaGFQY3Q6IE1hdGgucm91bmQoYWxwaGEgKiAxMDApLFxuXHRcdFx0XHRmaWx0ZXI6IGZpbHRlciAmJiBmaWx0ZXIgIT09IFwibm9uZVwiID8gZmlsdGVyIDogXCJibHVyKDEycHgpXCIsXG5cdFx0XHRcdHJhZGl1czogY3MuYm9yZGVyVG9wTGVmdFJhZGl1cyB8fCBcIjk5OTlweFwiLFxuXHRcdFx0XHRiZyxcblx0XHRcdFx0Ym9yZGVyOiBjcy5ib3JkZXJMZWZ0Q29sb3IsXG5cdFx0XHRcdHNoYWRvdzogY3MuYm94U2hhZG93XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRmdW5jdGlvbiBhbmltYXRlU3BsaXQodGFyZ2V0OiAwIHwgMSwgZHVyOiBudW1iZXIsIG9uRG9uZT86ICgpID0+IHZvaWQpOiB2b2lkIHtcblx0XHRcdGlmIChzcGxpdFJhZikgY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3BsaXRSYWYpO1xuXHRcdFx0c3BsaXRSYWYgPSAwO1xuXHRcdFx0aWYgKCFzcGxpdFZpc2libGUpIHJldHVybjtcblx0XHRcdGNvbnN0IGQgPSBwcmVmZXJzUmVkdWNlZE1vdGlvbigpID8gMSA6IGR1cjtcblx0XHRcdGNvbnN0IGZyb20gPSB0YXJnZXQgPT09IDEgPyAwIDogMTtcblx0XHRcdGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0XHRjb25zdCBlYXNlID0gKHA6IG51bWJlcikgPT4gMSAtIE1hdGgucG93KDEgLSBwLCAzKTtcblx0XHRcdGNvbnN0IHN0ZXAgPSAobm93OiBudW1iZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgcCA9IE1hdGgubWluKDEsIChub3cgLSB0MCkgLyBkKTtcblx0XHRcdFx0cmVuZGVyU3BsaXQoZnJvbSArICh0YXJnZXQgLSBmcm9tKSAqIGVhc2UocCkpO1xuXHRcdFx0XHRpZiAocCA8IDEpIHtcblx0XHRcdFx0XHRzcGxpdFJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzcGxpdFJhZiA9IDA7XG5cdFx0XHRcdFx0Ly8g5pyA5ZCO5LiA5bin77yI57yd6ZqZ5Yia5aW95Li6IDDvvInlvZPlnLrlm57osIPvvJrmlLbotbfml7blspvnjrvnkoPlnKjov5nkuIDluKdcblx0XHRcdFx0XHQvLyDnnqzml7bov5jkuIrvvIzkuI3nlZnjgIzlkIjmi6Llrozov5jlvIDnnYDnvJ3jgI3nmoTkuK3pl7TluKdcblx0XHRcdFx0XHRvbkRvbmU/LigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0c3BsaXRSYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cdFx0fVxuXHRcdC8qKiDlspvnjrvnkoPopoHnnqzml7bmkZgv6L+Y44CCbmF2YmFyLmNzcyDnmoQgIWltcG9ydGFudCDlo4Hnurjop4TliJkgKyDmoYbkuIogMC4zNnMg55qEXG5cdFx0KiAgYmFja2dyb3VuZCDov4fmuKHvvIhuYXZiYXItc3VyZmFjZS10cmFuc2l0aW9u77yJ6Z2g57qn6IGU5Y6L5LiN56iz77yI5a6e5rWLIGhlYWRsZXNzXG5cdFx0KiAg6YeM6L+H5rih5Lya5oqK5pen5YC85Ya75Zyo6LW354K577yJ77yM5bmy6ISG55So5YaF6IGUICFpbXBvcnRhbnQg55u05o6l6ZKJ5q27IOKAlOKAlCDlhoXogZRcblx0XHQqICBpbXBvcnRhbnQg6auY5LqO5LiA5YiH5qC35byP6KGo5aOw5piO77yb6L+Y5Y6f5pe25pGY5o6J5YaF6IGU77yM5qC35byP6KGo5o6l566h5bm26aG65Yq/5reh5YWlICovXG5cdFx0ZnVuY3Rpb24gc2V0U3BsaXRDbGFzcyhmcmFtZTogSFRNTEVsZW1lbnQsIG9uOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRjb25zdCBuYXYgPSBmcmFtZS5jbG9zZXN0KFwiI25hdmJhclwiKSA/PyBmcmFtZTtcblx0XHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWktaXNsYW5kLXNwbGl0XCIsIG9uKTtcblx0XHRcdGlmIChvbikge1xuXHRcdFx0XHRmcmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcInRyYW5zaXRpb25cIiwgXCJub25lXCIpO1xuXHRcdFx0XHRmcmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcImJhY2tncm91bmRcIiwgXCJ0cmFuc3BhcmVudFwiLCBcImltcG9ydGFudFwiKTtcblx0XHRcdFx0ZnJhbWUuc3R5bGUuc2V0UHJvcGVydHkoXCJib3JkZXItY29sb3JcIiwgXCJ0cmFuc3BhcmVudFwiLCBcImltcG9ydGFudFwiKTtcblx0XHRcdFx0ZnJhbWUuc3R5bGUuc2V0UHJvcGVydHkoXCJib3gtc2hhZG93XCIsIFwibm9uZVwiLCBcImltcG9ydGFudFwiKTtcblx0XHRcdFx0ZnJhbWUuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZHJvcC1maWx0ZXJcIiwgXCJub25lXCIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0XHRmcmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCIsIFwibm9uZVwiLCBcImltcG9ydGFudFwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZyYW1lLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKTtcblx0XHRcdFx0ZnJhbWUuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJiYWNrZ3JvdW5kXCIpO1xuXHRcdFx0XHRmcmFtZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJvcmRlci1jb2xvclwiKTtcblx0XHRcdFx0ZnJhbWUuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJib3gtc2hhZG93XCIpO1xuXHRcdFx0XHRmcmFtZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJhY2tkcm9wLWZpbHRlclwiKTtcblx0XHRcdFx0ZnJhbWUuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqIOWxleW8gOKRoe+8muaVtOadoeWym+ijguaIkOS4ieaemuiDtuWbiu+8iOW3puWPs+S4pOaemueUu+WHuuadpe+8jOS4remXtOeUsemdouadv+iHquW3semhtuS4iu+8iSAqL1xuXHRcdGZ1bmN0aW9uIHN0YXJ0U3BsaXQoKTogdm9pZCB7XG5cdFx0XHRjb25zdCBmcmFtZSA9IGZyYW1lT2YoaXNsYW5kKTtcblx0XHRcdGNvbnN0IHJvdyA9IHJvd09mKGZyYW1lKTtcblx0XHRcdGlmICghZnJhbWUgfHwgIXJvdykgcmV0dXJuO1xuXHRcdFx0c3BsaXRPbiA9IHRydWU7XG5cdFx0XHRjb25zdCBzbmFwID0gc25hcHNob3RHbGFzcygpO1xuXHRcdFx0Z2xhc3NTbmFwID0gc25hcDtcblx0XHRcdHNwbGl0VmlzaWJsZSA9ICEhc25hcDtcblx0XHRcdC8vIOmdouadv+WIh+aNouaIkOOAjOaVtOWdl+eOu+eSg+OAje+8muWym+WGhemCo+S4gOagvOS5n+mTuuS4iu+8iOS5i+WJjemAj+WHuueahOaYr+Wym+eahOeOu+eSg++8jOWym+eOu+eSg+imgeaRmOS6hu+8iVxuXHRcdFx0cGFuZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWFpLWdsYXNzLXRvcFwiLCBcIjBweFwiKTtcblx0XHRcdHNldElzbGFuZEVkZ2VCb3JkZXIocGFuZWwsIHRydWUpO1xuXHRcdFx0Ly8g546755KD6aKc6Imy5o2i5oiQ44CM5rS76YWN5pa544CN77yI55WZIHZhcigtLWNhcmQtYmcp77yJ77yM5byA552A5YiH5Li76aKY5Lya6Ieq5bex6Lef5LiK44CCXG5cdFx0XHQvLyDlvJXmk47mjqXnrqHml7blupXoibLnmoTlj6PlvoTnlLHlroPlrprvvIjlspvpnaLooqvljovliLAgfjAuMjAg55qE6YCP5bqV5YC877yJ77ybXG5cdFx0XHQvLyDkvYbpnaLmnb/ph4zmlL7nmoTmmK8gMTNweCDmraPmlofvvIzmr5TlspvkuIrnmoTlm77moIfmm7TpnIDopoHkuIDngrnjgIzmiZjlupXjgI3vvIxcblx0XHRcdC8vIOaJgOS7peWcqOWym+eahOmAj+W6lee7k+aenOS4iuaUviAxLjYg5YCN77yI5aS55ZyoIDI2JX43MiUg5LmL6Ze077yJ44CCXG5cdFx0XHQvLyDlpKrpgI8g4oaSIOaWh+Wtl+eziuWcqOWjgee6uOe7k+aehOS4iu+8m+WkquWuniDihpIg5Y+I5Zue5Yiw6YKj5Z2X5Y+R55m955qE5p2/5a2Q44CCXG5cdFx0XHRjb25zdCB0aW50UGN0ID0gZW5naW5lT3duc0dsYXNzKHBhbmVsKSA/IE1hdGgubWF4KDI2LCBNYXRoLm1pbig3MiwgTWF0aC5yb3VuZCgoc25hcD8uYWxwaGFQY3QgPz8gMjApICogMS42KSkpIDogc25hcD8uYWxwaGFQY3QgPz8gNTU7XG5cdFx0XHRwYW5lbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYWktZ2xhc3MtYmdcIiwgYGNvbG9yLW1peChpbiBva2xjaCwgdmFyKC0tY2FyZC1iZykgJHt0aW50UGN0fSUsIHRyYW5zcGFyZW50KWApO1xuXHRcdFx0cGFuZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWFpLWdsYXNzLWJvcmRlclwiLCBcImNvbG9yLW1peChpbiBva2xjaCwgdmFyKC0tY2FyZC1ib3JkZXIsICNlNWU1ZTUpIDMwJSwgdHJhbnNwYXJlbnQpXCIpO1xuXHRcdFx0Ly8g6Zi05b2x5Lqk6L+Y5qC35byP6KGoIHZhcigtLXNoYWRvdy1uYXZiYXIp77yM5pqX6Imy6Ieq5Yqo5o2i5qGjXG5cdFx0XHRwYW5lbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJveC1zaGFkb3dcIik7XG5cdFx0XHRzZXRTcGxpdENsYXNzKGZyYW1lLCB0cnVlKTtcblx0XHRcdGlmICghc25hcCkgcmV0dXJuO1xuXHRcdFx0aWYgKCFlbmdpbmVPd25zR2xhc3MocGFuZWwpKSB7XG5cdFx0XHRcdHBhbmVsLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gc25hcC5maWx0ZXI7XG5cdFx0XHRcdHBhbmVsLnN0eWxlLnNldFByb3BlcnR5KFwiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIiwgc25hcC5maWx0ZXIpO1xuXHRcdFx0fVxuXHRcdFx0ZW5zdXJlQ2Fwcyhyb3cpO1xuXHRcdFx0Zm9yIChjb25zdCBjIG9mIFtjYXBMLCBjYXBSXSkge1xuXHRcdFx0XHRpZiAoIWMpIGNvbnRpbnVlO1xuXHRcdFx0XHRjLmNsYXNzTGlzdC5hZGQoXCJuby1hbmltXCIpO1xuXHRcdFx0XHRjLnN0eWxlLnNldFByb3BlcnR5KFwiLS1haS1jYXAtYWxwaGFcIiwgYCR7c25hcC5hbHBoYVBjdH0lYCk7XG5cdFx0XHRcdGMuc3R5bGUuc2V0UHJvcGVydHkoXCItLWFpLWNhcC1yYWRpdXNcIiwgc25hcC5yYWRpdXMpO1xuXHRcdFx0XHRjLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gc25hcC5maWx0ZXI7XG5cdFx0XHRcdGMuc3R5bGUuc2V0UHJvcGVydHkoXCItd2Via2l0LWJhY2tkcm9wLWZpbHRlclwiLCBzbmFwLmZpbHRlcik7XG5cdFx0XHRcdGMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdH1cblx0XHRcdHJlbmRlclNwbGl0KDApO1xuXHRcdFx0dm9pZCByb3cub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0Zm9yIChjb25zdCBjIG9mIFtjYXBMLCBjYXBSXSkgYz8uY2xhc3NMaXN0LnJlbW92ZShcIm5vLWFuaW1cIik7XG5cdFx0XHRhbmltYXRlU3BsaXQoMSwgTVNfRVhQQU5EKTtcblx0XHR9XG5cdFx0LyoqIOaUtuWwvu+8muS4ieaemuiDtuWbiuWQiOWbnuS4gOadoe+8jOWym+eOu+eSg+eerOaXtuWOn+agt+i/mOS4iu+8iOWQjOadkOi0qO+8jOaXoOeXle+8iSAqL1xuXHRcdGZ1bmN0aW9uIGVuZFNwbGl0KGJhbmQ6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0aWYgKHNwbGl0UmFmKSB7XG5cdFx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHNwbGl0UmFmKTtcblx0XHRcdFx0c3BsaXRSYWYgPSAwO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZnJhbWUgPSBmcmFtZU9mKGlzbGFuZCk7XG5cdFx0XHRpZiAoZnJhbWUpIHtcblx0XHRcdFx0c2V0U3BsaXRDbGFzcyhmcmFtZSwgZmFsc2UpO1xuXHRcdFx0XHQvLyDml6DnvJ3mjaLlsYLvvJrlkIjmi6LnmoTog7blm4rnm5bnnYDnmoTkvY3nva7vvIznjrvnkoPmnZDotKjkuI7lspvkuIDmqKHkuIDmoLfvvIxcblx0XHRcdFx0Ly8g5omA5Lul55So5b+r54Wn44CM556s5pe26ZKJ5Zue44CN77yM5LiN562J5qC35byP6KGoIDAuMzZzIOeahOa3oeWFpVxuXHRcdFx0XHQvLyDvvIjmt6HlhaXkvJrorqnlt6blj7PkuKTmrrXlhYjpgI/mmI7kuIDkuIvvvIzpnLLlh7rkuIDmiKrlo4HnurjvvInjgIJcblx0XHRcdFx0Ly8g5LiL5LiA5ouN5Lqk6L+Y5qC35byP6KGo77ya5YC855u45ZCM77yM6L+H5rih5Y6f5Zyw6LiP5q2l77yM6IKJ55y85peg5oSf77ybXG5cdFx0XHRcdC8vIOW8gOedgOWIh+S6huS4u+mimOeahOivneWImemhuuWKv+S6pOWPiea3oeWIsOaWsOS4u+mimOWAvOOAglxuXHRcdFx0XHRjb25zdCBzbmFwID0gZ2xhc3NTbmFwO1xuXHRcdFx0XHRpZiAoc25hcCkge1xuXHRcdFx0XHRcdGZyYW1lLnN0eWxlLnNldFByb3BlcnR5KFwidHJhbnNpdGlvblwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdFx0ZnJhbWUuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kXCIsIHNuYXAuYmcsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0XHRcdGZyYW1lLnN0eWxlLnNldFByb3BlcnR5KFwiYm9yZGVyLWNvbG9yXCIsIHNuYXAuYm9yZGVyLCBcImltcG9ydGFudFwiKTtcblx0XHRcdFx0XHRmcmFtZS5zdHlsZS5zZXRQcm9wZXJ0eShcImJveC1zaGFkb3dcIiwgc25hcC5zaGFkb3cgJiYgc25hcC5zaGFkb3cgIT09IFwibm9uZVwiID8gc25hcC5zaGFkb3cgOiBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHRcdFx0ZnJhbWUuc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZHJvcC1maWx0ZXJcIiwgc25hcC5maWx0ZXIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0XHRcdGZyYW1lLnN0eWxlLnNldFByb3BlcnR5KFwiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIiwgc25hcC5maWx0ZXIsIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0XHRcdHZvaWQgZnJhbWUub2Zmc2V0V2lkdGg7XG5cdFx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdFx0XHRcdGZyYW1lLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNpdGlvblwiKTtcblx0XHRcdFx0XHRcdGZyYW1lLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYmFja2dyb3VuZFwiKTtcblx0XHRcdFx0XHRcdGZyYW1lLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYm9yZGVyLWNvbG9yXCIpO1xuXHRcdFx0XHRcdFx0ZnJhbWUuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJib3gtc2hhZG93XCIpO1xuXHRcdFx0XHRcdFx0ZnJhbWUuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJiYWNrZHJvcC1maWx0ZXJcIik7XG5cdFx0XHRcdFx0XHRmcmFtZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIi13ZWJraXQtYmFja2Ryb3AtZmlsdGVyXCIpO1xuXHRcdFx0XHRcdFx0Lyog4pqgIOS4iumdoui/meS4gOaKueaYr+OAjOS4gOaVtOe7hOWxnuaAp+OAje+8jOiAjCBiYWNrZ3JvdW5kIC8gYmFja2Ryb3AtZmlsdGVyXG5cdFx0XHRcdFx0XHTlvZLlvJXmk47miYDmnInvvJrlroPlnKjliIboo4Lml7booqsgZ3VhcmROYXZiYXJTcGxpdCDmkqTmjonjgIHlj4jlnKjov5nlh6Dlvq7np5Lph4xcblx0XHRcdFx0XHRcdOaMieiHquW3seeahOmFjeaWueWGmeS6huWbnuadpe+8iE11dGF0aW9uT2JzZXJ2ZXIg6LeR5Zyo5b6u5Lu75Yqh6YeM77yM5pep5LqO5pys5bin77yJ44CCXG5cdFx0XHRcdFx0XHTmirnmjonlroPkuI3kvJrlho3lhpnnrKzkuozpgY0g4oaSIOWym+awuOS5hemAgOWbnuagt+W8j+ihqOeZveW6le+8iOeUqOaIt++8mlxuXHRcdFx0XHRcdFx044CM5YiH5o2i56uZ5YaF5Lu75oSP5LiA5Liq6ZO+5o6l77yM5bem5bKb5bCx5Y+Y55m944CN77yJ44CC5omA5Lul5oq55a6M56uL5Yi76K+35a6D6YeN5YaZ44CCICovXG5cdFx0XHRcdFx0XHRyZWJ1aWxkRW5naW5lR2xhc3MoZnJhbWUpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IGMgb2YgW2NhcEwsIGNhcFJdKSB7XG5cdFx0XHRcdGlmICghYykgY29udGludWU7XG5cdFx0XHRcdGMuY2xhc3NMaXN0LmFkZChcIm5vLWFuaW1cIik7XG5cdFx0XHRcdGMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRjLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1hbmltXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3BsaXRPbiA9IGZhbHNlO1xuXHRcdFx0c3BsaXRWaXNpYmxlID0gZmFsc2U7XG5cdFx0XHRnbGFzc1NuYXAgPSBudWxsO1xuXHRcdFx0Ly8g6Z2i5p2/5Lqk6L+Y44CM5bKb5YaF6YCP546755KD44CN5qih5byP77ya5bKb546755KD5bey57uP5Zue5p2l5LqG77yM5aS06YOo6YKj5LiA5qC85Lqk57uZ5a6DXG5cdFx0XHRwYW5lbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYWktZ2xhc3MtdG9wXCIsIGAke2JhbmR9cHhgKTtcblx0XHRcdHNldElzbGFuZEVkZ2VCb3JkZXIocGFuZWwsIGZhbHNlKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0KiDph4/lh7rpnaLmnb/or6XljaDnmoTkvY3nva7kuI7nm67moIflrr3luqbjgIJcblx0XHQqXG5cdFx0KiDmraPluLjniYjvvJrpnaLmnb/mmK8gYWJzb2x1dGXjgIHljIXlkKvlnZfmmK8gLmFydGljbGUtaXNsYW5k77yI5Lmf5bCx5piv44CM5paH56ug44CN6YKj5LiA5YiX77yJ77yMXG5cdFx0KiBDU1Mg5bey57uP5oqK5a6D5a6a5oiQIGxlZnQ6MCAvIHdpZHRoOjEwMCXvvIzmiYDku6XmqKrlkJHkuI3nlKjnrpcg4oCU4oCUIOWPquimgeeul+WHulxuXHRcdCog44CM6L+Z5LiA5YiX6K+l5pKR5Yiw5aSa5a6944CN77yM6Z2i5p2/5bCx6Ieq5Yqo5Lul5oyJ6ZKu5Li65Lit57q/5ZCR5Lik6L655a+556ew5ouJ5Ly444CCXG5cdFx0KiAgIC0g57q15ZCR77ya6LS05bKb55qE6YKj5p2h6L655LiO5bKb55qE5a+55bqU6L656b2Q5bmzIOKAlOKAlCDpnaLmnb/nmoTlpLTpg6jmraPlpb3okL3lnKjlspvlhoXpgqPkuIDmoLzkuIrvvIxcblx0XHQqICAgICDljp/lnLDlj5bku6PjgIzmlofnq6DjgI3mjInpkq7vvJvlspvlhoXpgqPkuIDmrrXkuI3pk7rnjrvnkoPvvIjop4EgQ1NTIOeahCAtLWFpLWdsYXNzLXRvcO+8ie+8jFxuXHRcdCogICAgIOaJgOS7peWvvOiIquWym+iHquW3seeahOeOu+eSg+ebtOaOpemAj+WHuuadpe+8jOS4pOWxguS4jeS8muWPoOeZveOAglxuXHRcdCogICAgIOWym+WcqOmhtumDqCDihpIg6aG26L656LS05bKb6aG244CB5b6A5LiL6ZW/77ybUHJvTWF4IOayieW6lSDihpIg5bqV6L656LS05bKb5bqV44CB5b6A5LiK6ZW/44CCXG5cdFx0KlxuXHRcdCogUHJvTWF477yIbm9TdHJldGNo77yM5bKb5rKJ5bqV77yJ77yaKirlspvljp/lnLDkuI3liqgqKuOAguWIl+S4jeaSkeWuveOAgemCu+WxheS4jeiuqeS9jeOAgVxuXHRcdCog5Lmf5LiN5YGa5LiJ6IO25ZuK5YiG6KOC77yb6Z2i5p2/6Ieq5bex566X5a695bqm5LiO5qiq5ZCR5L2N572u77yM5pS55oiQ44CM6LS0552A5bKb55qE5LiK5rK/5b6A5aSW6ZW/44CNXG5cdFx0KiDvvIjlupXovrnokL3lnKjlspvnmoTkuIrmsr/vvIzmlbTlnZfnjrvnkoPpg73lnKjlspvlpJbpnaLvvInjgILov5nmoLfml6LmsqHmnInjgIzlspvlkJHkuKTovrnmi4nkvLjjgI3vvIxcblx0XHQqIOmdouadv++8iOavlOWym+Wuve+8ieS5n+S4jeS8muebluS9j+W3puWPs+S4pOi+ueeahOWvvOiIqumhueOAgeaKiuWug+S7rOeahOeCueWHu+WQg+aOieOAglxuXHRcdCovXG5cdFx0Y29uc3QgbWVhc3VyZSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHRyID0gdHJpZ2dlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGNvbnN0IGlyID0gaXNsYW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0Y29uc3QgZnJhbWUgPSBmcmFtZU9mKGlzbGFuZCk7XG5cdFx0XHRjb25zdCBmciA9IGZyYW1lID8gZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB0cjtcblx0XHRcdGNvbnN0IHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0XHRjb25zdCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRcdC8vIOWwuuWvuOS4gOW+i+WPluW4g+WxgOWAvO+8mnJlY3Qg5Lya6KKrIGhvdmVyIOeahCBzY2FsZSDmlL7lpKfvvIjnq5nngrnoh6rluKbnmoRcblx0XHRcdC8vIHNjYWxlLWFuaW1hdGlvbjpob3ZlciDnu5nliLAgMS4xNe+8ie+8jOaLv+Wug+eul+S8mumaj+m8oOagh+S9jee9rua8guOAglxuXHRcdFx0Y29uc3QgYnRuVyA9IHRyaWdnZXIub2Zmc2V0V2lkdGggfHwgdHIud2lkdGg7XG5cdFx0XHRjb25zdCBuYXZXID0gZnJhbWUgJiYgZnJhbWUub2Zmc2V0V2lkdGggfHwgZnIud2lkdGg7XG5cdFx0XHRjb25zdCBkb2NrQm90dG9tID0gaXNEb2NrQm90dG9tKCk7XG5cdFx0XHRjb25zdCBub1N0cmV0Y2ggPSBkb2NrQm90dG9tO1xuXHRcdFx0bGV0IHc6IG51bWJlcjtcblx0XHRcdGlmIChub1N0cmV0Y2gpIHtcblx0XHRcdFx0Lyog6Z2i5p2/5pivIGFic29sdXRl77yM5LiN5ZCD6KGM5YaF56m66Ze0IOKAlOKAlCDkuI3nlKjlho3nnIvjgIzov5nkuIDliJfov5jog73plb/lpJrlrr3jgI3vvIxcblx0XHRcdFx055u05o6l5Y+W55CG5oOz5a695bqm77yM5Y+q5L+d6K+B5Lik6L6555WZ5Ye6ICNuYXZiYXIg6YKj5Lu9IDEwMHZ3LTVyZW0g55qE5L2Z6YeP44CCICovXG5cdFx0XHRcdHcgPSBNYXRoLnJvdW5kKE1hdGgubWF4KGJ0blcsIE1hdGgubWluKFBBTkVMX1RBUkdFVF9XLCB2dyAtIFZJRVdfS0VFUCkpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIOi/meS4gOWIl+iDveaSkeWkmuWuve+8n+WvvOiIquWym+iHquW3sei/mOimgeeVmeWcqOinhuWPo+WGhe+8iCNuYXZiYXIg55qEXG5cdFx0XHRcdC8vIG1heC13IOaYryAxMDB2dyAtIDVyZW3vvInvvIzmiYDku6XjgIzlspvlrr0gKyDov5nkuIDliJfplb/lh7rmnaXnmoTpg6jliIbjgI1cblx0XHRcdFx0Ly8g5LiN6IO96LaF6L+H6YKj5Liq5LiK6ZmQ44CC56m66Ze05LiN5aSf5pe25bCx5Y+q6IO96ZW/5aSa5bCR566X5aSa5bCR44CCXG5cdFx0XHRcdGNvbnN0IHJvb20gPSBNYXRoLm1heCgwLCB2dyAtIFZJRVdfS0VFUCAtIG5hdlcpO1xuXHRcdFx0XHR3ID0gTWF0aC5yb3VuZChNYXRoLm1heChidG5XLCBNYXRoLm1pbihQQU5FTF9UQVJHRVRfVywgYnRuVyArIHJvb20gLSA0KSkpO1xuXHRcdFx0fVxuXHRcdFx0Ly8g5qiq5ZCR6JC954K577yI55u45a+544CM5paH56ug44CN6YKj5LiA5YiX5bem57yY55qE5YaF6IGUIGxlZnTvvInvvJpcblx0XHRcdC8vIOS7pSoq5a+86Iiq5bKbKirkuLrkuK3nur/pk7rlvIDvvIjmr5TmjInjgIzmlofnq6DjgI3pgqPkuIDmoLzlsYXkuK3mm7TnqLPvvJrpnaLmnb/lrr3kuo7lspvvvIxcblx0XHRcdC8vIOWxheWym+WxleW8gOaXtuW3puWPs+WQhOWGkuWHuuS4gOWwj+aIqu+8jOivu+i1t+adpeWwseaYr+OAjOWym+W+gOS4iumVv+S6huS4gOWdl+OAje+8ie+8jFxuXHRcdFx0Ly8g5YaN5pW05L2T5aS55Zue6KeG5Y+j5YaFXG5cdFx0XHRsZXQgbGVmdEluQ29sID0gMDtcblx0XHRcdGlmIChub1N0cmV0Y2gpIHtcblx0XHRcdFx0Y29uc3QgY3ggPSBmci5sZWZ0ICsgZnIud2lkdGggLyAyO1xuXHRcdFx0XHRjb25zdCBtaW5MZWZ0ID0gVklFV19LRUVQIC8gMjtcblx0XHRcdFx0Y29uc3QgbWF4TGVmdCA9IHZ3IC0gdyAtIFZJRVdfS0VFUCAvIDI7XG5cdFx0XHRcdGxldCBsZWZ0ID0gTWF0aC5yb3VuZChjeCAtIHcgLyAyKTtcblx0XHRcdFx0bGVmdCA9IG1heExlZnQgPCBtaW5MZWZ0ID8gbWluTGVmdCA6IE1hdGgubWF4KG1pbkxlZnQsIE1hdGgubWluKG1heExlZnQsIGxlZnQpKTtcblx0XHRcdFx0bGVmdEluQ29sID0gbGVmdCAtIGlyLmxlZnQ7XG5cdFx0XHR9XG5cdFx0XHQvLyDooYzpq5jlv4Xpobvlrp7mtYvvvJpoLTE0IOi3n+edgOagueWtl+WPt+i1sO+8iOahjOmdoue6piA1NnB444CB56qE5bGP57qmIDQ5cHjvvInvvIxcblx0XHRcdC8vIOWGmeatu+S8muWcqOWwj+Wxj+S4iumUmeS9jeOAguWPlueOu+eSg+ahhueahOebtOaOpeWtkOiKgueCue+8iOWwseaYr+mCo+adoeWvvOiIquihjO+8ieOAglxuXHRcdFx0Y29uc3Qgcm93ID0gZnJhbWU/LmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0XHRcdGNvbnN0IHJvd0ggPSByb3cgPyByb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IDogTkFWX0g7XG5cdFx0XHQvLyDnjrvnkoPmoYboh6rouqvnmoTkuIrkuIvlkITmnIkgMXB4IOi+ueahhiDihpIg5bKb55qE5YaF6auYID0gcm93SCArIDLvvIxcblx0XHRcdC8vIOS5n+WwseaYr+OAjOWym+WGhemCo+S4gOagvOOAjeeahOmrmOW6piA9IOmdouadv+WktOmDqOeahOmrmOW6piA9IOeOu+eSg+eahOi1t+Wni+S9jVxuXHRcdFx0Y29uc3QgZnJhbWVQYWQgPSAyO1xuXHRcdFx0Y29uc3QgYmFuZCA9IE1hdGgucm91bmQocm93SCArIGZyYW1lUGFkKTtcblx0XHRcdGNvbnN0IGFic1kgPSBmci50b3A7XG5cdFx0XHQvLyDotLTlspvplJrngrnvvIjnm7jlr7nliJfoh6rouqvnmoTlgY/np7vvvIzkuqTnu5kgYXBwbHlCb3gg5YaZ5oiQIHRvcCDmiJYgYm90dG9t77yJXG5cdFx0XHRjb25zdCBhbmNob3JZID0gZG9ja0JvdHRvbSA/IGlyLmJvdHRvbSAtIGZyLmJvdHRvbSA6IGFic1kgLSBpci50b3A7XG5cdFx0XHQvKiDlspvkuI3mi4nkvLjml7bnmoTplJrngrnvvJrpnaLmnb/lupXovrnljovlnKgqKuWym+eahOS4iuayvyoq77yIZnIudG9w77yJ5LiKIOKAlOKAlFxuXHRcdFx06ICM5LiN5piv5bKb5YaF6YKj5LiA5qC877yIYW5jaG9yWSDkvJrokL3liLDlspvnmoTkuIvmsr/vvInjgIIgKi9cblx0XHRcdGNvbnN0IGFuY2hvck91dGVyID0gaXIuYm90dG9tIC0gZnIudG9wO1xuXHRcdFx0Ly8g6Z2i5p2/6IO96ZW/5aSa6auY77yf5bKb5Zyo6aG26YOo5pe25Y+X6KeG5Y+j5LiL5rK/6ZmQ5Yi277yM5rKJ5bqV5ZCO5pS55Y+X6KeG5Y+j5LiK5rK/6ZmQ5Yi2XG5cdFx0XHRjb25zdCByb29tSCA9IGRvY2tCb3R0b20gPyBhYnNZIC0gMTYgOiB2aCAtIGFic1kgLSAxNjtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZyYW1lLFxuXHRcdFx0XHRyb3dILFxuXHRcdFx0XHRmcmFtZVBhZCxcblx0XHRcdFx0YmFuZCxcblx0XHRcdFx0YnRuVyxcblx0XHRcdFx0dyxcblx0XHRcdFx0eTogYW5jaG9yWSxcblx0XHRcdFx0eU91dGVyOiBhbmNob3JPdXRlcixcblx0XHRcdFx0bGVmdEluQ29sLFxuXHRcdFx0XHRhYnNZLFxuXHRcdFx0XHRkb2NrQm90dG9tLFxuXHRcdFx0XHRub1N0cmV0Y2gsXG5cdFx0XHRcdGhlYWRIOiBIRUFEX0gsXG5cdFx0XHRcdG1heEg6IE1hdGgubWF4KDE0MCwgcm9vbUgpXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0KiDlsZXlvIDmgIHnmoToh6rnhLbpq5jluqbvvJrkuLTml7bmiorpnaLmnb/mjInnm67moIflrr3luqbmkpHlvIDjgIHpq5jluqYgYXV0byDph4/kuIDmrKHvvIxcblx0XHQqIOWFqOeoiyBuby1hbmltIOS4jee7mOWItuOAguWuveW6puW/hemhu+WFiOiuvuaIkOebruagh+WAvO+8jOWQpuWImeagheagvOWIl+aVsOeul+mUmeOAgVxuXHRcdCog6YeP5Ye65p2l55qE6auY5bqm5Lya5YGP44CCXG5cdFx0KlxuXHRcdCog5rOo5oSP6L+Z5piv44CM5peg5o2f5rWL6YeP44CN77yaaXMtZXhwYW5kZWQgLyBuby1hbmltIOWPr+iDveaYr+iwg+eUqOWJjeWwseacieeahOeKtuaAgVxuXHRcdCog77yI5bKb5YaF5rWP6KeI5pe26Z2i5p2/5pys5p2l5bCx5bGV5byA552A44CBZXhpdEJyb3dzZSDph4/lrozov5jopoHlgZrpq5jluqbliqjnlLvvvInvvIxcblx0XHQqIOaXoOadoeS7tuaRmOaOieS8muaKiuWxleW8gOaAgeWSjOWKqOeUu+S4gOi1t+aJk+ayoSDigJTigJQg5Y+q6L+Y5Y6f5oiQ6LCD55So5YmN55qE5qC35a2Q44CCXG5cdFx0Ki9cblx0XHRjb25zdCBtZWFzdXJlRXhwYW5kZWRIZWlnaHQgPSAoZzogUmV0dXJuVHlwZTx0eXBlb2YgbWVhc3VyZT4pOiBudW1iZXIgPT4ge1xuXHRcdFx0Y29uc3Qgd2FzRXhwYW5kZWQgPSBwYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1leHBhbmRlZFwiKTtcblx0XHRcdGNvbnN0IGhhZE5vQW5pbSA9IHBhbmVsLmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWFuaW1cIik7XG5cdFx0XHQvKiDlrr3luqblj6/og73mmK/osIPnlKjliY3lsLHmnInnmoTlhoXogZTlgLzvvIhQcm9NYXgg55qE44CM5bKb5LiN5ouJ5Ly444CN5qih5byP5LiL77yMXG5cdFx0XHTpnaLmnb/nmoQgbGVmdC93aWR0aCDnlLHohJrmnKzmjInlspvnmoTkvY3nva7lhpnmrbvvvIx3aWR0aDoxMDAlIOeahCBDU1Mg5bey57uP5oqKXG5cdFx0XHTkuLvmjqfmnYPkuqTnu5nlhoXogZTvvInigJTigJQg6YeP5a6M6KaB6L+Y5oiQ5Y6f5qC377yM5LiN6IO95LiA5b6LIHJlbW92ZVByb3BlcnR577yMXG5cdFx0XHTlkKbliJnpnaLmnb/kvJrnnqzpl7TloYzlm57jgIzmlofnq6DjgI3pgqPkuIDmoLznmoTlrr3luqbjgIIgKi9cblx0XHRcdGNvbnN0IGtlcHRXID0gcGFuZWwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpO1xuXHRcdFx0Y29uc3Qga2VwdFdQID0gcGFuZWwuc3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShcIndpZHRoXCIpO1xuXHRcdFx0cGFuZWwuY2xhc3NMaXN0LmFkZChcIm5vLWFuaW1cIiwgXCJpcy1leHBhbmRlZFwiKTtcblx0XHRcdHBhbmVsLnN0eWxlLndpZHRoID0gYCR7Zy53fXB4YDtcblx0XHRcdHBhbmVsLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuXHRcdFx0Y29uc3QgaCA9IHBhbmVsLm9mZnNldEhlaWdodDtcblx0XHRcdGlmICghd2FzRXhwYW5kZWQpIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1leHBhbmRlZFwiKTtcblx0XHRcdGlmICghaGFkTm9BbmltKSBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tYW5pbVwiKTtcblx0XHRcdGlmIChrZXB0VykgcGFuZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCBrZXB0Vywga2VwdFdQKTtcblx0XHRcdGVsc2UgcGFuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ3aWR0aFwiKTtcblx0XHRcdHZvaWQgcGFuZWwub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0cmV0dXJuIE1hdGgubWF4KDk2LCBNYXRoLm1pbihoLCBnLm1heEgpKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9wZW4gPSAoKSA9PiB7XG5cdFx0XHRpZiAoaXNsYW5kLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpIHJldHVybjtcblx0XHRcdGlzbGFuZC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcblx0XHRcdHRyaWdnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG5cdFx0XHQvLyDnp7vliqjnq6/vvJrkuqTnu5kgQ1NTIOaKveWxie+8jOS4jeWBmuS4pOauteW8j1xuXHRcdFx0aWYgKCFpc0Rlc2t0b3AoKSkgcmV0dXJuO1xuXHRcdFx0Ly8g5YiG6KOCL+WxleW8gOaYr+e6r+S4u+e6v+eoi+a0u++8jOmbqOW5lSBjYW52YXMg5YWI5Ya757uTIH4wLjhzIOiuqei3r1xuXHRcdFx0Ly8g77yIUmFpbkVmZmVjdCDop4EgaHRtbC5haS1hbmltIOWwsei3s+i/h+mHjee7mO+8m3Jlc2V0UGFuZWwg5YWc5bqV6Kej5Ya777yJXG5cdFx0XHQvLyDms6jmhI/lv4XpobvmjpLlnKggY2xlYXJUaW1lcnMoKSDkuYvlkI7vvIzlkKbliJnliJrms6jlhoznmoTop6PlhrsgdGltZXIg5Lya6KKr5riF5o6JXG5cdFx0XHRjb25zdCB0b2tlbiA9ICsrc3RhdGUudG9rZW47XG5cdFx0XHRjbGVhclRpbWVycygpO1xuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhaS1hbmltXCIpO1xuXHRcdFx0bGF0ZXIoKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhaS1hbmltXCIpLCBNU19TUExJVCArIE1TX0VYUEFORCArIDEyMCk7XG5cdFx0XHRjb25zdCBnID0gbWVhc3VyZSgpO1xuXHRcdFx0Ly8g6K6+5a6a44CM5bKb5YaF6YKj5LiA5qC844CN55qE6auY5bqm77ya6Z2i5p2/5aS06YOo5bCx5oyJ5a6D6ZO65ruh5bKb5YaF6YKj5LiA6KGM77yMXG5cdFx0XHQvLyDlkIzml7bkuZ/mmK/njrvnkoPnmoTotbflp4vkvY3vvIjlspvlhoXkuI3pk7rnjrvnkoPvvInjgIJcblx0XHRcdC8vIFByb01heO+8iOWym+S4jeaLieS8uO+8ieS+i+Wklu+8mumdouadv+aVtOWdl+mDveWcqOWym+WklumdouOAgeeOu+eSg+mTuua7oeWFqOmrmO+8jFxuXHRcdFx0Ly8g5aS06YOo5Y+q5piv5LiA5p2h5bi46KeE5qCH6aKY5qCP77yM5omA5Lul57uZIEhFQURfSCDogIzkuI3mmK/lspvpq5jjgIJcblx0XHRcdHBhbmVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1haS1nbGFzcy10b3BcIiwgZy5ub1N0cmV0Y2ggPyBcIjBweFwiIDogYCR7Zy5iYW5kfXB4YCk7XG5cdFx0XHRwYW5lbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYWktaGVhZC1oXCIsIGAke2cubm9TdHJldGNoID8gZy5oZWFkSCA6IGcuYmFuZH1weGApO1xuXHRcdFx0Y29uc3QgcGFuZWxIID0gbWVhc3VyZUV4cGFuZGVkSGVpZ2h0KGcpO1xuXHRcdFx0Ly8g5YWI5oqK5bKb5q2k5Yi755qE546755KD5oqE5Yiw6Z2i5p2/5LiK77ya5YiG5Ymy5Ye65p2l55qE6YKj5LiA5Z2X5LuO56ys5LiA5bin6LW3XG5cdFx0XHQvLyDlsLHkuI7lspvlkIzmnZDotKjvvIzkuI3lrZjlnKjjgIzlhYjnmb3kuIDkuIvlho3lr7nkuIrjgI3nmoTpl6pcblx0XHRcdHN5bmNHbGFzcyhmcmFtZU9mKGlzbGFuZCksIHBhbmVsKTtcblx0XHRcdC8vIOiNr+S4uOmYtuauteeOu+eSg+mdouS4uumbtu+8iOaVtOWdl+mDveWcqCAtLWFpLWdsYXNzLXRvcCDku6XkuIrvvIzlspvnjrvnkoPmnKzmnaXlsLHlnqvlnKhcblx0XHRcdC8vIOW6leS4i++8ie+8jOWFiOaKiumdouadv+eahOaooeeziuWFs+aOie+8jOWwkeS4gOWdlyBiYWNrZHJvcC1maWx0ZXIg6Z2i77ybXG5cdFx0XHQvLyBzdGFydFNwbGl0IOaRmOWym+eOu+eSg+aXtuS8muaMieWym+eahOmFjeaWueaKiuaooeeziumTuuWbnuadpeOAglxuXHRcdFx0Ly8g4pqgIOW8leaTjuaOpeaJi+eahOmdouadv++8iGRhdGEtbGctb27vvInkuI3og73norDlroPnmoTlhoXogZQgYmFja2Ryb3AtZmlsdGVyIOKAlOKAlFxuXHRcdFx0Ly8g6YKj5piv5ZCM5LiA5Liq5bGe5oCn77yM5YaZ5LqG5bCx5oqK5oqY5bCE5o2i5oiQIGJsdXLvvIzogIzkuJTlroPkuI3kvJrlho3lhpnlm57mnaXjgIJcblx0XHRcdGlmICghZy5ub1N0cmV0Y2ggJiYgc25hcHNob3RHbGFzcygpICYmICFlbmdpbmVPd25zKHBhbmVsKSkge1xuXHRcdFx0XHRwYW5lbC5zdHlsZS5zZXRQcm9wZXJ0eShcImJhY2tkcm9wLWZpbHRlclwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdHBhbmVsLnN0eWxlLnNldFByb3BlcnR5KFwiLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXJcIiwgXCJub25lXCIpO1xuXHRcdFx0fVxuXHRcdFx0Ly8g4pGgIOWIhuWJsu+8mumdouadv+WFiOaMieWym+WGhemCo+S4gOagvOeahOWkp+Wwj+WHuueOsCDigJTigJQg5L2N572u5bCx5piv44CM5paH56ug44CN5oyJ6ZKu5Y6f5L2N77yMXG5cdFx0XHQvLyAgICDlpLTpg6jvvIjil48g5paH56ugIE4g4oyD77yJ5Y6f5Zyw5Y+W5Luj5oyJ6ZKu77yM5omA5Lul6L+Z5LiA5q2l5piv44CM5b2i5oCB5Y+Y5YyW44CN6ICM5LiN5pivXG5cdFx0XHQvLyAgICDjgIzlpJbpnaLmjonkuIvmnaXkuIDlnZfjgI3jgILmraTliLvov5nkuIDliJfov5jmmK/mjInpkq7lrr3vvIzpgrvlsYXov5jmsqHliqjjgIJcblx0XHRcdC8vICAgIFByb01heO+8iOWym+S4jeaLieS8uO+8ie+8muWym+i/nuaMiemSrumDveS4jeWKqCDigJTigJQg6Z2i5p2/5pS55Zyo5bKb55qE5LiK5rK/XG5cdFx0XHQvLyAgICDplb/lh7rkuIDmnaEgNDRweCDpq5jnmoTnjrvnkoPmnaHvvIjlpLTpg6jvvInvvIzjgIzmlofnq6DjgI3pgqPpopfmjInpkq7nu6fnu63kuq7nnYDjgIJcblx0XHRcdHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJuby1hbmltXCIpO1xuXHRcdFx0cGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImlzLWV4cGFuZGVkXCIpO1xuXHRcdFx0cGFuZWwuY2xhc3NMaXN0LmFkZChcImlzLXBpbGxcIik7XG5cdFx0XHRwYW5lbC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcblx0XHRcdHNldFNsb3REdXJhdGlvbihpc2xhbmQsIDApO1xuXHRcdFx0aWYgKGcubm9TdHJldGNoKSB7XG5cdFx0XHRcdGlzbGFuZC5zdHlsZS53aWR0aCA9IGAke2cuYnRuV31weGA7XG5cdFx0XHRcdHBhbmVsLnN0eWxlLmxlZnQgPSBgJHtnLmxlZnRJbkNvbH1weGA7XG5cdFx0XHRcdHBhbmVsLnN0eWxlLndpZHRoID0gYCR7Zy53fXB4YDtcblx0XHRcdFx0YXBwbHlCb3gocGFuZWwsIHtcblx0XHRcdFx0XHR5OiBnLnlPdXRlcixcblx0XHRcdFx0XHRoOiBnLmhlYWRILFxuXHRcdFx0XHRcdHI6IFBBTkVMX1JBRElVU1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlzbGFuZC5zdHlsZS53aWR0aCA9IGAke2cuYnRuV31weGA7XG5cdFx0XHRcdGFwcGx5Qm94KHBhbmVsLCB7XG5cdFx0XHRcdFx0eTogZy55LFxuXHRcdFx0XHRcdGg6IGcuYmFuZCxcblx0XHRcdFx0XHRyOiBQSUxMX1JBRElVU1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHZvaWQgcGFuZWwub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0cGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWFuaW1cIik7XG5cdFx0XHRwYW5lbC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd25cIik7XG5cdFx0XHRpZiAoIWcubm9TdHJldGNoKSB7XG5cdFx0XHRcdGlzbGFuZC5jbGFzc0xpc3QuYWRkKFwiYWktbGl2ZVwiKTtcblx0XHRcdFx0Ly8g5YiG6KOC5pyf6Ze05reh5Ye65a+86Iiq5qCP546755KD6auY5Lqu77yI5a6D5Lya5ruR6L+b6Z2i5p2/5aS06YOo5bqV5LiL44CB5LiU6LaK5Ye65bem6IO25ZuK77yJXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXBpbGxcIik/LmNsYXNzTGlzdC5hZGQoXCJhaS1waWxsLWhpZGRlblwiKTtcblx0XHRcdH1cblx0XHRcdC8vIOKRoSDlsZXlvIDvvJrjgIzmlofnq6DjgI3pgqPkuIDliJfmkpHliLDpnaLmnb/lrr3vvIjlt6blj7PpgrvlsYXooqvmjqjlkJHkuKTovrnorqnkvY3vvInvvIxcblx0XHRcdC8vICAgIOmdouadv+maj+S5i+WQkeS4pOi+ueaLieS8uO+8jOW5tuS7juWym+eahOS4i+ayv+W+gOS4i+mVv+WHuueOu+eSg+mdoiArIOWIl+ihqO+8m1xuXHRcdFx0Ly8gICAg5LiO5q2k5ZCM5pe25pW05p2h5a+86Iiq5bKb5YiG6KOC5oiQ5LiJ5p6a6IO25ZuK77yI5bemL+S4rS/lj7PvvIznvJ3pmpnku44gMCDplb/lh7rmnaXvvInjgIJcblx0XHRcdC8vICAgIFByb01heO+8iOWym+S4jeaLieS8uO+8ie+8muS4iumdoui/meS6m+S4gOS4qumDveS4jeWBmiDigJTigJQg5Y+q5pyJ6Z2i5p2/6Ieq5bex6ZW/6auY77yMXG5cdFx0XHQvLyAgICDlspvkuI7lroPnmoTpgrvlsYXoh6rlp4voh7Pnu4jnurnkuJ3kuI3liqjjgIJcblx0XHRcdGxhdGVyKCgpID0+IHtcblx0XHRcdFx0aWYgKHRva2VuICE9PSBzdGF0ZS50b2tlbikgcmV0dXJuO1xuXHRcdFx0XHRwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtcGlsbFwiKTtcblx0XHRcdFx0c2V0RHVyYXRpb24ocGFuZWwsIE1TX0VYUEFORCk7XG5cdFx0XHRcdHNldFNsb3REdXJhdGlvbihpc2xhbmQsIE1TX0VYUEFORCk7XG5cdFx0XHRcdGlmIChnLm5vU3RyZXRjaCkge1xuXHRcdFx0XHRcdGlzbGFuZC5zdHlsZS53aWR0aCA9IGAke2cuYnRuV31weGA7XG5cdFx0XHRcdFx0YXBwbHlCb3gocGFuZWwsIHtcblx0XHRcdFx0XHRcdHk6IGcueU91dGVyLFxuXHRcdFx0XHRcdFx0aDogcGFuZWxILFxuXHRcdFx0XHRcdFx0cjogUEFORUxfUkFESVVTXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aXNsYW5kLnN0eWxlLndpZHRoID0gYCR7Zy53fXB4YDtcblx0XHRcdFx0XHRhcHBseUJveChwYW5lbCwge1xuXHRcdFx0XHRcdFx0eTogZy55LFxuXHRcdFx0XHRcdFx0aDogcGFuZWxILFxuXHRcdFx0XHRcdFx0cjogU1BMSVRfUEFORUxfUkFESVVTXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c3RhcnRTcGxpdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIOKRoiDlhoXlrrnplJnls7Dmt6HlhaXvvJrnrYnpnaLmnb/plb/lvIDkuIDkupvlho3mmL7lrZfvvIzpgb/lhY3ooqvljovmiYFcblx0XHRcdFx0bGF0ZXIoKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0b2tlbiAhPT0gc3RhdGUudG9rZW4pIHJldHVybjtcblx0XHRcdFx0XHRwYW5lbC5jbGFzc0xpc3QuYWRkKFwiaXMtZXhwYW5kZWRcIik7XG5cdFx0XHRcdFx0Ly8g5bGV5byA5a6M5oiQID0g5bKb5YaF5rWP6KeI5Y+v55So77yM44CM5q2m6KOF44CN5qC55Y2h54mHXG5cdFx0XHRcdFx0YXJtQnJvd3NlKCk7XG5cdFx0XHRcdH0sIE1TX0NPTlRFTlQpO1xuXHRcdFx0fSwgTVNfU1BMSVQpO1xuXHRcdH07XG5cdFx0Y29uc3QgY2xvc2UgPSAoKSA9PiB7XG5cdFx0XHRpZiAoIWlzbGFuZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSByZXR1cm47XG5cdFx0XHRpc2xhbmQuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0XHR0cmlnZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcblx0XHRcdGNvbnN0IHRva2VuID0gKytzdGF0ZS50b2tlbjtcblx0XHRcdGNsZWFyVGltZXJzKCk7XG5cdFx0XHQvLyDpnZ7moYzpnaLnq6/vvIzmiJbpnaLmnb/moLnmnKzmsqHmmL7npLrov4fvvJrnm7TmjqXnoazlpI3kvY1cblx0XHRcdGlmICghaXNEZXNrdG9wKCkgfHwgIXBhbmVsLmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3duXCIpKSB7XG5cdFx0XHRcdHJlc2V0UGFuZWwocGFuZWwpO1xuXHRcdFx0XHRyZXNldFNsb3QoaXNsYW5kLCB0cmlnZ2VyKTtcblx0XHRcdFx0Y2xlYXJGcmFtZShmcmFtZU9mKGlzbGFuZCkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyDmlLbotbfliqjnlLvmnJ/pl7TlkIzmoLflhrvnu5Ppm6jluZXorqnot6/vvIhyZXNldFBhbmVsIOmHjOino+WGu++8iVxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhaS1hbmltXCIpO1xuXHRcdFx0Y29uc3QgZyA9IG1lYXN1cmUoKTtcblx0XHRcdC8vIOWPjeWQke+8muWGheWuuea3oeWHuiDihpIg44CM5paH56ug44CN6YKj5LiA5YiX5pS256qE5Zue5oyJ6ZKu5a6977yI6YK75bGF5b2S5L2N77yJ44CBXG5cdFx0XHQvLyDpnaLmnb/mlLblm57lspvlhoXpgqPkuIDmoLzvvIjlj6rlianlpLTpg6jvvInihpIg5reh5Ye677yM5oyJ6ZKu5YaN5Zue5p2lXG5cdFx0XHRwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZXhwYW5kZWRcIik7XG5cdFx0XHRwYW5lbC5jbGFzc0xpc3QuYWRkKFwiaXMtcGlsbFwiKTtcblx0XHRcdHNldER1cmF0aW9uKHBhbmVsLCBNU19DTE9TRSk7XG5cdFx0XHRzZXRTbG90RHVyYXRpb24oaXNsYW5kLCBNU19DTE9TRSk7XG5cdFx0XHRpc2xhbmQuc3R5bGUud2lkdGggPSBgJHtnLmJ0bld9cHhgO1xuXHRcdFx0aWYgKHNwbGl0T24pIHtcblx0XHRcdFx0Ly8g5YiG5Ymy5oCB5pS26LW377ya6Z2i5p2/57yp5Zue5bKb5YaF6YKj5LiA5qC877yI5YWo56iL5Y+v6KeB44CB5LiN5reh5Ye677yJ77yM5bem5Y+z6IO25ZuK5ZCRXG5cdFx0XHRcdC8vIOS4remXtOWQiOaLou+8m+e8nemameW9kumbtumCo+S4gOW4p++8iGFuaW1hdGVTcGxpdCDlrozmiJDlm57osIPvvInlspvnjrvnkoPlkIzmnZDotKhcblx0XHRcdFx0Ly8g556s5pe26L+Y5LiK44CB5oyJ6ZKu5b2S5L2NIOKAlOKAlCDog7blm4rmmK/jgIzmu5Hlm57ljrvlkLjpmYTov5vlspvph4zjgI3nmoTvvIzkuI3mmK/mtojlpLHjgIJcblx0XHRcdFx0Ly8g5aS06YOo5LiO5oyJ6ZKu5ZCM5qy+5ZCM5L2N77yM5b2S5L2N556s6Ze06IKJ55y85peg57ydXG5cdFx0XHRcdHBhbmVsLnN0eWxlLnNldFByb3BlcnR5KFwiLS1haS1nbGFzcy10b3BcIiwgXCIwcHhcIik7XG5cdFx0XHRcdHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJpcy1zcGxpdFwiKTtcblx0XHRcdFx0YXBwbHlCb3gocGFuZWwsIHtcblx0XHRcdFx0XHR5OiBnLnksXG5cdFx0XHRcdFx0aDogZy5iYW5kLFxuXHRcdFx0XHRcdHI6IFNQTElUX1BJTExfUkFESVVTXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoIXNwbGl0VmlzaWJsZSkge1xuXHRcdFx0XHRcdC8vIOmAj+aYjuaooeW8j+ayoeacieWPr+ingeWIhuijgu+8iGFuaW1hdGVTcGxpdCDnm7TmjqXov5Tlm57jgIHml6Dlm57osIPvvInvvIzlrprml7blmajlhZzlupXlvZLkvY1cblx0XHRcdFx0XHRsYXRlcigoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodG9rZW4gIT09IHN0YXRlLnRva2VuKSByZXR1cm47XG5cdFx0XHRcdFx0XHRlbmRTcGxpdChnLmJhbmQpO1xuXHRcdFx0XHRcdFx0cmVzZXRQYW5lbChwYW5lbCk7XG5cdFx0XHRcdFx0XHRyZXNldFNsb3QoaXNsYW5kLCB0cmlnZ2VyKTtcblx0XHRcdFx0XHR9LCBNU19DTE9TRSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFuaW1hdGVTcGxpdCgwLCBNU19DTE9TRSwgKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0b2tlbiAhPT0gc3RhdGUudG9rZW4pIHJldHVybjtcblx0XHRcdFx0XHRlbmRTcGxpdChnLmJhbmQpO1xuXHRcdFx0XHRcdHJlc2V0UGFuZWwocGFuZWwpO1xuXHRcdFx0XHRcdHJlc2V0U2xvdChpc2xhbmQsIHRyaWdnZXIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Lyog5pS256qE55qE6JC954K577yaXG5cdFx0XHTmraPluLjniYgg4oaSIOaUtuWbnuOAjOWym+WGhemCo+S4gOagvOOAje+8iOWktOmDqOWImuWlvemTuua7oemCo+S4gOihjO+8jOS4juaMiemSruWQjOasvuWQjOS9je+8iVxuXHRcdFx0UHJvTWF477yI5bKb5LiN5ouJ5Ly477yJ4oaSIOaUtuWbnuWym+ayv+S4iumCo+adoSA0NHB4IOeahOagh+mimOadoe+8iOmdouadv+acrOadpeWwseWcqOWym+Wklumdou+8iSAqL1xuXHRcdFx0YXBwbHlCb3gocGFuZWwsIGcubm9TdHJldGNoID8ge1xuXHRcdFx0XHR5OiBnLnlPdXRlcixcblx0XHRcdFx0aDogZy5oZWFkSCxcblx0XHRcdFx0cjogUEFORUxfUkFESVVTXG5cdFx0XHR9IDoge1xuXHRcdFx0XHR5OiBnLnksXG5cdFx0XHRcdGg6IGcuYmFuZCxcblx0XHRcdFx0cjogUElMTF9SQURJVVNcblx0XHRcdH0pO1xuXHRcdFx0bGF0ZXIoKCkgPT4ge1xuXHRcdFx0XHRpZiAodG9rZW4gIT09IHN0YXRlLnRva2VuKSByZXR1cm47XG5cdFx0XHRcdHBhbmVsLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblx0XHRcdH0sIE1TX0NMT1NFIC0gNjApO1xuXHRcdFx0bGF0ZXIoKCkgPT4ge1xuXHRcdFx0XHRpZiAodG9rZW4gIT09IHN0YXRlLnRva2VuKSByZXR1cm47XG5cdFx0XHRcdHJlc2V0UGFuZWwocGFuZWwpO1xuXHRcdFx0XHRyZXNldFNsb3QoaXNsYW5kLCB0cmlnZ2VyKTtcblx0XHRcdH0sIE1TX0NMT1NFICsgMjAwKTtcblx0XHR9O1xuXHRcdGNvbnN0IHRvZ2dsZSA9IChlOiBFdmVudCkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGlmIChpc2xhbmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkgY2xvc2UoKTtcblx0XHRcdGVsc2Ugb3BlbigpO1xuXHRcdH07XG5cdFx0dHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlIGFzIEV2ZW50TGlzdGVuZXIsIHsgc2lnbmFsIH0pO1xuXHRcdC8vIOWFs+mXreaMiemSru+8muahjOmdouaCrOa1ruWymyArIOenu+WKqOerr+aKveWxie+8jOS4pOS4qumDveimgee7keS4ilxuXHRcdGNvbnN0IGNsb3NlVGFyZ2V0cyA9IFsuLi5BcnJheS5mcm9tKGlzbGFuZC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYWktY2xvc2VdXCIpKSwgLi4uQXJyYXkuZnJvbShwYW5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYWktY2xvc2VdXCIpKV07XG5cdFx0Y2xvc2VUYXJnZXRzLmZvckVhY2goKGJ0bikgPT4ge1xuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGNsb3NlKCk7XG5cdFx0XHR9LCB7IHNpZ25hbCB9KTtcblx0XHR9KTtcblx0XHQvLyDlpLTpg6jvvIhkYXRhLWFpLWNsb3Nl77yJ5bey5ZyoIGNsb3NlVGFyZ2V0cyDph4znu5HkuoYgY2xpY2vvvJvov5nph4zlj6rooaXplK7nm5jvvJpcblx0XHQvLyDlpLTpg6jmmK8gcm9sZT1cImJ1dHRvblwi77yMRW50ZXIgLyDnqbrmoLwgPSDmlLbotbdcblx0XHRjb25zdCBoZWFkRWwgPSBwYW5lbC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIi5haS1maS1oZWFkXCIpO1xuXHRcdGlmIChoZWFkRWwpIHtcblx0XHRcdGhlYWRFbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5rZXkgIT09IFwiRW50ZXJcIiAmJiBlLmtleSAhPT0gXCIgXCIpIHJldHVybjtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjbG9zZSgpO1xuXHRcdFx0fSwgeyBzaWduYWwgfSk7XG5cdFx0fVxuXHRcdC8vIOeCueWHu+WklumDqOWFs+mXre+8iOmdouadv+iZveeEtuWcqOWQjOS4gOajteWtkOagkemHjO+8jOS9huS7jeeEtuimgeWNleeLrOWIpOaWre+8iVxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgdCA9IGUudGFyZ2V0IGFzIE5vZGU7XG5cdFx0XHRpZiAoaXNsYW5kLmNvbnRhaW5zKHQpIHx8IHBhbmVsLmNvbnRhaW5zKHQpKSByZXR1cm47XG5cdFx0XHRjbG9zZSgpO1xuXHRcdH0sIHsgc2lnbmFsIH0pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIGNsb3NlKCk7XG5cdFx0fSwgeyBzaWduYWwgfSk7XG5cdFx0Ly8g6KeG5Y+j5Y+Y5YyW77ya5byA552A5bCx5pS25o6J44CC57yp5Yiw56e75Yqo56uv5a695bqm5pe25Lmf5b+F6aG75pS277yMXG5cdFx0Ly8g5ZCm5YiZ546755KD5qGG5Lya5YGc5Zyo5pKR5byA54q25oCB77yI56e75Yqo56uv6Z2i5p2/5pys6Lqr5pivIGRpc3BsYXk6bm9uZe+8iVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcblx0XHRcdGlmIChpc2xhbmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkgY2xvc2UoKTtcblx0XHR9LCB7IHNpZ25hbCB9KTtcblx0XHQvLyDlsZXlvIDmnJ/pl7TnlKjmiLfliIfkuobmmI7mmpfkuLvpopjvvJrlspvnmoTnjrvnkoPot5/nnYAgLS1jYXJkLWJnIOWPmOS6hu+8jFxuXHRcdC8vIOiAjOmdouadv+eahOeOu+eSg+aYr+WxleW8gOaXtuOAjOaKhOOAjei/h+adpeeahOWGheiBlOWAvO+8jOS4jeS8muiHquW3sei3n+edgOWPmOOAglxuXHRcdC8vIOazqOaEj+imgeetieWym+eahOi/h+a4oei1sOWujOWGjeaKhO+8muWIh+S4u+mimOaXtuermeeCueS8mue7mSA8aHRtbD4g5oyCXG5cdFx0Ly8gLmlzLXRoZW1lLXRyYW5zaXRpb25pbmfvvIjlhajlsYAgKiDov4fmuKEgMC4zNnPvvInvvIzov4fmuKHpgJTkuK1cblx0XHQvLyBnZXRDb21wdXRlZFN0eWxlIOivu+WIsOeahOaYr+S4remXtOiJsu+8jOaKhOWbnuadpeWwseaYr+iEj+eahOOAglxuXHRcdC8vIOi4qeS4jeWHhui/h+a4oeeahOWHhuehrue7k+adn+eCue+8jOaJgOS7peihpeS4gOasoeeojeaZmueahOWQjOatpeWFnOW6leOAglxuXHRcdGNvbnN0IHRoZW1lV2F0Y2ggPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG5cdFx0XHRpZiAoIWlzbGFuZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSByZXR1cm47XG5cdFx0XHQvLyDliIboo4LmgIHkuI3nlKjmioTlspvvvJrpnaLmnb8v6IO25ZuK55qE546755KD6YO95piv44CM5rS76YWN5pa544CN77yIdmFyKC0tY2FyZC1iZykg562J77yJ77yMXG5cdFx0XHQvLyDliIfkuLvpopjoh6rlt7HlsLHlj5jkuobvvJvmraTml7blspvnmoTnjrvnkoPmmK/mkZjmjonnmoTvvIzmioTlm57mnaXlj43ogIzmmK/pgI/mmI7ohI/lgLxcblx0XHRcdGlmIChzcGxpdE9uKSByZXR1cm47XG5cdFx0XHRbNDMwLCA5MDBdLmZvckVhY2goKG1zKSA9PiBsYXRlcigoKSA9PiB7XG5cdFx0XHRcdGlmIChpc2xhbmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkgc3luY0dsYXNzKGZyYW1lT2YoaXNsYW5kKSwgcGFuZWwpO1xuXHRcdFx0fSwgbXMpKTtcblx0XHR9KTtcblx0XHR0aGVtZVdhdGNoLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlRmlsdGVyOiBbXCJjbGFzc1wiLCBcImRhdGEtdGhlbWVcIl1cblx0XHR9KTtcblx0XHRzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsICgpID0+IHRoZW1lV2F0Y2guZGlzY29ubmVjdCgpKTtcblx0XHQvLyDpnaLmnb/mnKzouqvlsLHlnKjlspvnmoTlrZDmoJHph4zvvIzkuKTmrKHmn6Xor6LkvJrmi7/liLDlkIzkuIDmibnljaHniYcg4oCU4oCUIOWOu+mHje+8jFxuXHRcdC8vIOWQpuWImeavj+W8oOWNoeeJh+iiq+e7keS4pOasoeeCueWHu++8iGVudGVyQnJvd3NlIOi3keS4pOmBjeOAgWZldGNoIOWPkeS4pOasoe+8iVxuXHRcdGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGlzbGFuZC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIltkYXRhLWFpLWl0ZW1dXCIpKSwgLi4uQXJyYXkuZnJvbShwYW5lbC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIltkYXRhLWFpLWl0ZW1dXCIpKV0pKTtcblx0XHQvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHQqIOWym+WGhea1j+iniO+8iOS7hSBQcm9NYXgg5rKJ5bqV5bKb77yJ77ya5qC55YiX6KGo6aG55LiN5pW06aG16Lez6L2s77yMXG5cdFx0KiDpnaLmnb/ljp/lnLDliIfliLDnm67moIfpobXnmoTpk77mjqXmuIXljZXvvJvjgIzigLkg6L+U5Zue44CN5Zue5qC55YiX6KGo77ybXG5cdFx0KiDmuIXljZXmnaHnm67mmK/nnJ8gPGE+77yM54K55LqG5omN6Lez6L2s77yI5bm254Wn5bi45pS26LW36Z2i5p2/77yJ44CCXG5cdFx0KiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0XHRsZXQgYnJvd3NlU2VxID0gMDtcblx0XHQvKiog6Z2i5p2/6auY5bqm5Yqo55S75Yiw55uu5qCHIHB477yI6Z2i5p2/5pivIGFic29sdXRlICsg5Zu65a6aIHB4IOmrmO+8jGhlaWdodCDlj6/ov4fmuKHvvIkgKi9cblx0XHRmdW5jdGlvbiBhbmltYXRlUGFuZWxIZWlnaHQodGFyZ2V0SDogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRzZXREdXJhdGlvbihwYW5lbCwgTVNfRVhQQU5EKTtcblx0XHRcdHBhbmVsLnN0eWxlLmhlaWdodCA9IGAke01hdGgucm91bmQodGFyZ2V0SCl9cHhgO1xuXHRcdH1cblx0XHQvKiog5rWP6KeI5oCB55qE55uu5qCH6auY5bqm77ya6KeG5Y+j55qE5Zub5oiQ5bem5Y+z77yM5LiK6ZmQ5Y+X6KeG5Y+j5L2Z6YeP57qm5p2fICovXG5cdFx0ZnVuY3Rpb24gYnJvd3NlVGFyZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG5cdFx0XHRjb25zdCBnID0gbWVhc3VyZSgpO1xuXHRcdFx0Y29uc3Qgd2FudCA9IE1hdGgubWF4KDI0MCwgTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJIZWlnaHQgKiAuNDIpKTtcblx0XHRcdHJldHVybiBNYXRoLm1pbih3YW50LCBnLm1heEgpO1xuXHRcdH1cblx0XHQvKipcblx0XHQqIOWym+WGhea1j+iniOOAjOatpuijheOAje+8mue7memdouadv+mHjOeahOagueWNoeeJh+aMguS4iiBkYXRhLW5vLXN3dXDjgIJcblx0XHQqXG5cdFx0KiDkuLrku4DkuYjpnZ7ov5nkuYjlgZrkuI3lj6/vvJpzd3VwIOeahOmTvuaOpeaLpuaIquaMguWcqCBkb2N1bWVudCDnmoQqKuaNleiOt+mYtuautSoq77yMXG5cdFx0KiDlroPlj6rmo4Dmn6UgZS5kZWZhdWx0UHJldmVudGVkIOKAlOKAlCDkuovku7bov5jmsqHotbDliLAgPGE+77yM5oiR5Lus5qC55pys5rKh5py65LyaXG5cdFx0KiBwcmV2ZW50RGVmYXVsdO+8jOS6juaYr+Wug+eFp+agt+WPkei1t+ermeWGhei3s+i9rO+8muWImuWxleW8gOeahOa1j+iniOWIl+ihqOi/nuWQjOWvvOiIquWym1xuXHRcdCog5LiA6LW36KKr5o2i5o6J77yIYXN0cm86cGFnZS1sb2FkIOWPiOS8muiuqSBpbml0QXJ0aWNsZUlzbGFuZCDlpI3kvY3pnaLmnb/vvInjgIJcblx0XHQqIOaMguS4iiBkYXRhLW5vLXN3dXAg5ZCOIHN3dXAg55u05o6l5pS+6L+H6L+Z5Liq6ZO+5o6l77yM5a+86Iiq6Ze46Zeo5bCx5Y+q5Ymp5oiR5Lus55qEXG5cdFx0KiBwcmV2ZW50RGVmYXVsdO+8m+aUtui1t+aXtu+8iHJlc2V0UGFuZWzvvInnq4vliLvmkZjmjonvvIzmma7pgJrngrnlh7vnhafml6fotbAgc3d1cCDlubPmu5HliIfpobXjgIJcblx0XHQqL1xuXHRcdGZ1bmN0aW9uIGFybUJyb3dzZSgpOiB2b2lkIHtcblx0XHRcdGlmICghaXNEb2NrQm90dG9tKCkpIHJldHVybjtcblx0XHRcdHBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiLmFpLWZpLWNhcmRcIikuZm9yRWFjaCgoYykgPT4ge1xuXHRcdFx0XHRjLnNldEF0dHJpYnV0ZShcImRhdGEtbm8tc3d1cFwiLCBcIlwiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBleGl0QnJvd3NlKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgYnJvd3NlID0gcGFuZWwucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCJbZGF0YS1haS1icm93c2VdXCIpO1xuXHRcdFx0Y29uc3QgYm9keUVsID0gcGFuZWwucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIuYWktZmktYm9keVwiKTtcblx0XHRcdGlmICghYnJvd3NlIHx8IGJyb3dzZS5oaWRkZW4pIHJldHVybjtcblx0XHRcdGJyb3dzZVNlcSsrO1xuXHRcdFx0YnJvd3NlLmhpZGRlbiA9IHRydWU7XG5cdFx0XHRpZiAoYm9keUVsKSBib2R5RWwuaGlkZGVuID0gZmFsc2U7XG5cdFx0XHQvLyDpq5jluqblm57liLDmoLnliJfooajnmoToh6rnhLbpq5jluqbvvIhtZWFzdXJlIOS8muaMieW9k+WJjSBET00g6YeP77yJXG5cdFx0XHRhbmltYXRlUGFuZWxIZWlnaHQobWVhc3VyZUV4cGFuZGVkSGVpZ2h0KG1lYXN1cmUoKSkpO1xuXHRcdH1cblx0XHQvKiog6L+b5YWl5rWP6KeI5oCB44CC6Z2i5p2/6L+Y5rKh5bGV5byA5a6M77yI5YiG6KOC5Yqo55S75Lit77yJ5pe26L+U5ZueIGZhbHNl77yM6YCA5Zue5pmu6YCa6Lez6L2s44CCICovXG5cdFx0YXN5bmMgZnVuY3Rpb24gZW50ZXJCcm93c2UoY2FyZDogSFRNTEFuY2hvckVsZW1lbnQpOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0XHRcdGNvbnN0IGJyb3dzZSA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiW2RhdGEtYWktYnJvd3NlXVwiKTtcblx0XHRcdGNvbnN0IGJvZHlFbCA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLmFpLWZpLWJvZHlcIik7XG5cdFx0XHRjb25zdCBsaXN0ID0gcGFuZWwucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCJbZGF0YS1haS1icm93c2UtbGlzdF1cIik7XG5cdFx0XHRjb25zdCBjcnVtYiA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiW2RhdGEtYWktYnJvd3NlLXRpdGxlXVwiKTtcblx0XHRcdGlmICghYnJvd3NlIHx8ICFsaXN0KSByZXR1cm4gZmFsc2U7XG5cdFx0XHRpZiAoIXBhbmVsLmNsYXNzTGlzdC5jb250YWlucyhcImlzLWV4cGFuZGVkXCIpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRjb25zdCB0YXJnZXRVcmwgPSBjYXJkLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCIvXCI7XG5cdFx0XHRjb25zdCB0aXRsZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5haS1maS1uYW1lXCIpPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwi5paH56ugXCI7XG5cdFx0XHRjb25zdCBzZXEgPSArK2Jyb3dzZVNlcTtcblx0XHRcdGlmIChib2R5RWwpIGJvZHlFbC5oaWRkZW4gPSB0cnVlO1xuXHRcdFx0YnJvd3NlLmhpZGRlbiA9IGZhbHNlO1xuXHRcdFx0aWYgKGNydW1iKSBjcnVtYi50ZXh0Q29udGVudCA9IHRpdGxlO1xuXHRcdFx0bGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0Y29uc3QgbG9hZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRsb2FkaW5nLmNsYXNzTmFtZSA9IFwiYWktZmktYnJvd3NlLWxvYWRpbmdcIjtcblx0XHRcdGxvYWRpbmcudGV4dENvbnRlbnQgPSBcIuato+WcqOivu+WPluKAplwiO1xuXHRcdFx0bGlzdC5hcHBlbmRDaGlsZChsb2FkaW5nKTtcblx0XHRcdGFuaW1hdGVQYW5lbEhlaWdodChicm93c2VUYXJnZXRIZWlnaHQoKSk7XG5cdFx0XHRsZXQgbGlua3M6IHtcblx0XHRcdFx0aHJlZjogc3RyaW5nO1xuXHRcdFx0XHR0ZXh0OiBzdHJpbmc7XG5cdFx0XHR9W10gPSBbXTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxpbmtzID0gYXdhaXQgZmV0Y2hTZWN0aW9uTGlua3ModGFyZ2V0VXJsKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvLyDmi4nlj5blpLHotKXvvJrpgIDlm57mlbTpobXot7PovazvvIzliKvmiornlKjmiLflm7DlnKjpnaLmnb/ph4xcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IHRhcmdldFVybDtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VxICE9PSBicm93c2VTZXEpIHJldHVybiB0cnVlO1xuXHRcdFx0bGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0aWYgKCFsaW5rcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRlbXB0eS5jbGFzc05hbWUgPSBcImFpLWZpLWJyb3dzZS1lbXB0eVwiO1xuXHRcdFx0XHRlbXB0eS50ZXh0Q29udGVudCA9IFwi6L+Z5LiA6aG15rKh5pyJ5Y+v5YiX55qE6ZO+5o6lXCI7XG5cdFx0XHRcdGxpc3QuYXBwZW5kQ2hpbGQoZW1wdHkpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGxpbmtzLmZvckVhY2goKGwsIGkpID0+IHtcblx0XHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRcdFx0XHRhLmNsYXNzTmFtZSA9IFwiYWktZmktYnJvd3NlLXJvd1wiO1xuXHRcdFx0XHRhLmhyZWYgPSBsLmhyZWY7XG5cdFx0XHRcdGEuc3R5bGUuc2V0UHJvcGVydHkoXCItLWFpLXJcIiwgU3RyaW5nKE1hdGgubWluKGksIDEyKSkpO1xuXHRcdFx0XHRjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdFx0ZG90LmNsYXNzTmFtZSA9IFwiYWktZmktYnJvd3NlLWRvdFwiO1xuXHRcdFx0XHRjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRcdFx0dHh0LmNsYXNzTmFtZSA9IFwiYWktZmktYnJvd3NlLXRleHRcIjtcblx0XHRcdFx0dHh0LnRleHRDb250ZW50ID0gbC50ZXh0O1xuXHRcdFx0XHRjb25zdCBnbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuXHRcdFx0XHRnby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFpLWZpLWJyb3dzZS1nb1wiKTtcblx0XHRcdFx0Z28uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcblx0XHRcdFx0Z28uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxNFwiKTtcblx0XHRcdFx0Z28uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTRcIik7XG5cdFx0XHRcdGdvLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcblx0XHRcdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcblx0XHRcdFx0cC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTkgNmw2IDYtNiA2XCIpO1xuXHRcdFx0XHRwLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuXHRcdFx0XHRwLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKTtcblx0XHRcdFx0cC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIyLjJcIik7XG5cdFx0XHRcdHAuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcblx0XHRcdFx0cC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcblx0XHRcdFx0Z28uYXBwZW5kQ2hpbGQocCk7XG5cdFx0XHRcdGEuYXBwZW5kKGRvdCwgdHh0LCBnbyk7XG5cdFx0XHRcdGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxhdGVyKGNsb3NlLCA1MCksIHsgc2lnbmFsIH0pO1xuXHRcdFx0XHRsaXN0LmFwcGVuZENoaWxkKGEpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cGFuZWwucXVlcnlTZWxlY3RvcihcIltkYXRhLWFpLWJhY2tdXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRleGl0QnJvd3NlKCk7XG5cdFx0fSwgeyBzaWduYWwgfSk7XG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdFx0Ly8gUHJvTWF4IOayieW6leWym++8mumdouadv+mHjOeahOagueWIl+ihqOmhuSDihpIg5bKb5YaF5rWP6KeI77yM5LiN6Lez6L2s5LiN5YWz6Zeo44CCXG5cdFx0XHRcdC8vIOWIpOaWreW/hemhu+WQjOatpe+8mmVudGVyQnJvd3NlIOaYryBhc3luY++8jOaKiiBQcm9taXNlIOaUviBpZiDph4zmgZLnnJ/jgIJcblx0XHRcdFx0Ly8g6Z2i5p2/6L+Y5Zyo5YiG6KOC5Yqo55S75Lit77yI5pyqIGlzLWV4cGFuZGVk77yJ5bCx5LiN5oum77yM6LWw5pmu6YCa6Lez6L2s44CCXG5cdFx0XHRcdGlmIChpc0RvY2tCb3R0b20oKSAmJiBwYW5lbC5jb250YWlucyhpdGVtKSAmJiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImFpLWZpLWNhcmRcIikgJiYgcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtZXhwYW5kZWRcIikpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZW50ZXJCcm93c2UoaXRlbSBhcyBIVE1MQW5jaG9yRWxlbWVudCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIOWFnOW6le+8muWNoeeJh+WkhOS6juOAjOatpuijheOAjeaAge+8iOW4piBkYXRhLW5vLXN3dXDvvInml7Ygc3d1cCDlt7LmlL7ov4flroPvvIxcblx0XHRcdFx0Ly8g6L+Z6YeM5b+F6aG76Ieq5bex5oqK6Lez6L2s6KGl5LiK77yM5ZCm5YiZ5Lya6YCA5YyW5oiQ5rWP6KeI5Zmo5pW06aG15Yqg6L29XG5cdFx0XHRcdGNvbnN0IGhyZWYgPSAoaXRlbSBhcyBIVE1MQW5jaG9yRWxlbWVudCkuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRcdFx0aWYgKGhyZWYgJiYgaXRlbS5oYXNBdHRyaWJ1dGUoXCJkYXRhLW5vLXN3dXBcIikpIHtcblx0XHRcdFx0XHRjb25zdCBzd3VwID0gKHdpbmRvdyBhcyBhbnkpLnN3dXA7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBzd3VwPy5uYXZpZ2F0ZSA9PT0gXCJmdW5jdGlvblwiKSBzd3VwLm5hdmlnYXRlKGhyZWYpO1xuXHRcdFx0XHRcdGVsc2UgbG9jYXRpb24uaHJlZiA9IGhyZWY7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGF0ZXIoY2xvc2UsIDUwKTtcblx0XHRcdH0sIHsgc2lnbmFsIH0pO1xuXHRcdH0pO1xuXHR9KTtcbn1cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0QXJ0aWNsZUlzbGFuZCk7XG59IGVsc2Uge1xuXHRpbml0QXJ0aWNsZUlzbGFuZCgpO1xufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFzdHJvOnBhZ2UtbG9hZFwiLCBpbml0QXJ0aWNsZUlzbGFuZCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3d1cDpjb250ZW50UmVwbGFjZWRcIiwgaW5pdEFydGljbGVJc2xhbmQpO1xuLy8gc3d1cCDliIfpobXliY3vvJrlvLrliLbmlLbotbfmiYDmnInmlofnq6DlspvvvIjlr7zoiKrlspvnmoTnjrvnkoPmoYbkuI7jgIzmlofnq6DjgI3pgqPkuIDliJfkuIDotbfov5jlm57ljrvvvIlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzd3VwOmJlZm9yZUNvbnRlbnRSZXBsYWNlXCIsICgpID0+IHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCJbZGF0YS1hcnRpY2xlLWlzbGFuZF1cIikuZm9yRWFjaCgoaXNsYW5kKSA9PiB7XG5cdFx0aXNsYW5kLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdGNvbnN0IHRyaWdnZXIgPSBpc2xhbmQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCJbZGF0YS1haS10cmlnZ2VyXVwiKTtcblx0XHR0cmlnZ2VyPy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG5cdFx0Y29uc3QgcGFuZWwgPSBpc2xhbmQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCJbZGF0YS1haS1wYW5lbF1cIik7XG5cdFx0aWYgKHBhbmVsKSByZXNldFBhbmVsKHBhbmVsKTtcblx0XHRyZXNldFNsb3QoaXNsYW5kLCB0cmlnZ2VyKTtcblx0XHRjbGVhckZyYW1lKGZyYW1lT2YoaXNsYW5kKSk7XG5cdH0pO1xufSk7XG4vLyA9PT0g5YWo5bGA5ZON5bqU5byP5o+Q56S65by556qX77yI5LuF56qE5bGP6Kem5Y+R77yMaU9TIOeOu+eSg+mjjuagvO+8iT09PVxubGV0IGhpbnRUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcbmxldCBoaW50QWN0aXZlID0gZmFsc2U7XG5mdW5jdGlvbiBzaG93UmVzcG9uc2l2ZUhpbnQoKSB7XG5cdGlmIChoaW50QWN0aXZlKSByZXR1cm47XG5cdC8vIOajgOa1i+acrOasoemhtemdouWKoOi9veaYr+WQpuaYr+a1j+iniOWZqOWIt+aWsO+8mlxuXHQvLyAtIG5hdmlnYXRpb24gdHlwZSA9PT0gJ3JlbG9hZCcg6KGo56S6IEY1IC8gQ3RybCtSIC8g5rWP6KeI5Zmo5Yi35paw5oyJ6ZKuXG5cdC8vIC0gbmF2aWdhdGlvbiB0eXBlID09PSAnbmF2aWdhdGUnIOihqOekuummluasoeaJk+W8gOaIluWcsOWdgOagj+Wbnui9piAvIOmTvuaOpeaJk+W8gFxuXHQvLyAtIHN3dXAg56uZ5YaF5YiH6aG15LiN5Lya6Kem5Y+RIERPTUNvbnRlbnRMb2FkZWTvvIzmiYDku6XkuI3kvJrph43mlrDlvLnlh7pcblx0bGV0IGlzUmVsb2FkID0gZmFsc2U7XG5cdHRyeSB7XG5cdFx0Y29uc3QgbmF2RW50cmllcyA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpO1xuXHRcdGlmIChuYXZFbnRyaWVzICYmIG5hdkVudHJpZXNbMF0gJiYgbmF2RW50cmllc1swXS50eXBlID09PSBcInJlbG9hZFwiKSB7XG5cdFx0XHRpc1JlbG9hZCA9IHRydWU7XG5cdFx0fVxuXHR9IGNhdGNoIChfZSkge1xuXHRcdC8vIOaXp+a1j+iniOWZqOayoeaciSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBl77ya6YCA5Zue55SoIHBlcmZvcm1hbmNlLm5hdmlnYXRpb25cblx0XHR0cnkge1xuXHRcdFx0aWYgKChwZXJmb3JtYW5jZSBhcyBhbnkpLm5hdmlnYXRpb24gJiYgKHBlcmZvcm1hbmNlIGFzIGFueSkubmF2aWdhdGlvbi50eXBlID09PSAxKSB7XG5cdFx0XHRcdGlzUmVsb2FkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChfZTIpIHt9XG5cdH1cblx0Ly8g5LuF5Zyo5rWP6KeI5Zmo5Yi35pawIC8g6aaW5qyh6L+b5YWl5pe25pi+56S677yb56uZ5YaFIHN3dXAg5YiH6aG15LiN5pi+56S6XG5cdC8vIOeUqCBzZXNzaW9uU3RvcmFnZSDlgZrlhZzlupXvvIjpmLLmraIgc3d1cCDph43mlrDmiafooYwgc2NyaXB0IOaXtuS5n+W8ue+8iVxuXHRpZiAoIWlzUmVsb2FkKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiX19yZXNwb25zaXZlSGludFNob3duXCIpID09PSBcIjFcIikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiX19yZXNwb25zaXZlSGludFNob3duXCIsIFwiMVwiKTtcblx0XHR9IGNhdGNoIChfZSkge1xuXHRcdFx0Ly8gc2Vzc2lvblN0b3JhZ2Ug5LiN5Y+v55So5pe25Zue6YCA5Yiw6aG16Z2i57qn5qCH5b+XXG5cdFx0XHRpZiAoKHdpbmRvdyBhcyBhbnkpLl9fcmVzcG9uc2l2ZUhpbnRTaG93bikgcmV0dXJuO1xuXHRcdFx0KHdpbmRvdyBhcyBhbnkpLl9fcmVzcG9uc2l2ZUhpbnRTaG93biA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdC8vIOa4heeQhuWPr+iDveWtmOWcqOeahOaXpyB0aW1lclxuXHRpZiAoaGludFRpbWVyKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KGhpbnRUaW1lcik7XG5cdFx0aGludFRpbWVyID0gbnVsbDtcblx0fVxuXHRoaW50QWN0aXZlID0gdHJ1ZTtcblx0Ly8g5Yqo5oCB5Yib5bu6IG1vZGFsIOWFg+e0oFxuXHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1vZGFsLmNsYXNzTmFtZSA9IFwiYWktaGludC1tb2RhbFwiO1xuXHRtb2RhbC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZGlhbG9nXCIpO1xuXHRtb2RhbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLW1vZGFsXCIsIFwidHJ1ZVwiKTtcblx0bW9kYWwuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImFpLWhpbnQtYmFja2Ryb3BcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhaS1oaW50LWNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImFpLWhpbnQtaWNvblwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiL2Fzc2V0cy9oaW50LWljb24ucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI5NlwiIGhlaWdodD1cIjk2XCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhaS1oaW50LXRpdGxlXCI+5pu05aW955qE5L2T6aqMPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhaS1oaW50LWRlc2NcIj7lu7rorq7kvb/nlKggMTA4MFAg5qGM6Z2i56uv5rWP6KeI5Zmo6K6/6Zeu5pys6aG16Z2iPGJyPuS7peiOt+W+l+acgOS9s+aYvuekuuaViOaenDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWktaGludC1zdWJcIj7mraTmj5DnpLrlsIblnKggMTAg56eS5ZCO6Ieq5Yqo5raI5aSxPC9kaXY+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWktaGludC1va1wiPuaIkeefpemBk+S6hjwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG5cdGNvbnN0IGRpc21pc3MgPSAoKSA9PiB7XG5cdFx0aWYgKG1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImxlYXZpbmdcIikpIHJldHVybjtcblx0XHRtb2RhbC5jbGFzc0xpc3QuYWRkKFwibGVhdmluZ1wiKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdG1vZGFsLnJlbW92ZSgpO1xuXHRcdFx0aGludEFjdGl2ZSA9IGZhbHNlO1xuXHRcdH0sIDI1MCk7XG5cdH07XG5cdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuYWktaGludC1va1wiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc21pc3MpO1xuXHRtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmFpLWhpbnQtYmFja2Ryb3BcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNtaXNzKTtcblx0Ly8gMTAg56eS6Ieq5Yqo5YWz6ZetXG5cdHNldFRpbWVvdXQoZGlzbWlzcywgMWU0KTtcblx0Ly8g56uL5Y2z5pi+56S6XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0bW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cdH0pO1xufVxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNob3dSZXNwb25zaXZlSGludCk7XG59IGVsc2Uge1xuXHRzaG93UmVzcG9uc2l2ZUhpbnQoKTtcbn0iXX0=