var levelOrder = function(root) {
    let result = []
    
    if (!root) {    
        return result
    }
    
    result.push([root.val])
    let dequeue = [root] 
    
    while (dequeue.length > 0) { 
        let list = []
        let len = dequeue.length
        
        for (let i = 0; i < len; i++) { 
            let node = dequeue.shift()
            
            for (let n of node.children) { 
                dequeue.push(n)
                list.push(n.val)
            }
        }
        
        if (list.length > 0) {  
            result.push(list)
        }
    }
    return result
};