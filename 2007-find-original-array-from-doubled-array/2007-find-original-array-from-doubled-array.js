/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    
    if(changed.length % 2 !== 0){
        
        return []; 
    }
    
    let doubled = true;
    
    changed.sort((a,b) => a-b) 
    
    let i = 0;
    
    while(i < changed.length){
        
        let pos = changed.indexOf(changed[i]*2, i+1); 
        
        if(pos === -1){
            
            doubled = false; 
            
            break;
            
        }else {
            
            changed.splice(pos, 1); 
            
            i++;
        } 
    }
    
    return (doubled? changed: []);
};