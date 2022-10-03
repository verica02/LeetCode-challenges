const minCost = (colors, neededTime) => {
    
    // For each group of same colored balloons, keep the
    // highest time one
    
    let result = 0;
    let max = 0;

    for (let i = 0; i <= colors.length - 1; i++) {
       
        let curr = { color: colors[i], time: neededTime[i] };
        let next = { color: colors[i + 1], time: neededTime[i] };

        // 2 to X same colors together
        max = Math.max(max, curr.time); //current max of colored balloons
        result += curr.time; // Increment the result

        // Next color is unique aka making stuff colorful

        // If we have continuous back to back colors that are different,
        // result will continue to be 0

        // If we have continue back to back colors that are the same,
        // this next statement will only happen when we find a new color
        // Meaning we will remove the highest value from our result and reset max
        
        if (curr.color !== next.color) {
            result -= max;
            max = 0;
        }
    }

    // Return the minimum cost to make rope colorful 
    return result;
};