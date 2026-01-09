
import React from 'react';
import type { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (id: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const { language } = useLanguage();
  
  return (
    <div
      onClick={() => onSelectProject(project.id)}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden
                 transform transition-all duration-300 hover:scale-105 hover:border-teal-400/50 cursor-pointer shadow-lg animate-fade-in-up"
      style={{ animationDelay: `${project.id * 100}ms` }}
    >
      <img src={project.imageUrl} alt={project.title[language]} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title[language]}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description[language]}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags[language].map((tag) => (
            <span key={tag} className="bg-teal-400/10 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
