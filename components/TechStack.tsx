
import React from 'react';
import { ThemeMode } from '../types';
import { TECH_STACK } from '../constants';

interface TechStackProps {
  theme: ThemeMode;
}

const TechStack: React.FC<TechStackProps> = ({ theme }) => {
  return (
    <section id="stack" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">The Arsenal</h2>
        <p className="opacity-40">Tools and technologies that power the estarp ecosystem.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {TECH_STACK.map((tech) => (
          <div
            key={tech.name}
            className="group relative px-8 py-5 glass rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-2 border-b-4"
            style={{ borderBottomColor: 'var(--accent-color)' }}
          >
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold tracking-tight">{tech.name}</span>
              <div className="w-12 h-1 bg-current opacity-10 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-1000"
                  style={{ width: `${tech.level}%`, backgroundColor: 'var(--accent-color)' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 glass p-12 rounded-[3rem] text-center relative overflow-hidden group">
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" 
          style={{ background: `linear-gradient(to right, var(--accent-color), transparent)` }}
        />
        <h3 className="text-3xl font-bold mb-6">Let's build something futuristic.</h3>
        <p className="opacity-50 mb-10 max-w-xl mx-auto">Currently accepting new projects in Web Development, Creative Strategy, and AI Orchestration.</p>
        <button 
          className="px-10 py-5 rounded-2xl font-bold transition-all duration-300 transform group-hover:scale-105 text-white"
          style={{ backgroundColor: 'var(--accent-color)' }}
        >
          Secure Your Slot
        </button>
      </div>
    </section>
  );
};

export default TechStack;
