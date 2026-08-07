# Architecture

CFA PASS SYSTEM is a client-only React and TypeScript application built with Vite. It has no backend or runtime network dependency.

## Layers

- `src/content`: typed curriculum and lesson manifest.
- `public/content`: independently written Markdown lessons loaded locally.
- `src/data`: questions, flashcards, and formulas.
- `src/services`: content, search, progress, and calculation logic.
- `src/components`: reusable UI and lesson tools.
- `src/pages`: route-level features.

Routes are declared centrally. Practice, flashcards, formulas, datasets, and interactive tools use local lazy chunks. Progress is stored under the versioned `cfa-pass-progress` localStorage key. Parsing merges safe defaults so additive fields remain backward compatible.

The lesson manifest is the navigation authority. Dataset references must resolve to manifest lesson and formula IDs. Modules 9–10 use explicitly labeled independent scope statements; Modules 1–8 retain their existing outcome metadata.

