import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-secondary text-secondary-3 shadow-[var(--shadow-soft)] hover:bg-[color-mix(in_oklab,var(--brand-secondary),#000_12%)]",
  secondary:
    "bg-secondary-2 text-secondary-3 shadow-[var(--shadow-soft)] hover:bg-[color-mix(in_oklab,var(--brand-secondary-2),#000_10%)]",
  outline:
    "border border-secondary/30 bg-transparent text-secondary hover:bg-secondary/8",
  ghost: "bg-transparent text-secondary hover:bg-secondary/8",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs tracking-[0.14em]",
  md: "h-11 px-6 text-sm tracking-[0.16em]",
  lg: "h-12 px-8 text-sm tracking-[0.18em]",
};

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = ButtonBaseProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

export function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    variant = "primary",
    size = "md",
    href,
    ...rest
  } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...(rest as Omit<ButtonAsLink, "href">)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(rest as Omit<ButtonAsLink, "href">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
