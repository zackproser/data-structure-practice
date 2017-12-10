Array.prototype.random = function(){
  return this[Math.floor(this.length * Math.random())]
}

/**
 * Implementation of quicksort
 *
 * Time complexity:
 *
 * Best case O(n log(n))
 *
 * Average case O(n log(n))
 *
 * Worst case O(n^2)
 */
function quickSort(array) {
  if (array.length < 2) {
    return array
  }

  let pivot = array.random()
  let lesser = array.filter( i => i < pivot )
  let greater = array.filter( i => i >  pivot )

  return quickSort(lesser).concat(pivot, quickSort(greater))
}

module.exports = quickSort