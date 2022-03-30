// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
//
//
const colorPick = document.querySelectorAll(".color")
const currentColor = document.querySelector("#current-color")
for (let color of colorPick) {
  color.addEventListener("click", (event) => {
    color.style.background = currentColor.style.background
  })
}
//
//
//
const cellChange = document.querySelectorAll("cell")
for (let cell of cellChange) {
  cell.addEventListener("click", (event) => {
    cell.style.background = currentColor.style.background
  })
}