// truthy values ??

const userEmail = "hat@ai"
const anotherEmail = ""
const anotherEmail_arry = []

if(anotherEmail_arry){
    console.log("got user email")
}else{
    console.log("dont have a email")
}
//in above case we dont have a condition
// we used the variable as a conditon
//if the variable have a value its considered TRUE
//if variable is empty ARRAY - true 
// if variable is empty STRING - False
//this is called truthy-falsy values

//falsy value
/* false, 0 , -0 (for interview) , BigIn 0n, "", null,
undefined , Nan */

//TRUTHy value
/* "0" , 'false' , " ", anything as string is truthy value
[], {}, function(){} - the empty function
 */

//to check an array if its empty
if(anotherEmail_arry.length === 0){
    //if array is a integer then .lenght is used to check 
    //if itsempty or not
    console.log("array is empty");
}


// check object is emty in condtions
const emtyobj = {}
if(Object.keys(emtyobj).length ===0 ){
    //we are checking the key 
    // so .keys will give us key in an array format
    // then use .lenght of array to check if its empty
    console.log("object is empty");
}


/*inetview question or competitive programming
false == 0 - true
false == '' - true
0 == '' - true
 */

//logical operator


//NUllish Coalescing operator (??): null undefined
let val1;
val1 = 5 ?? 10
console.log(val1)
 //?? means there is two values for a variable
//sometimes for example - the values from the database 
//can be two different values for some variable 
//this operator is usefull for this case-senerio
let val2 = null ?? 10
console.log(val2)
// so basically this operator does 
// a safety check for null opperator
// if there is a code that wont excuted for a null value
// or maybe a null is needed , this operator is designed for this purpose
// a complex condition is ahead in code 

let val3 = undefined ?? 15
console.log(val3)
//this operator is only for the null and undefined
val3 = null ?? 3 ?? 2
console.log(val3)
//the first value after null will be asigned
//this is used from erroe handling 
//or assign what values if an error is there


//TERNERAY OPERATOR
// CONDITON ? TRUE : FALSE 
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("more than 80") : console.log("less than 80");