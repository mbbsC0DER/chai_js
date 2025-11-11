let arr = [1,23,4,5,6]
function arr_shower(a,b,...c){
    console.log (a, b ,c)
}
arr_shower(...arr)

let obj = new Object
console.log (typeof obj)
function add(...a){
    console.log("Hello js" , a)
    return a.reduce((acc , cval)=> {return acc + cval} , 1)
}
// console.log(add(2,3,4,5,6,7,8,9,1,10))
(function(){
    console.log ("i run instantly")
})()

function outer(){
    const a = 90 ;
     function inner(){
        const b = 80
        console.log (a)
     }
    return inner
}
const take = outer()
take()
