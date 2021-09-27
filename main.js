// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const colors = document.querySelectorAll(".color");
for (const color of colors) {
  color.addEventListener("click", (event) => {
    //const palette = event.target.parentNode.querySelector('palette');
    const currentColor = document.getElementById("current-color");
    currentColor.style.background = color.style.background;
    
  });
}


// Add an eventListener to each color
// Colors are clicked through the palette


const cells = document.querySelectorAll('.cell');
  for (const cell of cells) {
    cell.addEventListener("click", (event) => {
      const color = document.getElementById('current-color');
      cell.style.background += color.style.background;
    });
  }


  