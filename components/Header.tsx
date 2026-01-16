import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const BOOKING_URL = "https://calendly.com/d/crvm-84g-rp3";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBook = () => {
    window.open(BOOKING_URL, '_blank');
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-sand/90 backdrop-blur-md py-4 border-b border-obsidian/5' 
            : 'bg-transparent py-6 md:py-8 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="relative z-50 flex items-center gap-2 group">
             {/* Abstract Icon */}
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold to-sand border border-obsidian/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
               <div className="w-4 h-4 border border-obsidian/20 rounded-full"></div>
             </div>
             <span className="text-xl md:text-2xl font-display font-semibold tracking-wide text-obsidian">
               Beauty <span className="font-light">Care</span>
             </span>
          </a>

          {/* Desktop Nav - Hidden or minimal based on reference? 
              Reference shows a "Book Now" and a Menu button. 
              Let's adapt to that minimal style.
          */}
          <div className="flex items-center gap-4">
             <Button 
                variant="primary" 
                className="hidden md:block !py-3 !px-8 !rounded-full !text-xs !bg-charcoal !text-sand hover:!bg-obsidian"
                onClick={handleBook}
             >
               Book Now
             </Button>
             
             <button 
                className="relative z-50 p-3 rounded-full bg-obsidian text-sand hover:bg-charcoal transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-sand z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-serif text-obsidian hover:text-gold italic"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8">
            <Button 
              variant="primary" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleBook();
              }}
            >
              Book Consultation
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};