// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {// loop up to 100
  const div = document.createElement("div");// create each <div>
  div.classList.add("cell");//resulting in 100 <divs> i.e. "cells" within <body>
  main.append(div);//adding to complete #canvas
}

// You may write your code here!

// for each
// Section
// onclick 
// change <section> #current-color backgroundColor to #pallete .color clicked

// event lister on every cell.  

let currentColor = document.querySelector("#current-color");// choosing the current color block
// console.log(currentColor.style.backgroundColor);


let selectColor = document.querySelectorAll( ".color");// chosing the .color values in #palette
//console.log(selectColor); Trying to console log here but nothing is working **

for(let color of selectColor){// looping throgh all .color values
  color.addEventListener("click", (c)=>{// for each value , when I click 
    currentColor.style.backgroundColor = c.target.style.backgroundColor;// the currentColor backgroundColor will change to target backgroundColor
  });
}


let cells = document.querySelectorAll(".cell");// grab every cell

for (let cell of cells){// add event listener to each 
  cell.addEventListener("mousedown", (box)=>{// need to find something better than mousedown
    box.target.style.backgroundColor = currentColor.style.backgroundColor;// so when a box, .cell , is clicked, its overridded to current color
  });
}
//e.target.style.backgroundColor
// why is style = "background"in html different than css style.backgroundColor