import { useTranslation } from 'react-i18next';
import { portfolioData as en } from '../data/portfolio';
import { portfolioData as fr } from '../data/portfolio-fr';

export const usePortfolioData = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language || 'en';

    // Check if language starts with 'fr' to handle 'fr-FR', 'fr-CA', etc.
    if (lang.startsWith('fr')) {
        return fr;
    }

    // Default to English
    return en;
};
