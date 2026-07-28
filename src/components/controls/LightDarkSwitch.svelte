<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { onMount } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import { DARK_MODE, LIGHT_MODE, SYSTEM_MODE } from "@/constants/constants";
import type { LIGHT_DARK_MODE } from "@/types/config.ts";
import {
	applyThemeToDocument,
	getStoredTheme,
	setTheme,
} from "@/utils/setting-utils";

interface SwupHooks {
	on(event: string, callback: () => void): void;
}

interface SwupInstance {
	hooks?: SwupHooks;
}

type WindowWithSwup = Window & { swup?: SwupInstance };

let mode: LIGHT_DARK_MODE = $state(LIGHT_MODE);
let displayedMode: LIGHT_DARK_MODE = $state(LIGHT_MODE);
let expanded = $state(false);

function switchScheme(newMode: LIGHT_DARK_MODE, e: MouseEvent) {
	e.stopPropagation();
	mode = newMode;
	setTheme(newMode);
	updateDisplayedMode();
	expanded = false;
}

function toggleExpanded(e: MouseEvent) {
	e.stopPropagation();
	expanded = !expanded;
}

// 当前模式对应的图标
function getCurrentIcon(): string {
	if (mode === LIGHT_MODE) return "material-symbols:wb-sunny-outline-rounded";
	if (mode === DARK_MODE) return "material-symbols:dark-mode-outline-rounded";
	return "material-symbols:brightness-auto-outline-rounded";
}

// 计算滑块位置
function getSliderStyle(): string {
	const index = mode === LIGHT_MODE ? 0 : mode === SYSTEM_MODE ? 1 : 2;
	return `transform: translateX(${index * 100}%);`;
}

function updateDisplayedMode() {
	if (mode === SYSTEM_MODE) {
		const isSystemDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		displayedMode = isSystemDark ? DARK_MODE : LIGHT_MODE;
	} else {
		displayedMode = mode;
	}
}

onMount(() => {
	const storedTheme = getStoredTheme();
	mode = storedTheme;
	updateDisplayedMode();

	if (storedTheme !== SYSTEM_MODE) {
		const currentTheme = document.documentElement.classList.contains("dark")
			? DARK_MODE
			: LIGHT_MODE;
		if (storedTheme !== currentTheme) {
			applyThemeToDocument(storedTheme);
		}
	}

	if (storedTheme === SYSTEM_MODE) {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleSystemChange = () => {
			updateDisplayedMode();
		};
		mediaQuery.addEventListener("change", handleSystemChange);
	}

	const handleContentReplace = () => {
		const newTheme = getStoredTheme();
		mode = newTheme;
		updateDisplayedMode();
		expanded = false;
	};

	const win = window as WindowWithSwup;
	if (win.swup?.hooks) {
		win.swup.hooks.on("content:replace", handleContentReplace);
	} else {
		document.addEventListener("swup:enable", () => {
			const w = window as WindowWithSwup;
			if (w.swup?.hooks) {
				w.swup.hooks.on("content:replace", handleContentReplace);
			}
		});
	}

	const handleThemeChange = () => {
		if (mode !== SYSTEM_MODE) {
			const newTheme = getStoredTheme();
			mode = newTheme;
			updateDisplayedMode();
		} else {
			updateDisplayedMode();
		}
	};

	window.addEventListener("theme-change", handleThemeChange);

	// 点击外部收起
	const handleOutsideClick = (e: MouseEvent) => {
		const wrapper = document.getElementById("scheme-switch-wrapper");
		if (wrapper && expanded && !wrapper.contains(e.target as Node)) {
			expanded = false;
		}
	};
	document.addEventListener("click", handleOutsideClick);

	return () => {
		window.removeEventListener("theme-change", handleThemeChange);
		document.removeEventListener("click", handleOutsideClick);
	};
});
</script>

<div class="relative z-50" id="scheme-switch-wrapper">
    <div class="theme-segmented rounded-full h-9 md:h-11 flex items-center relative overflow-hidden select-none transition-all duration-300 ease-out"
         class:expanded
         role="group" aria-label="Light/Dark Mode">

        {#if expanded}
            <!-- 展开状态：显示三个选项 + 滑块 -->
            <div class="theme-slider-wrap absolute top-0.5 bottom-0.5 left-0.5 transition-transform duration-300 ease-out"
                 style={`width: calc((100% - 0.25rem) / 3); ${getSliderStyle()}`}>
            </div>
            <button aria-label={i18n(I18nKey.lightMode)} role="button"
                    class="theme-seg-btn relative z-10 flex items-center justify-center h-8 md:h-10 rounded-full transition-colors duration-200 active:scale-90"
                    style="width: calc((100% - 0.25rem) / 3);"
                    class:text-(--primary)={mode === LIGHT_MODE}
                    class:text-gray-500={mode !== LIGHT_MODE}
                    onclick={(e) => switchScheme(LIGHT_MODE, e)}>
                <Icon icon="material-symbols:wb-sunny-outline-rounded" class="text-[1.125rem] md:text-[1.25rem]"></Icon>
            </button>
            <button aria-label={i18n(I18nKey.systemMode)} role="button"
                    class="theme-seg-btn relative z-10 flex items-center justify-center h-8 md:h-10 rounded-full transition-colors duration-200 active:scale-90"
                    style="width: calc((100% - 0.25rem) / 3);"
                    class:text-(--primary)={mode === SYSTEM_MODE}
                    class:text-gray-500={mode !== SYSTEM_MODE}
                    onclick={(e) => switchScheme(SYSTEM_MODE, e)}>
                <Icon icon="material-symbols:brightness-auto-outline-rounded" class="text-[1.125rem] md:text-[1.25rem]"></Icon>
            </button>
            <button aria-label={i18n(I18nKey.darkMode)} role="button"
                    class="theme-seg-btn relative z-10 flex items-center justify-center h-8 md:h-10 rounded-full transition-colors duration-200 active:scale-90"
                    style="width: calc((100% - 0.25rem) / 3);"
                    class:text-(--primary)={mode === DARK_MODE}
                    class:text-gray-500={mode !== DARK_MODE}
                    onclick={(e) => switchScheme(DARK_MODE, e)}>
                <Icon icon="material-symbols:dark-mode-outline-rounded" class="text-[1.125rem] md:text-[1.25rem]"></Icon>
            </button>
        {:else}
            <!-- 收起状态：显示当前模式图标，点击展开 -->
            <button aria-label="Toggle theme options" role="button"
                    class="theme-seg-btn relative z-10 flex items-center justify-center h-8 md:h-10 w-8 md:w-10 rounded-full transition-colors duration-200 active:scale-90"
                    onclick={(e) => toggleExpanded(e)}>
                <Icon icon={getCurrentIcon()} class="text-[1.125rem] md:text-[1.25rem]"></Icon>
            </button>
        {/if}
    </div>
</div>

<style>
.theme-segmented {
    background: var(--btn-regular-bg, rgba(0, 0, 0, 0.05));
    padding: 0.125rem;
    width: 2.25rem;
}

:global(.dark) .theme-segmented {
    background: rgba(255, 255, 255, 0.06);
}

@media (min-width: 768px) {
    .theme-segmented {
        width: 2.75rem;
    }
}

.theme-segmented.expanded {
    width: 6.25rem;
}

@media (min-width: 768px) {
    .theme-segmented.expanded {
        width: 7.75rem;
    }
}

/* 滑块 */
.theme-slider-wrap {
    background: var(--btn-regular-bg-hover, rgba(0, 0, 0, 0.08));
    border-radius: 9999px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

:global(.dark) .theme-slider-wrap {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* 按钮 hover */
.theme-seg-btn:hover {
    color: var(--primary);
}
</style>
