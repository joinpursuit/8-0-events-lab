// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const currentColor = document.getElementById("current-color");
const colorPalette = document.getElementsByClassName("color");
const reset = document.getElementById("reset");

for (let color of colorPalette) {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
}

const cells = document.getElementsByClassName("cell");

for (let cell of cells) {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
}

reset.addEventListener("click", () => {
  for (let cell of cells) {
    cell.style.background = reset.style.background;
  }
});
