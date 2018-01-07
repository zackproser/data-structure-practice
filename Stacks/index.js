const Stack = require('./fifo-stack')

let stack = new Stack()

console.log(`Stack starts empty: ${stack.isEmpty()}`)

console.log('Adding 3 items...')

stack.push('Theo')
stack.push('Julian')
stack.push('Jasper')

console.log(`Stack length: ${stack.size()}`)

console.log('Popping everything...')

while(!stack.isEmpty()) {
  console.log(`Popped: ${stack.pop()}`)
}

console.log(`Stack is now empty: ${stack.isEmpty()}`)