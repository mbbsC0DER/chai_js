//**************************************STRING******************************** */

/*
String interpolation -> use backticks `` 
let str = new String("BINGO")  --> declares the string as an object of the class String
slice &substring me ending index nhi diya chalega par start index dena padega 

*/

let name = "Pratham"
let age = 20
console.log (`My name is ${name} with my age being ${age}`)
let str = new String("BINGO")
console.log (str.__proto__) //lists the methods to be used with the string object (works in console)

console.log (name.length) //7
console.log (name.toUpperCase()) //PRATHAM
val = console.log (name.charAt(7)) 
console.log (typeof val) //undf

console.log (name.indexOf("m")) //6
const new_name = name.substring(2,5) // substing --> doesnt supp neg index
console.log (new_name) //ath

const new_name_2 = name.slice(-4) // slice --> supports negative index 
console.log(new_name_2) //tham

const new_name_3 = "       prathma"
console.log(new_name_3)
console.log(new_name_3.trim()) //newline ya whitespace ko hata deta hai

console.log(new_name_3.replace("a","@").trimStart()) // replaces characters

console.log (new_name_3.includes("m")) //in the string or not 

console.log (new_name_3.trim().split("").reverse().join("")) //to reverse a string


//****************************NUMBER*********************************** */

const score = 100.3249235
console.log (score.toString().length) //string ke saare properties use kar sakte
console.log (score.toFixed(4)) //after decimal bas 4 values hongi

const float = 25.9834347387
console.log (float.toPrecision(2)) // start se shuru hoke bas 2 number

const zeros = 99999999999
console.log (zeros.toLocaleString("en-IN")) //99,99,99,99,999

//we can check max_value , min_value , max_safe_int value and min_safe_int value in console

/***************************MATHS***************************************** */

console.log(Math) //works in console
console.log(Math.abs(-0)) //0
console.log(Math.round(4.8)) //5
console.log(Math.floor(4.7)) //4
console.log(Math.ceil(4.2)) //5

console.log(Math.min(3,5,4,5)) //3
console.log(Math.max(3,4,5,6,7))//7

console.log (Math.floor(Math.random()*10))

//simple formula for getting a random number between a range 
const min = 99
const max = 1000

console.log(Math.floor(Math.random() * (max - min + 1) + min))

/*************************************DATE****************************************** */

//epoch = JAN 1ST 1970 

let my_date = new Date()
console.log(my_date.toString()) //Sat Sep 27 2025 02:56:32 GMT+0000 (Coordinated Universal Time)

console.log(my_date.toLocaleString()) //9/27/2025, 2:57:51 AM
console.log(my_date.toLocaleDateString()) //9/27/2025
console.log (my_date.toDateString()) //Sat Sep 27 2025
console.log(my_date.toJSON()) //2025-09-27T03:00:44.047Z
console.log(my_date.toISOString()) //same as above

let my_din = new Date(2025 , 11 , 30 , 5 , 7) //months start from 0
console.log(my_din.toDateString()) //Tue Dec 30 2025
console.log (my_din.toLocaleTimeString()) //5:07:00 AM

let my_divas = new Date("02-25-2025")
console.log(my_divas.toDateString()) //Tue Feb 25 2025

let my_timestamp = Date.now()
console.log(my_timestamp) //can be used for time sensitive polls
console.log(my_divas.getTime())

console.log(my_date.getFullYear()) //2025

//to get todays date
console.log(my_date.toLocaleString("en-IN" , {timeZone : "Asia/Kolkata"}))
