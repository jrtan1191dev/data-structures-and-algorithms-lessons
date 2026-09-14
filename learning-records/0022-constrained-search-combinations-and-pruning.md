# Branch-and-Bound Pruning and In-Place Grid Rollback

Pruning prevents combinatorial state explosion by aborting recursive branches as soon as problem constraints are breached. Upfront ascending sorting enables immediate loop termination (`break`) in Combination Sum (LC 39) when a candidate exceeds the remaining target, as all subsequent candidates will also exceed it. In grid backtracking such as Word Search (LC 79), overwriting cell bytes in RAM with a sentinel value (e.g. `'#'`) tracks the active path without allocating an external $O(R \times C)$ boolean array, and restoring the original byte upon return executes $O(1)$ space rollback.

## Evidence
- Elimination of dead subtree branches through sorted candidate bounds.
- Zero-allocation visited tracking via memory byte mutation in Word Search (LC 79).

## Implications
- Sorting candidates upfront is an essential prerequisite for aggressive mathematical branch pruning.
- In-place sentinel masking eliminates auxiliary visited matrix allocation in grid-based DFS algorithms.
