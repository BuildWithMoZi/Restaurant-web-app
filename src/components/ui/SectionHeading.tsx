import { OliveBranch } from "@/components/decor/BotanicalSprites";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-secondary-3" : "text-secondary";
  const descColor = light ? "text-secondary-3/75" : "text-muted-foreground";
  const eyebrowColor = light ? "text-secondary-3/60" : "text-muted-foreground";
  const branchColor = light ? "text-secondary-3/50" : "text-secondary opacity-70";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.26em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <OliveBranch
        className={`mx-auto my-4 w-28 ${branchColor} ${align === "left" ? "md:mx-0" : ""}`}
      />
      <h2
        className={`font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
