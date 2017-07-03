// run "mocha test/bubbleSort-test.js" in terminal to test

function bubbleSort(array, passes = 1) {
  var sorted = true
  var length = array.length - passes

  for (i = 0; i < length; i++) {
    if (array[i] > array[i+1]) {
      sorted = false
      array.splice(i, 2, array[i+1], array[i])
    }
  }

  if (!sorted) {
    passCount = passes += 1
    bubbleSort(array, passCount)
  }
  
  return array
}

module.exports = bubbleSort
