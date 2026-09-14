# Mission: Master Data Structures, Algorithmic Invariants & Mechanical Sympathy

## Why
Transform algorithmic problem-solving from an anxiety-inducing memorization chore into an intuitive, high-performance engineering discipline. The ultimate goal is twofold:
1. **Interview Dominance**: Confidently dismantle unseen technical coding interview questions at top-tier companies (FAANG, high-frequency trading, infrastructure teams) under timed, adversarial conditions without reliance on memorized templates.
2. **Production Engineering Rigor**: Cultivate deep *mechanical sympathy*—understanding how high-level abstractions map down to CPU caches, RAM bus bandwidth, garbage collectors, and physical memory architectures across Python, TypeScript, and Java.

## Success looks like
- **Complexity on Sight**: Instantly classify time ($O(1)$ to $O(N!)$) and auxiliary space complexity (heap allocations vs. execution stack frames) for any algorithm or snippet from first principles.
- **Deconstruct Unseen Mediums & Hards**:
  - Solve LeetCode Medium-level problems in under 20 minutes from an empty buffer.
  - Decompose LeetCode Hard problems (e.g., *Trapping Rain Water*, *Median of Two Sorted Arrays*, *Minimum Window Substring*, *Serialize and Deserialize Binary Tree*) in under 35 minutes by systematically isolating the underlying invariant and optimal substructure.
- **Full 169-Problem Mastery**: Complete and internalize all 169 canonical problems from the Tech Interview Handbook Grind 75 (26-week track), fluently articulating the *Transition Mindset* (Naive Brute Force $\to$ Redundant Waste $\to$ Invariant & Minimal Pattern).
- **Trilingual Mechanical Sympathy**: Fluently implement solutions across Python, TypeScript, and Java while explaining the exact language-level runtime implications:
  - *Python*: Object boxing, arbitrary-precision arithmetic, dynamic array geometric over-allocation, reference counts.
  - *TypeScript / V8*: Small integer (SMI) vs HeapNumber representations, hidden classes, typed arrays (`Int32Array`) vs sparse arrays.
  - *Java / JVM*: Primitive vs object wrapper boxing (`int` vs `Integer`), cache-unfriendly pointer hopping in node trees, `HashMap` treeification at threshold 8.
- **Architectural Trade-Off Fluency**: Defend architectural trade-offs using the MIT 4-Tier Deep Inquiry Engine (e.g., Quicksort cache locality vs Mergesort stability; Separate Chaining vs Open Addressing; Top-Down memoization vs Bottom-Up tabulation; In-Place mutation vs Persistent immutability).
- **Forensic Self-Correction**: When an implementation fails or times out, perform rapid forensic error analysis to isolate the exact broken invariant or overlooked edge case without guessing.

## Constraints
- **First-Principles Grounding**: Never accept a formula, heuristic, or library method as a black box. Derive bounds, prove loop invariants, and trace memory layouts explicitly before optimizing.
- **Active Retrieval over Passive Consumption**: Adhere to the 30-minute deliberate practice protocol: solitary pencil-and-paper diagramming before viewing hints; no passive reading of solutions.
- **Tri-Language Parity**: Core concepts, memory mechanics, and interview idioms must always be evaluated across Python, TypeScript, and Java in parallel.
- **Authoritative Primary Literature**: Ground conceptual models in foundational computer science literature (**CLRS**, **Sedgewick & Wayne**, **Aziz/Lee/Prakash EPI**, **Roughgarden**, **Knuth**, **Skiena**), bypassing superficial blog simplifications.

## Out of scope
- Niche, hyper-specialized competitive programming topics (e.g., Treaps, Heavy-Light Decomposition, Link-Cut Trees, FFT, Suffix Automata) that have near-zero incidence in production engineering or FAANG-level interviews.
- Superficial rote memorization of hundreds of uncurated, repetitive LeetCode problems beyond the 169 canonical archetypes.
