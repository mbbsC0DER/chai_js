/*******************************************************LOOPS************************************************************/
// for(i = 1 ; i <= 10 ; i++){
//     for (let j = 1; j <= 10; j++){
//        console.log (`${i} x ${j} = \t${i*j}`)
//     }
// }
// let array = ["pratham" , "sheworm" , "ankit" , "subam"]
// for (let index = 0; index < array.length; index++) {
//     if (index == 2) {
//         continue
//     }
//     const element = array[index];
//     console.log(element)
// }
//for of --> iterables ke liye (except objects)
// const array = [1,2,3,4,5]
// let str = "prathamnegi"
// for (const i of array) {
//     console.log(i);
//     for (const element of str) {
//         console.log(element);
//     }
// }
const map = new Map() //unique values key value pair me store karta hai 
map.set(1 , "a")
map.set(2 , "b")
map.set(2 , "b")
map.set(3 , "c")
console.log(typeof map); //object 
// console.log (map) //Map(3) { 1 => 'a', 2 => 'b', 3 => 'c' }

for (const [key , val] of map) {
    // console.log(key , val);
} //1
// a
// 2
// b
// 3
// c

const my_obj = {
    name : "pratham" ,
    brand : "negi" ,
}
// for (const [i , j ] of my_obj) {
    // console.log(i , j );   
// } //error my_obj not iterable

//forin --> for objects
for (const key  in my_obj) {
    // console.log(my_obj[key]);
}//pratham      negi

const new_arr = ["js" , "python", "html" , "css"]
for (const key in new_arr) {
    // console.log(key);
} //indexes de rha values nhi
//map ke upar bhi nhi lagta forin



// for-each --> arrays ke liye 
// isme callback function dete hai jiska naam nhi hota
// new_arr.forEach(function (i) {
//     console.log(i);
// })
// new_arr.forEach((i)=> {
//     console.log(i);
// })
// function print_me(item){
//     console.log(item);
// }
// new_arr.forEach(print_me)    //bas fn ka reference dena hai isme
new_arr.forEach( (item , index , arr)=>{
//     console.log(item , index , arr);
})


//array including objects ko kaise for each se handle kare 
// const arr_with_obj = [
//     {
//         name : "pratham" , 
//         age : 20
//     } ,
//     {
//         name : "june" ,
//         age : 12
//     } ,
//     {
//         name : "silver" ,
//         age : 22
//     }
// ]
// arr_with_obj.forEach( (item) => {
//     console.log(item.age);
// })

const each_arr = new_arr.forEach( (item) => {
    // console.log(item)
    return item
})
//for each loop doesnt give a return statement 
// console.log (each_arr) //undefined 

//to solve this we have filter 
const nums = [0 ,1,2,3,4,5,6,7,8,9,10]
const even = nums.filter( (item) => item%2==0)  
// const even = nums.filter( (item) => {
//     return item %2 ==0
// })
//access toh sabko karta hai like 
// for each loop bas return unhe hi karega joh condition follow karenge 
console.log(even); //[ 0, 2, 4, 6, 8, 10 ]


//map 
const mapped = nums.map( (item) => item**2)
// console.log(mapped)
nums.forEach( (item) => {
    // console.log(item**3)
})

//chaining
const new_nums = nums.map( (i) => i+10).map( (j) => j+2).filter( (k) => k<15) //[ 12, 13, 14 ]
console.log(new_nums);


//reduce
const my_nums = [1,2,3]
const my_total = my_nums.reduce( (acc , cval) =>
{
    console.log(`accumulator = ${acc}\tcurrent value =${cval}`)
    return acc+cval
} , 89 )
console.log(my_total);
// accumulator = 0 current value =1
// accumulator = 1 current value =2
// accumulator = 3 current value =3
// 6
