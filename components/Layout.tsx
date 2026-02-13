import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Facebook, Mic, Coffee } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
      ? "text-primary border-b-2 border-primary"
      : "text-stone-600 hover:text-stone-900";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link
              to="/"
              className="font-serif text-2xl font-bold tracking-tight text-stone-900 flex items-center gap-2"
              aria-label="INM8TE Home"
            >
              <span className="w-8 h-8 bg-stone-900 text-stone-50 flex items-center justify-center rounded-full text-sm font-serif italic" aria-hidden="true">8</span>
              INM8TE
            </Link>

            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={`${isActive('/')} px-1 py-2 text-sm font-medium transition-colors`}>
                Stories & Books
              </Link>
              <Link to="/connections" className={`${isActive('/connections')} px-1 py-2 text-sm font-medium transition-colors`}>
                Connections Concept
              </Link>
              <Link to="/lifestyle" className={`${isActive('/lifestyle')} px-1 py-2 text-sm font-medium transition-colors`}>
                Lifestyle & Recipes
              </Link>
              <Link to="/biography" className={`${isActive('/biography')} px-1 py-2 text-sm font-medium transition-colors`}>
                Biography
              </Link>
              <a href="#subscribe" className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition-all">
                Subscribe
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-stone-50 border-b border-stone-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md">Stories & Books</Link>
              <Link to="/connections" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md">Connections</Link>
              <Link to="/lifestyle" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md">Lifestyle</Link>
              <Link to="/biography" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md">Biography</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-2xl font-bold text-stone-100 block mb-4">INM8TE</span>
            <p className="mb-4 max-w-sm">
              Weaving stories of life, love, and the pursuit of a healthy mind and body. Join me on this journey of connection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Follow us on Instagram"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Follow us on Twitter"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Follow us on Facebook"><Facebook size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-stone-100 font-semibold mb-4 uppercase text-sm tracking-wider">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Books & Stories</Link></li>
              <li><Link to="/connections" className="hover:text-white transition-colors">The Connection Project</Link></li>
              <li><Link to="/lifestyle" className="hover:text-white transition-colors">Recipes & Habits</Link></li>
              <li><Link to="/biography" className="hover:text-white transition-colors">Biography</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-stone-100 font-semibold mb-4 uppercase text-sm tracking-wider">Listen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Mic size={16} /> Latest Episodes</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Coffee size={16} /> Support the Show</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-sm text-center">
          © {new Date().getFullYear()} INM8TE. All rights reserved.
        </div>
      </footer>
    </div>
  );
};