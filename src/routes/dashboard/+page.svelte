<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		fetchCurrentUser,
		fetchUserRepos,
		themeStore,
		type GitHubUser,
		type GitHubRepo
	} from '$lib';
	import Header from '$lib/components/Header.svelte';
	import UserProfile from '$lib/components/UserProfile.svelte';
	import RepoList from '$lib/components/RepoList.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
	import LoadingSkeleton from '$lib/components/LoadingSkeleton.svelte';

	let user = $state<GitHubUser | null>(null);
	let repos = $state<GitHubRepo[]>([]);
	let loading = $state(true);
	let errorMessage = $state('');
	let currentTheme = $state('light');
	let currentUser = $state<GitHubUser | null>(null);

	// Subscribe to theme store
	$effect(() => {
		const unsubscribe = themeStore.subscribe((theme) => {
			currentTheme = theme;
		});
		return unsubscribe;
	});

	let errorParam = $state('');

	// Subscribe to page store to get query params
	$effect(() => {
		const unsubscribe = page.subscribe((p) => {
			errorParam = p.url.searchParams.get('error') || '';
		});
		return unsubscribe;
	});

	onMount(async () => {
		const token = localStorage.getItem('github_token');
		if (!token) {
			errorMessage =
				'Dashboard requires authentication. Please log in with a valid GitHub account.';
			loading = false;
			return;
		}

		if (errorParam === 'auth_failed') {
			errorMessage = 'Authentication failed. Please try logging in again.';
			loading = false;
			return;
		}

		try {
			// Fetch current user
			currentUser = await fetchCurrentUser();
			user = currentUser;

			// Fetch repos
			repos = await fetchUserRepos();
		} catch (error) {
			errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
		} finally {
			loading = false;
		}
	});

	function handleThemeToggle() {
		themeStore.toggleTheme();
	}

	function handleLogin() {
		// Should not reach here, but redirect
		window.location.href = '/';
	}

	function handleLogout() {
		localStorage.removeItem('github_token');
		currentUser = null;
		window.location.href = '/';
	}
</script>

<main
	class="min-h-screen bg-neutral-100 px-6 py-8 md:px-0 md:py-9 w-full max-w-[327px] md:max-w-[704px] lg:max-w-[730px] mx-auto"
>
	<Header
		theme={currentTheme}
		onToggleTheme={handleThemeToggle}
		isLoggedIn={!!currentUser}
		{currentUser}
		onLogin={handleLogin}
		onLogout={handleLogout}
	/>

	{#if loading}
		<LoadingSkeleton />
	{:else if errorMessage}
		<ErrorMessage message={errorMessage} />
	{:else if user}
		<UserProfile {user} />
		<RepoList {repos} />
	{/if}
</main>
