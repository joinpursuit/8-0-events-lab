// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 2500; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const currentColor = document.querySelector("#current-color");
const colors = document.querySelectorAll("div.color");

// > change the background of #current-color 

// > for of loop
// for (const color of colors) {
//   color.addEventListener("click", () => {
//     currentColor.style.background = color.style.background
//   });
// };

colors.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background
  });
});

const cells = document.querySelectorAll("div.cell");

// > change color of the current cell with a click

// > for of loop
// for (const cell of cells) {
//   cell.addEventListener("click", () => {
//   cell.style.background = currentColor.style.background});
// };

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background
  }); 
});

// > change color of the current cell while hovering 

cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.background = currentColor.style.background
  }); 
});


