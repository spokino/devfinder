# AGENTS.md - Development Guidelines

## Build/Lint/Test Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - Type check with svelte-check
- `npm run lint` - Run prettier and eslint
- `npm run format` - Format code with prettier
- `npm run test` - Run all tests (vitest)
- `npx vitest --run <file.spec.ts>` - Run single test file

## Code Style Guidelines

**Language:** TypeScript with strict mode enabled
**Formatting:** Prettier with tabs, single quotes, no trailing commas, 100 char width
**Linting:** ESLint with recommended rules for JS/TS/Svelte + Prettier integration
**Framework:** Svelte 5 with runes syntax ($props, $state, etc.)
**Styling:** Tailwind CSS v4
**Testing:** Vitest with browser testing support
**Imports:** Use $lib alias for internal imports
**Naming:** camelCase for variables/functions, PascalCase for components
**Error Handling:** TypeScript strict mode enforces proper error handling
**Types:** Define interfaces in app.d.ts for global types

## Figma Design System

**Figma File:** https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app

**Typography:**

- Font Family: Space Mono (Regular, Bold)
- Text Presets: 1-8 (13px to 26px)
- Line Heights: 120%-150%

**Color Palette:**

- Neutral: #141D2F (900) to #FFFFFF (0)
- Blue: #0079FF (primary), #60ABFF (hover)
- Red: #F74646 (error)
- Light Mode: White backgrounds, dark text
- Dark Mode: #1E2A47 backgrounds, white text

**Spacing System:** 0, 2px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px

**Border Radius:** 0, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, full

**Components:**

- Logo: "devfinder" text
- Theme Toggle: Sun/Moon icons
- Search Bar: Light/Dark variants with Default, Focus, Hover, Error, Active states
- User Profile: Avatar, name, username, bio, stats, links
- Icons: Search, location, Twitter, URL, company, etc.

**Responsive Layouts:**

- Desktop (1440px): Full layout with sidebar stats
- Tablet (768px): Condensed layout
- Mobile (375px): Stacked vertical layout

**Key Features:**

- Light/Dark mode toggle
- GitHub user search with error handling
- User profile display (avatar, stats, links)
- Responsive design matching Figma layouts

## Project Structure

- `src/routes/` - SvelteKit routes
- `src/lib/` - Shared utilities and components
- `src/app.d.ts` - Global type definitions
- Tests in `*.spec.ts` files alongside components
