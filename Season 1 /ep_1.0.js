/* 
**********************************************DATA TYPES*************************************************** 
1. Primitive (called by value) -> inki copy di jaati hai na ki og 

7 types : string , number , boolean , null , undefined , symbol , bigInt 

const big_number = 428424222244783248392n // (n = converted to bigint)

2, Non Primitive (call by reference) -> og me changs honge 

arrays , objects , functions --(data type : object hota hai )

# Js is dynamically typed language 

*/

/*
*************************************************MEMORY ALLOCATION************************************************

Stack (Primitive)
Heap (Non-Primitive)

*/
let stack_1 = "hello"
let stack_2 = stack_1
stack_2 = "world"
console.log (stack_2)
console.log (stack_1)
//stack2 pointing to a copy of stack1 


let user_1 = {
    name : "Praham",
    roll : 34
}
let user_2 = user_1
console.log (user_1)
console.log (user_2)
user_1["name"] = "Raghu"
console.log (user_1)
console.log (user_2)
//both pointing to same reference 
