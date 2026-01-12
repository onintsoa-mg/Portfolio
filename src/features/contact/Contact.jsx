import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

export function Contact() {
    const { t } = useTranslation();
    const portfolioData = usePortfolioData();
    const { contact } = portfolioData.personal;

    return (
        <footer id="contact" className="section-padding pb-8 border-t border-[var(--border-color)]">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-20">
                    <div>
                        <h2 className="h2 mb-6">{t('sections.contact.title')}</h2>
                        <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                            {t('sections.contact.description')}
                        </p>

                        <a
                            href={`mailto:${contact.email}`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-primary)] text-white rounded-lg font-bold text-lg hover:bg-[var(--accent-secondary)] transition-all transform hover:-translate-y-1"
                        >
                            <Mail size={24} />
                            {t('sections.contact.cta')}
                        </a>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-4">{t('sections.contact.details')}</h3>
                            <div className="space-y-4">
                                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors text-lg">
                                    <Mail size={20} className="text-[var(--text-tertiary)]" />
                                    {contact.email}
                                </a>
                                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors text-lg">
                                    <Linkedin size={20} className="text-[var(--text-tertiary)]" />
                                    LinkedIn Profile
                                </a>
                                <div className="flex items-center gap-3 text-[var(--text-secondary)] text-lg">
                                    <MapPin size={20} className="text-[var(--text-tertiary)]" />
                                    {contact.location}
                                </div>
                                <div className="flex items-center gap-3 text-[var(--text-secondary)] text-lg">
                                    <Phone size={20} className="text-[var(--text-tertiary)]" />
                                    {contact.phone}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-tertiary)]">
                    <p>© {new Date().getFullYear()} {portfolioData.personal.shortName}. All rights reserved.</p>
                    <p>Built with React, Vite & Tailwind CSS Architecture</p>
                </div>
            </div>
        </footer>
    );
}
