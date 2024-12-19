/*
the basis on which dataTypes are made are 
-how the date is stored in the memory -- primitive
-and how the data is accessed from the memory -- non primitive
JS has two types of dataTypes
1> primitive (7 categories)
    call by value means a copy of that value not he original value
    # 7 types: strings, Number, Boolean, null, undefined, Symbol, BigInt
    symbol is used to give an unique id to a data ... 
    BigInt is used to store bigger number values ...

2> non-primitive (refernce types)
    also called the reference types as the we can get the
    direct memory address/reference where the data is stored in the memory
     #types:  Arrays, Objects, functions
     to master thr JS learn the object and the browers events in javascript

 js is statically or dynamically typed ?
 ==JavaScript is a dynamically typed language. 
 This means that variable types are determined at runtime, 
 and you do not need to explicitly declare the 
 type of a variable before using it.
 You can assign different types of values to a variable
 during its lifetime.


 Q. typescript? in js -
 =const score:number = 100
*/
//************ primitive ************ */
const score = 100
const scorevalue =  100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

//symbol to give a unqiue id, 
//the datatype will be symbol
const id = Symbol("04")
const anotherID = Symbol("04")
console.log(id === anotherID)
// even if given same values the symbols will give each a unique ID
//************ REFERENCE TYPE ... NON- primitive ************ */
// ARRAY
const heros = ["spiderman", "blackwidow","scarlet witch"]
//refernce type

//OBJECT
let newObj ={
    name: "mini",
    age: 22,
}
//key : value //pair in object 

//FUNCTION 
//VARIBALE defined function
const my_function = function(){
    console.log("hey")
} 
console.log(my_function)
console.log(typeof my_function) //data type function Object
/*
type of operator

console.log(typeof( ))

 undefined => undefined
 null => object
 Numebr => number
 Boolean =>boolean
 String => string
 Object => object
 ...

##Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


