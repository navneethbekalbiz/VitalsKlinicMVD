import React from 'react';
import { STATS } from '../constants';
import { Reveal } from './Reveal';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-obsidian text-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center">
          {STATS.map((stat, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="flex flex-col items-center">
                <span className="font-display text-5xl md:text-7xl mb-2 text-gold">
                  {stat.value}
                </span>
                <span className="font-sans text-sm tracking-[0.2em] uppercase text-cream/70">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
