export interface ResidentialWorkCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  keySpecs: string[];
  residentialApplications: string[];
  clientBenefit: string;
}

export const RESIDENTIAL_WORKS: ResidentialWorkCategory[] = [
  {
    id: 'balcony-glass-balustrades',
    title: 'Frameless Glass Balcony Balustrades',
    subtitle: 'Custom balustrades for unobstructed views, safety, and modern curb appeal',
    description:
      'South Glass and Aluminium Works manufactures and installs heavy-duty structural glass balustrades for residential balconies and terraces. Utilizing 12mm to 17.5mm laminated toughened safety glass embedded in concealed floor-mounted aluminium shoe channels or satin stainless steel spigots.',
    image: '/images/balcony_balustrades.jpg',
    keySpecs: [
      '12mm - 17.52mm Toughened Laminated Safety Glass',
      'Heavy-duty concealed aluminium architectural base channel',
      'Slimline black anodized top-capping handrails or frameless finish',
      'Wind-load certified for high-rise residential towers and private homes',
    ],
    residentialApplications: [
      'Residential Balconies & Terraces',
      'Rooftop Patios & Sky Gardens',
      'Internal Mezzanines & Staircase Glass Railings',
      'Poolside Glass Fencing & Windbreak Barriers',
    ],
    clientBenefit:
      'Saajid Suleiman (Verified Client): "I hired them to install glass on my balcony and in the bathrooms at my new place, and they did an excellent job. The work is clean, professional, and the finishing is top quality."',
  },
  {
    id: 'bathroom-shower-glass-enclosures',
    title: 'Bathroom Shower Glass & Cubicles',
    subtitle: 'Custom walk-in frameless glass shower cubicles and fluted spa screens',
    description:
      'Elevate residential bathrooms into spa-grade retreats. South Glass & Aluminium Works custom-fabricates walk-in wet room screens, hinged glass doors, corner cubicles, and fluted acoustic privacy partitions paired with premium matte black or brushed stainless hardware.',
    image: '/images/shower_cubicles.jpg',
    keySpecs: [
      '10mm - 12mm Tempered Ultra-Clear Low-Iron & Fluted Glass',
      'Corrosion-proof architectural aluminium profiles & magnetic seals',
      'Hydrophobic anti-stain nano-coating for effortless maintenance',
      'Bespoke millimeter precision custom fit for any bathroom layout',
    ],
    residentialApplications: [
      'Frameless Walk-in Rainfall Shower Screens',
      'Corner Sliding & Pivot Shower Cubicles',
      'Fluted Glass Privacy Enclosures for En-Suites',
      'Bespoke Backlit Vanity Mirrors & Glass Shelving',
    ],
    clientBenefit:
      'Zero water leakage, mold-resistant perimeter seals, and an immediate visual expansion of residential bathroom space.',
  },
  {
    id: 'aluminium-doors-windows-upvc',
    title: 'Aluminium Doors, Windows & UPVC',
    subtitle: 'Contemporary sliding patio doors, casement windows, and awning systems',
    description:
      'South Glass and Aluminium Works manufactures high-performance architectural aluminium and UPVC doors and windows. From smooth-gliding sliding glass patio doors to tilt-and-turn casement windows, built for weatherproofing and daylight.',
    image: '/images/aluminium_doors_windows.jpg',
    keySpecs: [
      'Heavy-gauge powder-coated aluminium & UPVC profile extrusions',
      'Stainless steel ball-bearing rollers supporting up to 300kg per panel',
      'Flush sunken threshold tracks for trip-free step-over',
      'Multi-point security hook deadbolts and keyed cylinders',
    ],
    residentialApplications: [
      'Living Room to Balcony Glass Sliding Doors',
      'Dining Room to Garden Patio Enclosures',
      'Modern Residential Casement & Awning Windows',
      'Internal Glass Room Dividers & Folding Partition Doors',
    ],
    clientBenefit:
      'Effortless finger-touch gliding movement with zero rattling even in strong winds on high apartment floors.',
  },
  {
    id: 'bespoke-mirrors-frames',
    title: 'Bespoke Mirrors & Custom Frames',
    subtitle: 'Pill-shaped, oval, round, and architectural framed wall mirrors',
    description:
      'As dealers in glasses, mirrors, and custom framing on Five Star Road, South Glass & Aluminium Works crafts custom-sized wall mirrors, vanity mirrors, and bespoke metal/timber framing for residential living spaces, bedrooms, and bathrooms.',
    image: '/images/mirrors_frames.jpg',
    keySpecs: [
      '5mm - 6mm High-Clarity Silver-Backed Distortion-Free Glass',
      'Black aluminium, brass, timber, and white minimal frame profiles',
      'Beveled, polished pencil edges, and rounded arch/pill cuts',
      'Optional integrated LED backlighting for bathroom vanities',
    ],
    residentialApplications: [
      'Master Bathroom Vanity Wall Mirrors',
      'Full-Length Bedroom & Dressing Room Mirrors',
      'Hallway Decorative Accent Mirror Galleries',
      'Custom Framed Art & Family Photograph Frames',
    ],
    clientBenefit:
      'Enhances natural light across residential hallways and living spaces with immaculate edge finishing.',
  },
  {
    id: 'acoustic-double-glazed-windows',
    title: 'Acoustic Soundproof Double-Glazed Windows',
    subtitle: 'Eliminating Nairobi street noise with 42dB acoustic isolation',
    description:
      'Engineered for residential homes and apartments along busy avenues like Muhoho Avenue, Five Star Road, and Mombasa Road. South Glass and Aluminium Works builds thermally broken aluminium window frames fitted with dual panes separated by an argon-gas acoustic chamber.',
    image: '/images/executive_studio.jpg',
    keySpecs: [
      'Dual 6mm + 6mm acoustic laminated glass with 12mm argon gap',
      'Multi-chamber thermal-break aluminium alloy extrusion',
      'Heavy-duty multi-point German locking mechanisms',
      'EPDM weatherstripping preventing dust, drafts, and rain ingress',
    ],
    residentialApplications: [
      'Master Bedrooms along Road Frontages',
      'Home Executive Workstations & Private Studies',
      'Floor-to-Ceiling Living Room Corner Glass Windows',
      'High-Rise Penthouse Wind-Exposed Facades',
    ],
    clientBenefit:
      'Sleep through city morning traffic in silence while cutting air-conditioning costs through superior thermal barrier insulation.',
  },
];
