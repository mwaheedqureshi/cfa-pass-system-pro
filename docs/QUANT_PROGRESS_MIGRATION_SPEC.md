# Quantitative progress migration specification

> Implemented in v1.6.5. The migration remains versioned, one-time, idempotent, and compatible with the existing storage key.

## Storage contract

- Existing localStorage key: `cfa-pass-progress`.
- Baseline schema: inspect the production parser immediately before v1.6.5; the working tree currently reports schema version 2 because later-facing migration work already exists.
- Implemented migration identifier: `2027-quant-v1`.
- Idempotency marker: persist the identifier in a dedicated migration field and return unchanged when it is already present.
- Never reset the entire object merely because one field is invalid.

## Safety rules

Parse inside a guarded boundary. If JSON is malformed or the root is not an object, use the application’s safe default without overwriting storage until the learner next makes a valid change. Validate each collection independently, ignore invalid members, retain recognized unrelated fields, and preserve unknown fields where a typed forward-compatible copy is safe.

The migration must be a pure, idempotent function from an old object to a new object. Read once, migrate once, validate the result, and write once. A second application must produce a deeply equal result.

## Field treatment

| Progress field | Future treatment |
|---|---|
| Completed lessons | Transfer legitimate legacy distribution evidence to `quant-probability-06`; remove `quant-distributions-07` so LM8 is not completed implicitly; preserve all unrelated IDs |
| Bookmarks | Remove the semantically obsolete `quant-distributions-07` bookmark; preserve unrelated bookmarks |
| Notes | Copy relevant distribution notes to `quant-probability-06` when useful and preserve the exact original under `quant-distributions-07@pre-2027-portfolio` |
| Recent lessons | Replace the legacy distribution semantic reference with `quant-probability-06`, deduplicate, and preserve ordering limits |
| Last opened/completed lesson | Replace legacy distribution semantics with `quant-probability-06`; never point to LM8 as evidence of new completion |
| Quiz attempts | Preserve every historical attempt, confidence value, answer, score, and timestamp; tag legacy distribution attempts and exclude them from LM8 performance |
| Flashcard state | Preserve ratings and timestamps; legacy distribution card reviews remain historical analytics and do not prove LM8 completion |
| Assessment history | Keep saved records readable, add legacy curriculum metadata where possible, and never reinterpret a former distribution result as portfolio performance |
| Preferences | Preserve exam date, daily goal, theme, and all unrelated settings |

## `quant-distributions-07` semantic transition

The stable route ID historically represented probability distributions and is targeted to represent portfolio return and risk. Therefore:

1. Transfer its legitimate distribution completion evidence to `quant-probability-06`.
2. Do not mark the future portfolio lesson complete.
3. Preserve original notes under the named legacy key; optionally copy relevant text to LM6 without deleting the original.
4. Preserve historical quiz attempts as legacy analytics and associate their curriculum interpretation with LM6.
5. Preserve flashcard history, but do not count old card reviews toward LM8 readiness.
6. Exclude every legacy distribution attempt from portfolio lesson performance, portfolio completion, and official LM8 assessment breakdowns.

## LM7 completion

LM7A is the Estimation study lesson and LM7B is the Hypothesis Testing study lesson. Official LM7 is complete only when both study-lesson completion requirements are satisfied. Study progress may show the two lessons independently; official completion counts LM7 exactly once.

## Pseudocode

```text
function migrate(state):
  if not object(state): return safeDefault
  if state.migrations contains marker: return state

  next = validatedShallowCopy(state)
  legacyCompleted = completedLessons contains "quant-distributions-07"

  if legacyCompleted:
    add "quant-probability-06" to completedLessons
  remove "quant-distributions-07" from completedLessons and bookmarks

  if legacy distribution note exists:
    legacyNotes["quant-distributions-07@pre-2027-portfolio"] = exact original
    merge a labeled copy into notes["quant-probability-06"]
    remove the old semantic note key

  remap recent and last-lesson semantic references to "quant-probability-06"
  tag old distribution quiz attempts as legacy and LM6-related
  preserve confidence, flashcard state, assessment history, and preferences

  add marker
  assert migrate(next) deep-equals next
  return next
```

## Required test cases

1. Empty valid state migrates without inventing completion.
2. Malformed JSON returns a safe default and does not throw.
3. Legacy distribution completion transfers to LM6 and never LM8.
4. Existing LM6 completion is deduplicated.
5. Distribution bookmark is removed; unrelated bookmarks remain.
6. Exact original notes survive under the legacy key and optional LM6 copy.
7. Quiz attempts, confidence, timestamps, and flashcard state survive.
8. Old attempts are excluded from LM8 analytics.
9. Recent and last-lesson references remain valid.
10. Assessment history remains readable and is labeled legacy.
11. LM7 is incomplete with only LM7A or only LM7B and complete with both.
12. Applying the migration twice produces deep equality.
