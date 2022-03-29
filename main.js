// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palette = document.getElementsByClassName("color");
const currentColor = document.getElementById("current-color");
const cells = document.getElementsByClassName("cell");

for (let color of palette) {
  color.addEventListener("click", () => {
    currentColor.style.backgroundColor = color.style.backgroundColor;
  });
}

for (let cell of cells) {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor;
  });
}
