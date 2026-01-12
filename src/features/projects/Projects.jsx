import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import { ProjectCard } from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

export function Projects() {
    const { t } = useTranslation();
    const portfolioData = usePortfolioData();
    const [activeCategory, setActiveCategory] = useState('All');

    // Dynamically derive categories from data to support localization
    const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

    const filteredProjects = portfolioData.projects.filter(p =>
        activeCategory === 'All' ? true : p.category.includes(activeCategory)
    );

    return (
        <section id="projects" className="section-padding bg-[var(--bg-secondary)]">
            <div className="container">
                <div className="mb-12 md:mb-20">
                    <h2 className="h2 mb-4">{t('sections.projects.title')}</h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl text-lg">
                        {t('sections.projects.subtitle')}
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                                : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--text-secondary)]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
