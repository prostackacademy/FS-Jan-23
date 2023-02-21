//JS Object does not allowed duplicate keys

let emp = {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com",
    email: "rahul@ibm.com"
}
console.log(emp)
console.log(emp.email)

console.log("****Update Operation")
emp.name = "Rahul Gandhi"
emp.loc = "Wayanad"
console.log(emp)