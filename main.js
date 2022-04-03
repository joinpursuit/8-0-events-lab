// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

//When a color is clicked in the `#palette`, the `#current-color` element should have its background changed to that color. For example, if you click the green circle in the `#palette`, the `#current-color` element's background should change to be green.
const divAll = document.querySelectorAll(".color");
const currentColor = document.querySelector("#current-color");

divAll.forEach((div) => {
  div.addEventListener("click", (event) => {
    currentColor.setAttribute(
      "style",
      `background-color: ${event.target.style.backgroundColor}`
    );
    //console.log(event.target.style);
    //console.log(event.target.style.backgroundColor);
    //console.log(event.target);
  });
});

//When you click on a `.cell`, its background should change to match the background of `#current-color`.

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    event.target.setAttribute(
      "style",
      `background-color: ${currentColor.style.backgroundColor}`
    );
  });
});

//Increase the number of cells without increasing the width or height of the `#canvas` element.

//Change the event listener so that instead of clicking to fill a color, you hold down your mouse.

/* 
Once the mouse pushes down on a cell it instantly changes, there is no delay compared to the "click" action requires the click on the off beat.

const cells = document.querySelectorAll(".cell");
 cells.forEach((cell) => {
  cell.addEventListener("mousedown", (event) => {
   event.target.setAttribute(
    "style",
    `background-color: ${currentColor.style.backgroundColor}`
         );
 });
 });
  */

//Create a button that, when clicked, resets all cells so that they all have a background of white.
const button = document.createElement("button");
currentColor.after(button);
button.innerText = "Reset";
button.setAttribute("style", "margin: 25px auto; display: block");

button.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    cell.setAttribute("style", "background: white;");
    console.log(cell.style);
  });
});

//Create a button that, when clicked, changes all of the cells so that they match the `#current-color` element's background.

const button2 = document.createElement("button");
currentColor.before(button2);
button2.innerText = "Fill All";
button2.setAttribute("style", "margin: 25px auto; display: block");

button2.addEventListener("click", (event) => {
  cells.forEach((cell) => {
    cell.setAttribute(
      "style",
      `background-color: ${currentColor.style.backgroundColor}`
    );
  });
});
