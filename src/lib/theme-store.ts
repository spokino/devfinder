// Client-side only theme store
type Theme = 'light' | 'dark';

class ThemeStore {
	private _theme: Theme = 'light';
	private _listeners: ((theme: Theme) => void)[] = [];

	get theme(): Theme {
		return this._theme;
	}

	subscribe(listener: (theme: Theme) => void): () => void {
		this._listeners.push(listener);
		// Immediately call with current value
		listener(this._theme);
		return () => {
			this._listeners = this._listeners.filter((l) => l !== listener);
		};
	}

	toggleTheme(): void {
		this.setTheme(this._theme === 'light' ? 'dark' : 'light');
	}

	setTheme(newTheme: Theme): void {
		this._theme = newTheme;
		this.saveTheme();
		this.applyTheme();
		this.notifyListeners();
	}

	private saveTheme(): void {
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', this._theme);
		}
	}

	private applyTheme(): void {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('data-theme', this._theme);
		}
	}

	private notifyListeners(): void {
		this._listeners.forEach((listener) => listener(this._theme));
	}
}

// Create store only on client side
let themeStoreInstance: ThemeStore;

if (typeof window !== 'undefined') {
	themeStoreInstance = new ThemeStore();

	// Initialize theme from localStorage or system preference
	const savedTheme = localStorage.getItem('theme') as Theme;
	if (savedTheme) {
		themeStoreInstance.setTheme(savedTheme);
	} else {
		// Check system preference
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		themeStoreInstance.setTheme(prefersDark ? 'dark' : 'light');
	}

	// Listen for system theme changes
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		if (!localStorage.getItem('theme')) {
			themeStoreInstance.setTheme(e.matches ? 'dark' : 'light');
		}
	});
} else {
	// Server-side placeholder
	themeStoreInstance = new ThemeStore();
}

export const themeStore = themeStoreInstance;
