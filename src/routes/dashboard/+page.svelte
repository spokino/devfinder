<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { session, fetchAuthenticatedUser, fetchUserRepos } from '$lib';
	import UserProfile from '$lib/UserProfile.svelte';
	import RepoList from '$lib/RepoList.svelte';

	let currentSession = $state<{ isLoggedIn: boolean; user: GitHubUser | null; token: string | null }>({ isLoggedIn: false, user: null, token: null });
	let repos = $state<any[]>([]);
	let loading = $state(true);
	let isDark = $state(false);

	session.subscribe(s => {
		currentSession = s;
	});

	function toggleTheme() {
		isDark = !isDark;
	}

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
			// Clean URL
			window.history.replaceState({}, '', '/dashboard');
		}

		if (!currentSession.isLoggedIn || !currentSession.token) {
			goto('/');
			return;
		}

		try {
			// Fetch user if not already fetched
			if (!currentSession.user) {
				const user = await fetchAuthenticatedUser(currentSession.token);
				session.update(s => ({ ...s, user }));
			}

			// Fetch repos
			const userRepos = await fetchUserRepos(currentSession.token, currentSession.user!.login);
			repos = userRepos;
		} catch (err) {
			console.error('Failed to load dashboard data:', err);
		} finally {
			loading = false;
		}
	});

	$effect(() => {
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', isDark);
	});
</script>

<main class="min-h-screen bg-[rgb(var(--bg-main))] p-4 md:p-8">
	<div class="max-w-4xl mx-auto">
		<!-- Header -->
		<header class="flex justify-between items-center mb-8">
			<a href="/" class="text-2xl font-bold text-[rgb(var(--text-main))] hover:text-[#0079FF] transition-colors">devfinder</a>
			<div class="flex items-center gap-4">
				{#if currentSession.isLoggedIn && currentSession.user}
					<a href="/dashboard" class="flex items-center gap-2 text-sm font-bold text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-main))] transition-colors">
						<img src={currentSession.user.avatar_url} alt={currentSession.user.login} class="w-6 h-6 rounded-full" />
						{currentSession.user.name || currentSession.user.login}
					</a>
					<button onclick={() => { localStorage.removeItem('github_token'); session.update(s => ({ isLoggedIn: false, user: null, token: null })); goto('/'); }} class="text-sm font-bold text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-main))] transition-colors">Logout</button>
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

		{#if loading}
			<div class="text-center py-8">
				<p class="text-[rgb(var(--text-secondary))]">Loading dashboard...</p>
			</div>
		{:else if currentSession.user}
			<UserProfile user={currentSession.user} />
			<RepoList {repos} />
		{:else}
			<div class="text-center py-8">
				<p class="text-[rgb(var(--text-secondary))]">Unable to load user data.</p>
			</div>
		{/if}
	</div>
</main>