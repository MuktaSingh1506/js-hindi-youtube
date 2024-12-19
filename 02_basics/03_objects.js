 /*
//  objects 
-can be defined as literals or as constuctor
-also has a concept of singleton 
    - means if you use a constuctor to make an object then its a singleton,
      and if a object is defined as literals then it cant be singleton
 */
// object defined as constructor
Object.create // connstructor method
    //   object literals
    const JSuser = {}//empty object 

// declare symbol datatype
const A_symbol = Symbol("key1")

    // objects = key :value pair
    const user_js = {
        name :"min",
        "full name": "min yoongi",
        [A_symbol] : "key1", // []is the syntax to add a symbol to the object,
        //  this refers to the above  defined symbol
        age: 20,
        location: "seoul",
        email:"mini@google.com",
        isLoggedIn: false,
        lastLoginDays:["Monday","saturday"]
    }

//access object 2 ways:-
//1>> user_js.lastLoginDays
console.log(user_js.lastLoginDays)//[ 'Monday', 'saturday' ]
//2>>user_js["lastLoginDays"]
console.log(user_js["lastLoginDays"])//[ 'Monday', 'saturday' ]
console.log(user_js["full name"]) // fullname in "" can only be acessed by this format

//access symbol within the object
console.log(typeof user_js[A_symbol])

console.log(user_js)
/*{
    name: 'min',
    'full name': 'min yoongi',
    age: 20,
    location: 'seoul',
    email: 'mini@google.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'saturday' ],
    [Symbol(key1)]: 'key1'
  } 
  */
// //freeze the object - obj data cant be modified
// user_js.name ="minyg"
// // Object.freeze(user_js)
// user_js.name ="minmin"
// console.log(user_js)

//add function to the object
user_js.greeting = function(){
    console.log("helo minmin")
}
// console.log(user_js.greeting) //[Function (anonymous)]
console.log(user_js.greeting()) //helo minmin// undefined
// function with refereing the obj, wiht help of "this"keyword
user_js.greetingName = function(){
    console.log(`helo user, ${this["full name"]}`)
}
console.log(user_js.greetingName()) //helo user, min yoongi// undefined
