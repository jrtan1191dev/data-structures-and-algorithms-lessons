# Subproblem Caching, Tabulation Locality, and State Compression

Dynamic programming resolves overlapping subproblems with optimal substructure. While top-down memoization stores results via recursive call frames and hash tables, bottom-up tabulation iterates linearly across contiguous array memory, optimizing CPU cache hit rates and eliminating call-stack overhead. When subproblem recurrence depends only on a fixed history window (e.g. Climbing Stairs LC 70, House Robber LC 198), maintaining scalar state variables reduces space from $O(N)$ to $O(1)$. For unbounded knapsack problems like Coin Change (LC 322), 1D tabulation builds the minimum coin count iteratively up to the target amount.

## Evidence
- Cache locality performance: contiguous primitive array scans outperform recursive function dispatch.
- Elimination of memory tables via rolling variables in linear recurrences.

## Implications
- Favor bottom-up tabulation whenever iteration order is strictly topological to maximize hardware efficiency.
- Inspect recurrence dependencies to compress space from $O(N)$ to $O(1)$ wherever prior states beyond a fixed window are unneeded.
