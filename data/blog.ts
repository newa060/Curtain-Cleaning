export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  content?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    slug: "how-often-should-you-clean-curtains-in-brisbane",
    title: "How Often Should You Clean Curtains in Brisbane's Subtropical Climate?",
    excerpt: "Discover why Brisbane's humid summer humidity and airborne pollen mean window drapes need specialized care every 6 to 12 months.",
    category: "Fabric Care Tips",
    readTime: "5 min read",
    date: "September 12, 2026",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    author: "Damian Vance, Fabric Specialist"
  },
  {
    id: "b2",
    slug: "on-site-steam-vs-dry-cleaning-curtains",
    title: "On-Site Steam Cleaning vs Traditional Dry Cleaning: Which is Safe for Linen?",
    excerpt: "Why removing floor-to-ceiling sheer linen curtains from track runners risks permanent shrinkage and pleat damage.",
    category: "Cleaning Guides",
    readTime: "7 min read",
    date: "August 28, 2026",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    author: "Sarah Jenkins, Master Cleaner"
  },
  {
    id: "b3",
    slug: "preventing-mould-growth-on-sheer-curtains",
    title: "Preventing Black Mould Growth on Sheer Window Curtains Near Glass Doors",
    excerpt: "Simple daily airflow practices and botanical anti-fungal treatments to protect your home's drapery investment.",
    category: "Mould Prevention",
    readTime: "4 min read",
    date: "August 15, 2026",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop",
    author: "Damian Vance, Fabric Specialist"
  }
];
