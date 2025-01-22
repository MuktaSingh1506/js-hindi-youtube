 /** conditional statement
  * code should run on condition
  * control flow or logic flow
  */
 if(false){
// cause condtion is false this code block isn ot executed
 }
 if(true /*condition*/){
// this code block will be excuted as condition is true
 }

// comparision
if(2==2){
    //
}
// or condtiton
const isUserloggedin = true
 if( isUserloggedin){
    //will excute this block of code
 }
/**the condtions in control statedmet
 * < ,> , <=,  >=,  == , !=, ===, !== //COMPARISON  operator
 * 3!=2 - ?true as 3 is not equal to 2 (negative checking)
 * = - assignmetnt operator
 * == - compare two operators
 * === - triple qual/ strict equal : checkss the opreators datatypes
 * 
 */
if( 2 == "2"){
    console.log("yes with ==")
}
if( 2 === "2"){
    console.log("yes ===")
}
if( "2" === "2"){
    console.log("yes with ===")
}

let temp = 98.0
if(temp === 40 ){
    console.log("less thean 50")
}else{
    console.log( " temp greater than 50")
}


// scope related 
const score = 200 
if(score > 100 ){
    /**the variable defined with in this {} 
     * with be used only within this scope 
     * var - keyword for varibale have global variable
     * insted use let ,const to declare the variable
     */
    const power = 'fly'
    console.log(`user power: ${power}`)
}
// console.log(`user power: ${power}`) // scope realated issue

//shorthand notation for if condtion
const balance = 1000
if( balance > 500) console.log("test");
/* this shorthand have inflicit scope meaning only one code line is written */


// NESTING condtion
const userLoggedin = true
const debitCard = true
if(userLoggedin && debitCard){
    // AND condition - both condition should be true
    console.log("allow shopping");
}
if(userLoggedin || debitCard){
    // OR condition - either of the condition should be true
    console.log("check for the cart items")
}