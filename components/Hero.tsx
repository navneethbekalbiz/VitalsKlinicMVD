import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleBook = () => {
    window.open("https://calendly.com/d/crvm-84g-rp3", '_blank');
  };

  return (
    <section className="relative min-h-[100dvh] w-full bg-sand overflow-hidden pt-24 pb-8 md:pb-20 flex flex-col justify-end">
      
      {/* Central Model Image - Styled as an Arch Window */}
      <div className="absolute inset-0 flex items-end justify-center z-0 pointer-events-none">
         <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl h-[65dvh] sm:h-[75dvh] md:h-[85dvh] relative flex justify-center items-end"
         >
            <div className="relative w-full h-full rounded-t-[10rem] md:rounded-t-[20rem] overflow-hidden shadow-2xl shadow-obsidian/5">
                <img 
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop" 
                  alt="Vitals Klinic Aesthetic Model" 
                  className="h-full w-full object-cover object-top will-change-transform"
                />
                {/* Internal gradient to help blend the bottom into the sand background */}
                <div className="absolute inset-0 bg-gradient-to-t from-sand via-transparent to-transparent opacity-60" />
            </div>
         </motion.div>
         
         {/* External Gradient Overlay for Text Readability */}
         <div className="absolute bottom-0 left-0 w-full h-3/4 md:h-1/2 bg-gradient-to-t from-sand via-sand/90 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col items-center text-center gap-8 mb-8 md:mb-12">
          
          {/* Headline */}
          <div className="w-full max-w-5xl">
            <Reveal width="100%">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] leading-[0.95] md:leading-[0.85] tracking-tight text-obsidian drop-shadow-sm">
                Science-Backed <br />
                <span className="font-semibold italic">Artistry</span>
              </h1>
            </Reveal>
          </div>

          {/* Subtext & CTA */}
          <div className="flex flex-col gap-8 items-center max-w-2xl">
             <Reveal delay={0.2} width="100%">
               <p className="font-sans text-obsidian/80 text-sm md:text-base leading-relaxed font-medium md:font-normal mx-auto text-balance">
                 Experience the pinnacle of dermatological excellence. Where advanced medical technology meets personalized aesthetic care.
               </p>
             </Reveal>
             
             <Reveal delay={0.3} width="100%">
               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                  <button 
                    onClick={handleBook}
                    className="px-6 py-3 md:px-8 md:py-4 bg-charcoal text-sand rounded-full font-sans text-xs md:text-sm font-medium tracking-wide hover:bg-obsidian transition-all flex items-center justify-center gap-2 group shadow-lg shadow-obsidian/10 w-full sm:w-auto"
                  >
                    Book Consultation 
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                  </button>
                  <button className="px-6 py-3 md:px-8 md:py-4 bg-white/60 md:bg-white/80 backdrop-blur-sm text-obsidian border border-obsidian/5 hover:border-obsidian/10 rounded-full font-sans text-xs md:text-sm font-medium tracking-wide transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
                    Explore Treatments
                  </button>
               </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};