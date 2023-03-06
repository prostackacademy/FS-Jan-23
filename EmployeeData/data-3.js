let employees = [{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 },
{ id: 103, name: "Priyanka Gandhi", salary: 65000 },
{ id: 104, name: "Modi", salary: 75000 },
{ id: 105, name: "Sabreen", salary: 175000 },
{ id: 106, name: "Bhanu", salary: 255000 }
]

function display_Data() {
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
                            <td>${employee.id}</td >
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>
                        </tr > `
    }
    document.getElementById('abc').innerHTML = rows
}


/*
<tr>
                <th>101</th>
                <th>Rahul Gandhi</th>
                <th>45000</th>
</tr>
*/