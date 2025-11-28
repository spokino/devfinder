import { redirect } from '@sveltejs/kit';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';

export async function GET({ url }) {
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');

	if (!code) {
		throw redirect(302, '/?error=no_code');
	}

	// Exchange code for token
	const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept: 'application/json'
		},
		body: new URLSearchParams({
			client_id: GITHUB_CLIENT_ID,
			client_secret: GITHUB_CLIENT_SECRET,
			code,
			redirect_uri: 'http://localhost:5173/auth/callback' // Match the one used in authorize
		})
	});

	const tokenData = await tokenResponse.json();

	if (tokenData.error) {
		throw redirect(302, '/?error=token_exchange_failed');
	}

	const accessToken = tokenData.access_token;

	// Redirect back to client with token (not secure, but for demo)
	// In production, use a more secure method, like setting a session cookie
	throw redirect(302, `/dashboard?token=${accessToken}`);
}
