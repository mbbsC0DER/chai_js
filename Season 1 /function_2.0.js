/*
IIFE --> Immediately Invoked Function Expression
jabh hum ek html file me do ya jyada js files add karte hai toh unme same global variables share hote hai .
so agar el global variable dusre se overwrite na ho jaye (global variable polluting) isliye hum usse iife ke andar privately store karte hai 
*/
(function call() {        //this is a named iife
    console.log ("bello ! ")
})(); //yaha colon lagana jaruri ban jata hai 

( (name) => {           //this is an unnamed iife
    console.log (`bello again ${name}`)
})("Prahtam")
//similar to chai("prahtam")