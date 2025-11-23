# GitHub User Search App

A GitHub user search application built with Svelte 5, TypeScript, and Tailwind CSS. Search for any GitHub user and view their profile information including stats, bio, and social links. Features a beautiful dark/light theme toggle.

![GitHub User Search App](https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app)

## Features

- 🔍 Search GitHub users by username
- 🌓 Dark/Light theme toggle with persistence
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Svelte 5 runes for reactive state management
- 🎨 Styled with Tailwind CSS following design system
- ✅ Comprehensive unit and e2e tests
- 🔄 Loading states and error handling

## Tech Stack

- **Framework**: Svelte 5 with SvelteKit
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Testing**: Vitest (unit) + Playwright (e2e)
- **API**: GitHub REST API
- **Font**: Space Mono

## Design

Based on the [Frontend Mentor GitHub User Search App](https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app) challenge.

## Getting Started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev

# or open the app in a new browser tab
npm run dev -- --open
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with svelte-check
- `npm run lint` - Lint and format check
- `npm run format` - Format code with Prettier
- `npm run test` - Run all tests (unit + e2e)
- `npm run test:unit` - Run unit tests with Vitest
- `npm run test:e2e` - Run e2e tests with Playwright

## Project Structure

```
src/
├── lib/
│   ├── components/     # Svelte components
│   │   ├── icons/      # SVG icon components
│   │   ├── ErrorMessage.svelte
│   │   ├── Header.svelte
│   │   ├── LoadingSkeleton.svelte
│   │   ├── SearchBar.svelte
│   │   └── UserProfile.svelte
│   ├── api.ts          # GitHub API integration
│   ├── theme-store.ts  # Theme state management
│   └── types.ts        # TypeScript type definitions
├── routes/
│   ├── +layout.svelte  # App layout with theme
│   └── +page.svelte    # Main search page
└── app.css             # Global styles and design tokens
```

## Code Style

This project follows strict code style guidelines:

- Svelte 5 with runes syntax (`$props()`, `$state()`, etc.)
- TypeScript with strict mode
- Tabs for indentation, single quotes
- Prettier formatting with Svelte plugin
- camelCase for variables, PascalCase for components
- Explicit TypeScript types, prefer interfaces over types

See `AGENTS.md` for complete guidelines.

## Testing

Unit tests use Vitest with browser mode for component testing:

```sh
# Run all unit tests
npm run test:unit

# Run a specific test file
npx vitest run src/lib/api.spec.ts
```

E2E tests use Playwright:

```sh
# Run all e2e tests
npm run test:e2e

# Run a specific test
npx playwright test e2e/github-search.test.ts
```

## Deployment

Build the production version:

```sh
npm run build
```

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## License

This project is built as a learning exercise based on the Frontend Mentor challenge.
