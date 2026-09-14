# Heap Node Architecture and 3-Pointer In-Place List Reversal

Linked lists store nodes scattered across the heap with explicit pointers rather than contiguous memory offsets, trading instant $O(1)$ random access for $O(1)$ node insertion/deletion once a pointer is located. Mastered the canonical 3-pointer iterative reversal pattern (`prev = null, curr = head, next_temp = curr.next`), completing list reversal in strictly $O(n)$ time and $O(1)$ auxiliary space without incurring the recursion call stack overhead. Also applied the fixed-gap two-pointer technique for single-pass deletion of the $n$-th node from the end.

## Evidence
- Mapped Grind 75 problems: Reverse Linked List (LC 206), Middle of the Linked List (LC 876), and Remove Nth Node From End of List (LC 19).
- Traced pointer reassignments avoiding memory leaks and dangling references.

## Implications
- Demonstrates pointer discipline necessary for complex tree and graph structures where nodes are also dynamically allocated in heap memory.
- Prepares for sentinel-based algorithms and composite data structures (like LRU Cache).
