# Fernando Tona - Portfolio Website

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

> Personal portfolio website showcasing my work as a Software Developer specializing in .NET/C# and Azure.

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

## Quick Start

### For Visitors
Simply visit: **[fernandotonacoder.github.io](https://fernandotonacoder.github.io)**

### For Developers
\`\`\`bash
# Clone and install
git clone https://github.com/fernandotonacoder/fernandotonacoder.github.io.git
cd fernandotonacoder.github.io
npm install

# Run tests and checks
npm test
npm run lint
npm run format:check

# Open locally (Option 1: directly in browser)
open src/index.html

# Or Option 2: with local server
python -m http.server 8000 -d src
\`\`\`

## Project Structure

\`\`\`
src/
├── index.html           # Main page
├── css/style.css        # Styles
├── js/
│   ├── translations.js  # Multi-language system
│   ├── custom-select.js # Language selector
│   └── *.test.js        # Unit tests
└── locales/             # Translation files (en, es, fr, pt)
\`\`\`

## Development Commands

\`\`\`bash
npm test              # Run tests
npm run lint          # Check code quality
npm run lint:fix      # Auto-fix issues
npm run format        # Format code
npm run format:check  # Check formatting
\`\`\`

## CI/CD Pipeline

- **On PR:** Runs tests, linting, and format checks
- **On Merge:** Deploys to GitHub Pages automatically
- **Branch Protection:** All checks must pass before merging

## Author

**Fernando Tona**  
[Website](https://fernandotonacoder.github.io) • [LinkedIn](https://www.linkedin.com/in/fernandotona/) • [GitHub](https://github.com/fernandotonacoder)

## Documentation

- **[Technical Documentation](docs/project-instructions.md)** - Architecture, conventions, and detailed guides
- **[Development Guide](docs/development.md)** - Setup, testing, and contribution guidelines
- **[Design System](docs/design.md)** - Colors, typography, and styling patterns

## License

MIT License - see [LICENSE](LICENSE) for details.

---

<div align="center">

**⭐ Star this repo if you find it useful!**

Made with ❤️ by Fernando Tona

</div>
