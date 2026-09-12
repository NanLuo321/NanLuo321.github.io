<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { navigateToPage } from "@utils/navigation-utils";
import { onMount } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import { url as formatUrl, getSearchUrl } from "@/utils/url-utils";

/**
 * 导航岛右上角的搜索
 * ============================================================================
 * 索引来自 /api/search-index.json（构建期把所有内容拉平成一份 JSON）：
 * 文章、最新动态/日记、分类、标签、静态页面全都在里面。
 *
 * 检索方式刻意用「子串匹配」而不是 Pagefind 的分词检索：
 *   - 中文单字（「日」「记」「文」「章」「动」「态」）必须能命中；
 *   - 开发环境也要能用（Pagefind 只在 build 之后存在）。
 */

type SearchDocKind = "post" | "dynamic" | "category" | "tag" | "page";

interface SearchDoc {
	kind: SearchDocKind;
	title: string;
	url: string;
	desc?: string;
	meta?: string;
	text?: string;
	date?: number;
}

interface SearchHit {
	title: string;
	url: string;
	kind: SearchDocKind;
	badge: string;
	snippet: string;
}

const KIND_BADGE: Record<SearchDocKind, string> = {
	post: "文章",
	dynamic: "动态",
	category: "分类",
	tag: "标签",
	page: "页面",
};

/** 同一字段的命中权重：标题 > 分类/标签 > 摘要 > 正文 */
const MAX_RESULTS = 6;

// --- State ---
let keyword = $state("");
let hits = $state<SearchHit[]>([]);
let totalHits = $state(0);
let isSearching = $state(false);
let indexFailed = $state(false);
let isExpanded = $state(false);
let inputEl = $state<HTMLInputElement | null>(null);

let docs: SearchDoc[] = [];
let indexPromise: Promise<void> | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | undefined;

// --- Index ---
const loadIndex = (): Promise<void> => {
	if (docs.length > 0) return Promise.resolve();
	if (indexPromise) return indexPromise;
	indexPromise = (async () => {
		try {
			const res = await fetch(formatUrl("/api/search-index.json"));
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			const list = Array.isArray(data) ? data : (data?.docs ?? []);
			docs = Array.isArray(list) ? list : [];
			indexFailed = false;
		} catch (error) {
			console.warn("[island-search] 索引加载失败:", error);
			docs = [];
			indexFailed = true;
		} finally {
			indexPromise = null;
		}
	})();
	return indexPromise;
};

// --- Match helpers ---
const escapeHtml = (text: string): string =>
	text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");

const escapeRegExp = (text: string): string =>
	text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** 把命中的字串包成 <mark>（先转义再高亮，避免 HTML 注入） */
const highlight = (text: string, term: string): string => {
	if (!term) return escapeHtml(text);
	return escapeHtml(text).replace(
		new RegExp(escapeRegExp(escapeHtml(term)), "gi"),
		(matched) => `<mark>${matched}</mark>`,
	);
};

/** 围绕第一个命中位置截一段上下文 */
const buildSnippet = (doc: SearchDoc, term: string, len = 78): string => {
	const source = doc.desc || doc.text || "";
	if (!source) return "";
	const at = source.toLowerCase().indexOf(term);
	if (at < 0) return highlight(source.slice(0, len), "");
	const radius = Math.floor(len / 2);
	const start = Math.max(0, at - radius);
	const end = Math.min(source.length, start + len);
	return (
		(start > 0 ? "… " : "") +
		highlight(source.slice(start, end), term) +
		(end < source.length ? " …" : "")
	);
};

const scoreDoc = (doc: SearchDoc, query: string, terms: string[]): number => {
	const title = (doc.title || "").toLowerCase();
	const meta = (doc.meta || "").toLowerCase();
	const desc = (doc.desc || "").toLowerCase();
	const text = (doc.text || "").toLowerCase();
	const haystack = `${title} ${meta} ${desc} ${text}`;

	// 多词查询按 AND 处理：有一个词没出现就整体不命中
	for (const term of terms) {
		if (!haystack.includes(term)) return 0;
	}

	let score = 0;
	if (title.includes(query)) score += title === query ? 200 : 110;
	if (meta.includes(query)) score += 55;
	if (desc.includes(query)) score += 40;
	if (text.includes(query)) score += 18;

	for (const term of terms) {
		if (title.includes(term)) score += 22;
		if (meta.includes(term)) score += 11;
		if (desc.includes(term)) score += 7;
		if (text.includes(term)) score += 3;
	}

	// 同分时：入口类条目（页面/分类/标签）优先于正文条目
	score += { page: 9, category: 10, tag: 8, post: 5, dynamic: 4 }[doc.kind] ?? 0;
	// 标题本身就是查询词时再抬一手，避免「文章」被别的长标题压掉
	if (doc.kind === "page" && title.length <= query.length + 2) score += 12;
	return score;
};

const search = (raw: string): void => {
	const query = raw.trim().toLowerCase();
	clearTimeout(debounceTimer);
	if (!query) {
		hits = [];
		totalHits = 0;
		return;
	}

	isSearching = true;
	debounceTimer = setTimeout(async () => {
		await loadIndex();
		const terms = query.split(/\s+/).filter(Boolean);
		const scored: Array<{ doc: SearchDoc; score: number }> = [];
		for (const doc of docs) {
			const score = scoreDoc(doc, query, terms);
			if (score > 0) scored.push({ doc, score });
		}
		scored.sort(
			(a, b) => b.score - a.score || (b.doc.date ?? 0) - (a.doc.date ?? 0),
		);

		totalHits = scored.length;
		hits = scored.slice(0, MAX_RESULTS).map(({ doc }) => ({
			title: highlight(doc.title || "", query),
			url: doc.url,
			kind: doc.kind,
			badge: KIND_BADGE[doc.kind] ?? "内容",
			snippet: buildSnippet(doc, query),
		}));
		isSearching = false;
	}, 130);
};

// --- UI Logic ---
const expand = (): void => {
	isExpanded = true;
	// 一开始就预热索引，等用户打完字基本已经就绪
	loadIndex();
	setTimeout(() => {
		inputEl?.focus();
	}, 250);
};

const collapse = (): void => {
	isExpanded = false;
	keyword = "";
	hits = [];
	totalHits = 0;
};

const toggle = (e: MouseEvent): void => {
	e.stopPropagation();
	if (isExpanded) {
		collapse();
	} else {
		expand();
	}
};

const handleResultClick = (event: Event, href: string): void => {
	event.preventDefault();
	collapse();
	navigateToPage(href);
};

const stopPropagation = (e: MouseEvent): void => {
	e.stopPropagation();
};

// --- Keyboard ---
const handleKeydown = (e: KeyboardEvent): void => {
	if (e.key === "Escape") collapse();
	if (e.key === "Enter") {
		// 回车进入搜索页，带上关键词看完整结果
		const href = getSearchUrl(keyword);
		collapse();
		navigateToPage(href);
	}
};

// --- Click outside ---
const handleDocumentClick = (): void => {
	if (isExpanded) collapse();
};

// --- Reactive ---
let lastKeyword = "";
$effect(() => {
	if (keyword !== lastKeyword) {
		lastKeyword = keyword;
		search(keyword);
	}
});

// --- Initialization ---
onMount(() => {
	document.addEventListener("click", handleDocumentClick);
	return () => document.removeEventListener("click", handleDocumentClick);
});
</script>

<div id="dynamic-island-search" class="dis-root" class:open={isExpanded} on:click={stopPropagation}>
	<!-- 搜索触发按钮（图标） -->
	<button
		on:click={toggle}
		aria-label={i18n(I18nKey.search)}
		class="dis-search-btn btn-plain scale-animation rounded-lg active:scale-90 flex items-center justify-center shrink-0"
	>
		<Icon icon="material-symbols:search" class="text-[1.25rem]"></Icon>
	</button>

	<!-- 搜索输入框（展开后显示，横向扩展） -->
	<div class="dis-input-container">
		<input
			bind:this={inputEl}
			bind:value={keyword}
			on:keydown={handleKeydown}
			placeholder={i18n(I18nKey.search)}
			class="dis-input"
		/>
		<button
			on:click={toggle}
			aria-label="Close"
			class="dis-close-btn btn-plain rounded-lg flex items-center justify-center text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70 transition shrink-0"
		>
			<Icon icon="material-symbols:close" class="text-[1rem]"></Icon>
		</button>
	</div>

	<!-- 搜索结果下拉面板 -->
	{#if isExpanded && keyword.trim()}
		<div class="dis-results-panel">
			<div class="dis-results overflow-y-auto">
				{#if isSearching}
					<div class="dis-empty">{i18n(I18nKey.searchLoading)}</div>
				{:else if hits.length > 0}
					{#each hits as item (item.url + item.title)}
						<a
							href={item.url}
							on:click={(e) => handleResultClick(e, item.url)}
							class="dis-item"
						>
							<div class="dis-item-head">
								<span class="dis-item-title">{@html item.title}</span>
								<span class="dis-item-badge">{item.badge}</span>
							</div>
							{#if item.snippet}
								<div class="dis-item-snippet">{@html item.snippet}</div>
							{/if}
						</a>
					{/each}
					{#if totalHits > MAX_RESULTS}
						<a
							href={getSearchUrl(keyword)}
							on:click={(e) => handleResultClick(e, getSearchUrl(keyword))}
							class="dis-more"
						>
							{i18n(I18nKey.searchViewMore).replace('{count}', (totalHits - MAX_RESULTS).toString())}
						</a>
					{/if}
				{:else}
					<div class="dis-empty">
						{indexFailed ? "搜索索引加载失败，请刷新后重试" : i18n(I18nKey.searchNoResults)}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
.dis-root {
	position: relative;
	display: flex;
	align-items: center;
	height: 36px;
}

/* 搜索图标按钮 - 收起态 */
.dis-search-btn {
	width: 36px;
	height: 36px;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 2;
	transition: opacity 0.2s ease;
}

.dis-root.open .dis-search-btn {
	opacity: 0;
	pointer-events: none;
}

/* 输入框容器 - 横向展开 */
.dis-input-container {
	display: flex;
	align-items: center;
	height: 36px;
	width: 36px;
	padding: 0;
	border-radius: 9999px;
	background: rgba(0, 0, 0, 0.04);
	border: 1px solid rgba(0, 0, 0, 0.06);
	overflow: hidden;
	opacity: 0;
	transition:
		width 0.35s cubic-bezier(0.32, 0.72, 0, 1),
		opacity 0.2s ease,
		padding 0.2s ease;
	pointer-events: none;
	gap: 0;
}

:global(.dark) .dis-input-container {
	background: rgba(255, 255, 255, 0.06);
	border-color: rgba(255, 255, 255, 0.08);
}

.dis-root.open .dis-input-container {
	width: 240px;
	opacity: 1;
	pointer-events: auto;
	padding: 0 0.5rem 0 0.75rem;
	gap: 0.35rem;
}

@media (min-width: 768px) {
	.dis-root.open .dis-input-container {
		width: 300px;
	}
}

/* 输入框 */
.dis-input {
	flex: 1;
	min-width: 0;
	height: 100%;
	background: transparent;
	border: none;
	outline: none;
	font-size: 0.875rem;
	color: rgba(0, 0, 0, 0.7);
	caret-color: var(--primary, #ff6b6b);
	opacity: 0;
	transition: opacity 0.15s ease 0.1s;
}

:global(.dark) .dis-input {
	color: rgba(255, 255, 255, 0.7);
	caret-color: var(--primary, #ff6b6b);
}

.dis-root.open .dis-input {
	opacity: 1;
}

.dis-input::placeholder {
	color: rgba(0, 0, 0, 0.4);
}

:global(.dark) .dis-input::placeholder {
	color: rgba(255, 255, 255, 0.4);
}

/* 关闭按钮 */
.dis-close-btn {
	width: 28px;
	height: 28px;
	flex-shrink: 0;
	opacity: 0;
	transition: opacity 0.15s ease 0.15s;
}

.dis-root.open .dis-close-btn {
	opacity: 1;
}

/* 搜索结果下拉面板 */
.dis-results-panel {
	position: absolute;
	top: calc(100% + 0.5rem);
	right: 0;
	width: 320px;
	max-width: calc(100vw - 2rem);
	z-index: 60;

	background-color: rgba(255, 255, 255, 0.75);
	backdrop-filter: blur(24px) saturate(180%);
	-webkit-backdrop-filter: blur(24px) saturate(180%);
	border: 1px solid rgba(255, 255, 255, 0.35);
	border-radius: 1rem;
	box-shadow:
		0 8px 32px rgba(0, 0, 0, 0.12),
		0 2px 8px rgba(0, 0, 0, 0.06),
		inset 0 1px 0 rgba(255, 255, 255, 0.5);

	animation: dis-results-in 0.25s cubic-bezier(0.32, 0.72, 0, 1);
	transform-origin: top right;
}

@keyframes dis-results-in {
	from {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}
	to {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
}

:global(.dark) .dis-results-panel {
	background-color: rgba(30, 30, 35, 0.7);
	border: 1px solid rgba(255, 255, 255, 0.12);
	box-shadow:
		0 8px 32px rgba(0, 0, 0, 0.4),
		0 2px 8px rgba(0, 0, 0, 0.2),
		inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.dis-results {
	max-height: 50vh;
	padding: 0.35rem;
}

/* 结果条目 */
.dis-item {
	display: block;
	padding: 0.4rem 0.6rem;
	border-radius: 0.65rem;
	text-decoration: none;
	transition: background 0.15s ease;
}

.dis-item:hover {
	background: var(--btn-plain-bg-hover, rgba(0, 0, 0, 0.05));
}

.dis-item-head {
	display: flex;
	align-items: center;
	gap: 0.4rem;
}

.dis-item-title {
	flex: 1;
	min-width: 0;
	font-size: 0.8125rem;
	font-weight: 700;
	color: rgba(0, 0, 0, 0.86);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

:global(.dark) .dis-item-title {
	color: rgba(255, 255, 255, 0.9);
}

.dis-item-badge {
	flex: none;
	padding: 0.05rem 0.3rem;
	border-radius: 9999px;
	font-size: 0.625rem;
	font-weight: 600;
	line-height: 1.35;
	color: var(--primary, #ff6b6b);
	background: color-mix(in oklch, var(--primary, #ff6b6b) 14%, transparent);
}

.dis-item-snippet {
	margin-top: 0.1rem;
	font-size: 0.6875rem;
	line-height: 1.4;
	color: rgba(0, 0, 0, 0.5);
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

:global(.dark) .dis-item-snippet {
	color: rgba(255, 255, 255, 0.5);
}

.dis-item-snippet :global(mark) {
	background: color-mix(in oklch, var(--primary, #ff6b6b) 22%, transparent);
	color: inherit;
	border-radius: 3px;
	padding: 0 1px;
}

.dis-more {
	display: block;
	margin-top: 0.15rem;
	padding: 0.45rem 0.6rem;
	border-radius: 0.65rem;
	text-align: center;
	font-size: 0.75rem;
	font-weight: 700;
	color: var(--primary, #ff6b6b);
	text-decoration: none;
	transition: background 0.15s ease;
}

.dis-more:hover {
	background: var(--btn-plain-bg-hover, rgba(0, 0, 0, 0.05));
}

.dis-empty {
	padding: 0.5rem 0.6rem;
	font-size: 0.75rem;
	color: rgba(0, 0, 0, 0.45);
}

:global(.dark) .dis-empty {
	color: rgba(255, 255, 255, 0.45);
}

.dis-results::-webkit-scrollbar {
	width: 4px;
}
.dis-results::-webkit-scrollbar-track {
	background: transparent;
}
.dis-results::-webkit-scrollbar-thumb {
	background: rgba(128, 128, 128, 0.3);
	border-radius: 9999px;
}

/* 小屏幕适配 */
@media (max-width: 640px) {
	.dis-root.open .dis-input-container {
		width: 180px;
	}

	.dis-results-panel {
		width: calc(100vw - 2rem);
		right: -0.5rem;
	}
}
</style>
