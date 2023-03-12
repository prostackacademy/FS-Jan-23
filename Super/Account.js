class Account {

}

class Savings_Account extends Account {
    constructor() {
        super()
        console.log("Savings Account Const")
    }
}

let s1 = new Savings_Account()

console.log(s1)