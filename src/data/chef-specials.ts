export type ChefSpecial = {
  id: string;
  name: string;
  description: string;
  price: string;
  course: "starter" | "main" | "dessert" | "cocktail";
  highlight?: boolean;
  note?: string;
  tags?: string[];
  gradient: string;
  imageUrl?: string;
};

export const chefSpecials: ChefSpecial[] = [
  {
    id: "starter-crudo",
    name: "Citrus Sea Bream Crudo",
    description:
      "Thin-sliced sea bream, bergamot, olive oil pearls, and sea salt.",
    price: "$22",
    course: "starter",
    highlight: true,
    note: "Limited nightly — served chilled",
    tags: ["Gluten Free"],
    gradient:
      "linear-gradient(150deg, #264E7A 0%, #FFF1D9 55%, #942121 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "main-lobster",
    name: "Lobster Orzo Royale",
    description:
      "Saffron bisque reduction, cherry tomatoes, basil, aged parmesan.",
    price: "$44",
    course: "main",
    tags: ["Chef's Cut"],
    gradient:
      "linear-gradient(145deg, #1a3555 0%, #264E7A 45%, #942121 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "main-lamb",
    name: "Olive-Wood Lamb Shoulder",
    description:
      "Slow-roasted lamb, rosemary smoke, lemon potatoes, oregano jus.",
    price: "$39",
    course: "main",
    tags: ["Signature"],
    gradient:
      "linear-gradient(155deg, #942121 0%, #264E7A 55%, #FFF1D9 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "dessert-citrus",
    name: "Aegean Citrus Mille-Feuille",
    description:
      "Crisp pastry layers, orange blossom cream, candied lemon peel.",
    price: "$14",
    course: "dessert",
    tags: ["Contains Dairy"],
    gradient:
      "linear-gradient(140deg, #FFF1D9 0%, #942121 45%, #264E7A 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cocktail-spritz",
    name: "Lucious Sunset Spritz",
    description: "Citrus aperitif, sparkling wine, olive leaf, sea breeze.",
    price: "$16",
    course: "cocktail",
    tags: ["House Cocktail"],
    gradient:
      "linear-gradient(145deg, #264E7A 0%, #942121 60%, #1a3555 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1400&q=80",
  },
];

export const courseFilters: { id: "all" | ChefSpecial["course"]; label: string }[] =
  [
    { id: "all", label: "All Specials" },
    { id: "starter", label: "Starters" },
    { id: "main", label: "Mains" },
    { id: "dessert", label: "Desserts" },
    { id: "cocktail", label: "Cocktails" },
  ];

