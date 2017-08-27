/**
 * Singly linked list implementation
 */
class SinglyLinkedList {
  constructor() {
    this._length = 0
    this.head = null
  }

  /**
   * Adds a new node with the supplied value at the end of the list
   *
   * @param {Mixed} value The value to store in the node (will become the Node's data property)
   * @return void
   */
  add(value) {
    let node = new Node(value),
    currentNode = this.head

    if (!currentNode) {
      this.head = node
      this._length++

      return node
    }
    //Advance through List as long as there is a next node
    while(currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node
    this._length++

    return node
  }

  getNodeAt(position) {
    let currentNode = this.head,
    count = 1

    if (this._length === 0 || position < 1 || position > this._length) {
      throw new Error(`No node at position ${position}`)
    }

    while(count < position) {
      currentNode = currentNode.next
      count++
    }

    return currentNode
  }

  /**
   * Removes a node from the list at the supplied position
   *
   * @param  {Number} position The position of the node that should be removed
   * @return {Object} node     The node that was removed
   */
  remove(position) {
    let currentNode = this.head,
    length = this._length,
    count = 0,
    beforeNodeToDelete = null,
    nodeToDelete = null,
    deletedNode = null

    if (position < 0 || position > length) {
      throw new Error(`No node at position ${position}`)
    }

    if (position === 1) {
      this.head = currentNode.next
      deletedNode = currentNode
      currentNode = null
      this._length--

      return deletedNode
    }

    while (count < position) {
      beforeNodeToDelete = currentNode
      nodeToDelete = currentNode.next
      count++
    }

    beforeNodeToDelete.next = nodeToDelete.next
    deletedNode = nodeToDelete
    nodeToDelete = null
    this._length--

    return deletedNode
  }

  /**
   * Returns the length of the list
   *
   * @return {Number} The number of nodes in the list
   */
  length() {
    return this._length
  }
}

/**
 * Create and return a new Node
 *
 * @param {Mixed} data The value to store in the new node
 */
function Node(data) {
  this.data = data
  this.next = null
}

module.exports = SinglyLinkedList
