// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let currentColor = document.querySelector("#current-color");
let colorPalette = document.querySelectorAll("#palette .color");

for(let color of colorPalette){
  color.addEventListener("click", () => {
    currentColor.style.backgroundColor = color.style.backgroundColor;
  })
}



//look over target
