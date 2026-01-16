import React from 'react';
import { SPECIALIZATIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Specializations: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="flex flex-col items-center text-center mb-24 border-b border-obsidian/10 pb-8">
            <span className="font-sans text-xs tracking-[0.2em] text-obsidian/40 uppercase mb-4">What We Do</span>
            <h2 className="font-display text-5xl md:text-7xl text-obsidian">
              Specializations
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-32">
          {SPECIALIZATIONS.map((spec, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <Reveal delay={0.2}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group cursor-pointer">
                     <img 
                       src={spec.image} 
                       alt={spec.title} 
                       className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/10 transition-colors duration-500" />
                     <div className="absolute top-6 right-6 bg-cream rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight size={24} className="text-obsidian" />
                     </div>
                  </div>
                </Reveal>
              </div>

              {/* Text Side - Centered Alignment */}
              <div className="w-full md:w-1/2 text-center">
                 <Reveal delay={0.3}>
                   <div className="flex flex-col items-center">
                     <span className="font-sans text-xs tracking-[0.2em] text-gold uppercase mb-6">0{index + 1}</span>
                     <h3 className="font-serif text-4xl md:text-6xl text-obsidian mb-8 leading-none">
                       {spec.title}
                     </h3>
                     <p className="font-sans text-obsidian/60 text-base md:text-lg leading-relaxed max-w-md mb-10">
                       {spec.description}
                     </p>
                     <div className="flex flex-wrap justify-center gap-3">
                        <span className="px-4 py-2 border border-obsidian/10 rounded-full font-sans text-[10px] tracking-widest uppercase">{spec.tag}</span>
                        <span className="px-4 py-2 border border-obsidian/10 rounded-full font-sans text-[10px] tracking-widest uppercase">Evidence Based</span>
                     </div>
                   </div>
                 </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};