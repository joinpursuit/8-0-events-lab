// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// const colorPalette = document.querySelectorAll('section');
// colorPalette.forEach((palette) => {
//   palette.addEventListener('click', () => {
//     const palette = target.parentNode.querySelector('#palette');
//   })
// })

 let currentColor = document.querySelector('#current-color')
 currentColor.style.backgroundColor = '#FFFFFF';


const paletteColorSection = document.querySelectorAll('#palette div');
paletteColorSection.forEach((palet) => {
  palet.addEventListener('click', (event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor;
  });
});

const mainCells = document.querySelectorAll('main .cell');
mainCells.forEach((cell) => {
  cell.addEventListener('click', (event) => {
    event.target.style.backgroundColor = currentColor.style.backgroundColor; 
  });
});

