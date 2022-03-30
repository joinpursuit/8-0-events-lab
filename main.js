// Do not change the code below.
const main = document.querySelector('main');
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.classList.add('cell');
  main.append(div);
}

// You may write your code here!
let currentColorBlock = document.querySelector('#current-color');
let colorPalatte = document.querySelectorAll('div.color');

colorPalatte.forEach((color) => {
  color.addEventListener('click', () => {
    currentColorBlock.style.background = color.style.background;
    console.log('clicked');
  });
});

/* My attempt to make a grid clear button, it doesn't work.
let gridClear = document.querySelector('#button');
let gridCellClear = document.querySelectorAll('div.cell');
gridClear.forEach((cell) => {
  gridClear.addEventListener('click', () => {
    cell.style.background = 'white';
    console.log('Board Cleared');
  });
});
*/
let gridCell = document.querySelectorAll('div.cell');
gridCell.forEach((cell) => {
  cell.addEventListener('click', () => {
    cell.style.background = currentColorBlock.style.background;
  });
});
