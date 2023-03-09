class Account {
    get_Acc_Details() {
        console.log("Account Class - Detaisl")
    }
}

class Savings_Account extends Account {
    get_Savings_Acc_Details() {
        console.log("Savings Account Class - Details")
    }
}

let sa1 = new Savings_Account()
sa1.get_Savings_Acc_Details()
sa1.get_Acc_Details()