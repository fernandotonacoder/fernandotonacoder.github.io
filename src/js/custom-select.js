document.addEventListener('DOMContentLoaded', () => {
    const customSelect = document.querySelector('.custom-select');
    const trigger = document.getElementById('languageTrigger');
    const options = document.getElementById('languageOptions');
    const selectedLanguageSpan = document.getElementById('selectedLanguage');
    
    const languageNames = {
        en: 'English',
        es: 'Español',
        fr: 'Français',
        pt: 'Português'
    };
    
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        customSelect.classList.toggle('open');
    });
    
    document.addEventListener('click', () => {
        customSelect.classList.remove('open');
    });
    
    options.addEventListener('click', async (e) => {
        if (e.target.classList.contains('custom-option')) {
            const selectedValue = e.target.getAttribute('data-value');
            
            document.querySelectorAll('.custom-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            e.target.classList.add('selected');
            
            selectedLanguageSpan.textContent = languageNames[selectedValue];
            
            customSelect.classList.remove('open');
            
            await setLanguage(selectedValue);
        }
    });
    
    const currentLang = getCurrentLanguage();
    selectedLanguageSpan.textContent = languageNames[currentLang];
    document.querySelector(`.custom-option[data-value="${currentLang}"]`)?.classList.add('selected');
});
