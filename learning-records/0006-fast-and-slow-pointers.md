# Fast and Slow Pointers (Floyd's Tortoise and Hare Cycle Finding)

Advancing two pointers in the same direction at differential velocities ($1\times$ and $2\times$) solves cycle detection, midpoint identification, and duplicate element lookup in $O(n)$ time with strictly $O(1)$ auxiliary space. Because the relative distance decreases by exactly 1 step per tick modulo the cycle length $C$, the fast pointer can never skip past the slow pointer. Furthermore, resetting one pointer to `head` after intersection enables locating the exact cycle entrance node.

## Evidence
- Explored mathematical proof equating $2(L + K) = L + K + m \cdot C \implies L = (m - 1)C + (C - K)$.
- Applied pointer stepping to array indices as an implicit directed graph (LeetCode 287 - Find the Duplicate Number) without array mutation.

## Implications
- Establishes pointer-based cycle detection in linked lists and implicit functional graphs without requiring an $O(n)$ hash set.
- Provides the single-pass technique for finding linked list midpoints, which is essential for Merge Sort on linked lists and Reorder List.
