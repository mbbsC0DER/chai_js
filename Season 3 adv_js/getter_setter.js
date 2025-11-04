//using classes

class user {
    constructor(name , age){
        this.name = name
        this._age = age 
    }

    get _age(){
        return this.new_age - 10
    }
    set _age(val){
        this.new_age = val
    }

    get name(){
        return this.new_name.toUpperCase()
    }
    set name(val){
        this.new_name = val
    }
}

const obj = new user ( "pratham negi" , 20)
console.log(obj._age)
console.log(obj.name)

//using functions 

function user2(email , passwd) {
    this._email = email
    this._passwd = passwd
    Object.defineProperty(this , "email" , {
        get : function(){
            return this._email.toUpperCase()
        } , 
        set : function(val) {
            this._email = val
        }
    })
    Object.defineProperty(this , "passwd" , {
        get : function(){
            return `${this._passwd}123 `
        } , 
        set : function(val) {
            this._passwd = val
        }
    })
}

const property = new user2("negi05@gmail.com" , 890)
console.log (property.email)
console.log (property.passwd)

//using objects

const obj1 = {
    _name : "taklu" , 
    age : 20 , 

    get name(){
        return this._name.toUpperCase()
    } ,
    set name(val){
        this._name = val
    }
}

const obj2 = Object.create(obj1)    //obj2.__proto__ === obj1
console.log (obj2.name) //yeh get name() ko call kar rha hai 