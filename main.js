let notYellow = [
  0, 1, 8, 9, 10, 19, 80, 89, 90, 91, 98, 99, 32, 37, 62, 67, 73, 74, 75, 76,
];
let black = [32, 37, 62, 67, 73, 74, 75, 76];

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
let typeColor;

for (let color of allColors) {
  color.addEventListener("click", (event) => {
    typeColor = event.target.style.background;
    currentColor.setAttribute("style", `background-color: ${typeColor}`);
  });
}
typeColor = currentColor.style.background.color;

const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  cell.addEventListener("click", (event) => {
    console.log(typeColor);
    cell.setAttribute("style", `background-color: ${typeColor}`);
  });

  cell.addEventListener("mousedown", (event) => {
    console.log(typeColor);
    cell.setAttribute("style", `background-color: ${typeColor}`);
  });
}

document.querySelector("#smileBtn").addEventListener("click", (event) => {
  for (let i = 0; i < cells.length; i++) {
    if (!notYellow.includes(i)) {
      cells[i].style.backgroundColor = "yellow";
    } else if (black.includes(i)) {
      cells[i].style.backgroundColor = "black";
    }
  }
});

document.querySelector("#reset").addEventListener("click", (event) => {
  window.location.reload();
});
