document.addEventListener("DOMContentLoaded", () => {
    const langSelector = document.querySelector(".lang-selector");
    const trigger = document.getElementById("languageTrigger");
    const options = document.getElementById("languageOptions");
    const selectedLanguageSpan = document.getElementById("selectedLanguage");

    const languageNames = {
        en: "English",
        es: "Español",
        fr: "Français",
        pt: "Português"
    };

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        langSelector.classList.toggle("lang-selector--open");
    });

    document.addEventListener("click", () => {
        langSelector.classList.remove("lang-selector--open");
    });

    options.addEventListener("click", async (e) => {
        if (e.target.classList.contains("lang-selector__option")) {
            const selectedValue = e.target.getAttribute("data-value");

            document.querySelectorAll(".lang-selector__option").forEach((opt) => {
                opt.classList.remove("lang-selector__option--selected");
            });
            e.target.classList.add("lang-selector__option--selected");

            selectedLanguageSpan.textContent = languageNames[selectedValue];

            langSelector.classList.remove("lang-selector--open");

            await setLanguage(selectedValue);
        }
    });

    const currentLang = getCurrentLanguage();
    selectedLanguageSpan.textContent = languageNames[currentLang];
    document
        .querySelector(`.lang-selector__option[data-value="${currentLang}"]`)
        ?.classList.add("lang-selector__option--selected");
});
