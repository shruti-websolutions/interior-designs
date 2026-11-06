export interface KitchenProject {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: 'Modular Kitchen' | 'Acrylic Kitchen' | 'Kitchen Cabinet' | 'Interior & Exterior';
  specs: {
    layout: string;
    coreMaterial: string;
    finish: string;
    countertop: string;
    hardware: string;
    highlights: string[];
  };
  clientLocation: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  projectType: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  description: string;
  durability: string;
  finishType: string;
  colorHex: string;
  roughness: number;
  metalness: number;
}
