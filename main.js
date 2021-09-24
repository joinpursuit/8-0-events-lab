// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// creates an array like thing that you can select and iterate through
let paletteColors = document.querySelectorAll(".color")
let currentColor = document.querySelector("#current-color")

// iterate through the colors in your palette and add a click even so that
// when a palatte color is picked it changes current color to that color 
for(let color of paletteColors) {
  color.addEventListener("click", (e) => {
    // sets current color to the color that was clicked on the palette
     currentColor.style.backgroundColor = e.target.style.backgroundColor
  })
}

// create an array like thing with your so you can add an
// click event that changes the color of the cell to the current color
let cells = document.querySelectorAll(".cell")

// loop through cells and add click event
for(let cell of cells) {
  cell.addEventListener("click", (e) => {
    // set target cell color to equal what current color chosen is
    e.target.style.backgroundColor = currentColor.style.backgroundColor
  })
}

// for(let cell of cells) {
//   cell.addEventListener("click", () => {
//     e.target.setAttribute("style", `background: {currentColor.style.background}`)
//   })
// }