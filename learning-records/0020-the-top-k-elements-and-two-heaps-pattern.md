# Bounded-Capacity Heaps and Dual Heap Streaming Equilibrium

Extracting the $k$ extreme elements from an unbounded dataset is optimized by capping heap size to $k$: a min-heap retains the $k$ largest elements in $O(N \log k)$ time and $O(k)$ auxiliary space, eliminating the need to load and sort all $N$ elements ($O(N \log N)$). For dynamic continuous streams, the Two-Heaps pattern partitions elements into a lower half (max-heap) and upper half (min-heap). Enforcing balance ($|len(small) - len(large)| \le 1$) and ordering ($\max(small) \le \min(large)$) yields $O(\log n)$ stream insertions and instantaneous $O(1)$ median reads (LC 295).

## Evidence
- Elimination of full array sorting for top-k queries (LC 215, LC 347).
- Continuous median extraction in LC 295 without array shifting or tree rebalancing.

## Implications
- Whenever a problem demands running percentiles or medians on a dynamic stream, two opposing heaps provide constant-time query access.
- Top-k streaming architectures prevent out-of-memory errors on massive data streams.
