# Development standards

## Folder structure

- `src/app`: application shell and routing.
- `src/pages`: route-level composition.
- `src/components`: reusable UI grouped by domain.
- `src/services`: deterministic calculations and domain logic.
- `src/content`: curriculum and lesson manifests.
- `src/data`: typed questions, flashcards, formulas, and shared types.
- `src/hooks`: reusable React state and loading behavior.
- `public/content`: original Markdown lessons.
- `scripts`: validation and controlled maintenance utilities.
- `docs`: architecture, authoring, release, and curriculum documentation.
- `.local-research`: private verification records; never expose reference artifacts publicly.

## Naming conventions

- Components and component files: `PascalCase`.
- Hooks: `useCamelCase`.
- Services, variables, and functions: `camelCase`.
- Constants: descriptive `camelCase` or `UPPER_SNAKE_CASE` only for genuine global constants.
- Stable content IDs and routes: lowercase kebab case; never recycle an ID for unrelated content without an authorized migration.
- Tests: colocated `*.test.ts` or `*.test.tsx`.

## React conventions

Use function components, semantic HTML, controlled inputs, stable keys, and route-level composition. Keep calculations in services rather than JSX. Avoid effects for derived state. Lazy-load substantial lesson tools. Preserve local progress behavior and route compatibility.

## TypeScript conventions

Keep strict typing enabled. Prefer explicit domain types, discriminated unions, immutable transformations, and typed JSON assertions. Avoid `any`, non-null assertions without proof, and silent coercion. Validate untrusted browser storage before use.

## Markdown conventions

Use one H1, hierarchical headings, readable paragraphs, GFM tables, fenced examples where appropriate, and compatible math notation. Keep official outcome references distinct from original explanations. Use stable section headings for validation and deep links.

## Question format

Every question has a stable ID, lesson and curriculum classification, difficulty, estimated seconds, original stem, exactly three choices, one answer index, overall explanation, three option explanations, related formula IDs, and tags. Supplementary status must be explicit.

## Formula format

Every formula has a stable ID, name, expression, variables, meaning, worked example, common mistake, related lesson, curriculum classification, and tags. Include intuition and outcome/scope relationships when the schema requires them.

## Flashcard format

Every card has a stable ID, one study lesson, curriculum classification, concise front, self-contained back, and useful tags. Avoid duplicates, trivia, compound prompts, and ambiguous abbreviations.

## Testing requirements

Test new services, integrations, migrations, invalid inputs, boundaries, and regressions. Tests must be deterministic, offline, isolated, and meaningful. Run the full suite before release.

## Accessibility requirements

Use semantic elements, explicit labels, keyboard-operable controls, visible focus, meaningful status announcements, sufficient contrast, descriptive link text, and non-color-only feedback. Preserve reduced-motion preferences where animation exists.

## Performance requirements

Lazy-load substantial tools and route data, avoid unnecessary renders and duplicated datasets, keep calculations bounded, and monitor initial and route chunks. A release must not introduce an unexplained bundle warning or external runtime request.

## Review discipline

Review the diff for accidental content changes, private artifacts, unstable IDs, encoding damage, unrelated cleanup, and missing documentation. Record out-of-scope findings in `KNOWN_ISSUES.md`.

