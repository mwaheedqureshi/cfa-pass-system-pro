# Guide for future Codex prompts

## Required opening sequence

Every future prompt should instruct Codex to:

1. Read `PROJECT_MASTER.md` completely.
2. Read `ROADMAP.md` completely.
3. Read `KNOWN_ISSUES.md` completely.
4. Identify the current sprint and its explicit exclusions.
5. Inspect the repository and existing changes before editing.

## Scope rule

Implement exactly one release. A prompt must state the version, title, mission, authorized files or systems, exclusions, required checks, documentation updates, acceptance criteria, and recommended commit message. Later roadmap items are context, not authorization.

## Recommended prompt structure

```text
Release: vX.Y.Z
Title: ...

Read first:
- PROJECT_MASTER.md
- ROADMAP.md
- KNOWN_ISSUES.md

Mission:
...

In scope:
...

Out of scope:
...

Required implementation:
...

Required tests and checks:
...

Documentation updates:
...

Definition of Done:
...

Recommended commit:
type(scope): summary
```

## Required closing sequence

Codex should self-review, remove duplication, run the authorized validation suite, update affected documentation, update `PROJECT_MASTER.md` and `KNOWN_ISSUES.md`, report unresolved in-scope blockers honestly, provide the recommended commit message, and stop. Unrelated findings belong in `KNOWN_ISSUES.md`; they must not silently expand the release.

