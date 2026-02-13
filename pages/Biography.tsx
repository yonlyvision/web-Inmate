import React from 'react';
import { BookOpen, User, Calendar, Star } from 'lucide-react';

export const Biography: React.FC = () => {
    return (
        <div className="bg-stone-50 min-h-screen font-sans text-stone-800">

            {/* Hero Section */}
            <section className="relative py-20 bg-stone-900 text-stone-100 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Background Texture" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">The Story Behind the Story</h1>
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
                        "We are all inmates of our own minds until we find the key to set ourselves free."
                    </p>
                </div>
            </section>

            {/* The Meaning: INM8TE */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200 rounded-full text-stone-700 text-sm font-bold tracking-wider uppercase mb-6">
                            <Star size={16} className="text-primary" />
                            <span>The Philosophy</span>
                        </div>
                        <h2 className="font-serif text-4xl font-bold text-stone-900 mb-6">Why "INM8TE"?</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            The name <strong>INM8TE</strong> is more than just a play on words. It represents the shared human experience of feeling trapped—whether by our past, our circumstances, or our own limiting beliefs.
                        </p>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            But it also holds the promise of connection. An "inmate" is someone you share a space with. On this platform, we are all roommates on this planet, navigating the complexities of life together. It's a call to look beyond labels and find the human soul underneath.
                        </p>
                    </div>
                    <div className="bg-stone-200 h-[500px] rounded-2xl overflow-hidden shadow-xl relative">
                        <img src="https://picsum.photos/600/800?random=20" alt="Abstract connection" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-stone-900/10"></div>
                    </div>
                </div>
            </section>

            {/* The Background: Author's Story */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <User size={48} className="mx-auto text-stone-400 mb-4" />
                        <h2 className="font-serif text-4xl font-bold text-stone-900 mb-6">About the Author</h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                    </div>

                    <div className="prose prose-lg mx-auto text-stone-600">
                        <p>
                            Every story has a beginning, and mine started in a place most people try to forget. My journey hasn't been a straight line; it's been a winding road of mistakes, consequences, and ultimately, redemption.
                        </p>
                        <p>
                            Writing became my escape and my salvation. In the quietest moments, I found my loudest voice. I realized that my experiences, however painful, gave me a unique perspective on resilience, hope, and the power of second chances.
                        </p>
                        <p>
                            I founded this platform to share those stories—not just mine, but the stories of everyone who is fighting to rebuild, to grow, and to be seen for who they are today, not who they were yesterday.
                        </p>
                        <blockquote className="font-serif italic text-2xl text-stone-800 border-l-4 border-primary pl-6 my-10">
                            "I believe that our worst moments do not define us. It is what we do after the fall that truly matters."
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* What's Coming Up */}
            <section className="py-24 px-4 bg-stone-100">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">What's Next?</h2>
                            <p className="text-stone-600 text-lg">The journey is just beginning. Here is what is on the horizon.</p>
                        </div>
                        <BookOpen className="text-stone-300 hidden md:block" size={64} />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Event 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                            <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Book Launch</div>
                            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">The Quiet Between Words</h3>
                            <p className="text-stone-600 mb-6">
                                The official release of my memoir. Join us for a virtual reading and Q&A session.
                            </p>
                            <div className="flex items-center gap-2 text-stone-500 text-sm">
                                <Calendar size={16} />
                                <span>Fall 2026</span>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                            <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Community</div>
                            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">The Connections App</h3>
                            <p className="text-stone-600 mb-6">
                                Beta testing for our safe, dignity-first dating and connection platform begins soon.
                            </p>
                            <div className="flex items-center gap-2 text-stone-500 text-sm">
                                <Calendar size={16} />
                                <span>Late 2026</span>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                            <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Podcast</div>
                            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">New Season</h3>
                            <p className="text-stone-600 mb-6">
                                Season 4: "Rebuilding" features interviews with thought leaders on justice and reform.
                            </p>
                            <div className="flex items-center gap-2 text-stone-500 text-sm">
                                <Calendar size={16} />
                                <span>Coming Soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
