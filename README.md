




# CFA PASS SYSTEM — Professional Edition

An independent, offline-first CFA Level I study platform built with React, TypeScript, Vite, and Tailwind CSS. It provides a scalable content engine for Markdown lessons, original practice questions, formula references, flashcards, search, and local progress tracking.

> CFA PASS SYSTEM is not affiliated with or endorsed by CFA Institute. CFA® is a registered trademark owned by CFA Institute. Curriculum outcome references are clearly separated from independently written explanations and questions.

## Current content status

The application models all ten Level I topic groups. Quantitative Methods v1.6.6 is verified and content-frozen across 11 official modules presented through 12 study lessons. Its public banks contain 545 official and 10 supplementary questions, 545 official and 10 supplementary flashcards, and 155 official and 10 supplementary formulas.

Economics v1.7.9 is verified and content-frozen across all 8 official 2027 modules (ECO-LM1 through ECO-LM8) presented through 8 study lessons, mirroring the Quantitative certification. Its public banks contain 325 official and 85 supplementary questions, 325 official and 85 supplementary flashcards, and 42 official formulas, plus 14 registered interactive tools, 8 chapter exams, and a 60-question comprehensive assessment balanced across all 8 modules.

Financial Statement Analysis v1.8.12 is verified and content-frozen across all 12 official 2027 modules and all 53 LOS. Its public banks contain 475 official and 120 supplementary questions, matching flashcards, 110 formulas/metrics, 21 tools, and 12 chapter exams. This completes FSA only; other Level I topics remain pending.

Corporate Issuers v1.9.8 is verified and content-frozen across all 7 official modules and all 22 LOS (100%). CI-LM1–LM7 together contain 285 official-target and 75 supplementary questions, matching flashcards, 10 new production formulas, 76 original exhibits, 97 worked examples, and 13 interactive tools. Aggregate lesson, assessment, formula, tool, mock, route, search, progress, statistics, encoding, and ownership certification is complete.

The original plain-HTML application is preserved under `legacy/html-prototype/`.

The requested official 2027 topic-outline PDF was not present in the source repository or supplied attachment. If it is available lawfully, place the unmodified file at `public/docs/OFFICIAL_2027_LEVEL_I_TOPIC_OUTLINE.pdf`.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Developer guide](docs/DEVELOPER_GUIDE.md)
- [Authoring guide](docs/AUTHORING_GUIDE.md)
- [v1.5.1 release notes](docs/RELEASE_NOTES_v1.5.1.md)
- [v1.6.0 release notes](docs/RELEASE_NOTES_v1.6.0.md)
- [v1.6.0 release notes](docs/RELEASE_NOTES_v1.6.0.md)

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
npm run validate-quant-verification
npm run validate-economics-verification
npm run validate-fsa-mapping
npm run validate-fsa-content
npm run validate-corporate-issuers-content
npm run check
```

`npm run check` validates mocks, content, curriculum mapping, and Quantitative, Economics, and FSA verification evidence; then it lints source, runs unit tests, and creates a production build.

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

Each question has `id`, `lessonId`, `topicId`, either `officialLearningOutcome` or `scopeStatement`, `difficulty`, `estimatedSeconds`, `stem`, exactly three `choices`, `correctChoiceIndex`, `explanation`, three `incorrectChoiceExplanations`, `relatedFormulaIds`, and `tags`.

Modules 9–10 use independently authored `scopeStatement` curriculum mappings because authorized official outcome wording was unavailable. These statements are not official CFA Institute Learning Outcomes.

### Formula schema

Each formula has `id`, `name`, `expression`, `meaning`, a `variables` map, `workedExample`, `commonMistake`, and `relatedLessonId`.

### Flashcard schema

Each flashcard has `id`, `lessonId`, `front`, `back`, and `tags`.

## Progress and privacy

Progress uses the versioned key `cfa-pass-progress`. Safe defaults are restored if stored JSON is missing or malformed. Completion, bookmarks, notes, quiz answers, confidence, flashcard ratings, exam date, daily goal, recent activity, last lesson, and theme remain on the learner's device. Clearing browser storage removes them.

## Educational content policy

Write original explanations, examples, and questions. Do not reproduce CFA Institute curriculum text, official questions, provider notes, logos, or visual identity. Published learning outcomes may be referenced as curriculum metadata and must be labeled separately from independent teaching content.
