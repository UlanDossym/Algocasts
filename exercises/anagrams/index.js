// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const stringArrA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const stringArrB = stringB.replace(/[^\w]/g, '').toLowerCase();
  let charCounterMapA = {};
  let charCounterMapB = {};
  for (let char of stringArrA) {
    charCounterMapA[char] = charCounterMapA[char] + 1 || 1;
  }
  for (let char of stringArrB) {
    charCounterMapB[char] = charCounterMapB[char] + 1 || 1;
  }
  if (Object.keys(charCounterMapA).length != Object.keys(charCounterMapB).length) return false;
  for (let char in charCounterMapA) {
    if (charCounterMapA[char] != charCounterMapB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
