import React from 'react';
import { ChefHat, Sparkles, Layers, Home, Phone, ArrowRight } from 'lucide-react';
import { PRODUCTS_LIST, BUSINESS_INFO } from '../data/kitchenData.ts';

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-[#0B0D11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#7BAE43] font-bold mb-2">
              Our Products
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Four Core Product Lines
            </h2>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-[#7BAE43] flex items-center gap-1.5 transition-colors"
          >
            <span>Call for factory prices</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7BAE43]" />
          </a>
        </div>

        {/* 4 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS_LIST.map((prod, idx) => (
            <div
              key={prod.id}
              className="bg-[#14171E] rounded-xl overflow-hidden border border-white/10 hover:border-[#7BAE43]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image banner */}
              <div className="relative h-48 overflow-hidden bg-black/40">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-85"
                />
                <div className="absolute top-3 left-3 bg-black/75 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-[#7BAE43] border border-white/10">
                  {prod.tag}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#7BAE43] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-xs font-bold text-[#7BAE43] hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call to Order</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-zinc-400 hover:text-white"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
