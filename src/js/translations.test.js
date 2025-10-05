/**
 * @jest-environment jsdom
 */

const {
    loadTranslations,
    getNestedProperty,
    getBrowserLanguage,
    getCurrentLanguage,
    updateDocumentMeta,
    updateTranslations,
    setLanguage
} = require("./translations");

global.fetch = jest.fn();
console.error = jest.fn();

describe("Translations Module", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
        document.body.innerHTML = "";
        document.head.innerHTML =
            '<title>Test</title><meta name="description" content="Test"><meta property="og:title" content="Test"><meta property="og:description" content="Test">';
    });

    describe("Core Helper Functions", () => {
        test("getNestedProperty - should handle nested translation keys", () => {
            const translations = { user: { profile: { name: "Jane" } } };
            expect(getNestedProperty(translations, "user.profile.name")).toBe("Jane");
            expect(getNestedProperty(translations, "missing.key")).toBeUndefined();
        });

        test("getBrowserLanguage - should return supported language or default to English", () => {
            Object.defineProperty(navigator, "language", { value: "es-ES", configurable: true });
            expect(getBrowserLanguage()).toBe("es");

            Object.defineProperty(navigator, "language", { value: "de-DE", configurable: true });
            expect(getBrowserLanguage()).toBe("en");
        });
    });

    describe("Translation Loading", () => {
        test("should successfully fetch translations", async () => {
            const mockData = { title: "Test Title", role: "Developer" };
            global.fetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });

            const data = await loadTranslations("en");

            expect(fetch).toHaveBeenCalledWith("./locales/en.json");
            expect(data).toEqual(mockData);
        });

        test("should handle fetch errors gracefully", async () => {
            global.fetch.mockRejectedValueOnce(new Error("Network error"));
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ title: "English" })
            });

            const data = await loadTranslations("fr");

            expect(console.error).toHaveBeenCalled();
            expect(data).toEqual({ title: "English" });
        });
    });

    describe("localStorage Integration", () => {
        test("should store and retrieve selected language", () => {
            localStorage.setItem("language", "es");
            expect(getCurrentLanguage()).toBe("es");
        });

        test("should fall back to browser language if no stored language", () => {
            Object.defineProperty(navigator, "language", { value: "fr-FR", configurable: true });
            expect(getCurrentLanguage()).toBe("fr");
        });
    });

    describe("DOM Updates", () => {
        test("should update document title and meta tags", () => {
            const translationsData = { title: "New Title", metaDescription: "New Description" };
            updateDocumentMeta("es", translationsData);

            expect(document.title).toBe("New Title");
            expect(document.querySelector('meta[name="description"]').getAttribute("content")).toBe(
                "New Description"
            );
            expect(document.documentElement.getAttribute("lang")).toBe("es");
        });

        test("should update elements with data-translate attribute", () => {
            document.body.innerHTML = '<p data-translate="role">Default</p>';
            updateTranslations({ role: "Software Developer" });
            expect(document.querySelector('[data-translate="role"]').textContent).toBe(
                "Software Developer"
            );
        });

        test("should update alt attributes with data-translate-alt", () => {
            document.body.innerHTML = '<img data-translate-alt="imageAlt" alt="Default">';
            updateTranslations({ imageAlt: "Profile picture" });
            expect(
                document.querySelector('[data-translate-alt="imageAlt"]').getAttribute("alt")
            ).toBe("Profile picture");
        });
    });

    describe("setLanguage Integration", () => {
        test("should load translations and update DOM", async () => {
            const mockTranslations = {
                title: "Título",
                metaDescription: "Descripción",
                role: "Desarrollador"
            };
            global.fetch.mockResolvedValueOnce({ ok: true, json: async () => mockTranslations });
            document.body.innerHTML = '<p data-translate="role">Default</p>';

            await setLanguage("es");

            expect(localStorage.getItem("language")).toBe("es");
            expect(document.title).toBe("Título");
            expect(document.querySelector('[data-translate="role"]').textContent).toBe(
                "Desarrollador"
            );
        });
    });
});
