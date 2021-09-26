// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 2500; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// let currentColor = document.querySelector("#current-color");
// let palettes = document.querySelectorAll("#palette .color")
// for (let palette of palettes){
//   let color = document.querySelector("palette.style.background")
// palette.addEventListener("click", () => {
//   currentColor.style.background= "color"
// })
// }

// "palette.style.background"


//changes current color
let palettes = document.querySelectorAll("#palette .color")
for (let palette of palettes){
palette.addEventListener("click", (event) => {
    let currentColor = document.querySelector("#current-color");
    currentColor.style.backgroundColor = event.target.style.backgroundColor
     
  })
}
//change color on canvas 
let cells = document.querySelectorAll(".cell")
for (let cell of cells){
  cell.addEventListener("click", ()=>{
    let color = document.querySelector("#current-color")
    cell.style.backgroundColor = color.style.backgroundColor
  })
}

//create clear button
let clear = document.querySelector(".clear")
for (let cell of cells){
  clear.addEventListener("click", ()=>{
    cell.style.backgroundColor = "white"
  }) 
}



const toggleActive = () => canvas.classList.toggle('active');
let currentColor = document.querySelector("#current-color");
const canvas = document.querySelector('#canvas')

//click and drag to draw
cells.forEach(cell =>{
  addEventListener('mousedown', toggleActive)

  addEventListener('mouseup', toggleActive)

  cell.addEventListener('mouseover', () => {
    if(canvas.className === 'active'){
    cell.style.backgroundColor = currentColor.style.backgroundColor
    }
  })
  cell.addEventListener('mouseup', () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor
  })
})


