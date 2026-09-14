# Monotonic Feasibility Predicates and Binary Search on Answer Space

When optimization asks for the "minimum maximum" or "maximum minimum", the answer space can often be treated as a monotonic boolean function $P(x) \in \{\text{False}, \dots, \text{False}, \text{True}, \dots, \text{True}\}$. Instead of searching across input array indices, binary search navigates the numeric range of possible answers $[low, high]$. Evaluating feasibility $P(mid)$ takes linear time $O(n)$, reducing the overall runtime to $O(n \log(\text{range}))$.

## Evidence
- Mathematical monotonicity: if eating speed $k$ suffices to finish in $h$ hours, all speeds $k' > k$ also suffice.
- Solved Grind 75 core questions: Koko Eating Bananas (LC 875) and Capacity To Ship Packages Within D Days (LC 1011).

## Implications
- Transforms seemingly complex NP-style partitioning or simulation problems into simple greedy validation loops over a logarithmic answer spectrum.
- Avoids brute-force linear scanning across the parameter space.
