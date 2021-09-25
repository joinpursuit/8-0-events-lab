// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// select the ID of current color

const currentColor = document.querySelector("#current-color")

// Grab the seleted color in the palette which is in a CLASS of "color"

const selectedColor = document.querySelectorAll(".color")  //remember to use QUERYSELECTORALL - and not just query selector, or it won't interate!!! 

// Access the CLASS of cell 

const accessCell = document.querySelector(".cell") 

for (let color of selectedColor) {
  color.addEventListener("click", (event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor
  });
}

