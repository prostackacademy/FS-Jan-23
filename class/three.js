class Account {
    min_Bal = 500
    open_Accoount() {
        console.log("Account opened Successfully")
    }
    deposit_Amount(amount) {
        console.log("Account deposited:", amount)
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
a1.deposit_Amount(5001)