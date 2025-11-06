// LOOPS AND PATTERNS

//Q1 => Print Right-Angled Star Triangle
for (i = 0; i < 5; i++) {
  let q1 = "";
  for (j = 0; j <= i; j++) {
    q1 += "*" + " ";
  }
  console.log(q1);
}

// 2. Print Inverted Right-Angled Triangle
for (i = 5; i >= 0; i--) {
  let q2 = "";
  for (j = 0; j <= i; j++) {
    q2 += "* ";
  }
  console.log(q2);
}

//3. Print Pyramid Pattern
let inp = 5;
for (let i = 1; i <= inp; i++) {
  let q3 = "";
  for (let j = 1; j <= inp - i; j++) {
    q3 += "  ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    q3 += "* ";
  }

  for (let j = 1; j <= inp - i; j++) {
    q3 += "  ";
  }
  console.log(q3);
}

//Print Inverted Pyramid Pattern

for (let i = 1; i <= inp; i++) {
  let q3 = "";

  for (let j = 1; j <= i - 1; j++) {
    q3 += "  ";
  }

  for (let j = 1; j <= 2 * (inp - i) + 1; j++) {
    q3 += "* ";
  }

  for (let j = 1; j <= i - 1; j++) {
    q3 += "  ";
  }
  console.log(q3);
}

//Hollow Pyramid Pattern
for (let i = 1; i <= inp; i++) {
  let q3 = "";
  for (let j = 1; j <= inp - i; j++) {
    q3 += "  ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1 || i === inp || i ===1) {
      q3 += "* ";
    } else {
      q3 += "  ";
    }
  }

  for (let j = 1; j <= inp - i; j++) {
    q3 += "  ";
  }
  console.log(q3);
}

// Hollow Inverted Pyramid Pattern
for (let i = 1; i <= inp; i++) {
  let q3 = "";

  for (let j = 1; j <= i - 1; j++) {
    q3 += "  ";
  }

  for (let j = 1; j <= 2 * (inp - i) + 1; j++) {
    if(j===1 || j === 2 * (inp - i) + 1 || i === inp || i ===1){q3 += "* ";}
    else {q3 += "  "}
  }

  for (let j = 1; j <= i - 1; j++) {
    q3 += "  ";
  }
  console.log(q3);
}

//Print Hollow Square Pattern

for (let i = 1 ; i <= inp ; i++){
  let q4 = ""
  for (let j= 1 ; j <= inp ; j++){
    if(i===1 || i===inp || j===1 || j === inp){
      q4 += "* "
    }
    else {
      q4 += "  "
    }
  }
  console.log (q4)
}

//Print Alternating Binary Triangle
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

for (let i = 1 ; i <= inp ; i++){
  let q5 = ""
  for (let j = 1 ; j <= i ; j++){
    if ((j%2!==0 && i%2===0) || (j%2=== 0 && i%2!== 0 )){
      q5 += "0 "
    }
    else {
      q5 += "1 "
    }
  }
  console.log (q5)
}

//Print Butterfly Pattern

for (let i = 1 ; i <= 2*inp - 1 ; i++){
  let q6 = ""
  let stars = i 
  let space = 2*(inp - i )
  if (i > 5) {
    stars = 2*inp - i
    space = i - stars 
  } 
  for (let j = 1 ; j <= stars ; j++){
      q6 += "* ";             
  }
  for (let j = 1 ; j <= space ; j++){
    q6 += "  "
  }
  for (let j = 1 ; j <= stars ; j++){
      q6 += "* ";             
  }
  console.log (q6)
}

//Print Hourglass Pattern
inp = 7
for (let i = 1 ; i <= 2*inp - 1 ; i++){
  let q6 = ""
  let space = i - 1 
  let stars = 2* (inp - i ) + 1
  if (i > inp) {
    space = (2*inp - i) -1
    stars = i - space
  } 
  for (let j = 1 ; j <= space ; j++){
      q6 += "  ";             
  }
  for (let j = 1 ; j <= stars ; j++){
    q6 += "* "
  }
  for (let j = 1 ; j <= space ; j++){
      q6 += "  ";             
  }
  console.log (q6)
}

//Print Rhombus Pattern

for (let i = 1 ; i <= inp ; i++){
  let q7 = ""
  for (let j = 1 ; j <= inp - i ; j++){
    q7 += "  "
  }
  for (let j = 1 ; j <= inp ; j++){
    q7 += "* "
  }
  for (let j=1 ; j <= i-1 ; j++){
    q7 += "  "
  }
  console.log (q7)
}