
import React, { useState } from 'react';
import { AppMode } from '../types';
import { PROMPT_EXAMPLES } from '../constants';

interface PromptLabProps {
  mode: AppMode;
}

const PromptLab: React.FC<PromptLabProps> = ({ mode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExample = PROMPT_EXAMPLES[activeIndex];

  return (
    <section id="prompt-lab" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">The Prompt Lab</h2>
          <p className="text-white/40 max-w-md">Deconstructing the logic behind generative intelligence.</p>
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
                    ? (mode === 'developer' ? 'bg-[#00F2FF]/10 border-[#00F2FF]' : 'bg-[#BF00FF]/10 border-[#BF00FF]')
                    : 'bg-white/5 border-white/5 hover:border-white/20'
                }`}
              >
                <h4 className="font-bold text-lg mb-1">{ex.label}</h4>
                <p className="text-sm opacity-50 truncate">{ex.logic}</p>
              </button>
            ))}

            <div className="mt-8 p-6 glass rounded-2xl text-xs font-mono leading-relaxed text-white/40">
              <span className="text-[#00F2FF]">// Prompt Orchestrator v4.2.0</span>
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
            <div className="glass p-8 rounded-3xl border-t-2 border-white/10">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" /> Human Input
              </div>
              <div className="font-mono text-sm leading-relaxed p-4 bg-black/40 rounded-xl border border-white/5 min-h-[150px]">
                {activeExample.input}
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold text-white/60 mb-2 uppercase">Refinement Logic</p>
                <p className="text-sm italic text-white/40">{activeExample.logic}</p>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-t-2 border-white/10 relative overflow-hidden">
               <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 -z-1 ${mode === 'developer' ? 'bg-[#00F2FF]' : 'bg-[#BF00FF]'}`} />
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${mode === 'developer' ? 'bg-[#00F2FF]' : 'bg-[#BF00FF]'}`} /> Optimized Output
              </div>
              <div className="font-mono text-sm leading-relaxed p-4 bg-white/5 rounded-xl border border-white/10 min-h-[150px]">
                {activeExample.output}
              </div>
              <div className="mt-6 flex justify-end">
                <button className={`text-xs font-bold px-4 py-2 rounded-lg ${mode === 'developer' ? 'bg-[#00F2FF] text-black' : 'bg-[#BF00FF] text-white'}`}>
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
