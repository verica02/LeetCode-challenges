/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */

var bagOfTokensScore = function(tokens, power) {
    
    let score = 0;
    let maxScore = 0;
    
    tokens.sort((a, b) => a - b);
    
    let start = 0;
    let last = tokens.length - 1;
    
    while (start <= last) {
        
        if (power >= tokens[start]) {
            power -= tokens[start];
            
            score++;
            maxScore = Math.max(maxScore, score);
            start++;
            
        } else if (score) {
            
            power += tokens[last];
            score--;
            last--;
            
        } else {
            break;
        }
    }
    
    return maxScore;
};


