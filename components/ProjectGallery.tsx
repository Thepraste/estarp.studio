
import React, { useState } from 'react';
import { AppMode, Project } from '../types';
import { PROJECTS } from '../constants';

interface ProjectGalleryProps {
  mode: AppMode;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ mode }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'video' | 'graphics' | 'prompt'>('all');

  const filteredProjects = PROJECTS.filter(p => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesMode = p.mode === mode;
    return matchesFilter && matchesMode;
  });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Dev' },
    { id: 'video', label: 'Motion' },
    { id: 'graphics', label: 'Design' },
    { id: 'prompt', label: 'AI/Prompt' },
  ];

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Showcased Work</h2>
          <p className="text-white/40 max-w-md">A curated collection of projects where logic and aesthetics collide.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                filter === cat.id
                  ? (mode === 'developer' ? 'bg-[#00F2FF]/20 border-[#00F2FF] text-[#00F2FF]' : 'bg-[#BF00FF]/20 border-[#BF00FF] text-[#BF00FF]')
                  : 'border-white/10 text-white/60 hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-white/20 bg-black/40 text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-white/60 leading-tight">{project.description}</p>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center glass ${mode === 'developer' ? 'text-[#00F2FF]' : 'text-[#BF00FF]'}`}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
               </div>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 text-center glass rounded-2xl">
            <p className="text-white/40 italic">Switch to '{mode === 'developer' ? 'Creative' : 'Developer'}' mode to see more projects in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;
