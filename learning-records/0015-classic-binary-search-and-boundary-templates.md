# Strict Invariants and Boundary Partitioning in Binary Search

Binary search eliminates half the search space per iteration by evaluating a monotonic condition. The choice of loop invariant (`left <= right` with midpoint shifts vs `left < right` for lower-bound insertion) dictates boundary updates and prevents infinite loops. Using integer division `mid = left + ((right - left) // 2)` prevents 32-bit signed integer overflow in languages with fixed-width integers like Java and C++. In non-standard searches like rotated sorted arrays (LC 33) or search in 2D matrices (LC 74), identifying which half is guaranteed to be strictly sorted allows standard logarithmic reduction.

## Evidence
- Elimination proof: each comparison discards $\lfloor n/2 \rfloor$ elements, guaranteeing termination in $\lceil \log_2 n \rceil + 1$ steps.
- Solved Grind 75 core questions: Binary Search (LC 704), Search in Rotated Sorted Array (LC 33), and First Bad Version (LC 278).

## Implications
- Any question operating over a sorted, monotonically partitioned, or circularly shifted array should immediately prompt binary search.
- When finding boundaries (e.g. first bad version), invariant `left < right` with `right = mid` and `left = mid + 1` safely converges without out-of-bounds termination.
