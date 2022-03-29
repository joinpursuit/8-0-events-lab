// Do not change the code below.
const main = document.querySelector('main')
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  main.append(div)
}

// You may write your code here!
const current = document.getElementById('current-color')
const colors = document.querySelectorAll('.color')
const cells = document.querySelectorAll('.cell')

colors.forEach((color) =>
  color.addEventListener('click', () => {
    current.style.background = color.style.background
  })
)

cells.forEach((cell) =>
  cell.addEventListener('click', () => {
    cell.style.background = current.style.background
  })
)
