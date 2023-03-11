class Parent {
    m1() {
        console.log("Parent class - m1 method")
    }
}
class Child extends Parent {

}
class GrandChild extends Child {

}

let obj = new GrandChild()
obj.m1()