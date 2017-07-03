const assert = require('chai').assert
const mergeSort = require('../mergeSort')

describe("mergeSort function", function() {
  context("with an array of numbers", function() {
    it("sorts the numbers", function() {
      var array = [3, 15, 1, -6, 27, 106]
      var sortedArray = [-6, 1, 3, 15, 27, 106]
      assert.deepEqual(mergeSort(array), sortedArray)
    })
  })

  context("with an array of letters", function() {
    it("can sort letters", function() {
      var array = ["d", "b", "a", "c"]
      var sortedArray = ["a", "b", "c", "d"]
      assert.deepEqual(mergeSort(array), sortedArray)
    })
  })
})