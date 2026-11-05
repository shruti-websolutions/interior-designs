import React, { useState } from 'react';
import { Phone, ShieldCheck, Droplets, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

export const MaterialSpotlight: React.FC = () => {
  const [activeCallout, setActiveCallout] = useState<number>(1);

  const callouts = [
    {
      num: 1,
      title: 'High Impact Strength',
      detail: 'IS:710 calibrated boiling waterproof core with heavy screw-holding capacity. Zero sagging under heavy brass cookware.',
      pos: 'top-8 left-4 md:left-12',
    },
    {
      num: 2,
      title: 'Heat & Spice Resistant',
      detail: 'Quartz & granite countertops endure 250°C cooking temperatures, resisting yellowing from Indian turmeric and mustard oil.',
      pos: 'top-8 right-4 md:right-12',
    },
    {
      num: 3,
      title: '100% Water & Steam Proof',
      detail: 'Zero ply separation or wood swelling even in high-moisture sink compartments and dishwasher condensation.',
      pos: 'bottom-16 right-4 md:right-12',
    },
    {
      num: 4,
      title: 'Termite & Borer Treated',
      detail: 'Vacuum pressure chemical impregnation shields every carcass panel against wood pests for decades.',
      pos: 'bottom-16 left-4 md:left-12',
    },
    {
      num: 5,
      title: 'Silent Acoustic Dampening',
      detail: 'German soft-close tandem runners and hydraulic hinges eliminate cabinet banging and metal rattles.',
      pos: 'bottom-2 left-1/2 -translate-x-1/2',
    },
  ];

  return (
    <section id="materials" className="py-24 bg-[#090B0E] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Matching Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-snug">
            The Foundation of Dorio Kitchens – <br />
            <span className="text-[#7BAE43]">IS:710 BWP Marine Plywood & Quartz</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400">
            Engineered specifically to survive boiling water, heavy spice vapors, and daily Indian home use.
          </p>
        </div>

        {/* Central Visual Showcase with Numbered Pointers - Matching Reference Screenshot */}
        <div className="relative max-w-4xl mx-auto min-h-[480px] sm:min-h-[540px] flex items-center justify-center">
          
          {/* Central 3D/Textured Core Showcase Circle */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-b from-[#7BAE43]/40 via-white/5 to-transparent shadow-2xl flex items-center justify-center group">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#14171E] relative border border-white/15">
              <img
                src="/assets/aistudio/modular-kitchen-system-bwp-plywood-core-wood-grain-laminate-finish-quartz-countertop-2240397270-kvcg718v_e05286fb.jpeg"
                alt="Dorio Core Material Cross-Section"
                className="w-full h-full object-cover object-center brightness-90 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#7BAE43]">
                  100% Guaranteed
                </span>
                <span className="text-lg sm:text-xl font-black text-white mt-0.5">
                  IS:710 Marine Core
                </span>
                <span className="text-[11px] text-zinc-300 mt-1 max-w-[180px]">
                  Boiling Waterproof Substrate
                </span>
              </div>
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute -inset-1 rounded-full border border-[#7BAE43]/30 pointer-events-none animate-pulse" />
          </div>

          {/* Floating Callout Cards with Connected Numbers */}
          <div className="hidden md:block">
            {callouts.map((c) => (
              <div
                key={c.num}
                onClick={() => setActiveCallout(c.num)}
                className={`absolute ${c.pos} max-w-[220px] p-3 rounded-xl border transition-all cursor-pointer ${
                  activeCallout === c.num
                    ? 'bg-[#181C25] border-[#7BAE43] shadow-lg scale-105'
                    : 'bg-[#12151D]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                      activeCallout === c.num
                        ? 'bg-[#7BAE43] text-black'
                        : 'bg-white/10 text-zinc-300'
                    }`}
                  >
                    {c.num}
                  </div>
                  <span className="text-xs font-bold text-white tracking-tight">
                    {c.title}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile View: Callouts as Clean Grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
          {callouts.map((c) => (
            <div key={c.num} className="p-4 rounded-xl bg-[#14171E] border border-white/10">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-md bg-[#7BAE43] text-black font-bold text-xs flex items-center justify-center">
                  {c.num}
                </div>
                <div className="text-xs font-bold text-white">{c.title}</div>
              </div>
              <p className="text-xs text-zinc-400">{c.detail}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Materials */}
        <div className="mt-12 text-center">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span>Call to Inspect Material Samples in Etawah</span>
          </a>
        </div>

      </div>
    </section>
  );
};
