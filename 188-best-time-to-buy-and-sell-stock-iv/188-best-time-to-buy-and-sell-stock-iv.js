/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    
    const profit = Array.from(Array(prices.length), () => new Array(2*k+1));
    
    const dp = (i, n, p) => {
        
        if(i == p.length || n == 0) return 0; 
        
        if(profit[i][n] != undefined) return profit[ i][n];
        
        if(n%2 == 0) return profit[i][n] = Math.max(-p[i]+dp(i+1, n-1, p), dp(i+1, n, p));
        
        return profit[i][n] = Math.max(p[i]+dp(i+1, n-1, p), dp(i+1, n, p));
        
    }

    return dp(0, 2*k, prices);
};