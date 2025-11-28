// place files you want to import through the `$lib` alias in this folder.

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
	const response = await fetch(`https://api.github.com/users/${username}`);
	if (!response.ok) {
		if (response.status === 404) {
			throw new Error('User not found');
		}
		throw new Error('Failed to fetch user data');
	}
	return response.json();
}

export async function fetchAuthenticatedUser(token: string): Promise<GitHubUser> {
	const response = await fetch('https://api.github.com/user', {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/vnd.github.v3+json'
		}
	});
	if (!response.ok) {
		throw new Error('Failed to fetch authenticated user');
	}
	return response.json();
}

export async function fetchUserRepos(token: string, username: string): Promise<any[]> {
	const response = await fetch(
		`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/vnd.github.v3+json'
			}
		}
	);
	if (!response.ok) {
		throw new Error('Failed to fetch user repos');
	}
	return response.json();
}

export { session } from './session';
