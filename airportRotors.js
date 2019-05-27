var flapDisplay = function(lines, rotors) {
  console.log('lines',lines,'rotors',rotors)
//   this is a string of unique characters, so we only need to find the first instance of any character
  const rotorValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789'
//   for each value in lines, loop over them
//   for each corresponding value in rotors, move that value forward in rotor values by X rotor value
//   find index of character in rotorValues, from there, add rotor to index
//     to avoid indexing out, check if value + currentIndex is longer than length
//       if it is, subtract value by remaning indexes and try again

// lines is an array with a single value
  const splitLines = lines[0].split('')
  const lastIndexOfRotorValues = rotorValues.length - 1
  splitLines.forEach((lineValue, index) => {
    const indexOfLineValue = rotorValues.indexOf(lineValue)
    console.log(indexOfLineValue)
    let numberOfCharsToMoveForward = rotors[0][index]
//     probably put this in a while loop in case of any really large rotor values
    if (indexOfLineValue + numberOfCharsToMoveForward > lastIndexOfRotorValues) {
      numberOfCharsToMoveForward = lastIndexOfRotorValues - indexOfLineValue
      console.log(numberOfCharsToMoveForward)
      
    }
    lineValue = rotorValues[indexOfLineValue + numberOfCharsToMoveForward]
    console.log(lineValue)
    splitLines[index] = lineValue
  })
  console.log(splitLines)
  return splitLines
}