var verticalTraversal = function(root) {
    
    const map = new Map();
    let minCol = 0;
    let maxCol = 0;
    let maxRow = 0;
    
    const dfs = (node = root, row = 0, col = 0) => {
        
        if(!node) return;

        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);
        maxRow = Math.max(maxRow, row);

        if(!map.has(col)) {
            map.set(col, new Map());
        }
        if(!map.get(col).has(row)) {
            map.get(col).set(row, []);
        }

        map.get(col).get(row).push(node.val);

        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    }
    
    dfs();

    const result = [];
    for(let m = minCol; m <= maxCol; m += 1) {
        let temp = [];
        for(let n = 0; n <= maxRow; n += 1) {
            if(!map.has(m) || !map.get(m).has(n)) continue;
            temp = temp.concat(map.get(m).get(n).sort((a, b) => a - b));
        }

        result.push(temp);
    }

    return result;
};