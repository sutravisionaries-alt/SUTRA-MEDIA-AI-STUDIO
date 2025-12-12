import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  colorClass: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, colorClass }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="group relative inline-flex items-center justify-center w-12 h-12 bg-white/5 border border-white/20 rounded-lg shadow-[4px_4px_0px_0px_#333] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg bg-${colorClass}/10`} />
      <span className="relative z-10 text-white group-hover:text-white transition-colors">
        {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      </span>
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="bg-black border border-sutra-neon/50 p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(204,255,0,0.6)] transform -rotate-2 hover:rotate-0 transition-transform duration-300 inline-block mb-6">
              <h2 className="text-3xl font-black tracking-tighter italic">SUTRA</h2>
              <p className="text-xs font-mono text-sutra-neon uppercase tracking-widest">Visionaries</p>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We turn ideas into internet energy. Based in Jalandhar, trending globally.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram />} href="#" colorClass="sutra-pink" />
              <SocialIcon icon={<Linkedin />} href="#" colorClass="blue-500" />
              <SocialIcon icon={<Youtube />} href="#" colorClass="red-500" />
              <SocialIcon icon={<Twitter />} href="#" colorClass="blue-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-sutra-cyan rounded-full"></span> Explore
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "The Blog", path: "/blog" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-sutra-cyan transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-sutra-pink rounded-full"></span> Holler
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="mt-0.5 group-hover:text-sutra-neon transition-colors" />
                <span>Model Town,<br/>Jalandhar, Punjab, India</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="group-hover:text-sutra-neon group-hover:animate-bounce transition-colors" />
                <a href="mailto:sutravisionaries@gmail.com" className="hover:text-white transition-colors">sutravisionaries@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="group-hover:text-sutra-neon group-hover:animate-pulse transition-colors" />
                <a href="tel:+918252755606" className="hover:text-white transition-colors">+91 82527 55606</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-sutra-neon rounded-full"></span> The Drop
            </h3>
            <p className="text-gray-400 text-xs mb-4">
              Get the latest trends before they expire. No spam, just vibes.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="email@address.com" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-sm focus:outline-none focus:border-sutra-neon w-full transition-colors"
              />
              <button className="bg-sutra-neon text-black px-4 rounded-r-lg hover:bg-white transition-colors font-bold">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Sutra Media. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-gray-400">Privacy Policy</a>
             <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;