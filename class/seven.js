class Account {
    min_Bal = 500
    acc_Bal = 0
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
}
let a1 = new Account()
a1.deposit_Amount(5000)
a1.deposit_Amount(100)
a1.deposit_Amount(6000)

let a2 = new Account()

console.log(a1)
console.log(a2)