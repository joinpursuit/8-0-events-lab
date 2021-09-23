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
    console.log(typeColor);
    currentColor.setAttribute("style", "background-color: ${typeColor}");
  });
}
