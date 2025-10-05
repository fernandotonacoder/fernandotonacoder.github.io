/**
 * @jest-environment jsdom
 */

global.setLanguage = jest.fn().mockResolvedValue(undefined);
global.getCurrentLanguage = jest.fn().mockReturnValue("en");

describe("Custom Select Component", () => {
    let customSelect, trigger, selectedLanguageSpan;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="custom-select">
                <div id="languageTrigger" class="custom-select-trigger">
                    <span id="selectedLanguage">English</span>
                </div>
                <div id="languageOptions" class="custom-options">
                    <div class="custom-option selected" data-value="en">English</div>
                    <div class="custom-option" data-value="es">Español</div>
                    <div class="custom-option" data-value="fr">Français</div>
                    <div class="custom-option" data-value="pt">Português</div>
                </div>
            </div>
        `;

        customSelect = document.querySelector(".custom-select");
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

        const selectedOption = document.querySelector(".custom-option.selected");
        expect(selectedOption.getAttribute("data-value")).toBe("en");
    });

    test("should toggle dropdown when trigger is clicked", () => {
        expect(customSelect.classList.contains("open")).toBe(false);

        trigger.click();
        expect(customSelect.classList.contains("open")).toBe(true);

        trigger.click();
        expect(customSelect.classList.contains("open")).toBe(false);
    });

    test("should close dropdown when clicking outside", () => {
        trigger.click();
        expect(customSelect.classList.contains("open")).toBe(true);

        document.body.click();
        expect(customSelect.classList.contains("open")).toBe(false);
    });

    test("should change language and update UI when option is selected", async () => {
        const spanishOption = document.querySelector('.custom-option[data-value="es"]');
        const englishOption = document.querySelector('.custom-option[data-value="en"]');

        trigger.click();
        await spanishOption.click();
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(setLanguage).toHaveBeenCalledWith("es");
        expect(selectedLanguageSpan.textContent).toBe("Español");
        expect(spanishOption.classList.contains("selected")).toBe(true);
        expect(englishOption.classList.contains("selected")).toBe(false);
        expect(customSelect.classList.contains("open")).toBe(false);
    });
});
