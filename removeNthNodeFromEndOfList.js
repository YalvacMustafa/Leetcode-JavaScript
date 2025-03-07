/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 
Constraints:
Number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 
 */

function ListNode(val, next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function(head, n){   
    let rightPointer = head;
    let leftPointer = head;

    for (let i = 0; i < n; i++){
        rightPointer = rightPointer.next;
    }
    
    if (!rightPointer) return head.next;

    while(rightPointer.next){
        leftPointer = leftPointer.next;
        rightPointer = rightPointer.next;
    }
    
    leftPointer.next = leftPointer.next.next
    return head;
}

