<script lang="ts">
	let { repos }: { repos: any[] } = $props();
</script>

<div class="bg-[rgb(var(--bg-card))] rounded-lg shadow-lg p-6 md:p-10 mt-8">
	<h2 class="text-xl font-bold text-[rgb(var(--text-main))] mb-6">Top Repositories</h2>
	<div class="space-y-4">
		{#each repos as repo}
			<div class="border-b border-[rgb(var(--border))] pb-4 last:border-b-0 last:pb-0">
				<div class="flex justify-between items-start mb-2">
					<a href={repo.html_url} target="_blank" rel="noopener noreferrer" class="text-lg font-semibold text-[#0079FF] hover:underline">
						{repo.name}
					</a>
					<div class="flex items-center gap-4 text-sm text-[rgb(var(--text-secondary))]">
						<span class="flex items-center gap-1">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							{repo.stargazers_count}
						</span>
						{#if repo.language}
							<span>{repo.language}</span>
						{/if}
					</div>
				</div>
				{#if repo.description}
					<p class="text-[rgb(var(--text-secondary))] mb-2">{repo.description}</p>
				{/if}
				<p class="text-sm text-[rgb(var(--text-secondary))]">
					Updated {new Date(repo.updated_at).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}
				</p>
			</div>
		{/each}
	</div>
</div>