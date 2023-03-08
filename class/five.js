class Account {
    min_Bal = 500
    acc_Bal = 0;
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(amount) {
        console.log("object")
    }
    get_Bal() { }
}
let a1 = new Account()
a1.open_Account()
a1.deposit_Amount(5000)
a1.deposit_Amount(2000)
a1.get_Bal()