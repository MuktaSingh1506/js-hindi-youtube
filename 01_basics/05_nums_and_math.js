 const score = 400 //defined a variable with a number value
 console.log(score)

// samedefined a variable with 'new' keyword, datatype number
const balance = new Number(100.00) 
 console.log(balance)

//convert a number to string datatype 
console.log(balance.toString()) 
// then we can use string methods/functions on the variable like :-
console.log(balance.toString().length)
// length function to find how many digits a number is.

//using for precision value , nujmbers after the decimal,commonly used for Ecommerce website
console.log(balance.toFixed(2)) 

const otherNum = 123.4966
console.log(otherNum.toPrecision(3))
//precision means the numbers before the decimal 
//and the rounding off the numbers 
//after the decimal if numbers after is >= 5

const hunders = 1000000
console.log(hunders.toLocaleString())//1,000,000 // 'en-IN' - 10,00,000
//toLocaleString - used to show numbers in ten hundereds thousands format
// 'en-IN' - is the indian format to read a number or show a numebr

//min value and max value functions


//*******************************math**************************/
//  Maths library in js 
console.log(Math) // Maths -libray used // M- capital

// methods in Math
console.log(Math.abs(-56)) // sign change // -ve values to +ve signs
console.log(Math.round(45.595)) // rounds off the number after decimal if >5
console.log(Math.ceil(4.1)) // round off to the greater value before decimal
console.log(Math.floor(4.9))// rouned off to floor value even if after decimal digits >=5
console.log(Math.min(5,9,6,3)) // gives thr smallest value
console.log(Math.max(5,9,6,3)) // gives thr largest value

console.log(Math.random()) // random - only gives 0 or 1 - a decimal number
// to have a range of number generated from random function
console.log((Math.random()*10 )) // range 0-10
console.log((Math.random()*10) + 1) // range 1-10
console.log((Math.random()*10) + 1) // range 1-10
console.log(Math.floor(Math.random()*10) + 1) // range 1-10 with .floor method


//define min and max
const min = 10;
const max= 20;
console.log(Math.floor((Math.random() * (max -min +1)) + min))
/*
// .random() we get only 0 or 1 in decimal format
so to get numbers between a range we would define a min value and a max value 
min shows atleast this number
max shows upto this number
(max-min + 1) = this sets the range and then +1 to get number>0 
Math.random() * (max -min +1) = multiply the range then
(Math.random() * (max -min +1)) + min) = +min to get atleast number to min not below it
Math.floor((Math.random() * (max -min +1)) + min) == .floor method to get only number not decimal values from .random function
*/