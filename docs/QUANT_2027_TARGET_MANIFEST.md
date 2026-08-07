# Quantitative Methods 2027 target manifest

> Design only for v1.6.3. Do not implement this interface or change public titles in this release.

## Structural model

The target contains exactly 11 official modules and 12 study lessons. Official LM7 owns two study lessons—A Estimation and B Hypothesis Testing—but is counted once for official progress and assessment reporting.

```ts
type QuantSubdivision = 'A' | 'B';

interface OfficialModule {
  officialModuleId: `QM-LM${number}`;
  officialModuleNumber: number;
  officialModuleTitle: string;
  officialLearningOutcomes: string[];
  officialDisplayOrder: number;
  studyLessonIds: string[];
}

interface StudyLessonClassification {
  studyLessonId: string;
  route: `/lessons/${string}`;
  officialModuleId: OfficialModule['officialModuleId'];
  subdivision?: QuantSubdivision;
  studyDisplayOrder: number;
  supplementary: boolean;
  legacyRouteAliases: string[];
}
```

## Required fields and rules

- `officialModuleId` is the assessment and official-completion grouping key.
- `studyLessonId` remains the stable route/content/progress key.
- `subdivision` is present only for the two LM7 study lessons.
- `officialLearningOutcomes` are source-backed references stored with controlled provenance.
- `supplementary` is explicit on lessons, sections, questions, cards, formulas, and tools.
- Official display order is 1–11; study display order is 1–12.
- Old route aliases are required only if a route changes. The proposed plan preserves all current routes, so no alias is presently required.

## Target route sequence

| Study order | Official group | Study lesson ID | Subdivision |
|---:|---|---|---|
| 1 | QM-LM1 | `quant-returns-01` | — |
| 2 | QM-LM2 | `quant-returns-02` | — |
| 3 | QM-LM3 | `quant-benchmarking-03` | — |
| 4 | QM-LM4 | `quant-tvm-04` | — |
| 5 | QM-LM5 | `quant-statistics-05` | — |
| 6 | QM-LM6 | `quant-probability-06` | — |
| 7 | QM-LM7 | `quant-sampling-08` | A |
| 8 | QM-LM7 | `quant-hypothesis-09` | B |
| 9 | QM-LM8 | `quant-distributions-07` | — |
| 10 | QM-LM9 | `quant-simulation-11` | — |
| 11 | QM-LM10 | `quant-regression-10` | — |
| 12 | QM-LM11 | `quant-data-ai-12` | — |

## Assessments and completion

Default official assessments exclude supplementary items and balance across 11 official module IDs. LM7 sampling must include both subdivisions. Reports group LM7 once and may show an A/B detail. Study completion tracks 12 lessons; official completion tracks 11 modules. LM7 requires both subdivisions. Legacy distribution attempts retain historical meaning and never contribute to LM8.

## Compatibility

Routes and study lesson IDs remain stable. The semantic transition of `quant-distributions-07` requires the migration specified in `QUANT_PROGRESS_MIGRATION_SPEC.md`, not a redirect. Saved assessments must retain their curriculum-version label and resolve stable item IDs where those items remain substantively valid.

