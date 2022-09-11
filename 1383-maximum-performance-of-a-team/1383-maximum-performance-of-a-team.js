/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
const maxPerformance = (n, speed, efficiency, k) => {
    
    const l = BigInt;
    const MOD = l(1e9 + 7);
    let array = [];
    
    for (let i = 0; i < n; i++) {
        array.push([efficiency[i], speed[i]]);
    }
    
    array.sort((a, b) => b[0] - a[0]); 
    let pq = new MinPriorityQueue({ priority: a => a });
    let sum = result = 0n; 
    
    for (const [eff, sp] of array) { 
        pq.enqueue(sp);
        sum += l(sp)
        
        if (pq.size() > k) {
            sum -= l(pq.dequeue().element); 
        }
        
        let temp = sum * l(eff);
        
        if (temp > result) {
            result = temp;
        }
        
    }
    return Number(result % MOD);
};