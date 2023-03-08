class Account {
    min_Bal = 500
    open_Accoount() {
        console.log("Account opened Successfully")
    }
    deposit_Amount() {
        console.log("Account deposited safely")
    }
    get_Bal() {
        console.log("Server Down")
    }
    get_St() {
        console.log("charges are applicable")
    }
    withdraw_Amount() {
        console.log("Insufficient Bal")
    }
    close_Account() {
        console.log("Need to pay!")
    }
}
let a1 = new Account()
//with help of object we can access class members
a1.open_Accoount()
a1.deposit_Amount()
a1.get_Bal()
a1.get_St()
a1.withdraw_Amount()
a1.close_Account()