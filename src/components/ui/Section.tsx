import type { ReactNode } from "react";
import { sectionBright, sectionShell } from "@/lib/section-surfaces";

type SectionProps = {
  id: string;
  children: ReactNode;
  /** default = body tone (About); bright = cream zebra band */
  tone?: "default" | "bright";
  className?: string;
};

export function Section({
  id,
  children,
  tone = "default",
  className = "",
}: SectionProps) {
  const surface = tone === "bright" ? sectionBright : "";

  return (
    <section
      id={id}
      className={`${sectionShell} ${surface} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
