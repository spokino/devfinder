import { expect, test } from '@playwright/test';

test.describe('GitHub User Search', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should display the header with devfinder title', async ({ page }) => {
		await expect(page.locator('h1').filter({ hasText: 'devfinder' })).toBeVisible();
	});

	test('should have theme toggle button', async ({ page }) => {
		const themeButton = page.locator('button[aria-label="Toggle theme"]');
		await expect(themeButton).toBeVisible();
	});

	test('should search for a valid GitHub user', async ({ page }) => {
		// Type in search input
		const searchInput = page.locator('input[placeholder="Search GitHub username..."]');
		await searchInput.fill('octocat');

		// Click search button
		const searchButton = page.locator('button').filter({ hasText: 'Search' });
		await searchButton.click();

		// Wait for loading to complete and user profile to appear
		await expect(page.locator('text=The Octocat')).toBeVisible();
		await expect(page.locator('text=@octocat')).toBeVisible();
	});

	test('should show error for non-existent user', async ({ page }) => {
		// Type in search input
		const searchInput = page.locator('input[placeholder="Search GitHub username..."]');
		await searchInput.fill('this-user-does-not-exist-12345');

		// Click search button
		const searchButton = page.locator('button').filter({ hasText: 'Search' });
		await searchButton.click();

		// Wait for error message
		await expect(page.locator('#search-error')).toBeVisible();
		await expect(page.locator('text=User not found')).toBeVisible();
	});

	test('should toggle between light and dark themes', async ({ page }) => {
		// Check initial theme (should be light)
		const html = page.locator('html');
		await expect(html).not.toHaveAttribute('data-theme', 'dark');

		// Click theme toggle
		const themeButton = page.locator('button[aria-label="Toggle theme"]');
		await themeButton.click();

		// Check that theme changed to dark
		await expect(html).toHaveAttribute('data-theme', 'dark');

		// Click again to go back to light
		await themeButton.click();
		await expect(html).not.toHaveAttribute('data-theme', 'dark');
	});

	test('should be responsive on mobile viewport', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		// Check that header is visible and properly sized
		const header = page.locator('header');
		await expect(header).toBeVisible();

		// Search input should be properly sized for mobile
		const searchInput = page.locator('input[placeholder="Search GitHub username..."]');
		await expect(searchInput).toBeVisible();
	});

	test('should be responsive on tablet viewport', async ({ page }) => {
		await page.setViewportSize({ width: 768, height: 1024 });

		// Check that layout adjusts for tablet
		const header = page.locator('header');
		await expect(header).toBeVisible();

		const searchInput = page.locator('input[placeholder="Search GitHub username..."]');
		await expect(searchInput).toBeVisible();
	});

	test('should be responsive on desktop viewport', async ({ page }) => {
		await page.setViewportSize({ width: 1440, height: 900 });

		// Check that layout adjusts for desktop
		const header = page.locator('header');
		await expect(header).toBeVisible();

		const searchInput = page.locator('input[placeholder="Search GitHub username..."]');
		await expect(searchInput).toBeVisible();
	});
});
