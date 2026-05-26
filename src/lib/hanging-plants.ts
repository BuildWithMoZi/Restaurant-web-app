/** Public assets in /public/hanginig-plants */
export const hangingPlants = {
  accentBurgundy: "/hanginig-plants/3.png",
  /** Navbar vines (black bg — use screen blend) */
  navbarVineLeft: "/hanginig-plants/7.png",
  navbarVineRight: "/hanginig-plants/6.png",
} as const;

export type HangingPlantKey = keyof typeof hangingPlants;
