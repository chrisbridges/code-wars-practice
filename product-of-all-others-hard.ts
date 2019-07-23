// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

function productOfAllOthers (arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    // you need to create a copy of the array to get the values of it, instead of the reference
      // setting the array as freshArr = arr, will access the same spot in memory and modify the original arr array
      // see: https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array
    let freshArr = [...arr]
    let arrSansIndex = removeIndex(freshArr, i)
    let productOfNewArr = reduceAllIndexes(arrSansIndex)
    result.push(productOfNewArr)
  }
  return result
}

function reduceAllIndexes (arr) {
  return arr.reduce((acc, num) => acc * num)
}

function removeIndex (arr, index) {
  arr.splice(index, 1)
  return arr
}

console.log(`${productOfAllOthers([3, 2, 1])} should equal [2, 3, 6]`)
console.log(`${productOfAllOthers([1, 2, 3, 4, 5])} should equal [120, 60, 40, 30, 24]`)
