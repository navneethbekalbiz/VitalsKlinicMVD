import React from 'react';
import { Reveal } from './Reveal';

export const Intro: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-transparent border-t border-obsidian/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-12">
          <div className="w-full">
            <Reveal width="100%">
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="w-20 h-[1.5px] bg-obsidian/30"></div>
                <span className="font-sans text-sm tracking-[0.3em] uppercase font-semibold text-obsidian/60">The Vitals Approach</span>
              </div>
              <h3 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
                Results driven by <span className="italic text-gold font-light">Evidence</span>.
              </h3>
            </Reveal>
          </div>

          <div className="w-full">
            <Reveal delay={0.2} width="100%">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-light text-obsidian mb-12">
                We bridge the gap between clinical dermatology and luxury aesthetics. Every treatment is backed by science and performed using <span className="italic font-normal">US FDA-approved technology</span>.
              </p>
            </Reveal>
            <Reveal delay={0.3} width="100%">
              <div className="max-w-2xl mx-auto font-sans text-sm md:text-base leading-relaxed text-obsidian/70">
                <p className="mb-6">
                  Led by Dr. Harish Prasad, our team emphasizes root-cause analysis over quick fixes. Whether it's advanced hair restoration or corrective skincare, we engineer results that are both visible and sustainable.
                </p>
                <p>
                  Located in the heart of Bangalore, Vitals Klinic offers a sanctuary where medical expertise ensures safety, and artistic vision delivers harmony.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};