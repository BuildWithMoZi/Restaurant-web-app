# Lucious — Restaurant & Cuisine

A premium single-page restaurant website for **Lucious Global Cuisine**, built with Next.js. The site showcases Mediterranean-inspired dining with hero imagery, signature dishes, full menu, chef specials, gallery, testimonials, and table reservations.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — scroll animations and micro-interactions
- Google Fonts — Cormorant Garamond (display) & DM Sans (body)

## Features

- Responsive layout with sticky navbar, footer, and back-to-top
- Animated hero with image grid and brand stats
- About, signature dishes, menu showcase, and chef specials sections
- Photo gallery and guest testimonials
- Reservation form with contact details
- SEO metadata and Open Graph tags
- Decorative botanical accents and hanging plant decor
- Reduced-motion support for accessibility

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or yarn / pnpm / bun)

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run dev:clean` | Clear `.next` cache, then start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
my-app/
├── public/
│   ├── logo.png                 # Brand logo (navbar, footer, favicon)
│   ├── hero/                    # Hero section images
│   └── hanginig-plants/         # Navbar & section decor assets
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, fonts, metadata
│   │   ├── page.tsx             # Home page (all sections)
│   │   └── globals.css          # Global styles & design tokens
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, SiteShell
│   │   ├── sections/            # Hero, About, Menu, Gallery, etc.
│   │   ├── ui/                  # Button, Container, DishCard, etc.
│   │   └── decor/               # Botanical & plant decorations
│   ├── data/                    # Menu, dishes, gallery, testimonials
│   └── lib/
│       ├── site.ts              # Central site config (brand, copy, hero)
│       ├── navigation.ts        # Nav links
│       └── hanging-plants.ts    # Decor asset paths
```

## Customization

Most brand copy, contact info, and hero images are managed in one place:

**`src/lib/site.ts`** — restaurant name, tagline, about text, hero images, address, phone, email, hours, and social links.

Menu and dish content lives in `src/data/`:

- `signature-dishes.ts` — featured plates
- `chef-specials.ts` — seasonal specials
- `full-menu.ts` / `menu.ts` — full menu categories
- `gallery.ts` — gallery images (remote Unsplash URLs)
- `testimonials.ts` — guest reviews

### Hero images

Current hero assets in `public/hero/`:

| File | Used for |
|------|----------|
| `terrace-v1.jpg` | Sunset Terrace (large tile) |
| `seafood-v1.png` | Restaurant entrance |
| `mezze-v1.png` | Food menu cover |
| `plating-v1.jpg` | Chef plating (wide tile) |

Update paths in `site.ts` when replacing images. Prefer `.png` for graphics with text; use `.jpg` for photographs.

## Build & Deploy

### Standard (Vercel / Node server)

```bash
npm run build
npm run start
```

### GitHub Pages (static export)

From the repo root, push to `main` with GitHub Actions enabled. Locally:

```bash
# PowerShell
$env:GITHUB_PAGES="true"; $env:GITHUB_REPOSITORY="user/repo-name"; npm run build:pages

# bash
GITHUB_PAGES=true GITHUB_REPOSITORY=user/repo-name npm run build:pages
```

Static files are output to `out/`.

Before deploying, set `NEXT_PUBLIC_SITE_URL` to your production domain (see `.env.example`).

### GitHub push

```bash
git init
git add .
git commit -m "Initial commit: Lucious restaurant site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Run these commands from the project root (`my-app/` folder when pushed as the repo).

## License

Private project — all rights reserved.
