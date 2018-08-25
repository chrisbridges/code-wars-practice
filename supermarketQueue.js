function queueTime(customers, n) {
  if (n === 0 || customers.length === 0) {
    return 0;
  }
  if (n === 1) {
    return customers.reduce((sum, num) => return sum + num)
  }
  
//   Math.min(...numberArray) finds the lowest value

//   shift the first n values off the customers queue
//     then find the min value in the current queue
//       subtract that value from all values in queue and add same value to totalTime
//         for all 0 values, shift the next customer into that position

  
}