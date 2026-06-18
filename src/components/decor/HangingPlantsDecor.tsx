"use client";

import { HangingPlantImage } from "./HangingPlantImage";
import { hangingPlants } from "@/lib/hanging-plants";

export type HangingPlantsVariant = "dark-accent";

type HangingPlantsDecorProps = {
  variant?: HangingPlantsVariant;
};

export function HangingPlantsDecor({
  variant = "dark-accent",
}: HangingPlantsDecorProps) {
  if (variant !== "dark-accent") return null;

  return (
    <div className="decor-layer absolute inset-0 overflow-hidden" aria-hidden>
      <HangingPlantImage
        src={hangingPlants.accentBurgundy}
        width={300}
        height={440}
        blend="screen"
        className="absolute left-1/2 top-0 hidden w-40 -translate-x-1/2 opacity-80 lg:block lg:w-48"
      />
    </div>
  );
}
