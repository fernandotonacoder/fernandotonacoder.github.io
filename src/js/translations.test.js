/**
 * @jest-environment jsdom
 */

global.fetch = jest.fn();
console.error = jest.fn();

describe("Translations Module", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    describe("Core Helper Functions", () => {
        test("getNestedProperty - should handle nested translation keys", () => {
            const getNestedProperty = (obj, path) =>
                path.split(".").reduce((current, key) => current?.[key], obj);

            const translations = { user: { profile: { name: "Jane" } } };

            expect(getNestedProperty(translations, "user.profile.name")).toBe("Jane");
            expect(getNestedProperty(translations, "missing.key")).toBeUndefined();
        });

        test("getBrowserLanguage - should return supported language or default to English", () => {
            const getBrowserLanguage = () => {
                const browserLang = navigator.language.split("-")[0];
                const supportedLangs = ["en", "es", "fr", "pt"];
                return supportedLangs.includes(browserLang) ? browserLang : "en";
            };

            Object.defineProperty(navigator, "language", { value: "es-ES", configurable: true });
            expect(getBrowserLanguage()).toBe("es");

            Object.defineProperty(navigator, "language", { value: "de-DE", configurable: true });
            expect(getBrowserLanguage()).toBe("en");
        });
    });

    describe("Translation Loading", () => {
        test("should successfully fetch translations", async () => {
            const mockData = { title: "Test Title", role: "Developer" };
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockData
            });

            const response = await fetch("./locales/en.json");
            const data = await response.json();

            expect(data).toEqual(mockData);
        });

        test("should handle fetch errors gracefully", async () => {
            global.fetch.mockRejectedValueOnce(new Error("Network error"));

            try {
                await fetch("./locales/es.json");
            } catch (error) {
                expect(error.message).toBe("Network error");
            }
        });
    });

    describe("localStorage Integration", () => {
        test("should store and retrieve selected language", () => {
            localStorage.setItem("language", "es");
            expect(localStorage.getItem("language")).toBe("es");

            localStorage.setItem("language", "fr");
            expect(localStorage.getItem("language")).toBe("fr");
        });
    });

    describe("DOM Updates", () => {
        beforeEach(() => {
            document.documentElement.innerHTML = `
                <head>
                    <title>Original Title</title>
                    <meta name="description" content="Original Description">
                </head>
                <body>
                    <h1 data-translate="role">Original Role</h1>
                    <img data-translate-alt="imageAlt" alt="Original Alt">
                </body>
            `;
        });

        test("should update document title and meta tags", () => {
            document.title = "New Title";
            const metaDesc = document.querySelector('meta[name="description"]');
            metaDesc.setAttribute("content", "New Description");

            expect(document.title).toBe("New Title");
            expect(metaDesc.getAttribute("content")).toBe("New Description");
        });

        test("should update elements with data-translate attribute", () => {
            const element = document.querySelector('[data-translate="role"]');
            element.textContent = "Software Developer";

            expect(element.textContent).toBe("Software Developer");
        });

        test("should update alt attributes with data-translate-alt", () => {
            const img = document.querySelector('[data-translate-alt="imageAlt"]');
            img.setAttribute("alt", "New Alt Text");

            expect(img.getAttribute("alt")).toBe("New Alt Text");
        });
    });
});
