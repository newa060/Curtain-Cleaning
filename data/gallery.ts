export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "linen" | "sheer" | "velvet" | "before-after";
  beforeImage: string;
  afterImage: string;
  suburb: string;
  description: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Belgian Linen Sheer Restoration",
    category: "linen",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    suburb: "New Farm",
    description: "Steam extraction removed 4 years of trapped street dust and smog yellowing from delicate off-white sheer linen.",
  },
  {
    id: "g2",
    title: "Black Mould Removal on Double Voile",
    category: "sheer",
    beforeImage: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    suburb: "Bulimba",
    description: "Botanical anti-microbial treatment eliminated humidity black mould along the hemline without damaging hem stitching.",
  },
  {
    id: "g3",
    title: "Luxury Silk & Velvet Deep Clean",
    category: "velvet",
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    suburb: "Ascot",
    description: "Low-moisture steam revitalised heavy midnight-blue velvet drapes, restoring full luster and removing pet hair dander.",
  },
  {
    id: "g4",
    title: "Heritage Queenslander Veranda Drapes",
    category: "before-after",
    beforeImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    suburb: "Paddington",
    description: "On-site track cleaning restored sun-exposed outdoor curtains to immaculate white.",
  }
];
