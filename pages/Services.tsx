import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, ShoppingBag, Smartphone, Star, Clapperboard, 
  Zap, Ghost, Telescope, Gem, Wand2, Megaphone, Rocket, Activity, Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    title: "AI Agent Development",
    slug: "ai-agent-development",
    desc: "Smart, autonomous AI agents that handle support, sales, and workflows while you sleep.",
    tags: ["Automation", "LLMs", "RAG"],
    highlight: true,
    icon: <Bot size={28} />
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    desc: "We run your social presence like a full-time creative studio.",
    tags: ["Strategy", "Content", "Community"],
    icon: <Smartphone size={28} />
  },
  {
    title: "Influencer & Creator Marketing",
    slug: "influencer-creator-marketing",
    desc: "We match you with creators who actually fit your vibe.",
    tags: ["Scouting", "Briefs", "Contracts"],
    icon: <Star size={28} />
  },
  {
    title: "Content Production",
    slug: "content-production",
    desc: "Short, long, cinematic, chaotic — whatever tells the story.",
    tags: ["Reels", "YouTube", "Podcasts"],
    icon: <Clapperboard size={28} />
  },
  {
    title: "Creator Commerce & Store Growth",
    slug: "creator-commerce-store-growth",
    desc: "From thrift-store reels to glossy storefront vibes — we turn your page into a shopping addiction.",
    tags: ["Storefronts", "Product Shoots", "Sales"],
    icon: <ShoppingBag size={28} />
  },
  {
    title: "Brand Consulting",
    slug: "brand-consulting",
    desc: "Build a voice Gen Z wants to listen to. No corporate cringe.",
    tags: ["Identity", "Voice", "Positioning"],
    icon: <Zap size={28} />
  },
  {
    title: "Meme Marketing",
    slug: "meme-marketing",
    desc: "Culturally fluent, ironically self-aware, dangerously sharable.",
    tags: ["Viral", "Humor", "Trends"],
    icon: <Ghost size={28} />
  },
  {
    title: "Trend Research",
    slug: "trend-research",
    desc: "Decode tomorrow, today. We identify what's rising.",
    tags: ["Reports", "Insights", "Future"],
    icon: <Telescope size={28} />
  },
  {
    title: "Creator Sales & Monetization",
    slug: "creator-sales-monetization",
    desc: "Help creators earn through deals, products, and partnerships.",
    tags: ["Media Kits", "Deals", "Merch"],
    icon: <Gem size={28} />
  },
  {
    title: "Video Editing & Post",
    slug: "video-editing-post",
    desc: "From raw clips to studio-quality storytelling.",
    tags: ["VFX", "Cuts", "Color"],
    icon: <Wand2 size={28} />
  },
  {
    title: "PR & Collaborations",
    slug: "pr-collaborations",
    desc: "Your Brand, in the Right Spotlight.",
    tags: ["Press", "Outreach", "Gifting"],
    icon: <Megaphone size={28} />
  },
  {
    title: "Campaign Management",
    slug: "campaign-management",
    desc: "Multi-channel. High-impact. High-energy.",
    tags: ["Rollout", "Budget", "Reporting"],
    icon: <Rocket size={28} />
  },
  {
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    desc: "Numbers that make sense — and actually guide decisions.",
    tags: ["ROI", "Growth", "Data"],
    icon: <Activity size={28} />
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 md:py-20 container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-black mb-6">Pick Your Potion.</h1>
          <p className="text-lg md:text-xl text-gray-300">
            We’re your full-stack creator agency — from daily content to viral campaigns to trend forecasting.
          </p>
        </div>
      </section>

      <section className="pb-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <Link to={`/services/${service.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`p-6 md:p-8 rounded-3xl border transition-all duration-300 group relative overflow-hidden h-full flex flex-col justify-between min-h-[320px] ${
                  service.highlight 
                    ? 'bg-sutra-neon text-black border-sutra-neon hover:shadow-[0_0_40px_rgba(204,255,0,0.3)]' 
                    : 'bg-white/5 border-white/10 hover:border-sutra-cyan hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl transition-all duration-300 ${
                      service.highlight 
                        ? 'bg-black/10 text-black group-hover:bg-black/20' 
                        : 'bg-white/5 text-sutra-cyan group-hover:bg-sutra-neon group-hover:text-black'
                    }`}>
                      {React.cloneElement(service.icon as React.ReactElement, { 
                         className: "transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
                      })}
                    </div>
                    <ArrowUpRight 
                      className={`transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 opacity-50 ${service.highlight ? 'text-black' : 'text-gray-500 group-hover:text-sutra-cyan'}`} 
                    />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${!service.highlight ? 'group-hover:text-sutra-cyan' : ''}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 text-lg leading-relaxed ${service.highlight ? 'text-black/80 font-medium' : 'text-gray-400 group-hover:text-gray-300 transition-colors'}`}>
                    {service.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {service.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className={`text-xs uppercase font-bold px-3 py-1 rounded-full transition-colors duration-300 ${
                        service.highlight 
                          ? 'bg-black/10 text-black group-hover:bg-black/20' 
                          : 'bg-white/10 text-gray-300 group-hover:text-sutra-cyan group-hover:bg-sutra-cyan/10'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Hover effect background */}
                {!service.highlight && (
                   <div className="absolute inset-0 bg-gradient-to-br from-sutra-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-sutra-purple text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Not sure what you need?</h2>
          <Link to="/contact">
             <button className="bg-white text-sutra-purple px-8 py-3 rounded-full font-bold hover:bg-sutra-neon hover:text-black transition-colors hover:scale-105 transform duration-200">
               Let's Chat About It
             </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;