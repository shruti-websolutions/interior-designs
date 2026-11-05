import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/kitchenData.ts';
import { Button } from './Button.tsx';

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
            className="bg-[#8ec641] text-black rounded-xl p-5 flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <div className="w-6 h-6 rounded-md bg-black/15 flex items-center justify-center font-bold text-xs mb-3 text-black">
              {card.id}
            </div>
            <div>
              <h3 className="font-bold text-base tracking-tight text-black mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-black/85 leading-snug font-medium">
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
      <section className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-20 sm:pt-28 pb-8 sm:pb-12 bg-[#0B0D11] overflow-hidden">
        {/* Background Hero Image with Art-Directed Mobile & Desktop Sources */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            {/* Mobile portrait image (<640px) in pristine 98% WebP and lossless original JPG */}
            <source
              media="(max-width: 639px)"
              srcSet="/assets/aistudio/mobile-hero.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 639px)"
              srcSet="/assets/aistudio/mobile-hero.jpg"
              type="image/jpeg"
            />
            {/* Desktop landscape hero image: Slightly reduced brightness on desktop (90%) for refined contrast and reduced glare */}
            <img
              src="/assets/aistudio/hero.jpg"
              alt="Dorio Modular Kitchen in Etawah"
              className="w-full h-full object-cover object-[center_35%] brightness-100 sm:brightness-75"
              loading="eager"
            />
          </picture>

          {/* Top edge gradient for navbar contrast */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

          {/* Softened Left-to-Right Dark Gradient Overlay: fades out early around 48-50% width, preserving fridge luster and eliminating the dark void */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[50%] lg:w-[48%] bg-gradient-to-r from-black/65 via-black/30 to-transparent pointer-events-none" />

          {/* Mobile Bottom-to-Top Gradient for mobile typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent sm:hidden pointer-events-none" />
        </div>

        {/* Main Hero Content - Positioned at bottom on mobile over the clean mint cabinetry, centered on desktop */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 pb-8 sm:py-12 flex-1 flex flex-col justify-end sm:justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Text Column */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              {/* Clean Left-to-Right Dark Gradient Overlay: Seamless, zero box edges, 100% unblurred photo on right */}
              <div className="max-w-xl space-y-3 sm:space-y-4">
                <h1 className="font-didact font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-wider uppercase leading-tight sm:leading-[1.08] drop-shadow-md">
                  DORIO DECOR
                </h1>

                <p className="font-kodchasan font-medium text-white/95 sm:text-zinc-100 text-base sm:text-lg leading-relaxed drop-shadow-sm max-w-lg">
                  Custom modular kitchens and luxury interiors — your path to modern, functional, and durable design in Etawah.
                </p>
              </div>

              {/* Call-to-Action (CTA) Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button
                  variant="primary"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                >
                  <Phone className="w-4 h-4 fill-black text-black" />
                  <span>080762 75334</span>
                </Button>

                <Button
                  variant="secondary"
                  href="#projects"
                >
                  <span>View Catalog</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Card Feature Strip - Positioned directly under the full-screen Hero on all viewports */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#0B0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {renderFeatureCards()}
        </div>
      </div>
    </>
  );
};
