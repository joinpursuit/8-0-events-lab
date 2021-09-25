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
  // what is the currently picked color?
  let pickedColor = document.querySelector("#current-color");

  cell.addEventListener("click", (e)=>{
  e.target.style.backgroundColor = pickedColor.style.backgroundColor;
  })
}
