function longestSlideDown (pyramid) {
  //   take the index of the the start, and then, take the highest value from the next array +/- 1 from previous index
  // slide-left value === index of previous array, slide-right === index of previous array + 1
    let currentSlideIndex = 0
    let sum = pyramid[0][0]
    for (let i = 1; i < pyramid.length; i++) {
      let nextSlideValue
      let leftSlideValue = pyramid[i][currentSlideIndex]
      let rightSlideValue = pyramid[i][currentSlideIndex + 1]
      if (leftSlideValue > rightSlideValue) {
        nextSlideValue = leftSlideValue
        currentSlideIndex = currentSlideIndex > 0 ? currentSlideIndex-- : currentSlideIndex
        sum += nextSlideValue
        console.log(nextSlideValue, sum)
      } else {
        nextSlideValue = rightSlideValue
        currentSlideIndex++
        sum += nextSlideValue
        console.log(nextSlideValue, sum)
      }
    }
    return sum
  }

  // so this works for what I thought the question was asking, but doesn't appear to solve what's actually being asked
    // I'm still not quite sure what it's actually asking for after researching, so leaving as is
    