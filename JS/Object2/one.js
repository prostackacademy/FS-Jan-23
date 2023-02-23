let emp = {
    id: 101,
    name: "Rahul"
}
let user = {
    u_Id: 101,
    name: "Rahul",
    get_Details: function () {
        console.log("Displaying User Details")
    }
}
console.log(user.u_Id)
console.log(user.name)
user.get_Details()