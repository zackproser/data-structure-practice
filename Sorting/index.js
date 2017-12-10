const qs = require('./quick-sort')

let unsorted = [44, 53, 1, 22, 3, 4, 7, 98, 73, 56, 63, 2]

let sorted = qs(unsorted)

console.log(sorted)

// [ 1, 2, 3, 4, 7, 22, 44, 53, 56, 63, 73, 98 ]