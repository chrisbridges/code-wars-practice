function sqInRect(lng, wdth){
  if (lng === wdth) {
    return null
  }
  const result = []
//   value is equal to the smallest of lng / wdth every cycle
  while (lng !== wdth) {
    if (lng > wdth) {
      lng -= wdth
      result.push(wdth)
    } else {
      wdth -= lng
      result.push(lng)
    }
  }
//   doesn't matter whether you push lng or wdth here since they're equal
  result.push(lng)
  return result
}

// if you weren't supposed to return null if the initial arguments equal each other, I'd like to do this recursively
