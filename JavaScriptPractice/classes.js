/*********** Class Constructor ***********/

class MyClass {
    constructor(option) {
        console.log(`Creating instance using ${option} option.`);
        this.option = option;
    }
}
const foo = new MyClass('speedy');

/*********** Class Inheritance ************/
class SuperClass {
    constructor() {
        this.logger = console.log;
    }
    log() {
        this.logger(`Hello ${this.name}`);
    }
}
class SubClass extends SuperClass {
    constructor() {
        super();
        this.name = 'subclass';
    }
}
const subClass = new SubClass();
subClass.log(); // logs: "Hello subclass"

/*********** Static Methods *************/
class MyClass2 {
    static myStaticMethod() {
        return 'Hello';
    }
    static get myStaticProperty() {
        return 'Goodbye';
    }
}
console.log(MyClass2.myStaticMethod()); // logs: "Hello"
console.log(MyClass2.myStaticProperty); // logs: "Goodbye"