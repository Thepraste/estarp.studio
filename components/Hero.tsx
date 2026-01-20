
import React from 'react';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="z-10 text-center max-w-5xl">
        /*<div className="inline-block px-4 py-1 rounded-full border border-current opacity-20 text-[10px] tracking-[0.2em] uppercase mb-8 animate-float font-bold">
          High-Performance Architecture & Immersive Experiences
        </div>*/

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
          The Future of Web <br />
          <span className="gradient-text">Engineered</span> for 
          <span className="italic opacity-20"> Growth.</span>
        </h1>

        <p className="text-lg md:text-2xl opacity-60 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Deploying scalable enterprise systems and robust visual identities. 
          We bridge the gap between complex logic and emotional connections.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#work" 
            className="px-10 py-5 rounded-2xl font-bold transition-all duration-300 text-white hover:shadow-2xl"
            style={{ backgroundColor: 'var(--accent-color)' }}
          >
            Explore Solutions
          </a>
          <a 
            href="#contact" 
            className="px-10 py-5 rounded-2xl font-bold border border-current opacity-60 hover:opacity-100 transition-all glass"
          >
            Start a Project
          </a>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-1 opacity-20">
         <div 
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full"
           style={{ backgroundColor: 'var(--accent-color)' }}
         />
      </div>
    </section>
  );
};

export default Hero;
