# Project Instructions - Fernando Tona Portfolio

## Project Overview

This is a **static portfolio website** built with vanilla HTML, CSS, and JavaScript, leveraging Bootstrap 5 for layout. The site features a **custom, lightweight Translation System** that supports English, Spanish, French, and Portuguese. The project is hosted on GitHub Pages at `fernandotonacoder.github.io`.

---

## Architecture & Key Components

### Translation System (`js/translations.js` + `locales/*.json`)

This module manages all text updates, language detection, and metadata application without external libraries.

* **Logic:** Language priority is checked in this order: **Local Storage (key: 'language') → Browser Language → Fallback to English**.
* **Data Structure:** Translations are stored in flat JSON files within the `/locales/` directory (e.g., `en.json`, `role`).
* **HTML Attributes:** Elements are updated using custom `data-translate` attributes:
    * `data-translate="key"`: Updates element's **textContent**.
    * `data-translate-alt="key"`: Updates the **alt** attribute (essential for images and accessibility).
    * `data-translate-html="key"`: Updates **innerHTML** (supported, currently unused).
* **SEO/Metadata:** The system dynamically updates the page `<title>`, `<meta name="description">`, and Open Graph (`og:title`, `og:description`) tags on language change.
* **Performance:** Translations are loaded **asynchronously** (`async/await`) using the native `fetch` API.

### Custom Dropdown (`js/custom-select.js`)

This file implements the styled dropdown menu for language selection.

* **UI Implementation:** Uses vanilla JavaScript to handle dropdown toggle and visual state management (`.open`, `.selected` classes).
* **Integration:** It integrates with the translation system by calling **`setLanguage(lang)`** from `translations.js` upon selection.
* **Language Names:** Display names (e.g., 'English', 'Español') are hardcoded in the `languageNames` object within this file.

### CSS Architecture (`css/style.css`)

The CSS follows a well-organized structure with clear separation of concerns.

* **Color Scheme:** Uses **CSS Variables** defined in `:root` (e.g., `--clr-navy`, `--clr-linkedin`) for easy theme consistency.
* **Icon Styling Pattern:** Icons (SVGs) use CSS filters for color manipulation across different states:
    * White icon on dark background: `filter: brightness(0) invert(1)`
    * Dark icon on light background: `filter: brightness(0) invert(0)`
* **Visual Pattern:** Elements like the language selector implement a "Glassmorphism" effect using `rgba()` combined with `backdrop-filter: blur(10px)`.
* **Responsiveness:** Mobile-first approach using Bootstrap utility classes and media queries for specific adjustments below 992px and 576px.

---

## Conventions & Development Workflow

### Development Setup

| Task | Detail |
| :--- | :--- |
| **Cross-Platform** | Developed and maintained across **Linux, Windows, and macOS**. |
| **Dependencies** | Requires **Node.js/NPM** to run development tooling (Jest). The core site is dependency-free. |
| **Local Testing** | The project is static: open `index.html` in the browser or use a simple HTTP server. |
| **Deployment** | Git push to the main branch auto-deploys via GitHub Pages. |
| **Version Control** | **`package-lock.json`** must be committed to Git to ensure dependency stability across all environments. |

### Testing

* **Unit Tests:** JavaScript logic (`translations.js`, `custom-select.js`) is validated by `*.test.js` files.
* **Execution:** Tests must be run using **Jest** via the NPM script: `npm test`.

### Adding New Content

* **New Translations:**
    1.  Add the new key and value to **ALL** locale files (`en.json`, `es.json`, `fr.json`, `pt.json`).
    2.  Apply the corresponding `data-translate="keyName"` attribute to the target HTML element.
* **New Languages:**
    1.  Create a new locale file in `/locales/{lang-code}.json` with **all** existing translation keys.
    2.  Add the language code to the `supportedLangs` array in `js/translations.js`.
    3.  Add the language name to the `languageNames` object in `js/custom-select.js`.
    4.  Add the option element to the HTML selector in `index.html`.