# Dynamic-Size Sliding Windows and Amortized Linear Complexity

Dynamic sliding windows solve variable-length contiguous sequence optimizations (longest/shortest valid subarray) by expanding greedily on the right and contracting lazily on the left. Although the code features a nested `while` loop, the algorithm remains strictly $O(n)$ amortized because neither the `left` nor `right` pointer ever moves backward, capping total pointer advancements at $2n$. Storing last-seen indices in a hash map (as in LC 3: Longest Substring Without Repeating Characters) allows the left pointer to jump directly past duplicates in $O(1)$.

## Evidence
- Traced pointer movement bounds: $n$ steps for `right`, at most $n$ steps for `left`.
- Solved Grind 75 core challenges: Best Time to Buy and Sell Stock (LC 121), Longest Substring Without Repeating Characters (LC 3), and Minimum Window Substring (LC 76).

## Implications
- Any problem asking for the "longest/shortest contiguous subarray/substring meeting property P" should default to dynamic sliding window analysis before considering dynamic programming.
- For non-monotonic conditions (e.g. subarrays with negative numbers), sliding window breaks down, necessitating the Prefix Sum pattern learned in Lesson 0010.
