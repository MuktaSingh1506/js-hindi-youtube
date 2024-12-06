// let score = false//true//"33abc"//undefined //"33" 

// console.log(typeof score)
// console.log(typeof(score)) // typeof => called as function

// let valueInNumber = Number(score) //Number() used for conversion to number

// console.log(typeof valueInNumber) //  score = undefined, type=> number but data in valueInNumber is not converted to a number
// console.log(valueInNumber)// score = undefined, valueInNumber=> NaN(Not a Number)


// //"33" => 33 
// // "33abc", undefined, a string that cant be converted to a number=> Nan
// // trur => 1 , false => 0

// let isLoggedIn ="hey78"// 0//1//"hi"
// let boolanIsLoggedin = Boolean(isLoggedIn)
// console.log(boolanIsLoggedin)
// //true =>1 , false => 0
// // "hey78", "hi" => true

// let someNumber =  33 
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)
// ************************OPERATIONS **********************************
let value = 3
let negvalue = -value
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "h1"
let str2 = "_moon"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2 )
// console.log(1 + "2" )
// console.log(1 + 2 )
// console.log(1 + 2 +2)
// console.log(1 + 2 +"2")
// console.log("1" + 2 +"2")
// console.log("1" + 2 + 2)
// // the above conversion is done according
// // the ECMA string guideline => Abstraction Operations=> Type conversion
// //https://tc39.es/ecma262/#sec-toprimitive

// console.log(+true) // // 1
// console.log(+"")// // 0

//**********prefix and postfix operators**********
// let gameCounter= 1
// // ++gameCounter // // 2
// let changeCount = gameCounter++ // // 1
// console.log(gameCounter) // //2
// console.log(changeCount)// //1
let cnt= 1
let prefixCnt = ++cnt // // 2
console.log(cnt) // //2
console.log(prefixCnt)// //2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// mdv doc on prefix and postfix 