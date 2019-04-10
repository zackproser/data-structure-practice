/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead
 */
var reverseString = function(s) {
  if (s === null || s === "") {
    return s
  }
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let leftChar = s[left]
    let rightChar = s[right]
    let tempChar = rightChar
    //Swap in-place
    s[left] = rightChar
    s[right] = leftChar

    left++
    right--
  }
}