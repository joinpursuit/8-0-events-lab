// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let currentColor=document.querySelector("#current-color");
let allPalettes=document.querySelectorAll(".color");
for(let div of allPalettes) {
  div.addEventListener("click", e => {
    currentColor.style.backgroundColor= e.target.style.backgroundColor;
  })
}
let currentColor2=document.querySelector("#current-color");
let cells=document.querySelectorAll(".cell");
for(let cell of cells){
  cell.addEventListener("click", e => {
    e.target.style.backgroundColor=currentColor2.style.backgroundColor;
  })
}
// for(let cell of cells) {
//   cell.style.width="25px";
//   cell.style.height="25px";
//   cell.style.margin= 0;
// }
