// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!

// Selecting a DOM element having the class current-color
 let currentColor = document.querySelector('#current-color');

 // Setting default  value to currentColor
 currentColor.style.backgroundColor = 'white';

// Selecting a list of DOM elements (HTMLCollection) from div tags having palette class
const paletteColorSection = document.querySelectorAll('#palette div');
paletteColorSection.forEach((palet) => {

  //Calling event listener on each DOM element
  palet.addEventListener('click', (event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor;
  });
});

// Selecting a list of DOM elements (HTMLCollection) from main tags  having cell class
const mainCells = document.querySelectorAll('main .cell');
mainCells.forEach((cell) => {
    //Calling event listener on each DOM element
  cell.addEventListener('mouseover', (event) => {

//console.log(event.target)    
    event.target.style.backgroundColor =  currentColor.style.backgroundColor; 
  });

});


const btnReset = document.querySelector('.btn')
const resetButton = () =>{
  // for ( let i = 0; i < mainCells.length; i++){
  //   const cell = mainCells[i];
  //   cell.style.backgroundColor = '#ffffff';
  // }
  const eachCell = (cell) => cell.style.backgroundColor = '#ffffff';
  mainCells.forEach(eachCell)

}

btnReset.addEventListener('click', resetButton)


const btnColorMatch = document.querySelector('.btn-current')
const colorMatch = () =>{

  const eachCell = (cell) => cell.style.backgroundColor = currentColor.style.backgroundColor;
  mainCells.forEach(eachCell)

}

btnColorMatch.addEventListener('click', colorMatch)