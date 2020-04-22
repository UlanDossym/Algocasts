// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (min == null && max == null) {
    min = this.data;
    max = this.data;
  }
  if (min != null && node.data > min) return false;
  if (max != null && node.data < max) return false;
  if (node.left && !validate(node.left, node.left.data, max)) return false;
  if (node.right && !validate(node.right, min, node.right.data)) return false;
  return true;
}

module.exports = validate;
