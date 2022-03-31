// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// create a variable currentColor and give it value of - use the document.querySelector to pick the id element current-color
const currentColor = document.querySelector("#current-color");

// create a variable palette and give it value of - use the document.querySelector to pick ALL the id element palette .color nodes from the nodelist 
const palette = document.querySelectorAll("#palette .color");

// iterate through the nodelist of colors
palette.forEach(color => {

  // when a color is "clicked" something EVENT will happen
  color.addEventListener("click", (event) =>{
    
    // the current color style background will change to the color styl background selected with the "click"
    currentColor.style.background = color.style.background

  });
})


// create a variable divCell and give it value of - use the document.querySelector to pick ALL the class element cell nodes from the nodelist 
const divCell = document.querySelectorAll(".cell");

//  iterate through the nodelist of cells
divCell.forEach(cell => {

  // when a cell is "clicked" something EVENT will happen
  cell.addEventListener("click", (event) =>{

    // the cell color style background will change to the current color style background selected with the "click"
    cell.style.backgroundColor = currentColor.style.background

  });
})

function refreshPage(){
  window.location.reload();
}