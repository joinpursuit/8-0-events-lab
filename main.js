// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const divs = document.querySelectorAll(".color");
const currentColor = document.querySelector("#current-color");
for (let div of divs) {
  div.addEventListener("click", (event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor
  });
}

const cells = document.querySelectorAll(".cell")
for (let cell of cells) {
  cell.addEventListener("click", (event) => {
    event.target.style.backgroundColor = currentColor.style.backgroundColor
  })
}


const resetRefresh = document.querySelector("input")
resetRefresh.addEventListener("click", (event) => {
  window.location.reload("Refresh")
});