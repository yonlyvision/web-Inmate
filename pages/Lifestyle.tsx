import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Wind, Sun, Utensils, Heart, ChevronRight } from 'lucide-react';
import { RECIPES } from '../constants';
import Magnetic from '../components/Magnetic';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } }
};

export const Lifestyle: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-sans text-white pb-48">
      {/* Editorial Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 border-b border-white/5">
        <div className="absolute inset-0 z-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2000"
            alt="Lifestyle Background"
            className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="max-w-5xl mx-auto space-y-12"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary block">The Wellness Editorial</span>
            <h1 className="font-serif text-[8vw] lg:text-[7vw] font-black mb-8 leading-[0.9] tracking-tighter-extra">
              Mindful <br /><span className="italic text-stone-500">Living.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-stone-400 font-light italic leading-relaxed max-w-3xl mx-auto border-y border-white/5 py-12">
              Cultivating wellness through plant-forward nutrition and daily rituals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Routine: Editorial Standard */}
      <section className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 py-48">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <motion.div {...fadeInUp} className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Daily Rituals</span>
              <h2 className="font-serif text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
                The 5:00 AM <br /><span className="italic text-stone-500">Standard.</span>
              </h2>
            </motion.div>

            <div className="space-y-12">
              {[
                { icon: <Wind size={24} />, title: "Morning Breathwork", desc: "10 minutes of box breathing to ground the mind and center the spirit." },
                { icon: <Coffee size={24} />, title: "Ritual Coffee", desc: "Locally sourced, mindfully prepared, enjoyed in complete silence." }
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeInUp} className="flex gap-10 group">
                  <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-stone-500 font-light italic leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/5 group mt-24"
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                alt="Mindfulness"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/5 group"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
                alt="Coffee"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recipes: Seasonal Archives */}
      <section className="bg-stone-950 py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-texture opacity-5"></div>
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-32 space-y-8">
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary">Culinary Archives</span>
            <h2 className="font-serif text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
              Seasonal <span className="italic text-stone-500">Nourishment.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {RECIPES.map((recipe, idx) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -20 }}
                className="glass rounded-[4rem] overflow-hidden group border border-white/5 hover:border-primary transition-all duration-1000"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="px-6 py-2 glass rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-2xl">
                      {recipe.category}
                    </span>
                  </div>
                </div>

                <div className="p-12 space-y-8">
                  <h3 className="font-serif text-3xl font-bold text-white group-hover:text-primary transition-colors">{recipe.title}</h3>
                  <p className="text-stone-500 font-light italic leading-relaxed text-lg">{recipe.description}</p>

                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex items-center gap-3 text-stone-600">
                      <Heart size={16} />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{recipe.time}</span>
                    </div>
                    <Magnetic strength={0.3}>
                      <button className="text-primary hover:scale-125 transition-all">
                        <ChevronRight size={28} />
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy: Large Format Quote */}
      <motion.section
        {...fadeInUp}
        className="max-w-6xl mx-auto px-6 py-48 text-center relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-primary/2 rounded-full blur-[180px] -z-10"></div>

        <div className="space-y-16">
          <Utensils size={48} className="mx-auto text-primary opacity-50" />
          <blockquote className="font-serif text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter max-w-5xl mx-auto">
            "Eating is an <span className="italic text-stone-500 text-gradient">intelligent act</span>. When we nourish ourselves, we nourish the possibilities of our tomorrow."
          </blockquote>
          <div className="pt-12 border-t border-white/5 inline-block px-12">
            <p className="text-[10px] font-black uppercase tracking-[0.8em] text-stone-600">The INM8TE <span className="text-primary italic lowercase font-serif tracking-normal">book</span> Philosophy</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};