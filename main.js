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

let canvas = document.querySelectorAll("#canvas .cell")

for (let cell of canvas){
  let studioGhibliImage2 = document.createElement("img")
  studioGhibliImage2.setAttribute("src", "https://www.pngkey.com/png/full/188-1887025_i-made-a-cute-and-quick-transparent-calcifer.png")
  studioGhibliImage2.setAttribute("alt", "Image of Calcifur")
  studioGhibliImage2.setAttribute("width", "25")

  cell.setAttribute("style", "backgroundColor")

  cell.addEventListener("click", () =>{
    console.log("hello you clicked on a cell")
    cell.style.backgroundColor = currentColor.style.backgroundColor


  })

  cell.addEventListener("mouseover", () => {
    cell.append(studioGhibliImage2)
  })
}
//EXtra 



currentColor.addEventListener("mouseover", () =>{
  let studioGhibliImage1 = document.createElement("img")
  studioGhibliImage1.setAttribute("src", "./ponyo.png")
  studioGhibliImage1.setAttribute("alt", "Image of Ponyo")
  studioGhibliImage1.setAttribute("width", "15")
  currentColor.append(studioGhibliImage1)
})