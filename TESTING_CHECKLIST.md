# Visual Testing Checklist

## Setup

1. Fix WSL bash environment or run commands directly in PowerShell/CMD
2. Run `npm run dev` to start development server
3. Open browser to `http://localhost:5173`
4. Open browser DevTools (F12)

## Pre-Testing: Run Automated Tests

```bash
npm run test:unit     # Unit tests
npm run test:e2e      # E2E tests
npm run check         # Type checking
npm run lint          # Linting
```

---

## 1. Search Bar Component Testing

### Visual Checks (Desktop - 1440px)

- [ ] Height: 69px
- [ ] Border radius: 15px
- [ ] Shadow: Soft blue shadow visible
- [ ] Search icon: Positioned 32px from left edge (left-8 = 32px)
- [ ] Search icon: Blue color (#0079FF)
- [ ] Input text: 18px font size (preset-3)
- [ ] Placeholder: "Search GitHub username..." in light gray
- [ ] Search button: Positioned 10px from right edge
- [ ] Search button: Height 50px, blue background (#0079FF)
- [ ] Search button: Border radius 10px
- [ ] Search button: "Search" text bold, white color

### Visual Checks (Mobile - 375px)

- [ ] Height: 60px
- [ ] Search icon: Positioned 16px from left edge (left-4 = 16px)
- [ ] Input text: 13px font size (preset-4)
- [ ] Search button: Positioned 7px from right edge
- [ ] Search button: Height 46px

### Interaction Tests

- [ ] Type text in search bar - input value updates
- [ ] Click "Search" button - triggers search
- [ ] Press Enter key - triggers search
- [ ] Hover search button - changes to lighter blue (#90A4D4)
- [ ] Button disabled when input empty - grayed out, no hover effect
- [ ] Loading state - button shows "Searching...", input disabled
- [ ] Error state - "No results" appears in red between input and button

---

## 2. Header Component Testing

### Visual Checks (All Sizes)

- [ ] "devfinder" text: 26px, bold, neutral-500 color
- [ ] Theme toggle: "DARK" or "LIGHT" text
- [ ] Theme toggle text: Uppercase, 2.5px letter spacing
- [ ] Theme toggle text: 13px, bold, neutral-400 color
- [ ] Icon next to text: Moon (light mode) or Sun (dark mode)
- [ ] Margin bottom: 36px

### Interaction Tests

- [ ] Click theme toggle - switches between light/dark mode
- [ ] Theme toggle hover - text changes to neutral-500
- [ ] Page persists theme selection on refresh (localStorage)

---

## 3. User Profile Component Testing

### Visual Checks (Desktop - 1440px)

- [ ] Card: White background (light) or dark-blue-400 (dark)
- [ ] Card: Border radius 15px
- [ ] Card: Shadow visible
- [ ] Card: Padding 48px
- [ ] Avatar: 117px × 117px, circular
- [ ] Avatar: Positioned top-left
- [ ] Name: 26px, bold (preset-1)
- [ ] Username: 16px, blue (#0079FF), prefixed with "@"
- [ ] Joined date: 15px, neutral-400
- [ ] Bio: 15px, line height 25px, max 3 lines
- [ ] Stats section: Background neutral-50 (light) or dark-blue-500 (dark)
- [ ] Stats section: Border radius 10px, padding 15px 32px
- [ ] Stats section: 3 columns with 91px gap
- [ ] Each stat: Label (13px, neutral-400) above value (22px, bold)
- [ ] Links section: 2 columns with 91px horizontal gap, 20px vertical gap
- [ ] Each link: Icon (20px) + text (15px), 13px gap between icon and text
- [ ] Unavailable links: Opacity 0.5

### Visual Checks (Mobile - 375px)

- [ ] Avatar: 70px × 70px
- [ ] Header: Centered layout with avatar on left
- [ ] Stats: Single column, stacked vertically
- [ ] Links: Single column, stacked vertically

### Data Display Tests

- [ ] Search "octocat" - Shows GitHub Octocat profile
- [ ] Verify all data fields populate correctly
- [ ] Verify null bio shows "This profile has no bio"
- [ ] Verify null fields (twitter, blog, etc.) show grayed out
- [ ] Verify company name removes "@" prefix if present
- [ ] Verify website links are clickable and open in new tab

---

## 4. Theme Switching Testing

### Light Theme

- [ ] Background: #F6F8FF (neutral-100)
- [ ] Card background: #FEFEFE (neutral-0)
- [ ] Text primary: #2B3442 (neutral-500)
- [ ] Text secondary: #697C9A (neutral-400)
- [ ] Stats background: #F6F8FF (neutral-50)
- [ ] Icons: #4B6A9B (neutral-300)
- [ ] Theme toggle shows: "DARK" with moon icon

### Dark Theme

- [ ] Background: #141D2F (dark-blue-500)
- [ ] Card background: #1E2A47 (dark-blue-400)
- [ ] Text primary: #FFFFFF (neutral-0)
- [ ] Text secondary: #FFFFFF (neutral-0)
- [ ] Stats background: #141D2F (dark-blue-500)
- [ ] Icons: #FFFFFF (white)
- [ ] Theme toggle shows: "LIGHT" with sun icon

### Transition Tests

- [ ] Switch light → dark: Smooth transition, no flicker
- [ ] Switch dark → light: Smooth transition, no flicker
- [ ] All icons update color correctly
- [ ] All text updates color correctly
- [ ] Shadows update correctly (lighter in dark mode)

---

## 5. Responsive Breakpoints Testing

### Mobile (375px width)

- [ ] Container width: 327px
- [ ] All components stack vertically
- [ ] Touch targets large enough (min 44px)
- [ ] No horizontal scrolling
- [ ] All text readable
- [ ] Icons properly sized

### Tablet (768px width)

- [ ] Container width: 704px
- [ ] Layout transitions smoothly
- [ ] Stats section shows 3 columns
- [ ] Links section shows 2 columns

### Desktop (1440px width)

- [ ] Container width: 730px
- [ ] Full desktop layout
- [ ] All spacing matches Figma (48px, 91px gaps)
- [ ] Maximum comfortable reading width

### In-Between Sizes

- [ ] Test 400px, 600px, 1024px, 1920px
- [ ] No layout breaks or overflows
- [ ] Container centers properly

---

## 6. Icon Testing

All icons should use correct SVG paths from Figma:

### SearchIcon (25×24)

- [ ] Magnifying glass shape
- [ ] Blue color in light mode
- [ ] White color in dark mode

### MoonIcon (20×20)

- [ ] Crescent moon shape
- [ ] Shows in light mode header

### SunIcon (20×20)

- [ ] Sun with rays
- [ ] Shows in dark mode header

### LocationIcon (14×20)

- [ ] Map pin shape
- [ ] Proper aspect ratio

### WebsiteIcon (20×20)

- [ ] Chain link icon
- [ ] Both links connected

### TwitterIcon (20×17)

- [ ] Twitter/X bird shape
- [ ] Proper proportions

### OfficeIcon (20×20)

- [ ] Building/office shape
- [ ] Windows visible

---

## 7. Error Handling Testing

### No User Found

- [ ] Search "definitelynotarealuser12345"
- [ ] Error message "No results" appears in red
- [ ] Error message positioned right of input, left of button
- [ ] Previous results (if any) remain visible
- [ ] Button still enabled for retry

### Network Error

- [ ] Disconnect internet
- [ ] Search any username
- [ ] Appropriate error handling
- [ ] App doesn't crash

### Empty Search

- [ ] Try to search with empty input
- [ ] Button is disabled
- [ ] No API call made

---

## 8. Loading States Testing

- [ ] Click search → "Searching..." appears on button
- [ ] Input becomes disabled during search
- [ ] Button becomes disabled during search
- [ ] Loading spinner or visual feedback (if added)
- [ ] Previous results remain visible during new search

---

## 9. Accessibility Testing

### Keyboard Navigation

- [ ] Tab to search input - focus visible
- [ ] Tab to search button - focus visible
- [ ] Tab to theme toggle - focus visible
- [ ] Enter in search input - triggers search
- [ ] Space on buttons - activates buttons
- [ ] Links in profile - keyboard accessible

### Screen Reader

- [ ] Run with screen reader (NVDA, JAWS, VoiceOver)
- [ ] All interactive elements announced
- [ ] Form labels present
- [ ] Error messages announced
- [ ] Loading states announced

### ARIA Attributes

- [ ] `aria-label` on search input
- [ ] `aria-invalid` on error state
- [ ] `aria-describedby` for error message
- [ ] Proper heading hierarchy (h1, h2, etc.)

---

## 10. Cross-Browser Testing

Test in:

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

Check:

- [ ] Layouts consistent
- [ ] Fonts render correctly
- [ ] Shadows appear correctly
- [ ] Hover states work
- [ ] Transitions smooth

---

## Known Issues to Fix

1. **SearchBar icon positioning** - Verify the search icon appears correctly at left-4 (mobile) / left-8 (desktop)
2. **Theme persistence** - Verify theme is saved to localStorage and restored on page load
3. **Shadow rendering** - Verify the blue shadow on SearchBar renders correctly in both themes

---

## Performance Checks

- [ ] Initial page load < 2 seconds
- [ ] API response < 1 second for typical user
- [ ] Theme toggle instant
- [ ] No layout shift during load
- [ ] Images load progressively
- [ ] No console errors
- [ ] No console warnings (except expected ones)

---

## Final Comparison

1. Open Figma design side-by-side with running app
2. Compare pixel-by-pixel at 1440px, 768px, 375px
3. Document any discrepancies found
4. Fix discrepancies
5. Repeat until perfect match

---

## Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Testing
npm run test:unit        # Run Vitest unit tests
npm run test:e2e         # Run Playwright E2E tests
npm run test             # Run all tests

# Quality
npm run check            # TypeScript type checking
npm run lint             # ESLint + Prettier check
npm run format           # Format with Prettier

# Build
npm run build            # Production build
npm run preview          # Preview production build
```
