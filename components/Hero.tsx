
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - High-end workshop atmosphere */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1590424753858-394a92c5ec2c?q=80&w=1920&auto=format&fit=crop" 
          alt="Master Leather Workshop" 
          className="w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-6">
        <span className="text-xs md:text-sm uppercase tracking-[0.6em] mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-1000">
          London • Addis Ababa • Milan
        </span>
        <h1 className="text-6xl md:text-9xl font-serif mb-12 max-w-5xl mx-auto leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          The Art of the <br /> <span className="italic font-light">Lasting Mark</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <a href="#collections" className="group relative overflow-hidden bg-white text-black px-14 py-6 text-xs uppercase tracking-widest font-bold transition-all duration-500">
            <span className="relative z-10">Shop The Collection</span>
            <div className="absolute inset-0 bg-stone-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          <a href="#bespoke" className="text-xs uppercase tracking-[0.3em] font-medium border-b border-white/40 pb-2 hover:border-white transition-colors duration-300">
            Request Bespoke Commission
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white -translate-y-full animate-[scroll_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};
