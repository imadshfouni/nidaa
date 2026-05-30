# brAInify Landing Page

Production-ready marketing landing page for **brAInify** — an AI-powered learning ecosystem.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI primitives
├── data/
│   └── content.ts    # Copy, paths, testimonials, stats
└── App.tsx
```

Edit marketing copy and data arrays in `src/data/content.ts`.

## Figma alignment

Visual tokens (colors, spacing, typography) should be tuned against the Figma file once exports are available. Share PNG/SVG frames from node `5253-2` for pixel-perfect refinement.
