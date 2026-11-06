/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { OurProjectsSection } from './components/OurProjectsSection.tsx';
import { WhyChooseUsSection } from './components/WhyChooseUsSection.tsx';
import Footer from './components/Footer.tsx';



export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D11] text-[#E2E8F0] selection:bg-[#72583d]/30 selection:text-white font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar />

      <main>
        {/* Section 1: Home */}
        <Hero />

        {/* Section 2: Our Projects (Explore Kitchen Types) */}
        <OurProjectsSection />

        {/* Section 3: Why Choose Us */}
        <WhyChooseUsSection />
      </main>

      {/* Section 4: Contact & Studio Info (Footer) */}
      <Footer />


    </div>
  );
}
