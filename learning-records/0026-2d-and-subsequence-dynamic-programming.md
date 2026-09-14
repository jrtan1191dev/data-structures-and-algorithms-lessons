# Multi-Dimensional Recurrences, Rolling Buffers, and Reverse Traversal

Multi-dimensional dynamic programming models problems with two independent progression axes, such as string alignment indices $(i, j)$ or items and capacity $(i, w)$. In Longest Common Subsequence (LC 1143), each cell $dp[i][j]$ depends strictly on the current and immediately preceding row, allowing space reduction from $O(M \times N)$ to $O(\min(M, N))$ via a two-row rolling buffer. In 0/1 knapsack problems such as Partition Equal Subset Sum (LC 416), traversing a single 1D array in reverse (right-to-left) guarantees that each candidate item is utilized at most once without allocating a full 2D matrix.

## Evidence
- Memory compression from $O(M \times N)$ to $O(N)$ for string alignment.
- Elimination of item duplication via reverse iteration in single-buffer 0/1 knapsack.

## Implications
- Whenever a 2D recurrence reads only from row $i-1$, replace the full matrix with a two-row rolling buffer or single reverse-traversed array.
- Optimizing spatial locality prevents CPU cache trashing on large input sequences.
