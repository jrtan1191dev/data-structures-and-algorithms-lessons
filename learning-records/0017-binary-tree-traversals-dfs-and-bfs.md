# Recursive Call Stacks, Breadth Horizons, and Tree Invariants

Binary tree traversals reflect call-stack memory behavior (DFS: preorder, inorder, postorder) versus ring-buffer queue behavior (BFS: level-order). In DFS, postorder traversal naturally processes children before parents, enabling bottom-up metric synthesis such as height calculation and tree diameter determination (LC 543) without redundant subtree recomputations. Level-order BFS cleanly decouples horizontal tree cross-sections by recording queue length at the start of each level loop.

## Evidence
- Inversion of binary trees (LC 226): bottom-up swapping of child pointers in $O(n)$ time.
- Diameter of binary tree (LC 543): calculating left and right depths at each node while updating a global diameter maximum.
- Binary tree level order traversal (LC 102): snapshotting queue size prevents mixing parent nodes with newly enqueued child nodes.

## Implications
- Postorder recursion enables linear $O(n)$ subtree aggregation.
- Snapshotting FIFO queue length isolates tree levels cleanly without requiring node-depth wrappers.
