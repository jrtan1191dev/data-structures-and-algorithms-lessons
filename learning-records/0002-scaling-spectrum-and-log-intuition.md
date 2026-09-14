# Scaling Spectrum: Unpacking Logarithmic, Linearithmic, and Exponential Complexities

The learner inquired about $O(n \log n)$ and the wider scaling spectrum across both time and space complexity. Moving beyond basic linear vs. quadratic loops requires demystifying the logarithm as repeated division/halving, and understanding how divide-and-conquer creates $O(n \log n)$ by combining logarithmic tree depth with linear work per level.

## Evidence
- Learner specifically asked: "How about n log n or more types of scaling spectrum? Time and space complexity?"

## Implications
- Lesson 0002 must break down $\log n$, $n \log n$, $2^n$, and $n!$ with concrete mechanical models (repeated halving, branching trees, recursion call stacks).
- Must explicitly contrast Time Complexity against Space Complexity (e.g., auxiliary allocations vs. call stack frames) across Python, TypeScript, and Java.
