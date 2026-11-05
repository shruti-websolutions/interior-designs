import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090C] border-t border-white/5 pt-14 pb-24 sm:pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-bold text-lg text-white uppercase tracking-wider">
              DORIO <span className="text-[#7BAE43]">DECOR</span>
            </span>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Etawah’s certified interior design and modular kitchen studio since 2011. 
              Fabricating waterproof BWP marine plywood kitchens, acrylic finishes, and tailored storage solutions.
            </p>
            <div className="text-zinc-400">
              <span className="text-[#7BAE43] font-bold">5.0 ★ Google Rating</span> (36 Verified Reviews)
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Products
            </div>
            <ul className="space-y-1.5">
              <li><a href="#products" className="hover:text-[#7BAE43]">Modular Kitchen</a></li>
              <li><a href="#products" className="hover:text-[#7BAE43]">Acrylic Modular Kitchen</a></li>
              <li><a href="#products" className="hover:text-[#7BAE43]">Kitchen Cabinets</a></li>
              <li><a href="#products" className="hover:text-[#7BAE43]">Interior & Exterior Decorators</a></li>
            </ul>
          </div>

          {/* Contact & Call */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Direct Contact
            </div>
            
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <div className="text-zinc-400 space-y-1">
              <div>{BUSINESS_INFO.address}</div>
              <div>Hours: {BUSINESS_INFO.workingHours}</div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} Dorio Modular Kitchen & Interior, Etawah. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[#7BAE43] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
