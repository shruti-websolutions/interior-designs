/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { MaterialSpotlight } from './components/MaterialSpotlight.tsx';
import { ThreeKitchenViewer } from './components/ThreeKitchenViewer.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { QuickInfoSection } from './components/QuickInfoSection.tsx';
import { CostCalculator } from './components/CostCalculator.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { StickyCallBar } from './components/StickyCallBar.tsx';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from './data/kitchenData.ts';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D11] text-[#E2E8F0] selection:bg-[#7BAE43]/30 selection:text-white font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Section with Attached 4-Card Strip matching reference */}
        <Hero />

        {/* Catalog & Projects Grid - 2 over 3 layout matching reference */}
        <GallerySection />

        {/* Materials & Core Engineering Spotlight - Matching reference sphere callouts */}
        <MaterialSpotlight />

        {/* Interactive 3D Kitchen Configurator */}
        <section id="3d-studio" className="py-20 bg-[#0B0D11] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#7BAE43] font-bold mb-2">
                  Interactive 3D Preview
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                  Explore Modular Kitchens in 3D
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                  Rotate 360°, switch between Natural Oak, Gloss Acrylic & Matte Charcoal, and test drawer openings.
                </p>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 fill-black" />
                <span>Call to Order in Etawah</span>
              </a>
            </div>

            <ThreeKitchenViewer />
          </div>
        </section>

        {/* 4 Core Products: Modular Kitchen, Acrylic, Cabinets, Decorators */}
        <ProductsSection />

        {/* Company Quick Information (From Justdial/Google Profile Screenshot) */}
        <QuickInfoSection />

        {/* Modular Kitchen Cost Estimator */}
        <CostCalculator />

        {/* Google Reviews & FAQs */}
        <TestimonialsSection />

        {/* Contact & Pachawali Rd Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Call Bar */}
      <StickyCallBar />
    </div>
  );
}
