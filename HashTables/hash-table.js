/**
 * Hash table implementation
 *
 * Accepts an arbitrary size on instantiation
 *
 * Uses linked lists to extend a given storage index as needed
 */
class HashTable {
  /**
   * Instantiate a new hash table with the provided storage limit
   *
   * @param  {Number} storageLimit The number of slots to allocate
   * @return {Object} hashtable
   */
  constructor(storageLimit) {
    this.storage = Array(storageLimit)
    this.storageLimit = storageLimit
  }

  /**
   * Reliably return an array index for a given string
   *
   * @param  {String} string The string to convert to an array index
   * @return {Number}        The array index associated with the given string
   */
  hash(string) {
    let num = 0
    for (var i = 0; i < string.length; i++) {
      num += string.charCodeAt(i)
    }
    return num % this.storageLimit
  }

  /**
   * Insert a value into the hash table, identified by the supplied key
   *
   * @param  {String} key   The key to be hashed and used for storage
   * @param  {Mixed} value  The value to store
   * @return void
   */
  insert(key, value) {
    //Obtain an index for our string
    let index = this.hash(key)
    //If there's nothing at this index already, we can store our new node
    if (!this.storage[index]) {
      this.storage[index] = new HashNode(key, value)
      //If we immediately find our key already stored there, update the value
    } else if (this.storage[index].key === key) {
      this.storage[index].value = value
    } else {
      //We haven't found our key in the linked list stored in this hash table array index yet
      //Follow the list until we either:
      let currentNode = this.storage[index]
      while (currentNode.next) {
        //find our key and update it,
        if (currentNode.next.key === key) {
          currentNode.next.value = value
          return
        }
        currentNode = currentNode.next
      }
      //or reach the end of the linked list and insert our item as the last node
      currentNode.next = new HashNode(key, value)
    }
  }

  /**
   * Attempt to retrieve a stored value by key
   *
   * @param  {String} key The key of the stored item to retrieve
   * @return {Mixed}     The value, if it exists, or null if it does not
   */
  get(key) {
    let index = this.hash(key)
    if (!this.storage[index]) return null
    let currentNode = this.storage[index]
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value
        currentNode = currentNode.next
    }
    return null
  }
}

/**
 * A single HashNode (linked list node)
 */
class HashNode {
  constructor(key, value, next) {
    this.key = key
    this.value = value
    this.next = next || null
  }
}

module.exports = HashTable