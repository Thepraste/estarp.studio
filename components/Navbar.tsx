
import React from 'react';
import { AppMode } from '../types';

interface NavbarProps {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mode, setMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className={`w-3 h-3 rounded-full ${mode === 'developer' ? 'bg-[#00F2FF]' : 'bg-[#BF00FF]'} shadow-lg transition-colors duration-500`} />
        <span className="text-xl font-bold tracking-tighter">estarp<span className="opacity-40">.studio</span></span>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-6 text-sm font-medium opacity-60">
          <a href="#work" className="hover:opacity-100 transition-opacity">Work</a>
          <a href="#prompt-lab" className="hover:opacity-100 transition-opacity">Prompt Lab</a>
          <a href="#stack" className="hover:opacity-100 transition-opacity">Tech Stack</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>

        {/* Matrix Toggle */}
        <div className="flex bg-black/50 p-1 rounded-full border border-white/10">
          <button
            onClick={() => setMode('developer')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              mode === 'developer'
                ? 'bg-[#00F2FF] text-black shadow-[0_0_15px_rgba(0,242,255,0.4)]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            DEVELOPER
          </button>
          <button
            onClick={() => setMode('creative')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              mode === 'creative'
                ? 'bg-[#BF00FF] text-white shadow-[0_0_15px_rgba(191,0,255,0.4)]'
                : 'text-white/40 hover:text-white'
            }`}
          >
            CREATIVE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
