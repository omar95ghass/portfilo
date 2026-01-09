import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../constants';
import { GitHubIcon } from './Icons';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer as { [key: string]: string };

  return (
    <footer className="bg-gray-900/30 border-t border-white/10 text-center p-6 mt-16">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-4 mb-4">
            <a href="https://github.com/omar-alothman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <GitHubIcon className="h-6 w-6" />
            </a>
            {/* Add other social links here */}
        </div>
        <p className="text-gray-400 text-sm">{t.made_with}</p>
        <p className="text-gray-500 text-xs mt-2">&copy; {new Date().getFullYear()} Omar AlOthman. All rights reserved.</p>
      </div>
    </footer>
  );
};
