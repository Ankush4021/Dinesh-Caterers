# Dinesh Caterers — React + Vite + Tailwind

A multi-page React website for Dinesh Caterers, fully styled with Tailwind utility classes (tiny base stylesheet only).

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown by Vite.

For a production build, run `npm run build`.

## Structure

- `src/pages/` — Home, About, Services, Our Approach, Contact (each page just stacks its sections).
- `src/sections/<page>/` — one component per page section (e.g. home/Hero, home/Intro).
- `src/components/` — shared navigation, footer, buttons, cards, `Reveal` (scroll fade) and page transitions.
- `src/data/` — service and location content.
- `src/styles.css` — Tailwind layers plus a few base styles.

The button water-fill effect is done with Tailwind `before:` classes. Framer Motion handles page transitions, the hero heading and scroll reveals (`Reveal`, replays on every scroll).

Contact and location information is based on the details provided for this project. Please confirm business contact/social URLs before launch.
