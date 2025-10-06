# Architecture

## Overview

Static site built with vanilla HTML, CSS, and JavaScript. No build tools, no frameworks. Just native browser APIs and Bootstrap 5 for layout.

**Philosophy:** Keep it simple. Add complexity only when necessary.

---

## Translation System

### Why Custom?

Could've used i18next, but that's 50KB+ for something I can do in ~100 lines.

### How It Works

**Language detection:**

1. localStorage (`language` key) - remembers user choice
2. Browser language (`navigator.language`)
3. Fallback to English

**Translation keys:**

- Flat JSON: `{"title": "...", "role": "..."}`
- No nesting (keeps it simple)
- Same keys across all languages (en, es, fr, pt)

**HTML usage:**

```html
<p data-translate="role">Default text</p>
<img data-translate-alt="imageAlt" alt="Default" />
```

**SEO:** Updates `<title>`, meta description, and Open Graph tags on language change.

### Module Pattern

Supports both browser and Jest:

```javascript
// Browser: global functions
if (typeof window !== "undefined") {
    window.setLanguage = setLanguage;
}

// Jest: CommonJS exports
if (typeof module !== "undefined" && module.exports) {
    module.exports = { setLanguage, ... };
}
```

No build step needed. Works everywhere.

---

## Custom Language Selector

Standard `<select>` can't do glassmorphism without hacky CSS. Custom dropdown gives full control.

**Features:**

- Click outside to close
- Keyboard accessible
- Pure JavaScript (no libs)

---

## CSS

### Mobile-First

Base styles = mobile. Enhance for desktop:

```css
.custom-select {
    width: 110px;
} /* mobile */

@media (min-width: 992px) {
    .custom-select {
        width: 150px;
    } /* desktop */
}
```

### Design Tokens

```css
:root {
    --clr-navy: #070f2b;
    --clr-gradient-mid: #3572ef;
    --clr-linkedin: #2856c7;
}
```

**Glassmorphism:**

```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
```

**SVG colors:** Use filters instead of multiple files:

```css
filter: brightness(0) invert(1); /* white */
filter: brightness(0) invert(0); /* dark */
```

---

## Testing

### Coverage: ~90%

**What's tested:**

- Translation loading (success + errors)
- DOM updates (textContent, alt, meta tags)
- localStorage integration
- Dropdown behavior

**What's not:**

- Browser APIs (tested by browsers)
- Bootstrap (tested by Bootstrap)
- DOMContentLoaded listener (manual test)

---

## Tooling

### ESLint Flat Config

ESLint 9+ requires it. Multiple environments need different globals:

- Browser JS: `setLanguage`, `getCurrentLanguage`
- Test files: `describe`, `test`, `expect`
- Node scripts: `module`, `require`

### Prettier

```json
{
    "singleQuote": false,
    "trailingComma": "none",
    "arrowParens": "always",
    "tabWidth": 4
}
```

Personal preference from C#/TypeScript background.

### Jest + jsdom

Need DOM APIs without a browser. Jest runs tests in Node.js with simulated DOM.

---

## Deployment & CI/CD

### GitHub Actions Workflow

**On Pull Request:**

```yaml
- Format check (Prettier)
- Lint (ESLint)
- Tests (Jest with coverage)
- Upload coverage artifact
```

**On Push to Main:**

```yaml
- All PR checks
- Build (prepare src/ folder)
- Deploy to GitHub Pages
```

**Branch Protection:** Direct pushes to main are blocked. Must use PRs.

### GitHub Pages

**Configuration:**

- Source: GitHub Actions (not branch-based)
- Deploys: `./src` directory
- URL: https://fernandotonacoder.github.io

No build step needed - just copy static files.

---

## Performance

- Async translation loading (non-blocking)
- Only loads selected language
- System fonts (no font loading)
- Total JS: ~250 lines
- Page load: < 1s on 3G

---

## Adding Features

### New Translation Key

1. Add to all 4 locale files
2. Use `data-translate="key"` in HTML
3. Test manually

### New Language

1. Create `/locales/{code}.json`
2. Update `supportedLangs` in `translations.js`
3. Update `languageNames` in `custom-select.js`
4. Add HTML option
