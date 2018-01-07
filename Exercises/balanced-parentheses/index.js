const Stack = require('../../Stacks/fifo-stack')

//Leverage a first-in first-out stack to determine if a given string of paratheses is "balanced"
const balanced = '(((())))'
const notbalanced = '(((()))'

/*
  Accepts a string of opening and closing parens and determines if they are balanced,
  meaning that every opening paren is matched by a closing paren
  and no opening or closing parens are left unmatched
*/
let isBalanced = (pstring) => {
    let stack = new Stack()
    for (p in pstring) {
        let paren = pstring.charAt(p)
        //If we have an opening paren, push it onto the stack
        if (paren === '(') {
            stack.push(paren)
        } else {
          //Otherwise, we have a closing paren. Pop the stack to signify a complete closure
            stack.pop()
        }
    }
    return stack.isEmpty()
}

console.log(`${balanced} is balanced: ${isBalanced(balanced)}`)
console.log(`${notbalanced} is balanced: ${isBalanced(notbalanced)}`)