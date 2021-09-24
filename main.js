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
  div.addEventListener("click", (e) => {
    currentColor.style.backgroundColor = e.target.style.backgroundColor;
  });
}

const squares = document.querySelectorAll(".cell")


for (let square of squares) {
  square.addEventListener("click", (e) => {
    e.target.style.backgroundColor = currentColor.style.backgroundColor
  })
}