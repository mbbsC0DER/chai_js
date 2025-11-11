let main_block = document.querySelector("#arena");
let block_height = 30;
let block_width = 30;
const cols = Math.floor(main_block.clientWidth / block_width);
const rows = Math.floor(main_block.clientHeight / block_height);
let xrand = Math.floor(Math.random() * rows);
let yrand = Math.floor(Math.random() * (cols - 3));
const start_btn = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const start_modal = document.querySelector(".start-game");
const restart = document.querySelector(".restart-game");
const re_btn = document.querySelector(".btn-re");
let direction;
let snake = [
  {
    x: xrand,
    y: yrand,
  },
  {
    x: xrand,
    y: yrand + 1,
  },
  // {
  //   x: xrand,
  //   y: yrand + 2,
  // },
];
let intervalID = null;
let timer_interval_id = null ;
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};
let curr_score = 0;
const score_element = document.querySelector("#current-score");
const high_score_element = document.querySelector("#high-score");
let saved = localStorage.getItem("saved");
let high_score = saved ? JSON.parse(saved) : 0;

const time_element = document.querySelector("#time")
let time = "00 : 00"
// let snake_tail = snake[snake.length - 1];
// for (let i = 0 ; i < cols * rows ; i++){
//     let block = document.createElement("div")
//     block.classList = "block"
//     main_block.appendChild(block)
// }
const blocks = Array.from({ length: rows }, () => Array(cols).fill(null));
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const block = document.createElement("div");
    block.classList.add("block");
    main_block.appendChild(block);
    // block.innerText = `${i}x${j}`
    blocks[i][j] = block;
  }
}

function save_score() {
  localStorage.setItem("saved", JSON.stringify(high_score));
}

function render() {
  snake.forEach((segment) => {
    blocks[segment.x][segment.y].classList.add("fill");
  });
  blocks[food.x][food.y].classList.add("food");
  score_element.textContent = curr_score;

  // if (curr_score > high_score){
  //   high_score = curr_score
  //   high_score_element.textContent = high_score
  //   save_score()
  // }

  // let last = snake[snake.length - 1]
  // blocks[last.x][last.y].classList.remove("fill")
}

function change_direction() {
  if (!direction) return;
  let snake_head = null;
  let snake_tail = snake[snake.length - 1];
  if (direction === "up") {
    snake_head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    snake_head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction === "right") {
    snake_head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "left") {
    snake_head = { x: snake[0].x, y: snake[0].y - 1 };
  }
  if (
    snake_head.x >= rows ||
    snake_head.y >= cols ||
    snake_head.x < 0 ||
    snake_head.y < 0
  ) {
    // alert("GAME OVER !!")
    modal.style.display = "flex";
    start_modal.style.display = "none";
    restart.style.display = "flex";
    if (curr_score > high_score) {
      high_score = curr_score;
      high_score_element.textContent = high_score;
      save_score();
    }
    clearInterval(intervalID);
    clearInterval(timer_interval_id)
  }
  blocks[snake_tail.x][snake_tail.y].classList.remove("fill");
  if (food.x === snake_head.x && food.y === snake_head.y) {
    blocks[food.x][food.y].classList.remove("food");
    curr_score += 10;
    // snake.push(blocks[snake_tail.x + 1][snake_tail.y + 1])
    snake.unshift(snake_head);
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    return;
  }
  snake.unshift(snake_head);
  console.log(snake);
  snake.pop();
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
    default:
      direction = "left";
      break;
  }
});

start_btn.addEventListener("click", () => {
  modal.style.display = "none";
  intervalID = setInterval(() => {
    change_direction();
    render();
  }, 100);
  timer_interval_id = setInterval( ()=> {
    let [min , sec] = time.split(":").map(Number)
    if (sec === 59) {
      min++
      sec = 0
    }
    else {
      sec++
    }
    time = `${min}:${sec}`
    time_element.textContent = time
  } , 1000)
});

re_btn.addEventListener("click", restart_game);

function restart_game() {
  clearInterval(intervalID);
  clearInterval(timer_interval_id)
  modal.style.display = "none";
  blocks[food.x][food.y].classList.remove("food");
  snake.forEach((segment) => {
    if (blocks[segment.x] && blocks[segment.x][segment.y]) {
      blocks[segment.x][segment.y].classList.remove("fill");
    }
  });
  direction = null;
  curr_score = 0;
  time = "00:00"
  time_element.innerText = time
  xrand = Math.floor(Math.random() * rows);
  yrand = Math.floor(Math.random() * (cols - 3));

  snake = [
    {
      x: xrand,
      y: yrand,
    },
    {
      x: xrand,
      y: yrand + 1,
    },
  ];
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
  intervalID = setInterval(() => {
    change_direction();
    render();
  }, 100);
 timer_interval_id = setInterval( ()=> {
    let [min , sec] = time.split(":").map(Number)
    if (sec === 59) {
      min++
      sec = 0
    }
    else {
      sec++
    }
    time = `${min}:${sec}`
    time_element.textContent = time
  } , 1000)
}
