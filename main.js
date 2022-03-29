// Do not change the code below.
const main = document.querySelector('main');
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.classList.add('cell');
  main.append(div);
}

// You may write your code here!

const currentColor = document.getElementById('current-color');
const palette = document.getElementById('palette');
const colors = document.querySelectorAll('div.color');

colors.forEach((color) => {
  color.addEventListener('mousedown', () => {
    currentColor.style.backgroundColor = color.style.background;
  });
});

const cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor;
  });
});
