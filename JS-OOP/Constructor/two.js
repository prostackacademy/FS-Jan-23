class Account {
    acc_Id;
    acc_Name;
    acc_Bal = 0;
    min_Bal = 500;
    constructor(id, name, amount) {
        this.acc_Id = id
        this.acc_Name = name;
        this.acc_Bal = amount
    }
    open_Account() {
        console.log("Account opened successfully")
    }
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
    get_St() {
        console.log("Server Busy")
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
    withdrawl_Amount() {
        console.log("Insufficient Bal")
    }
    close_Account() {
        console.log("Close Account")
    }

}
let a1 = new Account(101, "Rahul", 1000)
let a2 = new Account(102, "Priyanka", 5000)
let a3 = new Account(103, "Sonia", 100)


console.log("Rahul Gandhi")
a1.open_Account()
a1.deposit_Amount(2000)
a1.get_St()
var bal = a1.get_Bal()
console.log("Account Holder:", a1.acc_Name, "Balance is:", bal)


console.log("Priynaka Gandhi")
a2.open_Account()
a2.deposit_Amount(6000)
a2.get_St()
var bal = a2.get_Bal()
console.log("Account Holder:", a2.acc_Name, "Balance is:", bal)


console.log("Sonia Gandhi")
a3.open_Account()
a3.deposit_Amount(60)
a3.get_St()
var bal = a3.get_Bal()
console.log("Account Holder:", a3.acc_Name, "Balance is:", bal)