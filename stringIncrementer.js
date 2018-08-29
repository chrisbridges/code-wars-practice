function incrementString (strng) {
  const splitString = strng.split('')
  const firstNumberIndex = splitString.findIndex(value => !isNaN(parseInt(value)) === true)
  if (firstNumberIndex === -1) {
    return strng + '1'
  }
  const originalString = splitString.slice(0, firstNumberIndex).join('')
  const numberArray = splitString.slice(firstNumberIndex)
  const numberLength = numberArray.length
  const incrementedNumber = parseInt(numberArray.join('')) + 1
  let incrementedNumberString = incrementedNumber.toString()
  const incrementedNumberLength = incrementedNumber.toString().length
  if (incrementedNumberLength !== numberLength) {
    const differenceInLengths = numberLength - incrementedNumberLength
    for (let i = 0; i < differenceInLengths; i++) {
      incrementedNumberString = '0' + incrementedNumberString
    }
  }
  return originalString + incrementedNumberString
}
