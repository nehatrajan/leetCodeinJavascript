/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var currentA = new ListNode();
    var currentB = new ListNode();
    currentA = headA;
    currentB = headB;
    if (currentA === null || currentB === null) {
        return null;
    }
    while(currentA !== currentB) {
        if (currentA.next === null && currentB.next === null){
            return null;
        }
        if (currentA.next !== null) {
            currentA = currentA.next;
        } else {
            currentA = headB;
        }
        if (currentB.next !== null){
            currentB = currentB.next;
        }else {
            currentB = headA;
        }
    }
    return currentA;
};