function createPhoneNumber(numbers){
  let firstThreeDigits = ''
  for (let i = 0; i < 3; i++) {
    firstThreeDigits += numbers[i]
  }
  let secondThreeDigits = ''
  for (let i = 3; i < 6; i++) {
    secondThreeDigits += numbers[i]
  }
  let lastFourDigits = ''
  for (let i = 6; i < 10; i++) {
    lastFourDigits += numbers[i]
  }
  return `(${firstThreeDigits}) ${secondThreeDigits}-${lastFourDigits}`
}
