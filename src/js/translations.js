let translations = {};

const loadTranslations = async (lang) => {
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
};

const getNestedProperty = (obj, path) => {
    return path.split(".").reduce((current, key) => current?.[key], obj);
};

const getBrowserLanguage = () => {
    const browserLang = navigator.language.split("-")[0];
    const supportedLangs = ["en", "es", "fr", "pt"];
    return supportedLangs.includes(browserLang) ? browserLang : "en";
};

const getCurrentLanguage = () => {
    return localStorage.getItem("language") || getBrowserLanguage();
};

const updateDocumentMeta = (lang, translationsData) => {
    document.title = translationsData.title;

    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", translationsData.metaDescription);
    document
        .querySelector('meta[property="og:description"]')
        .setAttribute("content", translationsData.metaDescription);
    document
        .querySelector('meta[property="og:title"]')
        .setAttribute("content", translationsData.title);

    document.documentElement.setAttribute("lang", lang);
};

const updateTranslations = (translationsData) => {
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        const value = getNestedProperty(translationsData, key);
        if (value) {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-translate-alt]").forEach((element) => {
        const key = element.getAttribute("data-translate-alt");
        const value = getNestedProperty(translationsData, key);
        if (value) {
            element.setAttribute("alt", value);
        }
    });

    document.querySelectorAll("[data-translate-html]").forEach((element) => {
        const key = element.getAttribute("data-translate-html");
        const value = getNestedProperty(translationsData, key);
        if (value) {
            element.innerHTML = value;
        }
    });
};

const setLanguage = async (lang) => {
    translations = await loadTranslations(lang);
    localStorage.setItem("language", lang);
    updateDocumentMeta(lang, translations);
    updateTranslations(translations);
};

document.addEventListener("DOMContentLoaded", async () => {
    const currentLang = getCurrentLanguage();
    await setLanguage(currentLang);
});

// Export for Node.js/Jest (not executed in browser)
/* eslint-disable no-undef */
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        loadTranslations,
        getNestedProperty,
        getBrowserLanguage,
        getCurrentLanguage,
        updateDocumentMeta,
        updateTranslations,
        setLanguage
    };
    /* eslint-enable no-undef */
}

if (typeof window !== "undefined") {
    window.setLanguage = setLanguage;
    window.getCurrentLanguage = getCurrentLanguage;
}
