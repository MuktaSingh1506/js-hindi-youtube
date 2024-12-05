let score = undefined //"33" 

console.log(typeof score)
console.log(typeof(score)) // typeof => called as function

let valueInNumber = Number(score) //Number() used for conversion to number

console.log(typeof valueInNumber) //  score = undefined, type=> number but data in valueInNumber is not converted to a number
console.log(valueInNumber)// score = undefined, valueInNumber=> NaN(Not a Number)


//"33" => 33 
// "33abc" => Nan
// trur => 1 , false => 0

let isLoggedIn = "hi"
let boolanIsLoggedin = Boolean(isLoggedIn)
console.log(boolanIsLoggedin)