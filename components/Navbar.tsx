
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const view = href.replace('#', '') || 'home';
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled || currentView !== 'home' ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm text-black' : 'bg-transparent py-8 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map(link => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 border-b-2 ${
                currentView === link.href.replace('#', '') 
                ? 'border-black' 
                : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Logo */}
        <button 
          onClick={() => handleNavClick('#home')}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group"
        >
          <span className="text-xl md:text-2xl font-serif tracking-[0.2em] font-light uppercase transition-all group-hover:italic">
            Tariku Habtesillasie
          </span>
          <span className="text-[8px] uppercase tracking-[0.6em] opacity-40">
            London • Artisanal
          </span>
        </button>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block"><Search size={18} className="opacity-70 hover:opacity-100 transition-opacity" /></button>
          <button className="relative">
            <ShoppingBag size={18} className="opacity-70 hover:opacity-100 transition-opacity" />
            <span className={`absolute -top-2 -right-2 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold ${isScrolled || currentView !== 'home' ? 'bg-black text-white' : 'bg-white text-black'}`}>0</span>
          </button>
          <button 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-10 animate-in fade-in zoom-in-95">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-black"><X size={32} /></button>
          {NAV_LINKS.map(link => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className="text-2xl font-serif tracking-widest text-black"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
