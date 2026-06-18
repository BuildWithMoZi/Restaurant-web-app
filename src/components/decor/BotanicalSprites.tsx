type SpriteProps = {
  className?: string;
};

/** Hanging vine — top-left corner accent */
export function VineLeft({ className = "" }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 180 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M20 0C20 80 45 120 55 180C65 240 40 280 30 320"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M55 40C75 70 90 95 85 130C80 165 60 190 48 220"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.4"
      />
      <ellipse cx="72" cy="118" rx="14" ry="8" fill="currentColor" opacity="0.35" transform="rotate(-25 72 118)" />
      <ellipse cx="48" cy="198" rx="12" ry="7" fill="currentColor" opacity="0.3" transform="rotate(15 48 198)" />
      <ellipse cx="38" cy="268" rx="13" ry="7" fill="currentColor" opacity="0.28" transform="rotate(-8 38 268)" />
      <circle cx="90" cy="95" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="62" cy="175" r="3.5" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

/** Hanging vine — top-right corner accent */
export function VineRight({ className = "" }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 180 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} scale-x-[-1]`}
      aria-hidden
    >
      <path
        d="M20 0C20 80 45 120 55 180C65 240 40 280 30 320"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M55 40C75 70 90 95 85 130C80 165 60 190 48 220"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.4"
      />
      <ellipse cx="72" cy="118" rx="14" ry="8" fill="currentColor" opacity="0.35" transform="rotate(-25 72 118)" />
      <ellipse cx="48" cy="198" rx="12" ry="7" fill="currentColor" opacity="0.3" transform="rotate(15 48 198)" />
      <circle cx="90" cy="95" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/** Olive branch divider motif */
export function OliveBranch({ className = "" }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M4 12H116" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path
        d="M60 12C52 8 48 4 44 8C40 12 44 16 48 14C52 12 56 10 60 12C64 14 68 16 72 14C76 12 80 8 76 8C72 4 68 8 60 12Z"
        fill="currentColor"
        opacity="0.5"
      />
      <ellipse cx="52" cy="10" rx="3" ry="5" fill="currentColor" opacity="0.45" transform="rotate(-30 52 10)" />
      <ellipse cx="68" cy="10" rx="3" ry="5" fill="currentColor" opacity="0.45" transform="rotate(30 68 10)" />
      <circle cx="56" cy="14" r="2.5" fill="currentColor" opacity="0.55" />
      <circle cx="64" cy="14" r="2.5" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

/** Large ceiling vine for hero — drapes from top */
export function CeilingVine({ className = "" }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 220 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M110 0V60M110 60C85 90 70 130 75 175C80 220 95 260 88 310C82 355 65 390 55 420"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M110 40C140 75 165 110 158 155C152 195 125 230 115 275"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.38"
      />
      <path
        d="M110 50C75 85 55 125 62 170C68 210 90 245 98 290"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.35"
      />
      <ellipse cx="130" cy="140" rx="18" ry="10" fill="currentColor" opacity="0.28" transform="rotate(-20 130 140)" />
      <ellipse cx="88" cy="210" rx="16" ry="9" fill="currentColor" opacity="0.26" transform="rotate(12 88 210)" />
      <ellipse cx="72" cy="300" rx="15" ry="8" fill="currentColor" opacity="0.24" transform="rotate(-6 72 300)" />
      <ellipse cx="118" cy="250" rx="14" ry="8" fill="currentColor" opacity="0.22" transform="rotate(18 118 250)" />
      <circle cx="145" cy="115" r="5" fill="currentColor" opacity="0.45" />
      <circle cx="95" cy="185" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="68" cy="265" r="4.5" fill="currentColor" opacity="0.38" />
    </svg>
  );
}

/** Delicate leaf cluster — mid-side accent */
export function LeafCluster({ className = "" }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M50 10C30 35 20 60 35 85C45 100 55 110 50 120" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="28" cy="50" rx="20" ry="10" fill="currentColor" opacity="0.25" transform="rotate(-35 28 50)" />
      <ellipse cx="72" cy="65" rx="18" ry="9" fill="currentColor" opacity="0.22" transform="rotate(25 72 65)" />
      <ellipse cx="42" cy="88" rx="14" ry="7" fill="currentColor" opacity="0.2" transform="rotate(-10 42 88)" />
    </svg>
  );
}

/** Footer corner foliage */
export function FooterFoliage({ className = "" }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M0 60C30 50 50 30 80 35C110 40 130 20 160 25C180 28 190 15 200 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.4"
      />
      <ellipse cx="40" cy="48" rx="18" ry="9" fill="currentColor" opacity="0.22" />
      <ellipse cx="100" cy="38" rx="16" ry="8" fill="currentColor" opacity="0.2" />
      <ellipse cx="155" cy="30" rx="14" ry="7" fill="currentColor" opacity="0.18" />
    </svg>
  );
}
