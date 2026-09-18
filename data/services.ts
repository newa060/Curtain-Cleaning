export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  fabricTypes: string[];
  image: string;
  features: string[];
  priceStart: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "steam-cleaning",
    slug: "on-site-steam-cleaning",
    title: "On-Site Curtain Steam Cleaning",
    shortDesc: "Gentle, low-moisture steam extraction conducted directly on your curtain tracks without rail dismantling.",
    fullDesc: "Our flagship Brisbane service cleans delicate drapery right where it hangs. Using temperature-regulated micro-steam and high-power suction, we lift years of embedded dust, pet dander, and airborne toxins while guaranteeing zero shrinkage.",
    icon: "air",
    fabricTypes: ["Linen", "Cotton", "Synthetic", "Double Sheers"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    features: [
      "100% In-Situ Cleaning (no track removal)",
      "Safe for delicate pleats and drop hems",
      "Sanitises against dust mites and bacteria",
      "Drying time of just 2 to 4 hours"
    ],
    priceStart: "$45 / drop"
  },
  {
    id: "ultrasonic-cleaning",
    slug: "ultrasonic-curtain-cleaning",
    title: "Ultrasonic Deep Sanitisation",
    shortDesc: "Deep acoustic wave treatment designed for heavily soiled or smoke-exposed luxury window coverings.",
    fullDesc: "Utilising gentle high-frequency sound waves in an eco-friendly aqueous bath, ultrasonic cleaning penetrates microscopic fabric weaves that surface steam cannot reach. Perfect for restoration after home renovations or tenant turnovers.",
    icon: "waves",
    fabricTypes: ["Heavy Velvet", "Thermal Blackout", "Silk Blends", "Interlined Drapes"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Microscopic contaminant release",
      "Restores vibrant original fabric tones",
      "Removes deep nicotine and smoke residue",
      "Includes complimentary pick-up & re-hanging"
    ],
    priceStart: "$65 / drop"
  },
  {
    id: "mould-allergen-removal",
    slug: "mould-allergen-removal",
    title: "Subtropical Mould & Allergen Treatment",
    shortDesc: "Targeted anti-microbial treatments tailored specifically for Brisbane's humid subtropical climate.",
    fullDesc: "Brisbane summers cause moisture build-up along glass doors and sheer drapes, harboring dangerous black mould spores. Our botanical anti-fungal formula neutralises mould spores at the root and prevents re-growth.",
    icon: "sanitizer",
    fabricTypes: ["Sheer Curtains", "Patio Drapes", "Linen", "Lined Curtains"],
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Botanical, non-toxic anti-fungal solution",
      "Eradicates black mould spores safely",
      "Prevents humidity-triggered spore regrowth",
      "Certified safe for asthma & allergy sufferers"
    ],
    priceStart: "$55 / drop"
  },
  {
    id: "sheer-fabric-care",
    slug: "sheer-curtain-cleaning",
    title: "Delicate Sheer & Voile Care",
    shortDesc: "Ultra-gentle low-moisture revitalisation for delicate sheer, lace, and organza drapery.",
    fullDesc: "Sheer fabrics require specialist care to avoid fraying or tearing. Our low-pressure steam wands gently lift yellowing and grey urban smog residue, restoring bright translucency to your living room windows.",
    icon: "filter_vintage",
    fabricTypes: ["Voile", "Lace", "Organza", "Linen Sheers"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Zero pull or weave distortion",
      "Lifts sun-yellowing and urban haze",
      "Preserves fabric elasticity and drape fold",
      "Instant brightening formula"
    ],
    priceStart: "$40 / drop"
  },
  {
    id: "commercial-cleaning",
    slug: "commercial-curtain-cleaning",
    title: "Commercial & Boutique Property Care",
    shortDesc: "Scalable window covering maintenance for hotels, heritage venues, and executive suites across Brisbane.",
    fullDesc: "Flexible off-peak or weekend cleaning for commercial venues. We provide certified fire-retardant safe treatments and full compliance documentation for hospitality and medical clients.",
    icon: "apartment",
    fabricTypes: ["Acoustic Drapes", "Stage Curtains", "Hotel Blackouts"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    features: [
      "After-hours & weekend scheduling available",
      "Fire retardant compliance intact",
      "Volume discount for multi-room properties",
      "Fast turnarounds to minimise guest downtime"
    ],
    priceStart: "Custom Quote"
  },
  {
    id: "stain-deodorisation",
    slug: "stain-removal-deodorisation",
    title: "Spot Stain & Odour Deodorisation",
    shortDesc: "Precision treatment for water marks, pet accidents, wine spills, and cooking grease odours.",
    fullDesc: "Targeted spot extractions with eco-enzymatic neutralisers destroy organic stain molecules and trapped odours without discolouring or bleaching your valuable curtains.",
    icon: "clean_hands",
    fabricTypes: ["All Fabrics", "Silk", "Velvet", "Brocade"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Enzyme-based natural stain breakdown",
      "Neutralises pet and cooking odours",
      "pH balanced to protect fabric dye",
      "Color-fast guaranteed"
    ],
    priceStart: "$35 / area"
  }
];
