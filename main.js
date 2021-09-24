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
  color.addEventListener('click', () => {
    //the current color is now the color clicked
    currColor.style.background = color.style.background;
  });
});

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    cell.style.background = currColor.style.background;
  });
});



