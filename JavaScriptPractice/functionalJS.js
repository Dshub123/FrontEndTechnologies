/********** Higher-Order Functions **********/
function iAmCallbackFunction() {
    console.log("callback has been invoked");
}
function iAmJustFunction(callbackFn) {
    // do some stuff ...
    // invoke the callback function.
    callbackFn();
}
// invoke your higher-order function with a callback function.
iAmJustFunction(iAmCallbackFunction);