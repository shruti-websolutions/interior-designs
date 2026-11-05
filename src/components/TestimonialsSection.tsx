import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Phone, MapPin } from 'lucide-react';
import { GOOGLE_REVIEWS, FAQS, BUSINESS_INFO } from '../data/kitchenData.ts';

export const TestimonialsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="reviews" className="py-20 bg-[#0B0D11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#7BAE43] font-bold mb-2">
            Client Feedback
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            5.0 Star Google Reviews ({BUSINESS_INFO.reviewCount})
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Real experiences from families across Etawah who chose Dorio for their modular kitchens.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-16">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-xl bg-[#14171E] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-[#7BAE43]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#7BAE43]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500">{rev.date}</span>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-xs">{rev.author}</div>
                  <div className="text-[11px] text-zinc-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#7BAE43]" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <span className="text-[10px] text-[#7BAE43] px-2 py-0.5 rounded bg-[#7BAE43]/10 font-medium">
                  {rev.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#14171E] border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-white hover:text-[#7BAE43] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#7BAE43] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs text-zinc-400 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
