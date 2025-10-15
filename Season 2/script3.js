const clk = document.getElementById("clock")
console.log(clk) //gives an html collection of 1 
const cl = document.querySelector("#clock")
console.log(cl); //gives the clock div

setInterval(function(){
    let date = new Date() ;
    //console.log(date.toLocaleTimeString())
    clk.innerHTML = date.toLocaleTimeString();
} , 1000);
