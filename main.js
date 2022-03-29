// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let currentColor = document.getElementById("current-color");
let colors = document.getElementsByClassName("color");
for (let color of colors) {
  color.addEventListener("click", (event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor;
  });
}

let cells = document.getElementsByClassName("cell");
for (let cell of cells) {
  cell.addEventListener("click", (event) => {
    event.target.style.backgroundColor = currentColor.style.backgroundColor;
  });
}
