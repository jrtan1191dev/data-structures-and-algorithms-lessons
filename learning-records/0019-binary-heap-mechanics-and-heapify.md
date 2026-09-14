# Array Memory Mapping and Bottom-Up Heapify Convergence

Binary heaps map complete binary trees into contiguous dynamic arrays without storing child or parent pointers (parent at $\lfloor(i-1)/2\rfloor$, left at $2i+1$, right at $2i+2$). This eliminates pointer dereferencing overhead and optimizes hardware CPU cache line utilization. Floyd's bottom-up `heapify` constructs a valid heap in $O(n)$ time because the number of nodes decreases exponentially with height, leading to a convergent geometric series $\sum_{h=0}^{\log n} \frac{h}{2^h} = O(1)$. In Merge k Sorted Lists (LC 23), tracking only $k$ pointers in a min-heap scales the merge step to $O(N \log k)$ time and $O(k)$ memory.

## Evidence
- Mathematical proof of Floyd's algorithm bounding total operations to $\le 2n$.
- Cache benchmark: array-backed heaps outperform pointer-based priority queues due to continuous spatial locality.
- Solved Grind 75 core question: Merge k Sorted Lists (LC 23).

## Implications
- Priority queues should always default to contiguous array storage.
- Multiway consolidation scales with $\log(\text{number of sources})$, not total elements.
