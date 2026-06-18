"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

function FeatureIcon({ icon }: { icon: string }) {
  const cls = "h-6 w-6 text-secondary";
  switch (icon) {
    case "wave":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M2 14c3-4 6-4 10 0s7 4 10 0" strokeLinecap="round" />
          <path d="M2 18c3-4 6-4 10 0s7 4 10 0" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    case "globe":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 4.5 6 4.5 9S15 18 12 21M12 3c-3 3-4.5 6-4.5 9S9 18 12 21" />
        </svg>
      );
    case "sun":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
        </svg>
      );
    case "chef":
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M6 10c0-3 2.5-5 6-5s6 2 6 5v2H6v-2z" />
          <path d="M4 14h16v2c0 3-3.5 5-8 5s-8-2-8-5v-2z" strokeLinecap="round" />
        </svg>
      );
  }
}

export function About() {
  const reduceMotion = useReducedMotion();
  const { about } = site;

  return (
    <Section id="about" className="overflow-x-hidden border-border/40">
      <div
        className="section-overlay-muted pointer-events-none absolute inset-0"
        aria-hidden
      />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />
        </ScrollReveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Visual collage */}
          <ScrollReveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:mx-0">
              {/* Main image card */}
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-float)]"
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[4/5] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--brand-secondary),transparent_15%)_0%,color-mix(in_oklab,var(--brand-secondary-2),transparent_40%)_55%,var(--brand-primary)_100%)]">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                    alt="Candlelit restaurant dining room ambience"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,13,20,0.62)_0%,rgba(7,13,20,0.18)_55%,transparent_100%)]"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 25% 30%, rgba(255,241,217,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(38,78,122,0.35) 0%, transparent 45%)",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                    <span className="mb-3 rounded-full border border-secondary-3/30 bg-secondary/80 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-3">
                      {about.years}
                    </span>
                    <p className="font-display text-3xl text-secondary-3">
                      The Lucious Experience
                    </p>
                    <p className="mt-2 text-sm text-secondary-3/75">
                      Terrace • Cellar • Open Kitchen
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Overlapping accent card */}
              <motion.div
                className="absolute -bottom-6 -right-4 w-[55%] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] sm:-right-8"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="relative aspect-square bg-[linear-gradient(135deg,var(--brand-primary)_0%,color-mix(in_oklab,var(--brand-secondary),transparent_25%)_100%)] p-5">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={72}
                    height={72}
                    className="mx-auto h-16 w-16 rounded-full object-cover ring-2 ring-secondary/20"
                  />
                  <p className="mt-3 text-center font-display text-lg text-secondary">
                    Olive & Sea
                  </p>
                  <p className="text-center text-xs text-muted-foreground">
                    Signature philosophy
                  </p>
                </div>
              </motion.div>

              {/* Floating stat chip */}
              <motion.div
                className="absolute -left-3 top-8 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-md sm:-left-6"
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-display text-2xl text-secondary">15+</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Years of craft
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Story content */}
          <div className="order-1 space-y-6 lg:order-2">
            {about.paragraphs.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {para}
                </p>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.2}>
              <blockquote className="relative rounded-2xl border border-secondary/15 bg-card/60 p-6 backdrop-blur-sm sm:p-8">
                <span
                  className="font-display text-5xl leading-none text-secondary/25"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="mt-1 font-display text-xl leading-snug text-secondary sm:text-2xl">
                  {about.quote.text}
                </p>
                <footer className="mt-4 text-sm font-medium text-muted-foreground">
                  — {about.quote.author}
                </footer>
                <div
                  className="absolute -right-1 -top-1 h-16 w-16 rounded-full bg-secondary-2/10 blur-xl"
                  aria-hidden
                />
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <Button href="#menu" variant="outline">
                Discover Our Menu
              </Button>
            </ScrollReveal>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.06}>
              <motion.article
                className="group h-full rounded-2xl border border-border/80 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-secondary/25 hover:shadow-[var(--shadow-soft)]"
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/8 transition-colors group-hover:bg-secondary/12">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="font-display text-xl text-secondary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        {/* Royal divider */}
        <ScrollReveal delay={0.1}>
          <div className="mt-20 flex items-center justify-center gap-4">
            <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-secondary/30" />
            <span className="font-display text-sm tracking-[0.3em] text-secondary/70 uppercase">
              {site.locationLine}
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-secondary/30" />
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
