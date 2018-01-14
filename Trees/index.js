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


/**
 * Parse a more complex mathematical expression using a tree:
 *
 * (3 + (4 * 5))
 *
 *      ( + )
 *     /    \
 *    /      \
 * ( 3 )    ( * )
 *         /     \
 *        /       \
 *     ( 4 )     ( 5 )
 */

let buildParseTree = (exp) => {
  //Remove all whitespace from expression
  exp = exp.replace(/\s/g, "")
  var
    operators = ['+', '-', '*', '/']
    leftParend = '('
    rightParend = ')'
    tree = {}
    stack = [tree]
    node = tree
    //Iterate through the tokens in the expression
    for (var i=0; i<exp.length; i++) {
      const token = exp[i]
      if (token === leftParend) {
        //We have a new expression, so start a new tree
        node.left = {}
        stack.push(node)
        node = node.left
      } else if (token === rightParend) {
        //We've reached the end of an expression
        node = stack.pop()
      } else if (operators.indexOf(token) > -1) {
        //We have an operator, so set the current node to the operator,
        //then create and advance to a new right child
        node.val = token
        node.right = {}
        stack.push(node)
        node = node.right
      } else {
        //We have an operand (numerical value), set the current node value to the operand,
        //and use the stack to retreat back to the current node's parent
        node.val = Number(token)
        parent = stack.pop()
        node = parent
      }
    }
    return tree
}

console.log(buildParseTree('(3 + (4 * 5))'))
/**
 *
{ left: { val: 3 },
  val: '+',
  right: { left: { val: 4 }, val: '*', right: { val: 5 } } }
 */




