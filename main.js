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
  let studioGhibliImage4 = document.createElement("img");
  studioGhibliImage4.setAttribute("src", "https://www.vhv.rs/dpng/d/511-5115101_transparent-spirited-away-png-spirited-away-no-face.png");
  studioGhibliImage4.setAttribute("alt", "Image of Haku");
  studioGhibliImage4.setAttribute("width", "30");
  
  color.append(studioGhibliImage4);

  color.addEventListener("click", () => {
    currentColor.style.backgroundColor = color.style.backgroundColor;
  })
}

let canvas = document.querySelectorAll("#canvas .cell");

for (let cell of canvas){
  let studioGhibliImage2 = document.createElement("img");
  studioGhibliImage2.setAttribute("src", "https://www.pngkey.com/png/full/188-1887025_i-made-a-cute-and-quick-transparent-calcifer.png");
  studioGhibliImage2.setAttribute("alt", "Image of Calcifur")
  studioGhibliImage2.setAttribute("width", "35");

  cell.setAttribute("style", "backgroundColor");

  cell.addEventListener("click", () =>{
    console.log("hello you clicked on a cell");
    cell.style.backgroundColor = currentColor.style.backgroundColor;
  })

  studioGhibliImage3 = document.createElement("img");
  studioGhibliImage3.setAttribute("src", "https://i.pinimg.com/originals/29/0a/70/290a70e82fcb16e9ce54b452e1604599.png");
  studioGhibliImage3.setAttribute("alt", "Image of Totoro");
  studioGhibliImage3.setAttribute("width", "48");

  cell.addEventListener("mouseover", () => {
    cell.append(studioGhibliImage2);
    cell.append(studioGhibliImage3);
  })
}
//EXtra 



currentColor.addEventListener("mouseover", () =>{
  let studioGhibliImage1 = document.createElement("img");
  studioGhibliImage1.setAttribute("src", "./ponyo.png");
  studioGhibliImage1.setAttribute("alt", "Image of Ponyo");
  studioGhibliImage1.setAttribute("width", "15");
  currentColor.append(studioGhibliImage1);
})