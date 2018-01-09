const HashTable = require('./hash-table')

let ht = new HashTable(60)

ht.insert("AfterTheBurning", "There is only the burning...")
ht.insert("AndAfterTheBurning", "There is only the burning and after the burning...")
ht.insert("Bartleby", 1853)

console.log(ht.get("AfterTheBurning"))
console.log(ht.get("AndAfterTheBurning"))
console.log(ht.get("Bartleby"))
