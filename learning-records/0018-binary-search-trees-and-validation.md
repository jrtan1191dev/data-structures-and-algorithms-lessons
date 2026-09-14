# Global Subtree Bounds and LCA Invariants in Binary Search Trees

A node in a BST must not merely be greater than its immediate left child and less than its right child; it must satisfy global interval constraints $(min\_bound, max\_bound)$ propagated down from all ancestors. Validating a BST (LC 98) requires passing open interval bounds $(-\infty, +\infty)$ through recursive calls, narrowing them at each child branch ($(\text{min}, node.val)$ for left, $(node.val, \text{max})$ for right). In Lowest Common Ancestor of a BST (LC 235), the BST invariant guarantees that the LCA is the first node where the two target values diverge into opposite subtrees (or one matches the current node), resolving LCA in $O(H)$ time and $O(1)$ space.

## Evidence
- Failure of local checks: a tree with root 5, left child 4, and right child's left descendant 3 violates the global BST invariant despite passing local parent-child tests.
- Solved Grind 75 core questions: Validate Binary Search Tree (LC 98), Lowest Common Ancestor of a BST (LC 235), and Kth Smallest Element in a BST (LC 230).

## Implications
- Inorder traversal of any valid BST yields a strictly increasing monotonic sequence.
- Range bounds propagation prevents false positives in tree validation.
