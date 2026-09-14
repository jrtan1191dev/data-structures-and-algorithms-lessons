# Fixed-Size Sliding Windows and State Reuse

Evaluating contiguous subarrays of fixed length $k$ across an array of length $n$ naively costs $O(n \cdot k)$ work due to repeated recomputation. Recognizing that adjacent windows share $k - 1$ overlapping elements enables state updates in instantaneous $O(1)$ time by subtracting the exiting element (`nums[i - k]`) and adding the entering element (`nums[i]`). In Grind 75 problems like Permutation in String (LC 567), tracking a `matches` counter across a 26-element array verifies anagram equality in $O(1)$ without scanning the entire frequency vector on every step.

## Evidence
- Internalized array indexing arithmetic and continuous sequence scanning.
- Mapped Grind 75 problems: Maximum Average Subarray I (LC 643) and Permutation in String (LC 567).

## Implications
- Whenever a problem constrains queries to contiguous windows of length $k$, avoid recomputing from scratch.
- Serves as the direct stepping stone to dynamic-size sliding windows, where window boundaries expand and contract elastically.
