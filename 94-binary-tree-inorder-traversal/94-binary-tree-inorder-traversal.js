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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
    let result = []; 
    if(!root) return result;
  
    var traversal = function(root){
        
        if(root.left) traversal(root.left) 
        if(typeof(root?.val) != "undefined") result.push(root.val);
        if(root.right) traversal(root.right)
        
    }
    
    traversal(root); 
    return result;
};