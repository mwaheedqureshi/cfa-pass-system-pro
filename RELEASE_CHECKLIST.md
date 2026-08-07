# Release checklist

Copy this checklist into the release work log and mark every applicable item.

## Planning

- [ ] Read `PROJECT_MASTER.md`, `ROADMAP.md`, and `KNOWN_ISSUES.md`.
- [ ] Confirm version, release title, authorized scope, exclusions, and acceptance criteria.
- [ ] Inspect the worktree and preserve unrelated changes.

## Implementation

- [ ] Implement only the current release.
- [ ] Preserve architecture, stable IDs, routes, and learner data unless explicitly authorized.
- [ ] Add migrations and compatibility behavior where required.

## Self Review

- [ ] Review all changed files and remove duplication.
- [ ] Check calculations, classifications, links, accessibility, and private-artifact boundaries as applicable.
- [ ] Record unrelated findings in `KNOWN_ISSUES.md`.

## Validation

- [ ] Run `npm run validate-content`.
- [ ] Fix only in-scope failures without weakening validation.

## Tests

- [ ] Add meaningful tests for new behavior.
- [ ] Run `npm run test` and retain all valid existing tests.

## Build

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Record bundle output and investigate new warnings.
- [ ] Run `npm run check`.

## Documentation

- [ ] Update technical, authoring, curriculum, or operational documentation affected by the release.
- [ ] Confirm terminology and statistics are consistent.

## Release Notes

- [ ] Create or update release notes with behavior, migration, limitations, and verification results.

## Project records

- [ ] Update `PROJECT_MASTER.md`.
- [ ] Update `KNOWN_ISSUES.md`.
- [ ] Update `ROADMAP.md` or `docs/CURRICULUM_STATUS.md` when applicable.
- [ ] Provide the recommended Conventional Commit message.

