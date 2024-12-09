const name = "jane"
const repCount = 10
//battics syntax - string intercolation
console.log('Hello my name is ${name} and my rep count is ${repcount}')

// define varibale strng type usinf "new" keyword
const gameName = new String("jane_doe")
console.log(typeof gameName) // object with key:value pair

//string methods
console.log(gameName.length)
console.log(gameName.toUpperCase()) //all character to capital
console.log(gameName)

console.log(gameName.charAt(2))// find at index which character
console.log(gameName.indexOf("e")) // find a character at which index
console.log(gameName[5]) // acces characters in a string
console.log(gameName.__proto__) //syntax ..?

const new_string = gameName.substring(1,5)
console.log(new_string)
console.log(gameName)

const another_string = gameName.slice(1,5)
console.log(another_string)
console.log(gameName)

const _string = "    mini    moini     "
console.log(_string)
const trim_string = _string.trim()
console.log(trim_string)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://developermozilla.org//mini%20moni"
console.log(url.replace('%20','-'))

console.log(url.includes('under'))

const split_string = "mo-mini-moini-09"
console.log(split_string.split('-'))