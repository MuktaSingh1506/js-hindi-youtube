/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//ARRAY
DEFINED - with [] brackets
> resizable 
> contain mix of different datatypes
> elements cant be accessed with indexing - cause not a associative array
 :: arr.0; nope :: years["2"] actual indexing
> zero-indexed
>** Shallow copies**-array-copy operations in js
--share the same references
https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
>>proto_type access in array 
*/
const arr = [2,3,4,5,6]
console.log(arr[0]) // 2
const mix_arr =[2, "f",4,"5","mini"]
console.log(mix_arr[4]) // mini
const cartoons =["mickey mouse", "shinchan","doremon"]
console.log(cartoons[1])

// Array methods
console.log(arr) //[ 2, 3, 4, 5, 6 ]
//push()
arr.push(9)
console.log(arr) //[ 2, 3, 4, 5, 6, 9 ]
//pop()
arr.pop()
console.log(arr) //[ 2, 3, 4, 5, 6 ]

//unShift
arr.unshift(9)
console.log(arr) //[ 9,2, 3, 4, 5, 6 ]
//shift
arr.shift()
console.log(arr) //[ 2, 3, 4, 5, 6]

//includes()
console.log(arr.includes(9)) // boolean value -- false
//indexof()
console.log(arr.indexOf(9)) //-1 as element not in array

//join()
const new_arr = arr.join()
console.log(new_arr) //2,3,4,5,6 - converted to string datatype
console.log(typeof new_arr) // string 

//slice , splice
console.log("a", arr) // print two values using one console.log
const slice_arr = arr.slice(1,3)
console.log(slice_arr) //[ 3, 4 ]
console.log("arr= ",arr) //[ 2, 3, 4, 5, 6]

console.log("b", arr) 
const splice_arr = arr.splice(1,3)
console.log(splice_arr)//[ 3, 4, 5 ]
console.log("arr= ",arr) //[ 2, 6]

/* slice vs splice 
- slice just shows the elements from the given indexing
- splice romeves the elements from the indexing in original array
-- slice no original array changes
-- splice change original array
*/
