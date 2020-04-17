// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    let node = new Node(data);
    this.children.push(node);
  }
  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(callback) {
    if (!this.root) return null;
    let current = this.root;
    let queue = [current];
    while (queue.length > 0) {
      current = queue.pop();
      callback(current);
      if (current.children.length > 0) {
        current.children.forEach((element) => {
          queue.unshift(element);
        });
      }
    }
  }
  traverseDF(callback) {
    if (!this.root) return null;
    let current = this.root;
    let stack = [current];
    while (stack.length > 0) {
      current = stack.pop();
      callback(current);
      if (current.children.length > 0) {
        for (let i = current.children.length - 1; i >= 0; i--) {
          stack.push(current.children[i]);
        }
      }
    }
  }
}

module.exports = { Tree, Node };
