export type MenuCategory = {
  id: string;
  title: string;
  description?: string;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "mezze",
    title: "Mediterranean Mezze",
    description: "Small plates inspired by the Aegean coast.",
  },
  { id: "seafood", title: "Seafood & Aegean Grill" },
  { id: "pasta", title: "Handmade Pasta" },
  { id: "mains", title: "Signature Mains" },
  { id: "desserts", title: "Desserts" },
  { id: "drinks", title: "Wines & Cocktails" },
];

