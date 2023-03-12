class Account {
    acc_Id;
    acc_Name;
    constructor(id, name) {
        this.acc_Id = id;
        this.acc_Name = name;
    }
}
class SA extends Account {
    acc_Amount = 0
    constructor(id, name, amount) {
        super(id, name)
        this.acc_Amount = amount
    }
}
let s1 = new SA(101, "Rahul", 45000)
let s2 = new SA(102, "Sonia", 15000)
console.log(s1)
console.log(s2)