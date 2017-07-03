// run "mocha test/insertionSort-test.js" in terminal to test

function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
    j = i
    while (j > 0 && array[j - 1] > array[j]) {
      temp = array[j-1]
      array[j-1] = array[j]
      array[j] = temp
      j--
    }
  }
  return array
}

module.exports = insertionSort