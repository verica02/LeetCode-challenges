/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(A, k, x) {
    let [low, high] = [0, A.length - k]
    
    while (low < high) {
        const mid = Math.floor((low + high) / 2)
        
        x - A[mid] > A[mid + k] - x ? (low = mid + 1) : (high = mid)
    }
    
    return A.slice(low, low + k)
}