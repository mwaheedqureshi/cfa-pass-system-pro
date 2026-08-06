# CFA PASS SYSTEM — Professional Edition

An independent, offline-first CFA Level I study platform built with React, TypeScript, Vite, and Tailwind CSS. It provides a scalable content engine for Markdown lessons, original practice questions, formula references, flashcards, search, and local progress tracking.

> CFA PASS SYSTEM is not affiliated with or endorsed by CFA Institute. CFA® is a registered trademark owned by CFA Institute. Curriculum outcome references are clearly separated from independently written explanations and questions.

## Current content status

The application models all ten Level I topic groups. This milestone publishes one complete, independently written Quantitative Methods lesson: **Returns of Financial Assets and Instruments**, with 20 original questions, 20 flashcards, and nine formula records. All other topics are labeled **Content pending**; the application does not claim that 99 lessons are complete.

The original plain-HTML application is preserved under `legacy/html-prototype/`.

The requested official 2027 topic-outline PDF was not present in the source repository or supplied attachment. If it is available lawfully, place the unmodified file at `public/docs/OFFICIAL_2027_LEVEL_I_TOPIC_OUTLINE.pdf`.

## Technology

- React, TypeScript, Vite, Tailwind CSS, React Router
- `react-markdown` with `remark-gfm`
- Lucide icons
- Browser `localStorage` (no backend or authentication)
- Vitest, Testing Library, ESLint

No runtime APIs, analytics, paid services, or external content requests are used. After dependencies are installed, the production application loads only bundled files and local Markdown.

## Install and run

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints the local address. Other commands:

```bash
npm run build
npm run preview
npm run lint
npm run test
npm run validate-content
npm run check
```

`npm run check` validates content, lints source, runs unit tests, and creates a production build.

## GitHub Pages deployment

The Vite base is `/cfa-pass-system-pro/`, matching the expected repository name. The workflow in `.github/workflows/deploy-pages.yml` runs the complete check and deploys `dist` on pushes to `main`.

If the repository name changes, either edit `base` in `vite.config.ts` or build with:

```bash
VITE_BASE_PATH=/new-repository-name/ npm run build
```

For a custom domain deployed at its root, use `/`.

Because the app uses client-side routes, navigation inside the deployed application works normally. A direct refresh on a nested route depends on the host's SPA fallback behavior; opening the repository root is the most portable GitHub Pages entry point.

## Content authoring

### Add a lesson

1. Add a Markdown file under `public/content/<topic>/`.
2. Add a typed manifest record to `src/content/lessonManifest.ts`.
3. Add original questions under `src/data/questions/`, flashcards under `src/data/flashcards/`, and formulas under `src/data/formulas/`.
4. Ensure IDs and cross-references match.
5. Run `npm run validate-content` and `npm run check`.

Manifest fields are `id`, `topicId`, `title`, `filePath`, `officialModuleTitle`, `estimatedMinutes`, `difficulty`, `order`, `status`, `questionSetId`, `flashcardSetId`, `formulaIds`, and `officialLearningOutcomes`.

### Markdown blocks

Standard GFM headings, tables, lists, emphasis, and links are supported. Callouts use:

```markdown
> [!INFO]
> Context or definition.

> [!TIP]
> Exam-focused guidance.

> [!WARNING]
> Common mistake or caution.
```

Dedicated visual blocks use fenced languages:

````markdown
```formula
R = (P1 - P0 + D) / P0
```

```example
Show the inputs, process, and result.
```

```calculator
List calculator keystrokes and sign conventions.
```
````

Do not place untrusted HTML in Markdown. Rendering does not use `dangerouslySetInnerHTML`.

### Question schema

Each question has `id`, `lessonId`, `topicId`, `officialLearningOutcome`, `difficulty`, `estimatedSeconds`, `stem`, exactly three `choices`, `correctChoiceIndex`, `explanation`, three `incorrectChoiceExplanations`, `relatedFormulaIds`, and `tags`.

### Formula schema

Each formula has `id`, `name`, `expression`, `meaning`, a `variables` map, `workedExample`, `commonMistake`, and `relatedLessonId`.

### Flashcard schema

Each flashcard has `id`, `lessonId`, `front`, `back`, and `tags`.

## Progress and privacy

Progress uses the versioned key `cfa-pass-progress`. Safe defaults are restored if stored JSON is missing or malformed. Completion, bookmarks, notes, quiz answers, confidence, flashcard ratings, exam date, daily goal, recent activity, last lesson, and theme remain on the learner's device. Clearing browser storage removes them.

## Educational content policy

Write original explanations, examples, and questions. Do not reproduce CFA Institute curriculum text, official questions, provider notes, logos, or visual identity. Published learning outcomes may be referenced as curriculum metadata and must be labeled separately from independent teaching content.
