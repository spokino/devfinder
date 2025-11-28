<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchGitHubUser } from '$lib';
	import UserProfile from '$lib/UserProfile.svelte';

	let searchInput = $state('');
	let user = $state<GitHubUser | null>(null);
	let loading = $state(false);
	let error = $state<string | null>(null);
	let isDark = $state(false);

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		isDark = savedTheme === 'dark';
		document.documentElement.classList.toggle('dark', isDark);
	});

	$effect(() => {
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', isDark);
	});

	function toggleTheme() {
		isDark = !isDark;
	}

	async function handleSearch() {
		if (!searchInput.trim()) return;

		loading = true;
		error = null;
		user = null;

		try {
			user = await fetchGitHubUser(searchInput.trim());
		} catch (err) {
			error = err instanceof Error ? err.message : 'An error occurred';
		} finally {
			loading = false;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleSearch();
		}
	}
</script>

<main class="min-h-screen bg-[rgb(var(--bg-main))] p-4 md:p-8">
	<div class="max-w-4xl mx-auto">
		<!-- Header with logo and theme toggle -->
		<header class="flex justify-between items-center mb-8">
			<a href="/" class="text-2xl font-bold text-[rgb(var(--text-main))] hover:text-[#0079FF] transition-colors">devfinder</a>
			<button onclick={toggleTheme} class="flex items-center gap-2 text-sm font-bold text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-main))] transition-colors">
				{isDark ? 'LIGHT' : 'DARK'}
				{#if isDark}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
					</svg>
				{:else}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
					</svg>
				{/if}
			</button>
		</header>

		<!-- Search bar -->
		<div class="bg-[rgb(var(--bg-card))] rounded-lg shadow-lg p-4 mb-8">
			<div class="flex gap-4">
				<div class="flex-1 relative">
					<!-- Search icon -->
					<svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0079FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
					</svg>
					<input
						bind:value={searchInput}
						onkeydown={handleKeydown}
						placeholder="Search GitHub username..."
						class="w-full pl-12 pr-4 py-3 bg-transparent text-[rgb(var(--text-main))] placeholder-[rgb(var(--text-secondary))] border-none outline-none"
					/>
				</div>
				<button
					onclick={handleSearch}
					disabled={loading}
					class="bg-[#0079FF] hover:bg-[#60ABFF] disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold"
				>
					{loading ? 'Searching...' : 'Search'}
				</button>
			</div>
		</div>

		<!-- Error panel -->
		{#if error}
			<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mt-6">
				<div class="flex items-center gap-3">
					<svg class="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
					</svg>
					<div>
						<h3 class="text-lg font-semibold text-red-800 dark:text-red-200">No results</h3>
						<p class="text-red-700 dark:text-red-300">{error}</p>
					</div>
				</div>
			</div>
		{/if}

		<!-- User profile -->
		{#if user}
			<UserProfile {user} />
		{/if}
	</div>
</main>
