
import React, { useState, useEffect } from 'react';
import { ThemeMode, Project, AdminUser } from './types';
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
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('estarp_theme');
    return (saved as ThemeMode) || 'light';
  });
  const [showAdmin, setShowAdmin] = useState(false);
  
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('estarp_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  const [adminUsers, setAdminUsers] = useState<AdminUser[]>(() => {
    const saved = localStorage.getItem('estarp_admin_users');
    if (saved) return JSON.parse(saved);
    // Seed with initial default user
    return [{
      id: 'default',
      username: 'prasteadmin',
      password: 'Barbos@0000',
      createdAt: new Date().toISOString()
    }];
  });

  useEffect(() => {
    localStorage.setItem('estarp_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('estarp_admin_users', JSON.stringify(adminUsers));
  }, [adminUsers]);

  useEffect(() => {
    localStorage.setItem('estarp_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Apply accent color as CSS variable for components to consume
    const accent = theme === 'dark' ? '#00F2FF' : '#0066FF';
    document.documentElement.style.setProperty('--accent-color', accent);
    document.documentElement.style.setProperty('--bg-color', theme === 'dark' ? '#050505' : '#ffffff');
    document.documentElement.style.setProperty('--text-color', theme === 'dark' ? '#ffffff' : '#111111');
    document.documentElement.style.setProperty('--glass-bg', theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.7)');
    document.documentElement.style.setProperty('--border-color', theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative selection:bg-current selection:text-white transition-opacity duration-300 mode-transition">
      <ParticleMesh theme={theme} />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero theme={theme} />

        <div className="space-y-0">
          <ProjectGallery theme={theme} projects={projects} />
          
          <PromptLab theme={theme} />

          <TechStack theme={theme} />
          
          <Contact theme={theme} />
        </div>
      </main>

      {showAdmin && (
        <AdminDashboard 
          theme={theme}
          projects={projects}
          setProjects={setProjects}
          adminUsers={adminUsers}
          setAdminUsers={setAdminUsers}
          onClose={() => setShowAdmin(false)}
        />
      )}

      <footer className="py-20 px-6 border-t border-current opacity-10 text-center text-sm">
        <div className="mb-4 opacity-100">
          <span className="font-bold opacity-100">estarp techies</span> © {new Date().getFullYear()}
        </div>
        <div className="flex flex-col items-center gap-6 mb-8 opacity-100">
          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-current transition-colors">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-current transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-current transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/victordepraste/" target="_blank" rel="noopener noreferrer" className="hover:text-current transition-colors">Instagram</a>
          </div>
          
          <button 
            onClick={() => setShowAdmin(true)} 
            className="px-4 py-2 border border-current opacity-20 hover:opacity-100 transition-all text-[9px] uppercase tracking-[0.3em] font-mono rounded-lg"
          >
            access console
          </button>
        </div>
        <div className="font-mono text-[10px] tracking-widest opacity-20">
          SYSTEM_ESTARP_TECHIES :: CONNECTION_SECURE :: {theme.toUpperCase()}_ENV_ACTIVE
        </div>
      </footer>
    </div>
  );
};

export default App;
