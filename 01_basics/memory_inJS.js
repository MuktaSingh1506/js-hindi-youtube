/*
Memory alloction in JS 
type of memory:
1>stack memory
2>heap memory

primitive datatypes use the STACK memory
NON-primitive datatypes use the HEAP memory

STACK - a copy of the data in the variable is used, 
change in copy of the value not the original data.
  
HEAP - refernce of where the data is stored in memory is used ,
means change in original value
*/
//stack - copy of data - no change to original data
let name = "john doe"
let name2 = name
name2 = "jane doe"
console.log(name)
console.log(name2)

//heap - refereance - original data change
let user_one = {
    email: "user_one@google.com",
    upi: "user_one@ybl"
}
let user_two = user_one
user_two.upi = "user_two@ybl"
console.log(user_two.upi)