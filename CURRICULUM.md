# Data Structures & Algorithms Mastery: Full Curriculum Roadmap

A comprehensive, first-principles curriculum for technical interview mastery and high-performance production engineering across **Python**, **TypeScript**, and **Java**.

---

## Pedagogical Pillars
1. **Physical RAM & Memory Mechanics First**: Understand pointer references, cache line locality, and CPU word boundaries before discussing abstractions.
2. **Asymptotic Runtime Intuition**: Classify time ($O(1)$ to $O(2^n)$) and space (auxiliary heap vs. stack frames) on sight.
3. **9 Core Algorithmic Patterns**: Pattern recognition (Two Pointers, Sliding Window, Monotonic Stack, Fast/Slow Pointers, Top-$K$, Trees, Graphs, Backtracking, DP) over mindless memorization.
4. **Trilingual Mastery**: Every conceptual implementation, syntax nuance, and collection trade-off compared in parallel across Python, TypeScript, and Java.
5. **Interactive Retrieval Practice**: Tufte-style interactive lessons with active recall checks and balanced distractors.

---

## The Problem-Solving Intuition Framework (Maddy Zhang & Primary Sources)

Technical interviews test your **problem-solving intuition**, not how many solutions you have memorized. Grounded in Maddy Zhang's core methodology, Abdul Bari's theoretical proofs, and Yangshun Tay's interview execution protocols, our curriculum embeds a repeatable 4-phase intuition engine:

### 1. The 4-Phase Diagnostic Engine (Transition Mindset)
When faced with an unseen interview question:
1. **Budget Complexity from Constraints**: Inspect the upper bound of $N$ to determine your allowed runtime budget before typing code.
2. **Formulate the Naive Brute Force**: State the obvious nested-loop or recursive approach ($O(N^2)$ or $O(2^N)$). This anchors your baseline and guarantees partial credit.
3. **Isolate the Redundant Waste**: Ask: *Where is the CPU doing unnecessary or repeated work?* (e.g., repeatedly scanning forward for the next larger element, recalculating overlapping prefix sums, recomputing identical subtrees).
4. **Deploy the Invariant & Minimal Pattern**: Choose the minimal data structure whose mathematical invariant permanently eliminates that specific waste.

### 2. Constraint-to-Complexity Budget Table
In competitive programming and technical interviews (assuming standard $\approx 10^7 - 10^8$ operations per second):

| Input Scale ($N$) | Maximum Viable Time Complexity | Likely Target Patterns | Typical Archetypes |
| :--- | :--- | :--- | :--- |
| **$N \le 10 - 12$** | $O(N!)$ | Full permutation generation, traveling salesperson | N-Queens, generating all valid sequences |
| **$N \le 20 - 25$** | $O(2^N)$ | Backtracking, power set generation, bitmask DP | Subsets, Combination Sum, Word Search |
| **$N \le 100 - 500$** | $O(N^3)$ | 2D/3D Grid Dynamic Programming, All-Pairs Shortest Path | Floyd-Warshall, 3Sum Brute Force |
| **$N \le 1\,000 - 2\,000$** | $O(N^2)$ | 2D DP matrices, nested array scans | Longest Common Subsequence, Edit Distance |
| **$N \le 10^5 - 10^6$** | $O(N \log N)$ or $O(N)$ | Two Pointers, Sliding Window, Monotonic Stack, Hash Maps, Heaps | Two Sum, Subarray Sum Equals K, Daily Temperatures, Merge Intervals |
| **$N \ge 10^9$** | $O(\log N)$ or $O(1)$ | Binary Search on Answer Space, Bit Manipulation, Math | Koko Eating Bananas, Single Number, Reverse Bits |

### 3. Maddy Zhang's 9 Core Pattern Recognition Triggers

| Pattern | Unmistakable Problem Triggers | Underlying Invariant & Intuition | Canonical Benchmark |
| :--- | :--- | :--- | :--- |
| **1. Two Pointers** | Sorted array, finding pairs/triplets, palindrome checks, in-place element swapping | Monotonicity of sorted sequence: moving pointer discards entire row/column in $O(1)$ | Two Sum II, 3Sum, Container With Most Water |
| **2. Sliding Window** | Contiguous subarrays/substrings, "longest/shortest subarray with condition $X$" | State reuse: update entering/exiting elements in $O(1)$ instead of recalculating window | Longest Substring Without Repeating, Min Window |
| **3. Hash Maps & Prefix Sums** | Frequency counting, $O(1)$ lookups, "number of subarrays with sum $K$" | Difference identity $P[j] - P[i] = K \implies P[i] = P[j] - K$; trading $O(N)$ memory for time | Subarray Sum Equals K, Group Anagrams |
| **4. Monotonic Stack/Queue** | "Next greater element", "previous smaller element", histogram rectangle area | Maintain monotonic invariant; pop candidates that can never be an answer again | Daily Temperatures, Largest Rectangle in Histogram |
| **5. Binary Search** | Sorted sequence, or monotonic boolean condition $f(x) \to \{\text{True}, \text{False}\}$ | Halving candidate space in $O(\log N)$; binary search on answer space for min/max | Binary Search, Rotated Array, Koko Bananas |
| **6. Tree & Graph Traversals** | Hierarchical data, level-by-level dependencies, shortest paths, connected islands | BFS for unweighted shortest path / levels; DFS for exhaustive paths; Kahn's / DSU | Level Order, Number of Islands, Course Schedule |
| **7. Intervals & Scheduling** | Overlapping time intervals, meeting room scheduling, merge ranges | Sort by start time (for merges) or end time (for max non-overlapping greedy) | Merge Intervals, Meeting Rooms II |
| **8. Backtracking** | "Return ALL combinations / permutations / partitions", grid word searches | State-space tree exploration with choose-explore-unchoose and branch-and-bound | Subsets, Combination Sum, Word Search |
| **9. Dynamic Programming** | "Find maximum / minimum / count total ways", overlapping subproblems | Cache subproblem results (memoization / tabulation); state transition recurrence | Climbing Stairs, Coin Change, LCS |

### 4. The 30-Minute Deliberate Practice Protocol (Escaping the "Tutorial Trap")
- **15-Minute Solitary Attempt**: Stare at the problem with a whiteboard or pencil and paper. Diagram pointer movements and trace 2 small test cases before writing code.
- **Identify Pattern First**: Do not look up code. If stuck, look ONLY at the *pattern classification* (e.g., "This is Monotonic Stack").
- **Active Code Reproduction**: If you must read an optimal solution, close the solution window, wait 2 minutes, and implement it from first principles in Python, TypeScript, or Java.
- **Verify Edge Cases**: Run mental tests on empty input, single element, duplicates, and negative numbers before finishing.

### 5. The MIT 48-Hour Learning Framework (Hasen Kuniyama Method)
To compress months of algorithmic study into rapid, durable mastery, use AI as an intellectual sparring partner asking three high-leverage diagnostic questions:
1. **The 5 Core Expert Mental Models**:
   - *Hardware Locality*: 64-byte L1/L2 cache lines make contiguous arrays $10\times\text{--}50\times$ faster than pointer nodes.
   - *Monotonic Search Space Pruning*: Discard chunks of pairs/candidates without inspecting them.
   - *Spatial Complementarity*: Look backward into memory to match complementary pieces ($target - val$).
   - *Recursive Decomposition*: Model problems as directed acyclic graphs of identical subproblems.
   - *Information-Theoretic Bounds*: Comparison sorting cannot beat $\Omega(N \log N)$ because $h \ge \log_2(N!) \approx N \log_2 N$.
2. **Where Experts Disagree (The Architectural Debates)**:
   - Quicksort vs Mergesort (Cache locality vs worst-case stability).
   - Separate Chaining vs Open Addressing (Graceful degradation vs contiguous cache hits).
   - Top-Down Memoization vs Bottom-Up Tabulation (Sparse graph exploration vs rolling-variable $O(1)$ space).
   - In-Place Mutation vs Immutability ($O(1)$ allocations vs thread safety).
3. **The 10 Litmus Tests (True Understanding vs Memorization)**:
   - Use our diagnostic litmus tests (e.g. why dynamic arrays double geometrically vs $+100$, why Dijkstra fails on negative edges, why sliding window is $O(N)$ despite nested while loops) to test true mastery.

---

## Master Module & Lesson Map

| Module | Lesson ID | Topic / Pattern | Key Focus & Mechanics | Target Interview Problems | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Module 1: Foundations & Algorithmic Complexity** | **0001** | Big-O & Algorithmic Intuition | Constant $O(1)$, Linear $O(n)$, Quadratic $O(n^2)$, scale comparisons | Two Sum (Brute Force vs Hash Set) | **Completed** |
| | **0002** | The Full Complexity Spectrum | Logarithmic $O(\log n)$, Divide & Conquer $O(n \log n)$, Exponential $O(2^n)$, Factorial $O(n!)$, Auxiliary Heap vs Recursion Stack | Binary Search, Merge Sort intuition, Fibonacci | **Completed** |
| **Module 2: Contiguous Memory & Dynamic Arrays** | **0003** | Contiguous Memory & Dynamic Arrays | RAM addressing formulas ($Base + i \times S$), instant $O(1)$ indexing, element shifts, geometric capacity doubling ($2\times$ vs $1.5\times$), amortized analysis | Dynamic Array implementation | **Completed** |
| | **0004** | Strings & Byte Representation | String immutability, UTF-8 vs UTF-16 code units, StringBuilder / char arrays, string slicing overhead ($O(k)$ copy vs views) | Valid Palindrome, Longest Common Prefix | **Completed** |
| **Module 3: The Two Pointers Pattern** | **0005** | Converging & Opposing Pointers | Left/right boundaries moving toward center, monotonic reduction of search space, in-place sequence reversal | Two Sum II (Sorted), Container With Most Water, 3Sum | **Completed** |
| | **0006** | Fast & Slow Pointers (Floyd's Cycle) | Pointer speed differentials ($1\times$ vs $2\times$), mathematical proof of cycle convergence, sequence midpoint finding | Linked List Cycle, Find the Duplicate Number | **Completed** |
| **Module 4: The Sliding Window Pattern** | **0007** | Fixed-Size Sliding Windows | Reusing state across adjacent intervals, $O(1)$ updates ($+ \text{enter} - \text{exit}$), fixed subarray aggregations | Maximum Average Subarray I, Permutation in String | **Completed** |
| | **0008** | Dynamic-Size Sliding Windows | Greedy window expansion until invalid, contraction loop until valid, state preservation with hash tables | Longest Substring Without Repeating Characters, Minimum Window Substring | **Completed** |
| **Module 5: Hash Tables & Frequency Analysis** | **0009** | Hash Tables, Collisions & Load Factors | Hash functions, bucket arrays, separate chaining vs open addressing, load factor resizing threshold, worst-case $O(n)$ degradation | Design HashMap, Two Sum | **Completed** |
| | **0010** | Frequency Counting & Prefix Sums | Counter hash maps, cumulative prefix sum arrays, difference lookups ($P[j] - P[i] = K$) | Group Anagrams, Subarray Sum Equals K, Longest Consecutive Sequence | **Completed** |
| **Module 6: Linked Lists & Node Pointers** | **0011** | Singly & Doubly Linked Lists | Heap-allocated nodes, pointer redirection, dummy/sentinel nodes to eliminate edge cases, in-place list reversal | Reverse Linked List, Remove Nth Node From End | **Completed** |
| | **0012** | Advanced List Techniques & Sentinels | Multi-pointer coordination, recursive vs iterative list merges, combining doubly linked lists with hash maps | Merge Two Sorted Lists, Reorder List, LRU Cache | **Completed** |
| **Module 7: Stacks, Queues & Monotonic Sequences** | **0013** | Stacks, Queues & Deques | LIFO vs FIFO semantics, call stack execution frames, double-ended queues, ring buffer array implementations | Valid Parentheses, Min Stack, Implement Queue using Stacks | **Completed** |
| | **0014** | Monotonic Stack & Monotonic Queue | Maintaining monotonic ordering (strictly increasing/decreasing), finding next greater/smaller elements in $O(n)$ time | Daily Temperatures, Next Greater Element I, Largest Rectangle in Histogram | **Completed** |
| **Module 8: Binary Search & Search Space Reduction** | **0015** | Classic Binary Search & Boundary Templates | Left/right midpoint calculation avoiding integer overflow, lower bound vs upper bound templates, bisect mechanics | Binary Search, Search in Rotated Sorted Array, Find First and Last Position | **Completed** |
| | **0016** | Binary Search on Answer Space | Monotonic boolean predicate functions $f(x) \to \{\text{True}, \text{False}\}$, minimizing maximums / maximizing minimums | Koko Eating Bananas, Capacity To Ship Packages, Split Array Largest Sum | **Completed** |
| **Module 9: Trees & Binary Search Trees (BFS & DFS)** | **0017** | Binary Tree Traversals: DFS & BFS | Pre-order, In-order, Post-order call stack mechanics, Level-order queue traversal, tree height & diameter invariants | Maximum Depth of Binary Tree, Invert Binary Tree, Binary Tree Level Order | **Completed** |
| | **0018** | Binary Search Trees & Validation | BST search invariant ($Left < Root < Right$), range validation bounds $(-\infty, \infty)$, BST insertion and in-order succession | Validate Binary Search Tree, Lowest Common Ancestor of a BST | **Completed** |
| **Module 10: Heaps, Priority Queues & Top-K Elements** | **0019** | Binary Heap Mechanics & Heapify | Array layout of complete binary trees ($\text{parent} = \lfloor(i-1)/2\rfloor$), sift-up, sift-down, linear $O(n)$ build-heap vs $O(n \log n)$ insertions | Implement Min-Heap, Merge k Sorted Lists | **Completed** |
| | **0020** | The Top-K Elements & Two Heaps Pattern | Min-heap of size $K$ for $K$-largest, dual balancing heaps (max-heap + min-heap) for streaming medians | Kth Largest Element in an Array, Find Median from Data Stream, Top K Frequent | **Completed** |
| **Module 11: Backtracking & State Space Trees** | **0021** | Backtracking Foundations: Subsets & Permutations | State space tree traversal, the choose-explore-unchoose paradigm, recursion tree branching factor | Subsets, Permutations | **Completed** |
| | **0022** | Constrained Search: Combinations & Grid Traversal | Branch pruning with boundary validation, visited coordinate tracking, avoiding redundant subtrees | Combination Sum, Word Search, N-Queens | **Completed** |
| **Module 12: Graphs: Traversals & Topological Order** | **0023** | Graph Representations & Core Traversals | Adjacency list vs adjacency matrix, BFS unweighted shortest path, DFS connected components and cycle detection | Number of Islands, Clone Graph, 01 Matrix | **Completed** |
| | **0024** | Topological Sort & Disjoint Set Union (DSU) | In-degree calculation & Kahn's algorithm, Union-Find with path compression and rank optimization | Course Schedule, Course Schedule II, Redundant Connection | **Completed** |
| **Module 13: Dynamic Programming (DP)** | **0025** | 1D Dynamic Programming: Memoization vs Tabulation | Optimal substructure, overlapping subproblems, top-down memoization vs bottom-up state transitions, space compression ($O(n) \to O(1)$) | Climbing Stairs, House Robber, Coin Change | **Completed** |
| | **0026** | 2D & Subsequence Dynamic Programming | 2D state matrices, decision choices, prefix matching, 0/1 Knapsack pattern | Longest Common Subsequence, Edit Distance, Partition Equal Subset Sum | **Completed** |
| **Module 14: Intervals & Scheduling** | **0027** | Interval Manipulation & Overlap Consolidation | Start-time vs end-time sorting invariants, mutual exclusion condition `curr.start < prev.end`, interval insertion, sweep-line algorithms | Merge Intervals, Insert Interval, Non-overlapping Intervals, Meeting Rooms I & II | **Completed** |
| **Module 15: Bit Manipulation & Binary Operations** | **0028** | Bitwise Arithmetic & Binary Masking | Two's complement integer representation, XOR self-cancellation property ($x \oplus x = 0$), Brian Kernighan's bit-clearing trick ($n \mathrel{\&} (n-1)$), bitmasking subsets | Single Number, Number of 1 Bits, Counting Bits, Missing Number, Reverse Bits | **Completed** |
| **Module 16: Tries & Prefix Trees** | **0029** | Prefix Trees & Multi-String Search | 26-ary tree node pointer architecture, prefix querying mechanics vs exact match, trie-guided backtracking, pruning search space on 2D grids | Implement Trie (Prefix Tree), Design Add and Search Words Data Structure, Word Search II | **Completed** |
| **Module 17: Matrix Simulation & Geometric Transforms** | **0030** | Matrix In-Place Manipulations & Simulations | 2D row-major memory stride calculation (`base + (row * cols + col) * size`), boundary contraction, matrix transposition and column reflection for $90^\circ$ rotation, first-row/first-column state markers for $O(1)$ space | Spiral Matrix, Rotate Image, Set Matrix Zeroes | **Completed** |

---

## Quick Reference Cheatsheet Track

| Cheatsheet | Content Coverage | Status |
| :--- | :--- | :--- |
| **Problem-Solving Intuition & Pattern Recognition** | 4-phase transition mindset, constraint-to-complexity budget, 9 pattern visual cues, deliberate practice protocol | **Completed** |
| **Expert Mental Models, Debates & Litmus Tests** | MIT 48-hour learning method: 5 expert models, 6 architectural debates, 10 deep understanding litmus tests | **Completed** |
| **Big-O & Algorithmic Complexity** | Growth rate hierarchy, Golden Simplification Rules, language collections matrix | **Completed** |
| **Arrays & Dynamic Arrays** | Memory offset formula, operation time/space matrix, internal resizing mechanics | **Completed** |
| **Hash Tables & Prefix Sums** | Collision resolution (chaining vs open addressing), load factor math, prefix sum identities | **Completed** |
| **Two Pointers & Sliding Window** | Opposing, fast-slow, fixed-window, and dynamic-window templates with boundary condition checklists | **Completed** |
| **Linked Lists, Stacks & Monotonic** | Sentinel/dummy patterns, in-place list reversal, circular ring buffer math, monotonic templates | **Completed** |
| **Binary Search & Answer Space** | Overflow-safe midpoints, boundary insertion templates, rotated arrays, answer space reduction | **Completed** |
| **Heaps & Top-K Patterns** | Complete binary tree array indexing, Floyd's O(N) heapify, bounded Top-K, dual-heap streaming median | **Completed** |
| **Trees & Graph Traversals** | Traversal templates (DFS recursive/iterative, BFS queue, Kahn's algorithm, DSU) | **Completed** |
| **Backtracking & State Pruning** | Choose-explore-unchoose paradigm, combinatorial branching models, branch-and-bound pruning | **Completed** |
| **Dynamic Programming Decision Framework** | State identification, transition equation derivation, space optimization strategies | **Completed** |
| **Interview Corner Cases Checklist** | Universal pre-flight edge-case verification checklist across all core data structures | **Completed** |
| **Intervals & Scheduling Mechanics** | Sorting preconditions, overlap consolidation rules, greedy interval scheduling algorithms, concurrent meeting room allocations | **Completed** |
| **Bit Manipulation & Binary Operations** | Hardware ALU bitwise primitives, XOR self-cancellation rules, bitmask recipes, binary arithmetic without arithmetic operators | **Completed** |
| **Trie & Prefix Tree Architecture** | 26-ary tree node pointer architecture, prefix querying mechanics, wildcard depth-first searches, exponential multi-string grid pruning | **Completed** |

---

## Grind 169: Full 26-Week Deliberate Practice Roadmap

The complete [Tech Interview Handbook Grind 75 (26-Week Track)](https://www.techinterviewhandbook.org/grind75/?weeks=26) comprises **169 canonical problems** (41 Easy, 102 Medium, 26 Hard) requiring ~5.7 hours per week (~6.5 problems/week). Every problem is grounded in our 30 foundational lessons and authoritative primary literature (**CLRS**, **Sedgewick & Wayne**, and **Aziz/Lee/Prakash EPI**).

### The 5 Pedagogical Study Phases

- **Phase 1: Foundational Mechanics & Linear Invariants (Weeks 1–6)**: 41 Easy problems establishing Big-O intuition, RAM layout, two pointers, sliding window, hash lookups, and recursion baselines.
- **Phase 2: Linear Optimizations, Monotonic Structures & Tree Traversal (Weeks 7–12)**: 42 Medium problems mastering Kadane algorithm, multi-source BFS, graph cycle detection, binary search variants, and tree invariants.
- **Phase 3: Combinatorial Search, Disjoint Sets & Intermediate DP (Weeks 13–17)**: 35 Medium problems mastering state-space trees, DSU/topological sort, 0/1 Knapsack, monotonic stacks, and trie structures.
- **Phase 4: Advanced Medium Invariants & Matrix Geometric Transforms (Weeks 18–21)**: 25 Medium problems mastering string parsing, matrix rotations, interval consolidation, and complex state transitions.
- **Phase 5: Hard Boundary Invariants & Extreme Optimization (Weeks 22–26)**: 26 Hard problems mastering multi-dimensional DP, two-pointer water trapping, trie grid searches, and balanced dual heap streams.

--- 

### Comprehensive 26-Week Problem & Reference Matrix

#### Week 1 (Phase 1 &bull; Easy Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [1](https://leetcode.com/problems/two-sum) | **Two Sum** | `Easy` | array (hashing) | **Lesson 0009** | Trade O(N) auxiliary space to store complement lookups in O(1); eliminates O(N^2) pairwise scanning. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [20](https://leetcode.com/problems/valid-parentheses) | **Valid Parentheses** | `Easy` | stack (stack) | **Lesson 0013** | LIFO bracket stack validation; immediately reject mismatched closing tokens or remaining open tokens. | EPI Ch. 3 |
| [21](https://leetcode.com/problems/merge-two-sorted-lists) | **Merge Two Sorted Lists** | `Easy` | linked-list (linked-list) | **Lesson 0012** | Sentinel dummy head pointer eliminates edge cases for empty list heads and splicing. | EPI Ch. 0 |
| [121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock) | **Best Time to Buy and Sell Stock** | `Easy` | array (array) | **Lesson 0008** | One-pass greedy scan maintaining prefix minimum price seen so far in O(N) time and O(1) space. | EPI Ch. 0 |
| [125](https://leetcode.com/problems/valid-palindrome) | **Valid Palindrome** | `Easy` | string (palindrome) | **Lesson 0004** | Two converging pointers skipping non-alphanumerics without allocating an auxiliary string. | EPI Ch. 2 |
| [226](https://leetcode.com/problems/invert-binary-tree) | **Invert Binary Tree** | `Easy` | binary-tree (binary-tree) | **Lesson 0017** | Recursive DFS subtree swap: invert children before or after swapping pointers. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [242](https://leetcode.com/problems/valid-anagram) | **Valid Anagram** | `Easy` | string (anagram) | **Lesson 0010** | Fixed 26-element integer frequency vector; verify all character net counts equal zero. | Sedgewick Ch. 1 / CLRS Ch. 17 |

#### Week 2 (Phase 1 &bull; Easy Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [792](https://leetcode.com/problems/binary-search) | **Binary Search** | `Easy` | binary-search (binary-search) | **Lesson 0015** | Integer-overflow safe midpoint calculation: left + (right - left) // 2. | CLRS Ch. 2 / Roughgarden Pt. 1 |
| [733](https://leetcode.com/problems/flood-fill) | **Flood Fill** | `Easy` | graph (matrix, depth-first-search) | **Lesson 0023** | DFS/BFS boundary fill: guard against infinite recursion when newColor equals startColor. | EPI Ch. 2 |
| [235](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree) | **Lowest Common Ancestor of a Binary Search Tree** | `Easy` | binary-search-tree (binary-search-tree) | **Lesson 0018** | BST search split property: LCA is the unique node where p and q diverge. | EPI Ch. 1 |
| [110](https://leetcode.com/problems/balanced-binary-tree) | **Balanced Binary Tree** | `Easy` | binary-tree (binary-tree) | **Lesson 0017** | Bottom-up DFS calculating subtree height; return -1 immediately if left and right heights differ by > 1. | EPI Ch. 0 |
| [141](https://leetcode.com/problems/linked-list-cycle) | **Linked List Cycle** | `Easy` | linked-list (two-pointers) | **Lesson 0006** | Floyd cycle-finding algorithm: fast pointer advances 2x, slow pointer advances 1x; meeting proves cycle. | EPI Ch. 1 |
| [232](https://leetcode.com/problems/implement-queue-using-stacks) | **Implement Queue using Stacks** | `Easy` | stack (stack) | **Lesson 0013** | Amortized O(1) two-stack push/pop transfer: only transfer when output stack is empty. | EPI Ch. 3 |
| [278](https://leetcode.com/problems/first-bad-version) | **First Bad Version** | `Easy` | binary-search (binary-search) | **Lesson 0015** | Binary search on monotonic boolean predicate f(x) -> {False, ..., False, True, ...}. | CLRS Ch. 2 / Roughgarden Pt. 1 |

#### Week 3 (Phase 1 &bull; Easy Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [383](https://leetcode.com/problems/ransom-note) | **Ransom Note** | `Easy` | hash-table (hash-table) | **Lesson 0009** | Frequency table count decrementing with early-exit failure check on negative balance. | EPI Ch. 0 |
| [70](https://leetcode.com/problems/climbing-stairs) | **Climbing Stairs** | `Easy` | dynamic-programming (dynamic-programming) | **Lesson 0025** | Fibonacci recurrence dp[i] = dp[i-1] + dp[i-2]; compress to two O(1) variables. | CLRS Ch. 14 / Roughgarden Pt. 3 |
| [409](https://leetcode.com/problems/longest-palindrome) | **Longest Palindrome** | `Easy` | string (palindrome) | **Lesson 0004** | Frequency parity: sum even counts and at most one odd center element. | EPI Ch. 2 |
| [206](https://leetcode.com/problems/reverse-linked-list) | **Reverse Linked List** | `Easy` | linked-list (linked-list) | **Lesson 0011** | Three-pointer in-place iteration (prev, curr, next) reversing pointers in O(N) time and O(1) space. | EPI Ch. 1 |
| [169](https://leetcode.com/problems/majority-element) | **Majority Element** | `Easy` | array (sorting) | **Lesson 0009** | Boyer-Moore voting algorithm: maintain candidate and count in O(N) time and O(1) space. | EPI Ch. 2 |
| [67](https://leetcode.com/problems/add-binary) | **Add Binary** | `Easy` | binary (binary) | **Lesson 0028** | Simulate full-adder bitwise arithmetic with carry across strings from right to left. | Knuth TAOCP 4A / EPI Ch. 4 |
| [543](https://leetcode.com/problems/diameter-of-binary-tree) | **Diameter of Binary Tree** | `Easy` | binary-tree (binary-tree) | **Lesson 0017** | Post-order traversal updating global diameter with left_height + right_height. | CLRS Ch. 12 / Sedgewick Ch. 3 |

#### Week 4 (Phase 1 &bull; Easy Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [908](https://leetcode.com/problems/middle-of-the-linked-list) | **Middle of the Linked List** | `Easy` | linked-list (two-pointers) | **Lesson 0006** | Fast/slow pointers: fast moves 2 steps, slow moves 1 step; slow lands on exact midpoint. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [104](https://leetcode.com/problems/maximum-depth-of-binary-tree) | **Maximum Depth of Binary Tree** | `Easy` | binary-tree (binary-tree) | **Lesson 0017** | Tree height recurrence: 1 + max(depth(left), depth(right)). | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [217](https://leetcode.com/problems/contains-duplicate) | **Contains Duplicate** | `Easy` | array (hash-table, sorting) | **Lesson 0003** | Hash set lookup for O(1) existence checks; early exit on first collision. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [252](https://leetcode.com/problems/meeting-rooms) | **Meeting Rooms** | `Easy` | array (interval) | **Lesson 0027** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [13](https://leetcode.com/problems/roman-to-integer) | **Roman to Integer** | `Easy` | math (math) | **Lesson 0001** | Mastery of math mechanics and invariant preservation. | EPI Ch. 4 |
| [874](https://leetcode.com/problems/backspace-string-compare) | **Backspace String Compare** | `Easy` | stack (stack) | **Lesson 0013** | Mastery of stack mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [338](https://leetcode.com/problems/counting-bits) | **Counting Bits** | `Easy` | binary (binary) | **Lesson 0028** | Mastery of binary mechanics and invariant preservation. | Knuth TAOCP 4A / EPI Ch. 4 |

#### Week 5 (Phase 1 &bull; Easy Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [100](https://leetcode.com/problems/same-tree) | **Same Tree** | `Easy` | binary-tree (two-pointers) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [191](https://leetcode.com/problems/number-of-1-bits) | **Number of 1 Bits** | `Easy` | binary (binary) | **Lesson 0028** | Mastery of binary mechanics and invariant preservation. | Knuth TAOCP 4A / EPI Ch. 4 |
| [14](https://leetcode.com/problems/longest-common-prefix) | **Longest Common Prefix** | `Easy` | string (string) | **Lesson 0004** | Mastery of string mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [136](https://leetcode.com/problems/single-number) | **Single Number** | `Easy` | binary (binary) | **Lesson 0028** | Mastery of binary mechanics and invariant preservation. | Knuth TAOCP 4A / EPI Ch. 4 |
| [234](https://leetcode.com/problems/palindrome-linked-list) | **Palindrome Linked List** | `Easy` | linked-list (palindrome) | **Lesson 0011** | Mastery of linked list mechanics and invariant preservation. | EPI Ch. 4 |
| [283](https://leetcode.com/problems/move-zeroes) | **Move Zeroes** | `Easy` | array (two-pointers) | **Lesson 0003** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [101](https://leetcode.com/problems/symmetric-tree) | **Symmetric Tree** | `Easy` | binary-tree (binary-tree) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | EPI Ch. 2 |

#### Week 6 (Phase 1 &bull; Easy Tier &bull; 6 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [268](https://leetcode.com/problems/missing-number) | **Missing Number** | `Easy` | binary (binary) | **Lesson 0028** | Mastery of binary mechanics and invariant preservation. | Knuth TAOCP 4A / EPI Ch. 4 |
| [9](https://leetcode.com/problems/palindrome-number) | **Palindrome Number** | `Easy` | math (palindrome) | **Lesson 0001** | Mastery of math mechanics and invariant preservation. | EPI Ch. 4 |
| [108](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree) | **Convert Sorted Array to Binary Search Tree** | `Easy` | binary-search-tree (binary-search-tree) | **Lesson 0018** | Mastery of binary search-tree mechanics and invariant preservation. | EPI Ch. 3 |
| [190](https://leetcode.com/problems/reverse-bits) | **Reverse Bits** | `Easy` | binary (binary) | **Lesson 0028** | Mastery of binary mechanics and invariant preservation. | Knuth TAOCP 4A / EPI Ch. 4 |
| [572](https://leetcode.com/problems/subtree-of-another-tree) | **Subtree of Another Tree** | `Easy` | binary-tree (binary-tree) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [1019](https://leetcode.com/problems/squares-of-a-sorted-array) | **Squares of a Sorted Array** | `Easy` | array (array) | **Lesson 0003** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |

#### Week 7 (Phase 2 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [53](https://leetcode.com/problems/maximum-subarray) | **Maximum Subarray** | `Medium` | dynamic-programming (dynamic-programming) | **Lesson 0010** | Kadane algorithm: dp[i] = max(nums[i], dp[i-1] + nums[i]) in linear time. | CLRS Ch. 14 / Roughgarden Pt. 3 |
| [57](https://leetcode.com/problems/insert-interval) | **Insert Interval** | `Medium` | array (interval) | **Lesson 0027** | Three-phase partition: strictly before, overlapping merge, strictly after. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [542](https://leetcode.com/problems/01-matrix) | **01 Matrix** | `Medium` | graph (breadth-first-search) | **Lesson 0023** | Multi-source BFS from all 0-cells simultaneously to compute shortest Manhattan distances. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [1014](https://leetcode.com/problems/k-closest-points-to-origin) | **K Closest Points to Origin** | `Medium` | heap (geometry) | **Lesson 0020** | Max-heap of capacity K or Quickselect to find top K smallest Euclidean distances. | EPI Ch. 1 |
| [3](https://leetcode.com/problems/longest-substring-without-repeating-characters) | **Longest Substring Without Repeating Characters** | `Medium` | string (sliding-window) | **Lesson 0008** | Dynamic sliding window with hash map storing last seen character index. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [15](https://leetcode.com/problems/3sum) | **3Sum** | `Medium` | array (two-pointers) | **Lesson 0005** | Sort array, fix element i, and reduce remaining suffix to Two Sum II with duplicate skipping. | EPI Ch. 0 |
| [102](https://leetcode.com/problems/binary-tree-level-order-traversal) | **Binary Tree Level Order Traversal** | `Medium` | binary-tree (binary-tree) | **Lesson 0017** | Queue-based BFS taking snapshot of queue size at each depth level. | EPI Ch. 1 |

#### Week 8 (Phase 2 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [133](https://leetcode.com/problems/clone-graph) | **Clone Graph** | `Medium` | graph (depth-first-search, breadth-first-search) | **Lesson 0023** | DFS/BFS with hash map mapping original node to cloned node to resolve cycles. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [150](https://leetcode.com/problems/evaluate-reverse-polish-notation) | **Evaluate Reverse Polish Notation** | `Medium` | stack (stack) | **Lesson 0013** | Stack operand evaluation: pop right operand then left operand for non-commutative operations. | EPI Ch. 2 |
| [207](https://leetcode.com/problems/course-schedule) | **Course Schedule** | `Medium` | graph (topo-sort) | **Lesson 0024** | Kahn topological sort (in-degrees) or 3-color DFS cycle detection in directed graphs. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [208](https://leetcode.com/problems/implement-trie-prefix-tree) | **Implement Trie (Prefix Tree)** | `Medium` | trie (trie) | **Lesson 0029** | 26-ary node pointer architecture enabling O(L) prefix search independent of dictionary size. | Sedgewick Ch. 5 / Skiena Ch. 12 |
| [322](https://leetcode.com/problems/coin-change) | **Coin Change** | `Medium` | dynamic-programming (dynamic-programming) | **Lesson 0025** | Unbounded knapsack DP: dp[a] = min(dp[a], 1 + dp[a - c]) initialized to infinity. | CLRS Ch. 14 / Roughgarden Pt. 3 |
| [238](https://leetcode.com/problems/product-of-array-except-self) | **Product of Array Except Self** | `Medium` | array (prefix-sum) | **Lesson 0010** | Two-pass prefix and suffix running products in O(N) time with O(1) extra space. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [155](https://leetcode.com/problems/min-stack) | **Min Stack** | `Medium` | stack (stack) | **Lesson 0013** | Auxiliary min-tracking stack storing parallel minimums for O(1) getMin(). | EPI Ch. 0 |

#### Week 9 (Phase 2 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [98](https://leetcode.com/problems/validate-binary-search-tree) | **Validate Binary Search Tree** | `Medium` | binary-search-tree (binary-search-tree) | **Lesson 0018** | DFS passing valid value bounds (low, high) down tree ensuring strict BST invariants. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [200](https://leetcode.com/problems/number-of-islands) | **Number of Islands** | `Medium` | graph (depth-first-search,  breadth-first-search) | **Lesson 0023** | Connected components in 2D grid: sink visited land cells (1 -> 0) via DFS/BFS. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [1036](https://leetcode.com/problems/rotting-oranges) | **Rotting Oranges** | `Medium` | graph (breadth-first-search) | **Lesson 0023** | Multi-source BFS queue tracking minutes elapsed until all reachable fresh oranges rot. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [33](https://leetcode.com/problems/search-in-rotated-sorted-array) | **Search in Rotated Sorted Array** | `Medium` | binary-search (binary-search) | **Lesson 0015** | One half is always sorted; check if target falls in sorted range to discard half. | EPI Ch. 2 |
| [39](https://leetcode.com/problems/combination-sum) | **Combination Sum** | `Medium` | array (backtracking) | **Lesson 0022** | Backtracking state-space exploration allowing element reuse with target pruning. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [46](https://leetcode.com/problems/permutations) | **Permutations** | `Medium` | recursion (backtracking) | **Lesson 0021** | Factorial state tree: choose-explore-unchoose with boolean visited array or in-place swaps. | EPI Ch. 2 |
| [56](https://leetcode.com/problems/merge-intervals) | **Merge Intervals** | `Medium` | array (interval) | **Lesson 0027** | Sort by interval start time; merge greedily if curr.start <= prev.end. | EPI Ch. 3 |

#### Week 10 (Phase 2 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree) | **Lowest Common Ancestor of a Binary Tree** | `Medium` | binary-tree (binary-tree) | **Lesson 0017** | Post-order DFS: return node if p or q matched; if left and right return non-null, root is LCA. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [1023](https://leetcode.com/problems/time-based-key-value-store) | **Time Based Key-Value Store** | `Medium` | binary-search (binary-search) | **Lesson 0015** | Hash map of timestamped lists combined with binary search on timestamps. | CLRS Ch. 2 / Roughgarden Pt. 1 |
| [721](https://leetcode.com/problems/accounts-merge) | **Accounts Merge** | `Medium` | graph (depth-first-search, union-find) | **Lesson 0024** | Disjoint Set Union (DSU) grouping emails into connected account components. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [75](https://leetcode.com/problems/sort-colors) | **Sort Colors** | `Medium` | array (two-pointers) | **Lesson 0005** | Dutch National Flag 3-way partition using low, mid, and high pointers in one pass. | EPI Ch. 0 |
| [139](https://leetcode.com/problems/word-break) | **Word Break** | `Medium` | trie (trie) | **Lesson 0025** | 1D DP: dp[i] = True if any dp[j] is True and s[j:i] is in word dictionary. | EPI Ch. 2 |
| [416](https://leetcode.com/problems/partition-equal-subset-sum) | **Partition Equal Subset Sum** | `Medium` | dynamic-programming (dynamic-programming) | **Lesson 0025** | 0/1 Knapsack DP: determine if subset sums to total_sum / 2 using 1D boolean array. | EPI Ch. 2 |
| [8](https://leetcode.com/problems/string-to-integer-atoi) | **String to Integer (atoi)** | `Medium` | string (string) | **Lesson 0004** | Mastery of string mechanics and invariant preservation. | EPI Ch. 0 |

#### Week 11 (Phase 2 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [54](https://leetcode.com/problems/spiral-matrix) | **Spiral Matrix** | `Medium` | matrix (matrix) | **Lesson 0030** | Contracting 4-boundary pointers (top, bottom, left, right) with parity checks. | EPI Ch. 1 |
| [78](https://leetcode.com/problems/subsets) | **Subsets** | `Medium` | recursion (backtracking) | **Lesson 0021** | Combinatorial branching: include or exclude each element generating 2^N states. | EPI Ch. 3 |
| [199](https://leetcode.com/problems/binary-tree-right-side-view) | **Binary Tree Right Side View** | `Medium` | binary-tree (binary-tree) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [5](https://leetcode.com/problems/longest-palindromic-substring) | **Longest Palindromic Substring** | `Medium` | string (palindrome, two-pointer, dynamic-programming) | **Lesson 0026** | Mastery of string mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [62](https://leetcode.com/problems/unique-paths) | **Unique Paths** | `Medium` | dynamic-programming (dynamic-programming) | **Lesson 0025** | Mastery of dynamic programming mechanics and invariant preservation. | EPI Ch. 2 |
| [105](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal) | **Construct Binary Tree from Preorder and Inorder Traversal** | `Medium` | binary-tree (binary-tree) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | EPI Ch. 2 |
| [11](https://leetcode.com/problems/container-with-most-water) | **Container With Most Water** | `Medium` | array (greedy, two-pointers) | **Lesson 0005** | Mastery of array mechanics and invariant preservation. | EPI Ch. 2 |

#### Week 12 (Phase 2 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [17](https://leetcode.com/problems/letter-combinations-of-a-phone-number) | **Letter Combinations of a Phone Number** | `Medium` | recursion (backtracking) | **Lesson 0021** | Mastery of recursion mechanics and invariant preservation. | EPI Ch. 3 |
| [79](https://leetcode.com/problems/word-search) | **Word Search** | `Medium` | graph (backtracking) | **Lesson 0022** | Backtracking on 2D grid with temporary in-place cell masking to avoid revisits. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [438](https://leetcode.com/problems/find-all-anagrams-in-a-string) | **Find All Anagrams in a String** | `Medium` | string (anagram) | **Lesson 0008** | Mastery of string mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [310](https://leetcode.com/problems/minimum-height-trees) | **Minimum Height Trees** | `Medium` | graph (topo-sort) | **Lesson 0023** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [621](https://leetcode.com/problems/task-scheduler) | **Task Scheduler** | `Medium` | heap (heap) | **Lesson 0020** | Mastery of heap mechanics and invariant preservation. | CLRS Ch. 6 / Sedgewick Ch. 2 |
| [146](https://leetcode.com/problems/lru-cache) | **LRU Cache** | `Medium` | linked-list (hash-table) | **Lesson 0012** | Hash map + Doubly Linked List with sentinel nodes for O(1) get and put. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [230](https://leetcode.com/problems/kth-smallest-element-in-a-bst) | **Kth Smallest Element in a BST** | `Medium` | binary-search-tree (binary-search-tree) | **Lesson 0018** | Mastery of binary search-tree mechanics and invariant preservation. | CLRS Ch. 12 / Sedgewick Ch. 3 |

#### Week 13 (Phase 3 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [739](https://leetcode.com/problems/daily-temperatures) | **Daily Temperatures** | `Medium` | stack (monotonic-stack) | **Lesson 0014** | Monotonic decreasing stack of indices; pop and calculate distance when warmer day arrives. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [198](https://leetcode.com/problems/house-robber) | **House Robber** | `Medium` | dynamic-programming (dynamic-programming) | **Lesson 0025** | 1D DP: dp[i] = max(dp[i-1], nums[i] + dp[i-2]) compressed to two rolling variables. | CLRS Ch. 14 / Roughgarden Pt. 3 |
| [134](https://leetcode.com/problems/gas-station) | **Gas Station** | `Medium` | array (greedy) | **Lesson 0003** | Greedy running tank check; reset start index if tank drops below zero, verify total sum >= 0. | EPI Ch. 1 |
| [31](https://leetcode.com/problems/next-permutation) | **Next Permutation** | `Medium` | recursion (recursion) | **Lesson 0001** | Mastery of recursion mechanics and invariant preservation. | CLRS / Skiena |
| [36](https://leetcode.com/problems/valid-sudoku) | **Valid Sudoku** | `Medium` | matrix (matrix) | **Lesson 0030** | Mastery of matrix mechanics and invariant preservation. | EPI Ch. 2 |
| [49](https://leetcode.com/problems/group-anagrams) | **Group Anagrams** | `Medium` | string (anagram) | **Lesson 0010** | Mastery of string mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [152](https://leetcode.com/problems/maximum-product-subarray) | **Maximum Product Subarray** | `Medium` | dynamic-programming (dynamic-programming) | **Lesson 0025** | Mastery of dynamic programming mechanics and invariant preservation. | CLRS Ch. 14 / Roughgarden Pt. 3 |

#### Week 14 (Phase 3 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [211](https://leetcode.com/problems/design-add-and-search-words-data-structure) | **Design Add and Search Words Data Structure** | `Medium` | trie (trie) | **Lesson 0029** | Mastery of trie mechanics and invariant preservation. | Sedgewick Ch. 5 / Skiena Ch. 12 |
| [417](https://leetcode.com/problems/pacific-atlantic-water-flow) | **Pacific Atlantic Water Flow** | `Medium` | graph (depth-first-search,  breadth-first-search) | **Lesson 0030** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [19](https://leetcode.com/problems/remove-nth-node-from-end-of-list) | **Remove Nth Node From End of List** | `Medium` | linked-list (linked-list) | **Lesson 0011** | Mastery of linked list mechanics and invariant preservation. | EPI Ch. 2 |
| [550](https://leetcode.com/problems/shortest-path-to-get-food) | **Shortest Path to Get Food** | `Medium` | graph (breadth-first-search) | **Lesson 0023** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [287](https://leetcode.com/problems/find-the-duplicate-number) | **Find the Duplicate Number** | `Medium` | binary (binary) | **Lesson 0006** | Mastery of binary mechanics and invariant preservation. | Knuth TAOCP 4A / EPI Ch. 4 |
| [692](https://leetcode.com/problems/top-k-frequent-words) | **Top K Frequent Words** | `Medium` | heap (heap) | **Lesson 0020** | Mastery of heap mechanics and invariant preservation. | CLRS Ch. 6 / Sedgewick Ch. 2 |
| [300](https://leetcode.com/problems/longest-increasing-subsequence) | **Longest Increasing Subsequence** | `Medium` | dynamic-programming (binary-search) | **Lesson 0025** | Mastery of dynamic programming mechanics and invariant preservation. | EPI Ch. 4 |

#### Week 15 (Phase 3 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [261](https://leetcode.com/problems/graph-valid-tree) | **Graph Valid Tree** | `Medium` | graph (breadth-first-search, depth-first-search) | **Lesson 0024** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [210](https://leetcode.com/problems/course-schedule-ii) | **Course Schedule II** | `Medium` | graph (topo-sort) | **Lesson 0024** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [24](https://leetcode.com/problems/swap-nodes-in-pairs) | **Swap Nodes in Pairs** | `Medium` | linked-list (linked-list) | **Lesson 0012** | Mastery of linked list mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [113](https://leetcode.com/problems/path-sum-ii) | **Path Sum II** | `Medium` | binary-tree (backtracking) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [128](https://leetcode.com/problems/longest-consecutive-sequence) | **Longest Consecutive Sequence** | `Medium` | array (union-find) | **Lesson 0010** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [189](https://leetcode.com/problems/rotate-array) | **Rotate Array** | `Medium` | array (array) | **Lesson 0003** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [328](https://leetcode.com/problems/odd-even-linked-list) | **Odd Even Linked List** | `Medium` | linked-list (linked-list) | **Lesson 0012** | Mastery of linked list mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |

#### Week 16 (Phase 3 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [394](https://leetcode.com/problems/decode-string) | **Decode String** | `Medium` | stack (parsing) | **Lesson 0013** | Mastery of stack mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [525](https://leetcode.com/problems/contiguous-array) | **Contiguous Array** | `Medium` | array (hash-table, prefix-sum) | **Lesson 0010** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [662](https://leetcode.com/problems/maximum-width-of-binary-tree) | **Maximum Width of Binary Tree** | `Medium` | binary-tree (binary-tree) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [658](https://leetcode.com/problems/find-k-closest-elements) | **Find K Closest Elements** | `Medium` | heap (heap) | **Lesson 0016** | Mastery of heap mechanics and invariant preservation. | CLRS Ch. 6 / Sedgewick Ch. 2 |
| [424](https://leetcode.com/problems/longest-repeating-character-replacement) | **Longest Repeating Character Replacement** | `Medium` | string (sliding-window) | **Lesson 0008** | Mastery of string mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [285](https://leetcode.com/problems/inorder-successor-in-bst) | **Inorder Successor in BST** | `Medium` | binary-search-tree (binary-search-tree) | **Lesson 0018** | Mastery of binary search-tree mechanics and invariant preservation. | EPI Ch. 1 |
| [55](https://leetcode.com/problems/jump-game) | **Jump Game** | `Medium` | dynamic-programming (dynamic-programming) | **Lesson 0025** | Mastery of dynamic programming mechanics and invariant preservation. | CLRS Ch. 14 / Roughgarden Pt. 3 |

#### Week 17 (Phase 3 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [2](https://leetcode.com/problems/add-two-numbers) | **Add Two Numbers** | `Medium` | linked-list (linked-list) | **Lesson 0011** | Mastery of linked list mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [22](https://leetcode.com/problems/generate-parentheses) | **Generate Parentheses** | `Medium` | recursion (backtracking) | **Lesson 0022** | Mastery of recursion mechanics and invariant preservation. | CLRS / Skiena |
| [148](https://leetcode.com/problems/sort-list) | **Sort List** | `Medium` | linked-list (linked-list) | **Lesson 0011** | Mastery of linked list mechanics and invariant preservation. | EPI Ch. 3 |
| [323](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph) | **Number of Connected Components in an Undirected Graph** | `Medium` | graph (union-find) | **Lesson 0024** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [1142](https://leetcode.com/problems/minimum-knight-moves) | **Minimum Knight Moves** | `Medium` | graph (breadth-first-search, matrix) | **Lesson 0023** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [560](https://leetcode.com/problems/subarray-sum-equals-k) | **Subarray Sum Equals K** | `Medium` | array (prefix-sum) | **Lesson 0010** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [735](https://leetcode.com/problems/asteroid-collision) | **Asteroid Collision** | `Medium` | stack (stack) | **Lesson 0013** | Mastery of stack mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |

#### Week 18 (Phase 4 &bull; Medium Tier &bull; 7 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [912](https://leetcode.com/problems/random-pick-with-weight) | **Random Pick with Weight** | `Medium` | math (math) | **Lesson 0001** | Mastery of math mechanics and invariant preservation. | CLRS / Skiena |
| [215](https://leetcode.com/problems/kth-largest-element-in-an-array) | **Kth Largest Element in an Array** | `Medium` | heap (quick-select) | **Lesson 0020** | Min-heap of size K in O(N log K) or Quickselect in expected O(N) time. | EPI Ch. 1 |
| [221](https://leetcode.com/problems/maximal-square) | **Maximal Square** | `Medium` | dynamic-programming (matrix) | **Lesson 0025** | Mastery of dynamic programming mechanics and invariant preservation. | CLRS Ch. 14 / Roughgarden Pt. 3 |
| [48](https://leetcode.com/problems/rotate-image) | **Rotate Image** | `Medium` | matrix (matrix) | **Lesson 0030** | Mastery of matrix mechanics and invariant preservation. | CLRS Ch. 4 / Skiena Ch. 13 |
| [103](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal) | **Binary Tree Zigzag Level Order Traversal** | `Medium` | binary-tree (binary-tree) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [362](https://leetcode.com/problems/design-hit-counter) | **Design Hit Counter** | `Medium` | queue (queue) | **Lesson 0001** | Mastery of queue mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [437](https://leetcode.com/problems/path-sum-iii) | **Path Sum III** | `Medium` | binary-tree (binary-tree) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | CLRS Ch. 12 / Sedgewick Ch. 3 |

#### Week 19 (Phase 4 &bull; Medium Tier &bull; 6 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [50](https://leetcode.com/problems/powx-n) | **Pow(x, n)** | `Medium` | math (math) | **Lesson 0001** | Mastery of math mechanics and invariant preservation. | CLRS / Skiena |
| [74](https://leetcode.com/problems/search-a-2d-matrix) | **Search a 2D Matrix** | `Medium` | binary-search (binary-search) | **Lesson 0015** | Mastery of binary search mechanics and invariant preservation. | CLRS Ch. 2 / Roughgarden Pt. 1 |
| [179](https://leetcode.com/problems/largest-number) | **Largest Number** | `Medium` | string (greedy) | **Lesson 0004** | Mastery of string mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [91](https://leetcode.com/problems/decode-ways) | **Decode Ways** | `Medium` | dynamic-programming (dynamic-programming) | **Lesson 0025** | Mastery of dynamic programming mechanics and invariant preservation. | CLRS Ch. 14 / Roughgarden Pt. 3 |
| [253](https://leetcode.com/problems/meeting-rooms-ii) | **Meeting Rooms II** | `Medium` | array (interval) | **Lesson 0027** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [7](https://leetcode.com/problems/reverse-integer) | **Reverse Integer** | `Medium` | math (math) | **Lesson 0001** | Mastery of math mechanics and invariant preservation. | CLRS / Skiena |

#### Week 20 (Phase 4 &bull; Medium Tier &bull; 6 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [73](https://leetcode.com/problems/set-matrix-zeroes) | **Set Matrix Zeroes** | `Medium` | matrix (matrix) | **Lesson 0030** | Mastery of matrix mechanics and invariant preservation. | CLRS Ch. 4 / Skiena Ch. 13 |
| [143](https://leetcode.com/problems/reorder-list) | **Reorder List** | `Medium` | linked-list (linked-list) | **Lesson 0012** | Mastery of linked list mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [271](https://leetcode.com/problems/encode-and-decode-strings) | **Encode and Decode Strings** | `Medium` | string (string) | **Lesson 0004** | Mastery of string mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [803](https://leetcode.com/problems/cheapest-flights-within-k-stops) | **Cheapest Flights Within K Stops** | `Medium` | graph (depth-first-search) | **Lesson 0023** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [893](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree) | **All Nodes Distance K in Binary Tree** | `Medium` | binary-tree (breadth-first-search) | **Lesson 0017** | Mastery of binary tree mechanics and invariant preservation. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [16](https://leetcode.com/problems/3sum-closest) | **3Sum Closest** | `Medium` | array (two-pointers) | **Lesson 0003** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |

#### Week 21 (Phase 4 &bull; Medium Tier &bull; 6 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [61](https://leetcode.com/problems/rotate-list) | **Rotate List** | `Medium` | linked-list (linked-list) | **Lesson 0012** | Mastery of linked list mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array) | **Find Minimum in Rotated Sorted Array** | `Medium` | binary-search (binary-search) | **Lesson 0015** | Mastery of binary search mechanics and invariant preservation. | CLRS Ch. 2 / Roughgarden Pt. 1 |
| [227](https://leetcode.com/problems/basic-calculator-ii) | **Basic Calculator II** | `Medium` | stack (parsing) | **Lesson 0013** | Mastery of stack mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [377](https://leetcode.com/problems/combination-sum-iv) | **Combination Sum IV** | `Medium` | dynamic-programming (dynamic-programming) | **Lesson 0025** | Mastery of dynamic programming mechanics and invariant preservation. | CLRS Ch. 14 / Roughgarden Pt. 3 |
| [380](https://leetcode.com/problems/insert-delete-getrandom-o1) | **Insert Delete GetRandom O(1)** | `Medium` | hash-table (hash-table) | **Lesson 0009** | Mastery of hash table mechanics and invariant preservation. | CLRS / Skiena |
| [435](https://leetcode.com/problems/non-overlapping-intervals) | **Non-overlapping Intervals** | `Medium` | array (interval, greedy, sorting) | **Lesson 0027** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |

#### Week 22 (Phase 5 &bull; Hard Tier &bull; 5 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [76](https://leetcode.com/problems/minimum-window-substring) | **Minimum Window Substring** | `Hard` | string (sliding-window) | **Lesson 0008** | Dynamic sliding window with character frequency deficit counter (have vs need). | EPI Ch. 3 |
| [297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree) | **Serialize and Deserialize Binary Tree** | `Hard` | binary-tree (binary-tree) | **Lesson 0017** | Pre-order DFS traversal serializing null pointers with sentinel characters. | CLRS Ch. 12 / Sedgewick Ch. 3 |
| [42](https://leetcode.com/problems/trapping-rain-water) | **Trapping Rain Water** | `Hard` | stack (monotonic-stack) | **Lesson 0005** | Two pointers moving inward based on lower boundary height, tracking max_left and max_right. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [295](https://leetcode.com/problems/find-median-from-data-stream) | **Find Median from Data Stream** | `Hard` | heap (heap) | **Lesson 0020** | Dual balancing heaps: max-heap for lower half, min-heap for upper half. | EPI Ch. 3 |
| [127](https://leetcode.com/problems/word-ladder) | **Word Ladder** | `Hard` | graph (breadth-first-search) | **Lesson 0023** | BFS shortest path on word graph: generate 1-char mutated patterns for O(M * 26) neighbor lookups. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |

#### Week 23 (Phase 5 &bull; Hard Tier &bull; 5 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [224](https://leetcode.com/problems/basic-calculator) | **Basic Calculator** | `Hard` | stack (parsing) | **Lesson 0013** | Stack handling parentheses, running signs (+/-), and accumulator for infix math. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [1352](https://leetcode.com/problems/maximum-profit-in-job-scheduling) | **Maximum Profit in Job Scheduling** | `Hard` | binary-search (dynamic-programming) | **Lesson 0020** | DP + Binary Search: sort by end time and binary search latest non-conflicting job. | CLRS Ch. 2 / Roughgarden Pt. 1 |
| [23](https://leetcode.com/problems/merge-k-sorted-lists) | **Merge k Sorted Lists** | `Hard` | heap (heap) | **Lesson 0012** | Min-heap of size K tracking current node heads in O(N log K) time. | CLRS Ch. 6 / Sedgewick Ch. 2 |
| [84](https://leetcode.com/problems/largest-rectangle-in-histogram) | **Largest Rectangle in Histogram** | `Hard` | stack (monotonic-stack) | **Lesson 0014** | Monotonic increasing stack; pop and compute area with width = i - stack[-1] - 1. | EPI Ch. 3 |
| [124](https://leetcode.com/problems/binary-tree-maximum-path-sum) | **Binary Tree Maximum Path Sum** | `Hard` | binary-tree (binary-tree) | **Lesson 0017** | Post-order DFS computing max single branch gain; update global max with left + right + root. | CLRS Ch. 12 / Sedgewick Ch. 3 |

#### Week 24 (Phase 5 &bull; Hard Tier &bull; 5 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [931](https://leetcode.com/problems/maximum-frequency-stack) | **Maximum Frequency Stack** | `Hard` | stack (stack) | **Lesson 0013** | Mastery of stack mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [4](https://leetcode.com/problems/median-of-two-sorted-arrays) | **Median of Two Sorted Arrays** | `Hard` | binary-search (binary-search) | **Lesson 0015** | Binary search on shorter array partition ensuring left half elements <= right half elements. | CLRS Ch. 2 / Roughgarden Pt. 1 |
| [329](https://leetcode.com/problems/longest-increasing-path-in-a-matrix) | **Longest Increasing Path in a Matrix** | `Hard` | graph (breadth-first-search, depth-first-search, topo-sort, dynamic-programming) | **Lesson 0030** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [32](https://leetcode.com/problems/longest-valid-parentheses) | **Longest Valid Parentheses** | `Hard` | stack (dynamic-programming) | **Lesson 0013** | Mastery of stack mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [588](https://leetcode.com/problems/design-in-memory-file-system) | **Design In-Memory File System** | `Hard` | trie (trie) | **Lesson 0029** | Mastery of trie mechanics and invariant preservation. | Sedgewick Ch. 5 / Skiena Ch. 12 |

#### Week 25 (Phase 5 &bull; Hard Tier &bull; 5 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [761](https://leetcode.com/problems/employee-free-time) | **Employee Free Time** | `Hard` | array (interval) | **Lesson 0027** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [212](https://leetcode.com/problems/word-search-ii) | **Word Search II** | `Hard` | graph (backtracking) | **Lesson 0029** | Trie + 2D Backtracking: prune search when prefix absent; dynamically remove matched leaf words. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [269](https://leetcode.com/problems/alien-dictionary) | **Alien Dictionary** | `Hard` | graph (topo-sort) | **Lesson 0024** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [833](https://leetcode.com/problems/bus-routes) | **Bus Routes** | `Hard` | graph (depth-first-search, union-find) | **Lesson 0023** | Mastery of graph mechanics and invariant preservation. | CLRS Ch. 20-22 / Roughgarden Pt. 2 |
| [239](https://leetcode.com/problems/sliding-window-maximum) | **Sliding Window Maximum** | `Hard` | array (sliding-window) | **Lesson 0007** | Mastery of array mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |

#### Week 26 (Phase 5 &bull; Hard Tier &bull; 6 Problems)

| LC # | Problem Title | Difficulty | Topic / Routine | Course Lesson | Key Invariant & Takeaway | Primary Reference |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [336](https://leetcode.com/problems/palindrome-pairs) | **Palindrome Pairs** | `Hard` | string (palindrome) | **Lesson 0004** | Mastery of string mechanics and invariant preservation. | Sedgewick Ch. 1 / CLRS Ch. 17 |
| [25](https://leetcode.com/problems/reverse-nodes-in-k-group) | **Reverse Nodes in k-Group** | `Hard` | linked-list (linked-list) | **Lesson 0012** | Mastery of linked list mechanics and invariant preservation. | CLRS Ch. 10 / Sedgewick Ch. 1 |
| [37](https://leetcode.com/problems/sudoku-solver) | **Sudoku Solver** | `Hard` | matrix (backtracking) | **Lesson 0022** | Mastery of matrix mechanics and invariant preservation. | CLRS Ch. 4 / Skiena Ch. 13 |
| [41](https://leetcode.com/problems/first-missing-positive) | **First Missing Positive** | `Hard` | hash-table (hash-table) | **Lesson 0001** | Mastery of hash table mechanics and invariant preservation. | CLRS / Skiena |
| [51](https://leetcode.com/problems/n-queens) | **N-Queens** | `Hard` | recursion (backtracking) | **Lesson 0022** | Mastery of recursion mechanics and invariant preservation. | EPI Ch. 1 |
| [632](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists) | **Smallest Range Covering Elements from K Lists** | `Hard` | heap (greedy, sliding-window) | **Lesson 0020** | Mastery of heap mechanics and invariant preservation. | CLRS Ch. 6 / Sedgewick Ch. 2 |

