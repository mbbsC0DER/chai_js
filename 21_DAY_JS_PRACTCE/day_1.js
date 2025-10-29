// ## 🎯 **Day 1 – Simple Number Problems**

// ### 🧩 **Core Concept Focus**

// * Loops (`for`, `while`)
// * Simple arithmetic operations
// * Thinking in steps (pattern of input → logic → output)

// ### 🧠 **Questions List**

// 1. **Print Numbers from 1 to N**

//    * Input: `5`
//    * Output: `1 2 3 4 5`
//    * ✨ *Teaches basic loop construction.*
let num = ""
let a = 5
for(let i = 1 ; i <= a ; i++){
   num += i + " "
}
console.log(num)
// 2. **Print Numbers from N to 1 without changing the loop condition of above question**

//    * Input: `5`
//    * Output: `5 4 3 2 1`
//    * ✨ *Thinking creatively and manipulating logic within the loop*
let q2 = ""
let b = 5 
for (let i = 1 ; i <= a ; i++){
   q2 = q2 + b + " "
   b -= 1 
}
console.log(q2)

// 3. **Print All Even Numbers from 1 to N**

//    * Input: `10`
//    * Output: `2 4 6 8 10`
//    * ✨ *Introduces conditional checks inside loops.*
let q3 = ""
let c = 20
for (let i = 0 ; i <= c ; i+=2){
   // if (i%2==0) q3 += i + " "
   q3 += i + " "
}
console.log(q3)

// 4. **Sum of First N Natural Numbers**

//    * Input: `5`
//    * Output: `15`
//    * ✨ *Encourages cumulative addition and variable usage.*
let q4 = 10
let total = null ;
for (i = 0 ; i <= q4 ; i++){
   total += i
}
console.log(total)

// 5. **Product (Factorial) of N**

//    * Input: `5`
//    * Output: `120`
//    * ✨ *Reinforces loop control with multiplication logic.*
let q5 = 5 
let fact  = 1;
for (i = 1 ; i <= q5 ; i++){
   fact *= i
}
console.log (fact)

// 6. **Sum of All Even Numbers up to N**

//    * Input: `10`
//    * Output: `30` (`2+4+6+8+10`)
//    * ✨ *Combines loops + condition + accumulation.*
let q6 = 20
let q6_total = null ;
for (i = 0 ; i <= q6 ; i++){
   if (i%2 ===0 ){
      q6_total += i
   }
}
console.log (q6_total)
// 7. **Print Squares of Numbers from 1 to N**

//    * Input: `5`
//    * Output: `1 4 9 16 25`
//    * ✨ *Introduces arithmetic pattern generation.*
let q7 = ""
let input = 7
for (i = 1 ; i <= input ; i ++){
   q7 += i**2 + " "
}
console.log (q7)

// ### 🏠 **Homework / Practice Challenge**

// 1. **Print all numbers divisible by 3 and 5 up to N**

//    * Input: `30`
//    * Output: `15 30`
//    * ✨ *Reinforces conditional checks inside loops.*
let q8 = ""
let q8_inp = 100
while (i <= q8_inp){
   if (i%3 === 0 && i%5===0)
      q8 += i + " "
   i ++
}
console.log ("Q8 : " , q8)
// ---

// 2. **Find the sum of all odd numbers up to N**

//    * Input: `10`
//    * Output: `25` (`1 + 3 + 5 + 7 + 9`)
//    * ✨ *Combines looping with conditional accumulation.*
let q9 = 100
total = null
i = 0
while ( i <= q9){
   if (i%2 !== 0)
   {
      total += i 
   }
   i++
}
console.log ("Q9 : " ,total)

// ---

// 3. **Print the cubes of numbers from 1 to N**

//    * Input: `5`
//    * Output: `1 8 27 64 125`
//    * ✨ *Extends arithmetic pattern logic beyond squares.*
let q10 = ""
let q10_inp = 9
for (i = 1 ; i <= q10_inp ; i++){
   q10 += i**3 + " "
}
console.log ("Q10 : " , q10.trim().split(" "))

// ---

// 4. **Print only the numbers that are both even and perfect squares**

//    * Input: `1 to 20`
//    * Output: `4 16`
//    * ✨ *Encourages combining two conditions within one loop.*
let q11 = ""
let q11_inp = 50
for (i=1 ; i <= q11_inp ; i++){
   if (i%2 ==0 && Number.isInteger(Math.sqrt(i)))
      q11 += i + " "
}
console.log ("q11 : " , q11)