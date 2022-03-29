// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const color = document.querySelectorAll(".color");

const currentColor = document.querySelector("#current-color");

color.forEach (colors => {
  colors.addEventListener("click", (event) => {
    colors.style.background = currentColor.style.background;
  })
})

const cell = document.querySelectorAll("cell");

cell.forEach (cells => {
  cells.addEventListener("click", (event) => {
    cells.style.background = currentColor.style.background;
  })
});