
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../constants';
import { MenuIcon, CloseIcon } from './Icons';
import headerImage from '../assets/images/header.jpg';

type Page = 'home' | 'about' | 'resume' | 'contact';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    
    const switchLanguage = (lang: 'en' | 'ar') => {
        setLanguage(lang);
    };

    return (
        <div className="flex items-center bg-black/20 rounded-full border border-white/20">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 text-sm rounded-full transition-colors duration-300 ${language === 'en' ? 'bg-teal-500 text-white' : 'text-gray-300 hover:bg-white/10'}`}
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage('ar')}
                className={`px-3 py-1 text-sm rounded-full transition-colors duration-300 ${language === 'ar' ? 'bg-teal-500 text-white' : 'text-gray-300 hover:bg-white/10'}`}
            >
                AR
            </button>
        </div>
    );
};


export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const { language } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = TRANSLATIONS[language].header as { [key: string]: string };

    const navLinks: { page: Page, label: string }[] = [
        { page: 'home', label: t.home },
        { page: 'about', label: t.about },
        { page: 'resume', label: t.resume },
        { page: 'contact', label: t.contact },
    ];
    
    const handleNavClick = (page: Page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
    }

    const NavItems = () => (
        <>
            {navLinks.map(({ page, label }) => (
                <button
                    key={page}
                    onClick={() => handleNavClick(page)}
                    className={`px-3 py-2 text-sm rounded-md transition-colors duration-300 relative
                                ${currentPage === page ? 'text-teal-400' : 'text-gray-300 hover:text-white hover:bg-white/5'}
                                after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300
                                ${currentPage === page ? 'after:w-4/5' : ''}
                                md:text-base`}
                >
                    {label}
                </button>
            ))}
        </>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/30 backdrop-blur-xl border-b border-white/10">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-white tracking-wider cursor-pointer" onClick={() => setCurrentPage('home')}>
                    <img src={headerImage} alt="Profile" className="rounded-full mx-auto w-20 h-20 object-cover border-4 border-teal-400/50" />
                </div>
                <div className="hidden md:flex items-center gap-4">
                   <NavItems/>
                   <LanguageSwitcher />
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-20">
                        {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 animate-slide-in">
                    <div className="flex flex-col items-center justify-center h-full gap-6 pt-16">
                        <NavItems/>
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </header>
    );
};
