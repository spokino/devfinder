import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import SearchBar from './SearchBar.svelte';

describe('SearchBar Component', () => {
	it('should render with default props', async () => {
		const screen = render(SearchBar, {
			props: {
				value: '',
				onChange: () => {},
				onSearch: () => {}
			}
		});

		const input = screen.getByRole('textbox');
		await expect.element(input).toBeInTheDocument();
		await expect.element(input).toHaveAttribute('placeholder', 'Search GitHub username...');
	});

	it('should display error message when error prop is provided', async () => {
		const screen = render(SearchBar, {
			props: {
				value: '',
				onChange: () => {},
				onSearch: () => {},
				error: 'No results'
			}
		});

		const errorElement = screen.getByRole('alert');
		await expect.element(errorElement).toHaveTextContent('No results');
	});

	it('should show loading state', async () => {
		const screen = render(SearchBar, {
			props: {
				value: 'octocat',
				onChange: () => {},
				onSearch: () => {},
				loading: true
			}
		});

		const button = screen.getByRole('button');
		await expect.element(button).toHaveTextContent('Searching...');
		await expect.element(button).toBeDisabled();
	});

	it('should disable search button when input is empty', async () => {
		const screen = render(SearchBar, {
			props: {
				value: '',
				onChange: () => {},
				onSearch: () => {}
			}
		});

		const button = screen.getByRole('button');
		await expect.element(button).toBeDisabled();
	});

	it('should enable search button when input has value', async () => {
		const screen = render(SearchBar, {
			props: {
				value: 'octocat',
				onChange: () => {},
				onSearch: () => {}
			}
		});

		const button = screen.getByRole('button');
		await expect.element(button).not.toBeDisabled();
	});
});
