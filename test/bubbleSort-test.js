const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe("bubbleSort function", function() {
  context("with a number array", function() {
    it("can sort negative numbers", function() {
      var array = [3, 15, 1, -6, 27, 106]
      var sortedArray = [-6, 1, 3, 15, 27, 106]
      assert.deepEqual(bubbleSort(array), sortedArray)
    })
    it("can handle two numbers being the same", function() {
      var array = [3, 15, 27, 1, -6, 27, 106]
      var sortedArray = [-6, 1, 3, 15, 27, 27, 106]
      assert.deepEqual(bubbleSort(array), sortedArray)
    })
  })

  context("with a letters array", function() {
    it("sorts the array", function() {
      var array = ["d", "b", "a", "c"]
      var sortedArray = ["a", "b", "c", "d"]

      assert.deepEqual(bubbleSort(array), sortedArray)
    })
  })
})
