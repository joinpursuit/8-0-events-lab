// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const palettes = document.querySelectorAll("#palette .color");
const currentColor = document.querySelector("#current-color");
for(let palette of palettes){
  palette.addEventListener("click", (e) => {
    currentColor.style.backgroundColor = e.target.style.backgroundColor; 
  });
}

const cells = document.getElementsByClassName("cell");
for(let cell of cells){
  cell.addEventListener("click", (e) => {
    e.target.style.backgroundColor = currentColor.style.backgroundColor
  })
}

