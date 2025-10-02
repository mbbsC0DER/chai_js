/**
 this -> current context/scope me called variables ko access kar sakta 
 => (arrow function) -> concise way of writing a function in js 
 */

const user = {
    name : "hitu" ,
    age : 45 ,

    say_hi : function(){
        console.log (`Hello melaa ${this.name}`)
        console.log (this) //unn parts ke context me object ko print karega 
    }

}
user.say_hi() //Hello melaa hitu
user.name = "prathuu"
user.say_hi() //Hello melaa prathuu

console.log(this) //{} empty because yeh abh node ke envme hai object se bahar hai 
//browser ke andar yeh window object show karta hai 

function chai(){
    let username = "pratham"
    console.log (this.username) //this objects ke andar kaam karta hai functions ke andar nhi 
}
chai() //undefined

const chuma =  () => { //the function keyword ko bas arrow me likh diya 
    console.log (this)
}
chuma() //{}

// const add_two = (n1 , n2 ) => {
//     return n1 + n2 
// } 

// const add_two = (n1 , n2) => n1 + n2  //inclusive return type (only for 1 line code )

const add_two = (n1 , n2) => (n1 + n2) //parenthesis me likha toh return nhi likhna padta 
console.log (add_two(4,5)) //9

const give_name = () => ({name : "pratham"})
console.log (give_name()) //{ name: 'pratham' }
