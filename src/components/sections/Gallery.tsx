"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/data/gallery";

const copy = {
  eyebrow: "Gallery",
  title: "A cinematic glimpse into our world.",
  description:
    "From sunset terrace moments to artful plating — explore the ambience that makes Mykonos unforgettable.",
};

function Lightbox({
  open,
  onClose,
  title,
  subtitle,
  gradient,
  imageUrl,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  gradient: string;
  imageUrl?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-x-4 top-24 z-[70] mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card/85 shadow-[var(--shadow-float)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <div className="absolute inset-0" style={{ background: gradient }} />
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                />
              )}
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_55%)]"
                aria-hidden
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,13,20,0.45)_0%,transparent_60%)]" />
              <button
                type="button"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-secondary transition-colors hover:bg-secondary/10"
                onClick={onClose}
                aria-label="Close"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Gallery feature
              </p>
              <p className="mt-2 font-display text-3xl text-secondary">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Gallery() {
  const reduceMotion = useReducedMotion();
  const items = useMemo(() => galleryItems, []);
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = items.find((i) => i.id === activeId);

  return (
    <Section id="gallery" tone="bright">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,color-mix(in_oklab,var(--brand-secondary-2),transparent_94%),transparent_72%)]"
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

        {/* Masonry-like layout using CSS columns */}
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              className="group mb-5 inline-flex w-full break-inside-avoid flex-col overflow-hidden rounded-3xl border border-border/80 bg-card/50 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-secondary/20 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => setActiveId(item.id)}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: reduceMotion ? 0 : idx * 0.04,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  idx % 4 === 0
                    ? "aspect-[4/5]"
                    : idx % 4 === 1
                      ? "aspect-[16/10]"
                      : idx % 4 === 2
                        ? "aspect-[3/4]"
                        : "aspect-[16/11]"
                }`}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ background: item.gradient }}
                />
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18)_0%,transparent_55%)]"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,13,20,0.55)_0%,transparent_55%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl text-secondary-3 drop-shadow-sm">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-secondary-3/75">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Note: these are premium placeholders. When you share real food &
            ambience photos, we’ll replace gradients with optimized images.
          </p>
        </ScrollReveal>
      </Container>

      {active && (
        <Lightbox
          open={Boolean(active)}
          onClose={() => setActiveId(null)}
          title={active.title}
          subtitle={active.subtitle}
          gradient={active.gradient}
          imageUrl={active.imageUrl}
        />
      )}
    </Section>
  );
}

