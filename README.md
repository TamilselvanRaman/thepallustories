# 🪡 The Pallu Stories — Premium Women's Fashion Storefront

A luxury women's fashion e-commerce storefront built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Designed to feel premium, responsive, and alive — inspired by high-end jewellery and saree brands.

---

## ✨ Features

- **Scrolling Announcement Bar** — marquee-style offer ticker (Free Shipping, COD, Returns)
- **Hero Section** — full-screen immersive hero with animated stats band and CTA buttons
- **Product Collection** — filterable product grid with hover micro-animations
- **Product Detail Page** — dynamic `[slug]` route with image gallery, size/color pickers, and add-to-cart
- **Cart Drawer** — slide-in cart panel with quantity controls and order summary
- **Checkout Page** — multi-step form (address → payment → confirmation)
- **Brand Story / About** — editorial-style narrative page
- **Testimonials** — customer review carousel
- **Instagram Reel Grid** — embedded video reel section
- **Footer** — full-featured links, newsletter signup, and social icons

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animations | [Framer Motion](https://www.framer.com/motion/) + GSAP |
| Icons | [Lucide React](https://lucide.dev) |
| State | React Context API (Cart) |
| Fonts | Hanken Grotesk (display) + Inter (body) |

---

## 📁 Project Structure

```
artisan-store/
├── public/
│   ├── products/          # Product images
│   ├── instagram/         # Instagram reel thumbnails
│   └── videos/            # Reel video files
├── src/
│   ├── app/
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout (Navbar + Footer + CartDrawer)
│   │   ├── globals.css        # Global styles & design tokens
│   │   ├── about/             # Brand story page
│   │   ├── collection/        # Product listing page
│   │   ├── checkout/          # Checkout page
│   │   └── products/[slug]/   # Dynamic product detail page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Announcement bar + main navigation
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   └── CartDrawer.tsx # Slide-in cart panel
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   ├── CuratedGrid.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── VideoReel.tsx
│   │   └── ui/
│   │       └── ProductCard.tsx
│   ├── context/
│   │   └── CartContext.tsx    # Global cart state
│   └── lib/
│       └── products.ts        # Product data & types
├── tailwind.config.ts         # Brand color tokens & typography
├── next.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## 🎨 Design System

The brand design system is defined in `tailwind.config.ts` and `globals.css`.

### Key Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#8d4b00` | CTAs, active nav, badges |
| `ink-brown` | `#3E2C1C` | Headings, body text |
| `warm-beige` | `#EED9C4` | Backgrounds, cards |
| `secondary-fixed` | `#f1dfd9` | Announcement bar, subtle fills |
| `outline-variant` | `#dbc2b0` | Borders, dividers |

### Typography

- **Display / Headings:** `Hanken Grotesk` — bold, modern, slightly condensed
- **Body / UI:** `Inter` — clean, highly legible

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js dev server with hot reload |
| `npm run build` | Create optimised production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint checks |

---

## 📝 Notes

- All product data lives in `src/lib/products.ts` — update this file to add/edit products.
- The cart is persisted in React Context (in-memory only — no backend yet).
- Images should be placed in `public/products/` and referenced by filename in `products.ts`.

---

## 📄 License

Private project — © 2025 The Pallu Stories. All rights reserved.
