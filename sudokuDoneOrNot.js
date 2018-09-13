function doneOrNot(board){
  // loop board arrays and check that all includes 1 through 9
  // create new arrays out of "blocks" and run through same func
  // need  to find a way to segmnet blocks without unnecessary loops through array
    // how to do this without overly specific if statements? 
    function contains1through9 (arr) {
      for (let i = 1; i <= 9; i++) {
        if (!arr.includes(i)) {
          return 'Try again!'
        }
      }
    }
    
    const blockArrays = []
    
    while (blockArrays.length < 10) {
      blockArrays.push([])
    }

    
    for (let i = 0; i < board.length; i++) {
      contains1through9(board[i])
      for (let j = 0; j < i.length; j++) {
        if (i < 3) {
          if (j < 3) {
          
          }
          else if (j < 6) {
          
          }
          else {
          
          }
        }
      }
    }
    
  }