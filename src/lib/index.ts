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
