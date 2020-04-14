// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  totalcolumns = 2 * (n - 1) + 1;
  for (let i = 0; i < n; i++) {
    let stair = '';
    min = Math.floor(totalcolumns / 2) - i;
    max = Math.floor(totalcolumns / 2) + i;
    for (let j = 0; j < totalcolumns; j++) {
      if (j >= min && j <= max) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

module.exports = pyramid;
