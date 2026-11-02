export interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  rating: number;
  date: string;
  timeAgo: string;
  service: string;
  quote: string;
  verified: boolean;
  initial?: string;
  avatarBg?: string;
  avatar?: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "nine-handajani",
    name: "Nine Handajani",
    suburb: "Brisbane City",
    rating: 5,
    date: "11 months ago",
    timeAgo: "11 months ago",
    service: "Curtain Cleaning & Fabric Care",
    quote: "Excellent work. These guys are very professional and quick services on Brisbane for carpet cleaning, curtain cleaning and fabric repairs. Restored our heavy drapes to pristine condition without having to take them down.",
    verified: true,
    initial: "N",
    avatarBg: "bg-[#5c6bc0]",
  },
  {
    id: "1",
    name: "Eleanor & Mark Vance",
    suburb: "New Farm, Brisbane",
    rating: 5,
    date: "August 2026",
    timeAgo: "2 months ago",
    service: "On-Site Steam Cleaning (Linen Sheers)",
    quote: "Our floor-to-ceiling Belgian linen sheers had gathered a lot of Brisbane summer dust. The team cleaned them directly on the tracks in under 3 hours! Absolutely no shrinkage and the room smells incredible.",
    verified: true,
    initial: "E",
    avatarBg: "bg-[#0b8043]",
  },
  {
    id: "2",
    name: "Julian K.",
    suburb: "Ascot, Brisbane",
    rating: 5,
    date: "July 2026",
    timeAgo: "3 months ago",
    service: "Mould & Allergen Removal (Silk Drapes)",
    quote: "We were worried our silk drapes were ruined by humidity mildew. Curtain Cleaning Brisbane restored them completely without dismantling a single hook. Highly professional and punctual.",
    verified: true,
    initial: "J",
    avatarBg: "bg-[#f4511e]",
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    suburb: "Paddington, Brisbane",
    rating: 5,
    date: "September 2026",
    timeAgo: "1 month ago",
    service: "Ultrasonic Deep Clean (Thermal Blackout)",
    quote: "Amazing service! The instant estimate calculator gave me an accurate quote, and the technician was courteous, tidy, and extremely skilled.",
    verified: true,
    initial: "S",
    avatarBg: "bg-[#8e24aa]",
  },
  {
    id: "4",
    name: "Dr. Hamish Thorne",
    suburb: "Hamilton, Brisbane",
    rating: 5,
    date: "August 2026",
    timeAgo: "2 months ago",
    service: "Commercial Sheer Care",
    quote: "We used them for our medical boutique suites in Hamilton. Zero disruption to our operating hours, and the air quality improvement was noticeable immediately.",
    verified: true,
    initial: "H",
    avatarBg: "bg-[#039be5]",
  },
  {
    id: "5",
    name: "Chloe & Liam Zhang",
    suburb: "Bulimba, Brisbane",
    rating: 5,
    date: "June 2026",
    timeAgo: "4 months ago",
    service: "Spot Stain & Odour Deodorisation",
    quote: "Lived near the river and had minor water spot marks on our velvet curtains. The technician spot-treated them with precision. Fantastic outcome!",
    verified: true,
    initial: "C",
    avatarBg: "bg-[#00897b]",
  }
];
