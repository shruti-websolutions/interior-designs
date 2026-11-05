import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200/80 shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Dark with DECOR in wood tone on solid white background */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-bold text-lg sm:text-xl tracking-widest text-[#111111] uppercase font-didact">
            DORIO <span className="text-[#72583d]">DECOR</span>
          </span>
        </a>

        {/* Center Nav Links - 15px dark neutral text with 32px gap */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold tracking-wide uppercase text-neutral-800">
          <a href="#home" className="hover:text-[#72583d] transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-[#72583d] transition-colors">
            Our Projects
          </a>
          <a href="#estimate" className="hover:text-[#72583d] transition-colors">
            Get Free Estimate
          </a>
          <a href="#contact" className="hover:text-[#72583d] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right CTA - Solid wood tone Get Free Estimate button with white text on desktop */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="md:hidden flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 tracking-wide"
          >
            <div className="w-2 h-2 rounded-full bg-[#72583d]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href="#estimate"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-[#72583d] hover:bg-[#856747] active:scale-[0.99] text-white font-semibold text-sm tracking-wide shadow-sm shadow-[#72583d]/25 transition-all duration-200"
          >
            Get Free Estimate
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-100 text-neutral-800 hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Clean White Design with Wood Accent */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 shadow-xl px-6 py-5 mt-4 space-y-4">
          <div className="flex flex-col gap-3.5 text-sm font-semibold uppercase text-neutral-800">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#72583d] transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#72583d] transition-colors"
            >
              Our Projects
            </a>
            <a
              href="#estimate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#72583d] transition-colors"
            >
              Get Free Estimate
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#72583d] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-3 border-t border-neutral-200">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 rounded-lg bg-[#72583d] hover:bg-[#856747] text-white font-bold text-center block text-sm transition-colors shadow-sm"
            >
              Call 080762 75334 (Free Site Visit)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
