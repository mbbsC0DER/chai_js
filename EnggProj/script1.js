// let safe = (function(){
//     let bankBalance = 5000 ;

//     function getBalance(){
//         console.log (bankBalance)
//     }

//     function deposit(val){
//         bankBalance += val
//     }

//     function withdraw(val){
//         if (val <= bankBalance){
//             bankBalance -= val
//             console.log (`here is your ${val}`)
//         }
//         else {
//             console.log (`INSUFFICIENT BALANCE`)
//         }
//     }

//     return {
//        get : getBalance ,add : deposit ,give : withdraw
//        //this is revealing module pattern 
//     }
// })()
// safe.get()
// safe.add(2000)
// safe.get()
// safe.give(999)
// safe.get()

//factory pattern
