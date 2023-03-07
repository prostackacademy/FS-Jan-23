let employees = [{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 },
{ id: 103, name: "Priyanka Gandhi", salary: 65000 },
{ id: 104, name: "Modi", salary: 75000 }
]

function display_Data() {
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
            <td> 101</td >
                <td>Rahul Gandhi</td>
                <td>45000</td>
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