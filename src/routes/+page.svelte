<script lang="ts">
	import { fetchGitHubUser } from '$lib';
	import UserProfile from '$lib/UserProfile.svelte';

	let searchInput = $state('');
	let user = $state<GitHubUser | null>(null);
	let loading = $state(false);
	let error = $state<string | null>(null);
	let isDark = $state(false);

	// Load theme from localStorage
	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');
		isDark = savedTheme === 'dark';
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
			document.documentElement.classList.toggle('dark', isDark);
		}
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

<main class="min-h-screen bg-white dark:bg-[#141D2F] p-4 md:p-8">
	<div class="max-w-4xl mx-auto">
		<!-- Header with logo and theme toggle -->
		<header class="flex justify-between items-center mb-8">
			<h1 class="text-2xl font-bold text-[#141D2F] dark:text-white">devfinder</h1>
			<button onclick={toggleTheme} class="flex items-center gap-2 text-sm font-bold text-[#4B6A9B] dark:text-[#90A4D4] hover:text-[#141D2F] dark:hover:text-white transition-colors">
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
		<div class="bg-white dark:bg-[#1E2A47] rounded-lg shadow-lg p-4 mb-8">
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
						class="w-full pl-12 pr-4 py-3 bg-transparent text-[#141D2F] dark:text-white placeholder-[#4B6A9B] dark:placeholder-[#90A4D4] border-none outline-none"
					/>
				</div>
				{#if error}
					<div class="text-red-500 text-sm self-center">{error}</div>
				{/if}
				<button
					onclick={handleSearch}
					disabled={loading}
					class="bg-[#0079FF] hover:bg-[#60ABFF] disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold"
				>
					{loading ? 'Searching...' : 'Search'}
				</button>
			</div>
		</div>

		<!-- Loading state -->
		{#if loading}
			<div class="bg-white dark:bg-[#1E2A47] rounded-lg shadow-lg p-6 animate-pulse">
				<div class="flex flex-col md:flex-row gap-6">
					<div class="w-24 h-24 md:w-32 md:h-32 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
					<div class="flex-1 space-y-4">
						<div class="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
						<div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
						<div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
						<div class="grid grid-cols-3 gap-4">
							<div class="h-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
							<div class="h-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
							<div class="h-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
						</div>
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
