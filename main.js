// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
// code above creating the grid 


let divs = document.querySelectorAll(".color");

let selectColor = document.querySelector("#current-color");
  for(let div of divs) { 
    div.addEventListener("click", (event) => {
      selectColor.style.backgroundColor = event.target.style.backgroundColor;
    });
  }

  let cells = document.querySelectorAll(".cell");

  for(let cell of cells) {
    cell.addEventListener("click", (element) => {
      element.target.style.backgroundColor = selectColor.style.backgroundColor;
    });
  }