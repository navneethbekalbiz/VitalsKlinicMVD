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
    <div className="min-h-screen bg-sand text-obsidian selection:bg-gold selection:text-white font-sans">
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
  );
}

export default App;