import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles, Send, Users, Target, Zap } from 'lucide-react';
import Magnetic from '../components/Magnetic';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export const Connections: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-sans text-white pb-48">
      {/* Editorial Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 scale-110">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40"></div>
          <div className="absolute inset-0 bg-texture opacity-5"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-center max-w-5xl mx-auto space-y-12"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary block">The Social Editorial</span>
            <h1 className="font-serif text-[8vw] lg:text-[7vw] font-black mb-8 leading-[0.9] tracking-tighter-extra">
              Love beyond <br /><span className="italic text-stone-500">labels.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-stone-400 font-light italic leading-relaxed max-w-3xl mx-auto border-y border-white/5 py-12">
              A premium, secure ecosystem designed for the captured soul seeking connection and redemption.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Vision: Gallery Layout */}
      <section className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 py-48">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7 space-y-16">
            <motion.div {...fadeInUp} className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">The Mission</span>
              <h2 className="font-serif text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
                Redefining <br /><span className="italic text-stone-500">Redemption.</span>
              </h2>
            </motion.div>

            <p className="text-2xl text-stone-400 leading-relaxed font-light italic border-l border-white/10 pl-12 max-w-2xl">
              We believe that one's past should not permanently dictate their future capacity for love and contribution. The Connections Project is building the first specialized platform for the justice-impacted community.
            </p>

            <div className="grid sm:grid-cols-2 gap-12 pt-12">
              {[
                { icon: <Heart size={24} />, title: "Soul-First Dating", desc: "Curated matching based on deep values and future aspirations." },
                { icon: <Target size={24} />, title: "Career Re-entry", desc: "Connecting motivated talent with inclusive employers." }
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeInUp} className="space-y-6 group">
                  <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-stone-500 font-light italic leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-[4/6] overflow-hidden rounded-[4rem] border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                alt="Community Connection"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>
            {/* Overlay Badge */}
            <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] max-w-xs shadow-2xl">
              <Users size={32} className="text-primary mb-4" />
              <p className="text-white font-serif italic text-lg leading-snug">"Honesty is the only path to true connection."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section: Dark Room Grid */}
      <section className="bg-stone-950 py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-texture opacity-5"></div>
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-32 space-y-8">
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary">Core Values</span>
            <h2 className="font-serif text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">Foundational <span className="italic text-stone-500">Pillars.</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { icon: <Sparkles size={32} />, title: "Growth-Centric", desc: "Not just a dating app, but a platform for personal development, providing resources for mental health and professional growth." },
              { icon: <Send size={32} />, title: "Honest Intentions", desc: "A community built on radical transparency and the shared understanding that honesty is the only path to true connection." },
              { icon: <Shield size={32} />, title: "Safety & Trust", desc: "Industry-leading security protocols and community moderation to ensure a safe environment for all members." }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass p-16 rounded-[4rem] group hover:border-primary transition-all duration-1000"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-stone-900 border border-white/5 flex items-center justify-center text-primary mb-12 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-stone-400 font-light italic leading-relaxed text-lg">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist: Editorial CTA */}
      <motion.section
        {...fadeInUp}
        className="max-w-6xl mx-auto px-6 py-48 text-center relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-primary/2 rounded-full blur-[180px] -z-10"></div>

        <div className="glass p-24 rounded-[5rem] space-y-16 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="space-y-12 max-w-3xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Private Access</span>
            <h2 className="font-serif text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">Become a <br /><span className="italic text-stone-500">Founder-Member.</span></h2>
            <p className="text-2xl text-stone-400 font-light italic leading-relaxed">
              We are hand-selecting our first 500 members to shape the future of this community. Secure your spot on the waitlist.
            </p>
          </div>

          <form className="relative max-w-2xl mx-auto group">
            <input
              type="email"
              placeholder="Your digital identifier (email)"
              className="w-full px-12 py-8 rounded-full border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary bg-stone-900/50 backdrop-blur-3xl text-white placeholder:text-stone-700 transition-all font-light italic text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all shadow-2xl"
            >
              Request Entry
            </motion.button>
          </form>

          <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600">
              Join 1,200+ individuals awaiting connection
            </p>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-stone-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}&grayscale`} alt="avatar" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};