// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}


// You may write your code here!

/**
 * Define frequently used ids, classes and tag for readability
 * 
 * @constant {object} canvas - an object representing a selector with an id of `canvas`
 * @constant {object} currentColorViewer - an object representing a selector with an id of `current-color`
 * @constant {object[]} allCell - a nodeList representing all elements with a class of `cell`
 * @constant {object} header - an object representing a selector with a tagname `h1` 
 */

//Using getElementsByClassName() for `allCells` nodeList because it is a live collection and will update upon DOM tree change
//------X querySelector() is static

const canvas = document.querySelector('#canvas')
const currentColorViewer = document.querySelector('#current-color')
const allCells = document.getElementsByClassName('cell')
// const allCells = document.querySelectorAll('.cell')
const header = document.querySelector('h1')



/**
 * An event listener for "mousedown" which will ask users to enter a new grid size
 * 
 * @event #mousedown
 * @fires callback 
 * @callback () - an anonymous function that remove old `#canvas .cell` and add new `#canvas .cell`
 */

header.addEventListener('mousedown', () => {

  /**
 * Calculate `gridSize` and `.cell` height/width
 * 
 * @constant {number} userInput - a number a user can enter between 2 and 60
 * @constant {number} gridSize- a number calculated using `userInput`**2 to determine the it size/value
 * @constant {number} pxSize - a number calculated by dividing the canvas size in pixels by the `userInput`
 */

  const userInput = Number(prompt('Enter number of rows or columns', 10))
  const gridSize = userInput * userInput
  const pxSize = (500/userInput).toFixed(3)

  //remove `#canvas .cell`
  Array.from(allCells).forEach( cell => {
    cell.remove()
  })
  
  //add user desired number of `#canvas .cell`
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    main.append(div);
  }
  
  //Change grid-template-columns to fit `#canvas .cell`
  canvas.setAttribute('style', `grid-template-columns: repeat(${userInput}, ${pxSize}px)`)
  
  //change `.cell` height/width to fit grid
  document.querySelectorAll('.cell').forEach(cell => {
    cell.style.height = `${pxSize}px`;
    cell.style.width = `${pxSize}px`;
  })

  callMe()
  
})

callMe()

//query all `divs` that are children of `#palette`
document.querySelectorAll('#palette div').forEach(selectedColor =>{
  selectedColor.addEventListener('click', () =>{
    currentColorViewer.style.background = selectedColor.style.background
  })
})

//Add/Remove `active` class to enter and exit draw mode
const toggleActive = e => {
  if (e.type === 'mousedown'){
    canvas.classList.add('active')
    console.log(canvas.classList)
  } else {
    canvas.classList.remove('active')
  }
  // e.preventDefault()
  console.log(e)
};

//click and drag to draw
canvas.addEventListener('mousedown', toggleActive)
addEventListener('mouseup', () => canvas.classList.remove('active'))

function callMe() {
Array.from(allCells).forEach(cell =>{
  cell.addEventListener('mouseover', () => {
    //If the canvas contains a class name 'active', mouseover canvas cells to draw
    if(canvas.className === 'active'){
    cell.style.background = currentColorViewer.style.background
    }
  })

  cell.addEventListener('mousedown', () => {
    cell.style.background = currentColorViewer.style.background
  })
})
}


//RESET: double click current color div to reset the canvas
currentColorViewer.addEventListener('dblclick', () => {
  Array.from(allCells).forEach(cell =>{
    cell.style.background = 'white'
    currentColorViewer.style.background = 'white'
  })
})

//FILL: click current color div to fill canvas with selected color
currentColorViewer.addEventListener('click', () => {
  Array.from(allCells).forEach(cell =>{
    cell.style.background = currentColorViewer.style.background
  })
})

//Listen to change on color wheel to update current color
const input = document.querySelector("input")
input.addEventListener('change', () => {
  currentColorViewer.style.background = input.value
})
