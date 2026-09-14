# Contiguous Memory Architecture and Dynamic Array Resizing

Understanding how physical RAM stores arrays in contiguous memory blocks establishes why random access by index is constant time O(1) arithmetic, while shifting insertions/deletions cost linear time O(n). Furthermore, demystifying geometric growth (doubling capacity) reveals how dynamic arrays in Python, TypeScript, and Java achieve O(1) amortized appends despite occasional O(n) reallocations.

## Evidence
- Learner mastered asymptotic scaling in Lessons 0001 and 0002, and requested progression to the foundational data structure.

## Implications
- Grounding array indexing in `address = base + index * size` eliminates any mystery around why array lookup is O(1).
- Understanding amortized analysis prepares the learner for Two Pointers and Sliding Window patterns, where array traversal and in-place swapping rely on index-based access.
