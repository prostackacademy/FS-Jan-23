class Account {
    min_Bal = 500
    acc_Bal = 0
    open_Account() { }
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal() {
        let bal = this.acc_Bal - this.min_Bal
        return bal
    }
}
let a1 = new Account()
a1.deposit_Amount(5000)
a1.deposit_Amount(100)
a1.deposit_Amount(6000)
console.log(a1.get_Bal())


console.log(a1)
