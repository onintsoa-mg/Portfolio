import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ProjectCard({ project, index }) {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col h-full bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:border-[var(--accent-primary)] transition-colors duration-300"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={24} className="text-[var(--accent-primary)]" />
            </div>

            <div className="p-8 flex flex-col h-full">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-mono px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="text-xs font-mono px-2 py-1 rounded bg-[var(--accent-glow)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                                {t('projectCard.featured')}
                            </span>
                        )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                        {project.title}
                    </h3>
                </div>

                {/* Core Content: Problem/Solution/Impact */}
                <div className="space-y-4 mb-8 flex-grow">
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider">{t('projectCard.problem')}</h4>
                        <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider text-[var(--accent-primary)]">{t('projectCard.solution')}</h4>
                        <p className="text-base text-[var(--text-primary)] leading-relaxed font-medium">{project.solution}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--text-secondary)] mb-1 uppercase tracking-wider text-[var(--success)]">{t('projectCard.impact')}</h4>
                        <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">{project.impact}</p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[var(--border-color)]">
                    <a
                        href={project.links.live}
                        className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                        <ExternalLink size={16} /> {t('projectCard.live')}
                    </a>
                    <a
                        href={project.links.github}
                        className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        <Github size={16} /> {t('projectCard.code')}
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
