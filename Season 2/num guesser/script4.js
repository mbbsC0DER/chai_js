let form = document.querySelector("form");
console.log(form);
const random = Math.floor(Math.random() * 101);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let num = parseInt(document.querySelector("#num").value);
  let guessed = document.createElement("div");
  let guess_parent = document.querySelector(".previous");
  let rem = document.querySelector("#rem-num")
  let red_num = rem.innerText
  let congo = document.querySelector("#congo")
    console.log("random num : " , random)
  if (isNaN(num) || num < 0 || num > 100) {
    alert("Enter a valid number between 1 - 100");
  } 
  else if (red_num <= 0)
  {
    alert("Better luck nxt time nikal chal....")
  }
  else {

        if (num === random)
        {
            congo.innerHTML = "CONGRATULATIONS !"
        }
        else {
            guessed.innerText = num;
            guess_parent.appendChild(guessed);  
            let reduce = red_num - 1 
            rem.innerText = reduce
        }
  }
});
