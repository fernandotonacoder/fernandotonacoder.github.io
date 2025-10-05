# Fernando Tona - Portfolio Website 🚀

[![CI/CD Pipeline](https://github.com/fernandotonacoder/fernandotonacoder.github.io/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/fernandotonacoder/fernandotonacoder.github.io/actions/workflows/ci-cd.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success?logo=github)](https://fernandotonacoder.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Tested with Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest)](https://github.com/facebook/jest)

> Personal portfolio website showcasing my work as a Software Developer specializing in .NET/C# and Azure.

**🌐 Live Site:** [fernandotonacoder.github.io](https://fernandotonacoder.github.io)

---

## ✨ Features

- 🌍 **Multi-language Support** - English, Spanish, French, and Portuguese
- 🎨 **Modern Design** - Clean, responsive interface with glassmorphism effects
- 📱 **Mobile-First** - Fully responsive across all devices
- ♿ **Accessible** - Semantic HTML and ARIA attributes
- 🚀 **Lightweight** - No heavy frameworks, pure vanilla JavaScript
- ⚡ **Fast** - Static site hosted on GitHub Pages
- 🔧 **Well-Tested** - Unit tests with Jest for core functionality
- 🎯 **SEO Optimized** - Dynamic meta tags and Open Graph support

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS Variables
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Bootstrap 5** - Layout and utilities

### Development & Quality
- **Jest** - Unit testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **GitHub Actions** - CI/CD pipeline

### Deployment
- **GitHub Pages** - Static site hosting

---

## 🚀 Quick Start

### For Non-Technical Users

Simply visit the live site: **[fernandotonacoder.github.io](https://fernandotonacoder.github.io)**

### For Developers

```bash
# Clone the repository
git clone https://github.com/fernandotonacoder/fernandotonacoder.github.io.git
cd fernandotonacoder.github.io

# Install dependencies (for testing/linting only)
npm install

# Run tests
npm test

# Check code quality
npm run lint
npm run format:check

# Open the site locally
# Option 1: Simply open src/index.html in your browser
# Option 2: Use a simple HTTP server
python -m http.server 8000 -d src
# Then visit http://localhost:8000
```

---

## 📂 Project Structure

```
.
├── src/
│   ├── index.html              # Main HTML file
│   ├── css/
│   │   └── style.css           # Custom styles
│   ├── js/
│   │   ├── translations.js     # Multi-language system
│   │   ├── custom-select.js    # Language selector dropdown
│   │   └── *.test.js           # Unit tests
│   ├── locales/
│   │   ├── en.json             # English translations
│   │   ├── es.json             # Spanish translations
│   │   ├── fr.json             # French translations
│   │   └── pt.json             # Portuguese translations
│   └── assets/
│       └── images/             # Images and icons
├── .github/
│   └── workflows/
│       └── ci-cd.yml           # CI/CD pipeline
├── docs/
│   └── project-instructions.md # Detailed technical documentation
└── package.json                # Dependencies and scripts
```

---

## 🌍 Multi-Language System

The site automatically detects your browser language and displays content accordingly. You can manually switch languages using the dropdown selector.

**Supported Languages:**
- 🇺🇸 English
- 🇪🇸 Spanish (Español)
- 🇫🇷 French (Français)
- 🇧🇷 Portuguese (Português)

**How it works:**
1. Checks your saved preference (localStorage)
2. Falls back to browser language
3. Defaults to English if language not supported

---

## 🧪 Testing & Quality Assurance

This project maintains high code quality standards:

```bash
# Run all tests with coverage
npm test

# Lint JavaScript code
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Check code formatting
npm run format:check

# Format all files
npm run format
```

**Test Coverage:**
- ✅ Translation system logic
- ✅ Language detection
- ✅ DOM manipulation
- ✅ Custom dropdown functionality

---

## 🔄 CI/CD Pipeline

Every pull request and merge to `main` triggers automated checks:

### On Pull Request:
- ✅ Code formatting validation (Prettier)
- ✅ Code linting (ESLint)
- ✅ Unit tests (Jest)
- ✅ Test coverage report

### On Merge to Main:
- ✅ All PR checks
- ✅ Build for GitHub Pages
- ✅ Automatic deployment 🚀

**Branch Protection:**
- Direct pushes to `main` are blocked
- All tests must pass before merging
- Branches must be up to date
- Linear history enforced (squash merges)

---

## 🎨 Design Highlights

- **Color Scheme:** Navy blue primary with accent colors
- **Typography:** System fonts for optimal performance
- **Effects:** Glassmorphism on language selector
- **Icons:** SVG icons with CSS filters for color manipulation
- **Layout:** Bootstrap grid with custom adjustments
- **Animations:** Smooth transitions and hover effects

---

## 📝 Development Notes

### Code Style
- **Quotes:** Double quotes for strings
- **Semicolons:** Always required
- **Indentation:** 4 spaces
- **Arrow Functions:** Always use parentheses
- **Trailing Commas:** None

### Adding New Features

**New Translation:**
1. Add key-value to all JSON files in `src/locales/`
2. Add `data-translate="key"` attribute to HTML element

**New Language:**
1. Create `src/locales/{lang-code}.json`
2. Add language code to `supportedLangs` in `translations.js`
3. Add language name to `languageNames` in `custom-select.js`
4. Add option to HTML selector

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Fernando Tona**

- 🌐 Website: [fernandotonacoder.github.io](https://fernandotonacoder.github.io)
- 💼 LinkedIn: [Fernando Tona](https://www.linkedin.com/in/fernandotona/)
- 🐙 GitHub: [@fernandotonacoder](https://github.com/fernandotonacoder)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Note:** All PRs must pass automated tests and code quality checks.

---

## 📚 Additional Documentation

For detailed technical documentation, see [docs/project-instructions.md](docs/project-instructions.md)

---

<div align="center">

**⭐ Star this repo if you found it useful!**

Made with ❤️ by Fernando Tona

</div>
