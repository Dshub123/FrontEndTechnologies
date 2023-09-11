//Logging on Console in Javascript:

var thisVar = 'first value';
var thatVar = 'second value';
console.log("thisVar:", thisVar, "and thatVar:", thatVar);

//Placeholders
var greet = "Hello", who = "World";
console.log("%s, %s!", greet, who);

//Logging object in js
console.log({
    'Email': '',
    'Groups': {},
    'Id': 33,
    'IsHiddenInUI': false,
    'IsSiteAdmin': false,
    'LoginName': 'i:0#.w|virtualdomain\\user2',
    'PrincipalType': 1,
    'Title': 'user2'
});

//Manuplating DOM using js
document.getElementById("paragraph").textContent = "Hello, World";

/******* Alert in js ********/

//alert('hello, world');

/****** Promt in js *******/

var age = prompt("How old are you?");
console.log(age); // Prints the value inserted by the user

var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

/******** Types of veriables ********/

var myInteger = 12;                     // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLong = 9310141419482;             // 64-bit number (from -9,223,372,036,854,775,808 to 9, 223, 372,036, 854, 775, 807)
var myFloat = 5.5;                      // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22;        // 64-bit floating-point number
var myBoolean = true;                   // 1-bit true/false (0 or 1)
var myBoolean2 = false;
var myNotANumber = NaN;
var NaN_Example = 0 / 0;                // NaN: Division by Zero is not possible
var notDefined;                         // undefined: we didn't define it to anything yet
var randonNo;
//console.log(randonNo);// undefined
var myNull = null;                      // null


/******** Arrays in js ********/
var favoriteFruits = ["apple", "orange", "strawberry"];
var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
var employees = ["Billy", "Bob", "Joe"];
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var randomVariables = [2, "any type works", undefined, null, true, 2.51];
var myArray = ["zero", "one", "two"];
console.log(myArray);
elementNumber = 1;
console.log(myArray[elementNumber]); //one

/******** Objects in JS *********/
myObject = {};
john = { firstname: "John", lastname: "Doe", fullname: "John Doe" };
billy = {
    firstname: "Billy",
    lastname: undefined,
    fullname: "Billy"
};
console.log(john.fullname); // John Doe
console.log(billy.firstname); // Billy

/********* Testing for NaN using isNaN() *********/

isNaN(NaN); // true
isNaN(1); // false: 1 is a number
isNaN(-2e-4); // false: -2e-4 is a number (-0.0002) in scientific notation
isNaN(Infinity); // false: Infinity is a number
isNaN(true); // false: converted to 1, which is a number
isNaN(false); // false: converted to 0, which is a number
isNaN(null); // false: converted to 0, which is a number
isNaN(""); // false: converted to 0, which is a number
isNaN(" "); // false: converted to 0, which is a number
isNaN("45.3"); // false: string representing a number, converted to 45.3
isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3
isNaN("Infinity"); // false: string representing a number, converted to Infinity
isNaN(new Date); // false: Date object, converted to milliseconds since epoch
isNaN("10$"); // true : conversion fails, the dollar sign is not a digit
isNaN("hello"); // true : conversion fails, no digits at all
isNaN(undefined); // true : converted to NaN
isNaN(); // true : converted to NaN (implicitly undefined)
isNaN(function () { }); // true : conversion fails
isNaN({}); // true : conversion fails
isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number

/************* undefined and null *************/
typeof undefined === 'undefined'
typeof null === 'object'


/********** Datatypes in JavaScript **********/
console.log(typeof "String");            //string
console.log(typeof Date("2011,01,01"));  //string
console.log(typeof 42);                  //number
console.log(typeof true);                //boolean
console.log(typeof {});                  //Object 
console.log(typeof []);                  //Object
console.log(typeof null);                //Object
console.log(typeof /aaa/);               //Object
console.log(typeof Error());             //Object
console.log(typeof function () { });     //function
var var1;
console.log(typeof var1);                //undefined

