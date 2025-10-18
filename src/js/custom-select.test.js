/**
 * @jest-environment jsdom
 */

global.setLanguage = jest.fn().mockResolvedValue(undefined);
global.getCurrentLanguage = jest.fn().mockReturnValue("en");

describe("Custom Select Component", () => {
    let langSelector, trigger, selectedLanguageSpan;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="lang-selector">
                <div id="languageTrigger" class="lang-selector__trigger">
                    <span id="selectedLanguage">English</span>
                </div>
                <div id="languageOptions" class="lang-selector__dropdown">
                    <div class="lang-selector__option lang-selector__option--selected" data-value="en">English</div>
                    <div class="lang-selector__option" data-value="es">Español</div>
                    <div class="lang-selector__option" data-value="fr">Français</div>
                    <div class="lang-selector__option" data-value="pt">Português</div>
                </div>
            </div>
        `;

        langSelector = document.querySelector(".lang-selector");
        trigger = document.getElementById("languageTrigger");
        selectedLanguageSpan = document.getElementById("selectedLanguage");

        jest.clearAllMocks();

        require("./custom-select.js");
        document.dispatchEvent(new Event("DOMContentLoaded"));
    });

    afterEach(() => {
        document.body.innerHTML = "";
    });

    test("should initialize with current language and mark it as selected", () => {
        expect(getCurrentLanguage).toHaveBeenCalled();
        expect(selectedLanguageSpan.textContent).toBe("English");

        const selectedOption = document.querySelector(".lang-selector__option--selected");
        expect(selectedOption.getAttribute("data-value")).toBe("en");
    });

    test("should toggle dropdown when trigger is clicked", () => {
        expect(langSelector.classList.contains("lang-selector--open")).toBe(false);

        trigger.click();
        expect(langSelector.classList.contains("lang-selector--open")).toBe(true);

        trigger.click();
        expect(langSelector.classList.contains("lang-selector--open")).toBe(false);
    });

    test("should close dropdown when clicking outside", () => {
        trigger.click();
        expect(langSelector.classList.contains("lang-selector--open")).toBe(true);

        document.body.click();
        expect(langSelector.classList.contains("lang-selector--open")).toBe(false);
    });

    test("should change language and update UI when option is selected", async () => {
        const spanishOption = document.querySelector('.lang-selector__option[data-value="es"]');
        const englishOption = document.querySelector('.lang-selector__option[data-value="en"]');

        trigger.click();
        await spanishOption.click();
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(setLanguage).toHaveBeenCalledWith("es");
        expect(selectedLanguageSpan.textContent).toBe("Español");
        expect(spanishOption.classList.contains("lang-selector__option--selected")).toBe(true);
        expect(englishOption.classList.contains("lang-selector__option--selected")).toBe(false);
        expect(langSelector.classList.contains("lang-selector--open")).toBe(false);
    });
});
