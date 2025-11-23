<script lang="ts">
	import SunIcon from './icons/SunIcon.svelte';
	import MoonIcon from './icons/MoonIcon.svelte';

	let { theme, onToggleTheme }: { theme: string; onToggleTheme: () => void } = $props();
</script>

<header class="flex items-center justify-between mb-9">
	<h1 class="text-preset-1 text-neutral-900">devfinder</h1>

	<button
		onclick={onToggleTheme}
		class="flex items-center gap-4 text-preset-4 text-neutral-500 hover:text-neutral-900 transition-colors duration-200 uppercase tracking-[2.5px]"
		aria-label="Toggle theme"
	>
		{#if theme === 'light'}
			<span>Dark</span>
			<MoonIcon />
		{:else}
			<span>Light</span>
			<SunIcon />
		{/if}
	</button>
</header>
