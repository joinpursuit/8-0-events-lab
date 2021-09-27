// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 2500; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
// We get #current color
// We get colors from #palette
// We change current color's color to that color

// When a color from the palette gets clicked, change current-color's color to that color
//

// Declare a variable that holds a value of #current-color

const paletteColor = document.querySelectorAll("#palette .color");

let currentColor = document.querySelector("#current-color");

paletteColor.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
});

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
});

const reset = document.createElement("div");
reset.classList.add("clear");

document.querySelector("#canvas").before(reset);

reset.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.background = "white";
  });
});

const fillIn = document.querySelector(".rainbow-button");

fillIn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.background = currentColor.style.background;
  });
});
