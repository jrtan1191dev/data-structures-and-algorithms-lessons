# Converging Pointers and Monotonic Search Space Pruning

The Two Pointers pattern replaces brute-force $O(n^2)$ nested pair comparisons with a single-pass $O(n)$ scan by leveraging sorted or monotonic properties. By positioning pointers at opposite ends (`left = 0` and `right = n - 1`), comparing `nums[left] + nums[right]` against a target allows discarding an entire row or column of pairs in constant $O(1)$ time. This yields the theoretical optimum of $O(n)$ time while preserving $O(1)$ auxiliary space.

## Evidence
- Internalized array index arithmetic ($O(1)$ lookup) and sequential traversal mechanics.
- Solved Two Sum II and Container With Most Water using pointer convergence and greedy boundary elimination.

## Implications
- Whenever a problem features sorted input or asks for pair/triplet sums with $O(1)$ extra space, Two Pointers is the primary candidate over hash tables.
- Solidifies the foundation for 3Sum (fixing one element and running Two Pointers on the remainder) and provides the precursor to Sliding Window intervals.
