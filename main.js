// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 150; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colors = document.querySelectorAll(".color");

const currentColor = document.querySelector("#current-color");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
});

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
});

//extra features

cells.forEach((cell) => {
  cell.addEventListener("mousedown", () => {
    cell.style.background = currentColor.style.background;
  });
});

const body = document.querySelector("body");
const buttonSection = document.createElement("section");
body.append(buttonSection);

const resetButton = document.createElement("button");
resetButton.textContent = "Click to Reset!";
resetButton.setAttribute("type", "submit");
buttonSection.append(resetButton);

resetButton.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.background = colors[colors.length - 1].style.background;
  });
});
