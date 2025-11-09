//lexical scoping => function apne local variables + parent scope ke variables ko bhi access kar sakta hai
function outer(){
    let name = "pratham"
    function inner(){
        console.log ("Inner function : ",name)  //Inner function :  pratham
    }
    inner()
}
outer()
// console.log("Outer function : " , name)       //=> error 



//closure and
//Eg 1 

function outer_closure (){
    let name = "negi"
    console.log ("sigma")
    function inner_closure(){
        console.log ( "Inner closure : " , name)
    }
    return inner_closure
}
const store = outer_closure() //fn ka pura lexical scope return hoga 
store()     //Inner closure :  negi
console.log (store)


