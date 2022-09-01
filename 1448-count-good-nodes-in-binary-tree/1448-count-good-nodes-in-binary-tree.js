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
const goodNodes = function(root) {
  if (!root) return 0;
  let answer = 0;
  
  function DFS(node, max) {
    if (!node) return;
    if (node.val >= max) {
      answer++;
      max = node.val
    };
    DFS(node.left, max);
    DFS(node.right, max);
  }
  
  DFS(root, -Infinity);
  return answer;
};