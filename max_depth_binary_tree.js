/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return countDepth(root);
    function countDepth(node){
        if (!node){
            return 0;
        }
        return Math.max(countDepth(node.left), countDepth(node.right))+1;
    }
};
