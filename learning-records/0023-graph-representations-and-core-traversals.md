# Memory Layout Trade-offs and Multi-Source BFS Horizons

Graph memory representation governs spatial cache locality and scaling: adjacency matrices provide $O(1)$ edge queries at $O(V^2)$ RAM cost, while adjacency lists consume $O(V + E)$ space, which is optimal for sparse topologies. In grid graphs (e.g. Number of Islands LC 200), connected components can be traversed and counted by sinking land cells in RAM directly (`'1' -> '0'`). For computing distances to multiple origins (LC 542 01 Matrix), Multi-Source BFS seeds all starting coordinates into a FIFO queue at time 0, expanding the wavefront across the entire graph in a single linear $O(V + E)$ pass.

## Evidence
- Elimination of redundant $K \cdot (V + E)$ traversals via multi-source queue seeding.
- Memory-efficient connected component identification via in-place cell sinking in LC 200.

## Implications
- Multi-source wavefront expansion is the optimal pattern for shortest-distance matrices from multiple points.
- Cycles in graphs require explicit visited tracking (or hash maps of cloned pointers in LC 133) to prevent infinite loops.
