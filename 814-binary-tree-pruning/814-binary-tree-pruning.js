/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var pruneTree = function(root) {
   
    if (!root)
        return null  
        
    if (root.left)  
        root.left  = pruneTree(root.left);
        
    if (root.right) 
        root.right = pruneTree(root.right);
     
    return ( root.val || root.left || root.right) ? root : null    
};



