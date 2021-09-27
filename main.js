// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 200; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

//Created new div for new color
const addColor = document.createElement("div");
//Added a class of color to new div
addColor.classList.add("color");
//Added color to class
addColor.style.background = "lightblue";
//Added new color to end of palette of colors
document.querySelector("#palette").append(addColor);

// You may write your code here!

//declare var to access color palette
const colors = document.querySelectorAll(".color");
//declare var for current color
const currColor = document.querySelector("#current-color");

//loop through color palette
colors.forEach((color) => {
  //for each color that is clicked on change currColor to that color
  color.addEventListener("mousedown", () => {
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

//create button
const resetButton = document.createElement("div");
//add text to button
resetButton.textContent = `🔄`;
//add button
document.querySelector("#canvas").append(resetButton);
//add functionality
resetButton.addEventListener("click", () => {
  cells.forEach((cell) => (cell.style.background = "none"));
});

//Created variable for second button in another new div
const anotherButton = document.createElement("div");
//add text to button
anotherButton.textContent = `🖌️ `;
//add button to canvas
document.querySelector("#canvas").append(anotherButton);
//add functionality
anotherButton.addEventListener("click", () => {
  cells.forEach((cell) => (cell.style.background = currColor.style.background));
});

//Create button
const darkMode = document.createElement("div");
//add text
darkMode.textContent = "🌗";
darkMode.setAttribute("onclick", "myFunction()");
//add button to canvas
document.querySelector("#canvas").append(darkMode);
//add functionality
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
