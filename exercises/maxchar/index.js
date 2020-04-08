// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCountMap = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    charCountMap[char] = charCountMap[char] + 1 || 1;
    if (charCountMap[char] > max) {
      max = charCountMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
