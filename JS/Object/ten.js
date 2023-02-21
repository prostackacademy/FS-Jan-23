let emp = {
    id: 101,
    name: "Rahul",
    sal: 45000,
    email: "rahul@gmail.com",
    loc: "wayanad"
}
console.log(emp.id)
for (prop in emp) {
    console.log(emp.prop)
}