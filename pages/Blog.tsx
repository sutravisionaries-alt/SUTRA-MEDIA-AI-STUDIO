import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "5 TikTok Trends About To Explode in 2025",
      slug: "tiktok-trends-2025",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
      date: "Oct 12, 2024"
    },
    {
      title: "How We Turned a Local Brand into a Viral Moment",
      slug: "local-brand-viral",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      date: "Oct 08, 2024"
    },
    {
      title: "Creator Spotlight: Behind the Scenes of Internet Stardom",
      slug: "creator-spotlight",
      category: "Interview",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      date: "Sep 28, 2024"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 container mx-auto px-6 text-center">
        <h1 className="text-5xl font-black mb-4">The Sutra Feed</h1>
        <p className="text-xl text-gray-400">Trends, tea, and tactical wisdom — fresh from the Sutra brain.</p>
      </section>

      <section className="pb-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link to={`/blog/${post.slug}`} key={i}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer h-full flex flex-col"
              >
                <div className="h-48 w-full relative overflow-hidden flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase border border-white/20">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-gray-500 text-sm mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-sutra-neon transition-colors flex-grow">
                    {post.title}
                  </h3>
                  <div className="text-sutra-cyan text-sm font-bold uppercase tracking-wider flex items-center gap-2 mt-auto">
                    Read Article <span className="text-lg">→</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;