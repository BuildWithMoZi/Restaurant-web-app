"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { sectionDarkBg } from "@/lib/section-surfaces";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  chefSpecials,
  courseFilters,
  type ChefSpecial,
} from "@/data/chef-specials";

const copy = {
  eyebrow: "Chef Specials",
  title: "Tonight’s chef-led creations.",
  description:
    "Limited plates and seasonal pours — crafted nightly, plated with precision, and served at peak freshness.",
};

function CoursePill({ course }: { course: ChefSpecial["course"] }) {
  const label =
    course === "starter"
      ? "Starter"
      : course === "main"
        ? "Main"
        : course === "dessert"
          ? "Dessert"
          : "Cocktail";

  return (
    <span className="rounded-full border border-secondary-3/18 bg-secondary-3/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary-3/80">
      {label}
    </span>
  );
}

function SpecialCard({
  special,
  index,
}: {
  special: ChefSpecial;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative w-[min(92vw,420px)] shrink-0 overflow-hidden rounded-3xl border border-secondary-3/18 bg-secondary-3/6 backdrop-blur-md"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay: reduceMotion ? 0 : index * 0.05,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      <div className="relative aspect-[5/3] overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ background: special.gradient }}
        />
        {special.imageUrl && (
          <Image
            src={special.imageUrl}
            alt={special.name}
            fill
            unoptimized
            sizes="(max-width: 768px) 92vw, 420px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18)_0%,transparent_55%)]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,13,20,0.55)_0%,transparent_60%)]" />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          {special.highlight && (
            <span className="rounded-full bg-secondary-2 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary-3 shadow-sm">
              Limited
            </span>
          )}
          <CoursePill course={special.course} />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-display text-2xl text-secondary-3 drop-shadow-sm sm:text-3xl">
            {special.name}
          </p>
          <p className="mt-2 text-sm text-secondary-3/80">
            {special.description}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-3/65">
            Tonight’s special price
          </p>
          <p className="font-display text-xl text-secondary-3">{special.price}</p>
        </div>

        {special.tags && special.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {special.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-secondary-3/18 bg-secondary-3/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary-3/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {special.note && (
          <p className="mt-4 text-sm text-secondary-3/70">{special.note}</p>
        )}
      </div>

      {/* Shine */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.12)_50%,transparent_65%)]" />
      </div>
    </motion.article>
  );
}

export function ChefSpecials() {
  const [active, setActive] = useState<(typeof courseFilters)[number]["id"]>(
    "all",
  );
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (active === "all") return chefSpecials;
    return chefSpecials.filter((s) => s.course === active);
  }, [active]);

  return (
    <Section id="chef-specials" className={sectionDarkBg}>
      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            light
          />
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={0.1}>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filter chef specials by course"
          >
            {courseFilters.map((f) => {
              const isActive = active === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f.id)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                    isActive
                      ? "border-secondary-3/30 bg-secondary-3 text-secondary shadow-[var(--shadow-soft)]"
                      : "border-secondary-3/15 bg-secondary-3/10 text-secondary-3/80 hover:border-secondary-3/25 hover:bg-secondary-3/20"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Featured highlight row */}
        <ScrollReveal delay={0.12}>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-3xl border border-secondary-3/18 bg-secondary-3/6 p-6 backdrop-blur-md sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-3/65">
                Chef’s note
              </p>
              <p className="mt-4 font-display text-2xl leading-snug text-secondary-3 sm:text-3xl">
                A limited menu is our promise of freshness — crafted nightly, not
                mass-produced.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-secondary-3/75">
                We rotate specials based on the morning catch, seasonal herbs,
                and our cellar selections. Reserve your table early for the full
                experience.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#reservation" size="lg">
                  Reserve Tonight
                </Button>
                <Button href="#menu" variant="outline" size="lg">
                  Browse Full Menu
                </Button>
              </div>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-3xl border border-secondary-3/18 bg-secondary-3/6 p-6 backdrop-blur-md sm:p-8"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, rgba(255,241,217,0.22) 0%, transparent 55%), radial-gradient(circle at 70% 70%, rgba(148,33,33,0.18) 0%, transparent 50%)",
                }}
                aria-hidden
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-3/65">
                  Today’s highlight
                </p>
                <p className="mt-3 font-display text-3xl text-secondary-3">
                  Citrus Sea Bream Crudo
                </p>
                <p className="mt-2 text-sm text-secondary-3/75">
                  Bergamot • olive oil pearls • sea salt
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full bg-secondary-2 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary-3">
                    Limited
                  </span>
                  <span className="font-display text-2xl text-secondary-3">
                    $22
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Carousel (snap scroll) */}
        <div className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-3/60">
              Scroll the specials
            </p>
            <p className="hidden text-xs text-secondary-3/65 sm:block">
              Tip: swipe horizontally on mobile
            </p>
          </div>

          <div className="mt-4 overflow-hidden">
            <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-2">
              <AnimatePresence mode="popLayout">
                {filtered.map((special, i) => (
                  <motion.div
                    key={special.id}
                    className="snap-start"
                    layout={!reduceMotion}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                  >
                    <SpecialCard special={special} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-secondary-3/70">
              No specials in this course right now.
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}

