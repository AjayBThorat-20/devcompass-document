Documentation site for [DevCompass](https://www.npmjs.com/package/devcompass) — a free, open-source CLI dependency health checker — built with Next.js (App Router), Tailwind CSS, and Redux Toolkit.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `src/app/` — routes: `/`, `/getting-started`, `/features`, `/cli-reference`, `/configuration`, `/faq`
- `src/Components/` — one folder per route (matching pattern: section components + a `page.tsx` barrel export), plus shared `UI/`, `Layout/`, `Header/`, `Footer/`, `Buttons/`
- `src/constants/` — doc content as data (`nav.ts`, `features.ts`, `commands.ts`, `faq.ts`, `config.ts`), barrel-exported from `page.ts`
- `src/store/` — Redux slice for theme + nav menu state
- `src/hooks/` — `useScrollReveal`, `useMagnetic`

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run test    # run jest unit tests
npm run lint    # eslint
```
# devcompass-document
