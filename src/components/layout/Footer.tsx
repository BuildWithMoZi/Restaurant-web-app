import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import { OliveBranch } from "@/components/decor/BotanicalSprites";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { footerNav } from "@/lib/navigation";
import { site } from "@/lib/site";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-secondary transition-all duration-300 hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border bg-[color-mix(in_oklab,var(--brand-secondary),transparent_92%)] text-secondary-3">
      <Container className="relative py-16 sm:py-20">
        <div className="mb-10 flex justify-center">
          <OliveBranch className="w-32 text-secondary-3/50" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="space-y-5">
            <Link href="#home" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={site.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-secondary-3/20"
              />
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight">
                  {site.shortName}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary-3/70">
                  {site.locationLine}
                </p>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-secondary-3/75">
              {site.description}
            </p>
            <Button href="#reservation" variant="secondary" size="sm">
              Book a Table
            </Button>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-secondary-3/60">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-3/80 transition-colors hover:text-secondary-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-secondary-3/60">
              Experience
            </h3>
            <ul className="space-y-2.5">
              {footerNav.experience.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-3/80 transition-colors hover:text-secondary-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-secondary-3/60">
              Visit Us
            </h3>
            <address className="space-y-3 not-italic text-sm leading-relaxed text-secondary-3/80">
              <p>{site.address}</p>
              <p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-secondary-3"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-secondary-3"
                >
                  {site.email}
                </a>
              </p>
              <p className="pt-2 text-secondary-3/65">{site.hours.weekdays}</p>
              <p className="text-secondary-3/65">{site.hours.weekend}</p>
            </address>

            <div className="mt-6 flex gap-3">
              <SocialIcon href={site.social.instagram} label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon href={site.social.facebook} label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={site.social.tripadvisor} label="TripAdvisor">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <circle cx="6.5" cy="13" r="3.5" />
                  <circle cx="17.5" cy="13" r="3.5" />
                  <path d="M10 13h4M6.5 9.5V6M17.5 9.5V6M12 4v2" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-secondary-3/15 pt-8 text-center text-xs text-secondary-3/55 sm:flex-row sm:text-left">
          <p>
            © {year} {site.shortName}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.18em]">
            Crafted with Mediterranean elegance
          </p>
        </div>
      </Container>
    </footer>
  );
}
