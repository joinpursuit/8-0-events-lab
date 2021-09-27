// Do not change the code below.
const main = document.querySelector("main");
let size = Number(prompt("enter desired grid size(will be NxN)"));
function numberPrompt(size) {
  if (Number.isNaN(size)) {
    size = Number(prompt("Not a number, please enter a number"));
    return numberPrompt(size);
  } else {
    return size;
  }
}
size = numberPrompt(size);

let boxSize = Number(prompt("enter desired boxSize in pixels"));
function numberPrompt(boxSize) {
  if (Number.isNaN(boxSize)) {
    boxSize = Number(prompt("Not a number, please enter a number"));
    return numberPrompt(boxSize);
  } else {
    return boxSize;
  }
}
boxSize = numberPrompt(size);
for (let i = 0; i < size * size; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.style.background = "white";
  div.style.height = boxSize;
  div.style.width = boxSize;
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
});
colorPicker.append(colorId);
document.querySelector("#palette").append(colorPicker);

//assigning color event
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
  color.addEventListener("click", () => {
    console.log("clicked");
    currentColor.style.background = `${color.style.background}`;
  });
});
const cells = document.querySelectorAll(".cell");
//basic click to change
cells.forEach((cell) => {
  cell.addEventListener("mousedown", (event) => {
    cell.style.background = `${currentColor.style.background}`;
  });
});

//resetButton
const resetButton = document.createElement("button");
resetButton.innerHTML = "reset";
resetButton.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    cell.style.background = "white";
  });
});
document.querySelector("#palette").append(resetButton);

//fillButton
const fillButton = document.createElement("button");
fillButton.innerHTML = "Fill";
fillButton.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    cell.style.background = `${currentColor.style.background}`;
  });
});
document.querySelector("#palette").append(fillButton);

//mouse move test
// function mouseMoveWhileDown(target, whileMove) {
//   const endMove = function () {
//     window.removeEventListener("mousemove", whileMove);
//     window.removeEventListener("mouseup", endMove);
//   };
//   target.addEventListener("mousedown", function (event) {
//     event.stopPropagation(); // remove if you do want it to propagate ..
//     window.addEventListener("mousemove", whileMove);
//     window.addEventListener("mouseup", endMove);
//   });
// }

//Dark mode toggle
const darkButton = document.createElement("button");
darkButton.textContent = "Dark Toggle";
darkButton.onclick = function () {
  document.querySelector("body").classList.toggle("darkMode");
};
document.querySelector("header").after(darkButton);
