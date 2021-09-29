// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!


const currentColor = document.querySelector("#current-color"); 

const colors = document.querySelectorAll(".color");

const cells = document.querySelectorAll(".cell");


// when a color from the bottom is clicked , the color will now be used to paint the cells
for(let color of colors){
  color.addEventListener("click", (event) =>{
    currentColor.style.backgroundColor = event.target.style.backgroundColor;
});
};

// when a cell is clicked in the grid, the color will change based on the color selected
for(let cell of cells){
  cell.addEventListener("click", (event) =>{
    event.target.style.backgroundColor = currentColor.style.backgroundColor;
});
};