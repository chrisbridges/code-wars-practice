function formatDuration (seconds) {
  if (seconds === 0) {
    return 'now'
  }
//   create hash for all time values in seconds
// for of loop looping through every value
//   nested while loop that goes through each value and decrements arg while incrementing result
//   any remainder is added in seconds
// store all values in array, if length of array is greater than 3, join all values but last two w/ comma
  const timeHash = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60
  }
  const timeArray = []
  
  for (let time of Object.keys(timeHash)) {
    if (seconds >= timeHash[time]) {
    let counter = 0
      while (seconds >= timeHash[time]) {
        seconds -= timeHash[time]
        counter++
      }
      if (counter >= 2) {
        timeArray.push(`${counter} ${time}s`)
      } else {
        timeArray.push(`${counter} ${time}`)
      }
    }
  }
  
  if (seconds > 0) {
    if (seconds === 1) {
      timeArray.push(`${seconds} second`)
    } else {
      timeArray.push(`${seconds} seconds`)
    }    
  }
  console.log(timeArray)
  if (timeArray.length > 2) {
    let timesWithCommas = ''
    for (let i = 0; i < timeArray.length - 1; i++) {
      if (i < timeArray.length - 2) {
        timesWithCommas += `${timeArray[i]}, `
      } else {
        timesWithCommas += `${timeArray[i]} and ${timeArray[i + 1]}`
      }
    }
    return timesWithCommas
  } else {
    return timeArray.join(' and ')
  } 
}
