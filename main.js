// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colors = document.querySelectorAll('#palette .color')
const current = document.querySelector('#current-color');
current.setAttribute(`style`, `background: #FFF`)
const cells = document.querySelectorAll('#canvas .cell')
for(let cell of cells){
  cell.addEventListener('click', () => {
    cell.setAttribute(`style`, `background: ${current.style.backgroundColor}`)
  })
}
for(let color of colors){
  color.addEventListener('click', () => {
    current.setAttribute(`style`, `background: ${color.style.backgroundColor}`)
  })
}