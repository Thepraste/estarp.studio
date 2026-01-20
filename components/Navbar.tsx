
import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Portfolio', href: '#work' },
    { label: 'Prompt Lab', href: '#prompt-lab' },
    { label: 'Tech Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] px-6 py-4 flex justify-between items-center glass border-b">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
            setIsMenuOpen(false);
          }}
        >
          <div 
            className="w-3 h-3 rounded-full shadow-lg transition-colors duration-500" 
            style={{ backgroundColor: 'var(--accent-color)' }}
          />
          <span className="text-xl font-bold tracking-tighter">
            estarp <span className="opacity-80" >techies</span>
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-6 text-sm font-medium opacity-60">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex items-center gap-2 bg-black/[0.05] dark:bg-white/[0.05] p-2 rounded-full border border-black/10 dark:border-white/10 hover:scale-105 active:scale-95 transition-all"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center bg-black/[0.05] dark:bg-white/[0.05] p-2 rounded-full border border-black/10 dark:border-white/10 hover:scale-105 active:scale-95 transition-all"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col items-center justify-center p-6">
          <div className="flex flex-col items-center gap-10">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-4xl font-extrabold tracking-tighter hover:scale-110 transition-transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${idx * 75}ms`,
                  color: idx === 0 ? 'var(--accent-color)' : 'inherit'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div 
            className={`mt-20 flex flex-col items-center gap-4 transition-all duration-700 delay-300 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Deploying Logic</p>
            <div className="w-1 h-12 rounded-full bg-current opacity-10" />
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="px-8 py-4 rounded-2xl font-bold text-white shadow-xl hover:shadow-2xl active:scale-95 transition-all"
              style={{ backgroundColor: 'var(--accent-color)' }}
            >
              Start Collaboration
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
