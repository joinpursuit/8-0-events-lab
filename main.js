// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const current = document.getElementById("current-color");
const colors = document.getElementsByClassName("color");

for (const color of colors) {
  color.addEventListener("click", (event) => {
    current.style.backgroundColor = event.target.style.backgroundColor;
  });
}

const cells = document.getElementsByClassName("cell");
for (const cell of cells) {
  cell.addEventListener("click", (event) => {
    event.target.style.backgroundColor = current.style.backgroundColor;
  });
}
