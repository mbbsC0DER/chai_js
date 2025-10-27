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
        case "equal":
            // eval_postfix();
            // let test = combine_digits(arr)
            // console.log(test)
            // let test2 = infix_to_postfix(test)
            // console.log(test2)
            arr = eval_postfix()
            break
        default:
            alert("invalid")
    }
    
    input.value = arr.join("")
}


function combine_digits(get_arr) {
    //array me n digits combine karna 
    let number = ""
    let comb_arr = []

    for (let i of get_arr)
    {
        if (!isNaN(i) || i === ".")
        {
            number += i
        }
        else {
            if(number)
            {
                comb_arr.push(parseFloat(number))
                number=""
            }
            comb_arr.push(i)
        }
    }
    if(number)
    {
        comb_arr.push(parseFloat(number))
    }

    return comb_arr ;
}



function infix_to_postfix(infix){
    //infix array ko postfix me convert karna 
    let postfix = []
    let stack = []
    const priority = {"+" : 1 , "-" : 1 , "x" : 2 , "/" : 2 , "%" : 2 , "sqrt" : 3}

    for (let i of infix)
    {
        if(!isNaN(i))
        {
            postfix.push(i)
        }
        else{
            while(stack.length && priority[stack[stack.length - 1]] >= priority[i])
            {
                postfix.push(stack.pop())
            }
            stack.push(i)
        }
    }

    while(stack.length){
        postfix.push(stack.pop())
    }

    return postfix
}


function eval_postfix(){
    //postfix array ko solve karna 
    let comb = combine_digits(arr)
    let pfix = infix_to_postfix(comb)
    let result = []
    for (let i of pfix)
    {
        if(!isNaN(i))
        {
            result.push(i)
        }
        else{
            if(i === "sqrt")
            {
                let a = result.pop()
                result.push(Math.sqrt(a))
            }
            else if (i === "%")
            {
                let a = result.pop()
                result.push(a/100)
            }
            else{
                let a = result.pop()
                let b = result.pop()

                switch (i){
                    case "+":
                        result.push(a+b)
                        break
                    case "-":
                        result.push(b-a)
                        break
                    case "x":
                        result.push(b*a)
                        break
                    case "/":
                        result.push(b/a)
                        break
                }
            }
        }
    }
    
    return result

}





