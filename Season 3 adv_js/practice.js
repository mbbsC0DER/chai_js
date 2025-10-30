const promise1 = new Promise(function (resolve , reject){
    console.log ("this is practice 1 ")
    setTimeout( ()=> {
        console.log ("task 1 ")
        resolve();
    } , 1000)
})

console.log ("this is sync ")
promise1.then( function(){
    console.log ("promise1 consumed")
})

new Promise( (resolve , reject)=> {
    setTimeout(() => {
        resolve({sub : "hindi" , marks : 99})
    }, 2000);
})
.then( (user) => {
    console.log (user)
    return user
})
.then ( (data)=> {
    console.log (data.marks)
    console.log (data.sub)
})

const promise3 = new Promise( (resolve , reject) => {
    setTimeout(() => {
        let a = -10
        if (a > 0){
            resolve("a is positive")
        }
        else 
        {
            reject("ERROR : a is negative")
        }
    }, 3000);
})
promise3.then( (ans)=> {
    console.log (ans)
})
.catch( (e)=> {
    console.log (e)
})
.finally( (e)=> {
    console.log ("task 3 done" , e)
})

const promise5 = new Promise( (resolve , reject)=> {
    setTimeout(() => {
        let a = 10
        if (a > 0){
            resolve("a is positive")
        }
        else 
        {
            reject("ERROR : a is negative")
        }
    }, 4000);
})
async function test_consume() {
    try{
        const response = await promise5
        console.log (response)
    }
    catch(error){
        console.log (error)
    }
}

test_consume()

async function test_github() {
    try{
        const response = await fetch ("https://api.github.com/users/mbbsC0DER")
        const data = await response.json()
        console.log (data.node_id)
    }
    catch(error){
        console.log ("link is broken ")
    }
}


fetch("https://api.github.com/users/mbbsC0DER")
.then ( (response) => {
    return response.json()
})
.then( (data)=> {
    console.log (data.id)
})
.catch( (e)=> {
    console.log (e)
})
.finally( ()=> {
    console.log ("PROMISE PRACTICE DONE ")
})


test_github()