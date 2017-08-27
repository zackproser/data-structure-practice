const LL = require('./singly-linked-list')

let List = new LL()

List.add('valravn')
List.add('surtr')
List.add('druth')

console.log(List.length() === 3)
// true
console.log(List.getNodeAt(2))
// Node { data: 'surtr', next: Node { data: 'druth', next: null } }

List.remove(3)

console.log(List.length() === 2)
// true