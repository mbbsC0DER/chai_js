let button = document.querySelectorAll(".button");
let body = document.querySelector("body");

console.log(button);
button.forEach( (but)=>{
    but.addEventListener("click" , (e)=> {
        console.log(e) //jaunsa event hua 
        console.log(e.target) //jiss element me event hua voh return karega 
        switch(e.target){
            case grey :
                body.style.backgroundColor = e.target.id
                break ;
            case crimson :
                body.style.backgroundColor = e.target.id
                break ;
            case pink :
                body.style.backgroundColor = e.target.id
                break ;
            case purple :
                body.style.backgroundColor = e.target.id
                break ;
            
            default :
                body.style.backgroundColor = "green"
                break ;
        }
    })
})
