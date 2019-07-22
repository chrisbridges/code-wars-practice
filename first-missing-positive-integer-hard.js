// Given an array of integers, find the first missing positive integer in linear time and constant space. 
// In other words, find the lowest positive integer that does not exist in the array. 
// The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

function lowestPositiveMissingInteger (arr) {
  // sorts the array from lowest to largest values and then creates a set, removing all duplicate values, and removes all negative numbers, then converts back to an Array, so I can loop over it - lol
  arr = Array.from(new Set(arr.sort((a, b) => a - b).filter(val => val >= 0)))
  // now that I know my argument is only positives and in order, I should be able to loop over it and check that every corresponding index is index === index + 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1
    }
  }
  // create an end condition where if no number is missing, increment the last index and return that
  return arr[arr.length - 1] + 1
}

console.log(lowestPositiveMissingInteger([3, 4, -1, 1]), ' should be 2')
console.log(lowestPositiveMissingInteger([1, 2, 0]), ' should be 3')
console.log(lowestPositiveMissingInteger([1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 0]), ' should be 3')
console.log(lowestPositiveMissingInteger([1,2,3,4]), ' should be 5')