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
      className="py-25 sm:py-25 bg-[#EFEFEF] text-neutral-900 border-y border-neutral-300/80 relative"
    >
      {/* Scroll margin anchor for #estimate link in Navbar */}
      <div id="estimate" className="absolute -top-20 pointer-events-none" />

      <div className="max-w-8xl  px-4 sm:px-6 lg:px-2">

        {/* Section Header */}
        <div className="text-center max-w-8xl mx-auto mb-12 sm:mb-16">
          <p className="text-xl sm:text-2xl font-bold font-didact text-[#72583d] uppercase tracking-widest mb-2">
            WHY CHOOSE US?
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111111] font-didact tracking-tight leading-tight">
            Trusted Modular Interiors &amp; Custom Craftsmanship
          </h2>

          <p className="mt-3.5 text-[19px] sm:text-[#292929] font-kodchasan leading-relaxed max-w-2xl mx-auto">
            Dorio Modular Kitchen & Interior brings 15+ years of expert craftsmanship to Etawah, delivering custom modular furniture and end-to-end interior execution with a full service guarantee.
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
                  <Icon className="w-14 h-14 sm:w-14 sm:h-14 stroke-[1.65]" />
                </div>

                {/* Bold Heading */}
                <h3 className="font-bold text-[19px] sm:text-[17px] text-[#111111] font-didact tracking-tight leading-snug">
                  {item.heading}
                </h3>

                {/* Clean Description */}
                <p className="mt-1.5 sm:mt-2 text-[18px] text-[#292929] font-kodchasan leading-relaxed max-w-[420px]">
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
