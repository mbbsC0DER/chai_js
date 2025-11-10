// ## 🎯 **Day 4 A – Understanding Decimal Number System**

// 1. **Split Number into Digits**

//    * Input: `N = 12345`
//    * Output: `[1, 2, 3, 4, 5]`
//    * ✨ *Extract each digit mathematically using, and return them in an array. Do not use string operations.*

let inp = 12345;

function array_maker(n) {
  let arr = [];
  while (n !== 0) {
    arr.unshift(n % 10);
    n = Math.floor(n / 10);
  }
  return arr;
}
console.log(array_maker(inp));
function reverse_num(inp) {
  let temp = 0,
    store = 0;
  while (inp > 0) {
    store = inp % 10;
    temp = temp * 10 + store;
    inp = Math.floor(inp / 10);
  }
  return temp;
}
console.log("Reversed number : " + reverse_num(987654321));

// ---

// 2. **Remove the Decimal Point Mathematically**

//    * Input: `N = 12.34`
//    * Output: `1234`
//    * ✨ *Do not use string operations.*

let inp2 = 43.43786;
function decimal_remover(n) {
  while (n % 1 !== 0) {
    n *= 10;
  }
  return n;
}
console.log("Decimal remover : ", decimal_remover(inp2));
// ---

// 3. **Separate Whole and Fractional Parts of a Number**

//    * Input: `N = 5.75`
//    * Output: `Whole = 5, Fraction = 0.75`
//    * ✨ *Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use `Math.trunc()` method.*
let inp3 = 5.743434;
function seperator(n) {
  let whole = Math.floor(n);
  let fraction = Number((n - whole).toFixed(10));

  return [whole , fraction]
}
let [whole, fraction] = seperator(inp3) ;
console.log(`Whole : ${whole} \t Fraction : ${fraction}`);

// ---

// 4. **Count Whole and Fractional Digits Separately**

//    * Input: `N = 12.345`
//    * Output: `Whole Count = 2, Fraction Count = 3`
//    * ✨ *Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use `Math.trunc()` method.*
let inp4 = 546.593759874
function digit_counter(n) {
  let whole = Math.floor(n);
  let fraction = Number((n - whole).toFixed(10));
    let wcount = 0 , fcount = 0 
  while (whole !== 0) 
  {
    whole = Math.floor(whole/10)
    wcount += 1
    console.log (whole)
  }
  while(fraction % 1 !== 0 && fcount < 10)
  {
    fraction = fraction * 10
    fcount++
  }
  return [wcount , fcount]
}
let [wcount, fcount] = digit_counter(inp4) ;
console.log(`Whole count : ${wcount} \t Fraction count : ${fcount}`);

// ---

// 5. **Generate a Decimal Number from Whole and Fractional Digits**

//    * Input: `Whole = [1, 2], Fraction = [3, 4]`
//    * Output: `12.34`
//    * ✨ *Form the number mathematically by combining the digits from both arrays using powers of 10.*
let wh = [9,8], fr = [1,2,3,4]
function number_generator(wh , fr ){
    let num = 0 , frac = 0 
    // wh.forEach( i => {
    //     num = num * 10 + i
    // });
    // fr.forEach( i => {
    //     frac = frac * 10 + i 
    // })
    // frac = frac / 10**(fr.length)

    // return num+frac

    num = wh.reduce( (acc , d)=> acc * 10 + d , 0)
    frac = fr.reduce( (acc , d) => acc * 10 + d , 0) / 10**(fr.length)
    
    return Number( (num + frac).toFixed(fr.length))
}
console.log( "Created number : " ,number_generator(wh , fr))

// 6. **Check if a Number is a Palindrome**

//    * Input: `N = 121`
//    * Output: `Palindrome`
//    * ✨ *Compares original and reversed numbers to detect symmetry.*

let inp6 = 171
let pallindrome = (reverse_num(inp6)=== inp6) ? "is a pallindrome" : "not a pallindrome"
console.log (pallindrome)

// ---

// 7. **Check if a Number is an Armstrong Number (also called a Narcissistic Number)**

//    * Input: `N = 153`
//    * Output: `Armstrong Number`
//    * ✨ *Armstrong Number: `1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634`.*

// ---
function counter(num){
    if (num===0) return 1
    let digit = 0 
    while(num > 0){
        num = Math.floor(num / 10)
        digit++
    }
    return digit
}
function armstrong_checker(val){
    if(val ===0) return "is an armstrong" ;
    let digits = counter(val)
    let store = val , arm = 0
    while(val > 0 ){
        arm +=  (val% 10)**digits
        val = Math.floor( val / 10)
    }
    return store === arm
}

let inp8 = 370
console.log (armstrong_checker(inp8)? "is an armstrong" : "not an armstrong")