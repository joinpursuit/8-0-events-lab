// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

//declare the paleete 
const palette = document.querySelectorAll("#palette");
//loop through the colors of the cell
palette.forEach((eachColor) => {
  //add an event when a cell is selected
  eachColor.addEventListener('click', (event) => {
    console.log(event);
    //change the color of the current color when a palette color is selected
    document.querySelector('#current-color').style.background = event.target.style.background
  })
})

//add a click listener to the cell when it's clicked
//tranform the cell color to  the color of the color stored in the color
//but it can't change all the cells that are already colored

const cell = document.querySelectorAll(`.cell`);
cell.forEach((eachCell) => {
  eachCell.addEventListener('click', (event) => {
    event.target.style.background =
      document.querySelector('#current-color').style.background
  })
})

// const canvas = document.querySelector("#canvas");
// canvas.addEventListener("click", (event) => {
//   event.target.style.background = document.querySelector("#current-color").style.background;
// });