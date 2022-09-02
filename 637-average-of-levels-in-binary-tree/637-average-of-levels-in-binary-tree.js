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
var averageOfLevels = function(root) 
{
    let array = []
    let count = []
    function level_sum(root, level)
    {
        if(root == null) return
        if(array.length <= level)
        {
            array.push(0.00)
            count.push(0)
        }
        array[level] += root.val
        count[level] += 1
        level_sum(root.left, level+1)
        level_sum(root.right, level+1)
    }
    level_sum(root, 0)
    for(let level=0; level<array.length; level++)
    {
        array[level] = array[level] / count[level]
    }
    return array
};