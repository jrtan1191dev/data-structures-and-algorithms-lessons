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

## Grind 75 Question Alignment & Key Learning Points

Mapping the canonical [Tech Interview Handbook Grind 75](https://www.techinterviewhandbook.org/grind75/) questions to their foundational lessons, patterns, and intended interview takeaways:

| Grind 75 Problem | LC # | Difficulty | Target Topic | Course Lesson | Key Intended Learning Takeaway |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Two Sum** | 1 | Easy | Hash Table | **Lesson 0009** | Trade $O(n)$ space to store `val -> index` complements; avoids $O(n^2)$ nested scanning. |
| **Valid Palindrome** | 125 | Easy | Two Pointers | **Lesson 0005** | Inward converging pointers (`left`, `right`) with in-place alphanumeric filtering; avoids $O(n)$ string allocation. |
| **Best Time to Buy and Sell Stock** | 121 | Easy | Sliding Window | **Lesson 0008** | Dynamic 1-sided window; track lowest buy price seen so far and greedily update max profit. |
| **Valid Anagram** | 242 | Easy | Hash Table | **Lesson 0010** | Fixed 26-element array counting avoids hash table allocation overhead; test for net-zero count. |
| **Two Sum II (Input Array Sorted)** | 167 | Medium | Two Pointers | **Lesson 0005** | Sorted property guarantees monotonicity: `sum > target` eliminates right column, `sum < target` eliminates left row. |
| **3Sum** | 15 | Medium | Two Pointers | **Lesson 0005** | Sort array in $O(n \log n)$, fix element $i$, and reduce the remaining two numbers to Two Sum II with duplicate skipping. |
| **Container With Most Water** | 11 | Medium | Two Pointers | **Lesson 0005** | Greedy boundary elimination: always discard the shorter wall because area bottleneck cannot improve with narrower width. |
| **Maximum Average Subarray I** | 643 | Easy | Sliding Window | **Lesson 0007** | Reusing window sum: subtract exiting element `nums[i-k]` and add entering element `nums[i]` in $O(1)$ time. |
| **Permutation in String** | 567 | Medium | Sliding Window | **Lesson 0007** | Fixed window of size `len(s1)` over `s2`; maintain a `matches` count over 26 letters to verify equality in $O(1)$ per slide. |
| **Longest Substring Without Repeating Characters** | 3 | Medium | Sliding Window | **Lesson 0008** | Map `char -> last_seen_index`; when duplicate appears, jump `left = last_seen[ch] + 1` in $O(1)$ rather than single-stepping. |
| **Longest Repeating Character Replacement** | 424 | Medium | Sliding Window | **Lesson 0008** | Window validity invariant: `(length - max_freq) <= k`. Slide window forward when invalid. |
| **Minimum Window Substring** | 76 | Hard | Sliding Window | **Lesson 0008** | Dual frequency maps (`window` vs `target`); expand `right` until `have == need`, then contract `left` to minimize length. |
| **Ransom Note** | 383 | Easy | Hash Table | **Lesson 0009** | Decrementing frequency counts; immediate early exit when character count drops below zero. |
| **Insert Delete GetRandom O(1)** | 380 | Medium | Hash Table / Array | **Lesson 0009** | Synergy pattern: map `val -> array_index` in hash map; swap element to delete with the **last array element** for $O(1)$ removal. |
| **Group Anagrams** | 49 | Medium | Hash Table | **Lesson 0010** | Canonical signature serialization: group strings by a 26-int frequency tuple key in $O(n \cdot k)$ time. |
| **Subarray Sum Equals K** | 560 | Medium | Prefix Sum | **Lesson 0010** | Difference identity $P[j] - P[i] = k \implies P[i] = P[j] - k$. Hash map of running prefix sums handles negative values. |
| **Longest Consecutive Sequence** | 128 | Medium | Hash Table | **Lesson 0010** | Hash set for $O(1)$ lookups; only start streak counting if `num - 1 not in set` to guarantee $O(n)$ overall time. |
| **Valid Parentheses** | 20 | Easy | Stack | **Lesson 0013** | LIFO execution matching opening brackets to closing brackets; empty stack on termination. |
| **Min Stack** | 155 | Medium | Stack | **Lesson 0013** | Auxiliary min-tracking stack (or value-min pair tuples) for $O(1)$ minimum retrieval. |
| **Daily Temperatures** | 739 | Medium | Monotonic Stack | **Lesson 0014** | Monotonic decreasing stack storing indices; pop and calculate distance when a warmer day is encountered. |
| **Largest Rectangle in Histogram** | 84 | Hard | Monotonic Stack | **Lesson 0014** | Monotonic increasing stack tracking leftmost boundary; compute area when a shorter bar terminates reach. |
| **Binary Search** | 704 | Easy | Binary Search | **Lesson 0015** | Safe midpoint `mid = left + (right - left) // 2` avoiding integer overflow; halving search space in $O(\log n)$. |
| **Search in Rotated Sorted Array** | 33 | Medium | Binary Search | **Lesson 0015** | One half is always normally sorted; test if target lies within the sorted half to determine which side to discard. |
| **Koko Eating Bananas** | 875 | Medium | Binary Search | **Lesson 0016** | Binary search on answer space: boolean predicate $f(\text{speed}) \le h$ is monotonic; find minimum speed. |
| **Invert Binary Tree** | 226 | Easy | Tree | **Lesson 0017** | Recursive post-order swap: `node.left, node.right = invert(node.right), invert(node.left)`. |
| **Maximum Depth of Binary Tree** | 104 | Easy | Tree | **Lesson 0017** | Tree height invariant: `1 + max(depth(left), depth(right))` via DFS recursion call stack. |
| **Binary Tree Level Order Traversal** | 102 | Medium | Tree / BFS | **Lesson 0017** | Queue-based BFS processing level size $S = \text{len(queue)}$ in discrete batches. |
| **Validate Binary Search Tree** | 98 | Medium | BST | **Lesson 0018** | Pass valid value ranges $(\text{low}, \text{high})$ down the recursion tree; verify $\text{low} < \text{node.val} < \text{high}$. |
| **Lowest Common Ancestor of a BST** | 235 | Medium | BST | **Lesson 0018** | BST search split point: if both values are smaller go left, if both larger go right; otherwise current node is LCA. |
| **Kth Largest Element in an Array** | 215 | Medium | Heap | **Lesson 0020** | Maintain a min-heap of size $K$; smallest of top $K$ sits at the root in $O(n \log k)$ time. |
| **Find Median from Data Stream** | 295 | Hard | Heap | **Lesson 0020** | Dual balancing heaps: max-heap for lower half, min-heap for upper half; medians computed in $O(1)$. |
| **Subsets** | 78 | Medium | Backtracking | **Lesson 0021** | State space tree branching: at each element, choose whether to include it or exclude it ($2^n$ total leaves). |
| **Permutations** | 46 | Medium | Backtracking | **Lesson 0021** | Factorial $n!$ state tree; track used elements or swap in place with choose-explore-unchoose backtracking. |
| **Combination Sum** | 39 | Medium | Backtracking | **Lesson 0022** | Unbounded choice tree; pass current index forward to allow element reuse while pruning when sum exceeds target. |
| **Word Search** | 79 | Medium | Backtracking / Grid | **Lesson 0022** | 2D DFS grid exploration with temporary in-place marker (`#`) to prevent revisiting visited cells during path. |
| **Number of Islands** | 200 | Medium | Graph / BFS / DFS | **Lesson 0023** | Connected components in a 2D grid; sink visited land (`'1' -> '0'`) via DFS/BFS to avoid revisited nodes. |
| **Clone Graph** | 133 | Medium | Graph | **Lesson 0023** | Map `original_node -> cloned_node` in hash map during DFS/BFS to handle cycles and prevent infinite loops. |
| **Course Schedule** | 207 | Medium | Graph / Topo Sort | **Lesson 0024** | Directed cycle detection: Kahn's algorithm with in-degrees, or 3-state DFS coloring (unvisited, visiting, visited). |
| **Course Schedule II** | 210 | Medium | Graph / Topo Sort | **Lesson 0024** | Topological ordering output using queue-based in-degree reduction (Kahn's algorithm). |
| **Climbing Stairs** | 70 | Easy | Dynamic Programming | **Lesson 0025** | 1D Fibonacci recurrence $dp[i] = dp[i-1] + dp[i-2]$; space compression from $O(n)$ array to two $O(1)$ variables. |
| **Coin Change** | 322 | Medium | Dynamic Programming | **Lesson 0025** | Unbounded Knapsack pattern: $dp[a] = \min(dp[a], 1 + dp[a - c])$ initialized to $\infty$. |
| **Longest Common Subsequence** | 1143 | Medium | Dynamic Programming | **Lesson 0026** | 2D grid recurrence: if $s1[i] == s2[j] \implies 1 + dp[i+1][j+1]$, else $\max(dp[i+1][j], dp[i][j+1])$. |
| **Merge Intervals** | 56 | Medium | Intervals | **Lesson 0027** | Sort by start time; merge greedily if `curr.start <= prev.end` by setting `prev.end = max(prev.end, curr.end)`. |
| **Insert Interval** | 57 | Medium | Intervals | **Lesson 0027** | 3-phase partition: collect strictly before, merge all overlapping into new interval, append strictly after in single $O(n)$ pass. |
| **Non-overlapping Intervals** | 435 | Medium | Intervals | **Lesson 0027** | Interval scheduling theorem: sort by end time; greedily keep intervals that finish earliest to leave maximum room. |
| **Meeting Rooms** | 252 | Easy | Intervals | **Lesson 0027** | Sort by start time; adjacent pair conflict check (`intervals[i].start < intervals[i-1].end`) in $O(n \log n)$. |
| **Meeting Rooms II** | 253 | Medium | Intervals | **Lesson 0027** | Chronological event sweep line or min-heap of active room end times to track peak concurrent overlap in $O(n \log n)$. |
| **Single Number** | 136 | Easy | Bit Manipulation | **Lesson 0028** | XOR reduction: $x \oplus x = 0$ and $x \oplus 0 = x$; duplicate pairs self-annihilate leaving unique element in $O(n)$ time, $O(1)$ space. |
| **Number of 1 Bits** | 191 | Easy | Bit Manipulation | **Lesson 0028** | Brian Kernighan's algorithm: repeatedly evaluate $n = n \mathrel{\&} (n - 1)$ to strip lowest set bit in iterations equal to set bit count. |
| **Counting Bits** | 338 | Easy | Bit Manipulation / DP | **Lesson 0028** | Dynamic programming transition $dp[i] = dp[i \gg 1] + (i \mathrel{\&} 1)$ reusing computed bit counts in linear $O(n)$ time. |
| **Missing Number** | 268 | Easy | Bit Manipulation | **Lesson 0028** | XOR all indices $0 \dots n$ with all array values; matching pairs cancel out leaving missing index in $O(n)$ time and $O(1)$ space. |
| **Reverse Bits** | 190 | Easy | Bit Manipulation | **Lesson 0028** | Shift result left and extract rightmost bit of input via $(n \mathrel{\&} 1)$ across 32 fixed hardware cycles. |
| **Implement Trie (Prefix Tree)** | 208 | Medium | Trie | **Lesson 0029** | 26-ary pointer array tree; insert, search, and startsWith execute in deterministic $O(L)$ time where $L$ is word length. |
| **Design Add and Search Words Data Structure** | 211 | Medium | Trie | **Lesson 0029** | Trie traversal with DFS branching: on wildcard `.` branch to all 26 non-null child paths; otherwise advance single child pointer. |
| **Word Search II** | 212 | Hard | Trie / Backtracking | **Lesson 0029** | Multi-string search on 2D grid: prune DFS against prefix tree; prune matched leaf nodes dynamically to prevent redundant search. |
| **Spiral Matrix** | 54 | Medium | Matrix | **Lesson 0030** | Contracting 4-boundary pointers (`top`, `bottom`, `left`, `right`) with boundary-crossing parity checks before bottom/left scans. |
| **Rotate Image** | 48 | Medium | Matrix | **Lesson 0030** | In-place matrix decomposition: transpose matrix along main diagonal ($M[i][j] \leftrightarrow M[j][i]$), then reverse each row horizontally. |
| **Set Matrix Zeroes** | 73 | Medium | Matrix | **Lesson 0030** | In-place zero marking using matrix row 0 and column 0 as state buffers with two boolean flags for origin lines, achieving $O(1)$ auxiliary space. |

