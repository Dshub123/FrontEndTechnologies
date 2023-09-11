/********** Strings in JS ***********/
var hello = "Hello";
var world = 'world';
var helloW = `Hello World`;

//Using String() function
var intString = String(32);          // "32"
var booleanString = String(true);    // "true"
var nullString = String(null);       // "null"

//toString() method to convert number, boolean
var intString = (5232).toString(); // "5232"
var booleanString = (false).toString(); // "false"
var objString = ({}).toString(); // "[object Object]"

//create string object
var objectString = new String("Yes, I am a String object");
console.log(typeof objectString);               //"object"
console.log(typeof objectString.valueOf());     //"string"

//String Concat in jS
var foo = "Foo";
var bar = "Bar";
console.log(foo + bar); // => "FooBar"
console.log(foo + " " + bar); // => "Foo Bar"
foo.concat(bar) // => "FooBar"
"a".concat("b", " ", "d") // => "ab d"

//Use of backtick `` to write a string
var place = `World`;
var greet = `Hello ${place}!`
console.log(greet); // "Hello World!"

//Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString('string'); // "gnirts"

//Compair two strings Lexicographically
//1) localCompair() method
var a = "hello";
var b = "world";
console.log(a.localeCompare(b)); // -1

//Access character at index in string
var string = "Hello, World!";
console.log(string.charAt(4)); // "o"

//Trim whitespace
// Stage 1 proposal
console.log(" this is me ".trimStart());     // "this is me "
console.log(" this is me ".trimEnd());       // " this is me"

// Non-standard methods, but currently implemented by most engines
" this is me ".trimLeft();      // "this is me "
" this is me ".trimRight();     // " this is me"

//Splitting a string into an array
var s = "one, two, three, four, five"
s.split(", ");                 // ["one", "two", "three", "four", "five"]

//Joining a array into a string
s.split(", ").join("--"); // "one--two--three--four--five"

//Unicode of a char in the string
var s = "some ∆≈ƒ unicode ¡™£¢¢¢";
console.log(s.charCodeAt(5)); // 8710

//Substrings with slice
var s = "0123456789abcdefg";
s.slice(0, 5);      // "01234"
s.slice(5, 6);      // "5"
s.slice(10); // "abcdefg"

//String Find and Replace Functions
//1)indexOf() returns first occurance
var string = "Hello, World!";
console.log(string.indexOf("o")); // 4
console.log(string.indexOf("foo")); // -1

//2)lastIndexOf() returns first occurance
var string = "Hello, World!";
console.log(string.lastIndexOf("o")); // 8
console.log(string.lastIndexOf("foo")); // -1

//Includes method
var string = "Hello, World!";
console.log(string.includes("Hello")); // true
console.log(string.includes("foo")); // false

//replace method
var string = "Hello, World!";
string = string.replace("Hello", "Bye");
console.log(string); // "Bye, World!"
string = string.replace(/W.{3}d/g, "Universe");
console.log(string); // "Bye, Universe!"

//Finding index of substring inside a string
console.log("harr dee harr dee harr".indexOf("dee", 10)); // 14

//String UpperCase
console.log('qwerty'.toUpperCase()); // 'QWERTY

//String Lowercase
console.log('QWERTY'.toLowerCase()); // 'qwerty'

//Repeat a String
console.log("abc".repeat(3));; // Returns "abcabcabc"
console.log("abc".repeat(0));; // Returns ""
console.log("abc".repeat(-1));; // Throws a RangeError