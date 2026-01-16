import React, { useState } from 'react';
import { TREATMENTS } from '../constants';
import { Reveal } from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Treatments: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TREATMENTS[0]);
  const BOOKING_URL = "https://calendly.com/d/crvm-84g-rp3";

  return (
    <section id="treatments" className="py-24 md:py-36 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-gold font-sans tracking-[0.2em] text-xs uppercase block mb-4">Our Services</span>
            <h2 className="font-display text-4xl md:text-5xl text-obsidian mb-6">Signature Treatments</h2>
            <p className="font-sans text-obsidian/60 max-w-xl mx-auto font-light leading-relaxed">
              The Vitals Approach focuses on root-cause analysis rather than just surface-level fixes. 
              <span className="block mt-2 font-medium text-gold">Tap on a category to explore.</span>
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left: Tab Menu */}
          <div className="w-full lg:w-1/3 flex flex-col">
            {TREATMENTS.map((treatment, index) => (
              <button
                key={treatment.id}
                onClick={() => setActiveTab(treatment)}
                className={`group py-8 border-b border-obsidian/10 text-left transition-all duration-500 relative ${
                  activeTab.id === treatment.id ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-6">
                    <span className="font-sans text-xs font-medium tracking-widest text-gold">
                      0{index + 1}
                    </span>
                    <span className="font-display text-2xl md:text-3xl text-obsidian">
                      {treatment.title}
                    </span>
                  </div>
                  {activeTab.id === treatment.id && (
                    <ArrowRight className="text-obsidian w-5 h-5 animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Content Area */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              >
                {/* Image */}
                <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative overflow-hidden rounded-3xl shadow-lg order-1 md:order-2">
                  <img 
                    src={activeTab.image} 
                    alt={activeTab.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-cream/90 px-4 py-2 backdrop-blur-md rounded-full shadow-sm">
                     <span className="font-sans text-[10px] tracking-widest text-obsidian uppercase font-semibold">Vitals Protocol</span>
                  </div>
                </div>

                {/* Info - Centered H3 */}
                <div className="flex flex-col justify-center items-center text-center order-2 md:order-1">
                  <h3 className="font-display text-3xl md:text-4xl text-obsidian mb-6">{activeTab.title}</h3>
                  <p className="font-sans text-obsidian/70 mb-8 leading-relaxed font-light text-lg">
                    {activeTab.description}
                  </p>
                  
                  <div className="mb-10 w-full flex flex-col items-center">
                    <h4 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4 opacity-50">Included Steps</h4>
                    <ul className="space-y-4">
                      {activeTab.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center font-sans text-sm text-obsidian/80">
                          <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3 mt-0.5 shrink-0">
                            <Check size={10} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="primary" 
                    onClick={() => window.open(BOOKING_URL, '_blank')}
                  >
                    Book This Treatment
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};