import { json } from '@sveltejs/kit';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';

export async function POST({ request }) {
	try {
		const { code } = await request.json();

		if (!code) {
			return json({ error: 'Code is required' }, { status: 400 });
		}

		const response = await fetch('https://github.com/login/oauth/access_token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				client_id: GITHUB_CLIENT_ID,
				client_secret: GITHUB_CLIENT_SECRET,
				code
			})
		});

		const data = await response.json();

		if (data.error) {
			return json({ error: data.error_description || data.error }, { status: 400 });
		}

		return json({ access_token: data.access_token });
	} catch (error) {
		console.error('Token exchange error:', error);
		return json({ error: 'Failed to exchange token' }, { status: 500 });
	}
}
