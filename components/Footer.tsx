import React from 'react';
import { Button } from './Button';
import { Instagram, Linkedin, Facebook, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const BOOKING_URL = "https://calendly.com/d/crvm-84g-rp3";

  return (
    <footer id="footer" className="bg-charcoal text-sand pt-32 pb-12 rounded-t-[3rem] mt-20">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col items-center text-center mb-32 border-b border-sand/10 pb-20">
          <div className="max-w-4xl">
            <h2 className="font-serif text-5xl md:text-8xl leading-[0.9] mb-12 text-sand">
              Invest in your confidence.
            </h2>
          </div>
          <div>
             <button 
                onClick={() => window.open(BOOKING_URL, '_blank')}
                className="group flex items-center gap-4 text-2xl md:text-3xl font-display italic text-sand hover:text-gold transition-colors duration-300"
             >
               Book Appointment <span className="bg-sand/10 p-4 rounded-full group-hover:bg-gold group-hover:text-obsidian transition-all"><ArrowRight /></span>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand & Address */}
          <div className="md:col-span-4 flex flex-col justify-between h-full items-center text-center">
            <div>
              <h3 className="font-display text-2xl mb-8">VITALS <span className="text-gold italic font-light">KLINIC</span></h3>
              <address className="font-sans text-sand/60 text-sm leading-relaxed not-italic">
                <strong className="text-sand block mb-2">BTM Layout Branch</strong>
                No. 43, 2nd Floor, 100 Feet Ring Road,<br/>
                BTM Layout 2nd Stage,<br/>
                Bangalore - 560076<br/><br/>
                <a href="tel:+918884666633" className="hover:text-white transition-colors">+91 8884 666 633</a><br/>
                <a href="mailto:info@vitalsklinic.com" className="hover:text-white transition-colors">info@vitalsklinic.com</a>
              </address>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-8">Clinical Services</h4>
            <ul className="space-y-4 font-display text-xl md:text-2xl text-sand/80">
              <li><a href="#" className="hover:text-white hover:pl-4 transition-all duration-300 block">Dermatology</a></li>
              <li><a href="#" className="hover:text-white hover:pl-4 transition-all duration-300 block">Hair Transplantation</a></li>
              <li><a href="#" className="hover:text-white hover:pl-4 transition-all duration-300 block">Laser Treatments</a></li>
              <li><a href="#" className="hover:text-white hover:pl-4 transition-all duration-300 block">Anti-Aging</a></li>
            </ul>
          </div>

           {/* Newsletter */}
           <div className="md:col-span-4">
            <div className="bg-sand/5 p-8 rounded-2xl border border-sand/5">
               <h4 className="font-display text-xl mb-4 text-center">The Skin Edit</h4>
               <p className="font-sans text-xs text-sand/60 mb-6 leading-relaxed text-center">Join our community for expert dermatological tips and exclusive updates.</p>
               <form className="flex flex-col gap-4">
                 <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-transparent border-b border-sand/20 py-3 text-sm text-sand focus:outline-none focus:border-gold transition-colors placeholder:text-sand/20 text-center"
                 />
                 <Button variant="outline" className="w-full !py-3 !text-xs !border-sand/20 hover:!border-sand !tracking-widest mt-2">Subscribe</Button>
               </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center font-sans text-[10px] text-sand/40 tracking-widest uppercase border-t border-sand/10 pt-8 text-center gap-4 md:gap-0">
          <p>© 2024 Vitals Klinic. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-sand transition-colors">Privacy</a>
            <a href="#" className="hover:text-sand transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};