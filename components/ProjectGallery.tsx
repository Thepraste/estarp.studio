
import React from 'react';
import { ThemeMode, Project } from '../types';

interface ProjectGalleryProps {
  theme: ThemeMode;
  projects: Project[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ theme, projects }) => {
  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">Portfolio</h2>
          <p className="opacity-40 max-w-md">Driven digital transformations and custom engineering solutions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative glass rounded-[2rem] overflow-hidden cursor-pointer"
          >
            <div className="aspect-[16/9] overflow-hidden bg-black/5 dark:bg-white/5">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="p-10">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 rounded-lg border border-current opacity-20 uppercase tracking-widest font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
              <p className="opacity-50 leading-relaxed mb-6">{project.description}</p>
              
              <div 
                className="flex items-center gap-2 text-sm font-bold group-hover:translate-x-2 transition-transform" 
                style={{ color: 'var(--accent-color)' }}
              >
                View Project Details 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
