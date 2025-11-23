<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import type { UserProfileProps } from '$lib';
	import LocationIcon from './icons/LocationIcon.svelte';
	import WebsiteIcon from './icons/WebsiteIcon.svelte';
	import TwitterIcon from './icons/TwitterIcon.svelte';
	import OfficeIcon from './icons/OfficeIcon.svelte';

	let { user }: UserProfileProps = $props();

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<div
	class="bg-neutral-0 rounded-[15px] p-6 md:p-10 lg:p-12 shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.2)]"
>
	<!-- Avatar and Basic Info -->
	<div class="flex flex-col md:flex-row gap-6 md:gap-10 mb-6 md:mb-8">
		<img
			src={user.avatar_url}
			alt={`${user.login}'s avatar`}
			class="w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full flex-shrink-0"
		/>

		<div class="flex-1 min-w-0">
			<div class="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
				<h2 class="text-preset-2 md:text-preset-1 text-neutral-900 mb-1 md:mb-0">
					{user.name || user.login}
				</h2>
				<p class="text-preset-6 text-neutral-500">
					Joined {formatDate(user.created_at)}
				</p>
			</div>

			<p class="text-preset-5 text-blue-500 mb-5 md:mb-6">
				@{user.login}
			</p>

			{#if user.bio}
				<p class="text-preset-4 text-neutral-700 leading-[25px]">
					{user.bio}
				</p>
			{:else}
				<p class="text-preset-4 text-neutral-500 leading-[25px]">This profile has no bio</p>
			{/if}
		</div>
	</div>

	<!-- Stats -->
	<div class="bg-neutral-100 rounded-[10px] p-4 md:py-4 md:px-8 mb-6 md:mb-9 lg:mb-[37px]">
		<div class="grid grid-cols-3 gap-2 md:gap-24">
			<div class="text-center md:text-left">
				<p class="text-preset-7 text-neutral-500 mb-2">Repos</p>
				<p class="text-preset-2 md:text-preset-1 text-neutral-900">
					{user.public_repos.toLocaleString()}
				</p>
			</div>
			<div class="text-center md:text-left">
				<p class="text-preset-7 text-neutral-500 mb-2">Followers</p>
				<p class="text-preset-2 md:text-preset-1 text-neutral-900">
					{user.followers.toLocaleString()}
				</p>
			</div>
			<div class="text-center md:text-left">
				<p class="text-preset-7 text-neutral-500 mb-2">Following</p>
				<p class="text-preset-2 md:text-preset-1 text-neutral-900">
					{user.following.toLocaleString()}
				</p>
			</div>
		</div>
	</div>

	<!-- Links -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-[91px] md:gap-y-5">
		<div class="flex items-center gap-[13px] md:gap-5">
			<LocationIcon />
			<span class="text-preset-4 text-neutral-700 truncate {user.location ? '' : 'opacity-50'}">
				{user.location || 'Not Available'}
			</span>
		</div>

		<div class="flex items-center gap-[13px] md:gap-5">
			<WebsiteIcon />
			{#if user.blog}
				<a
					href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
					target="_blank"
					rel="noopener noreferrer"
					class="text-preset-4 text-neutral-700 hover:underline transition-colors truncate"
				>
					{user.blog}
				</a>
			{:else}
				<span class="text-preset-4 text-neutral-500 opacity-50">Not Available</span>
			{/if}
		</div>

		<div class="flex items-center gap-[13px] md:gap-5">
			<TwitterIcon />
			{#if user.twitter_username}
				<a
					href={`https://twitter.com/${user.twitter_username}`}
					target="_blank"
					rel="noopener noreferrer"
					class="text-preset-4 text-neutral-700 hover:underline transition-colors truncate"
				>
					@{user.twitter_username}
				</a>
			{:else}
				<span class="text-preset-4 text-neutral-500 opacity-50">Not Available</span>
			{/if}
		</div>

		<div class="flex items-center gap-[13px] md:gap-5">
			<OfficeIcon />
			<span class="text-preset-4 text-neutral-700 truncate {user.company ? '' : 'opacity-50'}">
				{user.company || 'Not Available'}
			</span>
		</div>
	</div>
</div>
