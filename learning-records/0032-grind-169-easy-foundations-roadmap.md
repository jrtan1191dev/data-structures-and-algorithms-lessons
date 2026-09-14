# Grind 169: Core "Easy" Foundations Roadmap Across Concept Modules

To prevent cognitive overload and avoid the "tutorial trap", the learner requested a dedicated view and reference document cataloging the foundational LeetCode "Easy" problems from the Tech Interview Handbook Grind 75 (26-Week Track, 169 problems). Analysis of the 26-week schedule revealed that **all 41 Easy problems are concentrated in Weeks 1 through 6**. A dedicated reference guide (`reference/grind-169-easy-foundations.html`) was synthesized, categorizing these 41 foundational archetypes across 13 core concept modules with explicit time targets (15 minutes), prerequisite lessons, and core algorithmic invariants. Additionally, a dynamic 1-click filter button (`Grind 169 (Easy Focus • 41)`) was added to `index.html` with reactive filtering in `assets/quiz.js`.

## Evidence
- Extracted and audited all 41 Easy problems across the 26-week schedule:
  - 100% of Easy problems occur in Weeks 1 through 6 (Phase 1: Foundational Mechanics).
  - Categorized across 13 distinct modules: Arrays & In-Place Shifts (3), Strings & Byte Maps (4), Two Pointers & Sliding Windows (2), Hash Tables & Spatial Complements (3), Singly Linked Lists & Floyd's Cycle (5), Stacks & Queues (3), Binary Search (2), Binary Trees & DFS (7), Binary Search Trees (2), Graph Flood Fill (1), 1D Dynamic Programming (1), Bitwise Arithmetic & Binary Masking (6), and Math/Number Invariants (2).
- Identified the 5 foundational invariants underpinning all 41 Easy archetypes:
  1. *Spatial Complement*: $O(1)$ hash map lookup of $target - x$ (e.g. LC #1 Two Sum).
  2. *Converging Boundaries*: $O(N)$ two-pointer monotonic reduction (e.g. LC #125 Valid Palindrome, LC #977 Squares of a Sorted Array).
  3. *Pointer Speed Differentials*: Floyd's 1x vs 2x hops for $O(1)$ auxiliary space cycle and midpoint detection (e.g. LC #141 Linked List Cycle, LC #876 Middle of List).
  4. *LIFO State Pairing*: Immediate pop on valid opener-closer matches (e.g. LC #20 Valid Parentheses).
  5. *Post-Order Bottom-Up Aggregation*: Subtree depths and balance factor computed before parent node evaluation (e.g. LC #104 Max Depth, LC #110 Balanced Binary Tree, LC #543 Diameter).

## Implications
- Learners can now isolate and master the foundational Easy concepts across all data structures before facing complex multi-phase transitions in Medium problems.
- In `index.html`, clicking `Grind 169 (Easy Focus • 41)` collapses all 128 Medium and Hard problems and displays only the 41 Easy foundation problems across Weeks 1–6.
- The reference document `reference/grind-169-easy-foundations.html` connects seamlessly into the bidirectional reference cheatsheet navigation chain, complete with interactive retrieval quizzes and primary source citations (CLRS, Sedgewick, EPI).
