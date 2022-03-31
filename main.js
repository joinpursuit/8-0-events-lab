// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currentColor = document.querySelector("#current-color");

const palette = document.querySelectorAll("#palette .color");

palette.forEach(color => {
  color.addEventListener("click", (event) =>{
    
    currentColor.style.background = color.style.background

  });
})

const divCell = document.querySelectorAll(".cell");

// const palette = document.querySelectorAll("#palette .color");

divCell.forEach(cell => {
  cell.addEventListener("click", (event) =>{

    
    cell.style.backgroundColor = currentColor.style.background

  });
})

function refreshPage(){
  window.location.reload();
}