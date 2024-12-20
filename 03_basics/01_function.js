// Function - a block of code that can be run over and over again
// declare a funciton with a name :: sayMayName { //body of function}
function sayMyName(){
    console.log("lol no ")
}
sayMyName() // calling a function

function addTwoNumbers(number1, number2){// parameteres
    console.log(number1 + number2)
}
addTwoNumbers(1, 1)//arguments

function addNum(number1, number2){
    let res = number1 + number2
    return res
    // return number1 + number2
}
const result = addNum(2 ,2)
console.log("Result : " ,result)

function loginUserMessage(username = "sam"){//username = "sam"  gives the parameter  =sam if no username given
    if(!username){ //=== undefined is taken as flase
        console.log("please enter a username ")
        return
    }
    return `${username} logged in `
}
console.log(loginUserMessage("min")) // min logged in 
console.log(loginUserMessage("")) // logged in 
console.log(loginUserMessage()) //undefined logged in 

// a case when we dont know the how many parameters are there gonna be
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(100))
function calculateCartPrice( ...num1){ //rest operator in a function =- gives the values in the array formated data
     return num1
}
console.log(calculateCartPrice(100,400 ,500 )) //[ 100, 400, 500 ]// suppose more items where added
// use the rest /spread operator ... - the nameand funcitonality depends on the useage to the operator 

const user ={
    name : "mini",
    loggedIN : false
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.name} and logged in ${anyObj.loggedIN}`)
}
handleObject(user)//Username is miniand loggeddd in false
handleObject(
    {
        name : "sam",
        loggedIN : true
    }
)
const newArray = [200 , 300 , 400 ]
function retrunSecondValue(anArray){
    return anArray[1]
}
console.log(retrunSecondValue(newArray)) // 300
console.log(retrunSecondValue([3,5,6])) // firectly passing the a array as argument

