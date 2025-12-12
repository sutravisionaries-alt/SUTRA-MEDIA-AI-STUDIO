import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

interface BlogPostProps {
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
}

const blogData: Record<string, BlogPostProps> = {
  "tiktok-trends-2025": {
    title: "5 TikTok Trends About To Explode in 2025",
    category: "Trends",
    date: "Oct 12, 2024",
    author: "Prashant Tiwari",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop",
    content: (
      <>
        <p className="text-xl font-light leading-relaxed mb-8 text-gray-300">
          If you're still doing dance challenges, you're living in 2023. The algorithm is changing, and so is the vibe. Here’s what’s actually going to dominate your FYP next year.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-neon">1. Silent Reviews</h3>
        <p className="mb-6 text-gray-400">
          The era of shouting at the camera is fading. Creators are doing ASMR-style "silent reviews" where facial expressions and subtle gestures do the talking. It's high engagement because it forces people to watch, not just listen.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-neon">2. The "Anti-Aesthetic" Dump</h3>
        <p className="mb-6 text-gray-400">
          Polished, curated feeds are out. Blurry photos, chaotic screenshots, and unedited thoughts are in. Gen Z craves authenticity, not perfection.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-neon">3. Long-Form Storytelling (Again)</h3>
        <p className="mb-6 text-gray-400">
          TikTok keeps increasing video limits for a reason. Multi-part "storytime" sagas are retaining viewers longer than 15-second clips. If you can tell a good story, you win.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-neon">4. Niche Micro-Communities</h3>
        <p className="mb-6 text-gray-400">
          "Core" culture isn't dead. Whether it's #Whimsigoth or #CyberY2K, branding yourself into a hyper-specific niche is the fastest way to build a loyal cult following.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-neon">5. AI-Assisted, Human-Curated</h3>
        <p className="mb-6 text-gray-400">
          Creators are using AI for visuals, but the *opinion* and *voice* must be aggressively human. The more robotic content floods the platform, the more valuable raw, human personality becomes.
        </p>
      </>
    )
  },
  "local-brand-viral": {
    title: "How We Turned a Local Brand into a Viral Moment",
    category: "Case Study",
    date: "Oct 08, 2024",
    author: "Amit Pandey",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    content: (
      <>
        <p className="text-xl font-light leading-relaxed mb-8 text-gray-300">
          They had 500 followers and a great product. We gave them a voice, a meme strategy, and a little bit of chaos. Here's the breakdown of a Sutra Media campaign.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-pink">The Problem</h3>
        <p className="mb-6 text-gray-400">
          A local streetwear thrift store in Jalandhar had amazing stock but zero online hype. Their posts were just photos of clothes on hangers. Boring.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-pink">The Strategy: "Roast The Outfit"</h3>
        <p className="mb-6 text-gray-400">
          Instead of saying "buy this shirt," we created a series where the owner roasted terrible fashion trends while wearing the store's best pieces. It was risky, funny, and sharable.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-pink">The Execution</h3>
        <p className="mb-6 text-gray-400">
          We shot 10 Reels in one day. Low budget, high energy. We used trending audio but twisted the context to fit Punjab's local humor. We engaged with every single comment, even the haters.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-pink">The Results</h3>
        <ul className="list-disc list-inside mb-6 text-gray-400 space-y-2">
          <li>1.2 Million views in 2 weeks.</li>
          <li>Follower count went from 500 to 15k.</li>
          <li>Store sold out of inventory in 3 days.</li>
        </ul>
        <p className="mb-6 text-gray-400 font-bold">
          Takeaway: Don't just sell the product. Sell the personality.
        </p>
      </>
    )
  },
  "creator-spotlight": {
    title: "Creator Spotlight: Behind the Scenes of Internet Stardom",
    category: "Interview",
    date: "Sep 28, 2024",
    author: "Sutra Team",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    content: (
      <>
        <p className="text-xl font-light leading-relaxed mb-8 text-gray-300">
          We sat down with one of Punjab's rising comedy creators to talk about burnout, the algorithm, and what it really takes to stay relevant.
        </p>
        <div className="border-l-4 border-sutra-cyan pl-6 my-8 italic text-gray-300">
          "People think you just wake up, hold a camera, and get famous. They don't see the 4 hours of scripting or the anxiety of a flopped video."
        </div>
        <h3 className="text-2xl font-bold mb-4 text-sutra-cyan">Q: How do you handle the pressure to post daily?</h3>
        <p className="mb-6 text-gray-400">
          "Honestly? Batch creation. If I feel funny on a Tuesday, I film 5 videos. If I'm sad on Wednesday, I edit. You have to work *with* your mood, not against it."
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-cyan">Q: What's the biggest mistake new creators make?</h3>
        <p className="mb-6 text-gray-400">
          "Copying without remixing. It's okay to do a trend, but if you don't add your own flavor, why should anyone follow *you* specifically? Be weird. Weird wins."
        </p>
        <h3 className="text-2xl font-bold mb-4 text-sutra-cyan">Q: Advice for brands working with creators?</h3>
        <p className="mb-6 text-gray-400">
          "Stop writing the script for us. Give us the key message, then let us say it in our own language. The audience smells a corporate script from a mile away."
        </p>
      </>
    )
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !blogData[slug]) {
    return <Navigate to="/blog" replace />;
  }

  const post = blogData[slug];

  return (
    <div className="pt-20 min-h-screen">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex flex-col justify-end container mx-auto px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bg-sutra-neon text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-gray-200">
              <div className="flex items-center gap-2">
                <User size={18} className="text-sutra-cyan" /> {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-sutra-pink" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-yellow-400" /> {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <div className="prose prose-invert prose-lg prose-headings:font-bold prose-p:text-gray-300 prose-li:text-gray-300">
          {post.content}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <Link to="/blog" className="group flex items-center gap-2 text-gray-400 hover:text-sutra-neon transition-colors font-bold">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Feed
          </Link>
          <div className="text-sm text-gray-500 italic">
            Share this if you vibe with it.
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;