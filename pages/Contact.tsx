import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Map, Loader } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Contact: React.FC = () => {
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<any>(null);
  const [loadingAi, setLoadingAi] = useState(false);
  
  // State for Formspree submission
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;

    setLoadingAi(true);
    setAiResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Using gemini-2.5-flash with googleMaps tool for grounding
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: aiQuery,
        config: {
          tools: [{ googleMaps: {} }],
          systemInstruction: "You are the AI concierge for 'Sutra Media' agency, located in Jalandhar, Punjab, India. Your job is to help visitors find the office, recommend nearby coffee shops or landmarks in Jalandhar, and explain transit options using Google Maps data. Keep the tone helpful, professional but with a slight Gen-Z quirk. Always use the googleMaps tool to find real locations."
        }
      });
      setAiResponse(result);
    } catch (error) {
      console.error(error);
      setAiResponse({ text: "My GPS brain is a bit foggy right now. Try again in a sec!" });
    } finally {
      setLoadingAi(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xeoyppya", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        const errorData = await response.json();
        console.error("Formspree submission error:", errorData);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Form submission network error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <section className="flex-grow py-10 md:py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Info Side */}
          <div className="space-y-8 md:space-y-10">
            <div>
              <h1 className="text-5xl md:text-8xl font-black mb-4">Let's Collab!</h1>
              <p className="text-lg md:text-xl text-sutra-neon font-medium">
                We reply faster than your best friend on a gossip day.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="text-sutra-pink" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <a href="mailto:sutravisionaries@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    sutravisionaries@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="text-sutra-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <div className="flex flex-col text-gray-300">
                    <a href="tel:+918252755606" className="hover:text-white">+91 82527 55606</a>
                    <a href="tel:+916205929889" className="hover:text-white">+91 62059 29889</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">HQ</h3>
                  <p className="text-gray-300">Based in Jalandhar</p>
                </div>
              </div>
            </div>

            {/* AI Location Concierge */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4 text-sutra-cyan">
                 <Map size={20} /> <span className="text-sm font-bold uppercase tracking-widest">AI Concierge (Maps Enabled)</span>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                 <p className="text-sm text-gray-400 mb-4">
                    Visiting us? Ask our AI about the neighborhood, nearby cafes, or how to get here in Jalandhar.
                 </p>
                 <form onSubmit={handleAiAsk} className="flex gap-2 mb-4">
                   <input 
                      type="text" 
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      placeholder="e.g. What's a good cafe near Sutra Media?"
                      className="flex-1 bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-sm focus:border-sutra-cyan focus:outline-none"
                   />
                   <button 
                     type="submit" 
                     disabled={loadingAi}
                     className="bg-sutra-cyan text-black p-2 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
                   >
                     {loadingAi ? <Loader className="animate-spin" size={18} /> : <Send size={18} />}
                   </button>
                 </form>

                 {aiResponse && (
                   <div className="text-sm text-gray-200 bg-black/30 p-4 rounded-lg animate-in fade-in duration-300">
                     <p className="mb-2 leading-relaxed">{aiResponse.text}</p>
                     
                     {/* Render Google Maps Links if available */}
                     {aiResponse.candidates?.[0]?.groundingMetadata?.groundingChunks?.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                           {aiResponse.candidates[0].groundingMetadata.groundingChunks.map((chunk: any, i: number) => {
                             if (chunk.maps?.uri) {
                               return (
                                 <a 
                                   key={i} 
                                   href={chunk.maps.uri} 
                                   target="_blank" 
                                   rel="noreferrer" 
                                   className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-xs px-2 py-1 rounded transition-colors text-sutra-cyan"
                                 >
                                   <MapPin size={10} /> {chunk.maps.title}
                                 </a>
                               );
                             }
                             return null;
                           })}
                        </div>
                     )}
                   </div>
                 )}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Drop your genius idea here...</h2>
            
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-sutra-neon/10 border border-sutra-neon rounded-2xl animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-sutra-neon text-black rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-sutra-neon mb-2">Vibe Received! 🚀</h3>
                <p className="text-gray-300 mb-6">We've got your details. Prepare for incoming greatness.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-sm text-gray-400 hover:text-white underline transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-400">Your Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    placeholder="(let's make it official)" 
                    className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-sutra-neon focus:outline-none focus:ring-1 focus:ring-sutra-neon transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-400">Email</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    placeholder="Email we can slide into" 
                    className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-sutra-neon focus:outline-none focus:ring-1 focus:ring-sutra-neon transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2 text-gray-400">Phone Number</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      placeholder="+91..." 
                      className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-sutra-neon focus:outline-none focus:ring-1 focus:ring-sutra-neon transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="social" className="block text-sm font-bold mb-2 text-gray-400">Social Media</label>
                    <input 
                      id="social"
                      name="social"
                      type="text" 
                      placeholder="@handle" 
                      className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-sutra-neon focus:outline-none focus:ring-1 focus:ring-sutra-neon transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-400">The Vibe</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us what you want to create 🎬✨" 
                    className="w-full bg-black/50 border border-white/20 rounded-xl p-4 focus:border-sutra-neon focus:outline-none focus:ring-1 focus:ring-sutra-neon transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-sutra-pink text-white font-bold py-4 rounded-xl hover:bg-sutra-neon hover:text-black transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <>Sending... <Loader className="animate-spin" size={20} /></>
                  ) : (
                    <>Send the Vibe <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
                
                {formStatus === 'error' && (
                  <p className="text-red-500 text-center text-sm font-bold animate-pulse">
                    ⚠️ Something went wrong. Check your internet or try again!
                  </p>
                )}
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;