"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { mainNav } from "@/lib/navigation";
import { assetPath } from "@/lib/asset-path";
import { site } from "@/lib/site";
import { NavbarPlantDecor } from "@/components/decor/NavbarPlantDecor";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className='fixed inset-x-0 top-0 z-50 overflow-visible'>
      <div className='relative overflow-visible'>
        <Container
          as='nav'
          className='relative overflow-visible py-2'
          aria-label='Main navigation'>
          <div className='relative overflow-visible'>
            {/* Glass bar — separate layer so plant can sit above/below it */}
            <div
              className={`pointer-events-none absolute inset-0 z-0 rounded-2xl border transition-all duration-500 ${
                scrolled ?
                  "border-border/80 bg-card/85 shadow-[var(--shadow-soft)] backdrop-blur-xl"
                : "border-transparent bg-card/40 backdrop-blur-md"
              }`}
              aria-hidden
            />

            <NavbarPlantDecor />

            <div className='relative z-30 flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6'>
              {/* Brand */}
              <Link
                href='#home'
                className='group flex shrink-0 items-center gap-3'
                onClick={closeMobile}>
                <Image
                  src={assetPath("/logo.png")}
                  alt={site.name}
                  width={48}
                  height={48}
                  className='h-10 w-10 rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12'
                  priority
                />
                <div className='hidden leading-tight sm:block'>
                  <span className='font-display text-lg font-semibold tracking-tight text-secondary'>
                    {site.shortName}
                  </span>
                  <span className='block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                    Global Cuisine
                  </span>
                </div>
              </Link>

              {/* Desktop links */}
              <ul className='hidden items-center gap-1 xl:flex'>
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className='rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:bg-secondary/8 hover:text-secondary'>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA + mobile toggle */}
              <div className='relative z-30 flex items-center gap-2 sm:gap-3'>
                <Button
                  href='#reservation'
                  size='sm'
                  className='relative z-30 hidden border border-secondary-3/30 !bg-secondary/0 backdrop-blur-md hover:!bg-secondary/10 sm:inline-flex'>
                  Reserve
                </Button>

                <button
                  type='button'
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-secondary transition-colors hover:bg-secondary/10 xl:hidden'
                  aria-expanded={mobileOpen}
                  aria-controls='mobile-nav'
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileOpen((o) => !o)}>
                  <span className='sr-only'>Menu</span>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    aria-hidden>
                    {mobileOpen ?
                      <>
                        <path d='M6 6l12 12M18 6L6 18' />
                      </>
                    : <>
                        <path d='M4 7h16M4 12h16M4 17h16' />
                      </>
                    }
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className='fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm xl:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
              onClick={closeMobile}
              aria-hidden
            />
            <motion.div
              id='mobile-nav'
              className='fixed inset-x-4 top-[5.5rem] z-50 overflow-hidden rounded-2xl border border-border bg-card/95 shadow-[var(--shadow-float)] backdrop-blur-xl xl:hidden'
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                ease: "easeOut",
              }}>
              <ul className='flex flex-col p-3'>
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : i * 0.04,
                      duration: 0.25,
                    }}>
                    <Link
                      href={item.href}
                      className='block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.14em] text-foreground/85 transition-colors hover:bg-secondary/8 hover:text-secondary'
                      onClick={closeMobile}>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className='border-t border-border p-4'>
                <Button
                  href='#reservation'
                  className='w-full'
                  onClick={closeMobile}>
                  Reserve a Table
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
