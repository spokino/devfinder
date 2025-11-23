<script lang="ts">
	import type { SearchBarProps } from '$lib';
	import SearchIcon from './icons/SearchIcon.svelte';

	let { value, onChange, onSearch, error, loading = false }: SearchBarProps = $props();

	let inputRef: HTMLInputElement;

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !loading) {
			onSearch();
		}
	}

	function handleSearch() {
		if (!loading) {
			onSearch();
		}
	}
</script>

<div class="relative mb-6 md:mb-6">
	<div class="relative">
		<input
			bind:this={inputRef}
			bind:value
			oninput={(e) => onChange(e.currentTarget.value)}
			onkeydown={handleKeydown}
			type="text"
			placeholder="Search GitHub username..."
			disabled={loading}
			class="
        w-full h-[60px] lg:h-[69px] pl-[45px] md:pl-20 lg:pl-20 pr-[100px] md:pr-[110px]
        text-preset-4 md:text-preset-3
        bg-neutral-0 rounded-[15px]
        placeholder:text-neutral-300
        focus:outline-none
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.2)]
        {error ? 'text-red-500' : ''}
      "
			aria-label="Search GitHub username"
			aria-describedby={error ? 'search-error' : undefined}
			aria-invalid={error ? 'true' : 'false'}
		/>

		<div class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2">
			<SearchIcon />
		</div>

		{#if error}
			<p
				role="alert" id="search-error" class="absolute right-[110px] md:right-[120px] top-1/2 -translate-y-1/2 text-preset-5 text-red-500 font-bold"
			>
				No results
			</p>
		{/if}

		<button
			onclick={handleSearch}
			disabled={loading || !value.trim()}
			class="
        absolute right-[7px] md:right-[10px] top-1/2 -translate-y-1/2
        h-[46px] lg:h-[50px] px-4 md:px-6
        bg-blue-500 hover:bg-blue-300 disabled:bg-neutral-300
        text-neutral-0 text-preset-5 md:text-preset-4 font-bold
        rounded-[10px]
        transition-colors duration-200
        disabled:cursor-not-allowed
      "
			aria-label="Search"
		>
			{loading ? 'Searching...' : 'Search'}
		</button>
	</div>
</div>
