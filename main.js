// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
/* change header text */
let headerText = document.querySelector("header h1");
headerText.textContent = "Christina's Pixel Painter";
headerText.setAttribute("style", "margin: 0 0 50px; padding: 25px; color:#7e7f9a; background-color:#c6c6cc; border:6px dotted #7e7f9a; text-align:center;")

/* add a NEW color to palette */
// random color generator - from `https://css-tricks.com/randomcolor/`
let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
let onPalette = document.querySelector("#palette");
// fieldset adds text to border
let mysteryColor = document.createElement("fieldset");
let mysteryColorText = document.createElement("legend");
mysteryColorText.textContent = "🔄";

mysteryColor.setAttribute("class", "color");
mysteryColor.style.backgroundColor = randomColor;
mysteryColor.style.height = "77px";
mysteryColorText.style.paddingBottom = "30px";

onPalette.append(mysteryColor);
mysteryColor.append(mysteryColorText);

// Random color changes when clicking text button
mysteryColorText.addEventListener("click", ()=>{
  let newRandomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  mysteryColorText.style.backgroundColor = newRandomColor;
  mysteryColor.style.backgroundColor = newRandomColor;
});



// select all colors
let colors = document.querySelectorAll("#palette .color");

// select the current color
let current = document.getElementById('current-color');

for (let color of colors) {
  color.addEventListener("click", (e) => {
    // adds the style
    current.style.backgroundColor = e.target.style.backgroundColor;
  })
}


// for (let color of colors) {
//   color.addEventListener("click", () => {
//     // console.log("this is your new color");
//     if (color === colors[0]){
//       current.setAttribute("style", "background: black");
//     }
//     if (color === colors[1]){
//       current.setAttribute("style", "background: red");
//     }
//     if (color === colors[2]){
//       current.setAttribute("style", "background: orange");
//     }
//     if (color === colors[3]){
//       current.setAttribute("style", "background: yellow");
//     }
//     if (color === colors[4]){
//       current.setAttribute("style", "background: green");
//     }
//     if (color === colors[5]){
//       current.setAttribute("style", "background: blue");
//     }
//     if (color === colors[6]){
//       current.setAttribute("style", "background: purple");
//     }
//     if (color === colors[7]){
//       current.setAttribute("style", "background: white");
//     }
//   })
// }


// Add event listener for clicking on a cell
// select the current cell
// we want to play with all the `cell` tags, not just 1 `cell` tag
let cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  // what is the currently picked color? `current`
  cell.addEventListener("click", (e)=>{
  e.target.style.backgroundColor = current.style.backgroundColor;
  })
}


/*
Add directions of how to play
*/
let directions = document.createElement("div");
directions.textContent = "How to Play: Choose a color below, then paint the pixels!";
directions.setAttribute("id", "directions");
directions.setAttribute("style", "text-align:center;");
// add to body
main.before(directions);

/*
MAKE CONTAINER FOR BUTTONS
*/
// CONTAINER - for all buttons
let emptyContainer = document.createElement("div");
emptyContainer.setAttribute("class", "button-container");
emptyContainer.setAttribute("style", "text-align:center;");

// add to body
main.before(emptyContainer);

// select button-container where buttons will be stored
let buttonContainer = document.querySelector(".button-container");

/*
MAKE BUTTON #1 - Clears all colors from canvas
*/
// create `clearButton` button
let clearButton = document.createElement('div');
// set attributes to element
clearButton.setAttribute("class", "clear-button");
clearButton.setAttribute("style", "text-align:center; color: white; background-color: #7e7f9a; border: 3px double white; display:inline-block; margin-left: auto; margin-right: auto; margin-bottom:20px; width:150px; border-radius:8px; padding:2px;");
clearButton.textContent = "Clear The Canvas";

// add to body
buttonContainer.append(clearButton);

// add event listener for button - clears canvas
clearButton.addEventListener("click", ()=>{
  cells.forEach(cell => {
    cell.style.backgroundColor = "";
  })
})


/*
MAKE BUTTON #2 - Makes canvas all Current Color
*/
// create `oneColor` button
let oneColor = document.createElement('div');
// set attributes to element
oneColor.setAttribute("class", "one-button");
oneColor.setAttribute("style", "text-align:center; color: white; background-color: #7e7f9a; border: 3px double white; display:inline-block; margin-left: 10px; margin-right: 10px; margin-bottom:20px; width:150px; border-radius:8px; padding:2px;");
oneColor.textContent =
`One Color Canvas`;

// add to body
buttonContainer.append(oneColor);

// add event listener for button - makes canvas all current color
oneColor.addEventListener("click", ()=>{
  cells.forEach(cell => {
    cell.style.backgroundColor = current.style.backgroundColor;
  })
})

/*
MAKE BUTTON #3 - Change to dark mode
*/
// create `darkMode` button
let darkMode = document.createElement('div');
// set attributes to element
// darkMode.setAttribute("class", "darkness");
darkMode.setAttribute("style", "text-align:center; color: white; background-color: #7e7f9a; border: 3px double white; display:inline-block; margin-left: auto; margin-right: auto; margin-bottom:20px; width:150px; border-radius:8px; padding:2px;");
darkMode.textContent = "Dark/Light";

// for dark mode
darkMode.setAttribute("onclick", "myFunction()");

// add to body
buttonContainer.append(darkMode);

// add event listener for button - clears canvas
function myFunction() {
  var element = document.body;
  // dark mode
  element.classList.toggle("dark-mode");
}

// change cursor on canvas
let onCanvas = document.querySelector("#canvas");
onCanvas.setAttribute("style", "cursor: crosshair");

// change cursor on color palette `onPalette`
onPalette.setAttribute("style", "cursor: url('./assets/butterfly.png'),auto;");


// move current under palette
let header = document.querySelector("header");
onPalette.after(current);

// add current color to side of page
directions.append(current);
// style #current-color
current.setAttribute("style", "text-align:center; position:relative;");
// add transparent image over current color
current.innerHTML = "<img src='assets/paintpalette.png' alt='Paintbrush & Palette'/>"
// when clicking on current color, scroll to color palette:
current.addEventListener("click", ()=>{
  palette.scrollIntoView({ behavior: 'smooth', block: 'center' });
})

// Back to top
let backToTop = document.createElement("div");
backToTop.textContent = "Back to Top";
palette.append(backToTop);
backToTop.setAttribute("style", "text-align:center; display:block; margin-left:auto; margin-right:auto; border:2px solid black; padding:4px; width:100px; border-radius:10px;")
// scrolls to top on click event
backToTop.addEventListener("click", ()=>{
  current.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
// back to top button - with current color
backToTop.addEventListener("mouseover", ()=>{
  backToTop.style.backgroundColor = current.style.backgroundColor;
});

// spacer under back to top button
let bottomSpace = document.createElement("div");
backToTop.after(bottomSpace);
bottomSpace.setAttribute("style", "padding-bottom:30px;")


// create favicon using javascript
let favicon = document.createElement("link");
favicon.setAttribute("rel", "icon");
favicon.setAttribute("type", "image/png");
favicon.setAttribute("href", "assets/butterfly.png");

let head = document.querySelector("head");
head.append(favicon);