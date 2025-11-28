import { writable } from 'svelte/store';

export interface GitHubUser {
	avatar_url: string;
	name: string | null;
	login: string;
	bio: string | null;
	location: string | null;
	blog: string | null;
	company: string | null;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
	twitter_username: string | null;
}

export const session = writable<{
	isLoggedIn: boolean;
	user: GitHubUser | null;
	token: string | null;
}>({
	isLoggedIn: false,
	user: null,
	token: null
});

// Initialize from localStorage
if (typeof window !== 'undefined') {
	const token = localStorage.getItem('github_token');
	if (token) {
		session.update((s) => ({ ...s, token, isLoggedIn: true }));
		// Optionally fetch user data here
	}
}
