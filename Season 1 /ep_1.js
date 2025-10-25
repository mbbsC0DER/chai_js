/*
ecma scripts --> js ke docs 

let and const use kar sakte 
var use karna avoid karna chahiye (Kyuki var scope nhi samjhta ...)
let me ham empty variable bhi bana sakte hai .
alert(3 + 3) we use node js not browser !

*/
"use strict" // treat all code as newer version

var acc_name = "Pratham "
var acc_no = "1223425"
const account_id = 10
let acc_state 
// console.table([acc_name , account_id , acc_no , acc_state])

/*
*****************************DATA TYPES****************************************

number --> 2^53
bigint
string --> ""
boolean --> true / false 
null --> ek standalone value hai (empty ka type hai)
undefined --> value nhi di hai abh tak 
symbol (used more in react) --> for unique

object
*/
console.log(typeof acc_name) //string 
console.log(typeof null) //object 
console.log(typeof undefined) // undefined 

let score = "23abc"
console.log(typeof score) //string
let value = Number(score)
console.log(typeof value) //number 
console.log(value) //NaN
let a = null 
console.log (Number(a)) // 0
console.log (typeof(undefined)) //undefined 

console.log(Boolean()) //false
console.log(Boolean("hi")) //true

/*
TYPE CONVERSIONS 

1 <--> true 
2 <--> false 
"12abs" --> string (on printing : nan)
null --> 0 (number)
null typeof --> object 
undefined typeof --> undefined 

*/

//************************OPERATIONS***************************************** */

console.log(2%3)
let str1 = "helo"
let str2 = "duniya"
console.log(str1 + " " +  str2) //hello duniya
console.log (2 + "3") // 23
console.log (2 + 2 + "2") //42 
console.log ("3" + 3 + 4 ) //334 (implicit typeconversion to string)
console.log (+true) //1
console.log (+"") //0

console.log ("2" > 1); //true
console.log (null < 0 ) //false
console.log (null <= 0 ) //true
console.log (null == 0) //false

/* 
Comparison operator converts the null to a number making it 0 .
Equality me aisa nhi hota so it gives false . 

"===" --> triple equal to checks ( data type + value )
*/

console.log (undefined >= 0) //false

// **************************************************SHERYAN **********************************************************
//Js is a scripting language --> 
// humara code --> interpreter --> binary code me conv karta hai (joh computer samjhte hai . )
// js - BRENDAN EICH (Netscape me kaam karte the)
// 15-16 dino me js banayi ( lot of issues / errors )
// further lot of versions > after version > after version ..... >>> ES6 (GOAT) (lot of updates) 
// 
