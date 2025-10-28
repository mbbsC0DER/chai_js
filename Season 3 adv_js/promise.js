// Promises = an object representing the eventual completion or failure of async js 
//Q & Bluebird = promises libraries (old) - later got integrated in new js 


//  1) HOW TO MAKE PROMISES 

const promise_one = new Promise(function(resolve , reject){     //executor code automatically call hota hai after new promise object is created 
    // DO async tasks 
    // eg. DB calls , cryptography , network
    console.log("sigma")
    setTimeout( ()=> {
        resolve(); //jabh execute hoga tabh yeh .then se connect hoga . 
        console.log("async task 1")
    } , 1000)
})

console.log("bello")

//  2) HOW TO CONSUME PROMISES
promise_one.then(function() {   
    console.log("promise has been consumed ")
})

new Promise( (resolve , reject) => {
    setTimeout(() => {
        console.log("async task 2 ")
        resolve()
    }, 1000);
}).then( ()=>{
    console.log("promise 2 is consumed ")
})

//  how to pass data through resolve 
const promise_three = new Promise( (resolve , reject) => {
    setTimeout(() => {
        resolve({name: "pratham" , age : 20})
    }, 1000);
})

promise_three.then( (user)=> {
    console.log(user)
})

//  handling rejections 
const promise_four = new Promise( (resolve , reject) => {
    setTimeout(() => {
        let err = false
        if (!err){
            resolve({name:"negi" , "psswd" : [1234]})
        }
        else {
            reject("ERROR")
        }
    }, 1000);
})

promise_four.then( (user) => {
    console.table(user)
}).catch( (e)=> {
    console.log(e)
}).finally( ()=> {
    console.log("always executed")
})

//  
const promise_five = new Promise( (resolve , reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({language:"java" , years : 4})
        }
        else {
            reject("Eroor aaguya ")
        }
    }, 1000);
})

async function consume_prom_five() {
    try {
        const response = await promise_five
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consume_prom_five()

// to handle response using async await 

async function github_user(){
    try{
        const response = await fetch("https://api.github.com/users/mbbsC0DER")
        const data = await response.json()      //checkout 
        console.log(data)
    }
    catch (error) {
        console.log("github link broken" , error)
    }
}
// github_user()

//  now to handle url response using then and catch

fetch("https://api.github.com/users/mbbsC0DER")
.then( (response)=> {
    return response.json()
})
.then( (data)=> {
    console.log(data.login)
})
.catch((error) => console.log("there is an error " , error))