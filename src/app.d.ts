// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

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
}

export {};
