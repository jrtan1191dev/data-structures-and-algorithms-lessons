# String Immutability and Hidden Quadratic Overhead

Understanding that strings in Python, TypeScript, and Java are strictly immutable arrays of bytes/characters clarifies why naive string concatenation inside loops (e.g., `s += char`) incurs disastrous $O(n^2)$ time complexity. Each append requires allocating a brand new memory block and copying all previous characters. Utilizing dedicated mutable buffers (`StringBuilder` in Java, `"".join()` in Python, and array buffering in TypeScript) preserves optimal $O(n)$ linear runtime.

## Evidence
- Internalized the contiguous memory and addressing formulas in Lesson 0003, establishing how array allocations behave.
- Traced the geometric cost of repeated memory copies versus amortized buffer expansion.

## Implications
- In interview problems involving strings (palindromes, parsing, anagrams), avoiding string slicing and repeated string concatenation prevents time limit exceeded (TLE) errors.
- Sets the stage for pointer-based string scans (Two Pointers and Sliding Window) that manipulate index pointers in $O(1)$ space without creating intermediate substring copies.
