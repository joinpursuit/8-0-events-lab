// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palette = document.querySelectorAll('.color');
palette.forEach(color => {
  color.addEventListener('click', (e) => {
    const backgroundColor = color.style.background
    const currentColor = document.querySelector('#current-color');
    currentColor.setAttribute('style', `background: ${backgroundColor}`)
  })
})
const cells = document.querySelectorAll('.cell');
console.log(cells)
cells.forEach(cell => {
  cell.addEventListener('mouseover', (e) => {
    const currentColor = document.querySelector('#current-color');
    const backgroundColor = currentColor.style.background
    cell.setAttribute('style', `background: ${backgroundColor}`)
  
  })
})