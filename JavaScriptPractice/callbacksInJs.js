/***********  Callbacks **********/
function foo(array, callback) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
        sum += array[i];
    }
    return sum;
}

//Continuation (synchronous and asynchronous)

function doSomething(then) {
    console.log('Doing something');
    then();
}
// Do something, then execute callback to log 'done'
doSomething(function () {
    console.log('Done');
});

//What is a callback?
let res = [1, 2, 3].map(function double(x) {
    return 2 * x;
});
console.log(res);

/**
 * In the above example, the function double is a callback for the function map because:
1. The function double is given to the function map by the caller.
2. The function map needs to call the function double zero or more times in order to do its job.
Thus, the function map is essentially returning control back to the caller every time it calls the function double.
Hence, the name “callback”.
 */


//Using arraow function:----
[1, 2, 3, 4, 5].forEach(x => console.log(x));

//Error handling and control-flow branching
const expected = true;
function compare(actual, success, failure) {
    if (actual === expected) {
        success();
    } else {
        failure();
    }
}
function onSuccess() {
    console.log('Value was expected');
}
function onFailure() {
    console.log('Value was unexpected/exceptional');
}
compare(true, onSuccess, onFailure);
compare(false, onSuccess, onFailure);
// Outputs:
// "Value was expected"
// "Value was unexpected/exceptional"