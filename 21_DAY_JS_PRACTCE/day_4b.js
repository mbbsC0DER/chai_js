//  **Homework / Practice Challenge**

// 1. **Find the Sum of Digits**

//    * Input: `N = 987`
//    * Output: `24`
//    * ✨ *Builds understanding of digit extraction and accumulation.*
// ---

let q1 = 100;
let store = 0,
  total = 0;
function sum_of_digits(n) {
  while (n > 0) {
    store = n % 10;
    total += store;
    n = Math.floor(n / 10);
  }
  return total;
}
console.log( "Sum of digits : " ,sum_of_digits(q1));

// 2. **Find the Average of Digits**

//    * Input: `N = 4567`
//    * Output: `Average = 5.5`
//    * ✨ *Combines digit sum and count for average computation.*

// ---
let q2 = 7437;
function avg_counter(n) {
  let avg = 0 , total = 0,
    digit = (n === 0) ? 1 : 0;
  while (n > 0) {
    store = n % 10;
    total += store;
    n = Math.floor(n / 10);
    digit++;
  }
  avg = total / digit
  return avg
}
console.log ("Average is : " , avg_counter(q2))

// 3. **Find the Largest and Smallest Digit in a Number**

//    * Input: `N = 9483`
//    * Output: `Largest = 9, Smallest = 3`
//    * ✨ *Enhances comparison logic using loops.*
// ---
let q3 = 4893
function comparator(n){
    let largest = -Infinity , smallest = Infinity 
    while(n > 0){
        store = n % 10
        n = Math.floor(n / 10);
        if (store > largest) largest = store
        if (store < smallest) smallest = store
    }
    // smallest = largest
    // while(original > 0){
    //     store = original % 10
    //     if (store < smallest) smallest = store
    //     else original = Math.floor(original / 10);
    // }
    return [smallest , largest]
}
let [sm , la] = comparator(q3)
console.log (`Smallest : ${sm} , Largest : ${la}`)

// 4. **Check if a Number is a Strong Number**

//    * Input: `N = 145`
//    * Output: `Strong Number`
//    * ✨ *Applies factorial of each digit and sums them: `1! + 4! + 5! = 145`.*

// ---

// 5. **Check if a Number is an Automorphic Number**

//    * Input: `N = 25`
//    * Output: `Automorphic Number` *(since 25² = 625 ends with 25)*
//    * ✨ *Practices modulus-based pattern matching.*

// ---

// 6. **Find the Frequency of Each Digit**

//    * Input: `N = 112233`
//    * Output: `1 → 2, 2 → 2, 3 → 2`
//    * ✨ *Combines loops and conditionals for counting repetitions.*

// ---

// 7. **Check if a Number is a Harshad Number**

//    * Input: `N = 18`
//    * Output: `Harshad Number` *(since 18 is divisible by 1 + 8 = 9)*
//    * ✨ *Applies divisibility and digit-sum logic together.*
