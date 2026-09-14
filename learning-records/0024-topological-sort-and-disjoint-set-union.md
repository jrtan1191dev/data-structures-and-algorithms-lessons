# In-Degree Dependency Processing and Disjoint Set Compression

Topological sort resolves precedence dependencies in Directed Acyclic Graphs. Kahn's algorithm maintains an in-degree array, processing nodes with in-degree 0 in a FIFO queue and decrementing neighbor dependencies. Trapped cyclic nodes never reach in-degree 0, detecting circular deadlocks naturally (LC 207 Course Schedule). For dynamic connectivity, Disjoint Set Union (DSU) stores partitions in an inverted parent array. Combining Path Compression (`parent[x] = find(parent[x])`) with Union by Rank achieves an amortized $O(\alpha(N))$ time per operation (nearly constant time), instantly identifying cycle-creating redundant edges (LC 684).

## Evidence
- Mathematical cycle detection in Kahn's algorithm: completed node count $< V$ proves presence of directed cycle.
- Inverse Ackermann bound $O(\alpha(N)) \le 4$ operations across practical inputs.

## Implications
- Any course/task scheduling problem with prerequisites maps to Kahn's algorithm or post-order DFS coloring.
- Dynamic network connectivity and cycle detection in undirected graphs should default to DSU.
