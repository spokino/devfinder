<script lang="ts">
	interface GitHubUser {
		avatar_url: string;
		name: string | null;
		login: string;
		bio: string | null;
		location: string | null;
		blog: string | null;
		company: string | null;
		public_repos: number;
		followers: number;
		following: number;
		created_at: string;
	}

	let { user }: { user: GitHubUser } = $props();
</script>

	<div class="bg-[rgb(var(--bg-card))] rounded-lg shadow-lg p-4 md:p-6">
	<div class="flex flex-col gap-4 md:flex-row md:gap-6">
		<!-- Avatar -->
		<img src={user.avatar_url} alt={user.name || user.login} class="w-20 h-20 md:w-32 md:h-32 rounded-full flex-shrink-0" />

		<div class="flex-1 min-w-0">
			<!-- Name and username -->
			<div class="mb-4">
				<h2 class="text-2xl font-bold text-[rgb(var(--text-main))]">{user.name || user.login}</h2>
				<p class="text-[#0079FF]">@{user.login}</p>
			</div>

			<!-- Join date -->
			<p class="text-[rgb(var(--text-secondary))] mb-4">
				Joined {new Date(user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
			</p>

			<!-- Bio -->
			{#if user.bio}
				<p class="text-[rgb(var(--text-main))] mb-4">{user.bio}</p>
			{:else}
				<p class="text-[rgb(var(--text-secondary))] mb-4">This profile has no bio</p>
			{/if}

			<!-- Stats -->
			<div class="bg-[rgb(var(--border))] rounded-lg p-4 mb-4 grid grid-cols-3 gap-4">
				<div class="text-center">
					<p class="text-sm text-[rgb(var(--text-secondary))]">Repos</p>
					<p class="text-2xl font-bold text-[rgb(var(--text-main))]">{user.public_repos}</p>
				</div>
				<div class="text-center">
					<p class="text-sm text-[rgb(var(--text-secondary))]">Followers</p>
					<p class="text-2xl font-bold text-[rgb(var(--text-main))]">{user.followers}</p>
				</div>
				<div class="text-center">
					<p class="text-sm text-[rgb(var(--text-secondary))]">Following</p>
					<p class="text-2xl font-bold text-[rgb(var(--text-main))]">{user.following}</p>
				</div>
			</div>

			<!-- Links -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<!-- Location -->
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5 text-[rgb(var(--text-secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
					</svg>
					<span class="text-[rgb(var(--text-main))]">{user.location || 'Not Available'}</span>
				</div>

				<!-- Twitter -->
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5 text-[rgb(var(--text-secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
					</svg>
					<span class="text-[rgb(var(--text-main))]">Not Available</span>
				</div>

				<!-- Blog -->
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5 text-[rgb(var(--text-secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
					</svg>
					{#if user.blog}
						<a href={user.blog} target="_blank" rel="noopener" class="text-[#0079FF] hover:underline">{user.blog}</a>
					{:else}
						<span class="text-[rgb(var(--text-main))]">Not Available</span>
					{/if}
				</div>

				<!-- Company -->
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5 text-[rgb(var(--text-secondary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
					</svg>
					<span class="text-[rgb(var(--text-main))]">{user.company || 'Not Available'}</span>
				</div>
			</div>
		</div>
	</div>
</div>