export interface SuiteAmenity {
  name: string;
  category: 'connectivity' | 'comfort' | 'wellness' | 'convenience';
}

export interface ResidenceSuite {
  id: string;
  name: string;
  tagline: string;
  category: 'penthouse' | 'two-bedroom' | 'studio' | 'presidential';
  categoryLabel: string;
  floor: string;
  sqm: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  pricePlaceholder: string;
  rating: number;
  reviewsCount: number;
  primaryImage: string;
  galleryImages: string[];
  glassHighlights: string[];
  features: string[];
  description: string;
  idealFor: string;
}

export const RESIDENCE_SUITES: ResidenceSuite[] = [
  {
    id: 'penthouse-skyline',
    name: 'The Skyline Obsidian Penthouse',
    tagline: 'Floor-to-ceiling panoramic glass residence with wrap-around sunset balcony',
    category: 'penthouse',
    categoryLabel: 'Penthouse Collection',
    floor: '12th Floor Top Penthouse',
    sqm: 185,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2.5,
    pricePlaceholder: 'Bespoke Quote Upon Request',
    rating: 5.0,
    reviewsCount: 3,
    primaryImage: '/images/penthouse_suite.jpg',
    galleryImages: [
      '/images/penthouse_suite.jpg',
      '/images/horizon_terrace.jpg',
      '/images/executive_studio.jpg',
      '/images/shower_cubicles.jpg',
      '/images/presidential_haven.jpg',
    ],
    glassHighlights: [
      '12mm acoustic laminated double-glazed curtain wall with 42dB noise attenuation',
      'Frameless architectural balcony balustrade with 180° uninterrupted sunset views',
      'Fluted monolithic glass spa shower enclosures with matte black aluminium trims',
    ],
    features: [
      'Starlink High-Speed Internet (250 Mbps)',
      '24/7 Full Inverter & Generator Power Autonomy',
      'Private Keyless Smart Lock Entry',
      'Designer Chef Kitchen with Miele Appliances',
      'Direct Heated Rooftop Infinity Pool Access',
      'Dedicated Secure Basement Parking',
      'Daily Executive Housekeeping Available',
    ],
    description:
      'Engineered by South Glass & Aluminium Works, this marquee penthouse showcases massive structural glass apertures overlooking the vibrant Nairobi skyline and distant Ngong Hills. Furnished with Italian leather upholstery, bespoke walnut woodwork, and an open entertainer’s terrace.',
    idealFor: 'International business travelers, diplomats, and VIP weekend staycations.',
  },
  {
    id: 'horizon-terrace-two-bed',
    name: 'The Horizon Terrace Suite',
    tagline: 'Expansive two-bedroom sanctuary featuring sunset deck and fluted glass spa ensuite',
    category: 'two-bedroom',
    categoryLabel: '2-Bedroom Residence',
    floor: '8th Floor West Wing',
    sqm: 140,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    pricePlaceholder: 'Pricing Upon Inquiry',
    rating: 5.0,
    reviewsCount: 3,
    primaryImage: '/images/horizon_terrace.jpg',
    galleryImages: [
      '/images/horizon_terrace.jpg',
      '/images/executive_studio.jpg',
      '/images/shower_cubicles.jpg',
      '/images/penthouse_suite.jpg',
    ],
    glassHighlights: [
      'Seamless cantilevered glass balcony opening from both living lounge and master bed',
      'Reflective UV-filtering architectural glazing preserving cool daytime temperatures',
      'Custom aluminium sliding pocket doors with magnetic acoustic seals',
    ],
    features: [
      'Ultra-Fast Dedicated Fibre Wi-Fi',
      'Dual En-Suite Bathrooms with Rain Showers',
      'Washer & Dryer Laundry Suite',
      'Smart 65-inch OLED Screen with Curated Streaming',
      '24/7 Monitored Biometric Building Access',
      'In-Suite Nespresso Coffee Bar',
    ],
    description:
      'A refined residence balancing open-concept architectural lines with intimate privacy. The spacious balcony features timber decking and frameless glass railings that offer golden hour vistas without visual barriers.',
    idealFor: 'Traveling couples, remote executive retreats, or visiting families.',
  },
  {
    id: 'muhoho-executive-studio',
    name: 'The Muhoho Executive Glass Studio',
    tagline: 'Curated architectural studio with floor-to-ceiling corner glazing & designer workstation',
    category: 'studio',
    categoryLabel: 'Executive Studio',
    floor: '6th Floor Corner Vista',
    sqm: 78,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePlaceholder: 'From [Rates on Request]',
    rating: 5.0,
    reviewsCount: 3,
    primaryImage: '/images/executive_studio.jpg',
    galleryImages: [
      '/images/executive_studio.jpg',
      '/images/shower_cubicles.jpg',
      '/images/penthouse_suite.jpg',
      '/images/presidential_haven.jpg',
    ],
    glassHighlights: [
      'Full corner glass facade capturing dawn and twilight horizon transitions',
      'Frameless fluted shower partition with matte black precision fixtures',
      'Acoustic double-glazed windows keeping urban noise at a whisper',
    ],
    features: [
      'Dedicated Ergonomic Work Desk & Fast Fibre (150 Mbps)',
      'Plush King Mattress with 600-Thread-Count Egyptian Cottons',
      'Compact Designer Induction Kitchenette',
      'Keyless Smart Pin Door Lock',
      'Uninterrupted 24/7 Solar Backup Power',
      'Complimentary Rooftop Pool & Gym Access',
    ],
    description:
      'Created specifically for the traveling professional seeking elegance, tranquility, and seamless logistics. Positioned along Muhoho Avenue close to Wilson Airport and the Expressway.',
    idealFor: 'Corporate executives, solo remote workers, and transit layover guests.',
  },
  {
    id: 'presidential-glass-haven',
    name: 'The Presidential Glass Haven',
    tagline: 'Three-bedroom sky estate with private glass sky-lounge and butler pantry',
    category: 'presidential',
    categoryLabel: 'Presidential Sky Estate',
    floor: '11th Floor East Panorama',
    sqm: 230,
    guests: 6,
    bedrooms: 3,
    bathrooms: 3.5,
    pricePlaceholder: 'Exclusive VIP Inquiries Only',
    rating: 5.0,
    reviewsCount: 3,
    primaryImage: '/images/presidential_haven.jpg',
    galleryImages: [
      '/images/presidential_haven.jpg',
      '/images/penthouse_suite.jpg',
      '/images/horizon_terrace.jpg',
      '/images/executive_studio.jpg',
      '/images/shower_cubicles.jpg',
    ],
    glassHighlights: [
      'Panoramic 270° multi-aspect double-glazed curtain walling system',
      'Integrated motorized solar shades recessed into architectural aluminium pelmets',
      'Freestanding oval soaking tub framed by tinted one-way architectural glass',
    ],
    features: [
      'Private Elevator Keycard Access',
      'Dedicated Personal Guest Host / Concierge Contact',
      'Full-size Formal Dining Room for 8 Guests',
      'Dual Fiber Lines + Starlink Failover Redundancy',
      'Direct Rooftop Infinity Pool VIP Lounge Access',
      '2 Dedicated Covered Reserved Parking Bays',
    ],
    description:
      'The pinnacle of South Glass craftsmanship in residential hospitality. Expansive entertaining living zones, curated contemporary African art, and sweeping vistas across Five Star Road to the city lights.',
    idealFor: 'Diplomatic delegations, multi-generational luxury holidays, and executive summits.',
  },
];
