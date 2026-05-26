export const site = {
  name: "Mykonos – Restaurant & Cuisine",
  shortName: "Mykonos",
  description:
    "A premium dining experience with global cuisine, signature dishes, and chef-crafted specials.",
  locationLine: "Mykonos • Global Cuisine",
  tagline: "Royal Mediterranean dining, crafted to perfection.",
  about: {
    eyebrow: "Our Story",
    title: "A sanctuary of Mediterranean soul & global craft.",
    description:
      "Born from the sun-bleached shores of Mykonos, our restaurant blends coastal warmth with refined international technique — every plate a celebration of land, sea, and heritage.",
    paragraphs: [
      "At Mykonos, we believe dining is theatre — candlelit terraces, the scent of olive wood, and plates that arrive like works of art. Our kitchen honours timeless Aegean recipes while embracing flavours from across the globe.",
      "From dawn-fresh seafood to slow-roasted lamb, every ingredient is selected with intention. Our chefs plate with precision, passion, and a deep respect for the Mediterranean table.",
    ],
    features: [
      {
        title: "Coastal Heritage",
        description: "Recipes rooted in Aegean tradition, refined for modern palates.",
        icon: "wave",
      },
      {
        title: "Global Inspiration",
        description: "Twelve culinary influences woven into one harmonious menu.",
        icon: "globe",
      },
      {
        title: "Sunset Terrace",
        description: "Open-air dining with panoramic views and golden-hour ambience.",
        icon: "sun",
      },
      {
        title: "Chef-Led Kitchen",
        description: "Seasonal menus crafted by award-recognised culinary artists.",
        icon: "chef",
      },
    ],
    quote: {
      text: "We don't simply serve food — we curate moments that linger long after the last course.",
      author: "Executive Chef, Mykonos",
    },
    years: "Est. 2018",
  },
  hero: {
    eyebrow: "Mediterranean • Global Cuisine",
    headline: "Where Aegean elegance meets world-class flavour.",
    subheadline:
      "An intimate coastal dining experience with chef-crafted mezze, flame-kissed seafood, and signature plates inspired by Mykonos sunsets.",
    ctaPrimary: "Reserve a Table",
    ctaSecondary: "Explore Menu",
    stats: [
      { value: "4.9", label: "Guest Rating" },
      { value: "50+", label: "Signature Plates" },
      { value: "12", label: "Global Inspirations" },
      { value: "7PM", label: "Sunset Service" },
    ],
    featuredDish: "Aegean Sea Bass",
    images: [
      {
        src: "/hero/terrace-v1.jpg",
        alt: "Candlelit terrace dining with coastal views at Mykonos",
        label: "Sunset Terrace",
        span: "large" as const,
      },
      {
        src: "/hero/seafood-v1.jpg",
        alt: "Flame-grilled Aegean seafood plated to perfection",
        label: "Fresh Catch",
        span: "small" as const,
      },
      {
        src: "/hero/mezze-v1.jpg",
        alt: "Colourful Mediterranean mezze and shared plates",
        label: "Mezze Ritual",
        span: "small" as const,
      },
      {
        src: "/hero/plating-v1.jpg",
        alt: "Fine dining presentation with artful plating",
        label: "Chef's Art",
        span: "wide" as const,
      },
    ],
  },
  address: "12 Aegean Promenade, Coastal District",
  phone: "+1 (555) 012-7890",
  email: "reservations@mykonos-cuisine.com",
  hours: {
    weekdays: "Mon – Thu: 12:00 PM – 11:00 PM",
    weekend: "Fri – Sun: 12:00 PM – 12:00 AM",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tripadvisor: "https://tripadvisor.com",
  },
} as const;

