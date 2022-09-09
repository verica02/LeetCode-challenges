/**
 * @param {number[][]} properties
 * @return {number}
 */

var numberOfWeakCharacters = (properties, count = 0, maxDefence = 0) => {
    
    properties.sort((a,b) => b[0] - a[0] || a[1] - b[1])
    
              .forEach(res => {
        
                if(res[1] < maxDefence){
                    count++;
                }
        
                if(res[1] > maxDefence){
                    maxDefence = res[1];
                }
        
             });
    
    return count;
};