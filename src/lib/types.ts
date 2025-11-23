// GitHub API Types
export interface GitHubUser {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string | null;
	company: string | null;
	blog: string | null;
	location: string | null;
	email: string | null;
	hireable: boolean | null;
	bio: string | null;
	twitter_username: string | null;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
}

// Component Props Types
export interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
	onSearch: () => void;
	error?: string;
	loading?: boolean;
}

export interface UserProfileProps {
	user: GitHubUser;
}

export interface ErrorMessageProps {
	message: string;
}

// App State Types
export type SearchState = 'idle' | 'loading' | 'success' | 'error';

export interface AppState {
	searchQuery: string;
	user: GitHubUser | null;
	searchState: SearchState;
	errorMessage: string;
}
