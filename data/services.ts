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
    title: "Curtain Steam Cleaning",
    shortDesc: "We clean your curtains while they're still hanging — no removal, no re-hanging, no fuss.",
    fullDesc: "This is our most popular service. We come to your home and steam clean the curtains right on the rail. The process lifts dust, pet hair, allergens and general grime that builds up over time. Because we use low-moisture steam rather than soaking the fabric, most curtains are fully dry within 2 to 4 hours.",
    icon: "air",
    fabricTypes: ["Linen", "Cotton", "Synthetic", "Double Sheers"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Curtains stay on the rail the whole time",
      "Safe for pinch pleats and drop hems",
      "Kills dust mites and bacteria",
      "Dry in 2 to 4 hours"
    ],
    priceStart: "$45 / drop"
  },
  {
    id: "ultrasonic-cleaning",
    slug: "ultrasonic-curtain-cleaning",
    title: "Ultrasonic Deep Clean",
    shortDesc: "For heavily soiled curtains or smoke-affected fabrics that need more than a standard steam treatment.",
    fullDesc: "Ultrasonic cleaning uses high-frequency sound waves in a water bath to break down grime that's worked deep into the fabric. It's the right choice for curtains that have been through a renovation, had a smoker in the home, or just haven't been cleaned in years. We handle the pickup and re-hanging.",
    icon: "waves",
    fabricTypes: ["Heavy Velvet", "Thermal Blackout", "Silk Blends", "Interlined Curtains"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Gets into the fabric at a deeper level than steam",
      "Brings colour back to dull or greyed fabric",
      "Removes built-up smoke and nicotine residue",
      "Includes pickup and re-hanging"
    ],
    priceStart: "$65 / drop"
  },
  {
    id: "mould-allergen-removal",
    slug: "mould-allergen-removal",
    title: "Mould & Allergen Treatment",
    shortDesc: "Targeted mould removal for Brisbane homes — common on curtains near sliding doors and humid rooms.",
    fullDesc: "Mould on curtains is a common problem in Brisbane, especially along the bottom hem near glass doors or in rooms that don't get much airflow. Left alone it spreads and can permanently stain the fabric. We treat the affected areas with a safe, non-toxic anti-fungal solution that kills the mould at the source and helps slow regrowth.",
    icon: "sanitizer",
    fabricTypes: ["Sheer Curtains", "Outdoor Curtains", "Linen", "Lined Curtains"],
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Non-toxic solution, safe for kids and pets",
      "Removes visible black mould spots",
      "Slows regrowth in humid conditions",
      "Safe for people with asthma and allergies"
    ],
    priceStart: "$55 / drop"
  },
  {
    id: "sheer-fabric-care",
    slug: "sheer-curtain-cleaning",
    title: "Sheer & Voile Cleaning",
    shortDesc: "Extra care for delicate sheers, voiles, and lace that can't handle a standard steam clean.",
    fullDesc: "Sheers are easy to damage if you use the wrong technique — they yellow over time from sun and pollution, and rough handling causes fraying or snags. We use lower pressure and a gentler approach specifically for these fabrics to clean out the grey haze and restore the brightness without harming the weave.",
    icon: "filter_vintage",
    fabricTypes: ["Voile", "Lace", "Organza", "Linen Sheers"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    features: [
      "No pulling, snagging or weave distortion",
      "Removes yellowing and sun haze",
      "Keeps the fabric soft and hanging well",
      "Brightens without bleaching"
    ],
    priceStart: "$40 / drop"
  },
  {
    id: "commercial-cleaning",
    slug: "commercial-curtain-cleaning",
    title: "Commercial & Rental Properties",
    shortDesc: "Curtain cleaning for hotels, rental properties, offices, and larger venues across Brisbane.",
    fullDesc: "We work with property managers, hotels, and commercial clients who need reliable cleaning with minimal disruption. We can schedule outside business hours, handle multiple rooms in a single visit, and provide documentation for fire-retardant compliance where needed.",
    icon: "apartment",
    fabricTypes: ["Acoustic Curtains", "Stage Curtains", "Hotel Blackouts"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Early morning and weekend bookings available",
      "Fire retardant treatment stays intact",
      "Volume pricing for multi-room properties",
      "Quick turnaround to minimise downtime"
    ],
    priceStart: "Custom Quote"
  },
  {
    id: "stain-deodorisation",
    slug: "stain-removal-deodorisation",
    title: "Stain Removal & Odour Treatment",
    shortDesc: "For water marks, pet accidents, wine spills, and cooking smells that won't budge on their own.",
    fullDesc: "Some stains and smells need targeted treatment rather than a general clean. We use enzyme-based solutions that break down the organic matter causing the stain or smell — rather than just covering it up. Safe on all fabric types and won't affect the colour.",
    icon: "clean_hands",
    fabricTypes: ["All Fabrics", "Silk", "Velvet", "Brocade"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Enzyme-based treatment breaks down stains",
      "Removes pet and cooking odours at the source",
      "Safe on dyed fabrics — won't cause fading",
      "Colour-fast guaranteed"
    ],
    priceStart: "$35 / area"
  }
];
