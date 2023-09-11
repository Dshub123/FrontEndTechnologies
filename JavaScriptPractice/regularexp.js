/********* Regular expressions **********/
//1) Creating a RegExp Object
var re = new RegExp(".*");
var re = new RegExp(".*", "gmi"); //with flags

//2) Static initialization
var re = /.*/;
//With flags:
var re = /.*/gmi;
//With a backslash: (this should not be escaped because the regex is specified in literal)
var re = /\w*/;

/****** RegExp Flags *******/
/*
g - Global. Finds all matches instead of stopping after the first.
i - Ignore case. /[a-z]/i is equivalent to /[a-zA-Z]/.
m - Multiline. ^ and $ match the beginning and end of each line respectively treating \n and \r as delimiters instead
of simply the beginning and end of the entire string.
*/

/******* Check if string contains pattern using .test() ********/
var re = /[a-z]+/;
if (re.test("foo")) {
    console.log("Match exists.");
}

//Matching With .exec()
var re = /([0-9]+)[a-z]+/;
var match = re.exec("foo123bar");
console.log(match);

var re = /a/g;
var result;
while ((result = re.exec('barbatbaz')) !== null) {
    console.log("found '" + result[0] + "', next exec starts at index '" + re.lastIndex + "'");
}

//match with RegExp
console.log("string".match(/[i-n]+/));
console.log("string".match(/(r)[i-n]+/));

//replace wirh RegExp
console.log("string".replace(/[i-n]+/, "foo"));

//split with RegExp
console.log("stringstring".split(/[i-n]+/));

//Search with RegExp
console.log("string".search(/[i-n]+/));
console.log("string".search(/[o-q]+/));
