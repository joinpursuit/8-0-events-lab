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

const availableColors = document.querySelectorAll(".color")  //remember to use QUERYSELECTORALL - and not just query selector, or it won't interate!!! 

// Access the CLASS of cell 

const accessCell = document.querySelector(".cell") 

for (let color of availableColors) {
  // created a event - and attached it each color of the available colors - this eventListener is listening out for a click action
  color.addEventListener("click", (event) => {
    //cuurent colors styling and background color became equal to the even target's style and background color and style
    currentColor.style.backgroundColor = event.target.style.backgroundColor
  });
}

