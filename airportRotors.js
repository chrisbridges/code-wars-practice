var flapDisplay = function(lines, rotors) {
  console.log('lines',lines,'rotors',rotors)
  console.log(ALPHABET)
//   this is a string of unique characters, so we only need to find the first instance of any character
//   const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   for each value in lines, loop over them
//   for each corresponding value in rotors, move that value forward in rotor values by X rotor value
//   find index of character in ALPHABET, from there, add rotor to index
//     to avoid indexing out, check if value + currentIndex is longer than length
//       if it is, subtract value by remaning indexes and try again

// lines is an array with a single value
  const splitLines = lines[0].split('')
  const lastIndexOfRotorValues = ALPHABET.length - 1
  splitLines.forEach((lineValue, index) => {
    let indexOfLineValue = ALPHABET.indexOf(lineValue)
    console.log(indexOfLineValue)
    let numberOfCharsToMoveForward = rotors[0][index]
//     probably put this in a while loop in case of any really large rotor values
    if (indexOfLineValue + numberOfCharsToMoveForward > lastIndexOfRotorValues) {
      numberOfCharsToMoveForward = lastIndexOfRotorValues - indexOfLineValue
      console.log(numberOfCharsToMoveForward)
      
    }
    lineValue = ALPHABET[indexOfLineValue + numberOfCharsToMoveForward]
    console.log(lineValue)
    splitLines[index] = lineValue
  })
  console.log(splitLines)
  return [splitLines.join('')]
}

// OH, each rotor flip advances every character by 1, not just the individual character...
// I "believe" my solution would have worked had I properly understood the rotation method
// come back to this at another time...