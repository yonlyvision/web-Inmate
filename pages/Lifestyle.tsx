import React from 'react';
import { Clock, Tag, Leaf, Sun, Wind } from 'lucide-react';
import { RECIPES } from '../constants';

export const Lifestyle: React.FC = () => {
  return (
    <div className="bg-stone-50 pb-20">
      
      {/* Intro Header */}
      <section className="bg-white py-20 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Philosophy</span>
          <h1 className="font-serif text-5xl font-bold text-stone-900 mb-6">Nourish Body & Mind</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            True wellness isn't about restriction. It's about abundance, mindfulness, and the simple joy of eating something that makes you feel alive.
          </p>
          
          <div className="flex justify-center gap-8 mt-12 text-stone-500">
            <div className="flex flex-col items-center gap-2">
              <Leaf className="text-green-700" size={24} />
              <span className="text-xs uppercase tracking-wider">Plant Forward</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Sun className="text-amber-500" size={24} />
              <span className="text-xs uppercase tracking-wider">Seasonal</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Wind className="text-blue-400" size={24} />
              <span className="text-xs uppercase tracking-wider">Mindful</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Habits / Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
                <h2 className="font-serif text-3xl font-bold text-stone-900 mb-6">The Morning Reset</h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                    How you start your morning dictates the flow of your entire day. My 15-minute routine focuses on hydration, movement, and silence before the digital noise begins.
                </p>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-stone-700">
                        <span className="w-6 h-6 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center text-xs font-bold">1</span>
                        Glass of warm lemon water
                    </li>
                    <li className="flex items-center gap-3 text-stone-700">
                        <span className="w-6 h-6 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center text-xs font-bold">2</span>
                        5 minutes of stretching
                    </li>
                    <li className="flex items-center gap-3 text-stone-700">
                        <span className="w-6 h-6 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center text-xs font-bold">3</span>
                        Journaling three intentions
                    </li>
                </ul>
                <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-hover">Read the full article</button>
            </div>
            <div className="order-1 md:order-2 h-[400px] overflow-hidden rounded-2xl shadow-lg">
                <img src="https://picsum.photos/600/600?random=10" alt="Morning Routine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-serif text-3xl font-bold text-stone-900 mb-10 text-center">Seasonal Recipes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {RECIPES.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-stone-100">
              <div className="h-48 overflow-hidden relative">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-stone-800 backdrop-blur-sm">
                  {recipe.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-stone-400 text-xs mb-3">
                  <Clock size={14} />
                  <span>{recipe.time}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-primary transition-colors">{recipe.title}</h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Recipe <span className="text-lg">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-stone-300 rounded-full text-stone-600 font-medium hover:bg-stone-900 hover:text-white transition-all">
            Load More Recipes
          </button>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-sage-100 py-20 mt-12">
         <div className="max-w-3xl mx-auto text-center px-4">
            <h3 className="font-serif text-2xl md:text-4xl italic text-sage-800 leading-relaxed mb-6">
              "To eat is a necessity, but to eat intelligently is an art."
            </h3>
            <p className="text-sage-800 font-bold uppercase tracking-widest text-sm">— François de La Rochefoucauld</p>
         </div>
      </section>
    </div>
  );
};