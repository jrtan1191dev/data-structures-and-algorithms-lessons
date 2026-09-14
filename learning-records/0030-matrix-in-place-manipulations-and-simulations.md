# Row-Major Cache Stride, Inward Contraction, and In-Place Matrix Transformations

In virtual memory, 2D matrices are mapped to contiguous byte sequences in row-major order ($Base + (r \cdot C + c) \cdot Size$). Horizontal row iteration exhibits high CPU cache line prefetching, whereas column-wise vertical scans encounter continuous stride cache misses. In Spiral Matrix (LC 54), maintaining four explicit contraction bounds (`top`, `bottom`, `left`, `right`) avoids visited array overhead ($O(1)$ space), with inner dimension checks guarding against duplicate sweeps on odd single-strip matrices. In Rotate Image (LC 48), decomposing 90-degree clockwise rotation into main-diagonal transposition ($A[i][j] \leftrightarrow A[j][i]$) followed by horizontal row reflection produces a purely in-place $O(1)$ space solution.

## Evidence
- Elimination of $O(R \times C)$ shadow matrices in LC 54 and LC 48.
- Cache prefetching advantage: row-major horizontal sweeps outperform column stride jumps.
- Solved Grind 169 core questions: Spiral Matrix (LC 54), Rotate Image (LC 48), and Set Matrix Zeroes (LC 73).

## Implications
- Always seek in-place geometric decompositions (transpose + reflect) before allocating temporary 2D arrays.
- 4-boundary contraction provides standard, bug-free traversal for any spiral or onion-peeling matrix simulation.
