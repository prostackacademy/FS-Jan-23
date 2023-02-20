var arr = [1, 2, 3, { "1": 101 }]
var total = 0
for (element of arr) {

    if (typeof (element) === 'number') {
        total = total + element
    }
    else {
        total = total + element['1']
    }
}
console.log(total)