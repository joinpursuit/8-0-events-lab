// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

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
  cell.addEventListener("click", (event) => {
    cell.style.background = currentColor.style.background
  })
})

// Create a button that, when clicked, resets all cells so that they all have a background of white.

const lastSection = document.createElement("section")
lastSection.classList.add("buttons")
document.querySelector("body").append(lastSection)

const resetButton = document.createElement("button")
resetButton.textContent = "Reset"
document.querySelector(".buttons").prepend(resetButton)

cells.forEach((cell) => {
  resetButton.addEventListener("click", () => {
    cell.style.background = "white"
  })
})

// Create a button that, when clicked, changes all of the cells so that they match the #current-color element's background.

const applyColorToAllButton = document.createElement("button")
applyColorToAllButton.textContent = "Apply Color To All"
document.querySelector(".buttons").prepend(applyColorToAllButton)

cells.forEach((cell) => {
  applyColorToAllButton.addEventListener("click", () => {
    cell.style.background = currentColor.style.background
  })
})