## we will be using figma design here https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app with the use of

## add the figma design detials to the agents.md file

Plan a new feature that will contain:

User should be able to search by username with the use of github API: GET https://api.github.com/users/{username}
Display found date from API public profile:

- Avatar, name, username
- Bio, location, website
- Stats: Public Repos | Followers | Following
- Join date
- Repos count Create Responsive design (mobile + desktop) base on the figma design with the use of tailwind Create a switch for Light mode / Dark mode
  plan all tasks use svelte5 if needed get documentation from context7 mcp
  read @Agents.md
  use the provided figma desing

Lets start a new feature for this app.
Read @AGENTS.md to get context. For the added UI elements see figma design.
The feature is:
Add a login button ("Sign in with GitHub") in the header, It should then start the OAuth flow so the user can login
Use the prepared @.env file for oauth client details.
After obtaining the auth token it should be stored in localStorage.
Add Session management (login / logout)
When the user logs in successfuly show a new link in the header with the user avatar and user name.
This route is just for the logged in user.
It will navigate to a new page that will show dashboard for the current user.
Use the same card as for the search result and under that show public repos list (top 10):
Repo name (link na GitHub)
Description
Stars
count
Primary language
Last updated
