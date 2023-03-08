class Bank {
    constructor() {
        console.log("Executing automatically - only once")
    }
    get_Bal() {
        console.log("Server Down")
    }
}
let b1 = new Bank()
b1.get_Bal()
b1.get_Bal()
b1.get_Bal()
b1.get_Bal()
