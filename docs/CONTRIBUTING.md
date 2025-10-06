# Contributing

## Setup

```bash
npm install
open src/index.html  # or python -m http.server 8000 -d src
```

## Workflow

Branch protection is on. Use feature branches:

```bash
git checkout -b feature/my-feature
# make changes
git commit -m "description"
git push origin feature/my-feature
# Open PR
```

## Development Commands

```bash
npm install           # Dependencies for Jest, ESLint and Prettier
npm test              # Run tests with Jest
npm run lint          # Check code quality with ESLint
npm run lint:fix      # Auto-fix issues with ESLint
npm run format        # Format code with Prettier
npm run format:check  # Check formatting with Prettier
```

## Adding Features

**New translation key:**
1. Add to all 4 locale files (en, es, fr, pt)
2. Use: `<p data-translate="key">Default</p>`

**New language:**
1. Create `locales/{code}.json`
2. Update `supportedLangs` in `translations.js`
3. Update `languageNames` in `custom-select.js`
4. Add HTML option

See [ARCHITECTURE.md](ARCHITECTURE.md) for technical details.
