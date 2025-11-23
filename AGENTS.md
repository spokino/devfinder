# AGENTS.md

## Project Overview

This project is a GitHub user search application built with Svelte 5 and TypeScript. It allows users to search for GitHub users and view their profiles.

- **Figma Design:** [GitHub User Search App](https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app)

## Progress

The application is in a good state. The basic functionality of searching for a user and displaying their profile is implemented. The application is styled with Tailwind CSS and has a dark mode feature. Unit and e2e tests are set up.


## Build/Lint/Test Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with svelte-check
- `npm run lint` - Lint and format check
- `npm run format` - Format code with Prettier
- `npm run test:unit` - Run unit tests with Vitest
- `npm run test:e2e` - Run e2e tests with Playwright
- `npm run test` - Run all tests
- `npx vitest run src/demo.spec.ts` - Run single unit test
- `npx playwright test e2e/demo.test.ts` - Run single e2e test

## Code Style Guidelines

### Framework & Language

- Svelte 5 with runes syntax (`$props()`, `$state()`, etc.)
- TypeScript with strict mode enabled
- ES modules with import/export

### Imports

- Use relative imports for local files
- Use `$lib/` alias for lib directory imports
- Group imports: external packages first, then internal imports

### Formatting

- Use tabs for indentation
- Single quotes for strings
- No trailing commas
- 100 character line width
- Prettier with Svelte plugin

### Naming Conventions

- camelCase for variables, functions, and components
- PascalCase for component names and types
- kebab-case for file names (Svelte convention)

### Types

- Use explicit TypeScript types
- Prefer interfaces over types for object shapes
- Use `unknown` over `any`

### Error Handling

- Use try/catch for async operations
- Throw descriptive Error objects
- Handle errors at appropriate levels

### Testing

- Vitest for unit tests (describe/it/expect)
- Playwright for e2e tests
- Component tests use vitest-browser-svelte

### Styling

- Tailwind CSS for utility classes
- Component-scoped styles when needed</content>
  <parameter name="filePath">AGENTS.md
