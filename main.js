// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
// select all colors
let colors = document.querySelectorAll("#palette .color");
// console.log(colors);

// select the current color
let current = document.getElementById('current-color');
// current.setAttribute("style", "background: null");
// console.log(current);

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
MAKE BUTTON #1 - Clears all colors from canvas
*/
// create `clearButton` button
let clearButton = document.createElement('div');
// set attributes to element
clearButton.setAttribute("class", "clear-button");
clearButton.setAttribute("style", "text-align:center; color: white; background-color: #7e7f9a; border: 3px double white; display:block; margin-left: auto; margin-right: auto; margin-bottom:20px;");
clearButton.textContent = "Clear The Canvas";

// add to body
main.before(clearButton);

// add event listener for button - clears canvas
clearButton.addEventListener("click", ()=>{
  for (let cell of cells){
    cell.style.backgroundColor = "";
  }
})


/*
MAKE BUTTON #2 - Makes canvas all Current Color
*/
// create `oneColor` button
let oneColor = document.createElement('div');
// set attributes to element
oneColor.setAttribute("class", "one-button");
oneColor.setAttribute("style", "text-align:center; color: white; background-color: #7e7f9a; border: 3px double white; display:block; margin-left: auto; margin-right: auto; margin-bottom:20px;");
oneColor.textContent = "One Color Canvas";

// add to body
main.before(oneColor);

// add event listener for button - makes canvas all current color
oneColor.addEventListener("click", ()=>{
  for (let cell of cells){
    cell.style.backgroundColor = current.style.backgroundColor;
  }
})