import { KitchenProject, ReviewItem } from '../types/index.ts';

export const BUSINESS_INFO = {
  name: 'Dorio Modular Kitchen & Interior',
  shortName: 'Dorio Kitchens',
  tagline: 'Custom Modular Kitchens & Luxury Interiors in Etawah',
  phone: '084602 66584',
  phoneRaw: '+918460266584',
  secondaryPhone: '080762 75334',
  secondaryPhoneRaw: '+918076275334',
  displayPhone: '084602 66584',
  whatsappUrl: 'https://wa.me/918460266584?text=Hi%20Dorio%20Kitchens,%20I%20am%20interested%20in%20a%20modular%20kitchen%20consultation%20and%20free%203D%20design%20in%20Etawah.',
  address: '1 Dorio, Dorio Modular Kitchen Interior, Near JP Garden, Pachawali Road, Yashoda Nagar, Etawah-206001, Uttar Pradesh',
  city: 'Etawah',
  state: 'Uttar Pradesh',
  pincode: '206001',
  landmark: 'Near JP Garden, Pachawali Road, Yashoda Nagar',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Dorio+Modular+Kitchen+Interior+Pachawali+Road+Yashoda+Nagar+Etawah+Uttar+Pradesh+206001',
  establishedYear: '2011',
  experienceYears: '15+',
  rating: 5.0,
  reviewCount: 36,
  gstin: '09**********1ZT',
  businessCategories: ['Interior Designers', 'Modular Kitchen Dealers'],
  workingHours: 'Monday to Sunday: 9:30 AM – 7:45 PM',
  statusText: 'Open until 7:45 pm',
  facebookUrl: 'https://www.facebook.com/doriomodularkitchen',
};

export const QUICK_INFO_DATA = {
  yearOfEstablishment: '2011',
  usage: [
    { title: 'Kitchen & Pantry', desc: 'Bespoke modular layouts, appliance towers & tall units' },
    { title: 'Living Room', desc: 'TV consoles, bespoke panelling & partition louvers' },
    { title: 'Bedroom & Wardrobes', desc: 'Floor-to-ceiling sliding & walk-in wardrobes' },
    { title: 'Outdoor Furniture', desc: 'Weather-resistant all-weather exterior furniture' },
    { title: 'Commercial & Office', desc: 'Executive workstations & conference tables' },
    { title: 'Hospital & Healthcare', desc: 'Hygienic anti-microbial cabinetry & counters' },
  ],
  propertiesServed: [
    { label: 'Residential Villas & Kothis', count: '450+ Homes' },
    { label: 'Apartments & Flats', count: '300+ Kitchens' },
    { label: 'Hospital & Clinics', count: '18+ Healthcare facilities' },
    { label: 'Industrial & Factories', count: '25+ Commercial setups' },
  ],
  materials: [
    { name: 'BWP Marine 710 Plywood', badge: '100% Boiling Water Proof', detail: 'Calibrated core with zero hollow voids, boiling waterproof for high moisture Indian cooking' },
    { name: 'Acrylic Gloss Sheets', badge: 'Anti-Scratch & UV Stable', detail: 'High gloss mirror finish with German Senosan acrylic layer for pristine reflections' },
    { name: 'Quartz & Granite Tops', badge: 'Stain & Heat Proof', detail: 'Premium sparkling quartz slabs and jet black polished granite for heavy tawa cooking' },
    { name: 'Stainless Steel & Hardware', badge: 'SS 304 Rust-Free', detail: 'Grade 304 soft-close hinges, tandem drawers and wire/sheet pullouts' },
  ],
  services: [
    'Complete Modular Kitchen Manufacturing',
    '3D Kitchen Design & Layout Planning',
    'On-Site Precision Laser Measurement',
    'Acrylic & High-Gloss PU Kitchens',
    'Full Home Interior & Exterior Decor',
    'Service Guarantee & Warranty Backing',
    'GST Invoicing & Transparent Estimates',
    'Visiting Charges - Free in Etawah Area'
  ]
};

// Projects using the user's provided uploaded reference photos!
export const REAL_PROJECTS: KitchenProject[] = [
  {
    id: 'project-natural-wood-black-island',
    title: 'Contemporary Natural Wood & Matte Black Island Kitchen',
    subtitle: 'Integrated breakfast island with dual pendant lighting and quartz waterfall countertop',
    image: '/assets/aistudio/l-shaped-modular-kitchen-natural-wood-and-matte-black-finish-quartz-countertop-integrated-island-2240397268-wlgyzmbb_c4255844.jpeg',
    category: 'Modular Kitchen',
    specs: {
      layout: 'L-Shaped with Central Dining Island',
      coreMaterial: 'IS:710 Marine Grade BWP Plywood',
      finish: 'Natural Honey Oak Wood Grain with Matte Black Overhead Flutes',
      countertop: 'Pure White Engineered Quartz with Beveled Edge',
      hardware: 'Concealed Soft-Close Tandem Drawers & Industrial Hood Chute',
      highlights: [
        'Integrated 3-seater breakfast island',
        'Built-in dual oven and microwave tower',
        'Twin industrial bell pendant lights',
        'Full extension heavy-duty cookware drawers'
      ]
    },
    clientLocation: 'Civil Lines, Etawah',
    description: 'A masterpiece created for a modern bungalow in Etawah. Combines warm natural oak grain texture on base modules with bold matte black upper cabinets and pristine quartz surfaces. Includes an expansive island counter doubling as a breakfast station.'
  },
  {
    id: 'project-bwp-tall-pantry-tower',
    title: 'Modular Tall Pantry & Appliance Storage System',
    subtitle: 'High-utility kitchen system with integrated microwave niche, wicker pullout & moroccan backsplash',
    image: '/assets/aistudio/modular-kitchen-system-bwp-plywood-core-wood-grain-laminate-finish-quartz-countertop-2240397270-kvcg718v_e05286fb.jpeg',
    category: 'Kitchen Cabinet',
    specs: {
      layout: 'Single Wall High-Efficiency Workstation',
      coreMaterial: '100% BWP Marine Grade Core',
      finish: 'Vertical Textured Wood Grain & Metallic Champagne Grey',
      countertop: 'Solid White Quartz with Built-in Cooktop',
      hardware: 'Blum soft-close pull-down lift systems & SS handles',
      highlights: [
        'Floor-to-ceiling tall pantry appliance tower',
        'Ventilated vegetable wicker basket pull-out',
        'Built-in microwave & mixer grinder dock',
        'Overhead angled baffle chimney exhaust'
      ]
    },
    clientLocation: 'Vijay Nagar, Pachawali Rd, Etawah',
    description: 'Designed for space-conscious yet storage-demanding culinary spaces. Features a specialized vertical tall unit organizing oven, small appliances, and hand-woven vegetable baskets, paired with Moroccan tile backsplash accents.'
  },
  {
    id: 'project-handle-less-granite-lshape',
    title: 'Handle-less Gola Profile L-Shaped Kitchen with Granite',
    subtitle: 'Sleek champagne taupe shutters, jet black granite countertop & undermount double bowl sink',
    image: '/assets/aistudio/dorio-l-shaped-modular-kitchen-granite-countertop-handle-less-laminate-finish-2240397269-qk4nhdwb_dc366d80.jpeg',
    category: 'Acrylic Kitchen',
    specs: {
      layout: 'Ergonomic L-Shaped Corner Layout',
      coreMaterial: 'Heavy Duty Moisture Resistant Substrate',
      finish: 'Matte Champagne Cashmere with Handle-less Aluminum Gola',
      countertop: 'Jet Black Indian Granite with Bullnose Polish',
      hardware: 'Concealed J-Pull & Touch Release Mechanism',
      highlights: [
        'Double-bowl undermount stainless steel sink with swivel gooseneck faucet',
        'Counter-sunk 2-burner brass flame gas hob',
        'Cyan blue ambient plinth/skirting LED illumination',
        'Corner magic carousel for zero dead space'
      ]
    },
    clientLocation: 'Friends Colony, Etawah',
    description: 'A minimalist dream kitchen prioritizing easy maintenance. The seamless handle-less shutters prevent dirt accumulation, while the heavy-duty jet black granite easily withstands traditional Indian deep frying, rotis, and turmeric stains.'
  }
];

export const PRODUCTS_LIST = [
  {
    id: 'modular-kitchen',
    title: 'Custom Modular Kitchens',
    tag: 'Flagship Speciality',
    description: 'Tailor-made ergonomic kitchens engineered specifically for Indian homes. Available in L-Shaped, U-Shaped, Parallel, and Island layouts with heat- and moisture-resistant cores.',
    features: ['Ergonomic work triangle (Sink, Hob, Fridge)', 'BWP 710 Marine Grade Plywood core', 'Zero hollow cavity precision machine edge banding', 'Soft-close tandem drawers rated for 40kg load'],
    image: '/assets/aistudio/l-shaped-modular-kitchen-natural-wood-and-matte-black-finish-quartz-countertop-integrated-island-2240397268-wlgyzmbb_c4255844.jpeg',
    popularFor: 'New Home Construction & Full Renovations'
  },
  {
    id: 'acrylic-modular-kitchen',
    title: 'Acrylic Modular Kitchens',
    tag: 'Ultra High Gloss',
    description: 'High-end acrylic shutters delivering mirror-like reflective elegance. Non-toxic, scratch-resistant, and 100% UV stable so the color stays radiant for decades.',
    features: ['High-gloss glass-like reflection', 'Seamless laser edge-banding with zero glue line', 'Resistant to yellowing, oil vapours & heat', 'Available in 40+ rich solid and metallic tones'],
    image: '/assets/aistudio/dorio-l-shaped-modular-kitchen-granite-countertop-handle-less-laminate-finish-2240397269-qk4nhdwb_dc366d80.jpeg',
    popularFor: 'Luxury Flats, Kothis & Modern Contemporary Homes'
  },
  {
    id: 'kitchen-cabinet',
    title: 'Kitchen Cabinets & Storage Systems',
    tag: 'Intelligent Space Utility',
    description: 'Eliminate kitchen clutter with specialized tall pantry units, rolling wicker baskets for onions/potatoes, corner carousels, and concealed cutlery dividers.',
    features: ['Floor-to-ceiling appliance towers', 'Natural wicker pull-out baskets with airflow', 'Under-sink water-resistant PVC carcasses', 'Hydraulic bi-fold overhead lift systems'],
    image: '/assets/aistudio/modular-kitchen-system-bwp-plywood-core-wood-grain-laminate-finish-quartz-countertop-2240397270-kvcg718v_e05286fb.jpeg',
    popularFor: 'Maximizing Small Kitchen Storage & Organization'
  },
  {
    id: 'interior-exterior',
    title: 'Interior & Exterior Decorators',
    tag: 'Turnkey Design & Execution',
    description: 'From bespoke living room TV consoles, false ceilings, and bedroom wardrobe suites to weather-resistant outdoor patio furniture and commercial interiors.',
    features: ['Complete residential interior turnkey execution', 'Floor-to-ceiling sliding wardrobe systems', 'Custom exterior balcony & outdoor furniture', 'Hospitals, industrial offices & clinic spaces'],
    image: '/assets/aistudio/Screenshot_Capture_-_2026-11-03_-_17-43-47_bfd025d9.png',
    popularFor: 'Full Home Transformation & Commercial Workspaces'
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rajeev Sharma',
    location: 'Vijay Nagar, Etawah',
    rating: 5,
    date: '3 weeks ago',
    projectType: 'L-Shaped Acrylic Modular Kitchen',
    review: 'Outstanding craftsmanship by Dorio Modular Kitchen team! From 3D planning to the final installation on Pachawali Road, everything was timely. The acrylic finish and quartz countertop look five-star.'
  },
  {
    id: 'rev-2',
    author: 'Anjali Dixit',
    location: 'Friends Colony, Etawah',
    rating: 5,
    date: '1 month ago',
    projectType: 'Full Kitchen Cabinets & Tall Pantry',
    review: 'Best interior and modular kitchen decorator in Etawah. They used genuine BWP Marine plywood and German soft-close fittings. No hassles, honest pricing, and true 5-star service.'
  },
  {
    id: 'rev-3',
    author: 'Mohd. Imran',
    location: 'Civil Lines, Etawah',
    rating: 5,
    date: '2 months ago',
    projectType: 'Island Kitchen & Living Room Interior',
    review: 'Dorio designed our island modular kitchen exactly like international catalogs. The breakfast counter and storage are so well thought out. Highly recommend calling them!'
  },
  {
    id: 'rev-4',
    author: 'Sunil Kumar Yadav',
    location: 'Saifai Road, Etawah',
    rating: 5,
    date: '3 months ago',
    projectType: 'Turnkey Kitchen & Bedroom Wardrobes',
    review: 'Been in business since 2011 and it shows in their experience. Visiting and site measurement was free and quick. Zero hidden costs, delivered ahead of schedule.'
  }
];

export const FAQS = [
  {
    q: 'Why choose Dorio Modular Kitchen over local carpenters?',
    a: 'Dorio provides factory-machine edge banding with zero glue lines, 100% calibrated BWP Marine 710 Plywood, precise 3D CAD modeling before manufacturing, and factory-tested soft close hardware with warranty.'
  },
  {
    q: 'What is the visiting charge for site measurement in Etawah?',
    a: 'Site visits and initial consultations within Etawah (Pachawali Rd, Vijay Nagar, Friends Colony, Civil Lines, etc.) are completely free! Call 080762 75334 to schedule.'
  },
  {
    q: 'How long does it take from 3D design approval to installation?',
    a: 'Typically 12 to 18 business days. Factory precision manufacturing takes 8-10 days, followed by 2-3 days of clean, on-site assembly by our trained technicians.'
  },
  {
    q: 'Do you offer Acrylic and Quartz combinations?',
    a: 'Yes! Our most popular luxury combination is UV-resistant German high-gloss acrylic shutters paired with 20mm engineered quartz or mirror-polished jet black Indian granite countertops.'
  }
];
