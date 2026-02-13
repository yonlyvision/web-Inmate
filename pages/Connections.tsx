import React from 'react';
import { Sprout, ShieldCheck, HeartHandshake, Scale, Users, Sun } from 'lucide-react';

export const Connections: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen font-sans text-stone-800">
      
      {/* Hero Section: Mission Driven */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Background Texture" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-full text-stone-600 text-sm font-bold tracking-wider uppercase mb-8 border border-stone-200">
            <Sun size={16} className="text-primary" />
            <span>Project: Second Chance</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 mb-8 leading-tight">
            Love beyond <br/><span className="italic text-stone-500">labels.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            A dignified connection platform for those rebuilding their lives after incarceration, and the people who believe in their future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#waitlist" className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-primary transition-colors shadow-lg">
                Join the Waitlist
             </a>
             <a href="#mission" className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-colors">
                Read Our Mission
             </a>
          </div>
        </div>
      </section>

      {/* Why This Exists: The Problem */}
      <section id="mission" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="font-serif text-4xl font-bold text-stone-900 mb-6">The invisible sentence of isolation.</h2>
               <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                 For millions of people re-entering society, the sentence often continues long after release. Stigma creates barriers not just to housing and employment, but to human connection.
               </p>
               <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                 Traditional dating apps reduce complex human stories to checkboxes. In that world, a past mistake often means immediate rejection, regardless of the work done to rebuild, grow, and atone.
               </p>
               <div className="border-l-4 border-primary pl-6 py-2">
                 <p className="font-serif italic text-xl text-stone-800">
                   "We isolate people who need community the most. It's time to change the narrative from exclusion to restoration."
                 </p>
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-4 bg-stone-200 rounded-2xl -z-10 rotate-3"></div>
               <img 
                 src="https://picsum.photos/600/800?grayscale" 
                 alt=" contemplative person looking forward" 
                 className="rounded-xl shadow-xl w-full object-cover h-[500px]"
               />
            </div>
          </div>
        </div>
      </section>

      {/* The Vision: Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl font-bold text-stone-900 mb-6">A platform built on dignity.</h2>
            <p className="text-stone-600 text-lg">
              We are building a space where honesty is valued over perfection, and where the future matters more than the past.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-stone-700">
                <Sprout size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">Growth-Centric</h3>
              <p className="text-stone-600 leading-relaxed">
                Profiles that highlight rehabilitation, education, and personal development. Show who you are becoming, not just where you have been.
              </p>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-stone-700">
                <HeartHandshake size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">Honest Intentions</h3>
              <p className="text-stone-600 leading-relaxed">
                A community for serious relationships. We foster an environment of radical honesty where disclosure is handled with respect and timing.
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-stone-700">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">Safety & Trust</h3>
              <p className="text-stone-600 leading-relaxed">
                Verification processes that protect everyone. We balance the need for safety with the right to privacy and a fresh start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-stone-900 text-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="font-serif text-4xl font-bold text-white mb-4">Who is this community for?</h2>
             <div className="h-1 w-20 bg-primary mx-auto"></div>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-stone-800/50 p-10 rounded-2xl border border-stone-700">
                <div className="flex items-center gap-4 mb-6">
                   <Users className="text-primary" size={32} />
                   <h3 className="font-serif text-2xl font-bold text-white">The Rebuilders</h3>
                </div>
                <ul className="space-y-4 text-stone-300">
                   <li className="flex gap-3">
                     <span className="text-primary">•</span>
                     <span>Individuals with a past conviction who are actively rebuilding their lives.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="text-primary">•</span>
                     <span>People who value honesty and are tired of hiding their story.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="text-primary">•</span>
                     <span>Those seeking a partner who understands resilience and redemption.</span>
                   </li>
                </ul>
             </div>

             <div className="bg-stone-800/50 p-10 rounded-2xl border border-stone-700">
                <div className="flex items-center gap-4 mb-6">
                   <Scale className="text-primary" size={32} />
                   <h3 className="font-serif text-2xl font-bold text-white">The Open-Hearted</h3>
                </div>
                <ul className="space-y-4 text-stone-300">
                   <li className="flex gap-3">
                     <span className="text-primary">•</span>
                     <span>People who believe a person is more than their worst mistake.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="text-primary">•</span>
                     <span>Individuals seeking depth, gratitude, and loyalty in a partner.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="text-primary">•</span>
                     <span>Those who value shared values over superficial status.</span>
                   </li>
                </ul>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-24 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">Be part of the solution.</h2>
          <p className="text-xl text-stone-600 mb-10 leading-relaxed">
            We are currently in the research and development phase. Join the waitlist to receive updates, share your thoughts, and be the first to know when we launch.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
            <form className="flex flex-col gap-4">
              <div className="text-left">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              
              <div className="text-left">
                 <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">I am interested as...</label>
                 <select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option>Select an option</option>
                    <option>Someone seeking connection (Rebuilder)</option>
                    <option>Someone open to connection (Supporter)</option>
                    <option>Organization / Advocate</option>
                 </select>
              </div>

              <button type="button" className="mt-4 w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-md">
                Join the Movement
              </button>
            </form>
            <p className="mt-6 text-xs text-stone-400">
              Your privacy is paramount. We will never share your data. This is a concept phase interest list only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};