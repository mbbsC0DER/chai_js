let main_block = document.querySelector("#arena");
let block_height = 20;
let block_width = 20;
const cols = Math.floor(main_block.clientWidth / block_width);
const rows = Math.floor(main_block.clientHeight / block_height);
const blocks = [] ;
let xrand = Math.floor(Math.random() * (rows))
let yrand = Math.floor(Math.random() * (cols - 3))
const snake = [
    {
        x : xrand,
        y : yrand
    },
    {
        x : xrand,
        y : yrand + 1
    },
    {
        x : xrand,
        y : yrand + 2
    }
]

// for (let i = 0 ; i < cols * rows ; i++){
//     let block = document.createElement("div")
//     block.classList = "block"
//     main_block.appendChild(block)
// }

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const block = document.createElement("div");
    block.classList = "block";
    main_block.appendChild(block);
    // block.innerText = `${i}x${j}`
    blocks[`${i}-${j}`] = block
  }
}

function render (){
    snake.forEach( segment => {
        let select = blocks[`${segment.x}-${segment.y}`]
        select.classList = "fill"
    })
}
setInterval(() => {
    render()
}, 300);

window.addEventListener( "keydown" , ()=>{

})