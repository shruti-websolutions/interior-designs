import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

export const StickyCallBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#14171E]/95 backdrop-blur-md border border-white/15 rounded-xl p-2.5 shadow-2xl flex items-center justify-between gap-2.5">
        
        <div className="hidden xs:flex flex-col pl-2">
          <span className="text-xs text-white uppercase tracking-tight">Dorio Kitchens</span>
          <span className="text-[10px] text-[#8ec641]">Pachawali Rd, Etawah</span>
        </div>

        <div className="flex items-center gap-2 w-full xs:w-auto">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex-1 xs:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#8ec641] hover:bg-[#9bd44e] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#8ec641]" />
          </a>
        </div>

      </div>
    </div>
  );
};
