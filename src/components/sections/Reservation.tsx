"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { sectionDarkBg } from "@/lib/section-surfaces";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const copy = {
  eyebrow: "Reservations",
  title: "Reserve your table for golden hour.",
  description:
    "A premium dining experience is best enjoyed with a reserved seat — book a table in seconds, and we’ll take care of the rest.",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-3/70">
      {children}
    </span>
  );
}

function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-12 w-full rounded-2xl border border-secondary-3/18 bg-secondary-3/8 px-4 text-sm text-secondary-3 placeholder:text-secondary-3/45 backdrop-blur-md transition-all focus:border-secondary-3/30 focus:bg-secondary-3/10 focus:outline-none ${className}`}
    />
  );
}

function Textarea({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`min-h-28 w-full resize-none rounded-2xl border border-secondary-3/18 bg-secondary-3/8 px-4 py-3 text-sm text-secondary-3 placeholder:text-secondary-3/45 backdrop-blur-md transition-all focus:border-secondary-3/30 focus:bg-secondary-3/10 focus:outline-none ${className}`}
    />
  );
}

function Select({
  className = "",
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`h-12 w-full appearance-none rounded-2xl border border-secondary-3/18 bg-secondary-3/8 px-4 text-sm text-secondary-3 backdrop-blur-md transition-all focus:border-secondary-3/30 focus:bg-secondary-3/10 focus:outline-none ${className}`}
    >
      {children}
    </select>
  );
}

export function Reservation() {
  const reduceMotion = useReducedMotion();

  const guestOptions = useMemo(
    () => Array.from({ length: 12 }).map((_, i) => String(i + 1)),
    [],
  );

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim()) return setError("Please enter your name.");
    if (!form.phone.trim()) return setError("Please enter your phone number.");
    if (!form.date) return setError("Please select a date.");
    if (!form.time) return setError("Please select a time.");

    setStatus("submitting");

    // UI-only submission (no backend yet)
    await new Promise((r) => setTimeout(r, reduceMotion ? 0 : 650));
    setStatus("success");

    // reset after a moment
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("idle");
    setForm((prev) => ({ ...prev, notes: "" }));
  }

  return (
    <Section id="reservation" className={sectionDarkBg}>
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

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_420px] lg:gap-10">
          {/* Form */}
          <ScrollReveal delay={0.1} className="order-2 lg:order-1">
            <div className="rounded-3xl border border-secondary-3/18 bg-secondary-3/6 p-6 backdrop-blur-md sm:p-8">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <FieldLabel>Full name</FieldLabel>
                    <Input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </label>
                  <label className="space-y-2">
                    <FieldLabel>Phone</FieldLabel>
                    <Input
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91 9xxxx xxxxx"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <label className="space-y-2 sm:col-span-1">
                    <FieldLabel>Date</FieldLabel>
                    <Input
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                    />
                  </label>
                  <label className="space-y-2 sm:col-span-1">
                    <FieldLabel>Time</FieldLabel>
                    <Input
                      type="time"
                      value={form.time}
                      onChange={(e) => update("time", e.target.value)}
                    />
                  </label>
                  <label className="space-y-2 sm:col-span-1">
                    <FieldLabel>Guests</FieldLabel>
                    <div className="relative">
                      <Select
                        value={form.guests}
                        onChange={(e) => update("guests", e.target.value)}
                      >
                        {guestOptions.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </Select>
                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-3/70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </label>
                </div>

                <label className="space-y-2">
                  <FieldLabel>Notes (optional)</FieldLabel>
                  <Textarea
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Allergies, celebrations, seating preferences…"
                  />
                </label>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      className="rounded-2xl border border-secondary-2/25 bg-secondary-2/10 px-4 py-3 text-sm text-secondary-3"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    size="lg"
                    className="sm:w-auto"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Booking…" : "Confirm Reservation"}
                  </Button>

                  <p className="text-xs text-secondary-3/65">
                    By submitting, you agree we may contact you to confirm.
                  </p>
                </div>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      className="rounded-2xl border border-secondary-3/18 bg-secondary/15 px-4 py-4 text-secondary-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-3/75">
                        Reservation received
                      </p>
                      <p className="mt-2 font-display text-xl">
                        We’ll confirm your table shortly.
                      </p>
                      <p className="mt-1 text-sm text-secondary-3/75">
                        {form.date} • {form.time} • {form.guests} guests
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact / info card */}
          <ScrollReveal delay={0.12} className="order-1 lg:order-2">
            <div className="rounded-3xl border border-secondary-3/18 bg-secondary-3/6 p-6 backdrop-blur-md sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-3/65">
                Reservations desk
              </p>
              <p className="mt-4 font-display text-3xl text-secondary-3">
                {site.shortName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-secondary-3/75">
                {site.address}
              </p>

              <div className="mt-7 space-y-4 text-sm text-secondary-3/80">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-3/60">
                    Phone
                  </p>
                  <a
                    className="mt-1 inline-block font-medium text-secondary-3 hover:text-secondary-3"
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                  >
                    {site.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-3/60">
                    Email
                  </p>
                  <a
                    className="mt-1 inline-block font-medium text-secondary-3 hover:text-secondary-3"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-3/60">
                    Hours
                  </p>
                  <p className="mt-1 text-secondary-3/75">{site.hours.weekdays}</p>
                  <p className="text-secondary-3/75">{site.hours.weekend}</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-secondary-3/16 bg-secondary-3/8 p-5">
                <p className="font-display text-xl text-secondary-3">
                  Prefer instant booking?
                </p>
                <p className="mt-2 text-sm text-secondary-3/75">
                  We can wire this to WhatsApp/Email/Calendly in the next step.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}

