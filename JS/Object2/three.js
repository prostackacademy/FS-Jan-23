let product = {
    p_Id: 'P101',
    name: 'Iphone 12s',
    get_Details: function () {
        console.log("Iphone are best")
    }
}

console.log(product.p_Id) //P101
console.log(product.color) //undefined

product.get_Details()
product.usage()