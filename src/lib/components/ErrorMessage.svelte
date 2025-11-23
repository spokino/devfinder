<script lang="ts">
	import type { ErrorMessageProps } from '$lib';
	import ErrorIcon from './icons/ErrorIcon.svelte';

	let { message }: ErrorMessageProps = $props();
</script>

<div class="bg-neutral-0 rounded-lg md:rounded-xl p-6 md:p-10 shadow-sm text-center">
	<ErrorIcon />
	<h3 class="text-preset-3 text-neutral-900 mt-4 mb-2">No results</h3>
	<p class="text-preset-4 text-neutral-500">{message}</p>
</div>
