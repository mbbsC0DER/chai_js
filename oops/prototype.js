// let name = "pratham      "

// console.log (name.truelength())

let boys = ["homelander" , "butcher" , "starlight"]

let powers = {
    homelander : "laser" ,
    butcher : "chad" , 
    starlight : "energy" , 
    getbutcher_power : function() {
        console.log (`Buther's power is ${this.butcher}`)
    }
}

Object.prototype.pratham = function() {
    console.log ("Pratham saves you")
}
Array.prototype.arr_pratham = function() {
    console.log ("Kaise ho array bhai ")
}

boys.arr_pratham()
// powers.arr_pratham() //doesnt have access to arr_pratham

const one = {
    one : "this is one"
}
const two = {
    two : "this belongs to two"
}
two.__proto__ = one //old syntax 
console.log (two.one)

//MODERN SYNTAX
Object.setPrototypeOf(two , one)

let another_name = "PRAHTAM  NEGI         "
String.prototype.truelen = function() {
    // let real_name = e.trim().lenght()
    console.log (this)
    // console.log (this.name)
    console.log (`The true length of the name is ${this.trim().length}`)
}

another_name.truelen()
"pratham     ".truelen()