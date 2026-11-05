import React, { useState } from 'react';
import { Calculator, Phone, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

export const CostCalculator: React.FC = () => {
  const [layout, setLayout] = useState<'l-shape' | 'straight' | 'parallel' | 'island'>('l-shape');
  const [substrate, setSubstrate] = useState<'bwp-ply' | 'hdhmr'>('bwp-ply');
  const [finish, setFinish] = useState<'acrylic' | 'matte-laminate' | 'pu-lacquer'>('acrylic');
  const [countertop, setCountertop] = useState<'quartz' | 'black-granite'>('quartz');
  const [includeTallPantry, setIncludeTallPantry] = useState<boolean>(true);

  const calculatePrice = () => {
    let basePrice = 0;
    if (layout === 'straight') basePrice = 110000;
    else if (layout === 'l-shape') basePrice = 175000;
    else if (layout === 'parallel') basePrice = 210000;
    else if (layout === 'island') basePrice = 310000;

    let subMult = substrate === 'bwp-ply' ? 1.25 : 1.1;
    let finMult = finish === 'acrylic' ? 1.3 : finish === 'pu-lacquer' ? 1.4 : 1.1;
    let topAddon = countertop === 'quartz' ? 38000 : 22000;
    let pantryAddon = includeTallPantry ? 32000 : 0;

    return Math.round(basePrice * subMult * finMult + topAddon + pantryAddon);
  };

  const estimatedTotal = calculatePrice();
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(estimatedTotal);

  return (
    <section id="calculator" className="py-20 bg-[#0B0D11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#7BAE43] font-bold mb-2">
            Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Modular Kitchen Cost Estimator
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Instant estimate for homeowners in Etawah. Includes BWP ply, 3D CAD modeling, and factory edge-banding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto">
          
          {/* Options (7 cols) */}
          <div className="lg:col-span-7 bg-[#14171E] border border-white/10 rounded-2xl p-6 space-y-5">
            
            {/* 1. Layout */}
            <div>
              <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                1. Kitchen Layout
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'l-shape', label: 'L-Shaped Kitchen' },
                  { id: 'island', label: 'Island Kitchen' },
                  { id: 'straight', label: 'Straight Line' },
                  { id: 'parallel', label: 'Parallel / Galley' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLayout(item.id as any)}
                    className={`p-3 rounded-lg text-left text-xs font-semibold border transition-all ${
                      layout === item.id
                        ? 'bg-[#7BAE43] text-black border-[#7BAE43]'
                        : 'bg-black/30 border-white/5 text-zinc-300 hover:border-white/15'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Substrate */}
            <div>
              <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                2. Core Substrate
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'bwp-ply', label: 'BWP Marine 710 Plywood (Recommended)' },
                  { id: 'hdhmr', label: 'HDHMR High Density' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSubstrate(item.id as any)}
                    className={`p-3 rounded-lg text-left text-xs font-semibold border transition-all ${
                      substrate === item.id
                        ? 'bg-[#7BAE43] text-black border-[#7BAE43]'
                        : 'bg-black/30 border-white/5 text-zinc-300 hover:border-white/15'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Finish */}
            <div>
              <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                3. Shutter Finish
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'acrylic', label: 'High-Gloss Acrylic' },
                  { id: 'matte-laminate', label: 'Matte Laminate' },
                  { id: 'pu-lacquer', label: 'PU Paint Coat' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFinish(item.id as any)}
                    className={`p-2.5 rounded-lg text-left text-xs font-semibold border transition-all ${
                      finish === item.id
                        ? 'bg-[#7BAE43] text-black border-[#7BAE43]'
                        : 'bg-black/30 border-white/5 text-zinc-300 hover:border-white/15'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Countertop & Pantry */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  Countertop
                </div>
                <div className="space-y-1.5">
                  {[
                    { id: 'quartz', label: 'Sparkling Quartz' },
                    { id: 'black-granite', label: 'Jet Black Granite' },
                  ].map((top) => (
                    <button
                      key={top.id}
                      onClick={() => setCountertop(top.id as any)}
                      className={`w-full p-2.5 rounded-lg text-left text-xs font-semibold border transition-all ${
                        countertop === top.id
                          ? 'bg-[#7BAE43] text-black border-[#7BAE43]'
                          : 'bg-black/30 border-white/5 text-zinc-300'
                      }`}
                    >
                      {top.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  Storage Modules
                </div>
                <button
                  onClick={() => setIncludeTallPantry(!includeTallPantry)}
                  className={`w-full p-3 rounded-lg text-left text-xs font-semibold border transition-all ${
                    includeTallPantry
                      ? 'bg-[#7BAE43]/20 border-[#7BAE43] text-[#7BAE43]'
                      : 'bg-black/30 border-white/5 text-zinc-400'
                  }`}
                >
                  <div className="font-bold">Tall Pantry Tower</div>
                  <div className="text-[10px] mt-0.5">{includeTallPantry ? 'Included' : '+ Click to Add'}</div>
                </button>
              </div>
            </div>

          </div>

          {/* Result Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#14171E] border border-[#7BAE43]/40 rounded-2xl p-6 sm:p-7 space-y-5">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#7BAE43] mb-1">
                Estimated Project Cost
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {formattedPrice}
                <span className="text-xs font-normal text-zinc-400 ml-2">approx.*</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-zinc-300 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#7BAE43] shrink-0" />
                <span>100% Calibrated BWP Marine 710 Plywood Carcass</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#7BAE43] shrink-0" />
                <span>German Soft-Close Hinges & Tandem Drawers</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#7BAE43] shrink-0" />
                <span>Zero Glue Line Machine Edge-Banding</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#7BAE43] shrink-0" />
                <span>Free Site Measurement & 3D Plan in Etawah</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3.5 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Call to Lock Quote ({BUSINESS_INFO.phone})</span>
              </a>

              <a
                href={`https://wa.me/918076275334?text=Hi%20Dorio%20Kitchens,%20my%20calculator%20estimate%20is%20${encodeURIComponent(formattedPrice)}%20for%20a%20${layout}%20modular%20kitchen.%20Please%20schedule%20a%20site%20visit.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center border border-white/10 transition-colors"
              >
                Send to WhatsApp
              </a>
            </div>

            <div className="text-[10px] text-zinc-500 text-center">
              * Exact quote finalized after free laser measurement at your home.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
