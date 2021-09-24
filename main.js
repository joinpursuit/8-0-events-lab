// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
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

let palettes = document.querySelectorAll("#palette .color")
for (let palette of palettes){
palette.addEventListener("click", (event) => {
    let currentColor = document.querySelector("#current-color");
    currentColor.style.backgroundColor = event.target.style.backgroundColor
     
  })
}

let cells = document.querySelectorAll(".cell")
for (let cell of cells){
  cell.addEventListener("click", ()=>{
    let color = document.querySelector("#current-color")
    cell.style.backgroundColor = color.style.backgroundColor
  })
}
