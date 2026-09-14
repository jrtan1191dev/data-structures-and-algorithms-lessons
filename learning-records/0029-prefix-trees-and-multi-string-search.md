# M-ary Character Transitions and Simultaneous Prefix Pruning

Tries (prefix trees) allocate $M$-ary pointer arrays per node (where $M=26$ for lowercase English letters), mapping common prefixes to shared tree pathways. While hash maps require $O(L)$ hashing and cannot determine prefix existence without scanning all $N$ keys ($O(N \cdot L)$), Tries execute exact search and prefix queries (`startsWith`) in strictly $O(L)$ time, invariant to dictionary volume. In multi-string grid searches (LC 212 Word Search II), advancing board DFS coordinates concurrently with Trie pointers allows instantaneous branch aborts the moment a prefix fails, pruning dead exponential subtrees and dropping search from $O(W \cdot M \cdot N \cdot 4^L)$ to a single traversal.

## Evidence
- Asymptotic comparison: Trie prefix query $O(L)$ vs Hash Map prefix scan $O(N \cdot L)$.
- Multi-word simultaneous grid search elimination in LC 212.
- Solved Grind 169 core questions: Implement Trie (LC 208), Design Add and Search Words Data Structure (LC 211), and Word Search II (LC 212).

## Implications
- Whenever a problem demands prefix queries, autocomplete dictionaries, or simultaneous multi-pattern string matching, Trie is the optimal foundational data structure.
- Leaf node cleanup / word removal dynamically prunes paths during traversal to prevent duplicate emissions.
