import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Instagram, Linkedin, Facebook, Youtube, Phone, Mail, Heart, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const BOOKING_URL = "https://calendly.com/d/crvm-84g-rp3";

  return (
    <footer id="footer" className="relative mt-20 pt-32 pb-12 rounded-t-[3rem] overflow-hidden bg-obsidian">
      {/* Dark Glass Background Layers */}
      <div className="absolute inset-0 bg-obsidian/90 backdrop-blur-xl border-t border-white/5 z-0 pointer-events-none"></div>
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-sand">

        {/* Top Section: CTA */}
        <div className="flex flex-col items-center text-center mb-20 border-b border-white/5 pb-20">
          <div className="max-w-4xl">
            <h2 className="font-serif text-5xl md:text-8xl leading-[0.9] mb-12 text-sand drop-shadow-lg">
              Invest in your <span className="text-gold italic">confidence.</span>
            </h2>
          </div>
          <div>
            <button
              onClick={() => window.open(BOOKING_URL, '_blank')}
              className="group flex items-center gap-4 text-2xl md:text-3xl font-display text-sand hover:text-gold transition-colors duration-300"
            >
              Book Appointment <span className="bg-white/10 p-4 rounded-full group-hover:bg-gold group-hover:text-obsidian transition-all"><ArrowRight /></span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand & Address */}
          <div className="md:col-span-4 flex flex-col justify-between h-full">
            <div className="text-center md:text-left">
              <h3 className="font-display text-3xl mb-8 text-sand">VITALS <span className="text-gold italic font-light">KLINIC</span></h3>
              <p className="font-sans text-sand/60 text-sm leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
                Experience the pinnacle of aesthetic care where medical expertise meets artistic vision. We redesign your confidence with science-backed treatments.
              </p>

              <div className="flex flex-col gap-4 text-sand/80 font-sans text-sm items-center md:items-start mb-8">
                <a href="tel:+919206869610" className="flex items-center gap-3 hover:text-gold transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-obsidian transition-all">
                    <Phone size={14} />
                  </span>
                  +91 92068 69610
                </a>
                <a href="mailto:vitalsklinic@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-obsidian transition-all">
                    <Mail size={14} />
                  </span>
                  vitalsklinic@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              <SocialIcon
                href="https://www.instagram.com/vitalsklinic/"
                icon={<Instagram size={18} />}
                label="Instagram"
                hoverColor="hover:text-[#E1306C] hover:border-[#E1306C] hover:shadow-[0_0_15px_rgba(225,48,108,0.3)]"
              />
              <SocialIcon
                href="https://www.facebook.com/vitalsklinic/"
                icon={<Facebook size={18} />}
                label="Facebook"
                hoverColor="hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.3)]"
              />
              <SocialIcon
                href="https://www.linkedin.com/company/vitals-klinic/"
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                hoverColor="hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]"
              />
              <SocialIcon
                href="https://www.youtube.com/channel/UCP9EYhcOYnw5TeINc0n_3Bw"
                icon={<Youtube size={18} />}
                label="YouTube"
                hoverColor="hover:text-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              />

              {/* Custom Pinterest Icon */}
              <a
                href="https://in.pinterest.com/vitalsklinic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sand transition-all duration-300 border border-white/10 hover:-translate-y-1 hover:text-[#E60023] hover:border-[#E60023] hover:shadow-[0_0_15px_rgba(230,0,35,0.3)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns (Split to match Navbar) */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-8">Company</h4>
            <ul className="space-y-4 font-display text-lg text-sand/80">
              <li><Link to="/" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Home</Link></li>
              <li><a href="#experts" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Our Team</a></li>
              <li><a href="#infrastructure" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Infrastructure</a></li>
              <li><Link to="/blog" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Journal</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-8">Services</h4>
            <ul className="space-y-4 font-display text-lg text-sand/80">
              <li><a href="#hair-care" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Hair Care</a></li>
              <li><a href="#skincare" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Skincare</a></li>
              <li><a href="#anti-aging" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Anti-Aging</a></li>
              <li><a href="#surgeries" className="hover:text-gold hover:pl-2 transition-all duration-300 block">Surgeries</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 text-center md:text-left">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-angled hover:border-gold/30 transition-colors">
              <h4 className="font-display text-xl mb-4 text-sand">The Skin Edit</h4>
              <p className="font-sans text-xs text-sand/60 mb-6 leading-relaxed">Join our community for expert dermatological tips and exclusive offers.</p>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-white/20 py-3 text-sm text-sand focus:outline-none focus:border-gold transition-colors placeholder:text-sand/20"
                />
                <Button variant="outline" className="w-full !py-3 !text-xs !border-white/20 !text-sand hover:!bg-gold hover:!text-obsidian hover:!border-gold !tracking-widest mt-2">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center font-sans text-[10px] text-sand/40 tracking-widest uppercase border-t border-white/5 pt-8 text-center gap-4 md:gap-0">
          <p>© 2024 Vitals Klinic. All Rights Reserved.</p>

          {/* Credit Section */}
          <a
            href="https://notyouraverage.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors group cursor-pointer"
          >
            <span>Built with Love By NotYourAverage</span>
            <Heart size={12} className="text-red-500 fill-red-500 group-hover:scale-125 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon, label, hoverColor }: { href: string, icon: React.ReactNode, label: string, hoverColor: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sand transition-all duration-300 border border-white/10 hover:-translate-y-1 ${hoverColor}`}
  >
    {icon}
  </a>
)