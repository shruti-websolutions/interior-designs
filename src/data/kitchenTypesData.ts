export interface KitchenTypeItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  fallbackImage?: string;
  tag?: string;
  workTriangle: string;
  storageCapacity: string;
  bestFor: string;
  keyHighlights: string[];
}

export const KITCHEN_TYPES: KitchenTypeItem[] = [
  {
    id: 'u-shaped-breakfast-bar',
    title: 'U-Shaped Kitchen with Breakfast Bar',
    shortTitle: 'U-Shaped Kitchen',
    description: 'Designed for ultimate efficiency and sophistication, this U-shaped modular kitchen layout wraps around you with abundant counter space and seamless cabinetry.',
    image: '/assets/projects/u-shaped-kitchen-bar.webp',
    fallbackImage: '/assets/aistudio/u-shaped-kitchen.webp',
    tag: 'Abundant Counter Space',
    workTriangle: '3-Point Continuous Flow',
    storageCapacity: 'Maximum (3 Continuous Walls)',
    bestFor: 'Large families & open-concept dining',
    keyHighlights: [
      'Wraparound triple-counter workstation',
      'Integrated raised fluted wood breakfast bar',
      'Zero-step reach between hob, sink & pantry',
      'Dual under-counter tandem pull-out banks'
    ]
  },
  {
    id: 'l-shaped-prep-nook',
    title: 'L-Shaped Modular Kitchen with Dedicated Prep & Work Nook',
    shortTitle: 'L-Shaped Kitchen',
    description: 'Designed around an optimized golden work triangle, this L-shaped modular layout maximizes every inch of corner space while keeping cooktops, prep zones, and appliances within effortless reach.',
    image: '/assets/projects/l-shaped-kitchen-nook.jpg',
    tag: 'Golden Work Triangle',
    workTriangle: 'Optimized Corner Ergonomics',
    storageCapacity: 'High Utility Corner Storage',
    bestFor: 'Medium to large homes & multi-tasking prep',
    keyHighlights: [
      'Natural warm oak wood base cabinets',
      'Pristine seafoam/mint quartz countertop',
      'Dedicated study / laptop prep desk niche',
      'Concealed Magic Corner swivel carousel'
    ]
  },
  {
    id: 'open-plan-island-industrial',
    title: 'Open-Plan Island Kitchen with Industrial Charm',
    shortTitle: 'Island Kitchen',
    description: 'Blend timeless rustic wood textures with sleek industrial details in this spacious island kitchen layout.',
    image: '/assets/projects/island-kitchen-industrial.jpg',
    tag: 'Rustic & Industrial',
    workTriangle: 'Central Focal Island Workstation',
    storageCapacity: 'Dual-Sided Island Storage',
    bestFor: 'Entertaining guests & modern open spaces',
    keyHighlights: [
      'Substantial solid wood grain center island',
      'Matte black glass-front upper illuminated cabinets',
      'Industrial matte black drop pendant lighting',
      'Quartz waterfall prep and social dining zone'
    ]
  },
  {
    id: 'g-shaped-peninsula',
    title: 'G-Shaped (Peninsula) Modular Kitchen',
    shortTitle: 'Peninsula Kitchen',
    description: 'Experience ultimate workflow efficiency with a G-shaped modular kitchen layout featuring an attached peninsula counter.',
    image: '/assets/projects/g-shaped-peninsula-kitchen.jpg',
    tag: 'Connected Peninsula Counter',
    workTriangle: '4th Wall Peninsula Workstation',
    storageCapacity: 'Extra Heavy Duty Cabinetry',
    bestFor: 'Dedicated chefs & spacious modern kitchens',
    keyHighlights: [
      'Connected 4th-wall breakfast & serving bar',
      'Jet black scratch-resistant quartz countertop',
      'Dual-tone architectural white & wood cabinetry',
      'Dedicated appliance garage & tall pantry tower'
    ]
  }
];
