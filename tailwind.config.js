/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'space-mono': ['Space Mono', 'monospace']
			},
			colors: {
				neutral: {
					900: 'var(--color-neutral-900)',
					800: 'var(--color-neutral-800)',
					700: 'var(--color-neutral-700)',
					500: 'var(--color-neutral-500)',
					300: 'var(--color-neutral-300)',
					200: 'var(--color-neutral-200)',
					100: 'var(--color-neutral-100)',
					0: 'var(--color-neutral-0)'
				},
				blue: {
					500: 'var(--color-blue-500)',
					300: 'var(--color-blue-300)'
				},
				red: {
					500: 'var(--color-red-500)'
				}
			},
			spacing: {
				15: '60px' // For the search bar height
			},
			borderRadius: {
				4: 'var(--radius-4)',
				6: 'var(--radius-6)',
				8: 'var(--radius-8)',
				10: 'var(--radius-10)',
				12: 'var(--radius-12)',
				16: 'var(--radius-16)',
				20: 'var(--radius-20)',
				24: 'var(--radius-24)'
			}
		}
	},
	plugins: []
};
