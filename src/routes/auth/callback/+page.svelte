<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('code');
		const error = urlParams.get('error');

		if (error) {
			// Handle OAuth error
			console.error('OAuth error:', error);
			window.location.href = '/';
		} else if (code) {
			// Exchange code for access token
			try {
				const response = await fetch('/auth/token', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ code })
				});

				const data = await response.json();

				if (data.error) {
					console.error('Token exchange error:', data.error);
					window.location.href = '/dashboard?error=auth_failed';
				} else {
					localStorage.setItem('github_token', data.access_token);
					window.location.href = '/dashboard';
				}
			} catch (err) {
				console.error('Failed to exchange token:', err);
				window.location.href = '/dashboard?error=auth_failed';
			}
		} else {
			// No code or error, redirect to home
			window.location.href = '/';
		}
	});
</script>

<main
	class="min-h-screen bg-neutral-100 px-6 py-8 md:px-0 md:py-9 w-full max-w-[327px] md:max-w-[704px] lg:max-w-[730px] mx-auto flex items-center justify-center"
>
	<div class="text-center">
		<h1 class="text-preset-1 text-neutral-900 mb-4">Processing login...</h1>
		<p class="text-preset-6 text-neutral-500">Please wait while we complete your authentication.</p>
	</div>
</main>
