console.log (Math.PI)

const destructor = Object.getOwnPropertyDescriptor(Math , "PI")    // to get to know hidden features of an object 
// console.log (destructor)

const hate = {
    name : "pratham" , 
    price : 999 , 
    isAvailable : false
}
console.log (Object.getOwnPropertyDescriptor(hate , "isAvailable"));
hate.isAvailable = true 
console.log ("Before change" , hate.isAvailable)
Object.defineProperty(hate , "isAvailable" , {
    // writable : false ,
    enumerable : false
})
console.log (Object.getOwnPropertyDescriptor(hate , "isAvailable"))
// hate.isAvailable = false 
// console.log ("After change" , hate.isAvailable)
for (let [key , value] of Object.entries(hate)){
    if (typeof value !== "function")
    {console.log (key , "\t\t" ,  value )}  //abh isAvailable me loop nhi lagega kyuki enumerable false ho gya 
}

 