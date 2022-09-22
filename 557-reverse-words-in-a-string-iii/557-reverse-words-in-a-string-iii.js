/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split('');
    let i = 0;
    
    for (let j = 1; j <= arr.length; j++) {
        if (arr[j] === ' ' || j === arr.length) {
            let k = j - 1;
            while (i < k) {
                const temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
                i++;
                k--;
            }
            i = j + 1;
        }
    }
    
    return arr.join('');
};