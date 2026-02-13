import React from 'react';
import { ArrowRight, Mic, BookOpen, Star, Headphones } from 'lucide-react';
import { BOOKS, PODCAST_EPISODES } from '../constants';
import { HeroAnimation } from '../components/HeroAnimation';


export const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">

      {/* Hero Section */}
      <section className="relative bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6 z-10">
            <p className="font-serif italic text-2xl text-stone-500 font-medium tracking-wide">
              YOUR Life begins where fear ends
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 leading-tight">
              Stories that <br /> <span className="italic text-primary">touch the soul.</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
              Exploring the raw, unfiltered moments of real life. From bestselling books to deep conversations on the podcast, welcome to my world of storytelling.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#books" className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-primary transition-colors shadow-lg hover:shadow-xl">
                Read My Books
              </a>
              <a href="#podcast" className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-colors flex items-center gap-2">
                <Mic size={18} />
                Listen Now
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 rounded-full blur-3xl -z-10"></div>
            <div className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden w-full h-[500px]">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Latest Publications</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {BOOKS.map((book) => (
            <div key={book.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row border border-stone-100">
              <div className="md:w-2/5 overflow-hidden">
                <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">{book.title}</h3>
                <p className="text-primary font-medium italic mb-4">{book.subtitle}</p>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed">{book.description}</p>
                <button className="self-start text-sm font-bold uppercase tracking-widest border-b-2 border-stone-900 pb-1 hover:text-primary hover:border-primary transition-colors">
                  Buy on Amazon
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="bg-stone-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="bg-stone-800 p-8 rounded-2xl shadow-2xl border border-stone-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Headphones size={120} />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-2">Life Unscripted</h3>
                <p className="text-stone-400 mb-6">Hosted by INM8TE</p>
                <p className="text-stone-300 mb-8 leading-relaxed">
                  Join me every Thursday as we dissect the complexities of modern relationships, mental health, and the journey to self-discovery.
                </p>
                <button className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors">
                  <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-xs">S</span>
                  Listen on Spotify
                </button>
              </div>
            </div>

            <div className="md:w-2/3 w-full">
              <h3 className="font-serif text-2xl mb-8">Recent Episodes</h3>
              <div className="space-y-4">
                {PODCAST_EPISODES.map((ep) => (
                  <div key={ep.id} className="bg-stone-800/50 p-6 rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-between group cursor-pointer border border-stone-800 hover:border-stone-700">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center text-stone-400 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Mic size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{ep.title}</h4>
                        <p className="text-sm text-stone-400">{ep.date} • {ep.duration}</p>
                      </div>
                    </div>
                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full border border-stone-600 flex items-center justify-center">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-8 overflow-hidden">
          <img src="https://picsum.photos/200/200" alt="INM8TE" className="w-full h-full object-cover" />
        </div>
        <h2 className="font-serif text-3xl font-bold mb-6">Join the Conversation</h2>
        <p className="text-lg text-stone-600 mb-10">
          I send out a weekly newsletter with my latest writings, podcast show notes, and favorite healthy recipes. No spam, just connection.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" id="subscribe">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          />
          <button className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors shadow-lg">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};