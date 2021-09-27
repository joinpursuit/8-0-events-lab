// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const allColor = document.querySelectorAll(".color");
const selectedColor = document.querySelector("#current-color");

for (const color of allColor) {
  color.addEventListener("click", () => {
    selectedColor.style.background = color.style.background;
  });
}

const allCells = document.querySelectorAll(".cell");

for (const cell of allCells) {
  cell.addEventListener("click", () => {
    cell.style.background = selectedColor.style.background;
  });
}
