/**
 * @param {string[]} equations
 * @return {boolean}
 */
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    
  const variables = new Array(27).fill().map((_, index) => index);
  
  const aCode = 'a'.charCodeAt();

  // Creates connections
  for(let i = 0; i < equations.length; i++) {
    
      const currEquation = equations[i];

    if(currEquation[1] === '=') {
      
      const [x, y] = currEquation.split('==');
      const charX = x.charCodeAt() - aCode;
      const charY = y.charCodeAt() - aCode;

      connect(charX, charY);
        
    }
  }

  // If values that have to be different are connected, then it's invalid.
  for(let i = 0; i < equations.length; i++) {
    
      const currEquation = equations[i];

    if(currEquation[1] === '!') {
      
      const [x, y] = currEquation.split('!=');
      const charX = x.charCodeAt() - aCode;
      const charY = y.charCodeAt() - aCode;

      if(isConnected(charX, charY)) {
        
          return false;
          
      }
    }
  }

  return true;
  
  function isConnected(a, b) {
    
      return variables[a] === variables[b];
  }

  function connect(a, b) {
    
      if(isConnected(a, b)) return;   

	// Store the previous value
    const valToUpdate = variables[a];

    for(let i = 0; i < 27; i++) {
	  // Every letter that were in the same set of 'a' should be updated to belong to b's set.
      if(variables[i] === valToUpdate) {
          
        variables[i] = variables[b];
          
      }
    }
  }
};