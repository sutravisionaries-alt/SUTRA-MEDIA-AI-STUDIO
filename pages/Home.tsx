import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Video, Users, Zap, MessageCircle, RefreshCw, CheckCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Home: React.FC = () => {
  const [slangInput, setSlangInput] = useState('');
  const [slangOutput, setSlangOutput] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!slangInput.trim()) return;
    
    setIsTranslating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Act as a sarcastic, viral social media manager. Rewrite the following text into peak Gen-Z slang, "internet brainrot", and catchy social media speak. 
        
        Rules:
        1. Make it hilarious and slightly unhinged.
        2. Do NOT use any markdown formatting (no asterisks, bolding, or italics).
        3. Do NOT use grammar mistakes unless it's intentional slang.
        4. Keep it short and punchy.
        
        Input text to rewrite: "${slangInput}"`,
      });
      if (response.text) {
        setSlangOutput(response.text);
      }
    } catch (error) {
      console.error("Gemini error:", error);
      setSlangOutput("Bestie, the wifi is flagon. Try again later. 💀");
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sutra-neon rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sutra-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
              We Turn Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sutra-neon via-white to-sutra-cyan">
                Internet Energy.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              Sutra Media — a next-gen media agency based in Jalandhar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-sutra-neon text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white transition-colors"
                >
                  Start Your Trend <Zap size={20} fill="currentColor" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-16 md:py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold leading-tight"
          >
            "One squad. Unlimited chaos-but-make-it-strategic. We help brands talk, walk, and vibe like Gen Z."
          </motion.h2>
        </div>
      </section>

      {/* CORE SERVICES TEASER */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Users size={32} />, 
                title: "Social Media Management", 
                desc: "Your feed, but aesthetic & active." 
              },
              { 
                icon: <Sparkles size={32} />, 
                title: "Influencer Marketing", 
                desc: "Connecting you with the cool kids." 
              },
              { 
                icon: <Video size={32} />, 
                title: "Content Production", 
                desc: "Reels that stop the doomscroll." 
              },
              { 
                icon: <TrendingUp size={32} />, 
                title: "Brand Consulting", 
                desc: "No boomer energy allowed." 
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 hover:border-sutra-neon/50 transition-all group"
              >
                <div className="text-sutra-cyan mb-4 group-hover:text-sutra-neon transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK (Horizontal Scroll Sim) */}
      <section className="py-16 md:py-24 overflow-hidden bg-[#0f0f0f]">
        <div className="container mx-auto px-6 mb-8 md:mb-12 flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Drops</h2>
          <Link to="/services" className="text-sutra-neon hover:underline text-sm uppercase tracking-widest">See how we do it</Link>
        </div>
        
        {/* Simple Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-8 space-x-4 md:space-x-6 px-6 no-scrollbar snap-x">
          {[
            { 
              title: "Viral Campaign", 
              stat: "2M+ Views", 
              desc: "This campaign said 'viral' and the internet listened.",
              image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop",
              overlay: "from-purple-900/90"
            },
            { 
              title: "YouTube Growth", 
              stat: "+50K Subs", 
              desc: "YouTube series glow-up.",
              image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
              overlay: "from-pink-900/90"
            },
            { 
              title: "Creator Event", 
              stat: "Sold Out", 
              desc: "Offline energy matching the online hype.",
              image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
              overlay: "from-blue-900/90"
            },
            { 
              title: "Brand Store", 
              stat: "$10k Sales", 
              desc: "From thrift feed to sold out drop.",
              image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
              overlay: "from-green-900/90"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className={`min-w-[85vw] sm:min-w-[400px] h-[350px] md:h-[400px] rounded-3xl p-6 md:p-8 flex flex-col justify-end relative overflow-hidden snap-center border border-white/10 group cursor-pointer bg-cover bg-center`}
              style={{ backgroundImage: `url(${item.image})` }}
              whileHover={{ scale: 0.98 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${item.overlay} via-black/40 to-black/20 z-10`} />
              <div className="relative z-20">
                 <div className="bg-sutra-neon text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 shadow-lg">
                    {item.stat}
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                 <p className="text-gray-200 text-sm md:text-base font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VIBE TRANSLATOR (GEMINI) */}
      <section className="py-16 md:py-24 bg-black border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sutra-cyan opacity-5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sutra-neon mb-4 border border-sutra-neon/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles size={12} /> Powered by TEAM SUTRA
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Corporate to Cool Converter.</h2>
            <p className="text-gray-400 text-lg mb-8">
              <strong>How it works:</strong> You paste your boring, professional emails or captions below. We use AI to rewrite them into unhinged, viral-ready internet slang. No cap.
            </p>
            
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
              <textarea 
                value={slangInput}
                onChange={(e) => setSlangInput(e.target.value)}
                placeholder="Ex: 'I am writing to inquire about the project status.'"
                className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-sutra-cyan focus:outline-none focus:ring-1 focus:ring-sutra-cyan transition-all resize-none text-white mb-4 h-32"
              />
              <button 
                onClick={handleTranslate}
                disabled={isTranslating}
                className="w-full bg-sutra-cyan text-black font-bold py-3 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTranslating ? <RefreshCw className="animate-spin" size={20} /> : <Sparkles size={20} />}
                {isTranslating ? 'Cooking...' : 'Yassify This Text'}
              </button>
            </div>
          </div>  
          <div className="relative">
             <motion.div 
               className="bg-gradient-to-br from-purple-900 to-black p-8 rounded-3xl border border-white/10 min-h-[250px] md:min-h-[300px] flex flex-col justify-center relative overflow-hidden"
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
             >
               <div className="absolute top-4 left-4 flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500" />
                 <div className="w-3 h-3 rounded-full bg-green-500" />
               </div>
               
               {slangOutput ? (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sutra-pink to-sutra-neon leading-snug"
                 >
                   "{slangOutput}"
                 </motion.div>
               ) : (
                 <div className="text-center text-gray-500 font-mono text-sm">
                   // Result will appear here...
                   <br/>
                   Waiting for the vibe check... 💅
                 </div>
               )}
             </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Chaos to Clarity Engine.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We mix strategy with unhinged creativity. Trend spotting with cultural decoding. Analytics with vibes. We’re basically your brand’s chaos-to-clarity engine.
            </p>
            
            <div className="flex justify-center mb-8">
              <ul className="space-y-4 text-left inline-block">
                {[
                  { title: "Strategy", desc: "Data-backed, not guess-backed.", color: "text-sutra-pink" },
                  { title: "Creativity", desc: "Scroll-stopping visuals.", color: "text-sutra-neon" },
                  { title: "Culture", desc: "We speak internet native.", color: "text-sutra-cyan" },
                  { title: "Vibes", desc: "Immaculate energy only.", color: "text-yellow-400" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors w-full md:min-w-[400px]">
                    <CheckCircle className={item.color} size={24} />
                    <div>
                      <span className={`font-bold text-lg ${item.color}`}>{item.title}</span>
                      <span className="text-gray-400 text-sm ml-2">- {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/about" className="text-white bg-white/10 hover:bg-white hover:text-black font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all">
              Meet the Visionaries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-[#0f0f0f]">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 md:mb-16">Street Cred</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { text: "Sutra Media didn't just run a campaign; they created a cultural moment.", author: "Raj, Brand Manager" },
               { text: "They get Gen Z better than Gen Z sometimes.", author: "Priya, Founder" },
               { text: "Our engagement skyrocketed. So did our mood.", author: "Aman, Content Director" }
             ].map((t, i) => (
               <div key={i} className="relative bg-white/5 p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-xl rounded-br-xl border border-white/10">
                  <MessageCircle className="absolute -top-4 -left-4 text-sutra-purple bg-black p-2 w-12 h-12 rounded-full border border-white/20" />
                  <p className="text-lg italic mb-6">"{t.text}"</p>
                  <p className="font-bold text-sutra-neon">- {t.author}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 md:py-32 bg-sutra-neon text-black text-center relative overflow-hidden">
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">
            Ready to make some noise?
          </h2>
          <p className="text-lg md:text-2xl font-medium mb-8 md:mb-10">
            Let's create something iconic together.
          </p>
          <Link to="/contact">
            <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform border-2 border-transparent hover:bg-white hover:text-black hover:border-black">
              Start the Buzz
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;