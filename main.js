// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

/* When a color is clicked in the #palette, the #current-color element should have its background changed to that color. For example, if you click the green circle in the #palette, the #current-color element's background should change to be green.*/
let palettes = document.querySelectorAll(".color");
palettes.forEach((palette) => {
  palette.addEventListener("click", () => {
    const currentColor = document.querySelector("#current-color");
    currentColor.style.backgroundColor = palette.style.backgroundColor;
  });
});

// When you click on a .cell, its background should change to match the background of #current-color.
let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const color =
      document.querySelector("#current-color").style.backgroundColor;
    cell.style.backgroundColor = color;
  });
});

// Create a button that, when clicked, resets all cells so that they all have a background of white.
let button = document.createElement("button");
button.textContent = "Reset";
document.querySelector("#palette").append(button);

button.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

// Create a button that, when clicked, changes all of the cells so that they match the #current-color element's background.
let button2 = document.createElement("button");
button2.textContent = "cells to current color";
document.querySelector("#palette").after(button2);

button2.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor =
      document.querySelector("#current-color").style.backgroundColor;
  });
});
