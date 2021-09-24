// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

//declare var to access color palette
const colors = document.querySelectorAll(".color");
//declare var for current color
const currColor = document.querySelector("#current-color");

//loop through color palette
colors.forEach((color) => {
  //for each color that is clicked on change currColor to that color
  color.addEventListener("click", () => {
    currColor.style.background = color.style.background;
  });
});

//declare var to access all cells
const cells = document.querySelectorAll(".cell");
//loop through all cells
cells.forEach((cell) => {
  //for each cell that is clicked on change color to currColor
  cell.addEventListener("click", () => {
    cell.style.background = currColor.style.background;
  });
});
