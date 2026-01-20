
import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { PROMPT_EXAMPLES } from '../constants';

interface PromptLabProps {
  theme: ThemeMode;
}

const PromptLab: React.FC<PromptLabProps> = ({ theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExample = PROMPT_EXAMPLES[activeIndex];

  return (
    <section id="prompt-lab" className="py-32 px-6 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">The Prompt Lab</h2>
          <p className="opacity-40 max-w-md">Deconstructing the logic behind generative intelligence.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-4">
            {PROMPT_EXAMPLES.map((ex, idx) => (
              <button
                key={ex.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                  activeIndex === idx
                    ? 'border-current'
                    : 'bg-transparent border-transparent opacity-50 hover:opacity-80'
                }`}
                style={{ 
                  borderColor: activeIndex === idx ? 'var(--accent-color)' : 'transparent',
                  backgroundColor: activeIndex === idx ? 'var(--glass-bg)' : 'transparent'
                }}
              >
                <h4 className="font-bold text-lg mb-1">{ex.label}</h4>
                <p className="text-sm opacity-50 truncate">{ex.logic}</p>
              </button>
            ))}

            <div className="mt-8 p-6 glass rounded-2xl text-xs font-mono leading-relaxed opacity-40">
              <span style={{ color: 'var(--accent-color)' }} className="font-bold">// Prompt Orchestrator v4.2.0</span>
              <br />
              &gt; analyzing system hooks...
              <br />
              &gt; applying heuristic refinement...
              <br />
              &gt; status: optimized
            </div>
          </div>

          {/* Visualization */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-3xl border-t-2">
              <div className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" /> Human Input
              </div>
              <div className="font-mono text-sm leading-relaxed p-4 bg-black/[0.03] dark:bg-white/[0.03] rounded-xl border border-current opacity-10 min-h-[150px]">
                <span className="opacity-100">{activeExample.input}</span>
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold opacity-60 mb-2 uppercase">Refinement Logic</p>
                <p className="text-sm italic opacity-40">{activeExample.logic}</p>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-t-2 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 -z-1" style={{ backgroundColor: 'var(--accent-color)' }} />
              <div className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-color)' }} /> Optimized Output
              </div>
              <div className="font-mono text-sm leading-relaxed p-4 bg-black/[0.03] dark:bg-white/[0.03] rounded-xl border border-current opacity-10 min-h-[150px]">
                <span className="opacity-100">{activeExample.output}</span>
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  className="text-xs font-bold px-4 py-2 rounded-lg transition-all active:scale-95 text-white"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                >
                   Copy Full Context
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptLab;
