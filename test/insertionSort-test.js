const assert = require('chai').assert
const insertionSort = require('../insertionSort')

describe("insertionSort function", function() {
  context("with a number array", function() {
    it("can sort negative numbers", function() {
      var array = [3, 15, 1, -6, 27, 106]
      var sortedArray = [-6, 1, 3, 15, 27, 106]
      assert.deepEqual(insertionSort(array), sortedArray)
    })
  })

  context("with an array of letters", function() {
    it("can sort letters", function() {
      var array = ["d", "b", "a", "c"]
      var sortedArray = ["a", "b", "c", "d"]
      assert.deepEqual(insertionSort(array), sortedArray)
    })
  })
})
