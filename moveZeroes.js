function moveZeros (arr) {
  function allZeroes (value) {
    return value === 0
  }
  const firstZeroIndex = arr.findIndex(allZeroes)
  const zeroArray = arr.slice(firstZeroIndex)
  const allZeroesAtEnd = zeroArray.every(allZeroes)
  if (allZeroesAtEnd) {
    return arr
  } else {
    return moveZeros([...arr.slice(0, firstZeroIndex), ...arr.slice(firstZeroIndex + 1), 0])
  }
  
//   run array.findIndex
//     slice array until that index
}

// I like this one 
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}

