// Do not change the code below.
const main = document.querySelector("main");
let size = Number(prompt("enter desired grid size"));
console.log(size);
for (let i = 0; i < size * size; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
document.querySelector(
  "#canvas"
).style.gridTemplateColumns = `repeat(${size}, ${500 / size}px)`;
document.querySelector("#canvas").style.gridTemplateRows = `repeat(${size}, ${
  500 / size
}px)`;
// You may write your code here!
const currentColor = document.querySelector("#current-color");

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
  cell.addEventListener("click", (event) => {
    cell.style.background = `${currentColor.style.background}`;
  });
});

//experimental drag
// cells.forEach((cell) => {
//   cell.addEventListener("mousedown", (event) => {
//     cell.style.background = `${currentColor.style.background}`;
//   });
// });

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
