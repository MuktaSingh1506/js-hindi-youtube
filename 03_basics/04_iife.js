/*
Immediately Invoked Function Expressionos(IIFE)
global scope variable sometime affect the 
local scope of the functions to avoid that 
IIFE -is used
*/
// // NORMAL FUNCTION
// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

// //(defination)(function call) - IIFE
//name IIFE
(function chai(){
    console.log(`DB CONNNECTED......`)
})();
//**problem if -- the invoke functino is nedd to be ended for a new fucntion to rum
//ended with the ';' to not get error
//UNNAME IIFE
(() => {
    console.log(`CONNECT..`)
})();

//how to take argruments in the function IIFE 
//Argument in iffe
((num) => {
    console.log(`CONNECT.. to ${num} DB`)
})(3)
