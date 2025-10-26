const input = document.querySelector("input")
const btn = document.querySelectorAll("button")
let arr = []

console.log(btn)
btn.forEach( (i)=>{
    i.addEventListener("click" , ()=>{
        console.log(i.value)
        display(i.value)
    })
})

//to get the token and display the number 
function display(val){
    switch (val)
    {
       case "one":
            arr.push(1)
            break
        case "two":
            arr.push(2)
            break
        case "three":
            arr.push(3)
            break
        case "four":
            arr.push(4)
            break
        case "five":
            arr.push(5)
            break
        case "six":
            arr.push(6)
            break
        case "seven":
            arr.push(7)
            break
        case "eight":
            arr.push(8)
            break
        case "nine":
            arr.push(9)
            break
        case "zero":
            arr.push(0)
            break
        case "dbzero":
            arr.push("00")
            break
        case "plus":
            arr.push("+")
            break
        case "minus":
            arr.push("-")
            break
        case "multiply":
            arr.push("x")
            break
        case "divide":
            arr.push("/")
            break
        case "sqrt":
            arr.push("sqrt")
            break
        case "dot":
            arr.push(".")
            break
        case "cent":
            arr.push("%")
            break
        case "clear":
            arr.pop();
            break
        case "all-clear":
            arr.splice(0);
            break
        default:
            alert("invalid")
    }
    
    input.value = arr.join(" ")
}

function pusher(element){
    //postfix array banane ke liye 
}