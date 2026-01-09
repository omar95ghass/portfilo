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
                    <img src="https://i.ibb.co/SD0PxtXK/profile.jpg" alt="Profile" className="rounded-full mx-auto w-40 h-40 object-cover border-4 border-teal-400/50" />
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
                <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-black/20 rounded-lg border border-white/10 hover:border-teal-400/50 transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-400 mb-1">{t.email_label}</p>
                            <a href={`mailto:${t.email_value}`} className="text-teal-400 hover:text-teal-300 transition-colors text-lg font-medium" dir="ltr" style={{ display: 'inline-block' }}>
                                {t.email_value}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-black/20 rounded-lg border border-white/10 hover:border-teal-400/50 transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-400 mb-1">{t.whatsapp_label}</p>
                            <a href={`https://wa.me/963952181789`} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors text-lg font-medium" dir="ltr" style={{ display: 'inline-block' }}>
                                {t.whatsapp_value}
                            </a>
                        </div>
                    </div>
                </div>
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
