// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = Array.from(Array(n), (_) => Array(n).fill(0));
  let counter = 1;
  let min_col = 0;
  let max_col = n - 1;
  let min_row = 0;
  let max_row = n - 1;
  let start_row = 0;
  let end_row = n - 1;
  let start_col = 0;
  let end_col = n - 1;
  while (counter <= n * n) {
    min_col = start_col;
    while (start_col <= end_col) {
      results[start_row][start_col] = counter;
      start_col++;
      counter++;
    }
    start_col = min_col;
    start_row++;
    min_row = start_row;
    while (start_row <= end_row) {
      results[start_row][end_col] = counter;
      start_row++;
      counter++;
    }
    start_row = min_row;
    end_col = end_col - 1;
    max_col = end_col;
    while (start_col <= end_col) {
      results[end_row][end_col] = counter;
      counter++;
      end_col = end_col - 1;
    }
    end_col = max_col;
    end_row = end_row - 1;
    max_row = end_row;
    while (start_row <= end_row) {
      results[end_row][start_col] = counter;
      counter++;
      end_row = end_row - 1;
    }
    end_row = max_row;
    start_col++;
    min_col = start_col;
  }
  return results;
}

module.exports = matrix;
