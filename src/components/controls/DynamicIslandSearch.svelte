<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { navigateToPage } from "@utils/navigation-utils";
import { onMount } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import type { SearchResult } from "@/global";
import { url as formatUrl, getSearchUrl } from "@/utils/url-utils";

// --- State ---
let keyword = $state("");
let result = $state<SearchResult[]>([]);
let isSearching = $state(false);
let initialized = false;
let debounceTimer: ReturnType<typeof setTimeout>;
let isExpanded = $state(false);
let inputEl = $state<HTMLInputElement | null>(null);

// --- Mocks for Dev Mode ---
const fakeResult: SearchResult[] = [
	{
		url: formatUrl("/"),
		meta: { title: "This Is a Fake Search Result" },
		excerpt:
			"Because Pagefind cannot work in the <mark>dev</mark> environment.",
	},
	{
		url: formatUrl("/"),
		meta: { title: "If You Want to Test the Search" },
		excerpt: "Try running <mark>npm build && npm preview</mark> instead.",
	},
];

// --- UI Logic ---
const expand = (): void => {
	isExpanded = true;
	requestAnimationFrame(() => {
		setTimeout(() => inputEl?.focus(), 120);
	});
};

const collapse = (): void => {
	isExpanded = false;
	keyword = "";
	lastKeyword = "";
	result = [];
};

const toggle = (e: MouseEvent): void => {
	e.stopPropagation();
	if (isExpanded) collapse();
	else expand();
};

const handleResultClick = (event: Event, url: string): void => {
	event.preventDefault();
	collapse();
	navigateToPage(url);
};

const stopPropagation = (e: MouseEvent): void => {
	e.stopPropagation();
};

// --- Core Search Logic ---
const search = async (kw: string): Promise<void> => {
	if (!kw) {
		result = [];
		return;
	}
	if (!initialized) return;

	isSearching = true;

	clearTimeout(debounceTimer);
	debounceTimer = setTimeout(async () => {
		try {
			let searchResults: SearchResult[] = [];

			if (import.meta.env.PROD && window.pagefind) {
				const response = await window.pagefind.search(kw);
				searchResults = await Promise.all(
					response.results.map((item) => item.data()),
				);
			} else if (import.meta.env.DEV) {
				searchResults = fakeResult;
			}

			result = searchResults;
		} catch (error) {
			console.error("Search error:", error);
			result = [];
		} finally {
			isSearching = false;
		}
	}, 300);
};

// --- Keyboard ---
const handleKeydown = (e: KeyboardEvent): void => {
	if (e.key === "Escape") collapse();
};

// --- Click outside ---
const handleDocumentClick = (e: MouseEvent): void => {
	if (!isExpanded) return;
	const container = document.getElementById("dynamic-island-search");
	if (container && !container.contains(e.target as Node)) {
		collapse();
	}
};

// --- Initialization ---
onMount(() => {
	const initializePagefind = () => {
		initialized = true;
		if (keyword) search(keyword);
	};

	if (import.meta.env.DEV) {
		initializePagefind();
	} else {
		if (window.pagefind) {
			initializePagefind();
		} else {
			document.addEventListener("pagefindready", initializePagefind, {
				once: true,
			});
			document.addEventListener("pagefindloaderror", initializePagefind, {
				once: true,
			});
		}
	}

	document.addEventListener("click", handleDocumentClick);
	return () => document.removeEventListener("click", handleDocumentClick);
});

// --- Reactive ---
let lastKeyword = "";
$effect(() => {
	if (initialized && keyword !== lastKeyword) {
		lastKeyword = keyword;
		search(keyword);
	}
});
</script>

<div id="dynamic-island-search" class="dis-root">
	<!-- 搜索图标按钮（始终显示） -->
	<button
		on:click={toggle}
		aria-label={i18n(I18nKey.search)}
		class="dis-trigger btn-plain scale-animation rounded-lg w-9 h-9 md:w-11 md:h-11 active:scale-90 flex items-center justify-center shrink-0 relative z-10"
	>
		<Icon icon="material-symbols:search" class="text-[1.25rem]"></Icon>
	</button>

	<!-- 搜索面板 - 点击后从图标弹性展开 -->
	<div class="dis-panel" class:open={isExpanded} class:has-results={isExpanded && keyword && (isSearching || result.length > 0 || (!isSearching && result.length === 0))} on:click={stopPropagation}>
		<div class="dis-panel-content">
			<!-- 搜索输入框 - 胶囊形与导航栏一致 -->
			<div class="dis-input-row flex items-center h-11 rounded-full border border-black/8 dark:border-white/10">
				<Icon icon="material-symbols:search" class="dis-input-icon text-[1.15rem] pointer-events-none ml-3 text-black/40 dark:text-white/40"></Icon>
				<input
					bind:this={inputEl}
					bind:value={keyword}
					on:keydown={handleKeydown}
					placeholder={i18n(I18nKey.search)}
					class="bg-transparent outline-none text-sm text-black/70 dark:text-white/70 w-full px-2 h-full"
				/>
				<button
					on:click={collapse}
					aria-label="Close"
					class="btn-plain rounded-lg w-8 h-8 flex items-center justify-center mr-1 text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70 transition shrink-0"
				>
					<Icon icon="material-symbols:close" class="text-[1.1rem]"></Icon>
				</button>
			</div>

			<!-- 搜索结果 -->
			{#if keyword && (isSearching || result.length > 0 || (!isSearching && result.length === 0))}
				<div class="dis-results mt-2 overflow-y-auto">
					{#if isSearching}
						<div class="block rounded-lg px-3 py-2 text-50 text-sm">{i18n(I18nKey.searchLoading)}</div>
					{:else if result.length > 0}
						{#each result.slice(0, 5) as item}
							<a
								href={item.url}
								on:click={(e) => handleResultClick(e, item.url)}
								class="group block rounded-lg px-3 py-2 hover:bg-(--btn-plain-bg-hover) active:bg-(--btn-plain-bg-active) transition"
							>
								<div class="text-90 inline-flex font-bold group-hover:text-(--primary) text-sm">
									{@html item.meta.title}
									<Icon icon="fa7-solid:chevron-right" class="text-[0.7rem] translate-x-1 my-auto text-(--primary)"></Icon>
								</div>
								{#if item.excerpt.includes('<mark>')}
									<div class="text-xs text-50 mt-1">{@html item.excerpt}</div>
								{/if}
							</a>
						{/each}
						{#if result.length > 5}
							<a
								href={getSearchUrl(keyword)}
								on:click={(e) => handleResultClick(e, getSearchUrl(keyword))}
								class="block rounded-lg px-3 py-2 hover:bg-(--btn-plain-bg-hover) text-(--primary) font-bold text-center text-sm transition"
							>
								{i18n(I18nKey.searchViewMore).replace('{count}', (result.length - 5).toString())}
							</a>
						{/if}
					{:else}
						<div class="block rounded-lg px-3 py-2 text-50 text-sm">{i18n(I18nKey.searchNoResults)}</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
.dis-root {
	position: relative;
	display: flex;
	align-items: center;
}

/* ====== 胶囊形搜索面板 - 从图标弹性展开 ====== */
.dis-panel {
	position: absolute;
	top: calc(100% + 0.5rem);
	left: 50%;
	z-index: 60;
	overflow: hidden;

	/* 与导航栏一致的玻璃质感 */
	background-color: color-mix(in oklch, var(--card-bg) 88%, transparent);
	border: 1px solid color-mix(in oklch, var(--card-border, #e5e5e5) 30%, transparent);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);

	/* 胶囊形圆角 - 与导航栏一致 */
	border-radius: 9999px;

	/* 收起态：缩小到图标大小，不可见 */
	width: 320px;
	max-width: calc(100vw - 2rem);
	opacity: 0;
	transform: translateX(-50%) scale(0.1);
	transform-origin: top center;
	pointer-events: none;

	/* 弹性展开动画 */
	transition:
		opacity 0.2s ease-out,
		transform 0.4s cubic-bezier(0.32, 0.72, 0, 1),
		border-radius 0.3s cubic-bezier(0.32, 0.72, 0, 1);
}

/* 展开态：弹性放大到完整尺寸 */
.dis-panel.open {
	opacity: 1;
	transform: translateX(-50%) scale(1);
	pointer-events: auto;
}

/* 有搜索结果时切换为圆角矩形 */
.dis-panel.open.has-results {
	border-radius: 0.75rem;
}

/* 面板内容容器 */
.dis-panel-content {
	width: 100%;
	padding: 0.5rem;
}

/* 暗色模式 - 与导航栏暗色阴影一致 */
:global(.dark) .dis-panel {
	box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
}

/* 小屏幕：右对齐避免溢出屏幕 */
@media (max-width: 640px) {
	.dis-panel {
		left: auto;
		right: 0;
		transform: scale(0.1);
		transform-origin: top right;
	}

	.dis-panel.open {
		transform: scale(1);
	}
}

/* 输入框行 */
.dis-input-row {
	background: rgba(0, 0, 0, 0.04);
}

:global(.dark) .dis-input-row {
	background: rgba(255, 255, 255, 0.06);
}

/* 搜索结果 */
.dis-results {
	max-height: 50vh;
}

input:focus {
	outline: 0;
}

/* 滚动条 */
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
</style>
