const Node = require('./simple-node')

let root = new Node('a')
console.log(root.val) //a
console.log(root.left) //null

root.insertLeft(new Node('b'))
console.log(root.left) //Node { val: 'b', left: null, right: null }
console.log(root.left.val) //b

root.insertRight(new Node('c'))
console.log(root.right) //Node { val: 'c', left: null, right: null }
console.log(root.right.val) //c

root.right.val = 'Greetings'
console.log(root.right.val) //Greetings

/**
 * Define a simple mathematical expression using a tree,
 * whereby the root defines the operation and the leaves define the values
 *
 *    ( * )
 *    /   \
 *   /     \
 * ( 9 )  ( 9 )
 *
 */
let mathRoot = new Node('*')
mathRoot.insertLeft(new Node(9))
mathRoot.insertRight(new Node(9))

let expression = `${mathRoot.left.val} ${mathRoot.val} ${mathRoot.right.val}`

console.log(`Parsed expression: ${eval(expression)}`) // 81