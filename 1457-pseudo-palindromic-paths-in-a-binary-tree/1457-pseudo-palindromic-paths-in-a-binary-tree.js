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
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
  
  let number = 0;
  
  const digits = new Array(10).fill(true);
  
  const process = (node) => {
    
    if (!node) return;
    
    digits[node.val] = !digits[node.val];
    
    if (!node.left && !node.right) {
        
      if (digits.filter((num) => num === false).length <= 1) number += 1;
      digits[node.val] = !digits[node.val];
        
      return;
    }
    
    process(node.left);
    process(node.right);
    
    digits[node.val] = !digits[node.val];
  };
  
  process(root);
  
  return number;
};