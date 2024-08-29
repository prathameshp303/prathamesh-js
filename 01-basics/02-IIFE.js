//named IIFE

(function chai(){

    console.log("order chai")

})();

// here ()() - first () is where we write the defination of the function and the second () is the execution call
// global scopes polution problem is solved in IIFE

// arrow function in IIFE

(() => {

    console.log("order chai2")

})();

//to pass any argumensts in a IIFE function:

((name) => {

    console.log(`order ${name}`)

})("prathamesh")