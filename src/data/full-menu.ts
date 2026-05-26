export type DietaryTag =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "spicy"
  | "contains-nuts"
  | "contains-dairy";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tags?: DietaryTag[];
  popular?: boolean;
};

export type MenuSection = {
  id:
    | "mezze"
    | "seafood"
    | "pasta"
    | "mains"
    | "desserts"
    | "drinks";
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const fullMenu: MenuSection[] = [
  {
    id: "mezze",
    title: "Mediterranean Mezze",
    subtitle: "Golden-hour small plates, perfect for sharing.",
    items: [
      {
        id: "mezze-eggplant",
        name: "Smoked Eggplant Mezze",
        description: "Tahini, pine nuts, pomegranate, warm pita shards.",
        price: "$14",
        tags: ["vegan", "contains-nuts"],
        popular: true,
      },
      {
        id: "mezze-tzatziki",
        name: "Tzatziki & Garden Herbs",
        description: "Greek yogurt, cucumber ribbons, dill, garlic oil.",
        price: "$11",
        tags: ["vegetarian", "contains-dairy", "gluten-free"],
      },
      {
        id: "mezze-halloumi",
        name: "Charred Halloumi",
        description: "Honey glaze, lemon zest, toasted sesame.",
        price: "$16",
        tags: ["vegetarian", "contains-dairy"],
      },
      {
        id: "mezze-dolma",
        name: "Vine Leaf Dolma",
        description: "Herb rice, currants, citrus, extra virgin olive oil.",
        price: "$13",
        tags: ["vegan", "gluten-free"],
      },
      {
        id: "mezze-santorini-salad",
        name: "Santorini Horizon Salad",
        description: "Heirloom tomatoes, barrel-aged feta, basil oil.",
        price: "$18",
        tags: ["vegetarian", "gluten-free", "contains-dairy"],
      },
    ],
  },
  {
    id: "seafood",
    title: "Seafood & Aegean Grill",
    subtitle: "Sea to flame, finished with citrus and olive wood.",
    items: [
      {
        id: "seafood-octopus",
        name: "Flame-Grilled Octopus",
        description: "Smoked paprika, caper relish, lemon oil.",
        price: "$28",
        tags: ["gluten-free"],
        popular: true,
      },
      {
        id: "seafood-sea-bass",
        name: "Aegean Sea Bass",
        description: "Saffron beurre blanc, charred broccolini.",
        price: "$36",
        tags: ["contains-dairy", "gluten-free"],
        popular: true,
      },
      {
        id: "seafood-prawns",
        name: "Lemon-Charred Prawns",
        description: "Chili-lime butter, parsley, toasted breadcrumbs.",
        price: "$30",
        tags: ["spicy", "contains-dairy"],
      },
      {
        id: "seafood-calamari",
        name: "Crisp Calamari",
        description: "Rose harissa aioli, pickled onion, herbs.",
        price: "$19",
        tags: ["spicy"],
      },
    ],
  },
  {
    id: "pasta",
    title: "Handmade Pasta",
    subtitle: "Silk ribbons, slow sauces, and coastal aromatics.",
    items: [
      {
        id: "pasta-lobster",
        name: "Lobster Orzo",
        description: "Bisque reduction, cherry tomatoes, basil.",
        price: "$38",
      },
      {
        id: "pasta-ragu",
        name: "Aegean Lamb Ragù",
        description: "Pappardelle, rosemary, aged parmesan.",
        price: "$29",
        tags: ["contains-dairy"],
      },
      {
        id: "pasta-limoncello",
        name: "Limoncello Linguine",
        description: "Lemon cream, zucchini, mint, pangrattato.",
        price: "$24",
        tags: ["vegetarian", "contains-dairy"],
      },
    ],
  },
  {
    id: "mains",
    title: "Signature Mains",
    subtitle: "A royal main course for every mood.",
    items: [
      {
        id: "mains-moussaka",
        name: "Royal Moussaka",
        description: "Aubergine layers, lamb ragù, béchamel gratin.",
        price: "$26",
        tags: ["contains-dairy"],
        popular: true,
      },
      {
        id: "mains-lamb-chops",
        name: "Mykonos Herb Lamb Chops",
        description: "Rosemary crust, roasted garlic jus, crushed potatoes.",
        price: "$42",
        tags: ["gluten-free"],
      },
      {
        id: "mains-souvlaki",
        name: "Coastal Chicken Souvlaki",
        description: "Tzatziki, pickled onions, herb flatbread.",
        price: "$24",
        tags: ["contains-dairy"],
      },
      {
        id: "mains-risotto",
        name: "Saffron Seafood Risotto",
        description: "Prawns, mussels, aged parmesan, lemon zest.",
        price: "$32",
        tags: ["contains-dairy", "gluten-free"],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Honeyed, delicate, and kissed with citrus.",
    items: [
      {
        id: "dessert-baklava",
        name: "Honey Pistachio Baklava",
        description: "Orange blossom honey, rose-scented cream.",
        price: "$12",
        tags: ["vegetarian", "contains-nuts", "contains-dairy"],
        popular: true,
      },
      {
        id: "dessert-yogurt",
        name: "Greek Yogurt Panna Cotta",
        description: "Fig compote, toasted almonds, vanilla.",
        price: "$11",
        tags: ["vegetarian", "contains-dairy", "contains-nuts", "gluten-free"],
      },
      {
        id: "dessert-sorbet",
        name: "Lemon Sorbet",
        description: "Mint, sea salt, extra virgin olive oil drizzle.",
        price: "$9",
        tags: ["vegan", "gluten-free"],
      },
    ],
  },
  {
    id: "drinks",
    title: "Wines & Cocktails",
    subtitle: "Aegean spritzes, island wines, and crafted classics.",
    items: [
      {
        id: "drink-spritz",
        name: "Santorini Spritz",
        description: "Citrus aperitif, sparkling wine, olive leaf.",
        price: "$14",
        popular: true,
      },
      {
        id: "drink-martini",
        name: "Olive Grove Martini",
        description: "Gin, vermouth, brine, rosemary mist.",
        price: "$16",
      },
      {
        id: "drink-rose",
        name: "Aegean Rosé (Glass)",
        description: "Dry, floral, mineral finish.",
        price: "$12",
      },
      {
        id: "drink-espresso",
        name: "Greek Espresso",
        description: "Traditional brew, served with loukoumi.",
        price: "$6",
      },
    ],
  },
];

