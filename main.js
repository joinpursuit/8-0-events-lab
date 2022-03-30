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
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor;
  });
}

const resetButton = document.createElement("button");
resetButton.textContent = "RESET";
resetButton.style.width = "10%";
resetButton.style.height = "50px";
resetButton.style.backgroundColor = "black";
resetButton.style.color = "red";
resetButton.style.marginRight = "35%";
document.body.append(resetButton);

resetButton.addEventListener("click", () => {
  for (let cell of cells) {
    cell.style.backgroundColor = "white";
  }
});

const fillCells = document.createElement("button");
fillCells.textContent = "FILL";
fillCells.style.width = "10%";
fillCells.style.height = "50px";
fillCells.style.backgroundColor = "orange";
fillCells.style.color = "black";
fillCells.style.marginRight = "35%";
document.body.append(fillCells);

fillCells.addEventListener("click", () => {
  for (let cell of cells) {
    cell.style.backgroundColor = currentColor.style.backgroundColor;
  }
});

//

// const switchMouseMode = document.createElement("button");
// switchMouseMode.textContent = "CLICKING";
// switchMouseMode.style.width = "10%";
// switchMouseMode.style.height = "50px";
// switchMouseMode.style.backgroundColor = "lightblue";
// switchMouseMode.style.color = "red";
// document.body.append(switchMouseMode);

// switchMouseMode.addEventListener("click", () => {
//   if (switchMouseMode.textContent === "CLICKING") {
//     switchMouseMode.textContent = "HOVERING";
//     for (let cell of cells) {
//       cell.addEventListener("mouseover", () => {
//         cell.style.backgroundColor = currentColor.style.backgroundColor;
//       });
//     }
//   } else {
//     switchMouseMode.textContent = "CLICKING";
//     for (let cell of cells) {
//       cell.addEventListener("click", () => {
//         cell.style.backgroundColor = currentColor.style.backgroundColor;
//       });
//     }
//   }
// });

// function switchingModes() {

// }

// switchingModes();
