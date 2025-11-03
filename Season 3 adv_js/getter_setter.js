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