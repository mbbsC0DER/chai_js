// let lname  = "sigma"
// const obj = {
//     name : "prahtam" , 
//     lname : "negi" ,
//     signedIn : true ,

//     display_method : function (){
//         console.log ("yeh lai")
//         console.log (`Username : ${this.lname}`)
//         console.log (this) // current context dega obj ka 
//         return 0 
//     }

// }
// // console.log (obj["signedIn"])
// console.log(obj.display_method())
// console.log (this) //browser me yeh window object dega 

// const date = new Date()
// //new keyword = ek hi object literal se multiple instances bana sako 
// function user(name , points , rank){
//     this.name = name
//     this.points = points
//     this.rank = rank

//     this.greet = function () {
//         console.log(`Welcome ${this.name}`)
//     }

//     return this 
// }

// const obj2 = new user("pratham" , 20 , 3)
// const obj3 = new user("varun" , 30 , 2) // agar new nhi likhte toh obj3 pehle vaale (obj2) ke values ko overwrite kar dega 
// console.log (obj2.constructor) // user ka reference de rha 
// console.log (obj3)

// // BTS OF "new" KEYWORD 
// // 1. Empty object create karta hai {}
// // 2. Constructor (.prototype) function get linked to this empty object 
// // 3. this kewword ke arguments uss obj ke andar aate hai
// // 4. reuturns obj 

// function mummy(num){
//     return num**2
// }
// mummy.power = 10
// console.log(mummy(2))
// console.log(mummy.power) //function is also an object 
// console.log(mummy.prototype) // {}

// function dad(name , score){
//     this.name = name
//     this.score = score
// }

// dad.prototype.size = function(){
//     this.score++    //this-ne-bhi bulaya haii uska score badhado 
// }

// dad.prototype.display = function(){
//     console.log (`Namaste ${this.name}`)
// }

// const one = new dad("kripal" , 2)
// const two = new dad("balbir" , 3)
// one.display()
// one.size()
// console.log ("papa ka score hai , " , one.score)
// console.log (dad.prototype)

// //OOPS code ko modular ,scalable ,manageable ,reuseable ,easy 2 fix
// //new -- blank obj banalo 

class book {
    constructor(name , price , author ){
        this.name = name  ;
        this.price = price ;
        this.author = author ;
        console.log (this)
    }

    pageUp (){
    console.log ("page palat chuka hia ")
}


    pageDown = ()=>{
        console.log ("page piche karlo ")
    }

}
book.prototype.pageUp = ()=>{
    console.log ("page palat chuka hia ")
}

let book1 = new book("mystery" , 999 , "pratham")
console.log (Object.getPrototypeOf(book1))
console.log(book1.this)
let book2 = new book("fantasy" , 99 , "ankit")
console.log (book2.pageUp())


class mammal {
    str = "pratham"
    sayName = ()=>{
        console.log (`My name is ${this.str}`)
    }
}
class animal extends mammal {
    str = "ankit"
    saymyName = ()=>{
        console.log (`My name is ${this.str}`)
    }
}

let m1 = new  mammal()
m1.sayName()

class humongo {
    constructor(year){
        this._year = year
    }

    set saal (val){
        this._year = val
    }
    get saal(){
        return this._year
    }
}
let obj = new humongo(2025)
console.log (obj.saal);
obj.saal = 2012
console.log (obj.saal);
