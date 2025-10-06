# Fernando Tona - Professional Profile

[![CI/CD Pipeline](https://github.com/fernandotonacoder/fernandotonacoder.github.io/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/fernandotonacoder/fernandotonacoder.github.io/actions/workflows/ci-cd.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success?logo=github)](https://fernandotonacoder.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/fernandotonacoder/fernandotonacoder.github.io)
![GitHub repo size](https://img.shields.io/github/repo-size/fernandotonacoder/fernandotonacoder.github.io)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Tested with Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest)](https://github.com/facebook/jest)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

> Professional profile website showcasing my expertise as a Software Developer.

**Live Site:** [fernandotonacoder.github.io](https://fernandotonacoder.github.io)

---

## Features

- 🌍 Multi-language support (English, Spanish, French, Portuguese)
- Modern, responsive design with glassmorphism effects
- Lightweight vanilla JavaScript - no frameworks
- Fast static site hosted on GitHub Pages
- Well-tested with Jest
- SEO optimized with dynamic meta tags

## Tech Stack

**Frontend:** HTML5 • CSS3 • Vanilla JavaScript • Bootstrap 5  
**Development:** Jest • ESLint • Prettier  
**CI/CD:** GitHub Actions  
**Deployment:** GitHub Pages

## Development Commands

```bash
npm install           # Dependencies for Jest, ESLint and Prettier
npm test              # Run tests with Jest
npm run lint          # Check code quality with ESLint
npm run lint:fix      # Auto-fix issues with ESLint
npm run format        # Format code with Prettier
npm run format:check  # Check formatting with Prettier
```

## Project Structure

```
src/
├── index.html           # Main page
├── css/style.css        # Styles
├── js/
│   ├── translations.js  # Multi-language system
│   ├── custom-select.js # Language selector
│   └── *.test.js        # Unit tests
└── locales/             # Translation files (en, es, fr, pt)
```

## CI/CD Pipeline

- **On PR:** Runs tests, linting, and format checks
- **On Merge:** Deploys to GitHub Pages automatically
- **Quality Assurance** All checks must pass before merging
- **Branch Protection:** _main_ branch protected. Use feature branch and PR.

## Author

**Fernando Tona**  
[Website](https://fernandotonacoder.github.io) • [LinkedIn](https://www.linkedin.com/in/fernandotona/) • [GitHub](https://github.com/fernandotonacoder) • fernandotonacoder@protonmail.com

## Documentation

- **[Architecture Guide](docs/ARCHITECTURE.md)** - How the system works and technical decisions
- **[Contributing Guide](docs/CONTRIBUTING.md)** - Development workflow and setup

---

<div align="center">

**⭐ Star this repo if you find it useful!**

Made with ❤️ by Fernando Tona

</div>
