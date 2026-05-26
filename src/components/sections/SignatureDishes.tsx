"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SignatureBotanicalDecor } from "@/components/decor/SignatureBotanicalDecor";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { sectionDarkBgDeep } from "@/lib/section-surfaces";
import { DishCard } from "@/components/ui/DishCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  dishCategoryFilters,
  signatureDishes,
  type DishCategory,
} from "@/data/signature-dishes";

const sectionCopy = {
  eyebrow: "Signature Collection",
  title: "Plates that define our table.",
  description:
    "A curated selection of our most celebrated creations — from flame-kissed seafood to golden-hour mezze, each dish tells a story of the Mediterranean.",
};

export function SignatureDishes() {
  const [activeCategory, setActiveCategory] = useState<DishCategory>("all");
  const reduceMotion = useReducedMotion();

  const filteredDishes = useMemo(() => {
    if (activeCategory === "all") return signatureDishes;
    return signatureDishes.filter((d) => d.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="signature" className={sectionDarkBgDeep}>
      <SignatureBotanicalDecor />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow={sectionCopy.eyebrow}
            title={sectionCopy.title}
            description={sectionCopy.description}
            light
          />
        </ScrollReveal>

        {/* Category filters */}
        <ScrollReveal delay={0.1}>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
            role="tablist"
            aria-label="Filter dishes by category"
          >
            {dishCategoryFilters.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:px-5 ${
                    isActive
                      ? "border-secondary-3/30 bg-secondary-3 text-secondary shadow-[var(--shadow-soft)]"
                      : "border-secondary-3/15 bg-secondary-3/10 text-secondary-3/80 hover:border-secondary-3/25 hover:bg-secondary-3/20"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Dish grid */}
        <motion.div
          layout={!reduceMotion}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish, i) => (
              <motion.div
                key={dish.id}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <DishCard dish={dish} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDishes.length === 0 && (
          <p className="mt-12 text-center text-secondary-3/70">
            No dishes in this category yet.
          </p>
        )}

        {/* CTA */}
        <ScrollReveal delay={0.15}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="max-w-md text-sm text-secondary-3/70">
              Explore our complete menu with over fifty dishes spanning global
              inspirations.
            </p>
            <Button href="#menu" variant="secondary" size="lg">
              View Full Menu
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
