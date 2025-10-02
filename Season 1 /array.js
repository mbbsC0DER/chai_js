/*****************************ARRAYS******************************** */

/**
 ARRAYS -> creates shallow copies of the data (heap) og me changes karega 
slice -> og array ko manipulate nhi karta
splice -> og array ko manipulate bhi karta hai 

 */

const arr = [0 , 1 , 2, false ]
console.log(arr[2]) //2

const arr_1 = new Array(1,2,3,4,6)
console.log (typeof arr_1)

//Methods

arr_1.push(5)
arr_1.pop() //last element nikal dega 
arr_1.unshift(0) //start me add kardega 
arr_1.shift() //start ka element nikal dega

console.log(arr_1.includes(6))
console.log(arr_1.indexOf(6))

let arr_2 = ["a" , "b" , "c"]
arr_2 = arr_1.join()
console.log (arr_2) //1,2,3,4,6
console.log (typeof arr_2) //string
console.log("og array : " , arr_1)
const arr_3 = arr_1.slice(0 , 3 )
console.log("og array : " , arr_1) //[ 1, 2, 3, 4, 6 ]
console.log("slice : " ,arr_3) //slice :  [ 1, 2, 3 ]

const arr_4 = arr_1.splice(0 , 3)
console.log("og array : " , arr_1) //og array :  [ 4, 6 ]
console.log ("splice : " , arr_4) //splice :  [ 1, 2, 3 ]

const arr_5 = ["a" , "b" , "c"]
const arr_6 = ["d" , "e" , "f"]
arr_6.push(arr_5) //makes changes to the og array 
console.log (arr_6) //['d','e','f',['a','b','c']]
// arr_6.concat(arr_5)
console.log (arr_6.concat(arr_5)) //returns a new array with the added elements ['d','e','f',[...] ,'a','b','c']

const arr_7 = [...arr_1 ,...arr_4,...arr_3] //Spreading the array
console.log(arr_7) //[4, 6, 1, 2,3, 1, 2, 3]

const arr_8 = [1,2,3,[4,5,6] , 7,8,[9,[0,[5,3]]]]
const flat_arr_8 = arr_8.flat(3) //nested array ko plain array me convert karke dega (can write infinity)
console.log (flat_arr_8) //[1, 2, 3, 4, 5,6, 7, 8, 9, 0,5,3]

console.log (Array.isArray("prahtam negi")) //false
console.log (Array.from("pratham negi")) // string ko array me convert karke dega 
console.log (Array.from({1 : "a"})) // empty array dega jabka usko bolenge nhi ki hume keys ka array chahiye ya values ka 

let a = 1 
let b = 2 ,c = 3
console.log (Array.of(a,b,c)) //Returns a new array from a set of elements.
