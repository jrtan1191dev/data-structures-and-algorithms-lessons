# Data Structures and Algorithms Resources

A curated repository of high-trust, authoritative primary literature, theoretical foundational textbooks, cognitive problem-solving heuristics, and practitioner communities. Grounded in contextual primary knowledge, never in unverified parametric memory.

---

## 1. Authoritative Primary Literature (The Master Canon)

The foundational texts defining computer science algorithmic theory, formal proofs, hardware memory layouts, and mathematical invariants:

- **[CLRS: "Introduction to Algorithms" (4th Edition)](https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/)**  
  *Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein (MIT Press)*  
  **The definitive theoretical gold standard.**  
  *Core Mastery Areas*:
  - Chapter 3: Formal Asymptotic Growth ($\Theta, O, \Omega, o, \omega$ bounds).
  - Chapter 4: Divide-and-Conquer Recurrences & The Master Theorem.
  - Chapter 17: Amortized Analysis (Aggregate Method, Accounting Method, Potential Method for dynamic array resizing).
  - Chapters 20–24: Rigorous Graph Theory (BFS/DFS tree/back/forward/cross edge classification, Topological Sort finish-time proof, Dijkstra, Bellman-Ford, Kruskal & Prim via Disjoint Set Union).
  - Chapter 14: Dynamic Programming State Formulations & Optimal Substructure.

- **[Sedgewick & Wayne: "Algorithms" (4th Edition)](https://algs4.cs.princeton.edu/home/)**  
  *Robert Sedgewick and Kevin Wayne (Princeton University / Addison-Wesley)*  
  **The definitive bridge between theoretical algorithms and physical hardware.**  
  *Core Mastery Areas*:
  - Memory representation: 64-bit JVM/V8 object header overhead, pointer alignment, cache line strides.
  - 3-Way Radix & Dijkstra Dutch National Flag Partitioning (Quicksort with duplicated keys).
  - Left-Leaning Red-Black Trees (LLRB) as direct 2-3 tree isometry.
  - Heaps & Priority Queues (Floyd's bottom-up $O(N)$ linear-time heapify).
  - Union-Find with Path Compression and Weighted Quick-Union ($O(\alpha(N))$ inverse Ackermann bound).

- **[Aziz, Lee & Prakash: "Elements of Programming Interviews" (EPI)](https://elementsofprogramminginterviews.com/)**  
  *Adnan Aziz, Tsung-Hsien Lee, Amit Prakash*  
  **The battle-tested engineering standard for interview invariant analysis.**  
  *Core Mastery Areas*:
  - Explicitly cross-referenced in Grind 75 metadata (`epi` reference tags).
  - Primitive types and bit-level manipulation ($O(1)$ parity lookups, reverse bits, bit clearing).
  - Invariant preservation under adversarial and extreme boundary inputs.
  - Systematic decomposition of hard interview problems without library shortcuts.

- **[Tim Roughgarden: "Algorithms Illuminated" (Parts 1–4)](https://www.algorithmsilluminated.org/)**  
  *Tim Roughgarden (Stanford CS161 / Columbia University)*  
  **Mastery of algorithmic intuition and mathematical exchange arguments.**  
  *Core Mastery Areas*:
  - Part 1: Divide-and-Conquer, Master Method, and Randomized Selection ($O(N)$ Quickselect).
  - Part 2: Graph Search, Shortest Paths, Heaps, Search Trees, and Union-Find.
  - Part 3: Greedy Algorithms & Dynamic Programming (Exchange arguments, Knapsack, Sequence Alignment, Bellman-Ford).
  - Part 4: NP-Completeness, exact exponential algorithms, and recognizing intractability.

- **[Donald Knuth: "The Art of Computer Programming" (TAOCP), Vol 4A](https://www-cs-faculty.stanford.edu/~knuth/taocp.html)**  
  *Donald E. Knuth (Addison-Wesley)*  
  **Combinatorial algorithms, bit twiddling, and backtrack pruning.**  
  *Core Mastery Areas*:
  - Section 7.1.3: Bitwise Tricks and Techniques (SWAR, popcount, lowest bit isolation).
  - Section 7.2.1: Generating all combinations and permutations without recursion.
  - Exact Cover and Dancing Links (Algorithm X) for constraint satisfaction (N-Queens, Sudoku).

- **[Steven Skiena: "The Algorithm Design Manual" (3rd Edition)](https://www.algorist.com/)**  
  *Steven S. Skiena (Springer)*  
  **The practitioner's catalog and real-world failure analysis.**  
  *Core Mastery Areas*:
  - "War Stories": Detailed post-mortems of how textbook algorithms collapsed in production due to cache misses, quadratic degredation, or missed invariants.
  - The Hitchhiker's Guide Problem Catalog: Systematic lookup matrix from problem description to canonical model.
  - "Look for the Bottleneck" optimization heuristic.

- **[George Pólya: "How to Solve It"](https://en.wikipedia.org/wiki/How_to_Solve_It)**  
  *George Pólya (Princeton University Press)*  
  **The foundational heuristic for mathematical discovery.**  
  *The 4-Step Mental Model*:
  1. *Understand the Problem*: What are the data? What is the condition? Draw a diagram.
  2. *Devise a Plan*: Find the connection between data and unknown. Have you seen a related problem?
  3. *Carry Out the Plan*: Check each step. Can you prove each step is correct?
  4. *Look Back & Generalize*: Can you check the result? Can you derive the solution differently? Can you see it at a glance?

---

## 2. Pedagogical Frameworks & Cognitive Heuristics

Systems designed to cultivate storage strength, pattern recognition, and transition intuition:

- **[Yangshun Tay: Tech Interview Handbook & Grind 75 / Grind 169](https://www.techinterviewhandbook.org/grind75/?weeks=26)**  
  *Yangshun Tay (Meta Staff Engineer, author of Blind 75)*  
  Curated 169-question priority matrix and study scheduler. Bridges theoretical algorithms with FAANG interview expectations, time-to-solve benchmarks, and algorithmic cheatsheets.
- **[Maddy Zhang: The Transition Mindset & 9 Visual Triggers](https://www.youtube.com/@maddyzhang)**  
  High-yield problem deconstruction framework:
  1. Constraint Budgeting ($N \le 10^5 \implies O(N)$ or $O(N \log N)$).
  2. State Naive Brute Force ($O(N^2)$ baseline).
  3. Isolate Redundant Waste (Identify unneeded repeated scans).
  4. Select Minimal Pattern & Invariant.
- **[Gayle Laakmann McDowell: "Cracking the Coding Interview"](http://www.crackingthecodinginterview.com/)**  
  The 5 Core Optimization Heuristics:
  1. **BUD**: Bottlenecks, Unnecessary work, Duplicated work.
  2. **DIY**: Do It Yourself manually on paper with human intuition.
  3. **Simplify & Generalize**: Solve a constrained or simplified version first.
  4. **Base Case & Build**: Build inductive solutions from $n=1, 2, 3$.
  5. **Data Structure Brainstorm**: Systematically cycle through Hash Table, Heap, BST, Trie, Graph.
- **[Abdul Bari: Algorithm Analysis & Visualization Lectures](https://www.youtube.com/@abdul_bari/videos)**  
  Rigorous whiteboard step-by-step proofs of dynamic programming DAGs, greedy matroids, and asymptotic recurrence trees.
- **[Hasen Kuniyama: The MIT 4-Tier Deep Inquiry Engine](https://www.linkedin.com/posts/hasen-kuniyama-316002a7_how-ai-can-compress-a-semester-of-learning-activity-7436494951988936704-c5MA)**  
  Treating AI as an intellectual sparring partner:
  1. Surface 5 core expert mental models.
  2. Map fundamental architectural debates and trade-offs.
  3. Administer discriminative litmus tests separating true understanding from memorization.
  4. Conduct Socratic forensic error analysis.
- **[NeetCode Roadmap](https://neetcode.io/roadmap)**  
  Visual dependency graph organizing algorithmic topics into an intuitive prerequisite tree.

---

## 3. Deliberate Practice & Verification Suites

- **[Tech Interview Handbook Grind 169 (26-Week Track)](https://www.techinterviewhandbook.org/grind75/?weeks=26)**  
  The complete 169-problem syllabus distributed across 26 weeks (~6.5 problems / ~5.7 hours per week). Covers 17 topic domains across 41 Easy, 102 Medium, and 26 Hard questions.
- **[LeetCode Problem Database](https://leetcode.com/problemset/all/)**  
  Standard interview benchmark platform for real-time testing, runtime percentiles, and memory consumption checks.

---

## 4. Wisdom (Practitioner Communities)

- **[LeetCode Discuss](https://leetcode.com/discuss/)**  
  Live post-mortems, real interview question reports, edge-case breakdowns, and community multi-language optimizations.
- **[r/leetcode](https://reddit.com/r/leetcode)**  
  Peer benchmarking, pacing accountability, and real-world hiring bar calibrating.
- **[Computer Science Stack Exchange](https://cs.stackexchange.com/)**  
  Formal asymptotic complexity proofs, algorithm correctness debates, and theoretical edge cases.
- **[Codeforces Blog & Tutorials](https://codeforces.com/)**  
  World-class competitive programming explanations for advanced invariants (Monotonic Queue, Tree DP, Sweep Line).
