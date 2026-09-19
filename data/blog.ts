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
    title: "How Often Should You Clean Curtains in Brisbane?",
    excerpt: "Brisbane's humidity and pollen levels mean curtains collect grime faster than most people realise. Here's a simple guide to cleaning frequency based on your fabric type and which way your windows face.",
    category: "Fabric Care Tips",
    readTime: "5 min read",
    date: "September 12, 2026",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    author: "Damian V."
  },
  {
    id: "b2",
    slug: "on-site-steam-vs-dry-cleaning-curtains",
    title: "Steam Cleaning vs Dry Cleaning: Which is Better for Linen Curtains?",
    excerpt: "Taking floor-to-ceiling linen curtains off the rail and sending them to a dry cleaner is a common cause of shrinkage and pleat damage. We break down what actually happens and which method is safer.",
    category: "Cleaning Guides",
    readTime: "7 min read",
    date: "August 28, 2026",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    author: "Sarah J."
  },
  {
    id: "b3",
    slug: "preventing-mould-growth-on-sheer-curtains",
    title: "How to Stop Mould Growing on Curtains Near Glass Doors",
    excerpt: "Mould along the bottom of curtains near sliding doors is one of the most common problems we see in Brisbane homes. A few simple habits can slow it down — and here's what to do if it's already there.",
    category: "Mould Prevention",
    readTime: "4 min read",
    date: "August 15, 2026",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop",
    author: "Damian V."
  }
];
