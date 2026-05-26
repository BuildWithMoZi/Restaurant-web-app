"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { sectionDarkBg } from "@/lib/section-surfaces";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pressMentions, testimonials } from "@/data/testimonials";

const copy = {
  eyebrow: "Testimonials",
  title: "Loved by guests, celebrated by critics.",
  description:
    "A few words from our community — crafted moments, unforgettable flavours, and a royal Mediterranean ambience.",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={i < rating ? "text-secondary-2" : "text-secondary/20"}
          aria-hidden
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const items = useMemo(() => testimonials, []);

  return (
    <Section id="testimonials" className={sectionDarkBg}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_0%,color-mix(in_oklab,var(--brand-secondary-2),transparent_92%),transparent_70%)]"
        aria-hidden
      />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            light
          />
        </ScrollReveal>

        {/* Review grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((t, idx) => (
            <motion.article
              key={t.id}
              className={`group relative overflow-hidden rounded-3xl border backdrop-blur-md transition-all duration-300 hover:shadow-[var(--shadow-float)] ${
                t.highlight
                  ? "border-secondary-3/28 bg-secondary-3/10"
                  : "border-secondary-3/18 bg-secondary-3/6"
              }`}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: reduceMotion ? 0 : idx * 0.05,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xl text-secondary-3">
                      {t.name}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-3/65">
                      {t.title}
                    </p>
                  </div>
                  <Stars rating={t.rating} />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-secondary-3/80">
                  <span
                    className="font-display text-4xl leading-none text-secondary-3/20"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  {t.quote}
                </p>

                {t.highlight && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-secondary-3/20 bg-secondary-3/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary-3/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary-2" />
                    Guest favourite
                  </div>
                )}
              </div>

              {/* Shine overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              >
                <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.10)_50%,transparent_65%)]" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Press strip */}
        <ScrollReveal delay={0.12}>
          <div className="mt-16 rounded-3xl border border-secondary-3/18 bg-secondary-3/6 p-6 backdrop-blur-md sm:p-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-secondary-3/60">
              Press & Awards
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {pressMentions.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-secondary-3/14 bg-secondary-3/8 px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-secondary-3/75"
                >
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
