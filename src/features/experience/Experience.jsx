import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

export function Experience() {
    const { t } = useTranslation();
    const portfolioData = usePortfolioData();

    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <div className="mb-12 md:mb-20">
                    <h2 className="h2 mb-4">{t('sections.experience.title')}</h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl text-lg">
                        {t('sections.experience.subtitle')}
                    </p>
                </div>

                <div className="relative border-l border-[var(--border-color)] md:ml-8 ml-4 space-y-12">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[var(--accent-primary)] ring-4 ring-[var(--bg-primary)]" />

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-[var(--text-secondary)] mt-1 font-medium">
                                        <Building2 size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] bg-[var(--bg-secondary)] px-3 py-1 rounded-full self-start">
                                    <Calendar size={14} />
                                    <span className="font-mono">{exp.period}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{exp.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-[var(--text-tertiary)]">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--border-color)] flex-shrink-0" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span key={t} className="text-xs font-mono px-2 py-1 rounded border border-[var(--border-color)] text-[var(--text-tertiary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors cursor-default">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
