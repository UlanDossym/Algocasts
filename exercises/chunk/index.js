// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  if (size >= array.length) {
    return [array];
  }
  let result = [];
  let subarr = [];
  for (let i = 1; i <= array.length; i++) {
    subarr.push(array[i - 1]);
    if (i % size == 0 || i == array.length) {
      result.push(subarr);
      subarr = [];
    }
  }
  return result;
}

module.exports = chunk;
