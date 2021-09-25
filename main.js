// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!
//Variable created to catch all the colors, using the div class attribute
const colors = document.querySelectorAll('.color');
//Variable created for section id current color
const currColor = document.querySelector('#current-color');
//Loop thru all the colors 
colors.forEach((color) => {
  //If a color is clicked
  color.addEventListener('mousedown', () => {
    //the current color is now the color clicked
    currColor.style.background = color.style.background;
  });
});
//Variable created for all the cells
const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    cell.style.background = currColor.style.background;
  });
});
//Created variable for reset button inside new div element
const resetButton = document.createElement("div");
//Add text to button
resetButton.textContent = `reset 🔄 `;
//Added reset button to end of main with canvas id 
document.querySelector("#canvas").append(resetButton);
//Added functionality
resetButton.addEventListener("click", () => {
  cells.forEach((cell) => (cell.style.background = "none"));
});
//Created variable for second button in new div
const anotherButton = document.createElement("div");
anotherButton.textContent = `change 🖌️ `;
document.querySelector("#canvas").append(anotherButton);
anotherButton.addEventListener("click", () => {
  cells.forEach((cell) => (cell.style.background = currColor.style.background));
});




