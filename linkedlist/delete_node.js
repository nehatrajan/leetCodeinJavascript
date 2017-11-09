/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//deleting a node from a list when only the node to be deleted is given. Tail can not be feeded as the node to be deleted
var deleteNode = function(node) {
    if (node.next !== null){
        node.val = node.next.val;
        console.log(node)
        node.next = node.next.next;
    }
};