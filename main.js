// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palettes = document.querySelectorAll('#palette .color')
const currentColor = document.querySelector('#current-color');


palettes.forEach(palette =>{
  palette.addEventListener('click', (event) =>{
   

    currentColor.style.background = palette.style.background
  })
})

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.addEventListener('click', (event) => {
    event.target.style.background = currentColor.style.background
  })
})
