import React from 'react';
import { Phone, X, MessageCircle, MapPin, Star, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-[#121620] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#8d6f1a] flex items-center justify-center mx-auto text-black font-black text-2xl shadow-lg">
            <Phone className="w-7 h-7 fill-black" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-white pt-2">
            Call Dorio Kitchens
          </h3>
          <p className="text-xs text-zinc-400">
            Pachawali Rd, Vijay Nagar, Etawah, UP 206001
          </p>
        </div>

        {/* Primary Call Action */}
        <div className="space-y-3 mb-6">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#ecc863] to-[#b38b25] text-black font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] transition-transform"
          >
            <Phone className="w-5 h-5 fill-black text-black animate-pulse" />
            <span>Call: {BUSINESS_INFO.displayPhone}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-sm flex items-center justify-center gap-2.5 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp for 3D Designs</span>
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
            <span>5.0 Star Rated with 36 Google Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>100% Waterproof BWP Marine Grade Core</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span>Free On-Site Measurement in Etawah</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 text-xs text-zinc-400 hover:text-white transition-colors text-center"
        >
          Cancel and return to site
        </button>

      </div>
    </div>
  );
};
