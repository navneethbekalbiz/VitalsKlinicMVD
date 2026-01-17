import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Specializations } from './components/Specializations';
import { Experts } from './components/Experts';
import { Treatments } from './components/Treatments';
import { Gallery } from './components/Gallery';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-sand text-obsidian selection:bg-gold selection:text-white font-sans overflow-x-hidden">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Ambient Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-gold/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-sand rounded-full blur-[80px] opacity-80" />
      </div>

      <div className="relative z-10 text-balance">
        <Header />
        <main>
          <Hero />
          <Intro />
          <Specializations />
          <Experts />
          <Treatments />
          <Gallery />
          <Stats />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;