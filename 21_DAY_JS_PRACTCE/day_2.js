// ##  **Day 2 – Conditions & Logic**

// ### 🧩 **Core Concept Focus**

// * Conditional statements (`if`, `else if`, `else`)
// * Comparison and logical operators
// * Decision making based on different inputs
// * Strengthening flow-of-control understanding

// ### 🧠 **Questions List**

// 1. **Find the Maximum of Three Numbers**

//    * Input: `10 20 5`
//    * Output: `20`
//    * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*
const q1_a = 20 , q1_b = 20 , q1_c = 5 

if( q1_a === q1_b || q1_b ===q1_c)
{
    console.log("they are same")
}
else
{if (q1_a >= q1_b && q1_a >= q1_c){
    console.log (`${q1_a} of a  is the largest number`)
}
else if (q1_b >= q1_c){
    console.log (`${q1_b} of b is the largest number`)
}
else {
    console.log (`${q1_c} is the largest number`)
}}


// ---

// 2. **Check if a Number is Positive, Negative, or Zero**

//    * Input: `-9`
//    * Output: `Negative`
//    * ✨ *Practices multi-branch conditions and comparison operators.*

const q2 = -4

if(q2 === 0 ){
    console.log (`${q2} is ziero`)
}
else if ( q2 % 2 === 0){
    console.log (`${q2} is even`)
}
else {
    console.log (`${q2} is odd`)
}
// ---


// 3. **Calculate Electricity Bill**

// * Input: `Units = 230`
// * Output: `Total Bill = ₹1500`
// * ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
// * Example Logic:

//   * 0–100 units → ₹5 per unit
//   * 101–200 units → ₹7 per unit
//   * 201–300 units → ₹10 per unit
//   * Above 300 units → ₹12 per unit
// * 🔍 *Teaches:* cumulative calculation + condition chaining.

//Brute-force approach
const q3 = 950
function Electricity_Bill(units){
    let charge = null ;
    if ( units <= 100){
        charge = units * 5
    }
    else if (units <= 200){
        charge = (100 * 5) +  (units- 100) * 7
    }
    else if (units <= 300){
        charge = 1200 +  (units-200) * 10
    }
    else {
        charge = 2200 +  (units - 300) * 12
    }
    return charge 
}
console.log ("Brute-force approach : " , Electricity_Bill(q3))

//OPTIMISED APPROACH 
function opt_elect_bill(units){
    let a = [100 , 100 , 100] 
    let b = [5 , 7 , 10 , 12] 
    let charge = 0 

    for (let i = 0 ; i < a.length ; i++){ 
        if (units > a[i]) 
        { 
            charge += b[i] * a[i] 
            units -= 100 
        } 
        else { 
            charge += units * b[i] 
            return charge 
        } 
    } 
    if(units > 0 ) 
    { 
        charge += units * b[b.length - 1 ]
    }
    
    return charge ;
}
console.log ("Optimised approach : " , opt_elect_bill(q3))
// ---

// 4. **Check if a Character is a Vowel or Consonant**

//    * Input: `e`
//    * Output: `Vowel`
//    * ✨ *Combines logical OR (`||`) operator and string comparisons.*

let q4 = "9"
console.log(check_vowel(q4))
function check_vowel(char = ""){
    console.log (char.charCodeAt())
    const vowel = "aeiouAEIOU"
    if (vowel.includes(char) && char !== ""){
        return "this si a vowel"
    }
    else if (/[a-z][A-Z]/.test(char)){
        return "thsi is a consonant"
    }
    // else if (65 <= char.charCodeAt(0) <= 90 || 97 <= char.charCodeAt(0) <= 122){
    //     return "thsi is a consonant"
    // } ths wont work 
    return "not a valid character "
}

    // ---

// 5. **Check if a Year is a Leap Year**

//    * Input: `2024`
//    * Output: `Leap Year`
//    * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

//    A year is a **leap year** if it satisfies these conditions:

//    1. It is **divisible by 4**,  
//       ➜ `year % 4 === 0`
//    2. **But not divisible by 100**,  
//       ➜ `year % 100 !== 0`
//    3. **Unless it is also **divisible by 400**,  
//       ➜ `year % 400 === 0`

//    🧩 **In Simple Words**
//    - If a year is divisible by **4**, it’s a leap year.  
//    - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.  
//    - **But** if it’s divisible by **400**, it **is** a leap year again.

let q5 = "a" 

let check_leap = function (year){
    if((year % 4 === 0 && year % 100 !== 0) || year %400 === 0 )
    {
        return `${year} is a leap year`
    }
    else if (/[0-9]/.test(year)) {
        return `${year} is not a leap year`
    }
    return "invalid year"
}
console.log (check_leap(q5))
// ---

// ### 🏠 **Homework / Practice Challenge**

// 1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

//    * Input: `A`
//    * Output: `Uppercase Letter`
//    * ✨ *Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.*
//    * 🔍 *Concepts:* ASCII range checks, compound `&&` and `||` operators.

let q6 = "8"
function check_char(char){
    if (/[a-z]/.test(char)){
        return `${char} is in lowercase `
    }
    else if (/[A-Z]/.test(char)){
        return `${char} is in uppercase `
    }
    else if (/[0-9]/.test(char)){
        return `${char} is a number  `
    }
    // else if (/[/!@#$%^&*()_+={}[\]''"";:,.?]/.test(char))
    // {
    //     return `${char} is a special character`
    // }
    return (char === " ") ? "space is a special character" :`${char} is a special character` 
}
console.log (check_char(q6))
// ---

// 2. **Check Triangle Type Using Sides and Angles**

// * **Input:** `Sides = 3, 4, 5`
// * **Output:** `Right-Angled Triangle`
// * *Combines geometric reasoning + Pythagoras theorem check.*
// * Example Logic:

//   * If `a² + b² = c²` → Right-angled
//   * Else if all sides equal → Equilateral
//   * Else if any two equal → Isosceles
//   * Else → Scalene

let a = 1 , b =2     , c = 3 
function check_triangle(x,y,z){
    let sides = [x,y,z].sort( (a,b) => a-b)
    let [a,b,c] = sides ;
    if (a+b <= c){
        return "not a triangle"
    }
    else if (a**2 + b**2 === c**2){
        return "Right angeled triangle"
    }
    else if (a===b && b==c){
        return "Equilateral triangle"
    }
    else if ((a===b) || (b===c) || (c===a)){
        return "Isoceles triangle"
    }
    else {
        return "scalene triangele"
    }
}
console.log ("The triangle is " , check_triangle(a,b,c))

// ---

// 3. **Calculate Income Tax Based on Slabs**

// * **Input:** `Income = ₹7,50,000`
// * **Output:** `Tax = ₹52,500`
// * ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
// * Example Logic (example slabs):

//   * Up to ₹2,50,000 → No tax
//   * ₹2,50,001 – ₹5,00,000 → 5%
//   * ₹5,00,001 – ₹10,00,000 → 20%
//   * Above ₹10,00,000 → 30%
// * 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*

// ---
let q8 = 750000
function Income_tax(inc){
    let slab = [250000 , 250000,500000]
    let tax = [0 , 0.05 , 0.2 , 0.3]
    let op = 0

    for (i = 0 ; i < slab.length ; i++){
        // if (inc <= 250000){
        //     return `${op} is the tax`
        //     break
        // }
        if (inc > slab[i]){
            op += tax[i] * slab[i] 
            console.log ("inside if",inc , op)
            inc -= slab[i]
        }
        else {
            op += tax[i] * inc
            console.log ("inside else ",inc)
            return `The tax is ${op}`
        }
    }

    if (inc > 0 ){
        op += inc * tax[tax.length - 1]
        return `The tax is ${op}`
    }
}
console.log (Income_tax(q8))
