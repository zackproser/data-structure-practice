class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
  insertLeft(child) {
    //If there is no left child already, set it to child
    if (this.left === null) {
      this.left = child
    } else {
      child.left = this.left
      this.left = child
    }
  }
  insertRight(child) {
    if (this.right === null) {
      this.right = child
    } else {
      child.right = this.right
      this.right = child
    }
  }
}

module.exports = Node