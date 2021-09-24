// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// Selecting a DOM element having the class current-color
 let currentColor = document.querySelector('#current-color');

 // Setting default  value to currentColor
 currentColor.style.backgroundColor = '#000000';
