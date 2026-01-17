import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';
import heroVideo from './ASSETS/HERO/VitalKlinic_HEROVIDEO.mp4';
import { QuizModal } from './QuizModal';

export const Hero: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = React.useState(false);

  const handleBook = () => {
    window.open("https://calendly.com/d/crvm-84g-rp3", '_blank');
  };

  return (
    <section className="relative h-[100dvh] w-full bg-sand overflow-hidden pt-32 md:pt-40 pb-8 md:pb-20 flex flex-col justify-end">

      {/* Central Model Image - Styled as an Arch Window */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <div className="relative w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-center"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            {/* Internal gradient to help blend the bottom into the sand background */}
            <div className="absolute inset-0 bg-gradient-to-t from-sand via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        {/* External Gradient Overlay for Text Readability - Smooth fade from bottom */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-sand via-sand/80 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 pb-12 md:pb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 md:gap-8">

          {/* Headline - Left Aligned */}
          <div className="w-full md:w-1/2 relative z-10 text-left">
            <Reveal width="100%">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl leading-[1.1] tracking-tight text-obsidian drop-shadow-sm text-left mb-4 md:mb-0">
                Science-Backed <br />
                <span className="italic text-gold">Artistry</span>
              </h1>
            </Reveal>
          </div>

          {/* Subtext & CTA - Right Aligned */}
          <div className="w-full md:w-[40%] flex flex-col gap-8 items-start relative z-10">
            <Reveal delay={0.2} width="100%">
              <p className="font-sans text-obsidian/90 text-sm md:text-base font-medium leading-relaxed text-left max-w-md">
                Personalised face and body treatments, designed by licensed aesthetic doctors and skin therapists. Experience the pinnacle of dermatological excellence.
              </p>
            </Reveal>

            <Reveal delay={0.3} width="100%">
              <div className="flex flex-wrap gap-4 w-full justify-start">
                <button
                  onClick={handleBook}
                  className="px-8 py-4 bg-obsidian text-sand rounded-full font-sans text-sm font-semibold tracking-wide hover:bg-charcoal transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
                >
                  Book a consultation
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="px-8 py-4 bg-white text-obsidian rounded-full font-sans text-sm font-semibold tracking-wide hover:bg-gray-50 transition-all duration-300 shadow-md"
                >
                  Take the skin quiz
                </button>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
};