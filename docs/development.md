# Development Guide

## Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git**
- A code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/fernandotonacoder/fernandotonacoder.github.io.git
cd fernandotonacoder.github.io

# Install dependencies
npm install
```

---

## Development Workflow

### Branch Strategy

```
main (protected)
  ↑
  └── feature branches (your work)
```

**Rules:**
- Never push directly to `main`
- Always work on feature branches
- Create PRs for all changes
- All tests must pass before merging

### Creating a Feature Branch

```bash
# Make sure main is up to date
git checkout main
git pull origin main

# Create and switch to feature branch
git checkout -b feature/your-feature-name

# Make your changes...

# Commit and push
git add .
git commit -m "Description of changes"
git push origin feature/your-feature-name

# Create PR on GitHub
```

---

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode (during development)
npm test -- --watch

# Run specific test file
npm test custom-select.test.js
```

### Writing Tests

Tests are located alongside the files they test:
- `src/js/translations.test.js` tests `translations.js`
- `src/js/custom-select.test.js` tests `custom-select.js`

**Example test structure:**
```javascript
describe("Feature Name", () => {
    beforeEach(() => {
        // Setup before each test
    });

    test("should do something specific", () => {
        // Arrange
        const input = "test";
        
        // Act
        const result = myFunction(input);
        
        // Assert
        expect(result).toBe("expected");
    });
});
```

---

## Code Quality

### Linting

```bash
# Check for linting errors
npm run lint

# Auto-fix linting errors
npm run lint:fix
```

### Formatting

```bash
# Check if code is formatted correctly
npm run format:check

# Format all files
npm run format
```

### Pre-commit Checklist

Before committing, make sure:
- [ ] Tests pass (`npm test`)
- [ ] Code is linted (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] No console errors in browser

---

## Adding New Features

### Adding a New Translation

1. **Add to all locale files:**
```json
// src/locales/en.json
{
    "newKey": "English text"
}

// src/locales/es.json
{
    "newKey": "Texto en español"
}

// And so on for fr.json and pt.json...
```

2. **Use in HTML:**
```html
<p data-translate="newKey">Default text</p>
```

### Adding a New Language

1. **Create locale file:**
```bash
# Copy an existing locale as template
cp src/locales/en.json src/locales/de.json
# Edit de.json with German translations
```

2. **Update translations.js:**
```javascript
const supportedLangs = ['en', 'es', 'fr', 'pt', 'de']; // Add 'de'
```

3. **Update custom-select.js:**
```javascript
const languageNames = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    pt: 'Português',
    de: 'Deutsch' // Add German
};
```

4. **Update HTML:**
```html
<div class="custom-option" data-value="de">Deutsch</div>
```

5. **Write tests** for the new language

---

## Local Development Server

### Option 1: Python (Simple)
```bash
# Python 3
python -m http.server 8000 -d src

# Visit http://localhost:8000
```

### Option 2: Node.js (http-server)
```bash
# Install globally (one time)
npm install -g http-server

# Run
http-server src -p 8000

# Visit http://localhost:8000
```

### Option 3: VS Code Live Server Extension
1. Install "Live Server" extension
2. Right-click `src/index.html`
3. Select "Open with Live Server"

---

## Debugging

### Browser DevTools

**Console:** Check for JavaScript errors
```javascript
console.log(translations); // Debug translations
```

**Network Tab:** Check if locale files load correctly

**Application Tab:** Check localStorage for saved language

### Common Issues

**Issue:** Translations not loading
- Check browser console for fetch errors
- Verify JSON files are valid (no trailing commas)
- Check file paths are correct

**Issue:** Tests failing
- Run `npm install` to ensure dependencies are up to date
- Clear Jest cache: `npm test -- --clearCache`

**Issue:** Styles not applying
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Check for CSS syntax errors

---

## Contributing

### Pull Request Process

1. **Fork the repository**
2. **Create feature branch** from `main`
3. **Make changes** with clear, descriptive commits
4. **Add/update tests** for new functionality
5. **Ensure all checks pass locally:**
   ```bash
   npm test
   npm run lint
   npm run format:check
   ```
6. **Push to your fork**
7. **Create Pull Request** to `main`
8. **Wait for CI checks** to pass
9. **Address review comments** if any
10. **Squash and merge** once approved

### Commit Message Convention

Use clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add French translation for contact section"
git commit -m "Fix dropdown not closing on mobile"
git commit -m "Update test coverage for translations"

# Avoid vague messages
git commit -m "fix bug"
git commit -m "update"
```

### Code Review Checklist

Reviewers will check:
- [ ] Code follows project style guide
- [ ] Tests are included and pass
- [ ] No console.log or debug code left
- [ ] Documentation updated if needed
- [ ] No breaking changes without discussion

---

## CI/CD Pipeline

### Automated Checks

Every PR triggers:
1. **Format Check** - Prettier validation
2. **Linting** - ESLint checks
3. **Tests** - Jest test suite
4. **Coverage Report** - Uploaded as artifact

### Deployment

After merging to `main`:
1. **All checks run again**
2. **Build step** prepares files
3. **Deploy to GitHub Pages** automatically
4. **Live site updates** in ~1-2 minutes

### Viewing CI Logs

1. Go to the **Actions** tab on GitHub
2. Click on the workflow run
3. Expand job steps to see logs
4. Download artifacts for test coverage

---

## Troubleshooting

### npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Tests fail locally but pass in CI
```bash
# Ensure Node version matches CI (check .github/workflows/ci-cd.yml)
node --version

# Clear Jest cache
npm test -- --clearCache
```

### Can't push to main
This is expected! You need to:
1. Create a feature branch
2. Push to that branch
3. Open a PR
4. Merge after tests pass

---

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [GitHub Actions](https://docs.github.com/en/actions)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## Getting Help

- **Issues:** Open an issue on GitHub
- **Discussions:** Use GitHub Discussions for questions
- **Email:** Contact repository owner

Happy coding! 🚀
