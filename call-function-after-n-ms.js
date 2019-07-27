// This problem was asked by Apple.

// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

function jobScheduler (f, n) {
  setTimeout(function () { f() }, n)
}

console.log(jobScheduler(function () { console.log('1') }, 1000))
console.log(jobScheduler(function () { console.log('2') }, 2000))
console.log(jobScheduler(function () { console.log('3') }, 3000))
console.log(jobScheduler(function () { console.log('5') }, 5000))
