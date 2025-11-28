import { describe, expect, it, vi } from 'vitest';
import { fetchGitHubUser } from './index';

// Mock fetch
global.fetch = vi.fn();

describe('fetchGitHubUser', () => {
	it('should fetch user data successfully', async () => {
		const mockUser = {
			login: 'octocat',
			name: 'The Octocat',
			avatar_url: 'https://github.com/images/error/octocat_happy.gif',
			bio: null,
			location: 'San Francisco',
			blog: 'https://github.blog',
			public_repos: 8,
			followers: 3938,
			following: 9,
			created_at: '2011-01-25T18:44:36Z'
		};

		(global.fetch as any).mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve(mockUser)
		});

		const result = await fetchGitHubUser('octocat');
		expect(result).toEqual(mockUser);
		expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/octocat');
	});

	it('should throw error for 404', async () => {
		(global.fetch as any).mockResolvedValueOnce({
			ok: false,
			status: 404
		});

		await expect(fetchGitHubUser('nonexistent')).rejects.toThrow('User not found');
	});

	it('should throw error for other failures', async () => {
		(global.fetch as any).mockResolvedValueOnce({
			ok: false,
			status: 500
		});

		await expect(fetchGitHubUser('octocat')).rejects.toThrow('Failed to fetch user data');
	});
});
