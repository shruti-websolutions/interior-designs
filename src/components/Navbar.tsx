import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D11]/95 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - White with only DECOR in green */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-bold text-lg sm:text-xl tracking-widest text-white uppercase font-didact">
            DORIO <span className="text-[#8ec641]">DECOR</span>
          </span>
        </a>

        {/* Center Nav Links - 15px white text with 32px gap */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-wide uppercase text-white">
          <a href="#projects" className="hover:text-[#8ec641] transition-colors">
            Catalog
          </a>
          <a href="#materials" className="hover:text-[#8ec641] transition-colors">
            Materials
          </a>
          <a href="#3d-studio" className="hover:text-[#8ec641] transition-colors">
            3D Studio
          </a>
          <a href="#products" className="hover:text-[#8ec641] transition-colors">
            Products
          </a>
          <a href="#calculator" className="hover:text-[#8ec641] transition-colors">
            Estimator
          </a>
          <a href="#contact" className="hover:text-[#8ec641] transition-colors">
            Contacts
          </a>
        </nav>

        {/* Right CTA - Solid green Get Free Estimate button linking to Estimator on desktop */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="md:hidden flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white tracking-wide"
          >
            <div className="w-2 h-2 rounded-full bg-[#8ec641]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href="#calculator"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-[8px] bg-[#8ec641] hover:bg-[#9bd44e] active:scale-[0.99] text-[#111111] font-semibold text-sm tracking-wide shadow-md shadow-[#8ec641]/20 transition-all duration-200"
          >
            Get Free Estimate
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0D11]/98 backdrop-blur-xl border-b border-white/10 px-6 py-5 mt-2 space-y-4">
          <div className="flex flex-col gap-3 text-sm font-medium uppercase text-zinc-300">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#7BAE43]"
            >
              Catalog & Projects
            </a>
            <a
              href="#materials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#7BAE43]"
            >
              Materials & Specs
            </a>
            <a
              href="#3d-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#7BAE43]"
            >
              3D Kitchen Studio
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#7BAE43]"
            >
              Products
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#7BAE43]"
            >
              Cost Estimator
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#7BAE43]"
            >
              Contact & Location
            </a>
          </div>

          <div className="pt-2 border-t border-white/10">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-bold text-center block text-sm transition-colors"
            >
              Call 080762 75334 (Free Site Visit)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
