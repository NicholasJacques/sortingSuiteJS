var pry = require('pryjs')

// run "mocha test/mergeSort-test.js" in terminal to test

var numbers = [6, 5, 3, 1, 8, 7, 2, 4]

function mergeSort(array) {
  if (array.length < 2) { return array }

  var splitPoint = Math.floor(array.length / 2),
  leftArray = array.slice(0, splitPoint),
  rightArray = array.slice(splitPoint)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right) {
  var result = [],
  leftIndex = 0
  rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++])
    } else {
      result.push(right[rightIndex++])
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

module.exports = mergeSort