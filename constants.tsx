
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The 48-Hour Duffel',
    category: 'Travel',
    price: 850,
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop',
    description: 'A masterpiece of architectural leatherwork, designed for the modern nomad. Hand-cut from full-grain Tuscan hide.',
    features: ['Solid brass hardware', 'Waterproof lining', 'Reinforced base']
  },
  {
    id: '2',
    name: 'The Artisan Portfolio',
    category: 'Business',
    price: 340,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1200&auto=format&fit=crop',
    description: 'Elevate your daily carry with a portfolio that ages with wisdom. Hand-stitched with waxed linen thread.',
    features: ['Apple Pencil sleeve', 'Business card slots', 'Hidden pocket']
  },
  {
    id: '3',
    name: 'The Heritage Weekender',
    category: 'Travel',
    price: 920,
    image: 'https://images.unsplash.com/photo-1554342872-034a06541bad?q=80&w=1200&auto=format&fit=crop',
    description: 'Our most spacious companion, built to endure a lifetime of departure gates and gravel paths.',
    features: ['Double-stitched handles', 'Detachable strap', 'Dust bag included']
  },
  {
    id: '4',
    name: 'The Slimline Bifold',
    category: 'Accessories',
    price: 120,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop',
    description: 'Minimalism meets durability. A silhouette so slim you\'ll forget it\'s there, until you need it.',
    features: ['6 card slots', 'RFID blocking', 'Vachetta leather']
  }
];

export const NAV_LINKS = [
  { name: 'Collections', href: '#collections' },
  { name: 'The Craft', href: '#craft' },
  { name: 'Materials', href: '#materials' },
  { name: 'Bespoke', href: '#bespoke' }
];
