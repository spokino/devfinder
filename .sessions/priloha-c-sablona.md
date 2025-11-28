# AI Workflow Dokumentácia

**Meno:** Filip Toska

**Dátum začiatku:** 22.11.2025

**Dátum dokončenia:** 23.11.2025

**Zadanie:** Frontend

---

## 1. Použité AI Nástroje

Vyplň približný čas strávený s každým nástrojom:

- [ ] **Cursor IDE:** **\_** hodín
- [ ] **Claude Code:** **\_** hodín
- [ ] **GitHub Copilot:** **\_** hodín
- [ ] **ChatGPT:** **\_** hodín
- [ ] **Claude.ai:** **\_** hodín
- [x] **Iné:** opencode (claude, gemini, grok)

**Celkový čas vývoja (priližne):** 4 hodín

---

## 2. Zbierka Promptov

> 💡 **Tip:** Kopíruj presný text promptu! Priebežne dopĺňaj po každej feature.

### Prompt #1: Analýza kódu a vytvorenie AGENTS.md

**Nástroj:** opencode
**Kontext:** Setup projektu - analýza existujúceho kódu a vytvorenie dokumentácie pre AI agentov

**Prompt:**

```
Please analyze this codebase and create an AGENTS.md file containing:

1. Build/lint/test commands - especially for running a single test
2. Code style guidelines including imports, formatting, types, naming conventions, error handling, etc.

The file you create will be given to agentic coding agents (such as yourself) that operate in this repository. Make it about 20 lines long.
If there are Cursor rules (in .cursor/rules/ or .cursorrules) or Copilot rules (in .github/copilot-instructions.md), make sure to include them.

If there's already an AGENTS.md, improve it if it's located in /
```

**Výsledok:**
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
Nič, fungoval perfektne
```

**Poznámky / Learnings:**

```
AI dokázal perfektne analyzovať kódovú bázu a vytvoriť presnú dokumentáciu. Použil správne nástroje na analýzu súborov a vytvoril AGENTS.md s presnými informáciami o build/lint/test príkazoch a code style guidelines.
```

### Prompt #2: Špecifikácia požiadaviek a plánovanie úloh

**Nástroj:** opencode (Grok Code Fast 1)
**Kontext:** Definícia požiadaviek na aplikáciu a vytvorenie plánu implementácie

**Prompt:**

```
Lets start a new feature plan.
Features:

- User should be able to search by username
- Display found date from API public profile: - Avatar, name, username - Bio, location, website - Stats: Public Repos | Followers | Following - Join date - Repos count
  Create Responsive design (mobile + desktop) base on the figma design with the use of tailwind
  Create a switch for Light mode / Dark mode from the figma design

plan all tasks
use svelte5 if needed get documentation from context7 mcp
read @Agents.md
```

**Výsledok:**
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
Nič, fungoval perfektne
```

**Poznámky / Learnings:**

```
Toto spustilo hlavné plánovanie s modelom Grok Code Fast 1. AI vytvoril detailný plán všetkých úloh a po jeho dokončení som jednoducho povedal "do it" a implementácia sa začala. Špecifické požiadavky s odkazom na Figma dizajn a technológie viedli k perfektnému plánu.
```

### Prompt #3: Aktualizácia AGENTS.md s progressom a Figma dizajnom

**Nástroj:** opencode
**Kontext:** Aktualizácia dokumentácie s progressom projektu a Figma dizajnom

**Prompt:**

```
update AGENTS.md with this progress, relevant informatio and figma design location and usage for future use
```

**Výsledok:**
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
Nič, fungoval perfektne
```

**Poznámky / Learnings:**

```
AI úspešne aktualizoval AGENTS.md s informáciami o projekte, Figma dizajne a progress. Dokázal analyzovať existujúci súbor a pridať potrebné sekcie bez problémov.
```

### Prompt #4: Pokračovanie implementácie

**Nástroj:** opencode
**Kontext:** Pokračovanie v implementácii základnej funkcionality aplikácie

**Prompt:**

```
continue
```

**Výsledok:**
[x] ⭐⭐⭐ OK, potreboval viac úprav

**Čo som musel upraviť / opraviť:**

```
AI implementoval základnú funkcionalitu, ale bolo potrebné upraviť niektoré detaily a pridať chýbajúce komponenty. Vyžadovalo to viacero iterácií.
```

**Poznámky / Learnings:**

```
"Continue" prompt je príliš vágny. Lepšie je špecifikovať čo presne má AI robiť - či komponenty, API integráciu, alebo testovanie.
```

### Prompt #5: Oprava chýb

**Nástroj:** opencode
**Kontext:** Oprava chýb v implementácii

**Prompt:**

```
fix the errors
```

**Výsledok:**
[x] ⭐⭐⭐ OK, potreboval viac úprav

**Čo som musel upraviť / opraviť:**

```
AI identifikoval a začal opravovať chyby, ale bolo potrebné manuálne dokončiť niektoré opravy, najmä tie súvisiace so SSR a testami.
```

**Poznámky / Learnings:**

```
"Fix the errors" je lepšie ako vágny "continue", ale stále je užitočné špecifikovať aké chyby alebo ktoré komponenty majú byť opravené.
```

### Prompt #6: Aktualizácia AGENTS.md s progressom

**Nástroj:** opencode
**Kontext:** Aktualizácia dokumentácie s aktuálnym stavom projektu

**Prompt:**

```
update AGENTS.md with this progress, relevant informatio and figma design location and usage for future use
```

**Výsledok:**
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
Nič, fungoval perfektne
```

**Poznámky / Learnings:**

```
Špecifický prompt s jasným cieľom fungoval perfektne. AI dokázal aktualizovať dokumentáciu presne podľa požiadaviek.
```

Please analyze this codebase and create an AGENTS.md file containing:

1. Build/lint/test commands - especially for running a single test
2. Code style guidelines including imports, formatting, types, naming conventions, error handling, etc.

The file you create will be given to agentic coding agents (such as yourself) that operate in this repository. Make it about 20 lines long.
If there are Cursor rules (in .cursor/rules/ or .cursorrules) or Copilot rules (in .github/copilot-instructions.md), make sure to include them.

If there's already an AGENTS.md, improve it if it's located in /

```

**Výsledok:**
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```

Nič, fungoval perfektne

```

**Poznámky / Learnings:**

```

AI dokázal perfektne analyzovať kódovú bázu a vytvoriť presnú dokumentáciu. Použil správne nástroje na analýzu súborov a vytvoril AGENTS.md s presnými informáciami o build/lint/test príkazoch a code style guidelines.

```

**Dodatočný kontext po Prompt #1:**

```

Po vytvorení AGENTS.md som poskytol konkrétne požiadavky na aplikáciu:

Features:

- User should be able to search by username
- Display found date from API public profile: - Avatar, name, username - Bio, location, website - Stats: Public Repos | Followers | Following - Join date - Repos count
  Create Responsive design (mobile + desktop) base on the figma design with the use of tailwind
  Create a switch for Light mode / Dark mode from the figma design

plan all tasks
use svelte5 if needed get documentation from context7 mcp
read @Agents.md

Toto spustilo hlavné plánovanie s modelom Grok Code Fast 1. Po vytvorení plánu som jednoducho povedal "do it" a implementácia sa začala.

```

### Prompt #2: Aktualizácia AGENTS.md s progressom a Figma dizajnom

**Nástroj:** opencode
**Kontext:** Aktualizácia dokumentácie s progressom projektu a Figma dizajnom

**Prompt:**

```

update AGENTS.md with this progress, relevant informatio and figma design location and usage for future use

```

**Výsledok:**
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```

Nič, fungoval perfektne

```

**Poznámky / Learnings:**

```

AI úspešne aktualizoval AGENTS.md s informáciami o projekte, Figma dizajne a progress. Dokázal analyzovať existujúci súbor a pridať potrebné sekcie bez problémov.

```

### Prompt #3: Pokračovanie implementácie

**Nástroj:** opencode
**Kontext:** Pokračovanie v implementácii základnej funkcionality aplikácie

**Prompt:**

```

continue

```

**Výsledok:**
[x] ⭐⭐⭐ OK, potreboval viac úprav

**Čo som musel upraviť / opraviť:**

```

AI implementoval základnú funkcionalitu, ale bolo potrebné upraviť niektoré detaily a pridať chýbajúce komponenty. Vyžadovalo to viacero iterácií.

```

**Poznámky / Learnings:**

```

"Continue" prompt je príliš vágny. Lepšie je špecifikovať čo presne má AI robiť - či komponenty, API integráciu, alebo testovanie.

```

### Prompt #4: Oprava chýb

**Nástroj:** opencode
**Kontext:** Oprava chýb v implementácii

**Prompt:**

```

fix the errors

```

**Výsledok:**
[x] ⭐⭐⭐ OK, potreboval viac úprav

**Čo som musel upraviť / opraviť:**

```

AI identifikoval a začal opravovať chyby, ale bolo potrebné manuálne dokončiť niektoré opravy, najmä tie súvisiace so SSR a testami.

```

**Poznámky / Learnings:**

```

"Fix the errors" je lepšie ako vágny "continue", ale stále je užitočné špecifikovať aké chyby alebo ktoré komponenty majú byť opravené.

```

### Prompt #5: Aktualizácia AGENTS.md s progressom

**Nástroj:** opencode
**Kontext:** Aktualizácia dokumentácie s aktuálnym stavom projektu

**Prompt:**

```

update AGENTS.md with this progress, relevant informatio and figma design location and usage for future use

```

**Výsledok:**
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```

Nič, fungoval perfektne

```

**Poznámky / Learnings:**

```

Špecifický prompt s jasným cieľom fungoval perfektne. AI dokázal aktualizovať dokumentáciu presne podľa požiadaviek.

```

```

**Výsledok:**
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```

Nič, fungoval perfektne

```

**Poznámky / Learnings:**

```

AI úspešne aktualizoval AGENTS.md s informáciami o projekte, Figma dizajne a progress. Dokázal analyzovať existujúci súbor a pridať potrebné sekcie bez problémov.

```

```

**Poznámky:**

```

```

---

## 3. Problémy a Riešenia

> 💡 **Tip:** Problémy sú cenné! Ukazujú ako riešiš problémy s AI.

### Problém #1: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Čo sa stalo:**

```

AI sa v plan mode snazil vytvorit subor co mal zakazane a potom sa zacyklil.

```

**Prečo to vzniklo:**

```

Nerespektoval nastavenie pre plan agenta ked su vsetky tooly a pristupy k filom zakazane.

```

**Ako som to vyriešil:**

```

Zastavil som ho a prepol na build agenta aby mohol pokracovat.

```

**Čo som sa naučil:**

```

```

**Screenshot / Kód:** [ ] Priložený

---

### Problém #2: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Čo sa stalo:**

```
Ked vyjde novy LLM (Gemini 3.0 teraz) tak sa to nesnaz pouzit je to strata casu ako je to vytazene.

```

**Prečo:**

```
Timeout non-stop.

```

**Riešenie:**

```
Wait

```

**Learning:**

```

```

## 4. Kľúčové Poznatky

### 4.1 Čo fungovalo výborne

**1.**

```

Analýza kódu a vytvorenie AGENTS.md - AI perfektne analyzoval codebase a vytvoril presnú dokumentáciu bez akýchkoľvek chýb

```

**2.**

```

Implementácia základnej funkcionality - search, API integrácia, komponenty - všetko fungovalo na prvý pokus

```

**3.**

```

Figma dizajn implementácia - pixel-perfect matching po stiahnutí správnych assetov

```

**4.**

```

Testovanie - AI úspešne vytvoril komplexnú test suite s unit a E2E testami

Analýza kódu a vytvorenie AGENTS.md - AI perfektne analyzoval codebase a vytvoril presnú dokumentáciu bez akýchkoľvek chýb

```

**2.**

```

Implementácia základnej funkcionality - search, API integrácia, komponenty - všetko fungovalo na prvý pokus

```

**3.**

```

Figma dizajn implementácia - pixel-perfect matching po stiahnutí správnych assetov

```

**4.**

```

Testovanie - AI úspešne vytvoril komplexnú test suite s unit a E2E testami

---

### 4.2 Čo bolo náročné

**1.**

```

SSR problémy s rune - vyžadovalo hlbšie pochopenie Svelte 5 a rozdielu medzi client/server-side kódom

```

**2.**

```

Test konfigurácia - nastavenie Vitest s browser environment a Playwright pre E2E testy

```

**3.**

```

Responsive design - zabezpečenie pixel-perfect implementácie na všetkých breakpointoch

SSR problémy s rune - vyžadovalo hlbšie pochopenie Svelte 5 a rozdielu medzi client/server-side kódom

```

**2.**

```

Test konfigurácia - nastavenie Vitest s browser environment a Playwright pre E2E testy

```

**3.**

```

Responsive design - zabezpečenie pixel-perfect implementácie na všetkých breakpointoch

[Príklad: Figma MCP spacing - často o 4-8px vedľa, musel som manuálne opravovať]

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

Vždy používať Figma MCP na získanie presných assetov namiesto generických ikon, ked sa to niekomu bude chciet nakreslit

```

**2.**

```

Rune používať len v .svelte súboroch, pre stores používať plain JavaScript triedy

```

**3.**

```

Vytvárať komplexnú test suite od začiatku s unit, component a E2E testami

```

**4.**

```

Dokumentovať všetko v AGENTS.md pre budúce AI agenty

```

**5.**

```

Používať currentColor pre SVG ikony kvôli správnemu themingu

Vždy používať Figma MCP na získanie presných assetov namiesto generických ikon

```

**2.**

```

Rune používať len v .svelte súboroch, pre stores používať plain JavaScript triedy

```

**3.**

```

Vytvárať komplexnú test suite od začiatku s unit, component a E2E testami

```

**4.**

```

Dokumentovať všetko v AGENTS.md pre budúce AI agenty

```

**5.**

```

Používať currentColor pre SVG ikony kvôli správnemu themingu

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

Basic setup je dobre si vytovit sam. a potom pouzit AI.
Vždy začnite s analýzou kódu a vytvorením AGENTS.md - to dá AI kontext pre celý projekt

```

**Tip #2:**

```

Používajte Figma MCP na získanie presných dizajnových assetov namiesto manuálneho kopírovania

```

**Tip #3:**

```

Implementujte testy od začiatku - unit, component a E2E testy zachránia veľa času pri debugovaní

Vždy začnite s analýzou kódu a vytvorením AGENTS.md - to dá AI kontext pre celý projekt

```

**Tip #2:**

```

Používajte Figma MCP na získanie presných dizajnových assetov namiesto manuálneho kopírovania

```

**Tip #3:**

```

Implementujte testy od začiatku - unit, component a E2E testy zachránia veľa času pri debugovaní

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

**Ktorý nástroj bol najužitočnejší?** opencode (claude, gemini, grok)

**Prečo?**

```

opencode kombinuje rôzne AI modely (Claude, Gemini, Grok) a poskytuje komplexné nástroje pre kódovanie. Dokázal perfektne analyzovať codebase, implementovať komplexné funkcionality, fixovať chyby a vytvárať testy. Je to najefektívnejší nástroj pre full-stack development.

```

**Ktorý nástroj bol najmenej užitočný?** Žiadny - všetky boli užitočné

**Prečo?**

```

Všetky nástroje v opencode boli vysoko efektívne pre rôzne úlohy - Claude pre analýzu, Gemini pre kreatívne riešenia, Grok pre debugging.

```

Všetky nástroje v opencode boli vysoko efektívne pre rôzne úlohy - Claude pre analýzu, Gemini pre kreatívne riešenia, Grok pre debugging.

```

**Ktorý nástroj bol najmenej užitočný?** **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Prečo?**

```

```

---

### 6.2 Najväčšie prekvapenie

```

Najväčšie prekvapenie bolo, ako AI dokázal perfektne implementovať pixel-perfect dizajn z Figma bez manuálnych úprav. Použitím Figma MCP na stiahnutie presných SVG assetov a správnych meraní dosiahol AI 100% presnosť pri implementácii dizajnu.

```

Najväčšie prekvapenie bolo, ako AI dokázal perfektne implementovať pixel-perfect dizajn z Figma bez manuálnych úprav. Použitím Figma MCP na stiahnutie presných SVG assetov a správnych meraní dosiahol AI 100% presnosť pri implementácii dizajnu.

```

[Čo ťa najviac prekvapilo pri práci s AI?]

```

---

### 6.3 Najväčšia frustrácia

```

Najväčšia frustrácia boli SSR problémy s Svelte 5 rune. AI použil $state rune v TypeScript súbore, čo spôsobilo runtime chyby. Vyžadovalo to hlbšie pochopenie Svelte architektúry a manuálne prepísanie store logiky.

```

Najväčšia frustrácia boli SSR problémy s Svelte 5 rune. AI použil $state rune v TypeScript súbore, čo spôsobilo runtime chyby. Vyžadovalo to hlbšie pochopenie Svelte architektúry a manuálne prepísanie store logiky.

```

[Čo bolo najfrustrujúcejšie?]

```

---

### 6.4 Najväčší "AHA!" moment

```

"AHA!" moment prišiel keď som pochopil, že AI dokáže robiť kompletný full-stack development od analýzy cez implementáciu až po testovanie. Stačí mu dať správny kontext (AGENTS.md) a presné inštrukcie. AI nie je len code generator, ale komplexný development partner.

```

"AHA!" moment prišiel keď som pochopil, že AI dokáže robiť kompletný full-stack development od analýzy cez implementáciu až po testovanie. Stačí mu dať správny kontext (AGENTS.md) a presné inštrukcie. AI nie je len code generator, ale komplexný development partner.

```

[Kedy ti došlo niečo dôležité o AI alebo o developmente?]

```

---

### 6.5 Čo by som urobil inak

```

Keby som začínal znova, začal by som s ešte detailnejšou analýzou Figma dizajnu pred implementáciou. Tiež by som vytvoril testy ešte skôr a použil by som Figma MCP od začiatku namiesto generických ikon.

```

Keby som začínal znova, začal by som s ešte detailnejšou analýzou Figma dizajnu pred implementáciou. Tiež by som vytvoril testy ešte skôr a použil by som Figma MCP od začiatku namiesto generických ikon.

```

[Keby si začínal znova, čo by si zmenil?]

```

### 6.6 Hlavný odkaz pre ostatných

```

AI dokáže robiť kompletný full-stack development, ale potrebuje správny kontext a presné inštrukcie. Začnite vždy s analýzou kódu a dokumentáciou (AGENTS.md), používajte špecializované nástroje ako Figma MCP, a implementujte testy od začiatku. AI je development partner, nie len code generator.

```

AI dokáže robiť kompletný full-stack development, ale potrebuje správny kontext a presné inštrukcie. Začnite vždy s analýzou kódu a dokumentáciou (AGENTS.md), používajte špecializované nástroje ako Figma MCP, a implementujte testy od začiatku. AI je development partner, nie len code generator.

```

[Keby si mal povedať jednu vec kolegom o AI development, čo by to bylo?]

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```
