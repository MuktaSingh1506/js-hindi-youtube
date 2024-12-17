const consonants = ["b","c","d","f","..."]
const vowels = ["a","e","i","o","u"]
/*
consonants.push(vowels)
console.log(consonants) //[ 'b', 'c', 'd', 'f', '...', [ 'a', 'e', 'i', 'o', 'u' ] ]
console.log(consonants[5][0]) // a
*/
const alphabets = consonants.concat(vowels)
console.log(alphabets)
/*
[
  'b', 'c',   'd',
  'f', '...', 'a',
  'e', 'i',   'o',
  'u'
]
 */
//spread operator ...
const all_alphabets = [...consonants, ...vowels]
console.log(all_alphabets)
/*
[
  'b', 'c',   'd',
  'f', '...', 'a',
  'e', 'i',   'o',
  'u'
]*/
console.log(...consonants) //b c d f ...

const another_arr = [1,2,3,4,[4,5,6,7],8,9,[10,[11,12]],13]
//const full_arr = another_arr.flat() //[ 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, [ 11, 12 ], 13 ]
const full_arr = another_arr.flat(Infinity)
/*
[
   1,  2, 3, 4,  4,  5,
   6,  7, 8, 9, 10, 11,
  12, 13
]
 */
console.log(full_arr)

//data scrapping -- need data in array format
//check if array
console.log(Array.isArray("mini")) // false
//convert to array
console.log(Array.from("mini"))//[ 'm', 'i', 'n', 'i' ]
console.log(Array.from({name:"mini"}))//empty array//interview intersting***********

let rollno1 = 101
let rollno3 = 103
let rollno2= 102
console.log(Array.of(rollno1,rollno2, rollno3)) //[ 101, 102, 103 ]