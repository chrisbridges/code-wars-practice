function queueTime(customers, n, customersInTill = []) {
  if (n === 0 || customers.length === 0) {
    return 0;
  }
  if (n === 1) {
    return customers.reduce((sum, num) => return sum + num)
  }
  if (n > customers.length) {
    return Math.max(...customers)
  }
  
  for (let i = 0; i < customersInTill.length; i++) {
    if (customersInTill[i] === 0) {
      customersInTill[i] = customers[0]
      customers.shift()
    }
  }
  
//   Math.min(...numberArray) finds the lowest value

//   shift the first n values off the customers queue
//     then find the min value in the current queue
//       subtract that value from all values in queue and add same value to totalTime
//         for all 0 values, shift the next customer into that position
  let totalTime = 0
  let customersInTill = customers.slice(0, n)
  customers = customers.slice(n)
  let currentCustomerMin = Math.min(...customersInTill)
  customersInTill.forEach(customer => customer - currentCustomerMin)
  totalTime += currentCustomerMin
  return totalTime + queueTime(customers, n)
  
//   while (customersInLine.length > 0) {
//     customersInTill.forEach(customer => {
//     customer = customer - currentCustomerMin
//     if (customer === 0) {
      
//     }
//   })
//   }
//   n is our number of "threads"
//     load them all in
  
//   whenever the last customer is served, take the highest value of those in the till,
//   add it to our time thus far, and that's our total
}