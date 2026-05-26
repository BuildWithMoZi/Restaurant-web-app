export type DishCategory =
  | "all"
  | "mezze"
  | "seafood"
  | "mains"
  | "grill"
  | "dessert";

export type SignatureDish = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Exclude<DishCategory, "all">;
  badge?: string;
  tags?: string[];
  /** CSS gradient for card visual */
  gradient: string;
  imageUrl?: string;
};

export const signatureDishes: SignatureDish[] = [
  {
    id: "octopus",
    name: "Flame-Grilled Octopus",
    description:
      "Charred tentacles with lemon oil, smoked paprika, and caper relish.",
    price: "$28",
    category: "seafood",
    badge: "Chef's Pick",
    tags: ["Gluten Free"],
    gradient:
      "linear-gradient(145deg, #264E7A 0%, #1a3555 50%, #942121 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "santorini-salad",
    name: "Santorini Horizon Salad",
    description:
      "Heirloom tomatoes, barrel-aged feta, cucumber ribbons, and basil oil.",
    price: "$18",
    category: "mezze",
    tags: ["Vegetarian"],
    gradient:
      "linear-gradient(145deg, #942121 0%, #264E7A 60%, #FFF1D9 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "lamb-chops",
    name: "Mykonos Herb Lamb Chops",
    description:
      "Rosemary-crusted lamb with roasted garlic jus and crushed potatoes.",
    price: "$42",
    category: "grill",
    badge: "Signature",
    gradient:
      "linear-gradient(145deg, #1a3555 0%, #264E7A 40%, #942121 90%)",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "sea-bass",
    name: "Aegean Sea Bass",
    description:
      "Pan-seared fillet, saffron beurre blanc, and charred broccolini.",
    price: "$36",
    category: "seafood",
    tags: ["Popular"],
    gradient:
      "linear-gradient(160deg, #264E7A 0%, #4a7ab5 50%, #FFF1D9 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "hummus",
    name: "Smoked Eggplant Mezze",
    description:
      "Velvet hummus, tahini drizzle, pine nuts, and warm pita shards.",
    price: "$14",
    category: "mezze",
    tags: ["Vegan"],
    gradient:
      "linear-gradient(135deg, #942121 0%, #6b1818 50%, #264E7A 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "risotto",
    name: "Saffron Seafood Risotto",
    description:
      "Arborio rice, prawns, mussels, and aged parmesan with lemon zest.",
    price: "$32",
    category: "mains",
    badge: "New",
    gradient:
      "linear-gradient(150deg, #FFF1D9 0%, #264E7A 55%, #942121 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "moussaka",
    name: "Royal Moussaka",
    description:
      "Layered aubergine, spiced lamb ragù, and béchamel gratin.",
    price: "$26",
    category: "mains",
    gradient:
      "linear-gradient(145deg, #264E7A 0%, #942121 70%, #1a3555 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "baklava",
    name: "Honey Pistachio Baklava",
    description:
      "Crisp phyllo layers, orange blossom honey, and rose-scented cream.",
    price: "$12",
    category: "dessert",
    tags: ["Sweet"],
    gradient:
      "linear-gradient(140deg, #942121 0%, #FFF1D9 45%, #264E7A 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "souvlaki",
    name: "Coastal Chicken Souvlaki",
    description:
      "Marinated skewers, tzatziki, pickled onions, and herb flatbread.",
    price: "$24",
    category: "grill",
    gradient:
      "linear-gradient(155deg, #264E7A 0%, #942121 50%, #FFF1D9 100%)",
    imageUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=80",
  },
];

export const dishCategoryFilters: { id: DishCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mezze", label: "Mezze" },
  { id: "seafood", label: "Seafood" },
  { id: "mains", label: "Mains" },
  { id: "grill", label: "Grill" },
  { id: "dessert", label: "Dessert" },
];
