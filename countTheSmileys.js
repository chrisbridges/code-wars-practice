//return the total number of smiling faces in the array
function countSmileys(arr) {
  // create data array of all valid smileys
    const validSmileys = [];
  //   loops through each validSmiley to see if current arg value is equal to a valid
  //     doesn't scale particularly well if need to add more smileys
  
  // using Regex
  //   see if first character is valid 'eyes' - ":" or ";"
    //   check if nose is present - "-" or "~"
    //   if it is, next char must be mouth - ")" or "D"
    
  // if eyes
  //   if nose
  //     if mouth
  //   if mouth
  // DRY mouth logic
  
  // I can't seem to figure out the Regex, can I just use Char Codes?
  // Create hash map for all valid charcodes for eyes, noses, mouths?
  const validSmileysHash = {
    eyes: [58, 59],
    nose: [45, 126],
    mouth: [41, 68]
  }
  
  function hasValidEyes (eyes) {
    for (let i of validSmileysHash.eyes) {
      if (eyes === i) {
        return true
      }
    }
    return false
  }
  // could DRY this even further, make a function that takes in hash array and value to be checked
  
  }