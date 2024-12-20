//scopes of let , const and var
// local scope and global scope
var c = 200
if(true){
    let a = 200
     const b =30
     var c = 2
}
// console.log(a)
// console.log(b)
console.log(c)//2


// node -- browers js difference

// ****nested scope***
function one(){
    const name = "mini"

    function two(){
        const website = "youtube"
        console.log(name)//mini
    }
    two()
    // console.log(website) //error
}
one()


// **if else case** scope 
if(true){
    const username = "errors"
    if(username == "errors"){
        const website = " ytube"
        console.log(username + website)
    }

    // console.log(website)// errors
}
//*************inserting ********** */
function addOne(num){
    return num +1
}
addOne(5)

//an expresssion when a varibale holds a function
//this is called a hosting in advance lecture
const addTwo = function(num){
    return num +2
}