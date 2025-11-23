<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchGitHubUser, themeStore, type GitHubUser, type SearchState } from '$lib';
	import Header from '$lib/components/Header.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import UserProfile from '$lib/components/UserProfile.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
	import LoadingSkeleton from '$lib/components/LoadingSkeleton.svelte';

	let searchQuery = $state('');
	let user = $state<GitHubUser | null>(null);
	let searchState = $state<SearchState>('idle');
	let errorMessage = $state('');
	let currentTheme = $state('light');
	let isLoggedIn = $state(false);
	let currentUser = $state<GitHubUser | null>(null);

	// Subscribe to theme store
	$effect(() => {
		const unsubscribe = themeStore.subscribe((theme) => {
			currentTheme = theme;
		});
		return unsubscribe;
	});

	// Check login status on mount
	onMount(async () => {
		const token = localStorage.getItem('github_token');
		isLoggedIn = !!token;
		if (isLoggedIn) {
			try {
				currentUser = await fetchCurrentUser();
			} catch {
				// If fetch fails, treat as not logged in
				localStorage.removeItem('github_token');
				isLoggedIn = false;
			}
		}
	});

	async function handleSearch() {
		if (!searchQuery.trim()) return;

		searchState = 'loading';
		errorMessage = '';

		try {
			user = await fetchGitHubUser(searchQuery.trim());
			searchState = 'success';
		} catch (error) {
			searchState = 'error';
			errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
			user = null;
		}
	}

	function handleSearchQueryChange(value: string) {
		searchQuery = value;
		if (errorMessage) {
			errorMessage = '';
		}
	}

	function handleThemeToggle() {
		themeStore.toggleTheme();
	}

	function handleLogin() {
		// GitHub OAuth flow
		const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID || 'Ov23liIoy8c8uTszx8VR';
		const redirectUri = `${window.location.origin}/auth/callback`;
		const scope = 'user:email';
		const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;

		window.location.href = githubAuthUrl;
	}

	function handleLogout() {
		localStorage.removeItem('github_token');
		isLoggedIn = false;
		currentUser = null;
	}
</script>

<main
	class="min-h-screen bg-neutral-100 px-6 py-8 md:px-0 md:py-9 w-full max-w-[327px] md:max-w-[704px] lg:max-w-[730px] mx-auto"
>
	<Header
		theme={currentTheme}
		onToggleTheme={handleThemeToggle}
		{isLoggedIn}
		{currentUser}
		onLogin={handleLogin}
		onLogout={handleLogout}
	/>

	<SearchBar
		value={searchQuery}
		onChange={handleSearchQueryChange}
		onSearch={handleSearch}
		error={searchState === 'error' ? errorMessage : ''}
		loading={searchState === 'loading'}
	/>

	{#if searchState === 'loading'}
		<LoadingSkeleton />
	{:else if searchState === 'success' && user}
		<UserProfile {user} />
	{:else if searchState === 'error'}
		<ErrorMessage message={errorMessage} />
	{/if}
</main>
