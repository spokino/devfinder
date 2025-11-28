<script lang="ts">
	let { user }: { user: GitHubUser } = $props();
</script>

<div class="bg-[rgb(var(--bg-card))] rounded-lg shadow-lg p-6 md:p-10">
	<div class="flex gap-5 md:gap-9">
		<img
			src={user.avatar_url}
			alt={user.name || user.login}
			class="w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full"
		/>

		<div class="flex-1">
			<div class="md:flex justify-between">
				<div>
					<h2 class="text-lg md:text-2xl font-bold text-[rgb(var(--text-main))]">
						{user.name || user.login}
					</h2>
					<p class="text-sm md:text-base text-[#0079FF]">@{user.login}</p>
				</div>
				<p class="text-sm md:text-base text-[rgb(var(--text-secondary))] mt-1 md:mt-0">
					Joined {new Date(user.created_at).toLocaleDateString('en-US', {
						day: '2-digit',
						month: 'short',
						year: 'numeric'
					})}
				</p>
			</div>

			<p class="mt-8 text-sm md:text-base text-[rgb(var(--text-main))] {user.bio ? '' : 'opacity-75'}">
				{user.bio || 'This profile has no bio'}
			</p>

			<div
				class="mt-6 bg-[rgb(var(--bg-main))] rounded-lg p-4 md:px-8 md:py-4 grid grid-cols-1 sm:grid-cols-3 text-center md:text-left gap-4"
			>
				<div class="flex justify-between items-center sm:block">
					<p class="text-xs md:text-sm text-[rgb(var(--text-secondary))]">Repos</p>
					<p class="text-base md:text-xl font-bold text-[rgb(var(--text-main))]">
						{user.public_repos}
					</p>
				</div>
				<div class="flex justify-between items-center sm:block">
					<p class="text-xs md:text-sm text-[rgb(var(--text-secondary))]">Followers</p>
					<p class="text-base md:text-xl font-bold text-[rgb(var(--text-main))]">
						{user.followers}
					</p>
				</div>
				<div class="flex justify-between items-center sm:block">
					<p class="text-xs md:text-sm text-[rgb(var(--text-secondary))]">Following</p>
					<p class="text-base md:text-xl font-bold text-[rgb(var(--text-main))]">
						{user.following}
					</p>
				</div>
			</div>

			<div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
				<div class="flex items-center gap-4 {user.location ? '' : 'opacity-50'}">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[rgb(var(--text-main))]">
						<path
							d="M10 2.5C6.40625 2.5 3.75 5.15625 3.75 8.75C3.75 13.4375 10 17.5 10 17.5C10 17.5 16.25 13.4375 16.25 8.75C16.25 5.15625 13.5938 2.5 10 2.5ZM10 11.25C8.6875 11.25 7.65625 10.2188 7.65625 8.90625C7.65625 7.59375 8.6875 6.5625 10 6.5625C11.3125 6.5625 12.3438 7.59375 12.3438 8.90625C12.3438 10.2188 11.3125 11.25 10 11.25Z"
							fill="currentColor"
						/>
					</svg>
					<span class="text-[rgb(var(--text-main))]">{user.location || 'Not Available'}</span>
				</div>
				<div class="flex items-center gap-4 {user.twitter_username ? '' : 'opacity-50'}">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[rgb(var(--text-main))]">
						<path
							d="M19.9999 2.76911C19.2577 3.0904 18.4601 3.30104 17.6249 3.38789C18.4843 2.8806 19.1437 2.06078 19.4437 1.08373C18.646 1.55337 17.7624 1.89364 16.8272 2.08428C16.0724 1.29165 15.0015 0.833374 13.8218 0.833374C11.5843 0.833374 9.76552 2.65212 9.76552 4.88966C9.76552 5.21095 9.80302 5.52095 9.86927 5.81966C6.56042 5.65901 3.63427 4.10348 1.66656 1.84216C1.31919 2.44351 1.12855 3.14223 1.12855 3.88966C1.12855 5.28051 1.85031 6.51095 2.93271 7.24723C2.26031 7.22448 1.62531 7.04512 1.07646 6.74779V6.80054C1.07646 8.75951 2.48688 10.4138 4.33271 10.7978C3.99646 10.8846 3.6374 10.9221 3.26709 10.9221C3.00459 10.9221 2.75334 10.8994 2.51334 10.8505C3.03948 12.4684 4.6249 13.6505 6.51552 13.688C5.11646 14.7815 3.36919 15.4409 1.47855 15.4409C1.14219 15.4409 0.817188 15.4182 0.5 15.3748C2.40146 16.6165 4.66188 17.3528 7.09052 17.3528C13.8106 17.3528 17.9199 11.7628 17.9199 6.90348C17.9199 6.73151 17.9199 6.56078 17.9086 6.39005C18.6249 5.87148 19.3749 5.18401 19.9999 4.37473"
							fill="currentColor"
						/>
					</svg>
					<a
						href={user.twitter_username ? `https://twitter.com/${user.twitter_username}` : '#'}
						target="_blank"
						rel="noopener noreferrer"
						class="text-[rgb(var(--text-main))] hover:underline">{user.twitter_username || 'Not Available'}</a
					>
				</div>
				<div class="flex items-center gap-4 {user.blog ? '' : 'opacity-50'}">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[rgb(var(--text-main))]">
						<path
							d="M4.16667 10.8333H15.8333C16.2917 10.8333 16.6667 10.4583 16.6667 10C16.6667 9.54167 16.2917 9.16667 15.8333 9.16667H4.16667C3.70833 9.16667 3.33333 9.54167 3.33333 10C3.33333 10.4583 3.70833 10.8333 4.16667 10.8333ZM10 5.83333C9.54167 5.83333 9.16667 5.45833 9.16667 5C9.16667 4.54167 9.54167 4.16667 10 4.16667H15.8333C16.2917 4.16667 16.6667 4.54167 16.6667 5C16.6667 5.45833 16.2917 5.83333 15.8333 5.83333H10ZM10 15.8333C9.54167 15.8333 9.16667 15.4583 9.16667 15C9.16667 14.5417 9.54167 14.1667 10 14.1667H15.8333C16.2917 14.1667 16.6667 14.5417 16.6667 15C16.6667 15.4583 16.2917 15.8333 15.8333 15.8333H10Z"
							fill="currentColor"
						/>
						<path
							d="M1.66669 17.5C2.58335 17.5 3.33335 16.75 3.33335 15.8333C3.33335 14.9167 2.58335 14.1667 1.66669 14.1667C0.75002 14.1667 0.0000190735 14.9167 0.0000190735 15.8333C0.0000190735 16.75 0.75002 17.5 1.66669 17.5Z"
							fill="currentColor"
						/>
						<path
							d="M1.66669 10.8333C2.58335 10.8333 3.33335 10.0833 3.33335 9.16667C3.33335 8.25 2.58335 7.5 1.66669 7.5C0.75002 7.5 0.0000190735 8.25 0.0000190735 9.16667C0.0000190735 10.0833 0.75002 10.8333 1.66669 10.8333Z"
							fill="currentColor"
						/>
						<path
							d="M1.66669 4.16667C2.58335 4.16667 3.33335 3.41667 3.33335 2.5C3.33335 1.58333 2.58335 0.833333 1.66669 0.833333C0.75002 0.833333 0.0000190735 1.58333 0.0000190735 2.5C0.0000190735 3.41667 0.75002 4.16667 1.66669 4.16667Z"
							fill="currentColor"
						/>
					</svg>
					<a
						href={user.blog || '#'}
						target="_blank"
						rel="noopener noreferrer"
						class="text-[rgb(var(--text-main))] hover:underline truncate">{user.blog || 'Not Available'}</a
					>
				</div>
				<div class="flex items-center gap-4 {user.company ? '' : 'opacity-50'}">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[rgb(var(--text-main))]">
						<path
							d="M1.66669 17.5V6.66667C1.66669 5.925 2.25835 5.33333 3.00002 5.33333H7.66669V4.03333C7.66669 3.29167 8.25835 2.7 9.00002 2.7H11C11.7417 2.7 12.3334 3.29167 12.3334 4.03333V5.33333H17C17.7417 5.33333 18.3334 5.925 18.3334 6.66667V17.5H1.66669ZM9.00002 5.33333H11V4.03333H9.00002V5.33333ZM12.3334 17.5V11.1C12.3334 10.3583 11.7417 9.76667 11 9.76667H9.00002C8.25835 9.76667 7.66669 10.3583 7.66669 11.1V17.5H4.33335V7.00001H15.6667V17.5H12.3334Z"
							fill="currentColor"
						/>
					</svg>
					<span class="text-[rgb(var(--text-main))]">{user.company || 'Not Available'}</span>
				</div>
			</div>
		</div>
	</div>
</div>
