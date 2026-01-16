import React from 'react';
import { DOCTORS } from '../constants';
import { Reveal } from './Reveal';
import { Carousel, Card } from './ui/apple-cards-carousel';

export const Experts: React.FC = () => {
  
  const cards = DOCTORS.map((doctor, index) => (
    <Card 
      key={doctor.id} 
      card={{
        src: doctor.image,
        title: doctor.name,
        category: doctor.role,
        content: (
          <div className="flex flex-col gap-6">
            <p className="font-sans text-lg text-obsidian/80 leading-relaxed font-light">
              {doctor.name} is a leading expert in their field, bringing years of clinical experience and a passion for aesthetic excellence to Vitals Klinic.
            </p>
            <div className="p-6 bg-sand/30 rounded-2xl border border-obsidian/5">
               <h4 className="font-display text-xl mb-4">Credentials & Expertise</h4>
               <ul className="list-disc list-inside space-y-2 font-sans text-obsidian/70">
                 <li>Board Certified Dermatologist</li>
                 <li>10+ Years of Experience</li>
                 <li>Specialized in {index === 0 ? "Aesthetic Procedures" : "Hair Restoration"}</li>
                 <li>Member of International Dermatology Society</li>
               </ul>
            </div>
          </div>
        )
      }} 
      index={index} 
    />
  ));

  return (
    <section id="experts" className="py-24 md:py-36 bg-sand relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <Reveal width="100%">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <span className="text-gold font-sans tracking-[0.2em] text-xs uppercase">Meet the Experts</span>
            <h2 className="font-display text-4xl md:text-6xl text-obsidian">The Glow Squad</h2>
            <p className="font-sans text-obsidian/60 leading-relaxed font-light">
              Led by world-class dermatologists, our team combines decades of clinical experience with a passion for aesthetic harmony. We believe in results that look natural, not done.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="w-full h-full">
         <Carousel items={cards} />
      </div>
    </section>
  );
};