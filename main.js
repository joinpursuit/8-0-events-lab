// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {// loop up to 100
  const div = document.createElement("div");// create each <div>
  div.classList.add("cell");//resulting in 100 <divs> i.e. "cells" within <body>
  main.append(div);//adding to complete #canvas
}  

let currentColor = document.querySelector("#current-color");// choosing the current color block

let selectColor = document.querySelectorAll( ".color");// chosing the .color values in #palette

for(let color of selectColor){// looping throgh all .color values
  color.addEventListener("click", (c)=>{// for each value , when I click 
    currentColor.style.backgroundColor = c.target.style.backgroundColor;// the currentColor backgroundColor will change to target backgroundColor
  });
}


let cells = document.querySelectorAll(".cell");// select every cell

for (let cell of cells){
  cell.addEventListener("mousedown", (box)=>{// add event listener to each 
    box.target.style.backgroundColor = currentColor.style.backgroundColor;// so when cell is clicked, it is overridden to current color
  });
}
let clear = document.querySelector("button")
  clear.addEventListener("click", ()=>{
    currentColor.style.backgroundColor = "white";
    cells.forEach(cell=> cell.style.backgroundColor= "#3f427c");
})
