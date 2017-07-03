var pry = require('pryjs')

nums = [3, 15, 1, -6, 27, 106]

function bubbleSort(array) {
  var sorted = false
  while (sorted === false) {
    sorted = true
    for (i = 0; i < array.length; i++) {
      var previous = i
      var current = i + 1

      if (array[current] < array[previous]) {
        sorted = false
        array.splice(previous, 2, array[current], array[previous])
      } else {
        array
      }
    }
  }
  return array
}

module.exports = bubbleSort
