/**
 * @param {number[][]} properties
 * @return {number}
 */

const numberOfWeakCharacters = (properties, count = 0, max_d = 0) => {
    properties.sort((a,b) => b[0] - a[0] || a[1] - b[1]).forEach(res => {
        if(res[1] < max_d) count++;
        if(res[1] > max_d) max_d = res[1];
    });
    return count;
};