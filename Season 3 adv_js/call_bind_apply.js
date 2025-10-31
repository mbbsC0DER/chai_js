function setUsername(username){
    this.username = username
    console.log ("called ")
}
function createUser(username , email , passwd){
    setUsername.call(this , username) // call toh hua hai par reference ko hold karna padega uske liye .call use karo nhi toh jabh voh call hoga uska execution context call stack se hatega and username bhi saath me hat jayega isliye this bhi dena padega (ki tu ja lekin hume saman deke ja )

    this.email = email
    this.passwd = passwd

}

const chai = new createUser("pratham" , "negi05@gbroad" , 233)
console.log (chai) //before : createUser { email: 'negi05@gbroad', passwd: 233 }
// after : createUser { username: 'pratham', email: 'negi05@gbroad', passwd: 233 }

//classes in js 

class User {
    constructor(username , email , passwd){
        this.username = username
        this.email = email
        this.passwd = passwd ;
    }

    encrpt_psswd(){
        return `${this.passwd}abc`
    }

    
}
const butter = new User("negi" , "negi#43" , 232)
console.log (butter.encrpt_psswd())//232abc

//bts of classes 

function user2(username , email , passwd) {
    this.username = username
    this.email = email
    this.passwd = passwd ;
}
user2.prototype.encrpt_psswd = function() {
    return `${this.passwd}abc`
}

const cheese = new user2 ("hey" , "dfdf" , 2323)
console.log (cheese.encrpt_psswd())

//INHERITANCE 

class mammal{
    constructor(name){
        this.name = name
    }
    display(){
        return `i am a mammal , ${this.name} of color ${this.color}`
    }
}

class tiger extends mammal {
    constructor(name , color)
    {
        super(name) // .call ka kaam karta hai 
        this.color = color
    }

    static hobby(){     //iss method ka access har ek object ko nhi dena isliye static lagaya 
        return `the ${this.name} tiger llikes to eat lall`
    }

}

const tig = new tiger("bengal" , "orange")
console.log(tig.display()) //i am a mammal , bengal of color orange
console.log (tig.hobby()) //error not a fn
console.log (tig instanceof Object)

//
