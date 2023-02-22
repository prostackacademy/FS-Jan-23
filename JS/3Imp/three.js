let emp = { id: 101, name: "Rahul", sal: 45000 }
let user = {}
console.log(Object.keys(emp))  //[id, name, sal]
console.log(Object.keys(emp).length)  //3
console.log(Object.keys(emp).length > 0)  //true

if (Object.keys(user).length > 0) {
    console.log("Not Empty Object")
}
else {
    console.log("Empty Object")
} 