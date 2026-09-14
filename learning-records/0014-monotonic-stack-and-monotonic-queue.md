# Monotonic Invariant Maintenance and Linear Amortized Complexity

Monotonic stacks enforce strictly increasing or decreasing order by popping violating elements when a new element arrives. Unresolved queries waiting on the stack are answered as soon as an element of opposite parity is encountered (e.g. Daily Temperatures LC 739: resolving colder days when a warmer temperature arrives). Even with an inner `while` loop, the algorithm runs in strictly $O(n)$ time because each index is pushed once and popped at most once ($\le 2n$ total operations). In Largest Rectangle in Histogram (LC 84), seeing a shorter bar terminates rightward reach, triggering immediate area calculation.

## Evidence
- Amortized analysis: $n$ pushes, at most $n$ pops across the entire loop.
- Solved Grind 75 core questions: Daily Temperatures (LC 739), Largest Rectangle in Histogram (LC 84), and Sliding Window Maximum (LC 239).

## Implications
- Whenever a problem asks for the "next greater element", "next smaller element", or maximum rectangular area under a sequence, Monotonic Stack is the single optimal pattern.
- Extends seamlessly to monotonic deques for sliding window extremes.
