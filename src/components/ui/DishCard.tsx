"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { SignatureDish } from "@/data/signature-dishes";

type DishCardProps = {
  dish: SignatureDish;
  index?: number;
};

export function DishCard({ dish, index = 0 }: DishCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: reduceMotion ? 0 : index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      {/* Visual */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ background: dish.gradient }}
        />
        {dish.imageUrl && (
          <Image
            src={dish.imageUrl}
            alt={dish.name}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,13,20,0.45)_0%,transparent_60%)]" />
        {dish.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-secondary-2 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary-3 shadow-sm">
            {dish.badge}
          </span>
        )}
        <div className="absolute inset-0 flex items-end p-5">
          <span className="font-display text-3xl text-secondary-3/90 drop-shadow-sm">
            {dish.name.split(" ")[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl leading-snug text-secondary sm:text-2xl">
            {dish.name}
          </h3>
          <p className="shrink-0 font-display text-lg text-secondary-2">
            {dish.price}
          </p>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {dish.description}
        </p>
        {dish.tags && dish.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {dish.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-secondary/15 bg-secondary/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Hover shine */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.08)_50%,transparent_60%)]" />
      </div>
    </motion.article>
  );
}
