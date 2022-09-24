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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
  const result = [];
  
  const pathSum = (node, path, sum) => {
    
    if (!node) return;
      
    if (!node.left && !node.right) {
        
      if (sum === node.val) {
          
        result.push([...path, node.val]);
      
      }
        
      return;
        
    }
    
    pathSum(node.left, [...path, node.val], sum - node.val);
      
    pathSum(node.right, [...path, node.val], sum - node.val);
      
  };
  
  pathSum(root, [], targetSum);
  
  return result;
};