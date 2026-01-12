import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { portfolioData } from '../../data/portfolio';
import { useTranslation } from 'react-i18next';

export function Navbar() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'navbar.projects', href: '#projects' },
        { name: 'navbar.experience', href: '#experience' },
        { name: 'navbar.skills', href: '#skills' },
        { name: 'navbar.contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-color)]' : 'bg-transparent'
            }`}>
            <div className="container flex items-center justify-between h-16 md:h-20">
                <a href="#" className="text-xl font-bold font-mono tracking-tighter">
                    ONINTSOA<span className="text-[var(--accent-primary)]">.DEV</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        >
                            {t(link.name)}
                        </a>
                    ))}
                    <div className="h-6 w-px bg-[var(--border-color)] mx-2" />
                    <LanguageToggle />
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageToggle />
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[var(--text-primary)]"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)] md:hidden">
                    <div className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                                onClick={() => setIsOpen(false)}
                            >
                                {t(link.name)}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
