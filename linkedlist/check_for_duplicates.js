/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) {
        return head;
    }
    var current = new ListNode();
    current = head;
    while(current) {
        if (current.next && current.val === current.next.val) {
            current.next = current.next.next;
        }else {
            current = current.next;
        }
    }
    return head;
};