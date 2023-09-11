/************ Shallow cloning ************/
var existing = { a: 1, b: 2, c: 3 };
const { ...clone } = existing;
console.log(clone);

/************ Object.freeze ************/
var obj = {
    foo: 'foo',
    bar: [1, 2, 3],
    baz: {
        foo: 'nested-foo'
    }
};
Object.freeze(obj); //now cannot modify object
// Cannot add new properties
//obj.newProperty = true;


/************ Object cloning ************/
existing = { a: 1, b: { c: 2 } };
var copy = JSON.parse(JSON.stringify(existing));
existing.b.c = 3; // copy.b.c will not change

/*********** Itrating Objects ************/
var obj = { 0: 'a', 1: 'b', 2: 'c' };
Object.keys(obj).map(function (key) {
    console.log(key);
});

/************ Spread()/rest *************/
let obj = { a: 1 };
let obj2 = { ...obj, b: 2, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 };


/*********** Arrays are Objects ***********/
var anObject = {
    foo: 'bar',
    length: 'interesting',
    '0': 'zero!',
    '1': 'one!'
};
var anArray = ['zero.', 'one.'];
console.log(anArray[0], anObject[0]);           // outputs: zero. zero!
console.log(anArray[1], anObject[1]);           // outputs: one. one!
console.log(anArray.length, anObject.length);   // outputs: 2 interesting
console.log(anArray.foo, anObject.foo);         // outputs: undefined bar


/*********** Convert object's values to array ************/
var obj = {
    a: "hello",
    b: "this is",
    c: "javascript!",
};
var array = Object.keys(obj)
    .map(function (key) {
        return obj[key];
    });
console.log(array); // ["hello", "this is", "javascript!"]

/************* Read-Only property ***************/
var a = {};
Object.defineProperty(a, 'foo', { value: 'original', writable: false });
a.foo = 'new';
console.log(a.foo);

/************** Iterating over Object entries - Object.entries() ***************/
const obj = {
    one: 1,
    two: 2,
    three: 3
};
Object.entries(obj);
console.log(obj);

/************ Object.values() *************/
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']
