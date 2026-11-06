import React from 'react';
import { Award, Wrench, Home, ShieldCheck } from 'lucide-react';

interface FeatureItem {
  id: string;
  heading: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const WHY_US_ITEMS: FeatureItem[] = [
  {
    id: 'experience',
    heading: '15+ Years of Excellence',
    description: 'Serving Etawah since 2011 with an unblemished 5.0-star customer rating.',
    icon: Award,
  },
  {
    id: 'materials',
    heading: 'Premium Materials',
    description: 'Built to last using high-grade wood and stainless steel materials for residential & commercial spaces.',
    icon: Wrench,
  },
  {
    id: 'furnishing',
    heading: 'Complete Furnishing',
    description: 'From modular kitchens to living room and outdoor furniture, crafted by expert decorators.',
    icon: Home,
  },
  {
    id: 'guarantee',
    heading: 'Service Guarantee',
    description: 'Backed by GST-registered business standards, complete service guarantees, and transparent visiting fee options.',
    icon: ShieldCheck,
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      className="py-14 sm:py-20 bg-[#EFEFEF] text-neutral-900 border-y border-neutral-300/80 relative"
    >
      {/* Scroll margin anchor for #estimate link in Navbar */}
      <div id="estimate" className="absolute -top-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold font-didact text-[#72583d] uppercase tracking-widest mb-2">
            WHY CHOOSE US
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] font-didact tracking-tight leading-tight">
            Trusted Modular Interiors &amp; Custom Craftsmanship
          </h2>

          <p className="mt-3.5 text-sm sm:text-[15px] text-neutral-600 font-kodchasan leading-relaxed max-w-2xl mx-auto">
            At Dorio Modular Kitchen &amp; Interior, we bring over 15 years of design experience to home and commercial spaces across Etawah. Established in 2011, our team of expert decorators specializes in custom modular furniture, high-grade wood and stainless steel craftsmanship, and end-to-end interior execution—backed by a full service guarantee.
          </p>
        </div>

        {/* Minimalist 4-Item Feature Strip - Exact Reference Layout (No Cards, No Boxes, No Borders) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {WHY_US_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center group"
              >
                {/* Standalone Minimalist Icon (Matches Reference Screenshot) */}
                <div className="text-neutral-700 group-hover:text-[#72583d] transition-colors duration-200 mb-3 sm:mb-4">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.65]" />
                </div>

                {/* Bold Heading */}
                <h3 className="font-bold text-base sm:text-[17px] text-[#111111] font-didact tracking-tight leading-snug">
                  {item.heading}
                </h3>

                {/* Clean Description */}
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13.5px] text-neutral-600 font-kodchasan leading-relaxed max-w-[260px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
