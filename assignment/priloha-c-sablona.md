# AI Workflow Dokumentácia

**Meno:** Filip T

**Dátum začiatku:** 28.11.2025 13:15

**Dátum dokončenia:** 28.11.2025

**Zadanie:** Frontend

---

## 1. Použité AI Nástroje

Vyplň približný čas strávený s každým nástrojom:

- [ ] **Cursor IDE:** **\_** hodín
- [ ] **Claude Code:** **\_** hodín
- [ ] **GitHub Copilot:** **\_** hodín
- [ ] **ChatGPT:** **\_** hodín
- [ ] **Claude.ai:** **\_** hodín
- [ ] **Iné:** opencode (grok)

**Celkový čas vývoja (priližne):** **\_** hodín

---

## 2. Zbierka Promptov

> 💡 **Tip:** Kopíruj presný text promptu! Priebežne dopĺňaj po každej feature.

### Prompt #0: ****************\_****************

**Nástroj:** [ opencode ]  
**Kontext:** [ Setup projektu ]

**Prompt:**

```
/init

we will be using figma design here https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app with the use of figma mcp

create the AGENTS.md file

add the figma design detials to the agents.md file

```

### Prompt #1: ****************\_****************

**Nástroj:** [ opencode ]  
**Kontext:** [ Setup projektu ]

**Prompt:**

```
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

implement the plan
```

**Výsledok:**  
[ ] ✅ Fungoval perfektne (first try)  
[ ] ⭐⭐⭐⭐ Dobré, potreboval malé úpravy  
[x] ⭐⭐⭐ OK, potreboval viac úprav  
[ ] ⭐⭐ Slabé, musel som veľa prepísať  
[ ] ❌ Nefungoval, musel som celé prepísať

**Čo som musel upraviť / opraviť:**

```
Nefungoval prepinac dakr modu, dizajn celkom nesedel s figmou
```

**Poznámky / Learnings:**

```
[Prečo fungoval / nefungoval? Čo by si urobil inak?]
```

### Prompt #2: ****************\_****************

**Nástroj:** [ opencode ]  
**Kontext:** ********\_********

**Prompt:**

```
the implementation is not bad but the dark mode switch is not working and you did not follow the page layout from the figma design (4 icons with details), also make the page title devfinder clickable and redirect to ~/
you can view the result, here it is in a running instance http://localhost:5173/

```

**Výsledok:**  
[x] ⭐⭐⭐ OK, potreboval viac úprav

**Úpravy:**

```
Pridal ikony a upravil design ale dakr mode na light switch nefunguje stale.
```

**Poznámky:**

```

```

---

### Prompt #3: ****************\_****************

**Nástroj:** [ opencode ]  
**Kontext:** ********\_********

**Prompt:**

```
do not run npm run dev it will timeout.
instead use the running server at http://localhost:5173/ if needed.
the darl/light switch is still not working

```

**Výsledok:**  
❌ Nefungoval

**Úpravy:**

```
Zmenil sposob zmeny css pre dark/light mode
```

**Poznámky:**

```

```

---

### Prompt #4: ****************\_****************

**Nástroj:** [ opencode ]  
**Kontext:** ********\_********

**Prompt:**

```
[plugin:@tailwindcss/vite:generate:serve] `@config` cannot have a body.
E:/MyWork/Repos/aicert/app/src/routes/layout.css

```

**Výsledok:**  
✅ Fungoval perfektne (first try)

**Úpravy:**

```
fixol problem ktory rovno v konzole vyskusal a overil
```

**Poznámky:**

```

```

---

### Prompt #5: ****************\_****************

**Nástroj:** [ opencode ]  
**Kontext:** ********\_********

**Prompt:**

```
When the user is not found the text next to the search button is wrong
also there is missing the panel under that see the figma error screen
the mobile view has wrong wraping after the profile picture

```

**Výsledok:**  
⭐⭐ Slabé, musel som veľa prepísať

**Úpravy:**

```

```

**Poznámky:**

```
Panel sa uz zobrazuje ale nie je podla dizajnu
```

---

### Prompt #6: ****************\_****************

**Nástroj:** [ opencode ]  
**Kontext:** ********\_********

**Prompt:**

```
When the user is not found the text next to the search button is wrong
also there is missing the panel under that see the figma error screen
the mobile view has wrong wraping after the profile picture

```

**Výsledok:**  
⭐⭐ Slabé, musel som veľa prepísať

**Úpravy:**

```

```

**Poznámky:**

```
Panel sa uz zobrazuje ale nie je podla dizajnu
```

---

## 3. Problémy a Riešenia

> 💡 **Tip:** Problémy sú cenné! Ukazujú ako riešiš problémy s AI.

### Problém #1: ****************\_****************

**Čo sa stalo:**

```
Komplikovanejsie veci bolo potrebne viac krat opraovavat aby sa Grok dopracoval k zelanemu vysledku.
```

**Prečo to vzniklo:**

```
Grok - tento LLM model je super rychly na jednoduchsie veci ale pri takychto komplikovanejsich promptoch ma problem dopracovat sa na prcy krat k zelanemu vysledku.
```

**Ako som to vyriešil:**

```
Upravil som prompt s informaciami co je zle a co treba opravit. Riesil by som to zmenul LLM na Sonnet.
```

**Čo som sa naučil:**

```
[Konkrétny learning pre budúcnosť - čo budeš robiť inak?]
```

**Screenshot / Kód:** [ ] Priložený

---

### Problém #2: ****************\_****************

**Čo sa stalo:**

```

```

**Prečo:**

```

```

**Riešenie:**

```

```

**Learning:**

```

```

## 4. Kľúčové Poznatky

### 4.1 Čo fungovalo výborne

**1.**

```
[Príklad: Claude Code pre OAuth - fungoval first try, zero problémov]
```

**2.**

```

```

**3.**

```

```

**[ Pridaj viac ak chceš ]**

---

### 4.2 Čo bolo náročné

**1.**

```
Tieto horsie LLM mali vaci problem presne dodrzat dizajn a bolo potrebne ich viac usmernovat. 
```

**2.**

```

```

**3.**

```

```

---

### 4.3 Best Practices ktoré som objavil

**1.**

```
[Príklad: Vždy špecifikuj verziu knižnice v prompte - "NextAuth.js v5"]
```

**2.**

```

```

**3.**

```

```

**4.**

```

```

**5.**

```

```

---

### 4.4 Moje Top 3 Tipy Pre Ostatných

**Tip #1:**

```
[Konkrétny, actionable tip]
```

**Tip #2:**

```

```

**Tip #3:**

```

```

---

## 6. Reflexia a Závery

### 6.1 Efektivita AI nástrojov

**Ktorý nástroj bol najužitočnejší?** ****************\_****************

**Prečo?**

```
Claude jedoznacne vyhrava ako LLM. Ale velmi zalezi od potreby pouzitia. Spravit API call vie asi kazdy OK ale pokial ide o frontend dizajn komplexnejsie LLM vedia urobit presnejsiu pracu. 

MCP chrome-devtools je velmi uzitocny, vie si web otvorit a pozriet co spravil a opravit svoje halucinacie.

```

**Ktorý nástroj bol najmenej užitočný?** ****************\_****************

**Prečo?**

```

```

---

### 6.2 Najväčšie prekvapenie

```
[Čo ťa najviac prekvapilo pri práci s AI?]
```

---

### 6.3 Najväčšia frustrácia

```
[Čo bolo najfrustrujúcejšie?]
```

---

### 6.4 Najväčší "AHA!" moment

```
[Kedy ti došlo niečo dôležité o AI alebo o developmente?]
```

---

### 6.5 Čo by som urobil inak

```
[Keby si začínal znova, čo by si zmenil?]
```

### 6.6 Hlavný odkaz pre ostatných

```
[Keby si mal povedať jednu vec kolegom o AI development, čo by to bylo?]
```
