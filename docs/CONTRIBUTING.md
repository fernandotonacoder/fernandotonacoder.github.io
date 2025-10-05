# Contributing Guide

## Development Setup

```bash
git clone https://github.com/fernandotonacoder/fernandotonacoder.github.io.git
cd fernandotonacoder.github.io
npm install
```

**Local development:** Open `src/index.html` in browser or use `python -m http.server 8000 -d src`

---

## Workflow

**Branch protection is enabled.** Always work on feature branches:

```bash
git checkout -b feature/your-feature
# make changes
git add .
git commit -m "Description"
git push origin feature/your-feature
# Create PR on GitHub
```

**CI/CD Pipeline:**

- **On PR:** Tests, linting, format checks
- **On merge to main:** Auto-deploys to GitHub Pages

---

## Commands

```bash
npm test              # Run Jest tests
npm run lint          # ESLint check
npm run lint:fix      # Auto-fix linting issues
npm run format        # Prettier format all files
npm run format:check  # Check if formatted correctly
```

---

## Architecture Decisions

### Translation System

**Why custom instead of i18n library?**

- No external dependencies
- Tiny footprint (~100 lines)
- Does exactly what we need, nothing more

**Language detection priority:**

1. localStorage (`language` key)
2. Browser language (`navigator.language`)
3. Fallback to English

**Translation keys:** Flat structure in `/locales/*.json`. HTML elements use `data-translate` attributes:

- `data-translate="key"` → Updates `textContent`
- `data-translate-alt="key"` → Updates `alt` attribute
- `data-translate-html="key"` → Updates `innerHTML` (supported but unused)

**SEO:** Dynamically updates `<title>`, `<meta name="description">`, and Open Graph tags on language change.

### Custom Language Selector

**Why not a normal `<select>`?**

- Needed custom styling (glassmorphism effect)
- Better control over appearance
- Still accessible with keyboard navigation

### CSS Architecture

**Color scheme:** CSS variables in `:root` for easy theming

**Icon colors:** SVG filters for color manipulation:

```css
/* White icons on dark background */
filter: brightness(0) invert(1);

/* Dark icons on light background */
filter: brightness(0) invert(0);
```

**Glassmorphism effect:**

```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
```

### ESLint Config

**Why flat config (`eslint.config.mjs`)?**

- ESLint 9+ requires it
- Different environments need different globals:
    - Browser JS: `setLanguage`, `getCurrentLanguage` (custom globals)
    - Test files: Jest globals (`describe`, `test`, `expect`)
    - Jest config: Node.js globals (`module`)

### Prettier Config

**Why these settings?**

- Double quotes, no trailing commas, always parens → Personal preference from TypeScript/C# background
- `tabWidth: 4` → Personal preference from C# background

---

## Adding Features

### New Translation

1. Add key to **ALL** locale files (`en.json`, `es.json`, `fr.json`, `pt.json`)
2. Add `data-translate="yourKey"` to HTML element
3. Test in all languages

### New Language

1. Create `/locales/{lang}.json` with all existing keys
2. Update `supportedLangs` in `js/translations.js`
3. Update `languageNames` in `js/custom-select.js`
4. Add option to language selector in `index.html`
5. Write tests

---

## Gotchas

**Tests failing?**

- Make sure JSON files don't have trailing commas (Prettier removes them automatically)
- Run `npm test -- --clearCache` if weird caching issues

**Translations not loading?**

- Check browser console for fetch errors
- Verify JSON is valid
- Check file paths are correct

**Styles not applying?**

- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

**Can't push to main?**

- That's intentional. Create a feature branch and PR.

---

## Testing Strategy

**What we test:**

- Translation system: Loading, language switching, localStorage persistence
- Custom selector: UI interactions, language selection

**What we don't test:**

- Bootstrap components (already tested by Bootstrap)
- Browser APIs (fetch, localStorage)
- CSS styling

**Coverage target:** No specific target, just test critical logic.

---

## Design Tokens

### Colors

```css
--clr-navy: #001f3f; /* Primary background */
--clr-blue-text: #2563eb; /* Accent text */
--clr-linkedin: #0077b5;
--clr-github: #333;
```

### Spacing Scale (Bootstrap)

`0` = 0, `1` = 4px, `2` = 8px, `3` = 16px, `4` = 24px, `5` = 48px

### Breakpoints

- Mobile first approach
- Key breakpoint: 992px (tablets → desktop)

---

## Resources

- [Jest Docs](https://jestjs.io/docs/getting-started)
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)
- [Bootstrap 5](https://getbootstrap.com/docs/5.3/)
- [CSS Filter Generator](https://codepen.io/sosuke/pen/Pjoqqp) for SVG colors
