class Parent {
    m1() {
        console.log("Parent Class - m1 method")
    }
    m2() {
        console.log("Parent Class - m2 method")
    }
}
class Child extends Parent {
    m3() {
        console.log("Child Class m3 method")
    }
}
let p1 = new Parent() // we can access m1,m2 only
p1.m1()
p1.m2()

let c1 = new Child() //due to inheritance we can access m1,m2,m3
c1.m1()
c1.m2()
c1.m3()