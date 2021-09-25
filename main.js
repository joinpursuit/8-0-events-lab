// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 2500; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const canvas = document.querySelector('#canvas')
const currentColorViewer = document.querySelector('#current-color')
const allCells = document.querySelectorAll('.cell')

//query all divs
document.querySelectorAll('#palette div').forEach(selectedColor =>{
  selectedColor.addEventListener('click', () =>{
    currentColorViewer.style.background = selectedColor.style.background
  })
})


const toggleActive = () => canvas.classList.toggle('active');


//click and drag to draw
allCells.forEach(cell =>{
  cell.addEventListener('mousedown', toggleActive)
  
  cell.addEventListener('mouseup', toggleActive)

  cell.addEventListener('mouseover', () => {
    if(canvas.className === 'active'){
    cell.style.background = currentColorViewer.style.background
    }
  })
  cell.addEventListener('mousedown', () => {
    cell.style.background = currentColorViewer.style.background
  })
})


//RESET: double click current color div to reset the canvas
currentColorViewer.addEventListener('dblclick', () => {
  allCells.forEach(cell =>{
    cell.style.background = 'white'
    currentColorViewer.style.background = 'white'
  })
})

//FILL: click current color div to fill canvas with selected color
currentColorViewer.addEventListener('click', () => {
  allCells.forEach(cell =>{
    cell.style.background = currentColorViewer.style.background
  })
})










