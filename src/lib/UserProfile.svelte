<script lang="ts">
	interface GitHubUser {
		avatar_url: string;
		name: string | null;
		login: string;
		bio: string | null;
		location: string | null;
		blog: string | null;
		public_repos: number;
		followers: number;
		following: number;
		created_at: string;
	}

	let { user }: { user: GitHubUser } = $props();
</script>

<div class="bg-white dark:bg-[#1E2A47] rounded-lg shadow-lg p-6">
	<div class="flex flex-col md:flex-row gap-6">
		<!-- Avatar -->
		<img src={user.avatar_url} alt={user.name || user.login} class="w-24 h-24 md:w-32 md:h-32 rounded-full" />

		<div class="flex-1">
			<!-- Name and username -->
			<div class="mb-4">
				<h2 class="text-2xl font-bold text-[#141D2F] dark:text-white">{user.name || user.login}</h2>
				<p class="text-[#0079FF]">@{user.login}</p>
			</div>

			<!-- Join date -->
			<p class="text-[#697C9A] dark:text-[#90A4D4] mb-4">
				Joined {new Date(user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
			</p>

			<!-- Bio -->
			{#if user.bio}
				<p class="text-[#141D2F] dark:text-white mb-4">{user.bio}</p>
			{:else}
				<p class="text-[#697C9A] dark:text-[#90A4D4] mb-4">This profile has no bio</p>
			{/if}

			<!-- Stats -->
			<div class="bg-[#F6F8FF] dark:bg-[#141D2F] rounded-lg p-4 mb-4 grid grid-cols-3 gap-4">
				<div class="text-center">
					<p class="text-sm text-[#697C9A] dark:text-[#90A4D4]">Repos</p>
					<p class="text-2xl font-bold text-[#141D2F] dark:text-white">{user.public_repos}</p>
				</div>
				<div class="text-center">
					<p class="text-sm text-[#697C9A] dark:text-[#90A4D4]">Followers</p>
					<p class="text-2xl font-bold text-[#141D2F] dark:text-white">{user.followers}</p>
				</div>
				<div class="text-center">
					<p class="text-sm text-[#697C9A] dark:text-[#90A4D4]">Following</p>
					<p class="text-2xl font-bold text-[#141D2F] dark:text-white">{user.following}</p>
				</div>
			</div>

			<!-- Links -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#if user.location}
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5 text-[#697C9A] dark:text-[#90A4D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
						</svg>
						<span class="text-[#141D2F] dark:text-white">{user.location}</span>
					</div>
				{/if}
				{#if user.blog}
					<div class="flex items-center gap-2">
						<svg class="w-5 h-5 text-[#697C9A] dark:text-[#90A4D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
						</svg>
						<a href={user.blog} target="_blank" rel="noopener" class="text-[#0079FF] hover:underline">{user.blog}</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>