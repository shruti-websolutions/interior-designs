import React, { useState } from 'react';
import { Phone, ArrowRight, X, Check, MapPin } from 'lucide-react';
import { REAL_PROJECTS, BUSINESS_INFO } from '../data/kitchenData.ts';
import { KitchenProject } from '../types/index.ts';

export const GallerySection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<KitchenProject | null>(null);

  // Gallery items configured to match the reference layout (2 large top, 3 bottom)
  const topProjects = [
    {
      id: 'proj-island',
      title: 'L-Shaped Kitchen with Breakfast Island',
      subtitle: 'Natural wood base, matte black upper cabinets and engineered quartz countertop',
      image: '/assets/aistudio/l-shaped-modular-kitchen-natural-wood-and-matte-black-finish-quartz-countertop-integrated-island-2240397268-wlgyzmbb_c4255844.jpeg',
      location: 'Civil Lines, Etawah',
      specs: {
        core: 'BWP Marine 710 Plywood',
        counter: 'Engineered Quartz',
        hardware: 'Soft-Close Tandem',
      }
    },
    {
      id: 'proj-pantry',
      title: 'Modular Tall Pantry & Microwave Tower',
      subtitle: 'Floor-to-ceiling appliance storage, natural wicker pullouts, and quartz worktop',
      image: '/assets/aistudio/modular-kitchen-system-bwp-plywood-core-wood-grain-laminate-finish-quartz-countertop-2240397270-kvcg718v_e05286fb.jpeg',
      location: 'Vijay Nagar, Etawah',
      specs: {
        core: '100% Waterproof Carcass',
        counter: 'White Quartz Surface',
        hardware: 'Blum Soft-Close Lifts',
      }
    }
  ];

  const bottomProjects = [
    {
      id: 'proj-gola',
      title: 'Handle-less Gola Profile & Granite',
      subtitle: 'Minimalist champagne taupe shutters with jet black granite countertop',
      image: '/assets/aistudio/dorio-l-shaped-modular-kitchen-granite-countertop-handle-less-laminate-finish-2240397269-qk4nhdwb_dc366d80.jpeg',
      location: 'Friends Colony, Etawah',
    },
    {
      id: 'proj-acrylic',
      title: 'High-Gloss Acrylic Kitchens',
      subtitle: 'Mirror-finish UV resistant acrylic sheets with zero glue-line laser edging',
      image: '/assets/aistudio/l-shaped-modular-kitchen-natural-wood-and-matte-black-finish-quartz-countertop-integrated-island-2240397268-wlgyzmbb_c4255844.jpeg',
      location: 'Pachawali Rd, Etawah',
    },
    {
      id: 'proj-interior',
      title: 'Interior & Exterior Decorators',
      subtitle: 'Turnkey living rooms, TV consoles, designer furniture, and wardrobes',
      image: '/assets/aistudio/modular-kitchen-system-bwp-plywood-core-wood-grain-laminate-finish-quartz-countertop-2240397270-kvcg718v_e05286fb.jpeg',
      location: 'Etawah Region',
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0B0D11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Matching reference screenshot style */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-snug">
            Create an exceptional interior <br className="hidden sm:inline" />
            together with <span className="text-[#7BAE43]">DORIO DECOR</span>
          </h2>
          <div className="mt-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-[#7BAE43] transition-colors"
            >
              <span>Explore full catalog & call for site visit</span>
              <ArrowRight className="w-4 h-4 text-[#7BAE43]" />
            </a>
          </div>
        </div>

        {/* Gallery Grid - Matching 2-over-3 Reference Layout */}
        <div className="space-y-4">
          
          {/* Top Row: 2 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const match = REAL_PROJECTS.find(p => p.image === item.image) || REAL_PROJECTS[0];
                  setSelectedProject(match);
                }}
                className="group relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden cursor-pointer bg-[#14171E] border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.75] group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom-left sleek label matching screenshot */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block text-xs uppercase tracking-wider text-[#7BAE43] font-semibold mb-1">
                    {item.location}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Medium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bottomProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const match = REAL_PROJECTS.find(p => p.image === item.image) || REAL_PROJECTS[2];
                  setSelectedProject(match);
                }}
                className="group relative h-[280px] sm:h-[340px] rounded-2xl overflow-hidden cursor-pointer bg-[#14171E] border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.75] group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom-left label matching screenshot */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Quick Call Action Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#14171E] border border-white/10">
          <div className="text-center sm:text-left">
            <div className="text-white font-bold text-sm">Need a customized kitchen layout for your room?</div>
            <div className="text-xs text-zinc-400">Our chief designer visits your location on Pachawali Rd, Vijay Nagar or anywhere in Etawah with material swatches.</div>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span>Call 080762 75334</span>
          </a>
        </div>

      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#14171E] border border-white/20 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative h-64 sm:h-auto bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7BAE43] font-bold">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="mt-4 space-y-2 text-xs border-t border-white/10 pt-3">
                    <div className="flex justify-between text-zinc-400">
                      <span>Core Material:</span>
                      <span className="text-white font-medium">{selectedProject.specs.coreMaterial}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Countertop:</span>
                      <span className="text-white font-medium">{selectedProject.specs.countertop}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Hardware:</span>
                      <span className="text-white font-medium">{selectedProject.specs.hardware}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full py-3 rounded-lg bg-[#7BAE43] hover:bg-[#88BD4E] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 fill-black" />
                    <span>Call to Build in Etawah</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
