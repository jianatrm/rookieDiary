const {List } = require("immutable")


let list = List([1,2,3,4])

let list1 = list.insert(2,5)

console.log(list)
console.log(list1)