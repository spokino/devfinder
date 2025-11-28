import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render devfinder heading', async () => {
		render(Page);

		const heading = page.getByText('devfinder');
		await expect.element(heading).toBeInTheDocument();
	});

	it('should render search input', async () => {
		render(Page);

		const input = page.getByPlaceholder('Search GitHub username…');
		await expect.element(input).toBeInTheDocument();
	});

	it('should render search button', async () => {
		render(Page);

		const button = page.getByRole('button', { name: 'Search' });
		await expect.element(button).toBeInTheDocument();
	});
});
