// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const currentColor = document.querySelector("#current-color");

const paletteColors = document.querySelectorAll(".color");
for(let palette of paletteColors){
  palette.addEventListener("click", (event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor;
  });
};

//event = paletteColors (it's grabbing all the colors in palette and we can give to event any name)

const cells = document.querySelectorAll(".cell");
for(let cell of cells){
  cell.addEventListener("click", (event)=>{
    event.target.style.backgroundColor = currentColor.style.backgroundColor;
  })
}
//event = cell

