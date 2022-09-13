/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    
    let binary = data.map(d => { 
        let b = "00000000" + d.toString(2);
        return b.substring(b.length - 8);
    })

    let length = 0; 
    
    for (let i = 0; i < binary.length; i++) {
        
        let bytes = binary[i].indexOf('0');
        
        if (length == 0) {
            
            if (bytes == 0) continue;
            if (bytes > 4 || bytes < 2) return false;  
            length = bytes;
            
        }else 
            if (bytes != 1)  return false  
        
        length--;
    }
    return length == 0;
};