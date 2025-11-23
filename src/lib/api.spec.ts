import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchGitHubUser } from './api';

// Mock fetch
global.fetch = vi.fn();

describe('GitHub API', () => {
	const mockUser = {
		login: 'octocat',
		id: 1,
		avatar_url: 'https://github.com/images/error/octocat_happy.gif',
		name: 'The Octocat',
		bio: 'A test bio',
		public_repos: 10,
		followers: 100,
		following: 50,
		created_at: '2011-01-25T18:44:36Z',
		location: 'San Francisco',
		blog: 'https://github.blog',
		twitter_username: 'github',
		company: 'GitHub'
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should fetch user data successfully', async () => {
		vi.mocked(global.fetch).mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockUser)
		});

		const result = await fetchGitHubUser('octocat');
		expect(result).toEqual(mockUser);
		expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/octocat', {
			headers: {
				Accept: 'application/vnd.github.v3+json'
			}
		});
	});

	it('should handle 404 error for non-existent user', async () => {
		vi.mocked(global.fetch).mockResolvedValueOnce({
			ok: false,
			status: 404
		});

		await expect(fetchGitHubUser('nonexistentuser')).rejects.toThrow('User not found');
	});

	it('should handle API rate limit error', async () => {
		vi.mocked(global.fetch).mockResolvedValueOnce({
			ok: false,
			status: 403
		});

		await expect(fetchGitHubUser('octocat')).rejects.toThrow(
			'API rate limit exceeded. Please try again later.'
		);
	});

	it('should handle network errors', async () => {
		vi.mocked(global.fetch).mockRejectedValueOnce(new Error('Network error'));

		await expect(fetchGitHubUser('octocat')).rejects.toThrow('Network error');
	});

	it('should trim whitespace from username', async () => {
		vi.mocked(global.fetch).mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockUser)
		});

		await fetchGitHubUser('  octocat  ');
		expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/octocat', {
			headers: {
				Accept: 'application/vnd.github.v3+json'
			}
		});
	});

	it('should throw error for empty username', async () => {
		await expect(fetchGitHubUser('')).rejects.toThrow('Username cannot be empty');
		await expect(fetchGitHubUser('   ')).rejects.toThrow('Username cannot be empty');
	});
});
