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

// --- UI Logic ---
const expand = (): void => {
	isExpanded = true;
	// 等展开动画差不多完成再聚焦
	setTimeout(() => {
		inputEl?.focus();
	}, 250);
};

const collapse = (): void => {
	isExpanded = false;
	keyword = "";
	lastKeyword = "";
	result = [];
};

const toggle = (e: MouseEvent): void => {
	e.stopPropagation();
	if (isExpanded) {
		collapse();
	} else {
		expand();
	}
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

				if (window.pagefind) {
					const response = await window.pagefind.search(kw);
					searchResults = await Promise.all(
						response.results.map((item) => item.data()),
					);
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
const handleDocumentClick = (): void => {
	if (isExpanded) collapse();
};

// --- Initialization ---
onMount(() => {
		const initializePagefind = () => {
			initialized = true;
			if (keyword) search(keyword);
		};

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
		{#if isExpanded && keyword && (isSearching || result.length > 0 || !isSearching)}
				<div class="dis-results-panel">
					<div class="dis-results overflow-y-auto">
						{#if isSearching}
							<div class="block rounded-lg px-3 py-2 text-50 text-sm">{i18n(I18nKey.searchLoading)}</div>
						{:else if result.length > 0}
							{#each result.slice(0, 5) as item}
								<a
									href={item.url}
									on:click={(e) => handleResultClick(e, item.url)}
									class="block rounded-lg px-3 py-2 hover:bg-(--btn-plain-bg-hover) active:bg-(--btn-plain-bg-active) transition font-bold text-sm"
								>
									{@html item.meta.title}
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
							<div class="block rounded-lg px-3 py-2 text-50 text-sm">
								{!window.pagefind ? "搜索功能需构建后使用 (pnpm build && pnpm preview)" : "未搜索到结果"}
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
