const Stack = require('../../Stacks/fifo-stack')

const balanced = '{ { ( [ ] [ ] ) } ( ) }'
const notBalanced = '{ { [ ] } )'

/**
 * Determines whether a given string of symbols is balanced,
 * meaning that every opening symbol has a correctly matched
 * closing symbol
 *
 * @param  {String} sstring String of symbols
 * @return {Boolean}         true, if the string is balanced and false if it is not
 */
let isBalanced = (sstring) => {
    sstring = sstring.replace(/\s/g, '')
    console.log(sstring)
    let stack = new Stack(),
        sMap = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

    for (s in sstring) {
        let symbol = sstring.charAt(s)
        //We have an opening symbol, push it onto the stack
        if (Object.keys(sMap).indexOf(symbol) !== -1) {
          stack.push(symbol)
        } else {
          //We have a closing symbol, so pop the most recent opener off the stack
          let opener = stack.pop()
          //If the most recent opener does not match the current closing symbol, the string is not balanced
          if (symbol != sMap[opener]) return false
        }
    }
    return stack.isEmpty()
}

console.log(`${balanced} is balanced: ${isBalanced(balanced)}`) //true
console.log(`${notBalanced} is balanced: ${isBalanced(notBalanced)}`) //false