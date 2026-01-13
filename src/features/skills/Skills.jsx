import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { getTechLogos } from '../../utils/techUtils';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function Skills() {
    const { t } = useTranslation();
    const portfolioData = usePortfolioData();

    return (
        <section id="skills" className="section-padding bg-[var(--bg-secondary)]">
            <div className="container">
                <div className="mb-12 md:mb-20">
                    <h2 className="h2 mb-4">{t('sections.skills.title')}</h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl text-lg">
                        {t('sections.skills.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {portfolioData.skills.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                            className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-primary)]/50 transition-colors"
                        >
                            <h3 className="text-lg font-bold mb-6 text-[var(--accent-primary)]">{category.category}</h3>

                            <div className="space-y-6">
                                {category.items.map((skill) => (
                                    <div key={skill.name} className="group p-3 rounded-lg hover:bg-[var(--bg-tertiary)]/30 transition-colors">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-3">
                                                {/* Render Tech Logos */}
                                                <div className="flex -space-x-1">
                                                    {getTechLogos(skill.name).map((logo, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={logo}
                                                            alt=""
                                                            className="w-5 h-5 object-contain"
                                                            title={skill.name}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="font-medium text-[var(--text-primary)]">{skill.name}</span>
                                            </div>
                                            <span className={`text-xs px-2 py-0.5 rounded font-mono ${skill.level === 'Expert' ? 'bg-[var(--accent-primary)] text-white' :
                                                skill.level === 'Advanced' ? 'bg-[var(--accent-glow)] text-[var(--accent-primary)]' :
                                                    'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]'
                                                }`}>
                                                {skill.level}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] transition-colors">
                                            <CheckCircle2 size={12} />
                                            <span>{skill.context}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
