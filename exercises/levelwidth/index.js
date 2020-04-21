// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  if (!root) return null;
  let counters = [0];
  let queue = ['stopper', root];
  while (queue.length > 1) {
    let current = queue.pop();
    if (current == 'stopper') {
      counters.push(0);
      queue.unshift(current);
    } else {
      queue.unshift(...current.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;
