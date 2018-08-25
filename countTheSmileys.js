//return the total number of smiling faces in the array
function countSmileys(arr) {

  let counter = 0
  
  const validSmileysHash = {
    eyes: [58, 59],
    nose: [45, 126],
    mouth: [41, 68]
  }
  
  function hasValidSmileyAttr (attrCharCode, validValues) {
    for (let i of validValues) {
      if (attrCharCode === i) {
        return true
      }
    }
    return false
  }
  
  arr.forEach(smiley => {
  //check for valid eyes
    if (hasValidSmileyAttr(smiley.charCodeAt(0), validSmileysHash.eyes)) {
  //  check for valid nose && mouth
      if (hasValidSmileyAttr(smiley.charCodeAt(1), validSmileysHash.nose) && hasValidSmileyAttr(smiley.charCodeAt(2), validSmileysHash.mouth)) {
        counter++
      } 
  //  check for valid mouth
      else if (hasValidSmileyAttr(smiley.charCodeAt(1), validSmileysHash.mouth)) {
        counter++
      }
    }
  })
  
  return counter
}
