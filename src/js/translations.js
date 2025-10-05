let translations = {};

async function loadTranslations(lang) {
    try {
        const response = await fetch(`./locales/${lang}.json`);
        if (!response.ok) throw new Error("Translation file not found");
        return await response.json();
    } catch (error) {
        console.error(`Failed to load translations for ${lang}:`, error);
        // Fallback to English
        if (lang !== "en") {
            return await loadTranslations("en");
        }
        return {};
    }
}

function getNestedProperty(obj, path) {
    return path.split(".").reduce((current, key) => current?.[key], obj);
}

function getBrowserLanguage() {
    const browserLang = navigator.language.split("-")[0];
    const supportedLangs = ["en", "es", "fr", "pt"];
    return supportedLangs.includes(browserLang) ? browserLang : "en";
}

function getCurrentLanguage() {
    return localStorage.getItem("language") || getBrowserLanguage();
}

async function setLanguage(lang) {
    translations = await loadTranslations(lang);

    localStorage.setItem("language", lang);

    document.title = translations.title;

    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", translations.metaDescription);
    document
        .querySelector('meta[property="og:description"]')
        .setAttribute("content", translations.metaDescription);
    document.querySelector('meta[property="og:title"]').setAttribute("content", translations.title);

    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        const value = getNestedProperty(translations, key);
        if (value) {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-translate-alt]").forEach((element) => {
        const key = element.getAttribute("data-translate-alt");
        const value = getNestedProperty(translations, key);
        if (value) {
            element.setAttribute("alt", value);
        }
    });

    document.querySelectorAll("[data-translate-html]").forEach((element) => {
        const key = element.getAttribute("data-translate-html");
        const value = getNestedProperty(translations, key);
        if (value) {
            element.innerHTML = value;
        }
    });

    document.documentElement.setAttribute("lang", lang);
}

document.addEventListener("DOMContentLoaded", async () => {
    const currentLang = getCurrentLanguage();
    await setLanguage(currentLang);
});
