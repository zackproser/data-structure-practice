
/**
 * First in, first out queue implementation
 */
class Fifo {

  constructor() {
    this._items = []
  }

  isEmpty() {
    return this._items.length === 0
  }

  // Push an item onto the queue
  enqueue(item) {
    this._items.push(item)
  }

  // Pop the topmost item off the queue
  dequeue() {
    return this._items.shift()
  }

  size() {
    return this._items.length
  }
}

module.exports = Fifo