let employees = [{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 },
{ id: 103, name: "Priyanka Gandhi", salary: 65000 },
{ id: 104, name: "Modi", salary: 75000 },
{ id: 105, name: "Sabreen", salary: 175000 },
{ id: 106, name: "Bhanu", salary: 255000 }
]

function display_Data() {
    let rows = ""
    let i = 0
    while (i <= employees.length - 1) {
        rows = rows + `<tr>
                         <td>${employees[i].id}</td>
                         <td>${employees[i].name}</td>
                         <td>${employees[i].salary}</td>
                     </tr>`
        i++
    }
    document.getElementById('abc').innerHTML = rows
}

