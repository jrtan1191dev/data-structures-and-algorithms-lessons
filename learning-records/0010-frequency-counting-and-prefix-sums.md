# Canonical Key Grouping and The Prefix Sum Difference Identity

Combining frequency maps with canonical key serialization allows grouping equivalent signatures (e.g. Group Anagrams LC 49) in optimal $O(n \cdot k)$ time. Furthermore, cumulative prefix sums allow range sum evaluation in $O(1)$ time. By transforming the subarray target condition $\text{sum}(i, j) = k$ into the difference identity $P[j] - P[i] = k \implies P[i] = P[j] - k$, a hash map tracking prefix sum frequencies enables counting matching subarrays (LC 560: Subarray Sum Equals K) in a single linear $O(n)$ pass, even when values are negative.

## Evidence
- Internalized array prefix calculations: $P[0] = 0, P[i] = P[i-1] + \text{nums}[i-1]$.
- Evaluated Grind 75 problems: Valid Anagram (LC 242), Group Anagrams (LC 49), Subarray Sum Equals K (LC 560), and Longest Consecutive Sequence (LC 128).

## Implications
- Whenever a problem involves contiguous subarray sums with negative numbers (invalidating two pointers and sliding window), prefix sums with a hash map is the required technique.
- For consecutive sequence checks in hash sets (LC 128), starting only at streak beginnings (`num - 1 not in set`) prevents quadratic iteration.
