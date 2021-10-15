const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

function bstAdd(root, data) {
  if (root === null) {
    return new Node(data);
  }
  if (root.data > data) {
    root.left = bstAdd(root.left, data)
  } else if (root.data < data) {
    root.right = bstAdd(root.right, data)
  }
  return root;
}

function bstHas(root, data) {
  if (root === null) {
    return false;
  }
  if (root.data === data) {
    return true;
  }
  if (root.data > data) {
    return bstHas(root.left, data)
  }
  return bstHas(root.right, data)
}

function bstFind(root, data) {
  if (root === null || root.data === data) {
    return root;
  }
  if (root.data > data) {
    return bstFind(root.left, data)
  }
  return bstFind(root.right, data)
}

function bstMin(root) {
  if (root.left !== null) {
    return bstMin(root.left);
  }
  return root.data;
}

function bstRemove(root, data) {
  if (root === null)
    return root;

  if (root.data > data) {
    root.left = bstRemove(root.left, data);
  } else if (root.data < data) {
    root.right = bstRemove(root.right, data);
  } else {

    if (root.left == null) { return root.right; }
    else if (root.right == null) { return root.left; }

    root.data = bstMin(root.right);
    root.right = bstRemove(root.right, root.data);
  }

  return root;
}

function bstMax(root) {
  if (root.right !== null) {
    return bstMax(root.right);
  }
  return root.data;
}

function bstInorder(root, res = []) {
  if (root !== null) {
    bstInorder(root.left, res);
    res.push(root.data);
    bstInorder(root.right, res);
  }
  return res;
}

module.exports = class BinarySearchTree {

  _root = null;

  root() {
    return this._root;
  }

  add(data) {
    this._root = bstAdd(this._root, data);
  }

  has(data) {
    return bstHas(this._root, data);
  }

  find(data) {
    return bstFind(this._root, data);
  }

  remove(data) {
    this._root = bstRemove(this._root, data);
  }

  min() {
    return bstMin(this._root);
  }

  max() {
    return bstMax(this._root);
  }

  inorder() {
    return bstInorder(this._root);
  }

}
