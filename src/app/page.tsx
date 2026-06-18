import { About } from "@/components/sections/About";
import { ChefSpecials } from "@/components/sections/ChefSpecials";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { MenuShowcase } from "@/components/sections/MenuShowcase";
import { Reservation } from "@/components/sections/Reservation";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SignatureDishes />
      <MenuShowcase />
      <ChefSpecials />
      <Gallery />
      <Testimonials />
      <Reservation />
    </>
  );
}
