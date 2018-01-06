const Fifo = require('./fifo')

let queue = new Fifo()

console.log(`Queue starts out empty: ${queue.isEmpty()}`)

console.log('Enqueuing 3 items...')
queue.enqueue('Tommy Shelby')
queue.enqueue('Alfie Solomons')
queue.enqueue('Ada Shelby')

console.log(`Queue size is now: ${queue.size()}`)
console.log(`Queue is now empty: ${queue.isEmpty()}`)

console.log(`Dequeuing everything...`)
while(!queue.isEmpty()) {
  console.log(`Dequeued: ${queue.dequeue()}`)
}

console.log(`Queue is now empty: ${queue.isEmpty()}`)