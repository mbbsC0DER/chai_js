/************************************************FUNCTIONS********************************************** */

/*
smn -> this is only reference 
smn() -> this is fn executed 

console me global scope alag hai aur node me alag 
*/

function smn(n = "lol"){
    return console.log(`${n}`)
} 

// smn("P")
// smn("r")
// smn("a")
// smn("t")
// smn("h")
// smn("a")
// smn("m")
// smn() //lol

function add(n1 , n2 ) //parameters
{
    console.log (n1 + n2)
}
add(4,5) //arguments //9
add(4 , "a") //4a
const res = add(4,5)
console.log (res) //undefined 

// ... --> rest /spread operator (jitne arguments mil rhe sabko array me pack karo )
function calc_cart_price(...num1){ 
    return num1
}
console.log (calc_cart_price(10,20,30)) //[10 , 20 , 30 ]


function calc_cart_price1(val1 , val2 , ...num1){ 
    return num1
}
console.log (calc_cart_price1(10,20,30,40)) //[30 , 40]


const myobj = {
    fname : "pratham" ,
    lname : "negi"
}
function call_user(getobj){
    return console.log (`HI ${getobj.fname} ${getobj.lname}`)
}
call_user(myobj) //HI pratham negi (u can also pass the object literal directly )

function say_marks (getarr){
    return console.log (`You got ${getarr[0]} in maths & ${getarr[1]} in english`)
}
say_marks([99,39])//You got 99 in maths & 39 in english