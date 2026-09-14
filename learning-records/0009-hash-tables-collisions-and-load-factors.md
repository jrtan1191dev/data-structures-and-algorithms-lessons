# Hash Table Internal Mechanics, Collision Resolution, and Load Factors

Hash tables convert arbitrary keys into bucket indices via `hash(key) % capacity`, yielding $O(1)$ average time operations by trading $O(n)$ heap space. Because keys outnumber buckets, collision resolution (Separate Chaining with linked lists or Red-Black trees in Java 8+, versus Open Addressing in Python) is essential. Tracking the Load Factor $\alpha = n / \text{capacity}$ triggers geometric doubling at $\alpha \ge 0.75$, keeping bucket chains short and ensuring $O(1)$ amortized performance while guarding against worst-case $O(n)$ degradation.

## Evidence
- Internalized modulo arithmetic and bucket memory layout.
- Evaluated Grind 75 problems: Two Sum (LC 1), Ransom Note (LC 383), and Insert Delete GetRandom O(1) (LC 380).

## Implications
- Solidifies understanding of why hash tables provide $O(1)$ average time while warning against hash collisions.
- Highlights the powerful synergy between hash maps and dynamic arrays (e.g. LC 380: swapping with the tail element enables $O(1)$ deletion).
