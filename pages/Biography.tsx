import React from 'react';
import { BookOpen, User, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';
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

export const Biography: React.FC = () => {
    return (
        <div className="bg-black min-h-screen font-sans text-white pb-48">

            {/* Editorial Hero */}
            <section className="relative h-[80vh] flex items-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 scale-110">
                    <img
                        src="https://images.unsplash.com/photo-1507679799987-c73774471bd9?auto=format&fit=crop&q=80&w=2000"
                        alt="Noir Background"
                        className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>

                <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
                        className="max-w-4xl"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary mb-12 block">The Origin Story</span>
                        <h1 className="font-serif text-[8vw] lg:text-[6vw] font-black mb-12 leading-[0.9] tracking-tighter-extra">
                            Beauty in the <br />
                            <span className="italic text-stone-500">Broken Pieces.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-stone-400 max-w-2xl leading-relaxed font-light italic opacity-80 border-l border-white/10 pl-12">
                            "We are all inmates of our own minds until we find the key to set ourselves free."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Definition */}
            <section className="py-48 max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20">
                <div className="grid lg:grid-cols-2 gap-32 items-center">
                    <motion.div {...fadeInUp} className="space-y-16">
                        <div className="space-y-8">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Philosophy</span>
                            <h2 className="font-serif text-6xl font-black text-white leading-tight tracking-tighter">Why <br /><span className="italic text-stone-500">INM8TE?</span></h2>
                        </div>

                        <div className="space-y-10 text-xl text-stone-400 font-light italic leading-relaxed max-w-xl">
                            <p>
                                The name <strong className="text-white not-italic font-black">Inmate Book</strong> is more than just a play on words. It represents the shared human experience of feeling trapped—whether by our past, our circumstances, or our own limiting beliefs.
                            </p>
                            <p>
                                But it also holds the promise of connection. An "inmate" is someone you share a space with. On this platform, we are all roommates on this planet, navigating the complexities of life together. It's a call to look beyond labels and find the human soul underneath.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative group aspect-[3/4] overflow-hidden rounded-[4rem] border border-white/5"
                    >
                        <img src="https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=1500" alt="Abstract connection" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60"></div>

                        <div className="absolute bottom-12 left-12">
                            <div className="glass p-10 rounded-3xl max-w-xs">
                                <p className="text-white font-serif italic text-lg pb-4 border-b border-white/10">"Bound by walls, freed by words."</p>
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-stone-500 mt-4 block">Manifesto 01</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Soul: Narrative */}
            <section className="bg-stone-950 py-48 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-texture opacity-5"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-24">
                    <motion.div {...fadeInUp} className="space-y-6">
                        <User size={48} className="mx-auto text-primary opacity-50 mb-8" />
                        <h2 className="font-serif text-6xl font-black text-white tracking-tighter">The <span className="italic text-stone-500">Author.</span></h2>
                        <div className="h-[2px] w-20 bg-primary mx-auto"></div>
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="initial" whileInView="whiteInView" className="space-y-16 text-2xl text-stone-400 font-light italic leading-relaxed text-left">
                        <motion.p variants={fadeInUp}>
                            Every story has a beginning, and mine started in a place most people try to forget. My journey hasn't been a straight line; it's been a winding road of mistakes, consequences, and ultimately, redemption.
                        </motion.p>
                        <motion.p variants={fadeInUp}>
                            Writing became my escape and my salvation. In the quietest moments, I found my loudest voice. I realized that my experiences, however painful, gave me a unique perspective on resilience, hope, and the power of second chances.
                        </motion.p>

                        <motion.blockquote variants={fadeInUp} className="font-serif italic text-4xl lg:text-5xl text-white border-l-4 border-primary pl-12 my-24 py-4 leading-tight">
                            "I believe that our worst moments do not define us. It is what we do after the fall that truly matters."
                        </motion.blockquote>

                        <motion.p variants={fadeInUp}>
                            I founded this platform to share those stories—not just mine, but the stories of everyone who is fighting to rebuild, to grow, and to be seen for who they are today, not who they were yesterday.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Upcoming: Editorial Timeline */}
            <section className="py-48 max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 relative">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.8em] text-primary mb-6 block">Editorial Roadmap</span>
                        <h2 className="font-serif text-6xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
                            The <br /><span className="italic text-stone-500">Horizon.</span>
                        </h2>
                    </div>
                    <BookOpen className="text-white/5 hidden lg:block" size={150} />
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {[
                        { title: "The Quiet Between Words", sub: "Book Launch", date: "Fall 2026", desc: "The official release of my memoir. Join us for a virtual reading and Q&A session." },
                        { title: "The Connections App", sub: "Digital Platform", date: "Late 2026", desc: "Beta testing for our safe, dignity-first dating and connection platform begins soon." },
                        { title: "Season Four: Rebuilding", sub: "Podcast Series", date: "Coming Soon", desc: "Season 4 features interviews with thought leaders on justice, art, and radical reform." }
                    ].map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass p-12 rounded-[3rem] space-y-10 group hover:border-primary/30 transition-all duration-700"
                        >
                            <div className="space-y-4">
                                <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">{event.sub}</span>
                                <h3 className="font-serif text-4xl font-bold text-white group-hover:text-primary transition-colors">{event.title}</h3>
                            </div>
                            <p className="text-stone-500 font-light italic leading-relaxed text-lg">{event.desc}</p>
                            <div className="pt-6 flex items-center gap-4 border-t border-white/5">
                                <Calendar size={18} className="text-stone-700" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600">{event.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};
