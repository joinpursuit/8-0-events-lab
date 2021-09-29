// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
// console.log(cc);

let palettes = document.querySelectorAll("#palette .color");
for(let palette of palettes){
  palette.addEventListener("click", (e) => {
    let currentColor = document.querySelector("#current-color");
    currentColor.style.backgroundColor = e.target.style.backgroundColor; 
  });
}

let cells = document.querySelectorAll(".cell");
for(let cell of cells){
  cell.addEventListener("click", () => {
    let cc = document.querySelector("#current-color");
    cell.style.backgroundColor = cc.style.backgroundColor;
  });
}