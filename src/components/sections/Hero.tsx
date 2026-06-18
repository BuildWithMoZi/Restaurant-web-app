"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { OliveBranch } from "@/components/decor/BotanicalSprites";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { assetPath } from "@/lib/asset-path";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function HeroImageTile({
  src,
  alt,
  label,
  className,
  priority = false,
  index,
  reduceMotion,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      custom={index}
      initial='hidden'
      animate='visible'
      variants={imageReveal}
      className={`group relative overflow-hidden rounded-2xl border border-border/70 shadow-[var(--shadow-soft)] sm:rounded-3xl ${className ?? ""}`}>
      <Image
        src={assetPath(src)}
        alt={alt}
        fill
        priority={priority}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='object-cover transition-transform duration-700 group-hover:scale-105'
      />
      <div
        className='absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--brand-secondary),transparent_25%)_0%,transparent_55%)]'
        aria-hidden
      />
      <div className='absolute inset-x-0 bottom-0 p-3 sm:p-4'>
        <p className='text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary-3/80 sm:text-xs'>
          {label}
        </p>
      </div>
      {!reduceMotion && (
        <motion.div
          className='pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_42%,rgba(255,255,255,0.14)_50%,transparent_58%)]'
          animate={{ x: ["-120%", "220%"] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
          aria-hidden
        />
      )}
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { hero } = site;

  const [mainImage, ...bentoImages] = hero.images;
  const [seafoodImage, mezzeImage, wideImage] = bentoImages;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.12]);
  const mosaicY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section
      id='home'
      ref={sectionRef}
      className='relative -mt-[5.5rem] min-h-[100svh] overflow-hidden pt-[5.5rem] sm:-mt-[6rem] sm:pt-[6rem]'>
      {/* Ambient brand layers */}
      <motion.div
        className='absolute inset-0 hero-bg opacity-90'
        style={reduceMotion ? undefined : { y: bgY }}
      />
      <div
        className='hero-noise pointer-events-none absolute inset-0'
        aria-hidden
      />
      <div
        className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,color-mix(in_oklab,var(--brand-primary),transparent_10%)_70%,var(--background)_100%)]'
        aria-hidden
      />

      {/* Subtle full-bleed backdrop photo */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.14]'
        aria-hidden>
        <Image
          src={assetPath(mainImage.src)}
          alt=''
          fill
          priority
          sizes='100vw'
          className='object-cover blur-sm'
        />
      </div>

      <motion.div
        className='relative z-10 flex min-h-[calc(100svh-5.5rem)] flex-col justify-center sm:min-h-[calc(100svh-6rem)] lg:justify-start lg:pt-4'
        style={
          reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }
        }>
        <Container className='py-8 sm:py-10 lg:py-6 lg:pb-12'>
          <div className='grid items-center gap-10 lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-12'>
            {/* Copy — mobile below mosaic */}
            <div className='order-2 lg:order-1 lg:col-span-5 xl:col-span-5'>
              <motion.div
                custom={0}
                initial='hidden'
                animate='visible'
                variants={fadeUp}
                className='mb-4 inline-flex items-center gap-3 lg:mb-3'>
                {/* <Image
                  src='/logo.png'
                  alt=''
                  width={48}
                  height={48}
                  className='h-11 w-11 rounded-full object-cover ring-2 ring-secondary/20 shadow-[var(--shadow-soft)] sm:h-12 sm:w-12'
                  priority
                /> */}
                <span className='rounded-full border border-secondary/80 bg-transparent px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-900/80 sm:text-xs'>
                  {hero.eyebrow}
                </span>
              </motion.div>

              <motion.div
                custom={1}
                initial='hidden'
                animate='visible'
                variants={fadeUp}>
                <OliveBranch className='mb-3 w-24 text-secondary opacity-70 sm:w-28' />
              </motion.div>

              <motion.h1
                custom={2}
                initial='hidden'
                animate='visible'
                variants={fadeUp}
                className='font-display text-[2.15rem] leading-[1.08] tracking-tight text-secondary sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]'>
                Where <span className='text-secondary-2'>Aegean elegance</span>{" "}
                meets world-class{" "}
                <span className='text-secondary-2'>flavour.</span>
              </motion.h1>

              <motion.p
                custom={3}
                initial='hidden'
                animate='visible'
                variants={fadeUp}
                className='mt-5 max-w-lg text-base leading-relaxed text-gray-500/80 sm:text-lg'>
                {hero.subheadline}
              </motion.p>

              {/* Quick restaurant info */}
              <motion.div
                custom={4}
                initial='hidden'
                animate='visible'
                variants={fadeUp}
                className='mt-6 flex flex-wrap gap-2'>
                <span className='inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm sm:text-xs'>
                  <span
                    className='h-1.5 w-1.5 rounded-full bg-secondary-2'
                    aria-hidden
                  />
                  Open tonight
                </span>
                <span className='inline-flex items-center rounded-full border border-border/80 bg-card/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm sm:text-xs'>
                  {site.locationLine}
                </span>
              </motion.div>

              <motion.div
                custom={5}
                initial='hidden'
                animate='visible'
                variants={fadeUp}
                className='mt-8 flex flex-wrap items-center gap-3'>
                <Button href='#reservation' size='lg'>
                  {hero.ctaPrimary}
                </Button>
                <Button href='#menu' variant='outline' size='lg'>
                  {hero.ctaSecondary}
                </Button>
              </motion.div>

              {/* Compact stats strip */}
              <motion.ul
                custom={6}
                initial='hidden'
                animate='visible'
                variants={fadeUp}
                className='mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border/70 pt-8 sm:grid-cols-4'>
                {hero.stats.map((stat) => (
                  <li key={stat.label}>
                    <p className='font-display text-2xl font-semibold text-secondary sm:text-3xl'>
                      {stat.value}
                    </p>
                    <p className='mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs'>
                      {stat.label}
                    </p>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Bento image mosaic */}
            <motion.div
              className='order-1 lg:order-2 lg:col-span-7 xl:col-span-7'
              style={reduceMotion ? undefined : { y: mosaicY }}>
              <div className='grid grid-cols-6 gap-3 sm:gap-4'>
                {/* Main terrace shot */}
                <div className='relative col-span-6 sm:col-span-4 sm:row-span-2'>
                  <HeroImageTile
                    src={mainImage.src}
                    alt={mainImage.alt}
                    label={mainImage.label}
                    className='aspect-[16/11] sm:aspect-auto sm:h-full sm:min-h-[340px]'
                    priority
                    index={0}
                    reduceMotion={reduceMotion}
                  />

                  {/* Chef's pick badge */}
                  <motion.div
                    className='absolute -bottom-3 left-4 z-10 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-md sm:left-6'
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : 0.55,
                      duration: 0.5,
                    }}>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
                      Chef&apos;s Pick
                    </p>
                    <p className='font-display text-lg text-secondary'>
                      {hero.featuredDish}
                    </p>
                  </motion.div>

                  {/* Rating badge */}
                  <motion.div
                    className='absolute -right-2 -top-3 z-10 rounded-2xl border border-secondary/25 bg-secondary px-3 py-2 text-secondary-3 shadow-[var(--shadow-soft)] sm:-right-4'
                    animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}>
                    <p className='text-xs font-semibold'>
                      ★ {hero.stats[0].value}
                    </p>
                    <p className='text-[10px] opacity-80'>Guest rating</p>
                  </motion.div>
                </div>

                {/* Side stack — seafood & mezze */}
                <div className='col-span-3 sm:col-span-2 sm:row-span-1'>
                  <HeroImageTile
                    src={seafoodImage.src}
                    alt={seafoodImage.alt}
                    label={seafoodImage.label}
                    className='aspect-[4/5]'
                    index={1}
                    reduceMotion={reduceMotion}
                  />
                </div>
                <div className='col-span-3 sm:col-span-2 sm:row-span-1'>
                  <HeroImageTile
                    src={mezzeImage.src}
                    alt={mezzeImage.alt}
                    label={mezzeImage.label}
                    className='aspect-[4/5]'
                    index={2}
                    reduceMotion={reduceMotion}
                  />
                </div>

                {/* Wide plating strip */}
                <div className='col-span-6'>
                  <HeroImageTile
                    src={wideImage.src}
                    alt={wideImage.alt}
                    label={wideImage.label}
                    className='aspect-[21/9]'
                    index={3}
                    reduceMotion={reduceMotion}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className='absolute bottom-6 left-1/2 z-10 -translate-x-1/2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}>
          <Link
            href='#about'
            className='group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-secondary'
            aria-label='Scroll to About section'>
            <span className='text-[10px] font-semibold uppercase tracking-[0.24em]'>
              Discover
            </span>
            <span className='flex h-9 w-6 items-start justify-center rounded-full border border-secondary/30 p-1.5'>
              <span className='h-2 w-1 rounded-full bg-secondary animate-scroll-hint' />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
