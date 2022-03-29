// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const palette = document.querySelectorAll(".color");
let currentColor = document.querySelector("#current-color");

palette.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
});

const cells = document.querySelectorAll(".cell")

cells.forEach((cell) => {
  cell.addEventListener("click", () =>{
    cell.style.background = currentColor.style.background
  } )
})