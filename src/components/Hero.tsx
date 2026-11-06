import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';

interface FeatureCardItem {
  id: number;
  title: string;
  description: string;
  highlight?: boolean;
}

const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 1,
    title: '100% BWP Marine Ply',
    description: 'Boiling water proof core, zero moisture swelling under sinks',
    highlight: true,
  },
  {
    id: 2,
    title: 'High-Gloss Acrylic',
    description: 'Mirror-finish scratch-resistant shutters with seamless laser edges',
  },
  {
    id: 3,
    title: 'Free Site Visit & 3D Plan',
    description: 'Precision laser room measurement with zero visiting fees in Etawah',
  },
  {
    id: 4,
    title: '15+ Years (Estd. 2011)',
    description: '450+ residential installations, GST invoicing, service warranty',
  },
];

export const Hero: React.FC = () => {
  // Reusable feature cards grid renderer for clean, maintainable layout
  const renderFeatureCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {FEATURE_CARDS.map((card) =>
        card.highlight ? (
          <div
            key={card.id}
            className="bg-[#72583d] text-white rounded-xl p-5 flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center font-bold text-xs mb-3 text-white">
              {card.id}
            </div>
            <div>
              <h3 className="font-bold text-base tracking-tight text-white mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-white/90 leading-snug font-medium">
                {card.description}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={card.id}
            className="bg-[#14171E] border border-white/10 rounded-xl p-5 flex flex-col justify-between transition-transform hover:-translate-y-0.5"
          >
            <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center font-bold text-xs mb-3 text-zinc-300">
              {card.id}
            </div>
            <div>
              <h3 className="font-bold text-base tracking-tight text-white mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-snug">
                {card.description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );

  return (
    <>
      {/* 
        Hero Section:
        - Takes full height of the screen (min-h-[100dvh]) on all screen sizes
        - Mobile: mobile-hero.webp with clean black text at bottom over cabinetry
        - Desktop: hero.jpg with full clarity, no blur overlays, crisp text and buttons
      */}
      <section id="home" className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-0 md:pt-24 pb-0 md:pb-12 bg-[#0B0D11] overflow-hidden">
        {/* Background Hero Image with Art-Directed Mobile & Desktop Sources */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            {/* Mobile portrait image (<640px) in pristine 98% WebP and lossless original JPG */}
            <source
              media="(max-width: 639px)"
              srcSet="/assets/aistudio/hero.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 639px)"
              srcSet="/assets/aistudio/hero.webp"
              type="image/jpeg"
            />
            {/* Desktop landscape hero image: Same sage-green modular kitchen with glass-door wall cabinets, black chimney hood, and kettle positioned on the right half */}
            <img
              src="/assets/aistudio/hero.webp"
              alt="Dorio Sage Green Modular Kitchen in Etawah"
              className="w-full h-full object-cover object-[center_35%] lg:object-[72%_35%] brightness-[1.15] md:brightness-[1.12] md:contrast-[1.05] md:saturate-[1.08]"
              loading="eager"
            />
          </picture>

          {/* MOBILE OVERLAYS (< 768px) */}
          {/* 1. Mobile Top Gradient: subtle 120px fade (rgba(0,0,0,0.45) to transparent) so logo, phone & hamburger icon stay crisp */}
          <div className="absolute top-0 inset-x-0 h-[120px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45)_0%,transparent_100%)] pointer-events-none md:hidden" />

          {/* 2. Mobile Full-Height Gradient: 0.85 at bottom, 0.55 at 45%, fading to transparent at 80% height */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.55)_45%,transparent_80%)] pointer-events-none md:hidden" />

          {/* DESKTOP OVERLAYS (>= 768px / 1024px+) */}
          {/* 1. Desktop Top Gradient: subtle 140px fade (rgba(0,0,0,0.50) to transparent) so nav stays crisp */}
          <div className="absolute top-0 inset-x-0 h-[140px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.50)_0%,transparent_100%)] pointer-events-none hidden md:block" />

          {/* 2. Desktop Left-to-Right Linear Gradient: 0.80 at 0%, 0.55 at 35%, transparent at 65%. Right side stays bright! */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,7,5,0.85)_0%,rgba(10,7,5,0.72)_30%,rgba(10,7,5,0.40)_48%,transparent_68%)] pointer-events-none hidden md:block" />
        </div>

        {/* Main Hero Content - Anchored to bottom on mobile (<768px), vertically centered on desktop (>=768px) */}
        <div className="max-w-7xl mx-auto px-6 pb-8 pt-24 md:px-8 md:pt-20 md:pb-12 relative z-10 w-full flex-1 flex flex-col justify-end md:justify-center">
          <div className="w-full">
            {/* MOBILE HERO CONTENT (< 768px) */}
            <div className="md:hidden w-full">
              {/* Text Container: Pure typography, completely removed box, border, and shadows */}
              <div className="space-y-3">
                <h1 className="font-didact font-bold text-[28px] sm:text-[32px] text-white leading-[1.15] [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
                  Kitchens designed around how you cook.
                </h1>

                <p className="font-kodchasan font-medium text-[16px] text-white leading-[1.5] [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] line-clamp-2">
                  Modular kitchens and interiors for Etawah homes, from a studio families have trusted for 15 years.
                </p>
              </div>

              {/* Mobile Call-to-Action (CTA) Buttons: 24px top spacing, 12px gap, 52px height */}
              <div className="mt-6 flex flex-col gap-3 w-full">
                {/* Primary Button: Solid woodish tone, white text, full width, 52px tall */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full h-[52px] bg-[#72583d] hover:bg-[#856747] active:scale-[0.99] text-white font-semibold text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#72583d]/25 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 fill-white text-white" />
                  <span>Call for a Free Estimate</span>
                </a>

                {/* Secondary Button: Transparent white fill (0.12), 1.5px solid white border, white text, backdrop-blur 6px */}
                <a
                  href="#projects"
                  className="w-full h-[52px] bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.2)] active:scale-[0.99] border-[1.5px] border-white text-white font-medium text-base flex items-center justify-center gap-2 backdrop-blur-[6px] shadow-sm transition-all duration-200"
                >
                  <span>View Catalog</span>
                </a>
              </div>
            </div>

            {/* DESKTOP HERO CONTENT (>= 768px / 1024px and wider) */}
            <div className="hidden md:block w-full max-w-[560px]">
              {/* Eyebrow: small, uppercase, letter-spaced, wood tone */}
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-white uppercase mb-3">
                MODULAR KITCHENS & INTERIORS · ETAWAH SINCE 2011
              </p>

              {/* Headline: 56-64px, bold, white, line-height 1.1, break after "Built for" */}
              <h1 className="font-didact font-bold text-5xl lg:text-[56px] xl:text-[64px] text-white leading-[1.1] tracking-tight">
                Kitchens designed around how you cook.
              </h1>

              {/* Subtext: 16px headline-to-subtext spacing, 20px font, white at 90% opacity, one line */}
              <p className="mt-4 font-kodchasan font-medium text-lg lg:text-[20px] text-white/90 leading-relaxed whitespace-normal lg:whitespace-nowrap">
                Modular kitchens and interiors for Etawah homes, <br />from a studio families have trusted for 15 years.
              </p>

              {/* Buttons: 32px spacing from subtext (mt-8), 16px between buttons (gap-4, side by side) */}
              <div className="mt-8 flex flex-row items-center gap-4">
                {/* Primary Button: Solid wood tone, white text, phone icon, 56px tall */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="h-[56px] px-8 bg-[#72583d] hover:bg-[#856747] active:scale-[0.99] text-white font-semibold text-base inline-flex items-center justify-center gap-2.5 shadow-lg shadow-[#72583d]/25 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 fill-white text-white" />
                  <span>Call for a Free Quote</span>
                </a>

                {/* Secondary Button: rgba(255,255,255,0.12) fill, 1.5px white border, white text, blur(6px), 56px tall, 8px radius */}
                <a
                  href="#projects"
                  className="h-[56px] px-8 bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.2)] active:scale-[0.99] border-[1.5px] border-white text-white font-medium text-base inline-flex items-center justify-center gap-2 backdrop-blur-[6px] shadow-sm transition-all duration-200"
                >
                  <span>View Catalog</span>
                </a>
              </div>

              {/* Trust Strip: small, 14px, white at 80% */}
              <p className="mt-5 text-[14px] text-white/80 font-medium tracking-wide">
                Free 3D Design · 10-Year Warranty · 500+ Kitchens
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};
