/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    
    var temp = Array(nums2.length + 1).fill(0);
    
    var result = 0;
    
    for(var i = 1; i <= nums1.length; i++) {
        
        
        for(var j = nums2.length; j > 0; j--) { 
            
            if(nums1[i - 1] === nums2[j - 1]) {
                
                temp[j] = temp[j - 1] + 1;
                
            } else {
                
               
                temp[j] = 0; 
            }
            
            if(result < temp[j]) result = temp[j]; 

        }
    }
    return result;
};