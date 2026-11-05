import React, { useState } from 'react';
import { ArrowRight, Phone, MessageSquare, X, Check, Eye } from 'lucide-react';
import { KITCHEN_TYPES, KitchenTypeItem } from '../data/kitchenTypesData.ts';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

export const OurProjectsSection: React.FC = () => {
  const [selectedKitchen, setSelectedKitchen] = useState<KitchenTypeItem | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Matching Reference Image 1 Layout (Two-Column Split on Desktop) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-12 sm:mb-16">
          {/* Left Column: Eyebrow + Main Heading */}
          <div className="max-w-xl">
            <p className="text-base sm:text-lg font-bold font-didact text-[#72583d] tracking-wide mb-1">
              What Are You Looking For?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111111] font-didact tracking-tight leading-tight">
              Explore Kitchen Types
            </h2>
          </div>

          {/* Right Column: Authoritative Editorial Description */}
          <div className="max-w-xl text-neutral-600 font-kodchasan text-sm sm:text-[15px] leading-relaxed">
            <p>
              <strong className="text-[#111111] font-bold">DORIO MODULAR KITCHEN & INTERIOR</strong> is renowned as one of the best and most authorized modular kitchen studios in Etawah. We are recognized in the interior industry for custom precision craftsmanship, 3D design, and durable BWP Marine ply construction.
            </p>
          </div>
        </div>

        {/* Dynamic Responsive Grid - Mobile First: 1 Col Mobile, 2 Col Tablet, 4 Col Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
          {KITCHEN_TYPES.map((kitchen) => (
            <div
              key={kitchen.id}
              className="bg-white rounded-lg border border-neutral-200/90 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:border-[#72583d]/60 transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedKitchen(kitchen)}
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 rounded-t-lg">
                <img
                  src={kitchen.image}
                  alt={kitchen.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Resilient fallback to alternative image if main fails
                    if (kitchen.fallbackImage && e.currentTarget.src !== kitchen.fallbackImage) {
                      e.currentTarget.src = kitchen.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle Hover Overlay with Quick Preview Icon */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-white/95 text-[#111111] text-xs font-semibold rounded shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                    <Eye className="w-3.5 h-3.5 text-[#72583d]" />
                    <span>View Layout Specs</span>
                  </span>
                </div>
              </div>

              {/* Card Body - Title & Description matching Reference Image 1 */}
              <div className="p-5 flex-1 flex flex-col justify-between text-center sm:text-left">
                <div>
                  <h3 className="font-bold text-lg sm:text-[19px] text-[#111111] font-didact tracking-tight group-hover:text-[#72583d] transition-colors leading-snug">
                    {kitchen.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-sm text-neutral-600 leading-relaxed font-kodchasan mt-2.5">
                    {kitchen.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#72583d] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#72583d]" />
                  </span>

                  <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                    {kitchen.shortTitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Trust Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#111111]">100% Customized For Etawah Homes:</span>
            <span>Laser measurement, 3D computer design preview & 10-year warranty.</span>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#72583d] hover:bg-[#856747] text-white text-xs sm:text-sm font-semibold rounded-none transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 080762 75334 for Free Consultation</span>
          </a>
        </div>

      </div>

      {/* Accessible Detail Modal - Opens when user clicks any kitchen type card */}
      {selectedKitchen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedKitchen(null)}
        >
          <div
            className="bg-white text-neutral-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-neutral-100 overflow-hidden">
              <img
                src={selectedKitchen.image}
                alt={selectedKitchen.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedKitchen(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#72583d]">
                  {selectedKitchen.tag || 'Modular Layout'}
                </span>
                <h3 className="text-2xl font-bold font-didact text-[#111111] mt-1">
                  {selectedKitchen.title}
                </h3>
                <p className="text-neutral-600 font-kodchasan text-sm sm:text-base leading-relaxed mt-2">
                  {selectedKitchen.description}
                </p>
              </div>

              {/* Layout Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-neutral-50 p-4 rounded-lg border border-neutral-200/70 text-xs">
                <div>
                  <div className="text-neutral-500 font-medium">Work Flow</div>
                  <div className="font-bold text-neutral-900 mt-0.5">{selectedKitchen.workTriangle}</div>
                </div>
                <div>
                  <div className="text-neutral-500 font-medium">Storage Output</div>
                  <div className="font-bold text-neutral-900 mt-0.5">{selectedKitchen.storageCapacity}</div>
                </div>
                <div>
                  <div className="text-neutral-500 font-medium">Best Suited For</div>
                  <div className="font-bold text-neutral-900 mt-0.5">{selectedKitchen.bestFor}</div>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                  Layout & Engineering Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedKitchen.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <div className="p-0.5 rounded bg-[#72583d]/15 text-[#72583d] shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#72583d] hover:bg-[#856747] text-white font-bold text-sm tracking-wide shadow-sm transition-colors text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call for Free 3D Design ({BUSINESS_INFO.phone})</span>
                </a>

                <a
                  href={`https://wa.me/918076275334?text=Hi%20Dorio%20Kitchens,%20I%20am%20interested%20in%20the%20${encodeURIComponent(selectedKitchen.title)}%20layout%20for%20my%20home%20in%20Etawah.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-neutral-900 hover:bg-black text-white font-bold text-sm tracking-wide transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp 3D Query</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
