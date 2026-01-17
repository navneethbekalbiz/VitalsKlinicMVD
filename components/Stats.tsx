import React from 'react';
import { STATS } from '../constants';
import { Reveal } from './Reveal';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Dark Glass Panel */}
        <div className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 shadow-2xl bg-obsidian border border-white/10">

          {/* Ambient Inner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map((stat, index) => (
              <Reveal key={index} delay={index * 0.2}>
                <div className="flex flex-col items-center px-8 w-full md:w-auto pt-8 md:pt-0 first:pt-0">
                  <span className="font-display text-5xl md:text-7xl mb-2 text-gold drop-shadow-lg">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-sand/80 font-medium">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
