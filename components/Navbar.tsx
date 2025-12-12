import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Closes mobile menu on route change and adds accessibility label
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="group">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
            Sutra Media
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-sutra-neon group-hover:text-sutra-pink transition-colors">
            by Sutra Visionaries
          </p>
        </Link>

        {/* Desktop Nav with Active Highlighting */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                isActive(link.path) 
                  ? 'text-sutra-neon scale-105' // Active link style
                  : 'text-white hover:text-sutra-neon' // Default/Hover style
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className="bg-sutra-neon text-black px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform hover:bg-white">
              Let's Collab
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle with Accessibility */}
        <button 
          className="md:hidden text-white hover:text-sutra-neon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'} 
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Active Highlighting */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 py-8 px-6 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-2xl font-bold transition-colors ${
                  isActive(link.path) 
                    ? 'text-sutra-neon' // Active link style
                    : 'text-white hover:text-sutra-neon' // Default/Hover style
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex space-x-6 pt-4 border-t border-white/10">
              <Instagram size={24} className="hover:text-sutra-pink cursor-pointer" />
              <Linkedin size={24} className="hover:text-blue-400 cursor-pointer" />
              <Youtube size={24} className="hover:text-red-500 cursor-pointer" />
              <Twitter size={24} className="hover:text-blue-300 cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;