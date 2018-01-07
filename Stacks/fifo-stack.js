class Stack {

  constructor() {
    this._items = []
  }

  isEmpty() {
    return this._items.length === 0
  }

  push(item) {
    this._items.push(item)
  }

  pop() {
    return this._items.pop()
  }

  peek() {
    return this._items[0]
  }

  size() {
    return this._items.length
  }

}

module.exports = Stack