"use client";

import { HangingPlantImage } from "./HangingPlantImage";
import { hangingPlants } from "@/lib/hanging-plants";

/** Edit width values here — left & right are independent */
const plantSize = {
  left: "w-[min(24vw,110px)] md:w-[120px] lg:w-[140px] xl:w-[135px]",
  right: "w-[min(32vw,150px)] md:w-[175px] lg:w-[200px] xl:w-[300px]",
} as const;

const plantPosition = {
  /* Corner-anchored; crown sits above logo */
  left: "absolute left-[-45px] top-[-32px] hidden sm:block md:top-[-22px] lg:top-[-32px]",
  right:
    "absolute right-[-75px] top-[-10px] hidden -scale-x-100 sm:block md:-right-0.5 md:top-[-8px]",
} as const;

function NavbarPlantSide({
  src,
  side,
}: {
  src: string;
  side: keyof typeof plantPosition;
}) {
  const position = plantPosition[side];
  const size = plantSize[side];

  return (
    <>
      {/* Behind glass — vines under links */}
      <HangingPlantImage
        src={src}
        width={320}
        height={520}
        priority
        blend='screen'
        className={`${position} ${size} z-[2] opacity-85`}
      />

      {/* Top foliage — overlaps front of navbar */}
      <div
        className={`${position} ${size} z-[25] overflow-hidden`}
        style={{ clipPath: "inset(0 0 52% 0)" }}
        aria-hidden>
        <HangingPlantImage
          src={src}
          width={320}
          height={520}
          priority
          blend='screen'
          className='relative top-0 w-full'
        />
      </div>
    </>
  );
}

/** Grows from the navbar pill; moves with the fixed header */
export function NavbarPlantDecor() {
  return (
    <>
      <NavbarPlantSide src={hangingPlants.navbarVineLeft} side='left' />
      <NavbarPlantSide src={hangingPlants.navbarVineRight} side='right' />
    </>
  );
}
