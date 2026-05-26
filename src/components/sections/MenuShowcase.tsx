"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fullMenu, type DietaryTag, type MenuSection } from "@/data/full-menu";

const copy = {
  eyebrow: "Full Menu Showcase",
  title: "A menu curated for every moment.",
  description:
    "Browse our complete selection — Mediterranean mezze, Aegean seafood, handmade pasta, and royal desserts, all crafted with elegant restraint.",
};

function tagLabel(tag: DietaryTag) {
  switch (tag) {
    case "vegetarian":
      return "Vegetarian";
    case "vegan":
      return "Vegan";
    case "gluten-free":
      return "Gluten Free";
    case "spicy":
      return "Spicy";
    case "contains-nuts":
      return "Nuts";
    case "contains-dairy":
      return "Dairy";
    default:
      return tag;
  }
}

function MenuSectionAccordion({
  section,
  open,
  onToggle,
  index,
}: {
  section: MenuSection;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      layout={!reduceMotion}
      className="overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: reduceMotion ? 0 : index * 0.05,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-secondary/5 sm:px-6"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {section.subtitle ?? "Selection"}
          </p>
          <h3 className="mt-2 font-display text-2xl text-secondary sm:text-3xl">
            {section.title}
          </h3>
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-secondary">
          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={reduceMotion ? undefined : { rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
          >
            <div className="border-t border-border/70 px-5 py-6 sm:px-6">
              <ul className="grid gap-5 md:grid-cols-2">
                {section.items.map((item) => (
                  <li
                    key={item.id}
                    className="group rounded-2xl border border-border/70 bg-card/40 p-4 transition-all duration-300 hover:border-secondary/20 hover:bg-card/55 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-lg text-secondary">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <p className="shrink-0 font-display text-lg text-secondary-2">
                        {item.price}
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {item.popular && (
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary-3">
                          Popular
                        </span>
                      )}
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-secondary/15 bg-secondary/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary/80"
                        >
                          {tagLabel(tag)}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function MenuShowcase() {
  const [active, setActive] = useState<string>(fullMenu[0]?.id ?? "mezze");
  const reduceMotion = useReducedMotion();

  const sections = useMemo(() => fullMenu, []);

  return (
    <Section id="menu" tone="bright">
      <div
        className="section-overlay-bright pointer-events-none absolute inset-0"
        aria-hidden
      />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Category rail (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-border/80 bg-card/60 p-4 backdrop-blur-sm">
              <p className="px-2 pb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Categories
              </p>
              <nav aria-label="Menu categories">
                <ul className="space-y-1.5">
                  {sections.map((section) => {
                    const isActive = section.id === active;
                    return (
                      <li key={section.id}>
                        <button
                          type="button"
                          onClick={() => setActive(section.id)}
                          className={`w-full rounded-xl px-3 py-3 text-left transition-all ${
                            isActive
                              ? "bg-secondary text-secondary-3 shadow-[var(--shadow-soft)]"
                              : "text-foreground/85 hover:bg-secondary/8 hover:text-secondary"
                          }`}
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                            {section.title}
                          </p>
                          <p
                            className={`mt-1 text-xs ${
                              isActive
                                ? "text-secondary-3/75"
                                : "text-muted-foreground"
                            }`}
                          >
                            {section.subtitle ?? "Selection"}
                          </p>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Accordions */}
          <div className="space-y-5">
            {/* Mobile category chips */}
            <div className="flex flex-wrap justify-center gap-2 lg:hidden">
              {sections.map((s) => {
                const isActive = s.id === active;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(s.id)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                      isActive
                        ? "border-secondary/25 bg-secondary text-secondary-3 shadow-[var(--shadow-soft)]"
                        : "border-border bg-card/50 text-secondary hover:bg-secondary/8"
                    }`}
                  >
                    {s.id === "seafood" ? "Seafood" : s.title.split(" ")[0]}
                  </button>
                );
              })}
            </div>

            {sections.map((section, i) => {
              const open = section.id === active;
              return (
                <MenuSectionAccordion
                  key={section.id}
                  section={section}
                  open={open}
                  onToggle={() =>
                    setActive((prev) => (prev === section.id ? "" : section.id))
                  }
                  index={i}
                />
              );
            })}

            {/* Helpful hint */}
            <motion.p
              className="pt-4 text-center text-sm text-muted-foreground"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tap a category to reveal its full selection.
            </motion.p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

