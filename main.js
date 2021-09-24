// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// create an array of all the colors
const allColors = document.querySelectorAll(".color");
const currentColor = document.querySelector("#current-color");

// display current color by adding an attribute, style, to match the background color chosen from the palette
allColors.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.setAttribute("style", `background: ${color.style.background}`);
  });
});

// pixel canvas
const cells = document.querySelectorAll(".cell");

// display color in the cells by adding an attribute, style, to match the background color of current color
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.setAttribute("style", `background: ${currentColor.style.background}`);
  });
});
