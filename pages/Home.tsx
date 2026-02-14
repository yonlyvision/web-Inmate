import React from 'react';
import { ArrowRight, Mic, BookOpen, Star, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { BOOKS, PODCAST_EPISODES } from '../constants';
import { HeroAnimation } from '../components/HeroAnimation';
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

export const Home: React.FC = () => {
  return (
    <div className="space-y-48 pb-48 bg-black">

      {/* Hero Section - The Masterpiece */}
      <section className="relative h-[110vh] w-full flex items-center overflow-hidden">
        {/* The Animated Frame */}
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="inline-flex flex-col mb-8 border-l-2 border-primary pl-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary">
                INM8TE <span className="text-white italic font-serif lowercase tracking-normal">book</span> Perspective
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mb-6"
            >
              <span className="font-serif italic text-xl md:text-2xl text-stone-500 tracking-wide">
                "Your life begins where fear ends."
              </span>
            </motion.div>

            <h1 className="font-serif text-[12vw] lg:text-[10vw] font-black text-white leading-[0.85] tracking-tighter-extra mb-8">
              Every Story <br />
              <span className="italic text-stone-500">Is A</span> <br />
              Homecoming.
            </h1>

            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              <p className="text-xl md:text-2xl text-stone-400 max-w-xl leading-relaxed font-light italic border-l border-white/10 pl-8">
                Welcome to <span className="text-white font-black not-italic tracking-tighter">INM8TE <span className="text-primary italic font-serif lowercase px-0.5">book</span></span>—a high-end editorial space for the captured soul seeking connection and redemption.
              </p>

              <div className="flex gap-8">
                <Magnetic strength={0.3}>
                  <motion.button
                    onClick={() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-2xl"
                  >
                    Enter
                  </motion.button>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <motion.button
                    onClick={() => document.getElementById('podcast')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full border border-white/20 text-white flex items-center justify-center transition-all bg-black/20 backdrop-blur-md"
                  >
                    <Mic size={20} />
                  </motion.button>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Text */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="text-[10px] font-black uppercase tracking-[1em] text-white/20 vertical-text py-20 border-y border-white/10">
            Editorial Perspective
          </span>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden lg:flex"
        >
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30">Scroll Down</span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* Books Section - Editorial Gallery */}
      <section id="books" className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 relative">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <motion.span
              {...fadeInUp}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block"
            >
              The Archives
            </motion.span>
            <h2 className="font-serif text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
              Latest <br /> <span className="italic text-stone-500">Publications</span>
            </h2>
          </div>
          <p className="text-stone-400 font-light italic max-w-xs text-right hidden lg:block border-r border-white/10 pr-8">
            "Weaving silence into words, and words into bridges."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {BOOKS.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-stone-900 border border-white/5 relative shadow-2xl group-hover:shadow-primary/5 transition-all duration-1000">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                {/* Book Badge */}
                <div className="absolute top-8 right-8 w-16 h-16 rounded-full glass flex items-center justify-center font-black text-[10px] uppercase tracking-tighter-extra">
                  Book {idx + 1}
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="font-serif text-4xl font-bold text-white group-hover:text-primary transition-colors duration-500">{book.title}</h3>
                <p className="text-stone-500 font-light italic text-xl max-w-md">{book.description}</p>
                <div className="pt-6">
                  <span className="inline-block px-10 py-4 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-stone-500 italic">
                    Coming Soon
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Podcast Section - Dark Room */}
      <section id="podcast" className="bg-stone-950 py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-texture opacity-5"></div>
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <motion.div {...fadeInUp} className="space-y-12">
                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Audio Editorial</span>
                  <h2 className="font-serif text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
                    Life <br /><span className="italic text-stone-500">Unscripted.</span>
                  </h2>
                </div>
                <p className="text-xl text-stone-400 font-light italic leading-relaxed">
                  Join me every Thursday as we dissect the complexities of modern relationships, mental health, and the journey to self-discovery.
                </p>
                <div className="pt-8">
                  <Magnetic strength={0.1}>
                    <button className="px-12 py-6 bg-[#1DB954] text-black rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:scale-105 transition-all shadow-xl shadow-[#1DB954]/20">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-[8px]">S</div>
                      Spotify Premiere
                    </button>
                  </Magnetic>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1 hidden lg:block h-64 border-l border-white/5 mx-auto"></div>

            <div className="lg:col-span-6">
              <div className="space-y-4">
                {PODCAST_EPISODES.map((ep, idx) => (
                  <motion.div
                    key={ep.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ x: 20, backgroundColor: 'rgba(255,255,255,0.02)' }}
                    className="p-10 rounded-3xl transition-all flex items-center justify-between group cursor-pointer border border-white/5 hover:border-primary/50 glass"
                  >
                    <div className="flex items-center gap-10">
                      <span className="font-serif italic text-stone-700 text-4xl group-hover:text-primary transition-colors">0{idx + 1}</span>
                      <div>
                        <h4 className="font-bold text-2xl text-stone-200 group-hover:text-white transition-colors mb-2">{ep.title}</h4>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 group-hover:text-stone-400">{ep.date} • {ep.duration}</p>
                      </div>
                    </div>
                    <ArrowRight size={24} className="text-stone-800 group-hover:text-primary transition-all group-hover:scale-125" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & CTA - The Soul */}
      <section className="max-w-7xl mx-auto px-6 text-center py-48 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-primary/2 rounded-full blur-[180px] -z-10"></div>

        <motion.div {...fadeInUp} className="space-y-16">
          <div className="relative inline-block">
            <div className="absolute -inset-10 bg-primary/10 blur-[80px] rounded-full"></div>
            <div className="relative w-48 h-48 bg-stone-900 rounded-[4rem] mx-auto overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img src="https://picsum.photos/400/400?grayscale" alt="Author Noir" className="w-full h-full object-cover grayscale opacity-70" />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-5xl lg:text-7xl font-black text-white tracking-tighter">
              Join the <span className="italic text-stone-500">Captured Souls.</span>
            </h2>
            <p className="text-2xl text-stone-400 leading-relaxed font-light italic max-w-2xl mx-auto">
              A weekly newsletter with my latest writings, podcast show notes, and favorite healthy recipes. No spam, only connection.
            </p>
          </div>

          <form className="relative max-w-2xl mx-auto group" id="subscribe">
            <input
              type="email"
              placeholder="Your digital signature (email)"
              className="w-full px-12 py-8 rounded-full border border-white/10 focus:outline-none focus:ring-1 focus:ring-primary bg-stone-900/50 backdrop-blur-3xl text-white placeholder:text-stone-700 transition-all font-light italic text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 px-12 py-5 bg-primary text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-primary-hover shadow-2xl transition-all"
            >
              Confirm
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};