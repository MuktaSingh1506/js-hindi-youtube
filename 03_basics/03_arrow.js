/*
arrows is in ES6 in 2015
this keyword - referes to the current context
*/
//object
const user = {
    username:"him",
    price: 10,

    welcoomeMessage: function(){
        console.log(`${this.username} , wlm to website`)
    }
}
user.welcoomeMessage()
user.username = "min"
user.welcoomeMessage()

console.log(this) // {}
// // this refer to an empty obj as in global scope there is no obj refering to
//where as if same console.log(this) in the browers, returns the windows obj 
// as the js engine is in the brower referring to the window

function chai(){
    console.log(this)
}
chai() // now the this keyword has many values store/refering to
//when "this " is defined a function
/* output
 <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
 */
function code(){
    let username = "min"
    console.log(this.username)
}
code
code() // undefined
//this keyword is not usefull in the function 
//only used in the object 

//how function can be defined using arrow funciton
//remove the function keyword andthen add => arrow function
const chai_code = () => {
    let username = "min"
    console.log(this)
}
chai_code()//{} 
// // refer to the empty even when used with arrow funciton


//**** Arrow function**** */
// //basic
// const sum_two_num = (num1, num2)=> {
//     return num1+num2
// }
// console.log(sum_two_num(4,5))//9

//implict return
const sum_two_num = (num1, num2) => num1+num2// // remove the {} and return keyword
// const sum_two_num = (num1, num2) => (num1+num2) // // same above
console.log(sum_two_num(4,5))//9

//return an obj
// for obj use the {}, the ({key:value}) format is used
const return_a_obj = (num1, num2) => ({username:"minji"}) // // same above
console.log(return_a_obj(4,5))//{ username: 'minji' }
 
/********************************* */
const arr = [2,3,4,5]
// arr.forEach(fucniton () {}) //corect syntax
// arr.forEach(() => {})// arrow function // correct syntx
// arr.forEach(() => ()) // also correct to write a function
