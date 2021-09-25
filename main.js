// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 200; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
};

//Created new div for new color
const addColor = document.createElement('div');
//Added a class of color to new div
addColor.classList.add('color');
//Added color to class
addColor.style.background = 'lightblue';
//Added new color to end of palette of colors
document.querySelector('#palette').append(addColor);

//Variable created to hold all colors using element class
const colors = document.querySelectorAll('.color');
//Variable created for section id current color
const currColor = document.querySelector('#current-color');
//Loop thru all the colors 
colors.forEach((color) => {
  //If a color is clicked/mousedown
  color.addEventListener('mousedown', () => {
    //the current color is now the color clicked
    currColor.style.background = color.style.background;
  });
});

// let palettes = document.querySelectorAll("#palette .color")
// for (let palette of palettes){
// palette.addEventListener("click", (event) => {
//     let currentColor = document.querySelector("#current-color");
//     currentColor.style.backgroundColor = event.target.style.backgroundColor
//   })
// };

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

//Created variable for second button in another new div
const anotherButton = document.createElement("div");
anotherButton.textContent = `change 🖌️ `;
document.querySelector("#canvas").append(anotherButton);
anotherButton.addEventListener("click", () => {
  cells.forEach((cell) => (cell.style.background = currColor.style.background));
});








