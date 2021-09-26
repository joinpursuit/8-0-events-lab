// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const allColors = document.querySelectorAll(".color");
const currentColor = document.querySelector("#current-color");

allColors.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.setAttribute("style", `background: ${color.style.background}`);
  });
});

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.setAttribute("style", `background: ${currentColor.style.background}`);
  });
});
