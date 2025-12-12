import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Lightbulb, TrendingUp, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const coreValues = [
    {
      icon: <Lightbulb size={30} className="text-sutra-neon" />,
      title: "Chaos is Creativity",
      desc: "We embrace the unhinged energy of the internet to create authentic, scroll-stopping content."
    },
    {
      icon: <TrendingUp size={30} className="text-sutra-pink" />,
      title: "Culture Over Clicks",
      desc: "We focus on cultural relevance first. Clicks follow when you speak the language of the internet."
    },
    {
      icon: <Heart size={30} className="text-sutra-cyan" />,
      title: "Community is King",
      desc: "Engagement isn't a metric, it's a conversation. We build genuine relationships for your brand."
    }
  ];

  const teamMembers = [
    { name: "Prashant Tiwari", role: "Co-Founder", fact: "Can spot a dying trend from 50 paces." },
    { name: "Amit Pandey", role: "Co-Founder", fact: "Turns chaos into Gantt charts and ROI." }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* HERO - WHO WE ARE */}
      <section className="py-20 md:py-32 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            The Sutra Story.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            We’re a next-gen media agency born in Jalandhar, obsessed with turning local brands into global internet legends.
          </p>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="py-16 md:py-24 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="space-y-6 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 text-sutra-pink mb-4 font-bold uppercase tracking-widest text-sm justify-center w-full">
              <Briefcase size={16} /> Our Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              To make brands culturally fluent, globally viral.
            </h2>
            <p className="text-gray-400 text-lg">
              We bridge the gap between business goals and internet chaos. We speak Gen Z, understand the algorithm, and use both to generate real, trackable growth.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">The Sutra Vibe Check</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 transition-colors"
            >
              {value.icon}
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE TEAM */}
      <section className="py-16 md:py-24 bg-[#0f0f0f] border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sutra-cyan mb-8 font-bold uppercase tracking-widest text-sm justify-center md:justify-start">
            <Users size={16} /> The Squad
          </div>
          <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-12">Meet the Visionaries</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-sutra-neon transition-colors"
              >
                <h3 className="text-3xl font-black">{member.name}</h3>
                <p className="text-sutra-neon font-bold text-lg uppercase tracking-wider">{member.role}</p>
                <p className="text-gray-400 text-lg italic">"{member.fact}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 container mx-auto px-6 text-center">
        <div className="bg-sutra-neon/10 border border-sutra-neon/30 p-10 md:p-16 rounded-3xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Vibe?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Stop scrolling and start trending. Let's chat about your next big move.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-sutra-neon text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-colors">
            Let's Collab <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;