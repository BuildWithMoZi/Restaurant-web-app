"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-5 right-5 z-[70] sm:bottom-7 sm:right-7"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
        >
          <Link
            href="#home"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/90 text-secondary shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/10"
            aria-label="Back to top"
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
              <path d="M12 19V6" />
              <path d="M6 12l6-6 6 6" />
            </svg>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

