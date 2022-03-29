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
