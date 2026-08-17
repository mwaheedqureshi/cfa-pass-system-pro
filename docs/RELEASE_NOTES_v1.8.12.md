# v1.8.12 — FSA-LM12 and Full FSA Certification

This release produces **FSA-LM12, Introduction to Financial Statement Modeling**, from the official 2027 source at PDF pages 459–516 (printed 447–504), covering all five official LOS.

## LM12 delivery

- One original lesson with 15 worked examples and 12 original synthesis exhibits.
- 40 official-target plus 10 supplementary questions and matching flashcards, distributed 20/8/7/9/6 across the five LOS overall; answer positions were assigned during generation at 17/17/16.
- Six LM12-owned model relationships: sales growth, price-volume revenue, percent-of-sales projection, net PP&E roll-forward, retained earnings roll-forward, and cash roll-forward.
- Canonical inventory-days, DSO, payable-days, FCFF, and nominal/real compounding records are referenced rather than duplicated.
- Two tested tools: Linked Financial Statement Forecast Builder and Forecast Assumption and Scenario Explorer.
- Zero LM12 shared-bank mock mappings, matching the discovery audit.

## Encoding remediation

A project-wide audit found mojibake in stored source/data rather than in Markdown or React rendering. UTF-8 text had previously been decoded through a Windows code page and saved again. The release repairs 335 corruption markers across 19 unique files at the generator/source layer and published assets, including the observed Quantitative Price Return operators and subscript labels. `validate-encoding` now rejects obvious mojibake while explicitly testing valid minus, multiplication, arrow, percent, parentheses, subscript, comparison, Greek, radical, and superscript notation.

## Final FSA certification

All 12 official FSA modules and all 53 LOS pass aggregate reachability and uniqueness checks across lessons, chapter exams, questions, flashcards, formulas, tools, search, Practice, Formula Explorer, Flashcards, and progress-backed lesson IDs. Final FSA inventory:

- 475 official plus 120 supplementary questions (595 total)
- 475 official plus 120 supplementary flashcards (595 total)
- 110 formulas/metrics
- 21 interactive tools
- 12 chapter exams

FSA is now **verified and content-frozen at 12/12 modules (100%)**. This does not mean the complete CFA Level I platform is finished; other topic groups remain pending.
