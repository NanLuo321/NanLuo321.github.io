<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { navigateToPage } from "@utils/navigation-utils";
import { onMount } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import {
	loadSearchIndex,
	MAX_RESULTS,
	runSearch,
	searchIndexFailed,
	type SearchHit,
} from "@/utils/island-search";
import { getSearchUrl } from "@/utils/url-utils";

/**
 * 导航岛右上角的搜索
 * ============================================================================
 * 检索内核（索引 / 打分 / 高亮 / 摘要）在 @/utils/island-search ——
 * 屏幕上方那枚 TopSearch 用的是同一份，别在这儿再抄一遍。
 *
 * ⚠ ProMax 桌面端：搜索**不再在岛里展开**。点这枚按钮会把活交给顶部的
 *   TopSearch，让搜索胶囊从岛上「飞」到屏幕上方再展开（岛身纹丝不动）。
 *   原因见 TopSearch.svelte 顶部那段注释。
 */

/** ProMax 桌面端：搜索搬去了屏幕上方（岛身保持原样，只当一枚启动器） */
const searchLivesAtTop = (): boolean =>
	typeof document !== "undefined" &&
	document.body.classList.contains("site-promax") &&
	window.matchMedia("(min-width: 768px)").matches;

// --- State ---
let keyword = $state("");
let hits = $state<SearchHit[]>([]);
let totalHits = $state(0);
let isSearching = $state(false);
let indexFailed = $state(false);
let isExpanded = $state(false);
let inputEl = $state<HTMLInputElement | null>(null);

let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let indexWarmed = false;

/** 预热索引：展开的那一刻就拉，等用户打完字基本已经就绪 */
const warmIndex = (): void => {
	if (indexWarmed) return;
	indexWarmed = true;
	loadSearchIndex();
};

const search = (raw: string): void => {
	clearTimeout(debounceTimer);
	if (!raw.trim()) {
		hits = [];
		totalHits = 0;
		return;
	}

	isSearching = true;
	debounceTimer = setTimeout(async () => {
		const out = await runSearch(raw);
		hits = out.hits;
		totalHits = out.total;
		indexFailed = searchIndexFailed();
		isSearching = false;
	}, 130);
};

// --- UI Logic ---
const expand = (): void => {
	isExpanded = true;
	// 一开始就预热索引，等用户打完字基本已经就绪
	warmIndex();
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

/**
 * 点岛里那枚放大镜：
 *   · ProMax 桌面端 → 交给屏幕顶部的 TopSearch（胶囊从岛上飞到屏幕上方），
 *     岛内那套横向展开**一次都不再用** —— 这是用户的要求，也是岛不拉伸的前提。
 *   · 其它版本 / 窄屏 → 老样子在岛内横向展开。
 */
const toggle = (e: MouseEvent): void => {
	e.stopPropagation();
	if (searchLivesAtTop()) {
		const api = (
			window as unknown as {
				__topSearch?: {
					open: (o?: { from?: Element | null }) => void;
					close: () => void;
				};
			}
		).__topSearch;
		if (api) {
			if (isExpanded) collapse();
			// 把入口按钮本身递过去当「起飞点」，胶囊就从这枚图标里长出去
			api.open({ from: e.currentTarget as Element | null });
			return;
		}
		// 顶部那套还没挂上（理论不会：它随布局一起 hydrate）→ 退回岛内展开
	}
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

/* ProMax：这块不再是一枚「发白的实心药丸」，而是岛面上开的一扇玻璃窗 ——
   底色换成青蓝玻璃那套，交给 LiquidGlass 引擎上折射（.dis-input-container 预设，
   nest 打开：它本来就住在已上玻璃的导航岛里）。
   起因：原来那层 rgba(0,0,0,0.04) 太接近全透，透出来的是岛里被磨过的亮壁纸，
   于是整块读成白的（用户原话「点一下搜索也变白」）。 */
:global(body.site-promax) .dis-input-container {
	background: linear-gradient(
		135deg,
		rgba(186, 230, 253, 0.46) 0%,
		rgba(255, 255, 255, 0.26) 50%,
		rgba(186, 230, 253, 0.46) 100%
	);
	border-color: rgba(125, 211, 252, 0.52);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

:global(body.site-promax.dark) .dis-input-container,
:global(.dark body.site-promax) .dis-input-container {
	background: linear-gradient(
		135deg,
		rgba(56, 189, 248, 0.34) 0%,
		rgba(125, 211, 252, 0.18) 50%,
		rgba(56, 189, 248, 0.34) 100%
	);
	border-color: rgba(125, 211, 252, 0.44);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14);
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

/* ProMax 版（导航岛沉在屏幕底部）：结果面板改向上弹出，动画也跟着从下往上 */
@media (min-width: 1024px) {
	:global(body.site-promax) .dis-results-panel {
		top: auto;
		bottom: calc(100% + 0.5rem);
		transform-origin: bottom right;
		animation: dis-results-in-up 0.25s cubic-bezier(0.32, 0.72, 0, 1);
	}
}

@keyframes dis-results-in-up {
	from {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}
	to {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
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
