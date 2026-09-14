# Sentinel Dummy Nodes and Doubly Linked List Cache Design

Using sentinel/dummy nodes (`dummy = ListNode(-1)`) preceding the list head eliminates boundary branching logic when the head itself is modified or created dynamically (as in LC 21: Merge Two Sorted Lists). In complex problems like Reorder List (LC 143), multi-skill synthesis (fast/slow mid-finding + in-place reversal + alternating merge) solves the problem in $O(1)$ space. Furthermore, pairing a Doubly Linked List with a Hash Map enables the classic LRU Cache (LC 146), achieving $O(1)$ node eviction and insertion.

## Evidence
- Internalized edge-case elimination: `return dummy.next`.
- Evaluated Grind 75 problems: Merge Two Sorted Lists (LC 21), Reorder List (LC 143), and LRU Cache (LC 146).

## Implications
- Establishes composite data structure design (combining maps and doubly linked lists) commonly tested in system design and Big Tech coding interviews.
- Confirms that multi-part algorithmic problems can be decomposed into independent, reusable sub-routines.
