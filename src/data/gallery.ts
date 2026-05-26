export type GalleryItem = {
  id: string;
  title: string;
  subtitle: string;
  /** Placeholder gradient background (until real photos are added) */
  gradient: string;
  /** Optional remote image (no download needed) */
  imageUrl?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "terrace",
    title: "Sunset Terrace",
    subtitle: "Golden hour, sea breeze, candlelit tables.",
    gradient:
      "linear-gradient(145deg, #264E7A 0%, #1a3555 45%, #FFF1D9 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "mezze",
    title: "Mezze Ritual",
    subtitle: "Shared plates, olive oil, and warm bread.",
    gradient:
      "linear-gradient(145deg, #FFF1D9 0%, #942121 55%, #264E7A 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "oyster-bar",
    title: "Coastal Bar",
    subtitle: "Spritzes, martinis, and cellar selections.",
    gradient:
      "linear-gradient(155deg, #1a3555 0%, #264E7A 55%, #942121 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "plating",
    title: "Artful Plating",
    subtitle: "Precision, detail, and refined finishes.",
    gradient:
      "linear-gradient(150deg, #942121 0%, #264E7A 60%, #FFF1D9 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "seafood",
    title: "Aegean Seafood",
    subtitle: "Flame-kissed, citrus-bright, ocean-fresh.",
    gradient:
      "linear-gradient(145deg, #264E7A 0%, #4a7ab5 45%, #FFF1D9 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "dessert",
    title: "Honeyed Desserts",
    subtitle: "Orange blossom, pistachio, and rose cream.",
    gradient:
      "linear-gradient(140deg, #FFF1D9 0%, #942121 50%, #264E7A 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "chefs-table",
    title: "Chef’s Table",
    subtitle: "Front-row seats to the open kitchen.",
    gradient:
      "linear-gradient(155deg, #264E7A 0%, #942121 55%, #1a3555 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "signature",
    title: "Signature Plates",
    subtitle: "A curated selection — bold, coastal, elegant.",
    gradient:
      "linear-gradient(150deg, #942121 0%, #6b1818 35%, #264E7A 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1600&q=80",
  },
];

