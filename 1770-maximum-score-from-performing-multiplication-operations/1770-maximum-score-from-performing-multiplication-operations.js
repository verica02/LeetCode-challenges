/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multiplier) {
    
    let previous = [0];

    for (let i = 0; i < multiplier.length; i++) {
        
        const current = [-Infinity];

        for (let j = 0; j <= i; j++) {
            
            current[j] = Math.max(
                current[j], 
                previous[j] + multiplier[i] * nums[nums.length - 1 - i + j]
            );

            current[j + 1] = previous[j] + multiplier[i] * nums[j];
        }

        previous = current;
    }

    return Math.max(...previous);
};

