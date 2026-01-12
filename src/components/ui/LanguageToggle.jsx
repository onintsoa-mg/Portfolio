import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const currentLang = i18n.language || 'en';
        const newLang = currentLang.startsWith('en') ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    const isEnglish = (i18n.language || 'en').startsWith('en');

    return (
        <button
            onClick={toggleLanguage}
            className="p-2 rounded-full transition-colors hover:bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] font-mono font-bold text-sm"
            aria-label="Toggle Language"
            title={isEnglish ? 'Passer en Français' : 'Switch to English'}
        >
            {isEnglish ? 'FR' : 'EN'}
        </button>
    );
}
