// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let divs = document.querySelectorAll(".color");
let currentColor = document.querySelector("#current-color");
for(let div of divs) {
  div.addEventListener("click", (ele)=> {
     currentColor.style.backgroundColor = ele.target.style.backgroundColor;
  })
};

let cells = document.querySelectorAll(".cell");

for(let cell of cells) {
  cell.style.textAlign = "center";
  cell.addEventListener("click", (element)=>{
    
    element.target.style.backgroundColor = currentColor.style.backgroundColor;
    
    switch (element.target.style.backgroundColor) {
      case "black":
        element.target.textContent = "🌛";
        break;
      case "red":
        element.target.textContent = "🍎";
        break;
      case "orange":
        element.target.textContent = "🍊";
        break;
      case "yellow":
        element.target.textContent = "🍌";
        break;
      case "green":
        element.target.textContent = "🥑";
        break;
      case "blue":
        element.target.textContent = "🫐";
        break;
      case "purple":
        element.target.textContent = "🍇";
        break;
      case "white":
        element.target.textContent = "🥥";
        break;
    }
  })
}