// Do not change the code below.
const main = document.querySelector("main");
//prompt for grid dimensions
let size = Number(prompt("enter desired grid size N(will be NxN)"));
function numberPrompt(size) {
  if (Number.isNaN(size) || size === 0) {
    size = Number(prompt("Not a number, please enter a number"));
    return numberPrompt(size);
  } else {
    return size;
  }
}
size = numberPrompt(size);
//prompt for box size
let boxSize = Number(prompt("enter desired box size in pixels"));
boxSize = numberPrompt(boxSize);
for (let i = 0; i < size * size; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.style.background = "white";
  div.style.height = `${boxSize}px`;
  div.style.width = `${boxSize}px`;
  main.append(div);
}
const canvas = document.querySelector("#canvas");
canvas.style.height = `${size * boxSize}px`;
canvas.style.width = `${size * boxSize}px`;
canvas.style.gridTemplateColumns = `repeat(${size}, ${boxSize}px)`;
canvas.style.gridTemplateRows = `repeat(${size}, ${boxSize}px)`;
// You may write your code here!
const currentColor = document.querySelector("#current-color");
currentColor.style.background = "white";

//specific color element
const colorPicker = document.createElement("div");
colorPicker.classList.add("color");
colorPicker.style.background = "white";

colorPicker.textContent = "custom";
colorPicker.addEventListener("input", () => {
  colorPicker.style.color = colorPicker;
});
const colorId = document.createElement("input");
colorId.type = "color";
colorId.addEventListener("input", () => {
  colorPicker.style.background = colorId.value;
  currentColor.style.background = colorId.value;
  fillButton.style.background = colorId.value;
});
colorPicker.append(colorId);
document.querySelector("#palette").append(colorPicker);

//assigning color event
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
  color.addEventListener("click", () => {
    console.log("clicked");
    currentColor.style.background = `${color.style.background}`;
    fillButton.style.background = color.style.background;
  });
});
const cells = document.querySelectorAll(".cell");
//basic click to change
cells.forEach((cell) => {
  //added dragover, is there a way to make it more instant/responsive?
  cell.addEventListener("dragover", (event) => {
    cell.style.background = `${currentColor.style.background}`;
  });
  cell.addEventListener("mousedown", (event) => {
    cell.style.background = `${currentColor.style.background}`;
  });
});

//resetButton
const resetButton = document.createElement("button");
resetButton.innerHTML = "reset";
resetButton.classList.add("color");
resetButton.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    cell.style.background = "white";
  });
});
resetButton.style.background = "white";
document.querySelector("#palette").append(resetButton);

//fillButton
const fillButton = document.createElement("button");
fillButton.innerHTML = "Fill";
fillButton.classList.add("color");
fillButton.style.background = "white";
fillButton.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    cell.style.background = `${currentColor.style.background}`;
  });
});
document.querySelector("#palette").append(fillButton);

//Dark mode toggle
const darkButton = document.createElement("button");
darkButton.textContent = "Dark Toggle";
darkButton.onclick = function () {
  document.querySelector("body").classList.toggle("darkMode");
};
darkButton.style.margin = "0px 20px 20px";
document.querySelector("header").after(darkButton);
