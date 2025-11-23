import type { GitHubUser, GitHubRepo } from './types';

const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
	if (!username.trim()) {
		throw new Error('Username cannot be empty');
	}

	try {
		const headers: Record<string, string> = {
			Accept: 'application/vnd.github.v3+json'
		};

		// Add authorization header if token exists
		let token: string | null = null;
		try {
			token = localStorage.getItem('github_token');
		} catch {
			// localStorage not available (e.g., in tests or SSR)
		}
		if (token) {
			headers['Authorization'] = `token ${token}`;
		}

		const response = await fetch(
			`${GITHUB_API_BASE}/users/${encodeURIComponent(username.trim())}`,
			{
				headers
			}
		);

		if (!response.ok) {
			if (response.status === 404) {
				throw new Error('User not found');
			} else if (response.status === 403) {
				throw new Error('API rate limit exceeded. Please try again later.');
			} else if (response.status === 401) {
				throw new Error('Authentication failed. Please log in again.');
			} else {
				throw new Error(`Failed to fetch user: ${response.statusText}`);
			}
		}

		const user: GitHubUser = await response.json();
		return user;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error('Network error occurred. Please check your connection.');
	}
}

export async function fetchCurrentUser(): Promise<GitHubUser> {
	try {
		const headers: Record<string, string> = {
			Accept: 'application/vnd.github.v3+json'
		};

		// Add authorization header if token exists
		let token: string | null = null;
		try {
			token = localStorage.getItem('github_token');
		} catch {
			// localStorage not available (e.g., in tests or SSR)
		}
		if (!token) {
			throw new Error('Not authenticated');
		}
		headers['Authorization'] = `token ${token}`;

		const response = await fetch(`${GITHUB_API_BASE}/user`, {
			headers
		});

		if (!response.ok) {
			if (response.status === 401) {
				throw new Error('Authentication failed. Please log in again.');
			} else {
				throw new Error(`Failed to fetch user: ${response.statusText}`);
			}
		}

		const user: GitHubUser = await response.json();
		return user;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error('Network error occurred. Please check your connection.');
	}
}

export async function fetchUserRepos(username?: string): Promise<GitHubRepo[]> {
	try {
		const headers: Record<string, string> = {
			Accept: 'application/vnd.github.v3+json'
		};

		// Add authorization header if token exists
		let token: string | null = null;
		try {
			token = localStorage.getItem('github_token');
		} catch {
			// localStorage not available (e.g., in tests or SSR)
		}
		if (token) {
			headers['Authorization'] = `token ${token}`;
		}

		const url = username
			? `${GITHUB_API_BASE}/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=10`
			: `${GITHUB_API_BASE}/user/repos?sort=updated&per_page=10`;

		const response = await fetch(url, { headers });

		if (!response.ok) {
			if (response.status === 404) {
				throw new Error('User not found');
			} else if (response.status === 403) {
				throw new Error('API rate limit exceeded. Please try again later.');
			} else if (response.status === 401) {
				throw new Error('Authentication failed. Please log in again.');
			} else {
				throw new Error(`Failed to fetch repos: ${response.statusText}`);
			}
		}

		const repos: GitHubRepo[] = await response.json();
		return repos;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error('Network error occurred. Please check your connection.');
	}
}
