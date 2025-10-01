/***************************************OBJECTS******************************************* */

/*
singleton => literals se nhi banta hai normally (constructor se banta hai )
 yeh apne tarike ka ek hi object hai

 constructor se banta hai matlab : 
 Object.create
*/
const my_symbol = Symbol("mysym")
//object literals
const js_user = {
    name : "pratham" , 
    age : 20 ,
    male : true ,
    email : "popat.com" ,
    [my_symbol] : "mysum1" 
}
console.log (js_user.name) //pratham
console.log (js_user["email"]) //popat.com
console.log ( typeof js_user[my_symbol]) //string
console.log (typeof my_symbol) //symbol

js_user["email"] = "pratham.com"
// Object.freeze(js_user) 
js_user["email"] = "prathamnegi.com"
console.log (js_user)

js_user.greeting = function() {
    console.log ("KOnichiwa !")
}
console.log(js_user.greeting) //[Function (anonymous)]
console.log(js_user.greeting()) //konichiwa

js_user.greeting2 = function() {
    console.log (`KOnichiwa ! ${this.name}`)
}
console.log (js_user.greeting2()) //KOnichiwa ! pratham undefined


//Now declare objects as constructors

const twitter_user = new Object()

console.log (typeof twitter_user) //object 
console.log ( twitter_user) //{}

twitter_user.id = 5222343
twitter_user.name = "john dahl"
console.log ( twitter_user) //{ id: 5222343, name: 'john dahl' }

const player = {
    id : 2323 ,
    player_info : {
        name : {
            username : "jackidon",
            fname : "jack" ,
        }
    } 
}

console.log (player.player_info.name.username) //jackidon

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : 'd'}
const obj3 = Object.assign(obj1 , obj2) //combines the objects and returns as obj1
console.log (obj3)
const obj4 = Object.assign({} ,obj1 , obj2)//combines the object into a new object 
console.log (obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = {...obj1 , ...obj2} //more common way (spreading)
console.log (obj5) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log (Object.keys(obj4)) //[ '1', '2', '3', '4' ]
console.log (Object.values(obj4)) //[ 'a', 'b', 'c', 'd' ]
console.log (Object.entries(obj4)) //[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

console.log (obj4.hasOwnProperty(3)) //true(to check whether the object has this property or not )

//Object milne par usse destructure karna 

const course = {
    instructor : "Hitesh" ,
    course_name : "chai_js"
}
const {instructor : tr} = course //object ko destructure kar dia 
console.log (tr) //HItesh
