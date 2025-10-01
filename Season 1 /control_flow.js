/**************************CONTROL FLOW********************************* */
// let temp = 50
// if (temp === 50) console.log("less than 50"),console.log("popu")
// else 
// {
//     console.log ("gendu")
// }

// const bal = 100
// if(bal >750){
//     console.log("greater than 750")
// }
// else if (bal > 500){
//     console.log ("greater than 500")
// }
// else console.log ("less than 500")
// let week = 9
// switch (week) {
//     case 1: 
//         console.log("Sunday")
//         break;
//     case 2: 
//         console.log("Monday")
//         break;
//     case 3: 
//         console.log("Tuesday")
//         break;
//     case 4: 
//         console.log("Wednesday")
//         break;
//     case 5: 
//         console.log("Thursday")
//         break;
//     case 6: 
//         console.log("Friday")
//         break;
//     case 7: 
//         console.log("Satuday")
//         break;
//     default:
//         console.log ("invalid")
//         break;
// }

//FALSY VALUES
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// TRUTHY VALUES
// "0" , "false" , " " , [] , {} , function() {}

// let empty_array = []
// if (empty_array.length == 0 ){
//     console.log("empty")
// }

// let emp_obj = {}
// if (Object.keys(emp_obj).length == 0){
//     console.log ("khali")
// }

//NULLISH COALESCING OPERATOR (???) : for null and undefined
// let popu
// let val1 = null ?? undefined
// if (null ?? " ") 
// {
//     console.log(val1)
// }
// else {
//     console.log (Number(undefined))
//     console.log(typeof popu)
// }

//TERNARY OPERATOR
// condition ? true : false 

const price = 200
price >= 100 ? console.log("yes") : console.log ("no")