import { redirect } from '@sveltejs/kit';
import { GITHUB_CLIENT_ID } from '$env/static/private';

export async function GET() {
	const scope = 'read:user,user:email,read:org';
	const state = crypto.randomUUID(); // Simple state for CSRF protection

	const url = new URL('https://github.com/login/oauth/authorize');
	url.searchParams.set('client_id', GITHUB_CLIENT_ID);
	url.searchParams.set('scope', scope);
	url.searchParams.set('state', state);
	url.searchParams.set('redirect_uri', 'http://localhost:5173/auth/callback'); // Adjust for production

	throw redirect(302, url.toString());
}
