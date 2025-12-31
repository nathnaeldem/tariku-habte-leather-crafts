
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { Assistant } from './components/Assistant';
import { PRODUCTS } from './constants';
import { Instagram, Facebook, Twitter, Mail, ArrowRight, ShieldCheck, Ruler, PenTool, Scissors, Award, Compass, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState('home');

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'collections':
        return (
          <div className="pt-32 pb-40 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-7xl mx-auto">
              <header className="mb-24 text-center">
                <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 block">Current Season</span>
                <h1 className="text-6xl font-serif italic mb-8">The Permanent Collection</h1>
                <p className="max-w-xl mx-auto text-stone-500 text-sm leading-loose uppercase tracking-widest">
                  Objects of utility. Designed to age with grace and outlive their owner.
                </p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
                {PRODUCTS.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        );

      case 'craft':
        return (
          <div className="animate-in fade-in duration-700">
            {/* Craft Hero */}
            <section className="h-[70vh] bg-stone-900 relative flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1549462980-6a9cf3e2eee1?q=80&w=1920&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" 
                alt="Craft" 
              />
              <div className="relative z-10 text-center text-white">
                <h1 className="text-7xl font-serif mb-6 italic">The Philosophy of <br /> Permanence</h1>
                <p className="text-xs uppercase tracking-[0.6em] opacity-60">Hand-Cut • Hand-Stitched • Hand-Finished</p>
              </div>
            </section>

            {/* The Process */}
            <section className="py-40 bg-white">
              <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-stone-900 pb-2 mb-12 inline-block">The Master's Workshop</span>
                    <h2 className="text-4xl font-serif mb-8 leading-tight">It takes 48 hours to create a single 48-hour bag.</h2>
                    <p className="text-stone-500 leading-relaxed mb-8">
                      At our workshop in London, the rhythm is slow. We don't use assembly lines. A single artisan is responsible for each piece from the first cut of the leather to the final burnishing of the edges.
                    </p>
                    <div className="space-y-12 mt-16">
                      <div className="flex gap-8">
                        <Scissors className="text-stone-300 flex-shrink-0" size={32} />
                        <div>
                          <h4 className="font-bold uppercase tracking-widest text-sm mb-2">The Clicker's Eye</h4>
                          <p className="text-stone-400 text-sm italic">Identifying every natural flaw and grain direction before the blade meets the hide.</p>
                        </div>
                      </div>
                      <div className="flex gap-8">
                        <PenTool className="text-stone-300 flex-shrink-0" size={32} />
                        <div>
                          <h4 className="font-bold uppercase tracking-widest text-sm mb-2">The Saddle Stitch</h4>
                          <p className="text-stone-400 text-sm italic">A technique impossible for machines, ensuring a lifetime of structural integrity.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-[3/4]">
                    <img 
                      src="https://images.unsplash.com/photo-1590424753858-394a92c5ec2c?q=80&w=1000&auto=format&fit=crop" 
                      className="w-full h-full object-cover grayscale shadow-2xl" 
                      alt="Workshop Details"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'materials':
        return (
          <div className="animate-in fade-in duration-700 pt-20">
            <section className="py-40 bg-[#141211] text-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-24 items-center mb-40">
                  <div className="flex-1">
                    <span className="text-stone-500 text-[10px] uppercase tracking-[0.5em] mb-8 block">Raw Provenance</span>
                    <h1 className="text-7xl font-serif italic mb-12">The Library <br /> of Hides</h1>
                    <p className="text-xl text-stone-400 font-light leading-relaxed max-w-lg mb-12">
                      We source exclusively from three heritage tanneries in Tuscany and Northern France. Our hides are a byproduct of the food industry, treated only with natural tannins from oak and chestnut bark.
                    </p>
                    <div className="grid grid-cols-2 gap-12">
                      <div className="p-8 border border-stone-800 bg-stone-900/50">
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Vachetta</h4>
                        <p className="text-xs text-stone-500 italic">High-fat content, rich smell, exceptional patina potential.</p>
                      </div>
                      <div className="p-8 border border-stone-800 bg-stone-900/50">
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Full Grain Suede</h4>
                        <p className="text-xs text-stone-500 italic">Water-resistant, velvet-touch texture for liners.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1524292332407-d54ca810ad1c?q=80&w=600&auto=format&fit=crop" className="w-full aspect-square object-cover" alt="Leather 1" />
                    <img src="https://images.unsplash.com/photo-1517616641885-f5b2b203a11b?q=80&w=600&auto=format&fit=crop" className="w-full aspect-square object-cover mt-12" alt="Leather 2" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'bespoke':
        return (
          <div className="pt-32 pb-40 animate-in fade-in duration-700">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-32">
                <span className="text-xs uppercase tracking-[0.5em] text-stone-400 mb-8 block">Private Commissions</span>
                <h1 className="text-7xl font-serif mb-12 italic leading-tight">The Personal Archive</h1>
                <p className="text-lg text-stone-600 leading-relaxed italic">
                  "Bespoke is not just about custom measurements. It is about a shared dialogue between the artisan and the traveler. It is the creation of a future heirloom."
                </p>
              </div>

              {/* Commission Process */}
              <div className="grid md:grid-cols-4 gap-12 border-t border-stone-100 pt-20">
                {[
                  { step: '01', title: 'The Dialogue', desc: 'A consultation at our London studio or via private link to discuss utility and vision.' },
                  { step: '02', title: 'The Blueprint', desc: 'Technical drawings and material swatches sent for your approval.' },
                  { step: '03', title: 'The Build', desc: 'A dedicated artisan begins the 6-week hand-stitching process.' },
                  { step: '04', title: 'The Arrival', desc: 'Hand-delivered in a cedarwood case with lifetime care membership.' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-6">
                    <span className="text-4xl font-serif italic text-stone-200">{item.step}</span>
                    <h3 className="font-bold uppercase tracking-widest text-sm">{item.title}</h3>
                    <p className="text-xs text-stone-500 leading-loose">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-40 bg-stone-900 p-20 text-white text-center">
                <h2 className="text-4xl font-serif mb-8">Begin Your Commission</h2>
                <p className="text-stone-400 text-sm uppercase tracking-[0.3em] mb-12">Limited to 12 private commissions per year.</p>
                <button className="bg-white text-black px-16 py-6 text-xs uppercase tracking-widest font-bold hover:bg-stone-200 transition-all">
                  Request Private Link
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <>
            <Hero />
            {/* The Craft - Detailed Section */}
            <section className="py-40 bg-stone-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-32 items-center mb-32">
                  <div className="order-2 md:order-1">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-8 block">
                      Meticulous Construction
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
                      Where <span className="italic">Traditional</span> Hand-Stitching Meets Modern Utility.
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed mb-12">
                      Every Tariku Habtesillasie piece begins with the selection of the hide. Unlike mass-produced items, we use the saddle-stitch method—a technique that requires two needles and a single thread, creating a seam that will never unravel.
                    </p>
                    <button onClick={() => setView('craft')} className="text-xs uppercase tracking-widest font-bold border-b border-black pb-2 hover:opacity-60 transition-opacity">
                      Read The Craft Manifesto
                    </button>
                  </div>
                  <div className="order-1 md:order-2 relative aspect-[4/5]">
                    <img 
                      src="https://images.unsplash.com/photo-1549462980-6a9cf3e2eee1?q=80&w=1000&auto=format&fit=crop" 
                      alt="Artisan at work" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Collection Grid Preview */}
            <section className="py-40 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                  <h2 className="text-5xl font-serif italic mb-4">Masterpiece Editions</h2>
                  <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400">Selected Works</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
                  {PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="mt-24 text-center">
                   <button onClick={() => setView('collections')} className="bg-black text-white px-12 py-6 text-xs uppercase tracking-widest font-bold hover:bg-stone-800 transition-all">
                      Explore Full Collection
                   </button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      <Navbar currentView={view} onNavigate={setView} />
      
      <main>
        {renderContent()}

        {/* Global Newsletter - Only on specific views or all? Let's keep it global */}
        <section className="py-40 bg-stone-900 text-white">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-4xl font-serif mb-8 italic">The Habtesillasie Journal</h2>
            <p className="text-stone-400 mb-12 text-sm uppercase tracking-widest leading-loose">Insights into the craft, limited editions, and stories from the workshop.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="flex-1 bg-transparent border-b border-stone-700 px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-black px-12 py-4 text-xs uppercase tracking-widest font-bold hover:bg-stone-200 transition-colors">
                Join Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1">
              <span className="text-xl font-serif tracking-[0.3em] uppercase block mb-8">
                Tariku Habtesillasie
              </span>
              <p className="text-stone-400 text-[10px] leading-relaxed max-w-xs uppercase tracking-[0.2em]">
                Artisanal Leatherware for the discerning traveler. Established London.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 text-stone-300">Discovery</h4>
              <ul className="space-y-6 text-[10px] uppercase tracking-[0.2em] font-medium text-stone-500">
                <li><button onClick={() => setView('collections')} className="hover:text-black transition-colors">Collections</button></li>
                <li><button onClick={() => setView('craft')} className="hover:text-black transition-colors">The Craft</button></li>
                <li><button onClick={() => setView('materials')} className="hover:text-black transition-colors">Materials</button></li>
                <li><button onClick={() => setView('bespoke')} className="hover:text-black transition-colors">Bespoke Commissions</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 text-stone-300">Client Care</h4>
              <ul className="space-y-6 text-[10px] uppercase tracking-[0.2em] font-medium text-stone-500">
                <li><a href="#" className="hover:text-black transition-colors">Logistics & Customs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Lifetime Warranty</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Workshop Tours</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 text-stone-300">Social</h4>
              <div className="flex gap-8 text-stone-400">
                <Instagram size={18} className="hover:text-black cursor-pointer transition-colors" />
                <Facebook size={18} className="hover:text-black cursor-pointer transition-colors" />
                <Twitter size={18} className="hover:text-black cursor-pointer transition-colors" />
                <Mail size={18} className="hover:text-black cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="pt-16 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] text-stone-300 tracking-[0.4em] uppercase">
              © 2024 Tariku Habtesillasie
            </p>
            <div className="flex gap-12 text-[10px] text-stone-400 tracking-[0.2em] uppercase">
              <a href="#" className="hover:text-black">Privacy</a>
              <a href="#" className="hover:text-black">Legal</a>
              <a href="#" className="hover:text-black">Sustainability</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Gemini Assistant */}
      <Assistant />
    </div>
  );
};

export default App;
