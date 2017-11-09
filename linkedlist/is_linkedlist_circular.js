/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null){
        return false;
    }
    let current = new ListNode()
    let runner = new ListNode()
    current = head;
    runner = head;

    while (runner.next !== null && runner.next.next !== null) {
        current = current.next;
        runner = runner.next.next;
        if(current == runner) {
            return true;
        }
    }
    return false;
};