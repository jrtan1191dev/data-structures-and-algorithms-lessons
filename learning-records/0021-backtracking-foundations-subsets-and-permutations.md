# State-Space Trees, Buffer Reuse, and Backtracking Invariants

Backtracking traverses an implicit state-space decision tree using depth-first search. The standard paradigm is Choose $\to$ Explore $\to$ Un-choose. Mutating and unwinding a single continuous array buffer on the heap ($O(1)$ amortized append/pop) avoids allocating $O(N)$ transient array slices per call frame, drastically reducing GC pressure and cache misses. In Subsets (LC 78), forward-moving index gates restrict future candidates to prevent generating duplicate permutations of identical subsets ($2^N$ states). In Permutations (LC 46), state visitation tracking via boolean masks allows exploring all remaining unused candidates at each tree level ($N!$ states).

## Evidence
- Elimination of redundant allocations: single path buffer vs passing sliced arrays.
- Solved Grind 75 core questions: Subsets (LC 78) and Permutations (LC 46).

## Implications
- Any exhaustive combinatorial search must reuse a shared mutable buffer and snapshot only upon reaching terminal leaf conditions.
- Distinguishing combinations from permutations hinges entirely on whether candidate iteration starts at `index` or `0`.
