import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ServicePageProps {
  title: string;
  headline: string;
  description: string;
  offerings: string[];
  ctaText: string;
  color: string; // Tailwind color class for primary elements
  icon: React.ReactNode;
  heroImage?: string;
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
  title,
  headline,
  description,
  offerings,
  ctaText,
  color,
  icon,
  heroImage
}) => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt={title} 
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          </div>
        )}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-block p-4 rounded-3xl bg-white/10 border border-white/20 mb-6 ${color}`}
            >
              {React.cloneElement(icon as React.ReactElement, { size: 48 })}
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-black mb-4 leading-tight">
              {title}
            </h1>
            <h2 className={`text-2xl md:text-4xl font-bold mb-8 ${color}`}>
              {headline}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-16 md:py-24 bg-white/5 border-t border-white/10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-3xl font-bold mb-6 ${color}`}>What's Included:</h3>
            <ul className="space-y-4">
              {offerings.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-black/20 rounded-xl border border-white/10"
                >
                  <Check size={24} className={`${color} flex-shrink-0 mt-0.5`} />
                  <span className="text-lg text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-black to-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between h-full text-center"
          >
            <div className="mb-8">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Ready to Launch?</p>
              <h3 className="text-4xl font-black mb-4">Let's Talk {title}</h3>
              <p className="text-gray-300">
                Click below to schedule a discovery call and see exactly how we can apply this energy to your brand.
              </p>
            </div>
            <Link to="/contact" className="w-full">
              <button className={`w-full bg-sutra-neon text-black font-bold py-4 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 group`}>
                {ctaText} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-6 py-10">
        <Link to="/services" className="text-gray-500 hover:text-white transition-colors text-sm">
          ← Back to All Services
        </Link>
      </div>
    </div>
  );
};

export default ServicePageTemplate;