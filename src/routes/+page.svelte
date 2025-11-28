<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fetchGitHubUser, fetchAuthenticatedUser, session } from '$lib';
	import UserProfile from '$lib/UserProfile.svelte';

	let searchInput = $state('');
	let user = $state<GitHubUser | null>(null);
	let loading = $state(false);
	let error = $state<string | null>(null);
	let isDark = $state(false);

	let currentSession = $state<{ isLoggedIn: boolean; user: GitHubUser | null; token: string | null }>({ isLoggedIn: false, user: null, token: null });

	session.subscribe(s => {
		currentSession = s;
	});

	onMount(async () => {
		const savedTheme = localStorage.getItem('theme');
		isDark = savedTheme === 'dark';
		document.documentElement.classList.toggle('dark', isDark);

		// Handle OAuth callback
		const urlParams = new URLSearchParams(window.location.search);
		const token = urlParams.get('token');
		if (token) {
			localStorage.setItem('github_token', token);
			session.update(s => ({ ...s, token, isLoggedIn: true }));
			// Fetch user data
			try {
				const userData = await fetchAuthenticatedUser(token);
				session.update(s => ({ ...s, user: userData }));
			} catch (err) {
				console.error('Failed to fetch user:', err);
			}
			// Clean URL
			window.history.replaceState({}, '', '/');
		}
	});

	$effect(() => {
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', isDark);
	});

	function toggleTheme() {
		isDark = !isDark;
	}

	function login() {
		window.location.href = '/auth/github';
	}

	function logout() {
		localStorage.removeItem('github_token');
		session.update(s => ({ isLoggedIn: false, user: null, token: null }));
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
		<!-- Header with logo, auth, and theme toggle -->
		<header class="flex justify-between items-center mb-8">
			<a href="/" class="text-2xl font-bold text-[rgb(var(--text-main))] hover:text-[#0079FF] transition-colors">devfinder</a>
			<div class="flex items-center gap-4">
				{#if currentSession.isLoggedIn && currentSession.user}
					<a href="/dashboard" class="flex items-center gap-2 text-sm font-bold text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-main))] transition-colors">
						<img src={currentSession.user.avatar_url} alt={currentSession.user.login} class="w-6 h-6 rounded-full" />
						{currentSession.user.name || currentSession.user.login}
					</a>
					<button onclick={logout} class="text-sm font-bold text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-main))] transition-colors">Logout</button>
				{:else}
					<button onclick={login} class="text-[rgb(var(--text-secondary))] px-4 py-2 rounded-lg font-semibold">
						Sign in with GitHub
					</button>
				{/if}
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
			</div>
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
					{#if error}
						<span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F74646] text-sm font-semibold">No results</span>
					{/if}
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



		<!-- User profile or error -->
		{#if user}
			<UserProfile {user} />
		{:else if error}
			<div class="bg-[rgb(var(--bg-card))] rounded-lg shadow-lg p-4 md:p-6">
				<div class="flex flex-col items-center justify-center text-center py-8">					
					<h2 class="text-2xl font-bold text-[rgb(var(--text-main))] mb-2">No results found!</h2>
					<p class="text-[rgb(var(--text-secondary))]">{error}</p>
					<p class="text-[rgb(var(--text-secondary))]">We couldn’t find any GitHub users matching your search. Please double-check the username and try again.</p>
				</div>
			</div>
		{/if}
	</div>
</main>
