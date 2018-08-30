var sum_pairs=function(ints, s) {
  const potentialResults = []
  const resultIndexes = []
  for (let i = 0; i < ints.length - 1; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        potentialResults.push([ints[i], ints[j]])
        resultIndexes.push([i, j])
      }
    }
  }
  if (potentialResults.length === 0) {
    return undefined
  }
  const properResult = resultIndexes.reduce((lowest, value) => {
    const maxIndexLowest = Math.max(...lowest)
    const maxIndexValue = Math.max(...value)
    return maxIndexLowest < maxIndexValue ? lowest : value
  })
  return [ints[properResult[0]], ints[properResult[1]]]
}
