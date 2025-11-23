# Implementing logged-in header with avatar, username, and user dashboard feature planning

**Session ID:** ses_54e796a85ffe8NSO30NTPy6F1W
**Created:** 11/23/2025, 5:22:58 PM
**Updated:** 11/23/2025, 5:23:31 PM

---

## User

Create a new feature:
When the user logs in successfuly show a new link in the header with the user avatar and user name. This is just for logged in user. It will navigate to a new page that will show dashboard for the current user. Use the same card as for the search result and under that Show public repos list (top 10) 
Repo name (link na GitHub)
Description
Stars count
Primary language
Last updated 


---

## Assistant

```
Tool: todowrite
```

---

## Assistant

```
Tool: read
```

```
Tool: read
```

```
Tool: read
```

```
Tool: read
```

```
Tool: grep
```

---

## Assistant

```
Tool: read
```

```
Tool: read
```

```
Tool: grep
```

---

## Assistant

```
Tool: todowrite
```

---

## Assistant

```
Tool: read
```

---

## Assistant

```
Tool: todowrite
```

---

## Assistant

## Feature Plan: User Dashboard

### Overview
Add a dashboard feature for logged-in users, accessible via a header link showing their avatar and name. The dashboard displays the user's profile card (reusing existing UserProfile component) and a list of their top 10 public repositories.

### Key Changes
1. **Authentication State**: Extend current localStorage-based auth to include current user data fetching.
2. **Header Update**: Add user avatar/name link when logged in, redirecting to `/dashboard`.
3. **New Route**: Create `/dashboard/+page.svelte` for user dashboard.
4. **API Extensions**: Add `fetchCurrentUser()` and `fetchUserRepos()` functions.
5. **New Component**: Create `RepoList.svelte` to display repository details.
6. **Type Definitions**: Add `GitHubRepo` interface in `types.ts`.
7. **Post-Login Redirect**: Update auth callback to redirect to dashboard after successful login.

### Implementation Steps
- Update `src/lib/types.ts` to include `GitHubRepo` type.
- Extend `src/lib/api.ts` with new fetch functions.
- Modify `src/lib/components/Header.svelte` to show user link.
- Create `src/lib/components/RepoList.svelte`.
- Create `src/routes/dashboard/+page.svelte`.
- Update `src/routes/auth/callback/+page.svelte` for dashboard redirect.
- Update `src/routes/+page.svelte` to fetch and pass current user data.

### Dependencies
- Reuse existing `UserProfile.svelte` for consistency.
- Follow Svelte 5 runes syntax and project conventions.
- Ensure responsive design matches existing components.

---

