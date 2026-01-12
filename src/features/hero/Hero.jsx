import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../../hooks/usePortfolioData';

export function Hero() {
    const { t } = useTranslation();
    const portfolioData = usePortfolioData();
    const { name, titles, contact } = portfolioData.personal;

    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-[var(--accent-glow)] rounded-full blur-[100px] opacity-50" />
                <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-6">
                        <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
                        <span className="text-sm font-medium text-[var(--text-secondary)]">{t('hero.available')}</span>
                    </div>

                    <h1 className="h1 mb-6">
                        {t('hero.greeting')} <br />
                        <span className="text-gradient leading-tight">{name.split(' ')[0]}</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-medium text-[var(--text-secondary)] mb-6">
                        {titles[0]}
                    </h2>

                    <p className="text-lg text-[var(--text-tertiary)] max-w-xl mb-8 leading-relaxed">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-md bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-secondary)] transition-all flex items-center gap-2"
                        >
                            {t('hero.cta')} <ArrowRight size={18} />
                        </a>

                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] font-medium hover:border-[var(--accent-primary)] transition-all flex items-center gap-2"
                        >
                            <Linkedin size={18} /> {t('hero.linkedin')}
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Abstract Tech Visual */}
                    <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] border border-[var(--border-color)] overflow-hidden flex items-center justify-center p-8">
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <div className="space-y-4">
                                <div className="h-32 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center">
                                    <span className="font-mono text-xs text-[var(--accent-primary)]">{t('hero.visual.backend')}</span>
                                </div>
                                <div className="h-48 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center">
                                    <span className="font-mono text-xs text-[var(--text-secondary)]">{t('hero.visual.ai')}</span>
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="h-40 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center">
                                    <span className="font-mono text-xs text-[var(--success)]">{t('hero.visual.uptime')}</span>
                                </div>
                                <div className="h-24 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 flex items-center justify-center">
                                    <span className="font-mono text-xs text-[var(--accent-primary)]">{t('hero.visual.frontend')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
