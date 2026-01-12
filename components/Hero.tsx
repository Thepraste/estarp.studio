
import React from 'react';
import { AppMode } from '../types';

interface HeroProps {
  mode: AppMode;
}

const Hero: React.FC<HeroProps> = ({ mode }) => {
  const isDev = mode === 'developer';

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="z-10 text-center max-w-4xl">
        <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] tracking-[0.2em] uppercase mb-8 animate-float">
          {isDev ? 'System: Logic-Driven Development' : 'Vision: High-Energy Motion'}
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8">
          Where <span className={isDev ? 'gradient-text-dev' : 'gradient-text-creative'}>Code</span> <br />
          Meets <span className={!isDev ? 'gradient-text-creative' : 'gradient-text-dev'}>Creativity</span>.
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          {isDev
            ? 'Orchestrating complex digital systems with React, Next.js, and advanced Prompt Engineering. Building the foundations of the future.'
            : 'Translating concepts into high-impact visuals through motion graphics, VFX, and avant-garde brand design.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${isDev ? 'bg-[#00F2FF] text-black hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]' : 'bg-[#BF00FF] text-white hover:shadow-[0_0_30px_rgba(191,0,255,0.5)]'}`}>
            View Latest Project
          </button>
          <button className="px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all glass">
            The Process
          </button>
        </div>
      </div>

      {/* Floating Glass Cards Decoration */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 glass rounded-3xl rotate-12 -z-1 opacity-20 hidden lg:block" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 glass rounded-[4rem] -rotate-12 -z-1 opacity-20 hidden lg:block" />
    </section>
  );
};

export default Hero;
