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