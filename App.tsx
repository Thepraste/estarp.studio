
import React, { useState, useEffect } from 'react';
import { AppMode, Project } from './types';
import { PROJECTS as INITIAL_PROJECTS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import PromptLab from './components/PromptLab';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import ParticleMesh from './components/ParticleMesh';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('developer');
  const [showAdmin, setShowAdmin] = useState(false);
  
  // Dynamic Projects State with Persistence
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('estarp_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  useEffect(() => {
    localStorage.setItem('estarp_projects', JSON.stringify(projects));
  }, [projects]);

  // Handle mode-based global styles
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', mode === 'developer' ? '#00F2FF' : '#BF00FF');
    const root = document.getElementById('root');
    if (root) {
      root.classList.add('opacity-0');
      setTimeout(() => {
        root.classList.remove('opacity-0');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  }, [mode]);

  return (
    <div className="relative selection:bg-white/20 transition-opacity duration-300">
      <ParticleMesh mode={mode} />

      <Navbar mode={mode} setMode={setMode} />

      <main className="relative z-10">
        <Hero mode={mode} />

        <div className="space-y-0">
          <ProjectGallery mode={mode} projects={projects} />
          
          <PromptLab mode={mode} />

          <TechStack mode={mode} />
          
          <Contact mode={mode} />
        </div>
      </main>

      {showAdmin && (
        <AdminDashboard 
          mode={mode}
          projects={projects}
          setProjects={setProjects}
          onClose={() => setShowAdmin(false)}
        />
      )}

      <footer className="py-20 px-6 border-t border-white/5 text-center text-white/20 text-sm glass">
        <div className="mb-4">
          <span className="font-bold text-white/40">estarp.studio</span> © {new Date().getFullYear()}
        </div>
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
          
          {/* Admin Toggle Button */}
          <button 
            onClick={() => setShowAdmin(true)} 
            className="px-4 py-2 border border-white/5 hover:border-white/20 hover:text-white/60 transition-all text-[9px] uppercase tracking-[0.3em] font-mono rounded-lg bg-white/[0.02]"
          >
            access
          </button>
        </div>
        <div className="font-mono text-[10px] tracking-widest opacity-30">
          SYSTEM_ESTARP :: CONNECTION_SECURE :: {mode.toUpperCase()}_ENV_ACTIVE
        </div>
      </footer>
    </div>
  );
};

export default App;
