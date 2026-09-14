# Rethinking Curriculum Structure: Grind 169 (26-Week Track) & Primary Literature

A comprehensive structural audit and pedagogical overhaul of the codebase revealed a critical discrepancy between static conceptual lessons and real-world technical interview preparation: 102 canonical problems from the Tech Interview Handbook Grind 75 (26-week track, comprising 169 problems) were unmapped, and the learning resources were excessively dependent on secondary web summaries rather than the authoritative primary literature canon (CLRS, Sedgewick & Wayne, Aziz/Lee/Prakash EPI, Roughgarden, Knuth, Skiena). The curriculum has been reorganized into a dual-track learning engine: 30 First-Principles Theory Lessons synchronized with a structured 26-Week Progressive Deliberate Practice Schedule (~6.5 problems / ~5.7 hours per week).

## Evidence
- Audited the exact dataset of `https://www.techinterviewhandbook.org/grind75/?weeks=26`: verified 169 problems across 17 topics (41 Easy, 102 Medium, 26 Hard), with total weighted solving duration of 8,967 minutes (~149 hours).
- Identified that the prior curriculum only accounted for 67 problems, leaving critical interview patterns unaddressed (multi-source BFS, monotonic queue for sliding window extrema, Kadane prefix products, Dutch National Flag 3-way partition, DSU on non-trivial topologies, and tree path sums).
- Cross-referenced all 169 problems against EPI chapters, CLRS chapters, and Sedgewick & Wayne 4th Edition algorithms.

## Implications
- The learner now progresses along two synchronized tracks: Concept Mastery (the 30 core HTML lessons) and Deliberate Practice (the 26-week Grind 169 roadmap).
- Every practice problem is linked to its prerequisite lesson invariant, transition heuristic (brute force to optimal), and primary literature citation, eliminating the "high-tech highlighter" trap.
- Pacing is calibrated to the Zone of Proximal Development (ZPD): Phase 1 (Weeks 1–6) builds foundational speed on 41 Easy problems; Phase 2–4 (Weeks 7–21) builds algorithmic muscle on 102 Medium problems; Phase 5 (Weeks 22–26) refines boundary invariants on 26 Hard problems.
