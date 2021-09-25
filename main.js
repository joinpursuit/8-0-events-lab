// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!


// Grabbing the current color tag
let currentColor=document.querySelector("#current-color");
// Grabbing all cells using color class
let allPalettes=document.querySelectorAll(".color");
// Adding  event listener to each palette element and changing current element background color
for(let div of allPalettes) {
  div.addEventListener("click", e => {
    currentColor.style.backgroundColor= e.target.style.backgroundColor;
  })
}
// Grabbing the last state of the current element background color
let currentColor2=document.querySelector("#current-color");
// Grabbing canvas element
let canvas=document.getElementById("canvas");
// Grabbing main element
let main2 = document.querySelector("main");
// Creating 9900 more div elements
for (let i = 0; i < 9900; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main2.append(div);
}
// Grabbing all the cells
let cells2=document.querySelectorAll(".cell");
// Changing canvas columns to 100 and 5px
canvas.style.gridTemplateColumns= "repeat(100, 5px)";

// Setting width and height of each cell to 5px and adding event listener to them
for(let cell of cells2){
  cell.style.width="5px";
  cell.style.height="5px";
  cell.addEventListener("click", e => {
    e.target.style.backgroundColor=currentColor2.style.backgroundColor;
  });
}
// Creating reset button
let buttonArr=[{name:"reset"},{name:"same color"}];
for(let i=0; i<2; i++){
  let button=document.createElement("button");
  button.setAttribute("name", buttonArr[i].name);
  button.setAttribute("id", buttonArr[i].name+"-id");
  button.innerText= buttonArr[i].name+" here";
  button.setAttribute("style", "width: 100px; margin: 25px 500px; text-align: center; border-radius:10px; background-color:gray;");
  // select body and add button element
 let body=document.querySelector("body");
 body.append(button);
// adding event to button
 button.addEventListener("click", ()=> {
   if(i===0) {
    location.reload();
   }
   else {
    let currentColor3=document.querySelector("#current-color");
    let canvas=document.getElementById("canvas");
    canvas.style.backgroundColor=currentColor3.style.backgroundColor;
   }

})
}








