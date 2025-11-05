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
let inp = 10;
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
