export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  highlight?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aanya Kapoor",
    title: "Anniversary Dinner",
    quote:
      "The terrace felt like Lucious at sunset — every plate arrived like a small ceremony. The octopus was perfection, and the service was quietly flawless.",
    rating: 5,
    highlight: true,
  },
  {
    id: "t2",
    name: "Daniel Reyes",
    title: "Chef’s Table Experience",
    quote:
      "Elegant, modern, and deeply Mediterranean. The sea bass had the cleanest saffron finish I’ve had in years. Every detail felt intentional.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Meera Iqbal",
    title: "Weekend Brunch",
    quote:
      "Signature mezze, beautiful plating, and cocktails that taste like summer. The ambience is cinematic without being loud or overwhelming.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Oliver Chen",
    title: "Date Night",
    quote:
      "Luxurious but warm. Perfect spacing, perfect lighting, and a menu that feels coastal, refined, and global all at once.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Sofia Petrou",
    title: "Family Celebration",
    quote:
      "From the first greeting to the last dessert, it was effortless. The baklava is a masterpiece — crisp, fragrant, and not overly sweet.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Rohan Malhotra",
    title: "Business Dinner",
    quote:
      "Premium hospitality. The chef specials felt genuinely seasonal and limited — the kind of place you come back to, again and again.",
    rating: 5,
  },
];

export const pressMentions: { id: string; label: string }[] = [
  { id: "aegean-guide", label: "Aegean Dining Guide" },
  { id: "coastal-luxe", label: "Coastal Luxe" },
  { id: "gourmet-weekly", label: "Gourmet Weekly" },
  { id: "saffron-table", label: "Saffron Table" },
  { id: "terrace-awards", label: "Terrace Awards" },
];

