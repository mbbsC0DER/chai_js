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

function runTwice(fn){
    console.log ("once")
    fn()
    console.log ("twice")
    fn()
}
runTwice(()=>{
    console.log("pratham")
})

function abcd({name , age}){
    console.log (name , age)
}
abcd ({name : "pratham" , age: 20})

let obj3 = {
    name : "sigma" ,
    fnc : function(){ //arrow fn apne parent se value leta hai. 
        return ()=>{
            console.log (this)
        }
    } 
    
}
let store = obj3.fnc()
store()
//agar ek obj ke andar ek noraml function ke andar agar ek aur normal fn banaya aur uske andar this likha toh voh this global object ko batata hai  , lekin agar normal fn ke bajaye arrow fn likha toh voh parent ko batata hai yaani humara obj

