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