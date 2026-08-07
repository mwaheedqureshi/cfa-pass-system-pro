# Developer Guide

## Local workflow

1. Install Node.js 20 or newer and run `npm install`.
2. Start locally with `npm run dev`.
3. Before handoff, run `npm run check`.

## Quality commands

- `npm run validate-content`: IDs, references, counts, lesson sections, and registrations.
- `npm run lint`: source quality.
- `npm run test`: calculation, persistence, search, and component behavior.
- `npm run build`: TypeScript and optimized offline production assets.

Do not mutate progress storage keys or reset user data. New fields should be optional during parsing and supplied by defaults. Preserve GitHub Pages basename behavior and avoid runtime APIs.

## Folder structure

Application routes live in `src/app`; reusable components in `src/components`; pure logic in `src/services`; structured study content in `src/data`; Markdown lessons in `public/content`; and repository checks in `scripts`.

