/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// date - object
-dataType - object
-calculated from an arbitrary date  January 1, 1970 
-represents milliseconds , easy to compare date using miliseconds ..?

*/
let today = new Date()
console.log(today) //2024-12-11T08:27:13.896Z
console.log(today.toDateString()) // Wed Dec 11 2024
console.log(today.toLocaleString()) // 12/11/2024, 8:28:28 AM
console.log(today.toLocaleDateString()) // 12/11/2024 //date format-MM/DD/YYYY

console.log(typeof today) //object -- interview Question -- 

const newDate =  new Date(2024, 0, 23) //months counting starts from 0-11,.0-jan
console.log(newDate.toDateString()) //Tue Jan 23 2024
console.log(newDate.toLocaleString())// 1/23/2024, 12:00:00 AM

const newDate_w_time =  new Date(2024, 0, 23, 5, 3)//input time after Year,month,date,hour,minutes
console.log(newDate_w_time.toLocaleString())// 1/23/2024, 5:03:00 AM

//YYYY/MM/DD format
const date_format = new Date("2025-05-10")// input YEAR,DATE,MONTH
console.log(date_format.toLocaleString())//5/10/2025, 12:00:00 AM//YYYY/MM/DD format
// MM/DD/YYYY format
const date_format2 = new Date("03-10-2025")// input DATE,MONTH,YEAR
console.log(date_format2.toLocaleString())//5/10/2025, 12:00:00 AM// MM/DD/YYYY format

//TIMESTAMPS- for quizes ,polls, track time, fastest submittion
let myTimeStamp = Date.now()
console.log(myTimeStamp)//1733907104925 -milisecond calculated from Jan 1,1970 

//compare date - for like hotel reservation app
console.log(date_format2.getTime())//1741564800000
console.log(myTimeStamp)            //1733907623374

//to get a some value to compare the milliseconds
console.log(Math.floor(Date.now()/1000)) //1733907623
console.log(Math.floor(myTimeStamp /1000))//1733907623

// const newDate =  new Date(2024, 0, 23) //months counting starts from 0-11,.0-jan
console.log(newDate.toLocaleString())// 1/23/2024, 12:00:00 AM
console.log(newDate.toLocaleString('default',{
    weekday: "long",
})) // customize the method .toLocalString