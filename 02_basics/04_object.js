/*
object defined as constructor or literals or singleton
*/
// Delcare Empty Object
const tinnUser = {}// non singleton object
const tinUser = new Object() // singleton object delcared using new keyword
console.log(tinUser) //{} // empty object
console.log(tinnUser) //{} // empty object

//key : values to obj
tinnUser.id = "123xyz"
tinnUser.name = "kim"
tinnUser.isloggedin = false
console.log(tinnUser)//{ id: '123xyz', name: 'kim', isloggedin: false }

const regularUser = {
    email:"kin@gmail.com",
    fullname:{
        userName:{
            using_name:"joon",   
        },
        firstname:"kim",
        lastname: "nam joon",
    }
}
// console.log(regularUser)
/*{
    email: 'kin@gmail.com',
    fullname: { firstname: 'kim', lastname: 'nam joon' }
  }*/
console.log(regularUser.fullname)//{ firstname: 'kim', lastname: 'nam joon' }
console.log(regularUser.fullname.lastname)//nam joon
console.log(regularUser.fullname.userName.using_name)// joon
console.log(regularUser.fullname?.userName.using_name)//optional chainng ? - used to check in the key is present or not , while using API 

const obj1 = {1 : "x", 2:"y"}
const obj2 = {4 : "x", 5:"y"}
//combine obj1 and obj2 into one object
const obj3 = {obj1,obj2}// doesnt combine
console.log(obj3)//{ obj1: { '1': 'x', '2': 'y' }, obj2: { '4': 'x', '5': 'y' } }
//**Object.assgin()- copy the target to source and returns a new obj
// const obj4= Object.assign(obj1, obj2)
const obj4= Object.assign({},obj1, obj2) // target {}, from the source obj1,obj2
console.log(obj4)//{ '1': 'x', '2': 'y', '4': 'x', '5': 'y' }

//spread operator for object combine
const obj5 = {...obj1,...obj2}
console.log(obj5)

// array Objects
const Array_obj = [
    {
        email:"kin@gmail.com",
        firstname:"kim",
        lastname: "nam joon",
    },
    {
        userName:"joon",   
    },
]
//access dat in array of objects
console.log(Array_obj[1].userName) //joon
console.log(Array_obj[0].firstname) //kim

console.log(tinnUser) //{ id: '123xyz', name: 'kim', isloggedin: false }
//Object.keys -get all the keys from the obj
console.log(Object.keys(tinnUser)) //[ 'id', 'name', 'isloggedin' ]
//gets the keys in the array format which can be looped or used later while working on database
//Object.values -get all the values from the obj
console.log(Object.values(tinnUser)) //[ '123xyz', 'kim', false ]
//same get the values on the array format

// Object.entries - obj key:value to an array of it own 
console.log(Object.entries(tinnUser))
//[ [ 'id', '123xyz' ], [ 'name', 'kim' ], [ 'isloggedin', false ] ]

console.log(tinnUser.hasOwnProperty('isloggedin')) //true

//*****destructure a object*********
const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstuctor: "hitesh"
}
// console.log(course.courseInstuctor) //hitesh
const {courseInstuctor}= course // accessing a key without writing the course.courseInstructor format
console.log(courseInstuctor)//hitesh
const {price: prc} = course // give a key a short name present in the obj
console.log(prc)

// // ***method used in obj*** destructure a obj
// const navbar = ({company}) => {
//     //conditions body of method
// }
// navbar(company = "hss")

//api = json format string keys : string values
// {
//     "name": "his";
//     "courseName": "js in hindi"
//     "price": "free"
// }

//in some api the data is given in array of obj = json format
// [
//     {},
//     {},
//     {},
// ]

// toots for understanding api data json format ::: json formator website
// api is always in json format