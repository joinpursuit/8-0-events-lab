// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colorButton = document.querySelectorAll("div.color");
const currentColor = document.querySelector("#current-color");

colorButton.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
});

const canvas = document.querySelectorAll("div.cell");
canvas.forEach((block) => {
  block.addEventListener("mouseover", () => {
    block.style.background = currentColor.style.background;
  });
});

document.getElementById("canvas").style.gridTemplateColumns = "repeat(14, 50px)";
document.getElementById("canvas").style.border = "0px solid #393e41";
document.getElementById("canvas").style.margin = "0 15%";
document.getElementById("current-color").style.margin = "250px 30px 50px 47%";

const resetButton = document.createElement("div");
resetButton.classList.add("reset");
resetButton.style.background = "white";
resetButton.style.border = "2px solid #393e41";
resetButton.style.margin = "10px";
resetButton.style.height = "50px";
resetButton.style.width = "50px";
resetButton.style.display = "inline-block";
document.getElementById("palette").append(resetButton);

canvas.forEach((block) => {
  resetButton.addEventListener("click", () => {
    block.style.background = "white";
  });
});

const allColors = document.createElement("div");
allColors.classList.add("all");
allColors.style.border = "2px solid #393e41";
allColors.style.margin = "10px";
allColors.style.height = "50px";
allColors.style.width = "50px";
allColors.style.display = "inline-block";

document.getElementById("palette").prepend(allColors);

canvas.forEach((block) => {
  allColors.addEventListener("click", () => {
    allColors.style.background = currentColor.style.background;
    block.style.background = currentColor.style.background;
  });
});