
/******** Converting Array-like Objects to Arrays ********/
//JavaScript has "Array-like Objects", which are Object representations of Arrays with a length property. For example:

var realArray = ['a', 'b', 'c'];
var arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
console.log(realArray);
console.log(arrayLike);

//Convert Array-like Objects to Arrays in ES6
const arrayLike2 = {
    0: 'Value 0',
    1: 'Value 1',
    length: 2
};
//arrayLike.forEach(value => {/* Do something */ }); // Errors
//const realArray2 = Array.from(arrayLike2);
//realArray2.forEach(value => {/* Do something */ }); // Works

//2. for...of:

/* var realArray3 = [];
for (const element of arrayLike) {
    realArray3.append(element);
}
console.log(realArray3); */

//3. Spread operator:

//var reala = [...arrayLike2];
//console.log(reala);

/************* Reducing values *************/
//1) Array Sum
let res = [1, 2, 3, 4].reduce(function (a, b) {
    return a + b;
});
console.log(res); //10

res = [2].reduce(function (a, b) {
    console.log(a, b); // prints: 1 2
    return a + b;
}, 1);
console.log(res); //3

//Flatten Array of Objects
var array = [{
    key: 'one',
    value: 1
}, {
    key: 'two',
    value: 2
}, {
    key: 'three',
    value: 3
}];
res = array.reduce(function (obj, current) {
    obj[current.key] = current.value;
    return obj;
}, {});
console.log(res);

//Version ES7
res = array.reduce((obj, current) => ({ ...obj, [current.key]: current.value }), {});
console.log(res);

/********* Map fuction in Arrays *********/
//Version ES6
let result = ['one', 'two', 'three', 'four'].map(value => value.length);
console.log(result);

/********* Filtering Object Arrays *********/
//The filter() method accepts a test function, and returns a new array containing only the elements of the original
var numbers = [5, 32, 43, 4];
let odd = numbers.filter(n => n % 2 !== 0);
console.log(odd);

//for array of objects:
var people = [{
    id: 1,
    name: "John",
    age: 28
}, {
    id: 2,
    name: "Jane",
    age: 31
}, {
    id: 3,
    name: "Peter",
    age: 55
}];

var young = people.filter(function (person) {
    return person.age < 35;
});
console.log(young);

/********* Sorting Arrays *********/
//String sorting by length (longest first)

result = ["zebras", "dogs", "elephants", "penguins"].sort(function (a, b) {
    return b.length - a.length;
});
console.log(result);

//Numerical sorting
[100, 1000, 10, 10000, 1].sort(function (a, b) {
    return a - b;
});


/*********** Destructuring an array ***********/
const triangle = [3, 4, 5];
const [length, height, hypotenuse] = triangle;
console.log(length + ", " + height + ", " + hypotenuse);

//elemets can be skipped
const [, b, , c] = [1, 2, 3, 4];
console.log(b, c); // → 2, 4

/********** Removing duplicate elements **********/
var uniqueArray = ['a', 1, 'a', 2, '1', 1].filter(function (value, index, self) {
    return self.indexOf(value) === index;
});
console.log(uniqueArray);

uniqueArray = [... new Set(['a', 1, 'a', 2, '1', 1])];
console.log(uniqueArray);

/********** Reversing arrays **********/
res = [1, 2, 3, 4].reverse();
console.log(res);

/********** Shallow cloning an array **********/
arrayToClone = [1, 2, 3, 4, 5];
clone1 = Array.from(arrayToClone);
clone2 = Array.of(...arrayToClone);
clone3 = [...arrayToClone] // the shortest way
console.log(clone1);

/********** Concatenating two arrays **********/
var array1 = [1, 2];
var array2 = [3, 4, 5];

var array3 = [...array1, ...array2]
console.log(array3);

/********** Merge two array as key value pair **********/
var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydney", "25"];
result = rows.reduce(function (result, field, index) {
    result[columns[index]] = field;
    return result;
}, {})
console.log(result);


/**********  Searching an Array **********/
people = [
    { name: "bob" },
    { name: "john" }
];
let bob = people.find(person => person.name === "bob");
console.log(bob);

/********** Convert a String to an Array **********/
var strArray = "StackOverflow".split("");
console.log(strArray);

strArray = [..."sky is blue"];
console.log(strArray);

/********** Removing items from an array **********/
//1) shift();
var array = [1, 2, 3, 4];
array.shift();
console.log(array);

//2) Splice();
array.splice(1, 2);
console.log(array);

/********** Finding the minimum or maximum element **********/
var myArray = [1, 2, 3, 4, 99, 20];
var maxValue = Math.max(...myArray); // 99
var minValue = Math.min(...myArray); // 1


/*********** Joining array elements in a string ***********/
console.log(["Hello", " ", "world"].join("")); // "Hello world"
console.log([1, 800, 555, 1234].join("-")); // "1-800-555-1234"

/********** Append / Prepend items to Array **********/
//Use .unshift to add one or more items in the beginning of an array
array = [3, 4, 5, 6];
array.unshift(1, 2);
console.log(array);

//Further .push is used to add items after the last currently existent item.
array = [1, 2, 3];
array.push(4, 5, 6);
console.log(array);