// Import gallery images
import g1Before from "@/assets/gallery/Before_Belgian-Linen-Sheer-Restoration.png";
import g1After from "@/assets/gallery/After_Belgian-Linen-Sheer-Restoration.png";
import g2Before from "@/assets/gallery/Before_Black-Mould-Removal-on-Double-Voile.png";
import g2After from "@/assets/gallery/After_Black-Mould-Removal-on-Double-Voile.png";
import g3Before from "@/assets/gallery/Before_Luxury-Silk&Velvet-Deep-Clean.png";
import g3After from "@/assets/gallery/After_Luxury-Silk&Velvet-Deep-Clean.png";
import g4Before from "@/assets/gallery/Before_Curtain-Steam-Cleaning.png";
import g4After from "@/assets/gallery/After_Curtain-Steam-Cleaning.png";

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
    beforeImage: g1Before.src,
    afterImage: g1After.src,
    suburb: "New Farm",
    description: "Steam extraction removed 4 years of trapped street dust and smog yellowing from delicate off-white sheer linen.",
  },
  {
    id: "g2",
    title: "Black Mould Removal on Double Voile",
    category: "sheer",
    beforeImage: g2Before.src,
    afterImage: g2After.src,
    suburb: "Bulimba",
    description: "Botanical anti-microbial treatment eliminated humidity black mould along the hemline without damaging hem stitching.",
  },
  {
    id: "g3",
    title: "Luxury Silk & Velvet Deep Clean",
    category: "velvet",
    beforeImage: g3Before.src,
    afterImage: g3After.src,
    suburb: "Ascot",
    description: "Low-moisture steam revitalised heavy midnight-blue velvet drapes, restoring full luster and removing pet hair dander.",
  },
  {
    id: "g4",
    title: "Curtain Steam Cleaning",
    category: "before-after",
    beforeImage: g4Before.src,
    afterImage: g4After.src,
    suburb: "Paddington",
    description: "Professional steam cleaning refreshed everyday curtains, removing built-up dust, dirt and everyday odours.",
  }
];