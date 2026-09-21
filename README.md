# Yashika Singh — Portfolio

Personal portfolio, rebuilt as a React + TypeScript + Vite app. Same design,
content, and sections as the original static site — just organized into
components.

## Stack

- React 18 + TypeScript + Vite
- Plain CSS (design tokens in `src/variables.css`), one stylesheet per
  component, imported globally from `src/index.css`

## Getting started

```
npm install
npm run dev
```

Open the printed local URL (defaults to `http://localhost:5173`).

To build for production:

```
npm run build
npm run preview
```

## Portrait & project images

Images live in `public/images/`. The hero portrait is
`public/images/portrait.jpg` — replace it with a new square image to update
it (referenced from `src/components/Hero/Hero.tsx`).

## Bridge font

Bridge is not bundled. Add `Bridge.woff2` (or `.otf` / `.ttf`) to
`public/fonts/`. See `public/fonts/README.txt`. Until then, headings fall
back to Bebas Neue.

## Folder structure

```
public/
  fonts/          → self-hosted fonts (Zen Dots, PT Serif, Bebas Neue fallback)
  images/         → portrait + project screenshots
  svg/            → favicon, hero background curves
src/
  components/
    Nav/          → fixed top navigation (mobile toggle + scrollspy)
    Hero/         → hero / intro section
    About/        → about section
    Experience/   → experience timeline
    Projects/     → project cards grid
    Skills/       → skills grid
    Achievements/ → achievement highlights
    Contact/      → contact section + links
    Footer/       → site footer
    ui/           → shared primitives (SectionHead, …)
  fonts.css       → @font-face declarations
  variables.css   → colors, fonts, spacing tokens
  base.css        → reset, body background, shared components
  responsive.css  → tablet and mobile rules
  index.css       → imports everything above, in cascade order
  App.tsx
  main.tsx
```

## Accessibility & motion

- Keyboard focus states are visible on all interactive elements.
- `prefers-reduced-motion` is respected globally (see `src/base.css`).
- Semantic landmarks (`header`, `main`, `footer`) are used throughout.
