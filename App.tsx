import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { PROJECTS, TRANSLATIONS } from './constants';
import type { Project } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectCard } from './components/ProjectCard';
import { GitHubIcon } from './components/Icons';

type Page = 'home' | 'about' | 'resume' | 'contact';

// --- Page Components ---

const Hero: React.FC<{ onButtonClick: () => void }> = ({ onButtonClick }) => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].hero as { [key: string]: string };
    return (
        <div className="text-center py-20 md:py-32 animate-fade-in-up">
            <h2 className="text-lg text-teal-400 font-semibold">{t.greeting}</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-4">{t.name}</h1>
            <p className="text-xl md:text-2xl text-gray-300">{t.title}</p>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400">{t.subtitle}</p>
            <button 
                onClick={onButtonClick}
                className="mt-8 px-8 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-lg shadow-teal-500/20
                           hover:bg-teal-600 transform hover:scale-105 transition-all duration-300">
                {t.button}
            </button>
        </div>
    );
};

const HomePage: React.FC<{ onSelectProject: (id: number) => void }> = ({ onSelectProject }) => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].home as { [key: string]: string };
    return (
        <div>
            <Hero onButtonClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} />
            <div id="projects" className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-white text-center mb-12">{t.latest_projects}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map(project => (
                        <ProjectCard key={project.id} project={project} onSelectProject={onSelectProject} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const AboutPage: React.FC = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].about as { [key: string]: string };
    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in-up">
            <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-4xl font-bold text-white mb-6 text-center">{t.title}</h2>
                <p className="text-gray-300 leading-loose mb-4">{t.p1}</p>
                <p className="text-gray-300 leading-loose">{t.p2}</p>
            </div>
        </div>
    );
};

const ResumePage: React.FC = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].resume as any;
    const skills = ['PHP', 'JavaScript', 'Go JS', 'React', 'React Native', 'Python', 'Node.js', 'jQuery', 'Bootstrap', 'MySQL', 'SQLite', 'Git', 'RESTful APIs', 'AJAX'];
    
    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in-up">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                    <img src="assets/images/profile.jpg" alt="Profile" className="rounded-full mx-auto w-40 h-40 object-cover border-4 border-teal-400/50" />
                    <h2 className="text-4xl font-bold text-white mt-4">{TRANSLATIONS[language].hero.name}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="md:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-teal-400 border-b border-white/20 pb-2 mb-4">{t.contact_info}</h3>
                            <p className="text-gray-300 text-sm"><strong>{t.email_label}:</strong> {t.email_value}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-teal-400 border-b border-white/20 pb-2 mb-4">{t.skills}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => <span key={skill} className="bg-teal-400/10 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>)}
                            </div>
                        </div>
                         <div>
                            <h3 className="text-xl font-bold text-teal-400 border-b border-white/20 pb-2 mb-4">{t.languages_title}</h3>
                            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                                {t.languages_list.map((lang: string) => <li key={lang}>{lang}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">{t.education}</h3>
                             {t.education_list.map((edu: any, index: number) => (
                                <div key={index} className="mt-4">
                                    <h4 className="font-semibold text-teal-300">{edu.degree}</h4>
                                    <p className="text-sm text-gray-400">{edu.institution}</p>
                                </div>
                             ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white">{t.summary}</h3>
                            <p className="text-gray-300 mt-2 leading-relaxed">{t.summary_text}</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">{t.experience}</h3>
                            <div className="mt-4 space-y-4 relative border-s border-gray-700 ps-4">
                                {t.experience_list.map((job: any, index: number) => (
                                    <div key={index} className="mb-6">
                                        <span className="absolute flex items-center justify-center w-3 h-3 bg-teal-500 rounded-full -start-1.5 ring-4 ring-gray-800"></span>
                                        {/* <h4 className="font-semibold text-teal-300">{job.title}</h4> */}
                                        <p className="text-sm text-gray-500">{job.date}</p>
                                        <ul className="text-gray-300 mt-1 list-disc list-inside space-y-1">
                                            {job.points.map((point: string, pIndex: number) => <li key={pIndex}>{point}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 space-y-4 relative border-s border-gray-700 ps-4">
                            <h3 className="text-2xl font-bold text-white">{t.clients_title}</h3>
                            <ul className="text-gray-300 mt-2 list-disc list-inside space-y-1">
                                {t.clients_list.map((client: string) => <li key={client}>{client}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactPage: React.FC = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].contact as { [key: string]: string };
    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in-up">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white">{t.title}</h2>
                <p className="mt-4 text-gray-300">{t.subtitle}</p>
            </div>
            <div className="max-w-2xl mx-auto mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{t.request_project}</h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t.form_name}</label>
                        <input type="text" id="name" className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-teal-500 focus:border-teal-500 transition"/>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t.form_email}</label>
                        <input type="email" id="email" className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-teal-500 focus:border-teal-500 transition"/>
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t.form_message}</label>
                        <textarea id="message" rows={4} className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-teal-500 focus:border-teal-500 transition"></textarea>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-lg shadow-teal-500/20 hover:bg-teal-600 transform hover:scale-105 transition-all duration-300">
                        {t.form_button}
                    </button>
                </form>
            </div>
        </div>
    );
};

const ProjectDetailPage: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language].projectDetail as { [key: string]: string };
    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in-up">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                <img src={project.imageUrl} alt={project.title[language]} className="w-full h-64 object-cover" />
                <div className="p-8 md:p-12">
                    <h2 className="text-4xl font-bold text-white mb-4">{project.title[language]}</h2>
                    <p className="text-gray-300 leading-loose mb-8">{project.longDescription[language]}</p>
                    
                    <h3 className="text-xl font-bold text-teal-400 mb-4">{t.technologies}</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags[language].map(tag => (
                            <span key={tag} className="bg-teal-400/10 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={onBack} className="flex-1 px-6 py-3 bg-gray-500/50 text-white font-semibold rounded-full hover:bg-gray-500/70 transition-colors duration-300">
                           &larr; {t.back_to_projects}
                        </button>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                           className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-lg shadow-teal-500/20 hover:bg-teal-600 transition-colors duration-300">
                            <GitHubIcon className="h-5 w-5" />
                            {t.visit_github}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---

const AppContent: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

    const handleSelectProject = (id: number) => {
        setSelectedProjectId(id);
    };

    const handleBackToProjects = () => {
        setSelectedProjectId(null);
        setCurrentPage('home');
    };
    
    const handleSetCurrentPage = (page: Page) => {
        setSelectedProjectId(null);
        setCurrentPage(page);
    };

    const renderContent = () => {
        if (selectedProjectId) {
            const project = PROJECTS.find(p => p.id === selectedProjectId);
            if (project) {
                return <ProjectDetailPage project={project} onBack={handleBackToProjects} />;
            }
        }

        switch (currentPage) {
            case 'home':
                return <HomePage onSelectProject={handleSelectProject} />;
            case 'about':
                return <AboutPage />;
            case 'resume':
                return <ResumePage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage onSelectProject={handleSelectProject} />;
        }
    };
    
    return (
        <div className="bg-gray-900 text-white min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
             {/* Background decorative spheres */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>

            <div className="relative z-10">
                <Header currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />
                <main className="pt-20">
                    {renderContent()}
                </main>
                <Footer />
            </div>
        </div>
    );
}

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
};

export default App;
