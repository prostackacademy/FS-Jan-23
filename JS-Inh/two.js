class Parent {
    m1() {
        console.log("Parent - m1 method")
    }
}
class Child extends Parent {
   /*  m1() {
        console.log("Child - m1 method")
    } */
}

let c1 = new Child()
c1.m1()