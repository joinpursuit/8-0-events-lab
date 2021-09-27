// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// add colors to palette: pink, brown, gray
const palette = document.querySelector("#palette")

const pink = document.createElement("div")
pink.classList.add("color")
pink.style.background = "#FF1493"
palette.append(pink)


const brown = document.createElement("div")
brown.classList.add("color")
brown.style.background = "#8B4513"
palette.prepend(brown)


const gray = document.createElement("div")
gray.classList.add("color")
gray.style.background = "#696969"
palette.prepend(gray)


// create an array of all the colors 
const allColors = document.querySelectorAll(".color")
const currentColor = document.querySelector("#current-color")

// display current color by adding an attribute, style, to match the background color chosen from the palette

allColors.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background
  })
})

// pixel canvas
const cells = document.querySelectorAll(".cell")

// display color in the cells by adding an attribute, style, to match the background color of the current color

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background
  })
})

// Create a button that, when clicked, resets all cells so that they all have a background of white and the solid black 1px border

const lastSection = document.createElement("section")
lastSection.classList.add("buttons")
document.querySelector("body").append(lastSection)

const resetButton = document.createElement("button")
resetButton.textContent = "Reset"
document.querySelector(".buttons").prepend(resetButton)

cells.forEach((cell) => {
  resetButton.addEventListener("click", () => {
    cell.style.border = "1px solid #393e41"
    cell.style.background = "white"
  })
})

// Create a button that, when clicked, changes the color of all of the cells to match the #current-color background color.

const applyColorToAllButton = document.createElement("button")
applyColorToAllButton.textContent = "Apply Color To All"
document.querySelector(".buttons").prepend(applyColorToAllButton)

cells.forEach((cell) => {
  applyColorToAllButton.addEventListener("click", () => {
    cell.style.background = currentColor.style.background
  })
})

// Create a button that, when clicked, changes the black border around cells to match the cell background color.

const showcaseButton = document.createElement("button")
showcaseButton.textContent = "Showcase Your Art"
document.querySelector(".buttons").prepend(showcaseButton)

cells.forEach((cell) => {
  showcaseButton.addEventListener("click", () => {
    cell.style.border = cell.style.background
  })
})