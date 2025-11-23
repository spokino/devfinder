<script lang="ts">
	import type { GitHubRepo } from '$lib/types';

	let { repos }: { repos: GitHubRepo[] } = $props();

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<div class="mt-8">
	<h2 class="text-preset-2 text-neutral-900 mb-6">Top Repositories</h2>
	<div class="space-y-4">
		{#each repos as repo (repo.id)}
			<div class="bg-neutral-0 rounded-[10px] p-6 shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.2)]">
				<div class="flex flex-col gap-2">
					<button
						onclick={() => window.open(repo.html_url, '_blank')}
						class="text-preset-3 text-blue-500 hover:underline text-left"
					>
						{repo.name}
					</button>
					{#if repo.description}
						<p class="text-preset-4 text-neutral-700">{repo.description}</p>
					{:else}
						<p class="text-preset-4 text-neutral-500">No description available</p>
					{/if}
					<div class="flex items-center gap-6 text-preset-7 text-neutral-500">
						{#if repo.language}
							<span class="flex items-center gap-1">
								<span class="w-3 h-3 rounded-full bg-blue-500"></span>
								{repo.language}
							</span>
						{/if}
						<span>⭐ {repo.stargazers_count.toLocaleString()}</span>
						<span>Updated {formatDate(repo.updated_at)}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
