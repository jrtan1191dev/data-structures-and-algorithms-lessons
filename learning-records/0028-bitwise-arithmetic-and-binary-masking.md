# Single-Cycle ALU Bitwise Identities and Subproblem Reuse

Integer bitwise operations execute directly on the CPU Arithmetic Logic Unit (ALU) in a single hardware clock cycle. Algebraic XOR self-cancellation ($x \oplus x = 0$ and $x \oplus 0 = x$) enables $O(1)$ space pair cancellation (LC 136 Single Number, LC 268 Missing Number) without allocating hash sets. Brian Kernighan's bitmask $n \ \& \ (n - 1)$ resets the lowest set bit to 0, restricting counting loops strictly to the number of set bits rather than scanning all 32 bits (LC 191 Number of 1 Bits). In Counting Bits (LC 338), right shifting by 1 decomposes the problem into an already solved subproblem plus the least significant bit parity ($dp[i] = dp[i >> 1] + (i \& 1)$), achieving an optimal $O(N)$ linear-time bit population count.

## Evidence
- Elimination of auxiliary memory via XOR accumulator in LC 136.
- Brian Kernighan bitmasking bounding execution to $O(k)$ where $k \le 32$ is set bit count.
- Linear dynamic programming bit counting in LC 338.

## Implications
- Whenever a problem involves pairs canceling out or missing elements from a dense range, XOR bitwise operations provide an immediate $O(1)$ memory solution.
- Use $n \ \& \ (n - 1)$ to verify powers of two ($n > 0 \land (n \ \& \ (n - 1)) == 0$) or count set bits.
