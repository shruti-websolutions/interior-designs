import React from 'react';
import { 
  Building2, 
  Calendar, 
  Hammer, 
  Sofa, 
  ShieldCheck, 
  Tag, 
  UserCheck, 
  Sparkles,
  Phone
} from 'lucide-react';
import { QUICK_INFO_DATA, BUSINESS_INFO } from '../data/kitchenData.ts';

export const QuickInfoSection: React.FC = () => {
  return (
    <section id="quick-info" className="py-20 bg-[#090B0E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#7BAE43] font-bold mb-2">
            Company Credentials
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Quick Business Information
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Verified corporate data for Dorio Modular Kitchen & Interior serving Etawah since 2011.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-5xl mx-auto">
          <div className="p-5 rounded-xl bg-[#14171E] border border-white/10 text-center">
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
              Established
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#7BAE43]">
              {QUICK_INFO_DATA.yearOfEstablishment}
            </div>
            <div className="text-[11px] text-zinc-400 mt-0.5">15+ Years Trust</div>
          </div>

          <div className="p-5 rounded-xl bg-[#14171E] border border-white/10 text-center">
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
              Google Rating
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              5.0 ★
            </div>
            <div className="text-[11px] text-[#7BAE43] font-medium mt-0.5">36 Reviews</div>
          </div>

          <div className="p-5 rounded-xl bg-[#14171E] border border-white/10 text-center">
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
              Visiting Charges
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#7BAE43]">
              FREE
            </div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Across Etawah</div>
          </div>

          <div className="p-5 rounded-xl bg-[#14171E] border border-white/10 text-center">
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
              Profession
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              Decorator
            </div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Modular Kitchens</div>
          </div>
        </div>

        {/* 8 Structured Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-xl bg-[#14171E] border border-white/10">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#7BAE43]">
              Usage Areas
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Modular Kitchen</li>
              <li>• Living Room & TV Units</li>
              <li>• Bedroom & Wardrobes</li>
              <li>• Outdoor Furniture</li>
              <li className="text-zinc-500">+3 More Spaces</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#14171E] border border-white/10">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#7BAE43]">
              Properties Served
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Residential Kothis & Flats</li>
              <li>• Hospital & Healthcare</li>
              <li>• Industrial Spaces</li>
              <li>• Commercial Showrooms</li>
              <li className="text-zinc-500">+1 More</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#14171E] border border-white/10">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#7BAE43]">
              Materials
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• BWP Marine Plywood</li>
              <li>• Acrylic High-Gloss</li>
              <li>• Quartz & Granite</li>
              <li>• Stainless Steel 304</li>
              <li className="text-zinc-500">Zero hollow cores</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#14171E] border border-white/10">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3 text-[#7BAE43]">
              Furniture Type
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>• Modular Furniture</li>
              <li>• Designer Joinery</li>
              <li>• Soft-Close Storage</li>
              <li>• Architectural Panels</li>
              <li className="text-zinc-500">+1 More</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
