let emp = { id: 101, name: "Rahul" }
let b = {}

console.log(emp.length) //undefined
//while trying to access object property which is not exists
//in object we will get undefined.

console.log(Object.keys(emp))
console.log(Object.keys(emp).length > 0)
console.log(Object.values(emp))