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

const accessCell = document.querySelectorAll(".cell")

// Acceess the entire canvas

const accessEntire = document.querySelector("#canvas")

const colorBlockBtn = document.querySelector("#color-block-button")

function colorSelection() {
  for (let color of availableColors) {
    // created a event - and attached it each color of the available colors - this eventListener is listening out for a click action
    color.addEventListener("click", (event) => {
      //cuurent colors styling and background color became equal to the even target's style and background color and style
      currentColor.style.backgroundColor = event.target.style.backgroundColor
    });
  }
}


function cellBlock() {
  for (let cell of accessCell) {
    cell.addEventListener("click", (event) => {
      //Remember to used QUERYSELECTER ALL!! Target was not working 
      event.target.style.backgroundColor = currentColor.style.backgroundColor
    });
  }
}



function colorBlock() {

  //remember that query selector!!! Select of ID of color block button I created. Done above.


  //here I can apply the event listener to my selected button
  colorBlockBtn.addEventListener("click", (event) => {
    for (let color of availableColors) {
      color.addEventListener("dblclick", (event) => {
        accessEntire.style.backgroundColor = event.target.style.backgroundColor
      });
    }
  });
}

//colorBlock PsuedoCode

/* For this function I want:
1. User to be able to click on the button
2. After button is clicked, they are prompted to click a color (but not take an input directly into prompt just be instructed)
3. Once a color is clicked the entire palette blocks out the color (hint I have already created this sucessfully)


*/






colorSelection()
cellBlock()
colorBlock()