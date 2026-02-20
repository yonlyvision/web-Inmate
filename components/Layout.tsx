import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Facebook, Mic, Coffee, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SubscribeModal } from './SubscribeModal';
import { ContactModal } from './ContactModal';
import Magnetic from './Magnetic';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll for sticky nav effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path: string): string =>
    location.pathname === path
      ? "text-primary after:scale-x-100"
      : "text-stone-400 hover:text-white";

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-8'
          }`}
        aria-label="Main navigation"
      >
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex justify-between h-16 items-center">
            <Link
              to="/"
              className="font-serif text-3xl font-black tracking-tighter text-white flex items-center gap-3 group"
              aria-label="Inmate Book Home"
            >
              <motion.span
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full text-lg font-serif italic shadow-xl shadow-primary/20"
                aria-hidden="true"
              >
                8
              </motion.span>
              <Magnetic strength={0.2}>
                <span className="group-hover:text-primary transition-colors tracking-widest text-lg uppercase font-black">
                  INM8TE <span className="text-primary italic font-serif lowercase tracking-normal px-1">Book</span>
                </span>
              </Magnetic>
            </Link>

            <div className="hidden lg:flex space-x-12 items-center">
              {['/', '/connections', '/lifestyle', '/biography'].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative ${isActive(path)} px-1 py-1 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:scale-105 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500`}
                >
                  {path === '/' ? 'Stories' : path.slice(1).replace('-', ' ')}
                </Link>
              ))}
              <button
                onClick={() => setIsContactOpen(true)}
                className="relative text-stone-400 hover:text-white px-1 py-1 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:scale-105 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500"
              >
                Contact
              </button>
              <Magnetic strength={0.1}>
                <motion.button
                  onClick={() => setIsSubscribeOpen(true)}
                  whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-primary/20"
                >
                  Join the List
                </motion.button>
              </Magnetic>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 top-[88px] z-40 lg:hidden bg-black/95 backdrop-blur-2xl px-6 py-12"
            >
              <div className="flex flex-col space-y-8">
                {['/', '/connections', '/lifestyle', '/biography'].map((path) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-serif font-bold text-stone-300 hover:text-primary transition-colors italic"
                  >
                    {path === '/' ? 'The Stories' : path.charAt(1).toUpperCase() + path.slice(2).replace('-', ' ')}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="text-left text-3xl font-serif font-bold text-stone-300 hover:text-primary transition-colors italic"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setIsSubscribeOpen(true)}
                  className="w-full bg-primary text-white py-6 rounded-2xl text-lg font-black uppercase tracking-widest shadow-2xl shadow-primary/20 mt-8"
                >
                  Subscribe Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black text-stone-500 py-24 border-t border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-texture pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-4xl font-black text-white block mb-8 tracking-tighter uppercase">
              INM8TE <span className="text-primary italic lowercase px-1">book</span><span className="text-primary italic">.</span>
            </span>
            <p className="mb-10 max-w-sm text-lg leading-relaxed font-light italic text-stone-400">
              "Every story is a homecoming." Exploring the depths of connection through words, film, and lifestyle.
            </p>
            <div className="flex space-x-8">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: '#b45309' }}
                  href="#"
                  className="text-stone-600 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.4em]">The Platform</h3>
            <ul className="space-y-6">
              {['Stories', 'Connections', 'Lifestyle', 'Biography'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Stories' ? '/' : `/${link.toLowerCase()}`}
                    className="hover:text-primary transition-colors font-bold text-sm tracking-wide"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.4em]">Connect</h3>
            <ul className="space-y-6">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-3 font-bold text-sm tracking-wide"><Mic size={18} /> The Podcast</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-3 font-bold text-sm tracking-wide"><Coffee size={18} /> Support Art</a></li>
              <li><button onClick={() => setIsContactOpen(true)} className="hover:text-primary transition-colors flex items-center gap-3 font-bold text-sm tracking-wide"><Mail size={18} /> Contact Us</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-20 mt-24 pt-10 border-t border-white/5 text-[10px] text-center font-black uppercase tracking-[0.5em] text-stone-700">
          © {new Date().getFullYear()} INM8TE BOOK. All Rights Reserved.
        </div>
      </footer>
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};
