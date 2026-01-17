import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-cream flex flex-col items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center relative z-10 w-full px-4">
          <div className="mb-12 text-gold opacity-80 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            <Quote size={64} fill="currentColor" className="drop-shadow-lg" />
          </div>

          <div className="h-64 relative w-full max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center"
              >
                <p className="font-display text-2xl md:text-4xl italic text-obsidian mb-8 leading-normal">
                  "{TESTIMONIALS[index].quote}"
                </p>
                <div>
                  <p className="font-sans font-medium text-obsidian tracking-wide">{TESTIMONIALS[index].author}</p>
                  <p className="font-sans text-xs text-gold uppercase tracking-widest mt-1">{TESTIMONIALS[index].procedure}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-2 mt-4">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-300 ${i === index ? 'w-8 bg-obsidian' : 'w-2 bg-obsidian/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
