# Monotonic Boundary Invariants and Greedy Interval Scheduling

Interval manipulation depends strictly on establishing order upfront: sorting by start coordinate ($O(N \log N)$) reduces pairwise overlap checking ($O(N^2)$) to an adjacent scan ($O(N)$), because interval $B$ overlaps with preceding interval $A$ if and only if $B.start \le A.end$. When overlaps occur, boundary extension is greedy: $A.end = \max(A.end, B.end)$ (LC 56 Merge Intervals). For interval scheduling where the goal is to maximize non-overlapping events or minimize removals (LC 435), sorting by **end time** guarantees the optimal choice by always reserving the maximum remaining timeline for future tasks.

## Evidence
- Elimination of quadratic comparisons by start-time sorting.
- Three-phase linear insertion in LC 57 Insert Interval achieving $O(N)$ time and $O(N)$ auxiliary space.
- Solved Grind 169 core questions: Merge Intervals (LC 56), Insert Interval (LC 57), Non-overlapping Intervals (LC 435), and Meeting Rooms (LC 252/253).

## Implications
- Whenever a problem involves continuous ranges, time blocks, or calendar intervals, sorting by start time (for merging) or end time (for selection) is mandatory.
- Tracking concurrent resources (meeting rooms) naturally maps to a min-heap of active end times.
