class Employee {
    eId;
    eName;
    constructor(id, name) {
        this.eId = id
        this.eName = name
        console.log("const -method execute automatically")
    }
    get_Emp_Details() {
        return "Employee Name:" + this.eName
    }

}
let e1 = new Employee(101, 'Rahul')
console.log(e1)
console.log(e1.get_Emp_Details())
console.log(e1.get_Emp_Details())
console.log(e1.get_Emp_Details())
console.log(e1.get_Emp_Details())
console.log(e1.get_Emp_Details())
console.log(e1.get_Emp_Details())