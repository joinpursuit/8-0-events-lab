// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colorSelect = document.querySelectorAll(".color");
const square = document.getElementById("current-color");
for (let colors of colorSelect) {
  colors.addEventListener("click", () => {
    square.style.background = colors.style.background;
  });
}

const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  cell.addEventListener("click", () => {
    cell.style.background = square.style.background;
  });
}
