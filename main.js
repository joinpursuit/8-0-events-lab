// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!


let palette = document.querySelectorAll('.color')

for (color of palette){
  color.addEventListener('click', (e) => {
    let currentColor = document.querySelector('#current-color');
    currentColor.style.background = e.target.style.background;
  });
}


let cells = document.querySelectorAll('.cell');

for (let cell of cells) {
  cell.addEventListener('click', (e) => {
    let currentColor = document.querySelector('#current-color');
    e.target.style.background = currentColor.style.background;
  });
}

let clearButton = document.createElement('button');
clearButton.setAttribute('type', 'submit');
clearButton.textContent = 'Clear Canvas';
let currentColor = document.querySelector('#current-color');
currentColor.after(clearButton);

clearButton.addEventListener('click', () => {
  for (let cell of cells) {
    cell.style.background = 'white';
  }
});