# Analyzing codebase for AGENTS.md creation/augmentation

**Session ID:** ses_552a7d268ffejBjT098gdNNdt4
**Created:** 11/22/2025, 9:53:48 PM
**Updated:** 11/22/2025, 9:54:26 PM

---

## User

Please analyze this codebase and create an AGENTS.md file containing:

1. Build/lint/test commands - especially for running a single test
2. Code style guidelines including imports, formatting, types, naming conventions, error handling, etc.

The file you create will be given to agentic coding agents (such as yourself) that operate in this repository. Make it about 20 lines long.
If there are Cursor rules (in .cursor/rules/ or .cursorrules) or Copilot rules (in .github/copilot-instructions.md), make sure to include them.

If there's already an AGENTS.md, improve it if it's located in /

---

## Assistant

```
Tool: list
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: list
```

---

## Assistant

```
Tool: glob
```

---

## Assistant

```
Tool: list
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: glob
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: write
```

---

## Assistant

I've analyzed the codebase and created an AGENTS.md file with the build/lint/test commands and code style guidelines. The file includes:

- All npm scripts from package.json, with specific commands for running single unit and e2e tests
- Code style guidelines derived from the ESLint, Prettier, and TypeScript configurations
- Framework conventions (Svelte 5 with runes, TypeScript strict mode)
- Import patterns, formatting rules, naming conventions, and testing approaches

No Cursor rules or Copilot instructions were found in the repository. The file is now ready for agentic coding agents to use when working in this SvelteKit project.

---

## ME

Features:

- User should be able to search by username
- Display found date from API public profile: - Avatar, name, username - Bio, location, website - Stats: Public Repos | Followers | Following - Join date - Repos count
  Create Responsive design (mobile + desktop) base on the figma design with the use of tailwind
  Create a switch for Light mode / Dark mode from the figma design

plan all tasks
use svelte5 if needed get documentation from context7 mcp
read @Agents.md
