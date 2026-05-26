export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Signature", href: "#signature" },
  { label: "Menu", href: "#menu" },
  { label: "Chef Specials", href: "#chef-specials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Reserve", href: "#reservation" },
];

export const footerNav = {
  explore: [
    { label: "About Us", href: "#about" },
    { label: "Signature Dishes", href: "#signature" },
    { label: "Full Menu", href: "#menu" },
    { label: "Chef Specials", href: "#chef-specials" },
  ],
  experience: [
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Reservations", href: "#reservation" },
  ],
} as const;
