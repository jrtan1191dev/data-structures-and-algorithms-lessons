# LIFO vs. FIFO Mechanics, Queue Shifts, and State Tracking Stacks

Stacks operate on LIFO principles where additions and removals occur at the tail in $O(1)$ time without memory shifts, making dynamic arrays optimal stack backbones. Queues operate on FIFO principles; standard array `shift()` or `pop(0)` triggers hidden $O(n)$ reallocations, requiring double-ended deques (`collections.deque` or `ArrayDeque`) or dual-stack amortized transfers (LC 232: Implement Queue using Stacks). In Min Stack (LC 155), tracking historic minimums across stack frames enables $O(1)$ minimum retrieval even after removals.

## Evidence
- Traced execution frame mechanics and parenthesis matching in Valid Parentheses (LC 20).
- Solved Grind 75 core questions: Valid Parentheses (LC 20), Implement Queue using Stacks (LC 232), Min Stack (LC 155), and Evaluate Reverse Polish Notation (LC 150).

## Implications
- Prevents performance regressions caused by naive array queue slicing.
- Sets the foundation for DFS recursion stack modeling and monotonic stack state maintenance.
